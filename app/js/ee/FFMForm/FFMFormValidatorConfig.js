/**
 * @fileOverview Contains configuration parameters and a default ruleset for the FormValidator class
 * @version 1.6b
 */

if (!FFM) {
	/**
	 * @namespace Global namespace for FFM related classes (such as FormValidator) and other relevant properties
	 */
	var FFM = {};
}

// the private variables below may be modified  

/** Object containing Localized strings, where each key is a locale code, and each value is a nested object containing the individual string ids and their localized translation
 * Localized strings may use %s as place holders for parameters.
 * Note that these strings should only be used for fixed language used by this class, strings related to the actual rules should be localized by overwriting them,
 * e.g. using setRule(), updateRuleInvalidHTML(), and updateRuleValidHTML()    
 * The current locale is determined by the static variable FormValidator.currentLocale. Changing it will change the local for all FormValidator instances on the page.
 * If FormValidator.currentLocale is set to a local that is not defined here, it will default to en_us
 * Note: FFM can add more locales as needed. As the FormValidator class evolves, additional strings may be added to each locale.
 * @type object
 */
FFM.validatorLocalizedStrings = {
	en_US : {
		summaryHeadingSingle : "Your information contains 1 error",
		summaryHeadingPlural : "Your information contains %s errors",
		errorPrefix : "<span class='iconCustom-exclamation-sign' aria-hidden='true'>Important: </span><span class='HiddenText'>Error: </span>",
		errorSeparator : " ",
		successPrefix : "Success: ",
		waitingForValidation : "Validating..."
	},
	es_MX : { // From Google Translate,  replace these with correct Spanish
		summaryHeadingSingle : "Su informacion contiene 1 error",
		summaryHeadingPlural : "Su informacion contiene %s errores",
		errorPrefix : "<span class='iconCustom-exclamation-sign' aria-hidden='true'>Importante: </span><span class='HiddenText'>Error: </span>",
		errorSeparator : " ",
		successPrefix : "Acierto: ",
		waitingForValidation : "Estoy Validacion..."
	}
};

/**
 * How long to wait for asynchronous validation callbacks before they timeout
 * When the timeout is reached before the callback returns, the "please wait..." indicatsor is removed
 * @type number
 */
FFM.validatorAsyncTimeoutDuration = 3000;

FFM.validatorHTMLStrings = {
  summaryHeading: "<h2><span class='iconCustom-exclamation-sign' aria-hidden='true'></span></h2>",
  summarycontainer: "<div></div>",
  summaryList: "<ul></ul>",
  summaryListItem: "<li></li>",
  summaryListLink: "<a></a>",
  inlineFeedbackItem: "<span></span>"
};


/**
 * Optional custom logic to determine after which element to place the inline error message.
 * Use this for situations where the default logic (after field itself, after form hint, after fieldset legend, after custom checkbox) is not sufficient
 * @param $field
 * @return The element after which the error message should be placed. Return null if not used
 */
FFM.customLogicForElementToFollow = function($field) {
	//check for use of custom inputs as used by Filament Group's custominput.js:
	if ($field.parent().is(".custom-checkbox, .custom-radio")) {
		return $field.parent();
	} else if ($field.next().is(".date-picker-control")) {
		return $field.nextAll(".supportText, .date-picker-control").last();
	}
	return null;
};

/** Object containing default set of validator rules.
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
FFM.defaultValidatorRules = {	
		EIN: ["^\\d{9}|\\d{2}-\\d{7}$", "EIN not valid"],
		email: ["^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$", "This is not a valid email address"],
		supplierNameRule: ["^[a-zA-Z0-9 '-\\.]{1,30}$", "Please enter a valid supplier name to proceed with your search"],
		manufacturerNameRule: ["^[a-zA-Z0-9 '-\\.]{1,30}$", "Please enter a valid manufacturer name to proceed with your search"],
		brandNameRule: ["^[a-zA-Z0-9 '-\\.]{1,30}$", "Please enter a valid brand name to proceed with your search"],
		firstName: ["^[a-zA-Z '-]{2,30}$", "Your first name must be between 2 and 30 characters"],
		issuerMarketCoverage: ["^Individual|SHOP|Both$", "You must choose between 'individual, 'SHOP', or 'both'"],
		lastName: ["^[a-zA-Z '-]{2,30}$", "Your last name must be between 2 and 30 characters"],
		marketType: ["^Commercial|Exchange|Medicaid$", "You must choose between 'individual, 'SHOP', or 'both'"],
		middleName: ["^[a-zA-Z '-]{2,30}$", "Your middle name must be between 2 and 30 characters"],
		naicCompanyCode: ["^\\d{6}$", "Your ompany code must be six digits"],
		naicGroupCode: ["^\\d{6}$", "Your group code must be six digits"],
		ncqaAccreditationStatus: ["^Excellent|Commendable|Accredited|Provisional|Interim|In Process|Scheduled$", "This is not a valid option"],
		ncqaOrganizationId: ["^[a-zA-Z0-9]{2,5}$", "This is not a valid organazation ID"],
		networkId: ["\\d{5}", "Your network ID must be 5 digits"],
		notBlank: ["^(?!\\s*$).+", "This field is required"],
		phoneNumber: ["(1-\\d{3}-\\d{3}-\\d{4})|(\\d{3}-\\d{3}-\\d{4})|(1\\d{10})|(\\d{10})", " This is not a valid phone number"],
		phoneNumberExtn: ["(^$)|\\d|\\d{2}|\\d{3}|\\d{4}|\\d{5}|\\d{6}|\\d{7}|\\d{8}|\\d{9}|\\d{10}", "This is not a valid phone extension"],
		productType: ["^PPO Only|HMO Only|POS Only|HMO/POS Combined|PPO/POS Combined|HMO/POS/PPO Combined$", "This is not a valid product type"],
		state: ["^[A-Z]{2}$", "This is not a valid state code"],
		state51: ["^AK|AL|AR|AZ|CA|CO|CT|CZ|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NE|NC|ND|NH|NJ|NM|NY|NV|OH|OK|OR|PA|PR|RI|SC|SD|TN|TX|UT|VA|VI|VT|WA|WI|WV|WY$", "Please choose a state"],
		statusCode: ["\\d|\\d{2}", "This is not a valid state"],
		tIN: ["^\\d{9}|\\d{2}-\\d{7}$", "TIN invalid"],
		title: ["^[a-zA-Z\\.]{1,6}$", "This is not a valid title"],
		uracAccreditationStatus: ["^Full|Conditional|Provisional$", "You must choose between 'Full, 'Conditional' or 'provisional'"],
		uracApplicationNumber: ["^[a-zA-Z0-9]{9,10}$", "this is not a valid application number"],
		uRL: ["^(http(s?)\\:\\/\\/)?(www\\.)?[\\w\\-\\.]+\\.[a-zA-Z]{2,3}\\/*[\\w\\-\\/\\.]*$", "The URL you entered is invalid"],
		weeklyHours : ["^([0-9]|[1-9][0-9])$", "Weekly hours must be between 0 and 99."],
		zipCode: ["^\\d{5}$", "Please enter a 5 digit numeric value in the location field."],
		date: ["^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$", "This is not a valid date"],
		moreThanOneCharacter: [function(value) {
			return (value.length != 1);
		}, "Please enter at least two characters."],
		checked : ["^checked$", "You must check this box before you can continue"],
		"checkboxGroupRange" : [function(value, $group, args){
			var $checkedBoxes = $group.find("input[type=checkbox]:checked");
			var result = $checkedBoxes.length >= args[0] && $checkedBoxes.length <= args[1] ? true : false;
			return {
				result : result,
				params : [args[0], args[1]]
			};
		}, "You must select between %s and %s items"],
		"checkboxGroupMinimum" : [function(value, $group, args){
			var $checkedBoxes = $group.find("input[type=checkbox]:checked");
			var result = $checkedBoxes.length >= args[0] ? true : false;
			return {
				result : result,
				params : [args[0]]
			};
		}, "Please select at least %s item(s)"],
		"radioGroupMinimum" : [function(value, $group, args){
		var $radioButtons = $group.find("input[type=radio]:checked");
			var result = $radioButtons.length >= args[0] ? true : false;
			return {
				result : result,
				params : [args[0]]
			};
		}, "Please select at least %s item(s)"],
		"radioGroupRange" : [function(value, $group, args){
			var $radioButtons = $group.find("input[type=radio]:checked");
			var result = $radioButtons.length >= args[0] && $radioButtons.length <= args[1] ? true : false;
			return {
				result : result,
				params : [args[0], args[1]]
			};
		}, "You must select between %s and %s items"],
		"checkboxGroupMaximum" : [function(value, $group, args){
			var $checkedBoxes = $group.find("input[type=checkbox]:checked");
			var result = $checkedBoxes.length <= args[0] ? true : false;
			return {
				result : result,
				params : [args[0]]
			};
		}, "Please select no more than %s item(s)"],
		sameEmail: [function(value, $group, args){
			//grab elements using id	
			var firstEmail = $("[id=" + args[0] + "]").val();
			var secondEmail = $("[id=" + args[1] + "]").val();
			if(firstEmail.length == 0)
			{
				return true;
			}	
			else if (firstEmail.length > 0 && secondEmail.length == 0)
			{
				return true;
			}	
			else if (secondEmail != firstEmail)
			{
				return false;
			}	
			else
			{
				return true;
			}	
		}, "Please make sure emails match"],
		differentPhoneNumbers: [function(value, $group, args){
			//grab elements using id	
			var firstPhoneNum = $("[id=" + args[0] + "]").val();
			var secondPhoneNum = $("[id=" + args[1] + "]").val();
			if(firstPhoneNum.length == 0 || firstPhoneNum.length != secondPhoneNum.length)
			{
				return true;
			}	
			else if (firstPhoneNum == secondPhoneNum)
			{
				return false;
			}
			
			return true;
		}, "Please make sure phone numbers do not match"],
		phoneNumberExtension: ["^\\d{1,6}$", "This is not a valid phone extension"],
		eeName: ["^[a-zA-Z '-]{1,45}$", "This is not a valid name"],
		notDuplicateName: [function(value, fieldset, args)
		                   {
			// TODO: add DOB
			var firstName = fieldset.find("input[id*='FirstName']").val();
			var middleName = fieldset.find("input[id*='MiddleName']").val();
			var lastName = fieldset.find("input[id*='LastName']").val();
			var suffix = fieldset.find("select[id*='Suffix']").val();
			var dob; // TODO
			
			// this logic only kicks in for AddHouseholderMembers section to make sure duplicates are not added together
			// otherwise it is ignored
			if ((fieldset.attr("id")).indexOf("houseHoldMemberInputFieldset") != -1) {
				var invalid = false;
				// awkward selector required to select only fieldsets prior to the one we're testing, to avoid getting double error messages
				fieldset.closest(".householdMemberInputBlock").prevAll(".householdMemberInputBlock").children("fieldset[id^='houseHoldMemberInputFieldset']").each(function(index, element) {
					var compareFirst = $(element).find("input[id^='householdMemberFirstName']").val();
					var compareMiddle = $(element).find("input[id^='householdMemberMiddleName']").val();
					var compareLast = $(element).find("input[id^='householdMemberLastName']").val();
					var compareSuffix = $(element).find("select[id^='householdMemberSuffix']").val();
					if ((compareFirst.toLowerCase() == firstName.toLowerCase()) && (compareMiddle.toLowerCase() == middleName.toLowerCase()) && (compareLast.toLowerCase() == lastName.toLowerCase() && (compareSuffix == suffix))) {
						invalid = true;
						return false; // breaks out of .each loop
					}
				});
				if (invalid) return false;
			}
			
			// check against other members in the application
			var members = FFM.applicationMembers; // this needs to be set when initializing the validator
			if (typeof members ) {
				for (var i = 0; i < members.length; i++) {
					// if data-index is specified in the fieldset, don't test against it (that's this member)
					if (fieldset.data("index") == i) {
						continue;
					}
					if ((members[i].member.personName.firstName.toLowerCase() == firstName.toLowerCase()) && (members[i].member.personName.middleName.toLowerCase() == middleName.toLowerCase()) && (members[i].member.personName.lastName.toLowerCase() == lastName.toLowerCase()) && (members[i].member.personName.suffixName == suffix)) {
						return false;
					}
				}
		    }
			
			// if we haven't return false above, name is unique and we pass validation
			return true;
		                   },
		                   "You cannot enter people with identical names and dates of birth."
		],
		//eeName: ["^[a-zA-Z]+([ \-'a-zA-Z]*)[a-zA-Z]+$", "This is not a valid name"],
		eeAlpha: ["^[a-zA-Z ]+$", "This is not a valid value"],
		eeNumeric: ["^[0-9]+$", "This is not a valid value"],
		eeCurrency: ["^\\$?\\d{1,3}(,?\\d{3})*(\\.\\d{1,2})?$", 'This is not a valid value'],
		eeHomeAddress: [
			function(value) 
			{	
				var modifiedValue = value;
				
				// remove "." & make lower case
				modifiedValue = modifiedValue.toLowerCase();
				modifiedValue = modifiedValue.replace(/\./g, '');
				modifiedValue = modifiedValue.replace(/\s/g, '');
				
				var regex = new RegExp("^[pobox]");
				
				// if match is found, validation fails
				if (!isEmpty(modifiedValue.match(regex)))
				{			
					return false;
				}
				else
				{
					// aplha-numeric + "."
					regex = new RegExp("[a-zA-Z0-9\\.\\s]+$");

					if (!modifiedValue.match(regex))
					{
						return false;
					}
				}
				
				return true;
			},
			"This is not a valid home address."
		],
		eeAddress: [
			function(value) 
			{	
				var modifiedValue = value;
	
				modifiedValue = modifiedValue.replace(/\s/g, '');

				// alpha-numeric + "."
				var regex = new RegExp("[a-zA-Z0-9\\.\\s]+$");

				if (!modifiedValue.match(regex))
				{
					return false;
				}
				else
				{
					return true;
				}
			},
			"This is not a valid address."
		],
		eeDate: [
			function(value) 
			{	
				//return false here means validation failed
				return isValidDate(value);
			},
			"This is not a valid date."
		],
		eeUIDate: [
			function(value) 
			{	
				// Difference from eeDate is eeUIDate does not allow dates in future (useful for birthdates/etc..)
				//return false here means validation failed
				return isValidUIDate(value);
			},
			"This is not a valid date."
		],
		eeSpecialEnrollmentDate: [
			function(value) 
			{	
				if (isValidUIDate(value))
				{
					var daysDifference = calculateDateDifference(value);
					if (daysDifference > 60)
					{	
						//return false here means validation failed
						return false;
					}
					else
					{
						//return true here means validation passed
						return true;
					}
				}
				else
				{
					//return false here means validation failed
					return false;
				}	
			},
			"This is not a valid date."
		],
		eeFutureDate: [
			function(value)
			{
				if (isValidDate(value) && new Date(value) > getTodaysDate()) {
					return true;
				} else {
					return false;
				}
			},
			"Please select a future date." // FIXME: This text needs to be corrected and stored in an RBK.
		],
		eeFutureDateBeforeEndOfCoverageYear: [
			function(value) 
			{	
				if (isValidDate(value)) { // date must exist
					// and date must be in correct range
                    var todayDate = FFEDateToUiDate(getTodaysDate());
					
					var startDate = addDaysToDate(todayDate, 1);					
                    var endDate = new Date(getCoverageYear(), 11, 31); // December 31 of CoverageYear. Month is 0-based index, but day is 1-based.
					startDate =FFEDateToUiDate(startDate);
                    endDate = FFEDateToUiDate(endDate);
                    
                    if (inValidDateRange(value, startDate, endDate)){
                    	return true;  // valid
                    }
                    else{
                    	return false; // validation failed
                    }
				} else {
					//return false here means validation failed
					return false;
				}	
			},
			"This is not a valid date."
		],
		eeZipcode: ["^[0-9]{5}(-[0-9]{4})?$", "This is not a valid zip code"],
		eePassword: ["^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,20}$", "This is not a valid password"],
		sameEEPassword : [function(value, $group, args){
						var firstPassword = $("[id=" + args[0] + "]").val();
						var secondPassword = $("[id=" + args[1] + "]").val();
						if(firstPassword !== secondPassword)
							return false;
						else
							return true;
					}, "Please make sure passwords match"],
		eeSSN : [
			function(value) 
			{	
				var ssnPart1 = value.substring(0,value.indexOf('-'));
				var ssnPart2 = value.substring(value.indexOf('-')+1,value.lastIndexOf('-'));
				var ssnPart3 = value.substring(value.lastIndexOf('-')+1);
				
				var regexEmpty1 = new RegExp("^.{3}$");
				var regexEmpty2 = new RegExp("^.{2}$");
				var regexEmpty3 = new RegExp("^.{4}$");

				var regexDigit1 = new RegExp("^[0-9]{3}$");
				var regexDigit2 = new RegExp("^[0-9]{2}$");
				var regexDigit3 = new RegExp("^[0-9]{4}$");

				if (isEmpty(ssnPart1) || isEmpty(ssnPart2) || isEmpty(ssnPart3) || !ssnPart1.match(regexEmpty1) || !ssnPart2.match(regexEmpty2) || !ssnPart3.match(regexEmpty3)){
					return false;
				}
				else if (!ssnPart1.match(regexDigit1) || !ssnPart2.match(regexDigit2) || !ssnPart3.match(regexDigit3)){
					return false;
				}
				var valid = validateSSN(value);
				if (!valid)
				{
					return false;
				}

				return true;				
			},
			"This is not a valid Social Security Number."
		],
		eeAlienNumber : ["^[Aa]\-[0-9]{9}$", "This is not a valid alien number"],
		eeNaturalizedCertificateNum : ["^[0-9]{7,12}$", "This is not a valid naturalized certificate number"],
		eeCertificateOfCitizenshipNum : ["^[0-9]{7,12}$", "This is not a valid certificate of citizenship number"],
		eeCardNumber : ["^[a-zA-Z]{3}[0-9]{10}$", "This is not a valid card number"], 
		eeCategoryCode : ["^[a-zA-Z]{1}[0-9]{2}$","This is not a valid category code"],
		eePassportNumber : ["^[0-9]{6,12}$","This is not a valid passport number"],
		eeSevisId : ["^[Nn]\-[0-9]{10}$","This is not a valid SEVIS ID"],
		eeI94Number : ["^[0-9]{11}$","This is not a valid I-94 number"],
		notAnEmail : [function(value) {
			var extRegex = new RegExp("^([a-zA-Z0-9&'?._%+-]+)@((?:[-a-zA-Z0-9]+\\.)+[a-zA-Z]{2,})$");
			
			return !extRegex.test(value);
		}, "This is not a valid user name"],
		eeExt : [function(value) {
			var extRegex = new RegExp(/(.*?(\.asax$|\.ascx$|\.axd$|\.backup$|\.bak$|\.bat$|\.cdx$|\.cer$|\.cfg$|\.cmd$|\.config$|\.com$|\.conf$|\.csproj$|\.csr$|\.dat$|\.dbf$|\.dll$|\.dos$|\.htr$|\.htw$|\.ida$|\.idc$|\.idq$|\.inc$|\.ini$|\.key$|\.licx$|\.lnk$|\.log$|\.mdb$|\.old$|\.pass$|\.pdb$|\.pol$|\.printer$|\.pwd$|\.resources$|\.resx$|\.shtm$|\.sql$|\.stm$|\.sys$|\.vb$|\.vbproj$|\.vbs$|\.vsdisco$|\.webinfo$|\.xsd$|\.xsx$))/i);
			
			return !extRegex.test(value);
		}, "This is not a valid user name"],
		eeQuestionAnswerNotBlank : [function(value, $field) 
									{
										if ($field.parent().parent().find('select').val() !== "" &&
											  $field.val() !== "") {
											return true;
										} else {
											return false;
										}
									}, "Enter a question and answer."],
		eeUserName : ["^(?=.*[0-9@_./-])(?=.*[a-zA-Z])([a-zA-Z0-9@_./-]){6,74}$","This is not a valid user name"],
		eeAtLeast18 : [function(value) {
			var age = calculateAge(value);
			return (age < 18) ? false : true;
		},'User needs to be at least 18 years of age.'],
		zipCodeIDP : [function(value) {
			var zipRegex = new RegExp('(^\\d{5}\-$)|(^\\d{5}\-\\d{4}$)|(^\\d{5}$)');
			return zipRegex.test($.trim(value));
		}, 'Please enter a 5 digit numeric value in the location field.']
	};