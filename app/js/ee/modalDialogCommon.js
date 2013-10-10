//write template and then initialize the diaglog itself
function initializeSteveDialog()
{
	template = _.template($('#steveModalTemplate').html());
	$('#steveModalDynamicSection').empty();
	$('#steveModalDynamicSection').append(template({
		 
	}));
	
	initSteveDialog();
}

//initialize the actual dialog
function initSteveDialog ()
{
	$('#steveModalPage').dialog(
	{
		 autoOpen: false,
		 resizable: false,
		 width: 600,
		 //height: 400,
		 modal: true,
		 descriptionId : "Dynamically Loaded Page",
		 title:"testing"       
	});
}

// Generic initialization methods
// Requires the template and element id to append and what element to
// initialize the dialog on.
// dialogDescription and dialogTitle are optional.
function initializeTemplateAndDialog (template, templateSection, dialogSection, dialogDescription, dialogTitle) {
	$('#' + templateSection).empty();
	$('#' + templateSection).append(template);
	initializeDialog(dialogSection, dialogDescription, dialogTitle);
}

// Generic initialization of dialog only method.
// Requires the element id to initialize the dialog on.
function initializeDialog(dialogSection, dialogDescription, dialogTitle) {
	if (isEmpty(dialogDescription)) {
		// If variable is undefined, it will cause an error.
		dialogDescription = "";
	}
	if (isEmpty(dialogTitle)) {
		// If variable is undefined, it will cause an error.
		dialogTitle = "";
	}
	$('#' + dialogSection).dialog({
		autoOpen : false,
		resizable : false,
		width : 780,
		modal : true,
		descriptionId : dialogDescription,
		title : dialogTitle
	});
	
	$('#' + dialogSection).prev('div').find('.ui-dialog-title').attr('tabindex', '-1').focus();
	
	
}