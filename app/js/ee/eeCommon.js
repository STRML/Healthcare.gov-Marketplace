//Contains common methods across EE

//Changes the language attribute on the HTML element
//Assumes lang attribute is a string.
function toggleLanguageURL() {

	var eeURLpathArray = window.location.pathname.split( '/' );
	var eeLang = eeURLpathArray[3];
	var eeAuthLang = eeURLpathArray[4];
	
	if(eeLang === 'en_US' || eeAuthLang === 'en_US')
	{
		var url = window.location;
		url = url.toString();
		url = url.replace("en_US","es_MX");
		if(url.indexOf("healthcare.gov") > -1){
			url = url.replace("healthcare.gov","cuidadodesalud.gov");
		}
		window.location = url;
	}

	if(eeLang === 'es_MX' || eeAuthLang === 'es_MX')
	{
		
		var urlSP = window.location;
		urlSP = urlSP.toString();
		urlSP = urlSP.replace("es_MX","en_US");
		if(urlSP.indexOf("cuidadodesalud.gov") > -1){
			urlSP = urlSP.replace("cuidadodesalud.gov","healthcare.gov");
		}
		window.location = urlSP;
	}
}


// Changes the language attribute on the HTML element
// Assumes lang attribute is a string.
function changeLanguage (lang) 
{
	if (!isEmpty(lang) && typeof lang === 'string' ) 
	{
		if(lang === "es_MX")
		{
			lang ="es";
		}
		$('html').prop('lang', lang);
	}
}


//Determines if the using proper path
function determinePath() {
	//for URL Re-write for Marketplace in Prod
		var pathArray = window.location.pathname.split( '/' );
		var eePath = "/" + pathArray[1];
		
	return eePath;
}

function redirectApplicationPath(app) {
	//for non-relative path redirects within the application.
	switch (app)
	{
	case "registration":
		window.location.href(determinePath() + "/" + tenantId + "/" + locale + "/registration");
		break;
	case  "myProfile":
		window.location.href(determinePath() +"/auth"+ "/" + tenantId + "/" + locale + "/myProfile");
		break;
	case "myAccount":
		window.location.href(determinePath() +"/auth"+ "/" + tenantId + "/" + locale + "/myAccount");
		break;
	case "eligibilitySupportStaffDesktop":
		window.location.href(determinePath() +"/auth"+ "/" + tenantId + "/" + locale + "/eligibilitySupportStaffDesktop");
		break;
	case "individualApplication":
		window.location.href(determinePath() +"/auth"+ "/" + tenantId + "/" + locale + "/individualApplication");
		break;
	case "employerSHOPApplication":
		window.location.href(determinePath() +"/auth"+ "/" + tenantId + "/" + locale + "/employerSHOPApplication");
		break;
	case "employeeSHOPApplication":
		window.location.href(determinePath() +"/auth"+ "/" + tenantId + "/" + locale + "/employeeSHOPApplication");
		break;
	case "planCompare":
		window.location.href(determinePath() +"/auth"+ "/" + tenantId + "/" + locale + "/planCompare");
		break;
	case "exemptions":
		window.location.href(determinePath() +"/auth"+ "/" + tenantId + "/" + locale + "/exemptions");
		break;
	case "appealsWorkerDesktop":
		window.location.href(determinePath() +"/auth"+ "/" + tenantId + "/" + locale + "/appealsWorkerDesktop");
		break;
   default:
		window.location.href(determinePath() + tenantId + "/" + locale + "/registration");
		break;
	} 

}


// This function allows for text manipulation useful for stripping off indexes.
// nStr is the string passed into the function
// parameter tells what you want the function to do.
//      1. alpha: Returns only alpha text
//      2. numeric: Returns only numeic text
//      3. alphaNum: Returns both alpha and numeric
//      4. spaces: Returns string without spaces, tabs, and line breaks
//      5. dual: Returns a dual index in the form <index1>_<index2>
function regexFilter (nStr, parameter) {
	var s; // Our working variable
	switch (parameter) {
		case "alpha":
			s = nStr.replace(/\d/g, "");
			break;
		case "numeric":
			s = nStr.replace(/\D/g, "");
			break;
		case "alphaNum":
			s = nStr.replace(/\W/g, "");
			break;
		case "spaces":
			s = nStr.replace(/\s/g, "");
			break;
		case "dual":
			s = nStr.match(/\d+[\_]\d+$/);
			break;
		default:
			console.log("Function args are incorrect.  Should be (String, Parameter).  Entered string is " + nStr);
			s = nStr;
	}
	return s;
}

// This will take a string that has HTML tag data and remove all HTML tags from it.
// Useful for extracting data from dataTables.
function stripHTMLTags(str) {
	var newStr = str.replace(/[<]{1}[\/]*\w+[>]{1}/g, '');
	return newStr;
}

function roundDollarAmountUp(amountStr) {
	if (isEmpty(amountStr)) {
		return "";
	}
	if (amountStr.indexOf('.') !== -1) 
	{
		var decimalValue = amountStr.substring(amountStr.indexOf('.') + 1);
		var valueToAdd = 0;
		if (parseInt(decimalValue,10) > 0) {
			valueToAdd = 1;
		}
		amountStr = amountStr.substring(0,amountStr.indexOf('.'));
		amountStr = amountStr.replace(/[^\d]/g, '');
		var value = parseInt(amountStr,10) + valueToAdd;
		return ""+value;
	}
	else 
	{
		amountStr = amountStr.replace(/[^\d]/g, '');
		return amountStr;
	}
}

//hides errors in one div (just pass it the div id)
function hideErrors(div)
{
	$('div' + div + ' span[id$=Error]').hide();
}

//hides all error divs
function hideAllErrors()
{
	$('span[id$=Error]').hide();
}

var loggingEnabled = false;

//To disable logging. TODO: replace the variable with one from the ffeweb.properties file
if (!loggingEnabled && window.console)
{
    window.console.log = function(){ };
}


function log(message)
{
	if(loggingEnabled)
	{
		console.log(message);
	}
}

//blocks the UI for the save, to avoid users from pushing forward before the page is ready
function blockUIForSave()
{
	blockUIHelper('saveBlocker');
}

function blockUIForLogin()
{
	blockUIHelper('loginBlocker');
}

//for the MY account email validation
function blockUIForEmailValidation()
{
	blockUIHelper('emailValidationBlocker');
}

function blockUIForProfile()
{
	blockUIHelper('profileBlocker');
}


function blockUIHelper(id)
{
	$.blockUI(
	{ 
		message: $('#'+id),
		showOverlay: true,
		// timeout :500, this would be an automatic timeout
		css: { backgroundColor: '#000',border:'none', color: '#fff', padding:'10', opacity:'0.6' }
	}); 

}

//with the detached model validations w/ error bound to this method
//shows error, with or without the INDEX
function showError(model, errors)
{
	var index ='';
	
	//INDEX will be not used it if is empty string, null, undefined.
	if (model.index !== null)
	{
		index = model.index;
	}
	var keys = _.keys(errors);
	var namespaces = model.namespace; //preserve context of 'this' inside the loop
	var resources = model.resourceBundle; 
	var pageName = this.pageName; //view has pageName
	
	//we will loop around all attributes and we will see ALL errors, not just the first one
	 _.each(keys, function(attribute)
	{
		 var errorCurr = errors[attribute][0];
		 var attributeError = errorCurr;
		    // Switch capitalization to what Backbone.Validations expects
			if (attributeError === "minlength") {
				attributeError = "minLength";
			} else if (attributeError === "maxlength") {
				attributeError = "maxLength";
			}
			var $errorElem = $('#'+attribute +'' + index+'Error');
		
			var errorMsg = resources[namespaces + ".shared.validation." + attributeError];
			
			if (errorMsg || (errorMsg = "{0} error")) 
			{
				var fieldLabel = resources[namespaces + "." + pageName + "." + attribute];
				if (fieldLabel || (fieldLabel = "Field")) {
					if (attributeError === "minLength") {
						errorMsg = errorMsg.format(fieldLabel, model.preservedValidate[attribute].minlength);
					} else if (attributeError === "maxLength") {
						errorMsg = errorMsg.format(fieldLabel, model.preservedValidate[attribute].maxlength);
					} 
					// Temporary until someone else can show me a better way to feed in the ranges
					else if (attributeError === "eeRegex") {
						if(attribute === "AlienNumber" || attribute === "CardNumber"){
							fieldLabel = "9";
						}
						else if(attribute === "I94Number"){
							fieldLabel = "11";
						}
						else if(attribute === "SevisID"){
							fieldLabel = "10";
						}
						else if(attribute === "VisaNumber"){
							fieldLabel = "8";
						}
						else if(attribute === "PassportNumber"){
							fieldLabel = "6-12";
						}
						else if(attribute === "NaturalizationCertificateNum" || attribute === "CertCitizenshipNum"){
							fieldLabel = "7-12";
						}
						errorMsg = errorMsg.format(fieldLabel, model.preservedValidate[attribute].eeRegex);
					} else {
						errorMsg = errorMsg.format(fieldLabel);
					}
					console.log('errorElem= ' + $('#'+attribute +'' + index+'Error'));
				}
				
				
			} else 
			{
				errorMsg ='ERROR';
				console.log("Error message key not found.");
			}
			
			$errorElem.empty();
			$errorElem.append(errorMsg);
			$errorElem.show();
			console.log('SHOWING attribute for error- '+'#'+attribute +'' + index+'Error' );
	});
}

//used for conditional validations 
function showErrorMessage(attribute, attributeError, thisModel)
{
	var thisResources =  thisModel.resourceBundle; 
	var thisNamespaces = thisModel.namespace;
	var thisPageName = thisModel.pageName;
	
	var index ='';
	
	//INDEX will be not used it if is empty string, null, undefined.
	// The isEmpty method protects against accidental matching of 0 to null and empty string.
	if(!isEmpty(thisModel.index))
	{
		index = thisModel.index;
	}
	
	var errorId = '#'+ attribute + index + "Error";
	var errorMsg = thisResources[thisNamespaces + ".shared.validation." + attributeError];
	
	if (errorMsg || (errorMsg = "{0} error")) 
	{
		var fieldLabel = thisResources[thisNamespaces + "." + thisPageName + "." + attribute];
		if (fieldLabel || (fieldLabel = "Field")) {
			if (attributeError === "minLength") {
				errorMsg = errorMsg.format(fieldLabel, model.preservedValidate[attribute].minlength);
			} else if (attributeError === "maxLength") {
				errorMsg = errorMsg.format(fieldLabel, model.preservedValidate[attribute].maxlength);
			} else {
				errorMsg = errorMsg.format(fieldLabel);
			}
			console.log('errorId= ' + errorId);
		}
		
	} else 
	{
		errorMsg ='ERROR';
		console.log("Error message key not found.");
	}
	$(errorId).empty();
	$(errorId).append(errorMsg);
	$(errorId).show();
	
}

//gets url from route
function getUrlVarsFromRout() {
	var urls = ['',''];
	urls[0] = window.location.href.slice(window.location.href.lastIndexOf('#')+1);
	urls[0] = urls[0].substring(0, urls[0].lastIndexOf(':'));
	urls[1] = window.location.href.slice(window.location.href.lastIndexOf(':')+1);
	return urls;
}

//got this from the internets
//fetchs the URL parameters
function getUrlVars()
{
	//comment where originated
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


//ssn is expected to be in format xxx-xx-xxxx
//will return an array with those 3 substrings in them
//NOTE we do NOT check for format.
function parseSSN(ssn)
{
	var ssnFormat1 = /^\d{3}-\d{2}-\d{4}$/;
	//var ssnFormat2 = /^\d{9}$/;

	var ssnArray = [];
	
	if(!isEmpty(ssn))
	{
		var ssnPart1 = "";
		var ssnPart2 = "";
		var ssnPart3 = "";
		
		//assuming the ssn format will be either 111-11-1111 or 111111111
		if(ssnFormat1.test(ssn)) { //111-11-1111
			ssnPart1 = ssn.substring(0,3);
			ssnPart2 = ssn.substring(4,6);
			ssnPart3 = ssn.substring(7);
		} else {//111111111
			ssnPart1 = ssn.substring(0,3);
			ssnPart2 = ssn.substring(3,5);
			ssnPart3 = ssn.substring(5);
		}
		
		ssnArray.push(ssnPart1);
		ssnArray.push(ssnPart2);
		ssnArray.push(ssnPart3);
	}
	return ssnArray;
}


//custom validation for SSNs
function validateSSN(ssn)
{
	//null/undefined/empty string check
	if (ssn === undefined || ssn === '' || ssn === null){
		return false;
	}
	//ssn is expected to be in format xxx-xx-xxxx
	var ssnPart1 = ssn.substring(0,ssn.indexOf('-'));
	var ssnPart2 = ssn.substring(ssn.indexOf('-')+1,ssn.lastIndexOf('-'));
	var ssnPart3 = ssn.substring(ssn.lastIndexOf('-')+1);
	
	//ssn cannot start with 000, or 9
	//9-5 removing 666
	//  All, per Brandon we need to remove the 666 field validation on SSN because that is a rule only in EIDM prod and they use 666 for test
	if (ssnPart1 === "000" ||  ssnPart1.substring(0,1) === "9")
	{
		return false;
	}
	
	//ssn cannot have 00 in second part
	if (ssnPart2 === "00")
	{
		return false;
	}
	
	//ssn cannot have 0000 in third part
	if (ssnPart3 === "0000")
	{
		return false;
	}
	
	
	var fullSSN = (ssnPart1 + ssnPart2 + ssnPart3).toString().trim();
	
	// SSN must be 9 chars
	if (fullSSN.length !== 9) {
	    return false;
	}
	
	//ssn cannot be the same digit (i.e. 111-11-1111), and must not contain anything other than digits
	var firstDigit = fullSSN.substring(0,1);
	var regExChecker = new RegExp('[' + firstDigit + ']{9}|[\D]');
	
	if (regExChecker.test(fullSSN)) {
		return false;
	}
	
	return true;
}

//Sets up a popup window, the view should control the opening of it, however.
//note that the display, resize, modal-> should be boolean
//w, h are width and height
function initPopupwindow(id, display, resize, w, h, modal)
{
	//destroys the dialog
	 $("#"+id).dialog("destroy");
	
	 //initializes the dialog
	 $("#"+id).dialog({
         autoOpen: display,
         resizable: resize,
         width: w,
         height: h,
         modal: modal
     });
}


//initialized the MODAL popup windows using simplemodal
//id= id of the modal content
//el= $el that you want it to exist in
//w= width
//h= height
//s= show the modal when initialized true or false
function initPopupwindowModal(id, el, w, h, s)
{	
  $('#'+id).modal({
	   appendTo : "#"+el, //append to whatever EL it goes into
	   persist : false, //persist- to have the data hang out here or NOT
	   maxHeight: h,
	   maxWidth: w,
	   show: s
  });
}


//determines if the input is undefined, null, or empty string.
function isEmpty(item)
{
	var empty = false;
	if(item === undefined || item === null || item === "" )
	{
		empty = true;
	}
	return empty;
}

//8/9/2012 moved methods isCheckbox... and getIndex... and learnMore related ones here from indappcommon

/*determines if the checkbox with the designated ID is checked or not.
assumes that the id passed in is actually a checkbox input*/
function isCheckboxChecked(id)
{
	var checked = false;
	
	if($('#'+id+':checked').length>0)
	{
		checked = true;
	}
	return checked;
}

function isRadioButtonSelected(id)
{
	//right now is same as the checkbox one...
	return isCheckboxChecked(id);
}

// Check to see if an element is visible
function isElementVisible(id) {
	return $('#' + id).is(':visible');
}

// Toggle element's visibility.  Requires the id of the element to toggle
// and whether to 'show' or 'hide' the element. Will toggle both css 
// visibility and the aria-hidden attribute.
function toggleVisibility(id, option) {
	if (option === 'show') {
		$('#' + id).show();
		$('#' + id).prop('aria-hidden', true);
	} else if (option === 'hide') {
		$('#' + id).hide();
		$('#' + id).prop('aria-hidden', false);
	} else {
		console.log('Invalid use of method.  Ensure option is set to "show" or "hide"');
	}
}

//assumes we are fed in a string in the format <id><index>
//Extracts the Index from the end of the string
function getIndexFromEventObj(event)
{
	var id = getIdFromEvent(event);
	var index = getIndexFromId(id);
	return index;
}

function getIndexFromEventObjRemoveYesNo(event)
{
	var id = getIdFromEvent(event);
	 var index = getIndexFromIdRemoveYesNo(id);
	 return index;
}

//grabs the id from the event. Offset is basically the length of the id when the id is
// elementId<Index>  example: personName1   offset = 10, index= 1 
function getIndexFromEvent(event, offset)
{
	var id = getIdFromEvent(event);
	id= id.substring(offset);
	return id;
}

//if the id of the control is snackNumber<index>
//we will pass in "snackNumber"
function getIndexFromEventId(event, idString)
{
	var id = getIdFromEvent(event);
	var offset = idString.length;
	id= id.substring(offset); //really is index now
	return id;
}


function getIdFromEvent(event)
{
	// Escape all dots/periods in the ID
	return event.currentTarget.id.replace('.', '\\.');
}

//assumes we are fed in a string in the format <id><index>
//Extracts the Index from the end of the string
function getIndexFromId(id)
{
	var index =-1;
	if(!isEmpty(id))
	{
		var digits=/[0-9]+/;
		index =id.search(digits);
		index= id.substring(index);
	}
	return index;
}

//assumes we are fed in a string in the format <id><index>
//Removes the Index from the end of the string and returns the id
function removeIndexFromId(id)
{
	var index = -1;
	if(!isEmpty(id))
	{
		var digits = /[0-9]+/;
		index = id.search(digits);
		id = id.substring(0, index);
	}
	return id;
}

//assumes we are fed in a string in the format <id><index><Yes/No>
//example  filesTaxes0Yes
//Extracts the Index from the end of the string
function getIndexFromIdRemoveYesNo(id)
{
	var index = getIndexFromId(id);
	//we have the Yes/No at the end
	var yesIndex = index.indexOf('Yes'); 
	if(yesIndex !== -1)
	{
		index =index.substring(0, yesIndex);
	}
	else
	{
		yesIndex = index.indexOf('No');//is actually No index
		index =index.substring(0, yesIndex);
	}
	return index;
}

//Initializes the Learn More Popups.
//the id should correspond to the section
//ex: id='authorizedRepresentative'
function initLearnMorePopup(id)
{
	initPopupwindow(id+"LearnMoredialog-confirm", false, false, 300, 160, true);
}


//opens the specified learn more popup.
//assumes that we append the LearnMoreTemplate and pass it the id of the section to it.
function openLearnMorePopup(event)
{
	var id= event.currentTarget.id;
	$("#"+id+"dialog-confirm").dialog("open");
}
//Fetches the Learn more Template. Creates it if it does NOT exist yet.
//we always have the same template, so we will only create it once here
var learnMoreTemplate = "";
function getLearnMoreTemplate()
{
	if(learnMoreTemplate === "")
	{
		//if $('#learnMoreTemplate').html() not null?
		learnMoreTemplate = _.template($('#learnMoreTemplate').html());
	}
	return learnMoreTemplate;
}


//sets up the learn more section for the given section where you want to place it (tempalteId) and the particular id
function setLearnMoreTemplate (templateId, divId) 
{           
    //TODO: move this to a global?
    var learnMoreMasterTemplate = getLearnMoreTemplate();
    $('#' + templateId+"LearnMore").empty();
    $('#' + templateId+"LearnMore").append(learnMoreMasterTemplate ({
          "idToUse" : divId
    }));
    
	initPopupwindowModal(templateId, divId, 600, 350, false);
}

//for learn more sections that need to be appeneded with a dynamic number of sections.
//num refers to the index from the loop where this function is being called.
function setLearnMoreTemplateDynamic (templateId, divId, index) {
	var learnMoreMasterTemplate =_.template($('#learnMoreTemplate').html());
	
	$('#' + templateId+"LearnMore" + index).empty();
	$('#' + templateId+"LearnMore" + index).append(learnMoreMasterTemplate ({
		"idToUse" : divId
	}));
	    
	initPopupwindowModal(templateId, divId, 600, 350, false);
}

/*Assumes id is in the format  <elementId>Yes and <elementId>No with values 'Yes' and 'No', respectively
 * Attempting to utilize this method to handle radio buttons NOT set up this way will not be correct.*/
function toggleRadioButton (event)
{
	// This will fix radio buttons not being selected properly in IE7
	if($.browser.msie  && parseInt($.browser.version, 10) === 7) {
		$(this).click(function () {
			this.blur();
			this.focus();
		});
	}
	//determine whether Yes or No was selected
	var target = event.target;
	target = target.id.toString();
			
	//extracts substring before occurrence of "Yes"
	var id = target.substring(0, target.lastIndexOf("Yes"));
	var isYes = true;
	if (isEmpty(id))
	{
		isYes = false;
				
		//extracts substring before occurence of "No"
		id = target.substring(0, target.lastIndexOf("No"));
	}
			
	// "Y" not found, "No" selected
	if (isYes === false) {
		$("#" + id + "Yes").prop("checked", false);
		$("#" + id + "No").prop("checked", true);
	}
	else { //"N" not found, "Yes" selected
		$("#" + id + "No").prop("checked", false);
		$("#" + id + "Yes").prop("checked", true);
	}
}

function toggleRadioGroup (event)
{
	// Method designed to toggle off all radio buttons in a div other than one just selected
	// Works with any number of radio buttons as long as they are enclosed in a div with an id
	
	// This will fix radio buttons not being selected properly in IE7
	if($.browser.msie  && parseInt($.browser.version, 10) === 7) {
		$(this).click(function () {
			this.blur();
			this.focus();
		});
	}
	
	var target = event.target.id;
	var targetID = "#" + target;
	var parentID = $('#' + target).closest('div').attr('id');
	var radioDiv = $('#' + parentID + ' input');
	$(radioDiv).prop('checked', false);
	$(targetID).prop('checked', true);
}

function toggleCustomRadioGroup (event)
{
	// Method designed to toggle off all radio buttons in a div other than one just selected
	// Works with any number of radio buttons. Updated to no longer require an enclosed div
	// so long as the radio buttons are properly enclosed in a fieldset. The fieldset does
	// not need an id to reference it. Any radio buttons that still have a div with id will
	// still function as intended (it does not matter if the parent is a fieldset or div).
	
	// NOTE: You must have applied the customInput class to the desired radio buttons using the
	// customInput method in order for this method to work.
	
	// This will fix radio buttons not being selected properly in IE7
	if($.browser.msie  && parseInt($.browser.version, 10) === 7) {
		$(this).click(function () {
			this.blur();
			this.focus();
		});
	}
	
	var target = getIdFromEvent(event);
	var radioGroup = $('#' + target).parent().parent();
	$(radioGroup).find('input').prop('checked', false);
	$(radioGroup).find('label').removeClass('checked');
	$('[for=' + target + ']').addClass('checked');
	$('#' + target).prop('checked', true);
}

function toggleCustomRadioGroupByFieldset (event)
{
	// Method designed to toggle off all radio buttons in a div other than one just selected
	// Works with any number of radio buttons.
	// This is a variant of toggleCustomRadioGroup that defines the radio group by the 
	// fieldset it is inside. This helps in cases when the radio buttons are not all within
	// the selected input's grandparent element
	
	// This will fix radio buttons not being selected properly in IE7
	if($.browser.msie  && parseInt($.browser.version, 10) === 7) {
		$(this).click(function () {
			this.blur();
			this.focus();
		});
	}
	
	var target = getIdFromEvent(event);
	var radioGroup = $('#' + target).closest('fieldset');
	$(radioGroup).find('input').prop('checked', false);
	$(radioGroup).find('label').removeClass('checked');
	$('[for=' + target + ']').addClass('checked');
	$('#' + target).prop('checked', true);
}

function removeCustomInputClassGroup (id)
{
	// Removes residual "checked" class that is left on custom inputs for an entire div (by ID)
	// and unchecks radio buttons/checkboxes

	// NOTE: You must have applied the customInput class to the desired radio buttons using the
	// customInput method in order for this method to work.
	
	// This will fix radio buttons not being selected properly in IE7
	if($.browser.msie  && parseInt($.browser.version, 10) === 7) {
		$(this).click(function () {
			this.blur();
			this.focus();
		});
	}

	var siblings = $('#' + id + ' input');
	$(siblings).siblings().removeClass('checked');
	$(siblings).prop('checked', false);
}

//Removes residual "checked" class that is left on custom inputs
function removeCustomInputClass (id)
{
	// This will fix radio buttons not being selected properly in IE7
	if($.browser.msie  && parseInt($.browser.version, 10) === 7) {
		$(this).click(function () {
			this.blur();
			this.focus();
		});
	}
	
	$('[for=' + id + ']').removeClass('checked');
	$('#' + id).removeClass('checked');
}

//Adds residual "checked" class that is left on custom inputs
function addCustomInputClass (id)
{
	// This will fix radio buttons not being selected properly in IE7
	if($.browser.msie  && parseInt($.browser.version, 10) === 7) {
		$(this).click(function () {
			this.blur();
			this.focus();
		});
	}
	
	$('[for=' + id + ']').addClass('checked');
	$('#' + id).addClass('checked');
}

function createCustomLabel(context, resources, keyBefore, memberList, keyAfter)
{
	// Method takes a list of designated application members (memberList), and "sandwiches" them between two resource
	// bundles (keyBefore & keyAfter) to generate a statement/question that has the correct placement of commas and "or"
	// for all members, no matter how many there are.
	
	// Temporary empty check until validation is in place
	var members = [];
	var firstName;
	var lastName;
	for(var i = 0; i < memberList.length; i++){
		firstName = memberList[i].member.personName.firstName;
		lastName = memberList[i].member.personName.lastName;
		if(!isEmpty(firstName)){
			if(!isEmpty(lastName)){
				members.push(memberList[i]);
			}
		}
	}
	var label = "";
	label += resources["ffe.ee." + context + "." + keyBefore];
	label += " ";
	for(var x = 0; x < members.length; x++){
		label += createNameLabel(members[x]);
		if (members.length > 1){
	    	if (members.length > 2){
		    	if (x === members.length - 2){
			    	label += " or ";
			    }
		    	else if (x !== members.length - 1){
			    	label += ", ";
			    }
		    }
	    	else if (x === 0){
		    	label += " or ";
		    }
	    }
	}	
	label += " ";
	label += resources["ffe.ee." + context + "." + keyAfter];
	return label;
}

function createNameLabel(memberList)
{
	// Method called by createCustomLabel to generate the names of the application members from the list and appends a suffix if present
	var name = memberList.member.personName.firstName + " " + memberList.member.personName.lastName;
	
	if (!isEmpty(memberList.member.personName.suffixName)){
		name += " " + memberList.member.personName.suffixName;
	}
	return name;
}

function splitPhoneNum(phone)
{
	// Method is fed a full phone number as one number and seperates it into an array of four [3][3][4][ext]
	var phoneNum = [];
	phoneNum[0] = phone.substring(0,3);
	phoneNum[1] = phone.substring(3,6);
	phoneNum[2] = phone.substring(6,10);
	phoneNum[3] = phone.substring(10);
	return phoneNum;
}

//Add commas for number formatting
function addCommas(nStr) {
	if (nStr !== null && nStr !== "" && !isNaN(nStr)) {
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	}
}

function getLanguageText(attribute)
{
	// Returns text for language name based on number from model
	var languageText = "";
	if(!isEmpty(attribute)){
		switch(attribute)
		{
			case "1":
				languageText = "English";
				break;
			case "2":
				languageText = "Spanish";
				break;
			case "3":
				languageText = "Vietnamese";
				break;
			case "4":
				languageText = "Tagalog";
				break;
			case "5":
				languageText = "Russian";
				break;
			case "6":
				languageText = "Portugeuse";
				break;
			case "7":
				languageText = "Other";
				break;	
		}
	}
	return languageText;
}

function childDobCheck(childDob, parentDob)
{
	// Verifies that a child is at least 12 years younger than their parent
	var valid = false;
	if(!isEmpty(childDob) && !isEmpty(parentDob)){
		childDob = new Date(childDob);
		childDobMonth = childDob.getMonth() + 1;
		childDobDay = childDob.getDate();
		childDobYear = childDob.getFullYear() - 12;
		childDob = childDobMonth + "/" + childDobDay + "/" + childDobYear;
		childDob = new Date(childDob);
		parentDob = new Date(parentDob);
		
		if(childDob > parentDob){
			valid = true;
		}
	}
	return valid;
}

function getAppMemberFullName(applicationMember)
{
	// Method used to generate the full name of an application member (including suffix if applicable)
	var name = "";
	var appMember = applicationMember.member.personName;
	if(applicationMember !== null && !isEmpty(appMember.firstName) && !isEmpty(appMember.lastName) ){
		name = appMember.firstName + " " + appMember.lastName;
		if(!isEmpty(appMember.suffixName)){
			name = name + " " + appMember.suffixName;
		}
	}
	return name;
}



 jQuery.download = function(url, data, method){
    	//url and data options required
    	if( url && data ){ 
    		//data can be string of parameters or array/object
    		data = typeof data === 'string' ? data : jQuery.param(data);
    		//split params into form inputs
    		var inputs = '';
    		jQuery.each(data.split('&'), function(){ 
    			var pair = this.split('=');
    			inputs+='<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />'; 
    		});
    		//send request
    		jQuery('<form action="'+ url +'" method="'+ (method||'post') +'">'+inputs+'</form>')
    		.appendTo('body').submit().remove();
    	}
    };	
	
//clones the object passed in
function cloneObject(sourceObject)
{
	return jQuery.extend(true, {}, sourceObject);
}

function filterCriteriaString(arrayOfSelectedCriteria)
{
	var returnString = "";
	for (var i = 0; i < arrayOfSelectedCriteria.length; i++)
	{
		if (i === arrayOfSelectedCriteria.length - 1) 
		{
			returnString += arrayOfSelectedCriteria[i];
		}
		else 
		{
			returnString += arrayOfSelectedCriteria[i];
			returnString += "|";
		}
	}
	return returnString;
}



//test

function unbindFromAll(view) {
    _.each(view.bindings, function (binding) {
        binding.model.unbind(binding.ev, binding.callback);
    });
    view.bindings = [];
}

function dispose (view) 
{
    view.unbindFromAll(); // this will unbind all events that this view has bound to 
    view.unbind(); // this will unbind all listeners to events from this view. This is probably not necessary 
    //because this view will be garbage collected.
    view.remove(); // uses the default Backbone.View.remove() method which removes this.el from the DOM and removes DOM events.
}


//test end
//return true if an error was shown
function showErrorForRequired(field, fieldId, view)
{
	var model = view.model;
	return showErrorIfEmpty(field, fieldId, 'required', model);
}

//returns true if the field is empty/ that is an error was shown.
function showErrorIfEmpty(field, fieldId, validation, aModel)
{
	var empty = false;
	if(isEmpty(field))
	{
		showErrorMessage(fieldId, validation, aModel);
		empty = true;
	}
	return empty;
}

//shows a common error message (application error that is)
function showCommonErrorMessage(model, xhr){
	//{"messages":["Business_ee_sap_ProcessApplicationMemberVerifications_ProcessApplicationMemberVerifications.INTERNAL_ERROR_500.100",
	//"Business_ee_sap_ProcessApplicationMemberVerifications_ProcessApplicationMemberVerifications.INTERNAL_ERROR_500.100",
	//"Business_ee_sap_ProcessApplicationMemberVerifications_ProcessApplicationMemberVerifications.OK_200.OK",
	//"Business_ee_sap_ManageInsuranceApplication_ManageInsuranceApplication.OK_200.OK"]}
	var updatedSysMessages = "";
	var displayMessage="";
	var correlationId="";
	var resources =  model.resourceBundle;
	var exceptionResourcePrefix = "ffe.ee.shared.exceptions.";
	if(!isEmpty(xhr)) {
		var sysMessages = xhr.getResponseHeader('sysmessages');
		correlationId = xhr.getResponseHeader('correlationid');
		//	var sysMessages = "messages:[Business_dm_eap_DocumentManagement_SaveDocument.INTERNAL_ERROR_500.814," +
		//		"					Business_dm_eap_DocumentManagement_SaveDocumentREQUEST_URL_TOO_LARGE_414]}"
		if(!isEmpty(sysMessages)) {
			sysMessages = sysMessages.substring(14, sysMessages.length); //remove until messages:[
			sysMessages = sysMessages.substring(0, (sysMessages.length - 2));//remove ending }]
			sysMessages = sysMessages.replace(/"/g, ""); //remove all \"
			var firstMessage="";
			
			var sysMessagesArray = sysMessages.split(",");
			if(!isEmpty(sysMessagesArray) && sysMessagesArray.length > 0) {
				
				for( var i = 0 ; i < sysMessagesArray.length; i++){
					var message = sysMessagesArray[i];
					if(message.indexOf("OK_200") === -1) {
						var lastUnderscoreInd = message.lastIndexOf("_");
						if(lastUnderscoreInd > 0) {
							message = message.substring((lastUnderscoreInd + 1), message.length);
						}
						if( updatedSysMessages !== "") {
							updatedSysMessages += "<br/>";
						}
						
						updatedSysMessages += resources[exceptionResourcePrefix + message];
						if(isEmpty(firstMessage))
						{
							displayMessage = updatedSysMessages;
						}
					}
				}
			}
		} else {
			updatedSysMessages = "Unexpected Error";
			displayMessage = updatedSysMessages;
		}
	}
	
	//TODO Add code here that if displayMessage is a hub error 500.100 through 500.108 to display custom Hub error message
	
	$('#commonErrorMessageText').append(displayMessage);
	$('#commonErrorMessageBlock').show();
	var errorMessageTemplate = _.template($('#applicationErrorMessageTemplate').html());
	$('#commonErrorMessageCollapsibleContent').empty();
	$('#commonErrorMessageCollapsibleContent').append(errorMessageTemplate({
		"applicationId" : model.get("identifier"),
		"errorDateTime" : dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
		"responseMessages" : displayMessage,
		"errorID" : correlationId
	}));

}


function trimUnneededHTMLTags(response) 
{
	response = response.replace('<HTML>','');
	response = response.replace('<HEAD>','');
	response = response.replace('</HEAD>','');
	response = response.replace('<BODY>','');
	response = response.replace('</BODY>','');
	response = response.replace('</HTML>','');
	
	response = response.replace('<html>','');
	response = response.replace('<head>','');
	response = response.replace('</head>','');
	response = response.replace('<body>','');
	response = response.replace('</body>','');
	response = response.replace('</html>','');
	
	return response;
}

// Method to add a hyphen in a zip code if it is over 5 digits (after the 5th digit for 9 digit zip codes)
function hyphenCheckerZip (event) 
{
	var target = getIdFromEvent(event);
	var checkLength = $("#" + target).val().length;
	
	if (checkLength > 5 && !/[\-]/g.test($('#' + target).val())) {
		$('#' + target).val($('#' + target).val().slice(0, 5) + '-' + $('#' + target).val().substring(5));
	}
}

// Method to take the relationship of a household member and return the text string for that relationship
function memberRelationshipToTaxFiler (relationshipToTaxFiler)
{
	switch(relationshipToTaxFiler){
		case 1:
			relationship = 'Self';
			break;
		case 2:
			relationship = 'Spouse';
			break;
		case 3:
			relationship = 'Parent/Step-parent';
			break;
		case 4:
			relationship = 'Son/Daughter';
			break;
		case 5:
			relationship = 'Stepson/Stepdaughter';
			break;
		case 6:
			relationship = 'Grandchild';
			break;
		case 7:
			relationship = 'Brother/Sister';
			break;
		case 8:
			relationship = 'Domestic Partner';
			break;
		case 9:
			relationship = 'Child of Domestic Partner';
			break;
		case 10:
			relationship = 'Unrelated';
			break;
		case 11:
			relationship = 'Other Relative';
			break;
		default:
			relationship = 'Self';
	}
	return relationship;
}

function getTypeOfESIInsuranceFromCode(iType)
{
	var insuranceName="";
	if(iType === "4")
		{
		insuranceName="Employer Sponsored"; 
		}
	else if(iType === "6")
		{
		insuranceName='Medicaid';
		}
	else if(iType === "2")
		{
		insuranceName='Medicare';
		}
	else if(iType === "7")
		{
		insuranceName='CHIP';
		}
	else if(iType === "12")
		{
		insuranceName='BHP';
		}
	else if(iType === "8")
		{
		insuranceName='TRICARE';
		}
	else if(iType === "9")
		{
		insuranceName='Veteran Health Program';
		}
	else if(iType === "10")
		{
		insuranceName='Peace Corps';
		}
	
	return insuranceName;	
}

function preventDisplayingNullValue(value)
{
	if (isEmpty(value))
		{
		return "N/A";
		}
	else
		{
		return value;
		}
}

function convertToStringYesNo(value)
{
	if (isEmpty(value)) 
		{
		return "Not Determined";
		}
	else if (value===false)
		{
		return "No";
		}
	else if (value===true)
		{
		return "Yes";
		}
	else if (value.toUpperCase()==="FALSE" || value==="N")
		{
		return "No";
		}
	else if (value.toUpperCase()==="TRUE" || value==="Y")
		{
		return "Yes";
		}
	else
		{
		return value;
		}
}

function convertToBoolean(value)
{
	if (value.toUpperCase()==="YES" || value==="Y")
		{
		return 'True';
		}
	else if (value.toUpperCase()==="NO" || value==="N")
		{
		return 'False';
		}
	else
		{
		return value;
		}
}

function convertArrayToCommaDelimitedString(arrayOfValues)
{
	var returnString = "";
	for (var i = 0; i < arrayOfValues.length; i++)
	{
		if (i === arrayOfValues.length - 1) 
		{
			returnString += arrayOfValues[i];
		}
		else 
		{
			returnString += arrayOfValues[i];
			returnString += ",";
		}
	}
	return returnString;
}

// Method to calculate the FPL amount for a household a display it in the screener tool
function calculateFPL (members, fplState)
{
	var fpl = "";
	if (!isEmpty(members) && !isEmpty(fplState)){
		// FPL for Alaska
		if (fplState === 'AK'){
			fpl = (((419*(members)+777)*4.2)*12);
		}
		// FPL for Hawaii
		else if (fplState === 'HI'){
			fpl = (((385*(members)+718)*4.2)*12);
		}
		// FPL for all other states
		else {
			fpl = (((335*(members)+623)*4.2)*12);
		}
		fpl = Math.round(fpl);
		fpl = addCommas(fpl);
		$("#fplText").text("$" + fpl);
	}
}

// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser)
function getInternetExplorerVersion(){
	var rv = -1; // Return value assumes failure.
	if (navigator.appName === 'Microsoft Internet Explorer'){
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
		if (re.exec(ua) !== null){
			rv = parseFloat( RegExp.$1 );
		}
	}
	return rv;
}

/*
* Determines whether or not a member's age is within a certain range.
* equalToLowerLimit = true would result in less than equal to being used,
* equalToLowerLimit = false would result in strictly less than being used.
* Similar goes for equalToUpperLimit.
*
* Ex. isMemberInAgeRange (member, 10, true, 50, false) would be equivilant to
* memberAge >= 10 && < 50.
*/
function isMemberInAgeRange (member, lowerLimit, equalToLowerLimit, upperLimit, equalToUpperLimit)
{
	var memberIsInRange = false;
	if (!isEmpty(member))
	{
		var memberAge = getMemberAge(member);
		
		if (equalToLowerLimit === true && equalToUpperLimit === true)
		{
			if (memberAge >= lowerLimit && memberAge <= upperLimit)
			{
				memberIsInRange = true;
			}
		}
		else if (equalToLowerLimit === true && equalToUpperLimit === false)
		{
			if (memberAge >= lowerLimit && memberAge < upperLimit)
			{
				memberIsInRange = true;
			}
		}
		else if (equalToLowerLimit === false && equalToUpperLimit === true)
		{
			if (memberAge > lowerLimit && memberAge <= upperLimit)
			{
				memberIsInRange = true;
			}
		}
		else //equalToLowerLimit === false && equalToUpperLimit === false
		{
			if (memberAge > lowerLimit && memberAge < upperLimit)
			{
				memberIsInRange = true;
			}
		}
		
		return memberIsInRange;
	}
	else
	{
		return false;
	}
}

//isMemberInAgeRange helper methods
//constants are located in eeConstants.js
function isMemberAgeInRangeForFosterCare (member)
{	
	if (!isEmpty(member))
	{
		return isMemberInAgeRange(member, MINIMUM_FOSTER_CARE_AGE, true, MAXIMUM_FOSTER_CARE_AGE, false);
	}
	else
	{
		return false;
	}
}

function isMemberAgeInRangeForPregnancy (member)
{
	if (!isEmpty(member))
	{
		return isMemberInAgeRange(member, MINIMUM_PREGNANCY_AGE, false, MAXIMUM_PREGNANCY_AGE, false);
	}
	else
	{
		return false;
	}
}

function isMemberAgeInRangeForStudent (member)
{
	if (!isEmpty(member))
	{
		return isMemberInAgeRange(member, MINIMUM_STUDENT_AGE, true, MAXIMIM_STUDENT_AGE, false);
	}
	else
	{
		return false;
	}
}

function applyIncomeFormatting(thisPassed)
{
	$(thisPassed).formatCurrency(
	{
		colorize: true, 
		negativeFormat: '-%s%n', 
		roundToDecimalPlace: 2 
	});	
}

function applyIncomeFormattingForId(id)
{
	applyIncomeFormattingHelper('id', id);
}
function applyIncomeFormattingHelper(typeOfSelector, idOrClass)
{
	var selector ="";
	if(typeOfSelector ==='id')
	{
		selector = '#'+ idOrClass;
	}
	else
	{
		//is a class
		selector='.'+idOrClass;
	}

	$(selector).blur(function()
	{
		$(selector).formatCurrency(
		{
			colorize: true, 
			negativeFormat: '-%s%n', 
			roundToDecimalPlace: 2 
		});	
	});
}

function applyIncomeFormattingForClass(theClass)
{
	applyIncomeFormattingHelper('class', theClass);
}

//adds date masking to a particular id
function addDateMaskingToId(id)
{
	$('#'+id).mask("99/99/9999", { placeholder: " " });
}

//adds ssn masking to a particular id
function addSSNMaskingToId(id)
{
	$('#'+id).mask("999-99-9999", { placeholder: " " });
}

//asks masking for a phone number to a particular ID
function addPhoneMaskingToId(id)
{
	$('#'+id).mask("999-999-9999", { placeholder: " " });
}

//hides the summary errors  container, dumps out any error messages on the page
//for new Sprint 16 validation
function hideValidationErrors()
{
	$('.errorSummaryContainer').remove();
	$('.feedbackMsg').empty();
}

//returns a substring of a string after an offset
//for example getSubstringAfterOffset("thisStringAfterOffsetIsAnotherString", "thisStringAfterOffsetIs")
//would return "AnotherString"
function getSubstringAfterOffset(originalString, offset)
{
	var offsetLength = offset.length;
	var newString = originalString.substring(offsetLength);
	
	//TODO: add some error checking, don't have time right now
	
	return newString;
}

//returns an array with two elements, the two indexes extracted from an id
//index must be in the format idStringX_Y, where X & Y are indexi of variable length
//for example, getTwoIndexesFromId("incomeIndex0_1", "incomeIndex") would return [0, 1]
function getTwoIndexesFromId (originalString, offset)
{
	var indexString = getSubstringAfterOffset(originalString, offset);
	var firstIndex = indexString.substr(0, indexString.indexOf("_"));
	var secondIndex = indexString.substring(indexString.lastIndexOf("_")+1);
	
	firstIndex = parseInt(firstIndex, 10);
	secondIndex = parseInt(secondIndex,10);
	
	//TODO: add MORE error checkind, don't have time right now
	if (isNaN(firstIndex) || isNaN(secondIndex))
	{
		return null;
	}
	
	var indexArray = [firstIndex, secondIndex];
	
	return indexArray;
}

//From UX team
//affix function to apply on page load, or content update
// Used for sidebars in browsing sections of the site
function runAffix() {

    var targs = ['.utilitySection', '.subNav', '.overlayBox'];

    //run if affixloaded not defined
    if(!affixloaded){

        //store number to append to leftNav class
        affixLength = 0;

        $.each(targs, function(index, value) {

            //if it exist, run affix function
            if($(value).length > 0 ){
                $(value).affix({offset: {top: 60}});
                affixLength++;
            }

        });

        affixloaded = true; //update flag variable 

    }
	
	if ($('#leftNav').length > 0) {
		var left_nav_top = $('#leftNav').offset().top;
		var y, height, articleHeight, footerTop;
		height = $('#leftNav').height();
		articleHeight = $('.cardsContainer').height();
		 
		/* 
			only run affix on #leftNav if following condition is met
			runAffix can be call anytime page height will be altered by dynamic content
		*/

		if(  $('[class^="navContainer"]').length > 0 ) {
			if (height < articleHeight){
			  $('#leftNav').affix({offset: {top: 60}}).addClass("affixRows" + affixLength ); //run affix and apply css class for leftNav postioning; 
			} 
			
			if ($(window).width() < 1000) 
			{
				//$('#leftNav').removeClass('affix');
				$('#leftNav').addClass('vertical-fix');
				$(window).scroll(function () {
					if (!$('#leftNav').hasClass('fixed-bottom'))
					{
						$('#leftNav').css({'top': $(this).scrollTop() + 60});
					}
				});
			}
		}
		
		if ($('#footer').length > 0) {	
			$(window).on('scroll', function ()
			{
				y = $(this).scrollTop();
				footerTop = $('#footer').offset().top;
				
				if ((y >= left_nav_top && height < articleHeight) || $('#leftNav').hasClass('affix')) 
				{
					//$('#leftNav').addClass('fixed');
					
					if (y > footerTop - height) {
						$('#leftNav').addClass('fixed-bottom');
						$('#leftNav').css('top', 'auto');
					} 
					else {
						$('#leftNav').removeClass('fixed-bottom');
					}
				} 
				else {
					$('#leftNav').removeClass('fixed');
					$('#leftNav').css('top', 'auto');
				}
			}); 
		}
	}
}

// Previous code would run this in a setInterval loop that had a broken check
// for tpls to load
// Will need to find a more central place to put this, but it seems to work here.
// Will more when I can test more of the site - STRML
setTimeout(runAffix, 100);


/**
 * Converts a priority type code to a priority type name
 * @param taskPriorityStatus The priority type code
 * @returns {String} The priority type name
 */
function priorityCodeToName(taskPriorityStatus) {
	if (taskPriorityStatus === "1")
	{	
		return "Very High";
	}	
	else if (taskPriorityStatus === "2")
	{
		return "High";
	}	
	else if (taskPriorityStatus === "3")
	{
		return "Medium";
	}	
	else if (taskPriorityStatus === "4")
	{
		return "Low";
	}	
	else
	{
		return "Lowest";
	}	
}

/**
 * Converts a priority type name to a priority type code
 * @param taskPriorityStatus The priority type name
 * @returns {String} The priority type code
 */
function priorityNameToCode(taskPriorityStatus) {
	if (taskPriorityStatus === "Very High") {	
		return "1";
	} else if (taskPriorityStatus === "High") {
		return "2";
	} else if (taskPriorityStatus === "Medium" ||
		taskPriorityStatus === "Normal") {
		return "3";
	} else if (taskPriorityStatus === "Low") {
		return "4";
	} else if (taskPriorityStatus === "Lowest") {
		return "5";
	} else {
		return "NaN";
	}
}

//hide the user menu options that are NOT logout
function hideUserMenuOptions()
{
	//if terms and conditions are NOT agreed 
	$('#landingPageMenuLink').hide();
	$('#helpProfile').hide();
}

//show CCR specific menu options
function showCCRUserMenuOptions()
{
	$('#landingPageMenuLink').show();
}

//show general user menu options
function showUserMenuOptions()
{
	$('#landingPageMenuLink').show();
	$('#helpProfile').show();
	
}

function setTitleFromResource(strTitle) {
    if (isEmpty(strTitle)) {
        strTitle = '';
    }
    // this will convert htmlencoded characters for us
    strTitle = $('<div>' + strTitle + '</div>').text();
    document.title = strTitle;
}
/**
 * takes an array of id for inputs and checks them for required values 
 * @param requiredFields
 * @returns {Boolean}
 */	
function checkForAllExpectedValues( requiredFields ) {
	var success = true;
	for( var i = 0; i < requiredFields.length; i++ )
	{
		if ( !checkForExpectedValue( requiredFields[i] ) ) { success = false; }
	}
	return success;
}
/**
 * checks the array (or value) passed in to see if any of them
 * have data assosiated with it
 * @param inputID
 * @returns
 */
function checkForExpectedValue(inputID) {
	if( Object.prototype.toString.call( inputID ) === '[object Array]' )	//if an array
	{
		for( var i=0; i < inputID.length; i++ )
		{
			if ( setErrorOnEmpty( inputID[i] ) )
			{
				for( var j=0; j < inputID.length; j++ )
				{
					removeError( inputID[j] );
				}
				return true;
			}
		}
		return false;
	}
	else
	{
		return setErrorOnEmpty( inputID );
	}
}
/**
 * checks to see if the input with the supplied ID has data assosiated with it
 * @param inputID
 * @returns {Boolean}
 */
function setErrorOnEmpty(inputID,message) {
	message = typeof message !== 'undefined' ? message : "Important: This field is required";
	if ( $('#'+inputID).val() == "" ) {
		setError(inputID,message);
		return false;
	}
	removeError( inputID );
	return true;
}
function setError(inputID,message) {
	$('#'+inputID).addClass( 'errorField' );		
	$('#'+inputID+'-feedbackMsg').remove();
	$('#'+inputID).parent().append( '<span id="' + inputID + '-feedbackMsg" class="feedbackMsg error" tabindex="-1">' + message + '</span>' );
}
/**
 * checks to see if the input with the supplied ID has data assosiated with it
 * @param inputID
 * @returns {Boolean}
 */
function hasValue(inputID) {
	if ( $('#'+inputID).val() == "" ) {
		return false;
	}
	return true;
}
/**
 * remove any error message on the input field
 * @param inputID
 */
function removeError(inputID) {
	$('#'+inputID).removeClass( 'errorField' );
	$('#'+inputID+'-feedbackMsg').remove();
}