String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

$.referenceTypes = {};
function getReferenceCodeByTypeOnSuccess(data, type){
	$.referenceTypes[type] = data;
}

function loadReferenceCodeByType(type, tenant, locale, functionReference){
	if (!tenant){
		tenant = "global";
	}
	if (!locale){
		locale = "en_US";
	}
	//prevents double-loading in a given page, to aid efficiency
	if (typeof $.referenceTypes[type] === "undefined"){
	$.ajax(
	                {
	                url: "/base-rest/"+tenant+"/"+locale+"/ReferenceCode/" + type, 
	                success: function(data) {
                                    getReferenceCodeByTypeOnSuccess(data, type);
                                    if (functionReference){
                                                    functionReference(data, type);
                                    }
                            }
	                }
	);
	}else{
	//Call it directly:
		if (functionReference){
			functionReference($.referenceTypes[type], type);
		}
	}
}


var _registeredFetches = [];
var _completedFetches = [];

var FFEView = Backbone.View.extend({
	showValidationError : function(model, errors) {
		// Field validation errors object should only have one property
		var attribute = _.keys(errors)[0];
		
		// Only display the first error
		var attributeError = errors[attribute][0];
		
		// Switch capitalization to what Backbone.Validations expects
		if (attributeError === "minlength") {
			attributeError = "minLength";
		} else if (attributeError === "maxlength") {
			attributeError = "maxLength";
		}
		
		// The attribute with the error may contain special characters like brackets and periods due to nested models
		// These characters must be escaped before being used to perform a jQuery lookup
		var $errorElem = $("[name='" + attribute.replace("[", "\\[").replace("]", "\\]").replace(".", "\\.") + "Error']");
		
		// Only display the first error for this field
		var errorMsg = this.resources[this.namespace + ".shared.validation." + attributeError];
		if (errorMsg || (errorMsg = "{0} error")) {
			// Attributes must have array indices removed before being used to look up validation messages and rules
			// (Both use empty brackets)
			var fieldLabel = this.resources[this.namespace + "." + this.pageName + "." + attribute.replace(/\[\d\]/, "[]")];
			if (fieldLabel || (fieldLabel = "Field")) {
				if ($.inArray(attributeError, ["minLength", "maxLength", "min", "max"]) !== -1) {
					errorMsg = errorMsg.format(fieldLabel, model.preservedValidate[attribute.replace(/\[\d\]/, "[]")][attributeError.toLowerCase()]);
				} else {
					errorMsg = errorMsg.format(fieldLabel);
				}
				$errorElem.empty();
				// CMS requested the '*' be removed from the error msg
				$errorElem.append(errorMsg);
				$errorElem.show();
			}
		} 		
	},
	
	hideValidationErrors : function(model, attrs) {
		if (attrs) {
			$('span[name$="Error"]:visible:parent').each(function(index) {
				var errorElemId = $(this).attr("name");
				var attribute = errorElemId.substring(0, errorElemId.length - 5);
				var $attributeElem = $("[name='" + attribute.replace("[", "\\[").replace("]", "\\]").replace(".", "\\.") + "']");
				var tokens = attribute.split(".");
				var node = attrs;
				for (var i = 0; i < tokens.length; i++) {
					if (node) { 
						var token = tokens[i];
						var tokenIndex = null; 
						token = token.replace(/\[(\d*)\]/, function(match, p1) {
							tokenIndex = p1;
							return "";
						});
						if (tokenIndex) {
							node = node[token];
							if (node) {
								node = node[tokenIndex];
							}
						} else {
							node = node[token];
						}
					} else break;
				}
				if (node && node === $attributeElem.val()) {
					$(this).hide();
				}
			});
		}
	},
	  
	markFetchCompleted: function(/* fetch call */) {
		  _completedFetches.push(arguments);
		  if (this.checkFetchCompletion()) {
			  $.unblockUI();
		  }
	},
	  
	checkFetchCompletion: function() {
		  registeredFetchesCount = _registeredFetches.length;
		  completedFetchesCount = _completedFetches.length;
		  
		  if (registeredFetchesCount === completedFetchesCount) {
			  return true;
		  } else {
			  return false;
		  }
	},
	
	prefetch : function(collections, successfn, errorfn) {

		var thisObj = this;
		$.each(collections, function(index, value) {
			  _registeredFetches.push(value);
		});
		
		$.each(collections, function(index, value) {
			value.fetch({success: function(collection, response) {
				thisObj.markFetchCompleted(value);
				successfn();
			},
			error: function(collection, response) {
				errorfn();
			}
			});
		});
		
	},
	
	initialize : function() {
		_.bindAll(this, 'showValidationError', 'hideValidationErrors');
		// Bind standard validation error event handlers
		this.model.on('error', this.showValidationError);
		this.model.on('validated', this.hideValidationErrors);
	}
});

//Override Backbone.sync with a dialog box that alerts the user when
//a REST call has failed
Backbone._sync = function(method, model, options) {
	
	options.error = function(xhr, text_status, error_thrown){
		
		$('body').append("<div id=restError"+xhr.status+">" + xhr.getResponseHeader('sysmessages')+"</div>");
		$('#restError'+xhr.status).dialog().show();
	};
	Backbone.sync.call(this, method, this, options);
};

var FFEModel = Backbone.NestedModel.extend({
	
	// Commenting out the override until proper server-side keys have been introduced
	//sync : Backbone._sync,
	
	// Because validate is converted to a function by Backbone.Validations, we
	// keep a copy of the validation rules in preservedValidate in case we
	// need those properties later on.
	constructor : function(attributes) {
		this.preservedValidate = _.clone(this.validate);
		Backbone.Model.prototype.constructor.call(this, attributes);
	}

});


var FFECollection = Backbone.Collection.extend({
	//sync : Backbone._sync
});






