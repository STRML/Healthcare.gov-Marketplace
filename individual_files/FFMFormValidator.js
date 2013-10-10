/**
 * @fileOverview Contains code related to the FFM FormValidator class
 * @author <a href="hans.hillen@cgifederal.com">Hans Hillen</a>
 * @version 1.7b
 */

if (!FFM) {
	/**
	 * @namespace Global namespace for FFM related classes (such as FormValidator) and other relevant properties
	 */
	var FFM = {};
}

/**
 * Stores all FormValidator objects that are automatically created based on the data-validationgroup attribute on a page
 * @type {FormValidator[]}
 */
FFM.validators = []; 

(function( $ ) {
	/* Do not modify these: */ 
	/**
	 * @property {number} allows creation of unique IDs if multiple FFMFormValidator instances are created on a page
	 */
	var idCounter = 0; 
	var staticHandlerReady = false; // Determines whether the global key event handler has already been added to the page
	
	/** 
	 * @class Represents a FormValidator for a specific container. Create a new instance using the 'new' keyword
	 * @memberof FFM
	 * @param {HTMLElement|jQuery} formGroupElement The container that this instance's validation logic applies to
	 * @param {HTMLElement|jQuery} [triggerElement] DOM reference to the element that triggers bucket collection
	 * @param {object} [customRulesObject] Optional object containing a set of validator rules to add to or replace default rules  
	 */
	function FormValidator(formGroupElement, triggerElement, customRulesObject) {
		
		/* PRIVATE VARIABLES */
		
		/* DO NOT MODIFY THESE */
		var that = this; //reference to class instance in environments where 'this' is already used for something else (e.g. event handler)
		var _nbsp = str=document.createTextNode('\u00A0'); // &nbsp; entity (use cloneNode() to duplicate)
		var _$formGroupContainer, _$formGroupTrigger, _$allFields, _$fieldsToValidate, _$fieldsetsToValidate, _$invalids = $([]);
		var _validationFailedHandler, _validationCompletedHandler;
		var _idIndex = idCounter++, _bucketCollectedFields = {};
		/* 
		 *Keeps track of the timeouts set for validators that are waiting for an asynchronous callback
		 *Each key is a ruleId, each value is a timeout identifier
		 */
		var _timeouts = {}, 
			_timeoutsNumbered = [], 
			_focusOutTimeouts = {};
		
		// the private variables below may be modified  
		
		/** Set of validator rules. Default rules must be defined in FFMFormValidatorConfig.js that loads before this class, on FFM.defaultValidatorRules
		 * Each rule is identified by a ruleId as key, and a two or three item array as value. The array must be populated as follows: 
		 * [0] (required) : The validation logic. Can be either a regular expression (both strings and actual RegEx instances are accepted ) or a callback (see updateRuleLogic() for more info).
		 * [1] (required) : The error message HTML string to be displayed when the rule is not matched.
		 * [2] (optional) : The success message HTML string to be displayed when the rule is matched. 
		 * NOTE: a third index may be used by the script to store rule arguments for the rule's callback. 
		 * These arguments can be specified as dash separated values to the ruleID in the data-validate attribute, e.g. checkboxGroupRange-1-5 
		 * These default rules (or their parts) can be overwritten by individual teams through setRules(), setRule(), updateRuleLogic(), updateRuleInvalidHTML(), and  updateRuleValidHTML()
		 * NOTE: A field can only have ONE rule that uses an asynchronous callback and/or a success message, and this rule MUST be the last ruleId in the field's data-validate property
		 * NOTE: FFM teams should add, remove or modify these default rules where applicable
		 * @type Object 
		 */
		var _validatorRules = FFM.defaultValidatorRules ? FFM.defaultValidatorRules : {};
		
		/** Object containing Localized strings, where each key is a locale code, and each value is a nested object containing the 
		 * individual string IDs and their localized translation. These values need to be defined in FFMFormValidatorConfig.js as FFM.validatorStrings
		 * Localized strings may use %s as place holders for parameters.
		 * Note that these strings should only be used for fixed language used by this class, strings related to the actual rules should be localized by overwriting them,
		 * e.g. using setRule(), updateRuleInvalidHTML(), and updateRuleValidHTML()    
		 * The current locale is determined by the static variable FormValidator.currentLocale. Changing it will change the local for all FormValidator instances on the page.
		 * If FormValidator.currentLocale is set to a local that is not defined here, it will default to en_us
		 * Note: FFM can add more locales as needed. As the FormValidator class evolves, additional strings may be added to each locale.
		 * @type object
		 */
		var _strings = FFM.validatorLocalizedStrings ? FFM.validatorLocalizedStrings : {};
		
		/**
		 * How long to wait for asynchronous validation callbacks before they timeout. Must be modified in FFMFormValidatorConfig.js as FFM.validatorAsyncTimeoutDuration
		 * @type number
		 */
		var _asyncTimeoutDuration = FFM.validatorAsyncTimeoutDuration !== undefined ? FFM.validatorAsyncTimeoutDuration : 3000; 
		
		/**
		 * HTML strings used to generate the elements of the form validation summary list and inline errors.
		 * May only be overridden in FFMFormValidatorConfig.js if you know what you're doing, NOT here
		 * @type Object
		 */
		var _markupStrings = {
			summaryHeading: "<h2></h2>",
			summarycontainer: "<div></div>",
			summaryList: "<ul></ul>",
			summaryListItem: "<li></li>",
			summaryListLink: "<a></a>",
			inlineFeedbackItem: "<span></span>"
		};

		//override markup strings if available 
		if (FFM.validatorHTMLStrings) {
			$.each(_markupStrings, function(key, value){
				if (FFM.validatorHTMLStrings[key]) {
					_markupStrings[key] = FFM.validatorHTMLStrings[key] 
				}
			}); 
		}
		
		/**
		 * Optional custom logic to determine after which element to place the inline error message.
		 * Use this for situations where the default logic (after field itself, after form hint, after fieldset legend, after custom checkbox) is not sufficient.
		 * May only be overridden in FFMFormValidatorConfig.js if you know what you're doing, NOT here
		 * @param $field
		 * @return The element after which the error message should be placed. Return null if not used
		 */
		var _customLogicForElementToFollow = function() {
			return null;
		}
		
		if (FFM.customLogicForElementToFollow && typeof FFM.customLogicForElementToFollow == "function") {
			_customLogicForElementToFollow = FFM.customLogicForElementToFollow;
			
		}
		
		/* END PRIVATE VARIABLES */
		
		/* PUBLIC VARIABLES */
		
		/** Experimental: add link pointing to the next invalid field for each invalid field. Not ready to be used in the wild 
		 * @boolean
		 * @ignore
		 */
		this.useNextErrorLinks = false; 
		
		/* END PUBLIC VARIABLES */
		
		/* PUBLIC METHODS */ 
		
		/* GETTERS & SETTERS */
		
		/**
		 * Returns the fields in the FormValidator instance that currently have an invalid value
		 * @returns {jQuery}  
		 */
		this.getInvalids = function() {
			return _$invalids;
		};
		
		/**
		 * Returns the trigger element for this FormValidator instance
		 * @returns {HTMLElement}
		 */
		this.getTrigger = function() {
			return _$formGroupTrigger;
		};
		
		/**
		 * Changes this FormValidator's trigger element
		 * @param {HTMLElement|jQuery|string} trigger
		 * @throws {Error} if no valid trigger element is provided 
		 */
		this.setTrigger = function(trigger) {
			var $newTrigger = _getElem(trigger);
			/* if triggerElement was not specified, see if it can be determined another way */
			if (!$newTrigger.length) {
				$newTrigger = $("[data-validationtrigger]", _$formGroupContainer); 
			}
			if (!$newTrigger.length) {
				if (_$formGroupContainer.is("form")) {
					_$formGroupContainer.submit(_onFormSubmit);
					_$formGroupTrigger = _$formGroupContainer;
				} else {
					throw new Error("FormValidator requires a valid trigger element");
					return;
				}
			} else {
				_$formGroupTrigger = $($newTrigger);
				_$formGroupTrigger.click(_onFormSubmit);
			}
		};
		
		/**
		 * Returns the container element associated with this FormValidator instance
		 * @returns {jQuery} 
		 */
		this.getContainer = function() {
			return _$formGroupContainer;
		};
		
		/**
		 * (deprecated) Changes the container element associated with this FormValidator instance.
		 * @deprecated, usage not recommended since this method has not been properly tested and may be buggy
		 * @param {HTMLElement|jQuery|string} container The container element to use from now on
		 * @throws {Error} if no valid container element is provided 
		 */
		this.setContainer = function(container) {
			var $newContainer = _getElem(container);
			if (!$newContainer.length) {
				throw new Error("FormValidator requires a valid container element");
			} else {
				_$formGroupContainer = $($newContainer);
				_$formGroupContainer.addClass("validatorFormGroup");
			}
		};
		
		/**
		 * Returns the currently assigned validationCompletedHandler, if any
		 * @returns {function} 
		 */
		this.getValidationCompletedHandler = function() {
			return _validationCompletedHandler;
		};
		
		/**
		 * Changes the validationCompletedHandler method, which will be called when bucket collection completes without errors
		 * @param {function} callback
		 * @throws {Error} if callback is not a function 
		 */
		this.setValidationCompletedHandler = function(callback) {
			if (typeof callback !== "function") {
				throw new Error("setValidationCompletedHandler must be a function");
			} else {
				_validationCompletedHandler = callback;
			}
		};
		
		/**
		 * Returns the currently assigned validationFailedHandler, if any
		 * @returns {function} 
		 */
		this.getValidationFailedHandler = function() {
			return _validationFailedHandler;
		};
		
		/**
		 * Changes the validationFailedHandler method, which will be called when bucket collection completes with errors
		 * @param {function} callback
		 * @throws {Error} if callback is not a function 
		 */
		this.setValidationFailedHandler = function(callback) {
			if (typeof callback !== "function") {
				throw new Error("setValidationFailedHandler must be a function");
			} else {
				_validationFailedHandler = callback;
			}
		};

		/**
		 * Returns the rule object associated with the specified ruleId
		 * @param {string} ruleId The identifier associated with an existing rule 
		 * @returns {object} 
		 */
		this.getRule = function(ruleId) {
			return _validatorRules[ruleId];
		};
		
		/**
		 * Returns all currently defined rules as one single object
		 * @returns {object} 
		 */
		this.getRules = function() {
			return _validatorRules;
		};
		
		/**
		 * Adds or updates a single rule. Rule data should be a correctly structured array (see explanation for the _validatorRules variable for more details)
		 * If only a part of an existing rule object needs to be updated (e.g. only the logic, or only the error message), the other parts can be set to NULL or undefined.
		 * These values will be ignored, allowing the rule's original parts to stay intact
		 * @param {string} ruleId The identifier associated with the rule object to be modified
		 * @param {Array} ruleData 
		 * @param {string|RegExp|function} [ruleData.0] The new logic for this rule
		 * @param {string} [ruleData.1] The HTML string for this rule's error message
		 * @param {string} [ruleData.2] The HTML string for this rule's success message
		 */
		this.setRule = function(ruleId, ruleData) {
			if (typeof ruleId != "string" || !(ruleData instanceof Array) || ruleData.length < 2) {
				return;
			}
			if (_validatorRules[ruleId]) {
				if (ruleData[0]) {
					_validatorRules[ruleId][0] = ruleData[0];
				}
				if (ruleData[1]) {
					_validatorRules[ruleId][1] = ruleData[1];
				}
				if (ruleData[2]) {
					_validatorRules[ruleId][2] = ruleData[2];
				}
			} else {	
				_validatorRules[ruleId] = ruleData;
			}
		};
		
		/** 
		 * Bulk edit all rules. Loops over a rules object and call setRule for each item
		 * @param {object} rulesObject Object containing key/value pairs (or ruleId / RuleObject pairs) for one or more rules 
		 */
		this.setRules = function(rulesObj) {
			if (typeof rulesObj != "object") {
				return;
			}
			$.each(rulesObj, function(key, value){
				that.setRule(key, value);
			});
		};
		
		/* END GETTERS & SETTERS */
		
		/**
		 * (deprecated) Resets the FormValidator with a new container and / or trigger
		 * @deprecated, This is an experimental feature that will likely have undesirable results
		 * (which should be set through setContainer and setTrigger before this call)
		 * Needs to be properly tested and refined more
		 * @param {HTMLElement|jQuery} formGroupElement
		 * @param {HTMLElement|jQuery} triggerElement
		 */
		this.reInitialize = function(formGroupElement, triggerElement) {
			_init(formGroup, trigger);
		}

		/** 
		 * delete an existing rule
		 * @param {string} ruleId The identifier for the rule about to be removed
		 */
		this.unsetRule = function(ruleId) {
			if (_validatorRules[ruleId]) {
				delete _validatorRules[ruleId];
			}
		};
		
		/**
		 * update a rule's error message
		 * @param {string} ruleId The identifier for the rule about to be updated
		 * @param {string} errorMsg HTML string for the rule's new error message
		 */
		this.updateRuleInvalidHTML = function(ruleId, errorMsg) {
			if (typeof ruleId != "string" || typeof errorMsg != "string" || !_validatorRules[ruleId]) {
				return;
			}
			_validatorRules[ruleId][1] = errorMsg;
		};
		
		/**
		 * update a rule's success message
		 * @param {string} ruleId The identifier for the rule about to be updated
		 * @param {string} successMsg HTML string for the rule's new success message
		 */
		this.updateRuleValidHTML = function(ruleId, successMsg) {
			if (typeof ruleId != "string" || typeof successMsg != "string" || !_validatorRules[ruleId]) {
				return;
			}
			_validatorRules[ruleId][2] = successMsg;
		};
		
		/**
		 * Updates a rule's logic
		 * @public
		 * @param {string} ruleId The ID for the rule that needs to be updated
		 * @param {string|RegExp|function} ruleLogic <p>Can be either a regular expression (string or RegExp) or a callback function 
		 * The callback function either needs to return a boolean (false = invalid, true = valid), or an object.
		 * If an object is returned, it needs to have either of these properties:</p>
		 * <ul><li>result : true/false indicating the validation result.</i>
		 * 	<li>Optionally a 'params' property can be set to an array containing tokens for the formatted error / success string associated with this rule</li>   
		 * 	<li>async : true. Indicates that the method is handled asynchronously (e.g. through an AJAX or timeout call), 
		 * 	and that the callback will call handleAsyncResult() when it's ready</li></ul>
		 * <p>Examples of valid objects returned by the callback:</p>
		 * <ul><li>return { result : false, params : [param1, param2]</li>
		 * <li>return { async :  true }</li></ul>
		 */
		this.updateRuleLogic = function(ruleId, ruleLogic) {
			if (typeof ruleId != "string" || 
				(typeof ruleLogic != "string" && typeof ruleLogic != "function" && !(ruleId instanceof RegExp)) || 
				!_validatorRules[ruleId]) {
				return;
			}
			_validatorRules[ruleId][0] = ruleLogic;
		};
		
		/** Manually triggers a custom error for a specific field.
		 * This error will only be applied inline. While a custom error is showing, automated inline validation is suppressed for that field.
		 * To remove the custom error, use {@link #unsetError}
		 * To add the same error to the validation summary list, use {@link #addSummaryListItem} 
		 * @param {HTMLElement|jQuery|string} field field on which the error should be triggered
		 * @param errorMsg {string} HTML to show as error message
		 */
		this.setError = function(field, errorMsg) {
			var $field = _getElem(field);
			_generateErrorHTML($field, errorMsg);
			$(field).attr("data-customerror", "true");
		}
		
		/**
		 * (deprecated) Adds error to the validation summary list.
		 * @deprecated, remove when possible. use {@link #setError and #addSUmmaryListItem instead}. For asynchronous validators, use the async property and {@link #handleAsyncResult}
		 */
		this.setCustomError = function(field, errorMsg) {
			var errors = _getErrors();

			if (errorMsg != "") {
			var error = {};
			var $label = _getLabel($(field));
				error.text = $label.text() == "" ? errorMsg : $label.text() + ": " + errorMsg;
			error.field = $(field);
			error.label = $label;
			errors.push(error);

			}

			$(".errorSummaryContainer", _$formGroupContainer).remove();
			_createErrorSummary(errors);
			if (errorMsg != "") {
				if (!$(field).is("fieldset")) {
			_generateErrorHTML($(field), errorMsg);
				} else {
					$(field).addClass("errorField").attr("aria-invalid", "true");
					_$invalids = _$invalids.add($(field));

					var errorElement = $(field + "-feedbackMsg");
					var $msg = errorElement.removeClass("success waiting").addClass("error");
					$msg.html(_getLocalizedString("errorPrefix") + errorMsg);
				}
			}
			if (errors.length) {
				var $list = $(".errorSummaryList", _$formGroupContainer);
				if (!$(field).is("fieldset")) {
				$(".errorSummaryContainer", _$formGroupContainer).focus();
				}
				return false;
			}
			return true;
		};
		
		/**
		 * Adds single error to validation summary list.  
		 * This method is automatically called by handleAsyncResult() when asynchronous validation is completed 
		 * In addition, this can be called manually (combine with setError, which adds an inline message)
		 * @param {HTMLElement|jQuery} field The form field to which the error applies
		 * @param {string} errorMsg The HTML string for the error message
		 * @param {boolean} ensureListExists If true, the summary list will be created first if it doesn't exist already,   
		 */
		this.addSummaryListItem = function(field, errorMsg, ensureListExists) {
			if (ensureListExists === undefined) {
				ensureListExists = true;
			}
			var $summaryContainer = $(".errorSummaryContainer:eq(0)", _$formGroupContainer);
			
			if (!$summaryContainer.length) {
				if (ensureListExists) {
					$summaryContainer = _getSummaryListHTML( 1 );
					$summaryContainer.prependTo(_$formGroupContainer);
				}
				else {
					return;
				}
			}
			var $list = $(".errorSummaryList", $summaryContainer);
			var $listItem = _getSummaryListItemHTML( field, errorMsg ).appendTo($list);
			var $errorCountSpan = $summaryContainer.find(".errorSummaryHeading .errorCount");
			var errorCount = parseInt($errorCountSpan.text(), 10);
			if (!isNaN(errorCount)) {
				$errorCountSpan.text(++errorCount);
			}
		};

		/**
		 * Manually remove a custom error for a specific field.
		 * @param {HTMLElement|jQuery|String} field The element from which the error should be removed
		 */
		this.unsetError = function(field) {
			var $field = _getElem(field)
			_cleanUpFeedback($field, _getLabel($field));
			$(field).removeAttr("data-customerror");
		};
		
		/**
		 * Manually trigger bucket collection without having to wait for the form's submit event or the trigger's click event
		 */
		this.triggerBucketCollection = function() {
			_performBucketCollection();
		}
		
		/**
		 * Manually trigger inline validation for a specific field 
		 * @param {HTMLElement|jQuery|string} field The field to validate
		 */
		this.validateField = function(field) {
			var $field = _getElem(field);
			if (!$field.length || !$field.is("[data-validate]")) {
				return;
			}
			_validate( $field, false );
		}
		
		/**
		 * Remove all inline error messages as well as the validation summary 
		 */
		this.clear = function() {
			_$invalids.each(function(){
				_cleanUpFeedback($(this));
			});
			$(".errorSummaryContainer", _$formGroupContainer).remove();
		}
		
		/**
		 * Add a new field to the validation process 
		 * A new field is a field that didn't exist when the FormValidator initialized or didn't have a data-validate attribute at that time 
		 * @param {HTMLElement|jQuery|string} field The field to validate (or its ID string)
		 * @param {string} [validators] Optional space separated string containing validation rule IDs 
		 */
		this.addValidationToField = function(field, validators){
			var $field = _getElem(field);
			if (validators && typeof validators == "string") {
				$field.attr('data-validate', validators);
			}
			_setUpFieldForValidation($field);
		};
		
		/**
		 * Removes a field from the validation process
		 * @param {HTMLElement|jQuery|string} field The field to remove from validation (or its ID string)
		 */
		this.removeValidationFromField = function(field) {
			var $field = _getElem(field);
			$field.removeAttr("data-validate");
			this.unsetError($field);
			// No need to unset event handlers for blur event here, as this is done automatically by the .on() selector
		};

		/* END PUBLIC METHODS */
		
		/* PRIVATE METHODS */ 
		
		/**
		 * utility function to get quick jQuery reference to an element based on a DOM reference, jQuery reference or ID string
		 */
		function _getElem(elem) {
			return typeof elem == "string" ? $("#" + elem) : $(elem); 
		}
		
		/**
		 * find matching label for a form field
		 * Note the label must be associated with the field through a "for" attribute for it to be found
		 * @param {jQuery} $field
		 * @returns {jQuery} The associated label element 
		 */
		function _getLabel($field) {
			if ($field.is("fieldset")) {
				return $field.find("legend:eq(0)");
			}
			var id = $field.attr("id");
			if (!id) {
				return $field;
			}
			return $("label[for=" + id + "]", _$formGroupContainer);
		}
		
		/**
		 * Tests the validation rule's logic and return a boolean based on the result. 
		 * If a callback is used as rule logic, it may also return the callback's result object
		 * @param {object} validatorObj Validator object currently being tested
		 * @param {string} value The value being matched
		 * @param {jQuery} $field The field containing the value being matched
		 * @returns {object} The validation result 
		 **/
		function _testValidationRule(validatorObj, value, $field, partOfBucketCollection) {
			var validator = validatorObj[0];
			if (typeof validator == "function") {
				/* Rule arguments can be specified in the data-validate attribute by adding them to a rule ID separated with "-". 
				 * These values will automatically be stored as an array in validatorObj[3]  
				 * For example, data-validate="checkboxGroupRange-1-5" means that the checkboxGroup rule will 
				 * receive a [1,5] array as "args" parameter when validating that specific field. 
				 */
				var args = validatorObj[3];
				return validator(value, $field, args, partOfBucketCollection);
			}
			else if (typeof validator == "string") {
				var re = new RegExp(validator);
				return re.test(value);
			}
			else if (validator instanceof RegExp) {
				return validator.test(value);
			}
		}
		
		/**
		 *  Creates the HTML for an inline error and add it to the DOM
		 *  @param {jQuery} $field The form field to apply the error message to
		 *  @param {string} validationMsg HTML string containing the error message
		 */ 
		function _generateErrorHTML($field, validationHTML) {
			//console.log("generating error: " + validationHTML);
			_cleanUpFeedback($field)
			$field.addClass("errorField").attr("aria-invalid", "true");
			_$invalids = _$invalids.add($field);
			var $msg = _getFeedbackElement( $field )
				.removeClass("success waiting").addClass("error");
			if (!$msg.length) {
				return;
			}
			$msg.html(_getLocalizedString("errorPrefix") + validationHTML);
			
			if (that.useNextErrorLinks) { // Add skip links to invalid fields, experimental feature	
				var index = _$invalids.index($field);
				if (index != -1 && index > 0 && !_$invalids.eq(index -1).siblings(".nextErrorLink").length ) {
					var $nextErrorLink = $("<a class='nextErrorLink' href='#'>Next error</a>").click(function(event){
						event.preventDefault();
						var $target = event.target;
						var focusIndex = _$invalids.add($target).index($target);
						var $nextInvalid = _$invalids.eq(focusIndex);
						if ($nextInvalid.length) {
							$nextInvalid.focus();
						}
					});
					_$invalids.eq(index - 1).siblings(".feedbackMsg").after($nextErrorLink);
				}
			}
		}
		
		/**
		 * Creates the HTML for an inline success message and add it to the DOM 
		 * @param {jQuery} $field The form field to apply the success message to
		 * @param {string} validationMsg HTML string containing the success message
		 */ 
		function _generateSuccessHTML($field, validationMsg) {
			_cleanUpFeedback($field);
			var $msg = _getFeedbackElement( $field )
				.removeClass("error waiting").addClass("success");
			if (!$msg.length) {
				return;
			}
			$msg.html(_getLocalizedString("successPrefix") + validationMsg);
		}
		
		/** 
		 * Creates the HTML for an inline waiting message (for async validation) and add it to the DOM
		 * @param {jQuery} $field The form field to apply the waiting message to
		 * @param {string} validationMsg HTML string containing the waiting message
		 */ 
		function _generateWaitingHTML($field, validationMsg) {
			_cleanUpFeedback($field);
			var $msg = _getFeedbackElement( $field )
				.removeClass("error success").addClass("waiting");
			if (!$msg.length) {
				return;
			}
			$msg.html(validationMsg);
		}
		
		/** 
		 * Removes old feedback messages from the DOM 
		 * @param {jQuery} $field The form field that needs to be cleaned up
		 */
		function _cleanUpFeedback($field) {
			$field.removeClass("errorField").attr("aria-invalid", "false");
			var $msg = _getFeedbackElement( $field );
			$msg.removeClass("error success waiting").html(_nbsp.cloneNode(false));
			
			if (that.useNextErrorLinks) {
				// TODO:This causes focus to be lost when tabbing away from a valid field that previously had a nextErrorLink
				$field.siblings(".nextErrorLink").remove();  
				var lastItem = $field.is(_$invalids.last());
				if (lastItem) {
					_$invalids.eq(-2).siblings(".nextErrorLink").remove();
				}
			}
			_$invalids = _$invalids.not($field);		
		}
		
		/** 
		 * Removes an item from the error summary list
		 * @param {string} failedId The identifier (a combination of the field's ID and ruleId) indicating the item that needs to be removed 
		 */
		function _removeSummaryListItem(failedId) {
			var $summaryContainer = $(".errorSummaryContainer:eq(0)", _$formGroupContainer);
			var $list = $(".errorSummaryList", $summaryContainer);
			$list.children(".errorSummaryItem").filter("." + failedId).remove();
		}
		
		/** 
		 * Determines after which element a field's inline error message should be injected
		 * This may be the field itself, it's support text element, or a fieldset's legend 
		 * this logic may be expanded as more use cases occur
		 * @param {jQuery} $field
		 */
		function _getElementToFollow($field) {
			var $customToFollow = _customLogicForElementToFollow($field);
			if ($customToFollow && $customToFollow.length) {
				return $customToFollow;
			}
			else if ($field.is("fieldset")) {
				return $field.find("legend:eq(0)");
			}
			return $field.next().is(".supportText, label") ? $field.next() : $field;
		}
		
		/** 
		 * Finds a field's associated feedback element for showing its inline error message
		 * @param {jQuery} $field
		 */
		function _getFeedbackElement($field) {
			var $feedbackElem = _getElementToFollow($field).nextAll(".feedbackMsg").first();
			return $feedbackElem
		}
		
		/**
		 * Gets value from a field / widget depending of its type
		 * Note: add more use cases here for getting the value from a field / widget
		 * @param {jQuery} $field
		 * @returns {string} 
		 */
		function _getFieldValue($field) {
			var value = $field.val();
			if ($field.is(":checkbox")) {
				value = $field.is(":checked") ? "checked" : "";
			}
			return value;
		}
		
		/** 
		 * Performs actual validation for a field
		 * Loops over all ruleIds specified in the field's data-validate attribute, stops if one of them fails (= invalid value) to generate the error
		 * If none of them fail, potential previous error messages are removed, and optionally a success message can be shown.
		 * TODO: Split this up into smaller and more manageable methods 
		 * @param {Object} $field jQuery reference to field that needs to be validated
		 * @param {boolean} partOfBucketCollection Indicates whether current validation process is part of inline validation or bucket collection
		 */ 
		function _validate($field, partOfBucketCollection) {
			var $label = _getLabel($field);
			//console.log("validating: " + $field.prop("nodeName") + " - " + $label.text());
			var fieldName = $label.length ? $label.text() : "field"; // should not happen, but just in case
			var validators = $field.data("validate").split(" ");
			var noErrors = true;
			var errorHTML = successHTML = "";
			var failedRuleId;
			var fieldId = $field.attr("id");
			var previouslyFailedRuleId = _bucketCollectedFields[fieldId];
			//console.log(validators);
			$.each(validators, function(i ,e) {
				if (!$field.is("fieldset") && e != "notBlank" && !$field.val()) {
					return; // no need to process validation rule for an optional field if it's empty
				}
				// Check if rule arguments were specified for this field/rule combination
				var args = e.split("-");
				if (args.length > 1) {
					e = args.shift();
				}
				var validatorObj = _validatorRules[e];
				if (!validatorObj) {
					return;
				}
				if (args.length) {
					validatorObj[3] = args;
				}
				var value = _getFieldValue($field);
				var validationResult = _testValidationRule(validatorObj, value, $field, partOfBucketCollection); // Returns result as boolean or object
				//console.log(validationResult);
				var valid = true, async = false, feedbackParams = [];
				if (typeof validationResult == "boolean") {
					valid = validationResult;
				}
				else if (typeof validationResult == "object") {
					if (typeof validationResult.result == "boolean") {	
						valid = validationResult.result;
						if (validationResult.params && validationResult.params instanceof Array) {
							feedbackParams = validationResult.params;
						}
					}
					else if (validationResult.async) {
						async = true; // callback is asynchronous, and it should call handleAsyncResult once it's complete
					} else {
						return true; // didn't get a correct result, skip to the next rule iteration
					}
				} else {
					return true; // didn't get a correct result, skip to the next rule iteration
				}
				if (async) { // result was asynchronous
					noErrors = false;
					// create the "waiting..." message and spinner
					_generateWaitingHTML($field, _getLocalizedString("waitingForValidation"));
					if (_timeouts[e]) {
						clearTimeout(_timeouts[e]);
						delete _timeouts[e];
						var timeoutIndex = $.inArray(e, _timeoutsNumbered);
						if (timeoutIndex != -1) {
							_timeoutsNumbered.splice( timeoutIndex, 1 )
						}
					}
					// Remove the waiting message if the callback takes too long 
					var timeout = setTimeout(function() {
						_cleanUpFeedback($field);
					}, _asyncTimeoutDuration);
					_timeouts[e] = timeout;
					_timeoutsNumbered.push(e);
					// cancel the loop as if an error occurred. NOTE: async callbacks MUST be the last rule in a field's validation order
					return false; 
				}
				else if (!valid) { // result was invalid
					/**
					 * A rule's default error message can be overridden with something specific to the field 
					 * by setting the data-errormsg-<ruleId> attribute. For example, to use a custom message for the notBlank rule,
					 * set data-errormsg-noblank="My custom message"
					 * NOTE: although rule ID's are normally written in camelCase, the data-errormsg-* attribute name must be all lower case (because of the HTML5 spec)
					 * NOTE: Custom messages can also use %s place holders to match parameters returned by the rule logic, just like the default error messages.
					 */
					var customMsg = $field.attr("data-errormsg-" + e.toLowerCase());
               if(customMsg == null) {
                  if(window.FFM != null && FFM.resources != null){// we have been attached to the resource bundles
                     customMsg = FFM.resources['ffe.ee.shared.formValidator.' + e]; // use a resource bundle message of the format ffe.ee.shared.formValidator.<validation_name>
                  }
                  if(customMsg == null){ // use the hardcoded message
                     customMsg = validatorObj[1];
                  }
               }
					errorHTML = _getFormattedString(customMsg, feedbackParams);

					_generateErrorHTML($field, _getFormattedString(errorHTML, feedbackParams));
					noErrors = false;
					/**
					 * Keep track of which field-rule combinations have already been added to the error summary list, to prevent duplicate items 
					 * when triggering asynchronous validating multiple times for a field
					 */
					var failedRuleId = e;
					_bucketCollectedFields[fieldId] = failedRuleId;
					return false; // error was found, no need to validate other rules so cancel the loop
				} else if (validatorObj[2]) { 
					// Result was valid, check if success message needs to be created. 
					// NOTE: Rules with success messages MUST be the last rule in a field's validation order
					successHTML = _getFormattedString(validatorObj[2], feedbackParams);
				}
			});
			if (noErrors) {
				// All validators returned a valid result 
				if (successHTML) { 
					// Use the formatted success HTML string that was created during the each loop, and add it to the DOM
					_generateSuccessHTML($field, successHTML);
				}
				else {
					_cleanUpFeedback($field);
				}
				/*
				if (previouslyFailedRuleId) {
					delete _bucketCollectedFields[fieldId];
					_removeSummaryListItem(fieldId + "_" + previouslyFailedRuleId);
				} 
				*/
				return false;
			}
			else {
				return {
					errorMsg : errorHTML,
					failedRuleId : $field.attr("id") + "_" + failedRuleId
				}
			}
		}
		
		/**
		 * Allows asynchronous call backs to call in their validation results once their done.
		 * Must be called from within a rule's callback method, and this callback method must return {async : true}.
		 * TODO: Behavior is similar (but not exactly the same) to that in _validate(). Refactor to avoid redundncy
		 * @param {string} ruleId The indentifier for the rule being validated
		 * @param {HTMLElement} $field The field being validated
		 * @param {boolean|object} validationResult The result of the asynchronous validation 
		 * @param {boolean} partOfBucketCollection Indicates whether current validation process is part of inline validation or bucket collection
		 */
		this.handleAsyncResult = function (ruleId, $field, validationResult, partOfBucketCollection) {
			//console.log("The results came in for "+ ruleId + ", partOfBucketCollection = " + partOfBucketCollection);
			var validatorObj = _validatorRules[ruleId];
			var valid, feedbackParams, errorHTML, successHTML;
			
			if (typeof validationResult == "boolean") {
				valid = validationResult;
			}
			else if (typeof validationResult == "object") {
				if (typeof validationResult.result == "boolean") {	
					valid = validationResult.result;
					
					if (validationResult.params || validationResult.params instanceof Array) {
						feedbackParams = validationResult.params;
					}
				}
				else {
					return true; // didn't get a correct result, skip to the next rule iteration
				}
			} else {
				return true; // didn't get a correct result, skip to the next rule iteration
			}
			if (_timeouts[ruleId] !== undefined) {
				clearTimeout(_timeouts[ruleId]);
				delete _timeouts[ruleId];
				var timeoutIndex = $.inArray(ruleId, _timeoutsNumbered);
				if (timeoutIndex != -1) {
					_timeoutsNumbered.splice( timeoutIndex, 1 );
				}
			}
			if (!valid) {
				//console.log("Invalid value!");
				errorHTML = _getFormattedString(validatorObj[1], feedbackParams);
				_generateErrorHTML($field, _getFormattedString(errorHTML, feedbackParams));
				if (_bucketCollectedFields[$field.attr("id")] !== ruleId ){
					/**
					 * Only add async error message for this field/ruleId to error summary list if it isn't there already (prevents duplicates) 
					 */
					var $label = _getLabel( $field );
					that.addSummaryListItem($field,  $label.text() + " " +  errorHTML, false);
					_bucketCollectedFields[$field.attr("id")] = ruleId; 
				}
			} else {
				_cleanUpFeedback($field);
				if (validatorObj[2]) {
					successHTML = _getFormattedString(validatorObj[2], feedbackParams);
					_generateSuccessHTML($field, _getFormattedString(successHTML, feedbackParams));
				}
			}
			
			if (partOfBucketCollection && _timeoutsNumbered.length == 0) {
				if ((!valid || _$invalids.length > 0) && typeof _validationFailedHandler == "function") {
					_validationFailedHandler(that);
				} else if (typeof _validationCompletedHandler == "function"){
					_validationCompletedHandler(that);
				} 
			}
		};
		
		/**
		 *  Returns error objects by validating all fields marked for validation
		 *  @returns {Array}  
		 */
		function _getErrors() {
			//clear up previous bucket collection results 
			_bucketCollectedFields = {};
			var errors = [];
			$("[data-validate]", _$formGroupContainer).each(function(e,i){
				var $field = $(this);
				var error = {};
				var errorText;
				if ($field.is("[data-customerror]")) {
					errorText = _getElementToFollow($field).siblings(".feedbackMsg.error").first().html();
				}
				else {
					var validationResult = _validate($field, true);
					errorText = validationResult.errorMsg;
				}
				if (!errorText) {
					return;
				}
				var $label = _getLabel($field);
				// Do we need to move this to the config file somehow so that people can tweak the summary item markup?
				error.text = $label.text() == "" ? errorText : "<span class='errorSummaryLabel'>" + $label.text() + "</span>" + _getLocalizedString("errorSeparator") + "<span class='errorSummaryValue'>" +errorText + "</span>";
				error.field = $field;
				error.label = $label;
				if (validationResult) {
					error.failedRuleId = validationResult.failedRuleId;
				}
				errors.push(error);
			});
			return errors;
		}
		
		/**
		 * Formats a string by replacing %s occurrances with specified parameters 
		 * @param {string} rawStr String which may or may not contain one or more %s occurrance
		 * @param {Array} params  Replacement values that match the %s occurrances in rawStr 
		 * @returns {string}
		 */
		function _getFormattedString(rawStr, params) {
			if (!params || params.length == 0) {
				return rawStr;
			}
			if (!(params instanceof Array)) {
				params = [params];
			}
			var placeHolders = rawStr.split("%s");
			var str = "";
			if (placeHolders.length <= 1) {
				return rawStr;
			}
			$.each(placeHolders, function(i){
				str += placeHolders[i]; 
				if (params[i]) {
					str += params[i];
				}
			});
			return str;
		}
		
		/**
		 * Gets a localized version of a (potentionally formatted) string
		 * @param {string} strId ID that matches key in _strings[FormValidator.currentLocale]
		 * @param {Array} params Replacements for %s occurrances in the original string
		 * @returns {string}
		 */
		function _getLocalizedString(strId, params) {

         var strValue = "";
         // first try to get the string from the resource bundle
         if(window.FFM != null && FFM.resources != null){
            strValue = FFM.resources['ffe.ee.shared.formvalidator.summary.' + strId];
         }
         if(strValue === "" || strValue == null) { // otherwise use the hard-coded ones
			    var strings = _strings[FormValidator.currentLocale] ? _strings[FormValidator.currentLocale] : _strings[en_US];
			    if (!strings[strId]) {
				    return strId;
			    }
             strValue =  strings[strId];
         }

			return _getFormattedString(strValue, params);
		}
		
		/**
		 * Creates the DOM for the bucket collection summary list
		 * @param {object} errors All the errors found
		 * @param {number} totalErrors Number of errors found
		 */
		function _createErrorSummary(errors, totalErrors) {
			if (!totalErrors)
				totalErrors = errors.length;
			if (totalErrors == 0) {
				return;
			}
			var $summaryContainer = _getSummaryListHTML(totalErrors);
			_$formGroupContainer.prepend($summaryContainer);
			var $errorList = $summaryContainer.find(".errorSummaryList");
			if (!$summaryContainer.length || !$errorList.length) {
				return;
			}
			$.each(errors, function(i,e) {
				var listItem = _getSummaryListItemHTML(e.field, e.text, e.failedRuleId);
				listItem.appendTo($errorList);
			})
		}
		
		/**
		 * Creates and return the DOM structure for the error summary list and its heading
		 * @param {number} totalErrors
		 * @returns {jQuery}
		 */
		function _getSummaryListHTML(totalErrors) {
			var $summaryContainer;
			var $heading = $(_markupStrings.summaryHeading).attr("id", "errorSummaryHeading-"+ _idIndex) // keep ID references unique with _idIndex
			.addClass("errorSummaryHeading")
			.append(_getLocalizedString(totalErrors == 1 ? "summaryHeadingSingle" : "summaryHeadingPlural", "<span class='errorCount'>" + totalErrors + "</span>"));
			$summaryContainer = $(_markupStrings.summarycontainer);
			$summaryContainer.append($heading);	
	
			$summaryContainer.attr("id", "errorSummary-"+ _idIndex)
				.addClass("errorSummaryContainer").attr("tabindex", "-1")
				.attr("role", "group").attr("aria-labelledby", "errorSummaryHeading-"+ _idIndex);
	
			if (!$heading.length || !$summaryContainer.length)
				return;
	
			// Generate the actual error list
			$(_markupStrings.summaryList).addClass("errorSummaryList").insertAfter($heading);
			return $summaryContainer;
		}
		
		/**
		 * Creates and return the DOM structure for a single validation list item
		 * @param {HTMLElement|jQuery} field The field to which the error applies
		 * @param {string} text The summary item's error message
		 * @param {string} failedRuleId A combination of the field's ID and the ruleId 
		 * @returns {jQuery}
		 */
		function _getSummaryListItemHTML(field, text, failedRuleId) {
			var $item = $(_markupStrings.summaryListItem).addClass("errorSummaryItem");
			if (failedRuleId) {
				$item.addClass(failedRuleId);
			}
			var $link = $(_markupStrings.summaryListLink);
			var $target = $(field);
			if ($target.is("fieldset")) {
				// Move focus to the first form field in the fieldset
				$target = $target.find( ":input:visible:not(:disabled)", $target).first();
			}
			$link.append(text);
			$link.attr("href", "#" + $target.attr("id"))
				.click(function(event){ event.preventDefault(); $target.focus();});
			return $item.append($link);
		}
		
		/**
		 * Handles form submission, triggers bucket collection
		 * @param {Event} e
		 * @returns {boolean}
		 */
		function _onFormSubmit(e) {
			e.preventDefault();
			return _performBucketCollection();
		}
		
		/**
		 * Performs actual bucket collection
		 * @returns {boolean} Indica
		 */
		function _performBucketCollection() {
			var errors = _getErrors();
			$(".errorSummaryContainer", _$formGroupContainer).remove();
			_createErrorSummary(errors);
			if (errors.length) {
				$(".errorSummaryContainer", _$formGroupContainer).focus();
		    	if (typeof _validationFailedHandler == "function" && _timeoutsNumbered.length == 0) {
		    		_validationFailedHandler(that);
		    	}
				return false
			}
			if (typeof _validationCompletedHandler == "function"  && _timeoutsNumbered.length == 0) {
	    		_validationCompletedHandler(that);
	    	}
			return true;
		}
		
		/**
		 * Prepare a newly created field (that wasn't there during initialization) for validation 
		 * @param {HTMLElement} field The field to add validation support to
		 */
		function _setUpFieldForValidation(field){
			var $field = $(field);
			if (!$field.attr("id")) { 
				return; // Each field marked for validation MUST have an ID attribute
			}
			//prepare feedback element
			$(_markupStrings.inlineFeedbackItem)
				.attr("id", $field.attr("id") + "-feedbackMsg")
				.addClass("feedbackMsg").attr("tabindex", "-1")
				.append(_nbsp.cloneNode(false)).insertAfter(_getElementToFollow($field));
			var oldDescribedBy = $field.attr("aria-describedby");
			oldDescribedBy = !oldDescribedBy ? "" : oldDescribedBy + " ";
			if (oldDescribedBy.indexOf($field.attr("id") + "-feedbackMsg") == -1) {
				$field.attr("aria-describedby",  oldDescribedBy + $field.attr("id") + "-feedbackMsg");
			}
				
		}
		
		/**
		 * Marks field with notBlank as being required
		 * @param {HTMLElement} field The field to mark as required
		 */
		function _setUpRequiredField(field){
			var $field = $(field);
			if ($field.attr("data-validate").indexOf("notBlank") != -1 ) { 
				$field.attr("aria-required", "true");
			}
		}
		
		/**
		 * Initializes new instance
		 * @param {HTMLElement|jQuery} formGroup The container that this instance's validation logic applies to
		 * @param {HTMLElement|jQuery} [trigger] DOM reference to the element that triggers bucket collection
		 * @param {object} [customRules] Optional object containing a set of validator rules to add to or replace default rules  
		 */ 
		function _init(formGroup, trigger, customRules) {
			that.setContainer( $(formGroup) );
			that.setTrigger( $(trigger) );
			
			//NOTE: When necessary, modify these selectors to match all potential fields / widgets
			_$allFields = $("input[type=text], select, textarea, [data-validate]:not(fieldset)", _$formGroupContainer);
			//collect fields marked for validation
			_$fieldsToValidate = $("[data-validate]:not(fieldset)", _$formGroupContainer);
			_$fieldsetsToValidate = $("fieldset[data-validate]", _$formGroupContainer);
			
			_$allFields.add(_$fieldsetsToValidate).each(function(e,i){
				_setUpFieldForValidation(this);
			});
			
			// Trigger validation on blur for all fields marked for validation as well as fields that will be marked dynamically later
			_$formGroupContainer.on("blur.validator", "[data-validate]:not(fieldset):not([data-no_inline_on_blur])", function(e,i) {
				var $field = $(this);
				if (!$field.is("[data-customerror]")) {
					_validate($field, false);
				}
			});
			
			// Programmatically mark fields using the notBlank rule as required
			_$fieldsToValidate.each(function(e,i){
				_setUpRequiredField(this);
			}); 
			
			// For validated fieldsets, we only want inline validation to be triggered 
			// When focus is moved outside the fieldset
			_$formGroupContainer.on( 
				{
					"focusout.validator" : function(e,i) {
						var $fieldset = $(this);
						if ($fieldset.is("[data-customerror]")) {
							return;
						}
						var id = $fieldset.attr("id");
						if (!id) {
							return;
						}
						// we need to keep track of which fieldset these events occur in
						_focusOutTimeouts[id] = setTimeout( function(){
							// unless canceled later by focusin, trigger validation
							_validate($fieldset, false)
							}, 100 )
						
					},
					"focusin.validator" : function(e,i) {
						var $fieldset = $(this);
						if ($fieldset.is("[data-customerror]")) {
							return;
						}
						var id = $fieldset.attr("id");
						if (!id) {
							return;
						}
						// Check if this particular fieldset has started a focusout timeout
						// earlier
						if (_focusOutTimeouts[id] !== undefined) {
							// focus did not leave the fieldset, cancel the timeout
							clearTimeout( _focusOutTimeouts[id] );
							delete _focusOutTimeouts[id];
						}
					}
				},
				"fieldset[data-validate]:not([data-no_inline_on_blur])"
			);
			
			// Update custom rules if they were specified as parameter
			if (customRules) {
				that.setRules(customRules);
			}
			
			if (!staticHandlerReady) {
				// Only apply global key event handler once
				FormValidator.setupHandlers();
				staticHandlerReady = true;
			}
		}
		/* END PRIVATE METHODS */ 
		
		//Start initialization 
		_init(formGroupElement, triggerElement, customRulesObject);
		FFM.validators.push(this);
	}
	
	/* STAIC VARIABLES */
	
	/**
	 * Determines which locale is currently used for fixed strings (not rule specific messages). 
	 * The value must match a key in the private _strings object, or it will default to en_US
	 * @static
	 * @default "en_US"
	 * @memberof FFM.FormValidator
	 */
	FormValidator.currentLocale = "en_US";
	
	
	/* STATTIC METHODS */
	
	/**
	 * Handles shortcuts to quickly navigate between invalid fields (alt + shift + left / right arrow, and the error summary list (alt + shift + up arrow)
	 * @static
	 * @memberof FFM.FormValidator
	 */
	FormValidator.setupHandlers = function() {
		$(document).bind("keydown.formValidator", function(event) {
			if (!event.altKey || !event.shiftKey || $.inArray(event.which, [37,38,39]) == -1) {
				return;
			}
			var $invalids = $('[aria-invalid=true]');
			var $target, $contexts, $nextInvalid, index, focusIndex;
			if ($invalids.length) {
				$target = $(event.target);

				switch (event.which) {
					case 37: // ALT+SHIFT+LEFT: previous error
						// Move to previous error if on an invalid field
						if ($target.is('[aria-invalid=true]')) {
							index = $invalids.index($target);
							if (index < 1) {
								return true;
							}
							$invalids.eq(index - 1).focus();
						}
						else {
							$contexts = $invalids.add($target);
							focusIndex = $contexts.index($target);
							$nextInvalid = $contexts.eq(focusIndex - 1);
							if ($nextInvalid.length) {
								$nextInvalid.focus();
							}
						}
						event.preventDefault();
						break;
					case 38: // ALT+SHIFT+UP: Error summary
						var $formGroup = $target.closest(".validatorFormGroup");
						$formGroup.find('.errorSummaryContainer a:first').focus();
						event.preventDefault();
						break;
					case 39: // ALT+SHIFT+RIGHT: next error
						// Move to next error if on a field
						if ($target.is('[aria-invalid=true]')) {
							index = $invalids.index($target);
							if (index === -1 || index >= $invalids.length-1 ) {
								return true; 
							}
							$invalids.eq(index + 1).focus();
						}
						else {
							$contexts = $invalids.add($target);
							focusIndex = $contexts.index($target);
							$nextInvalid = $contexts.eq(focusIndex + 1);
							if ($nextInvalid.length) {
								$nextInvalid.focus();
							}
						}
						event.preventDefault();
						break;
				}
			}
		});
	}	
	/* END STATTIC METHODS */
	
	/** 
	 *  Auto Initialize FormValidator instances for all elements that have the data-validationgroup attribute set.
	 *  To be valid, this container MUST either contain a clickable descendant with the data-validationtrigger attribute, or be a <form> element 
	 *  To manually create a new instance later, leave out the data-validationgroup attribtue and use new FormValidator(container, trigger, rules) instead
	 */ 
	$("[data-validationgroup]").each(function() {
		var validator = new FormValidator(this);
		});
	
	/**
	 * Make class publically reachable. Create a new instance like this: var myValidator = new FFM.FormValidator(container);
	 * NOTE: This global variable can be changed if necessary, it won't break the class
	 * 
	 */
	FFM.FormValidator = FormValidator; 
})( jQuery );