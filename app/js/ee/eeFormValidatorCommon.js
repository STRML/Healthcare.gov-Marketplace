/*
Contains common methods specific to EE used in association with the FFEFormValidator
*/

//Methods for removing validation

//Removes validaiton from a specific id (i.e. inputs with this id will no longer be validated)
//This method is depreciated. Instead, use removeFormValidationFromField below.
function removeValidationFromId (id)
{
	$('#' + id).removeAttr('data-validate');
}

/*
Removes validation from an entire group
Ex: removeVdliationFromGroup($('#someId :input')
*/
//This method is depreciated. Instead, use removeFormValidationFromGroup below.
function removeValidationFromGroup (group)
{
	group.each(function() {
		removeValidationFromId($(this).prop('id'));
	});
}

//Methods for adding validation

/*
Adds validation to a specific id (i.e. inputs with this id will be validated)
Params: 
id, the id which validation is being added to
validator, a string that contains the validation rules to be applied (Ex. "notBlank")
Ex: addValidationToId('someId', 'notBlank phoneNumber');
*/
//This method is depreciated. Instead, use addFormValidationToField below.
function addValidationToId (id, validator)
{
	$('#' + id).attr('data-validate', validator);
	//$('#' + id).attr('aria-describedby', id + '-feedbackMsg'); //dont think this is needed, but we'll leave in for now just in case
}

/*
Adds validation to an entire group
Params: 
group, the group which validation is being added to
validator, a string that contains the validation rules to be applied (Ex. "notBlank")
Ex: addValidationToId($('#someId :input'), 'notBlank');
*/
//This method is depreciated. Instead, use addFormValidationToField below.
function addValidationToGroup (group, validator)
{
	group.each(function() {
		addValidationToId($(this).prop('id'), validator);
	});
}

/*
Adds multiple validation rules to an id
Params:
id, the id which validation is being added to
validationList, an array of validation rule names
Ex. addValidationListToId('someId', ['notBlank', 'phoneNumber']);
*/
//This method is depreciated. Instead, use addFormValidationToField below.
function addValidationListToId (id, validationList)
{
	var validationString = "";
	
	if (!isEmpty(validationList))
	{
		for (var i = 0; i < validationList.length; i++)
		{
			if (i === 0)
			{
				validationString += validationList[i];
			}
			else
			{
				validationString += ' ' + validationList[i];
			}
		}
		
		addValidationToId(id, validationString);
	}
}

/*
Adds multiple validation rules to an entire group
Params:
group, the group which validation is being added to
validationList, an array of validation rule names
Ex. addValidationListToGroup($('#someId :input'), ['notBlank', 'phoneNumber']);
*/
//This method is depreciated. Instead, use addFormValidationToField below.
function addValidationListToGroup (group, validationList)
{
	group.each(function() {
		addValidationListToId($(this).prop('id'), validationList);
	});
}

/**
 * Wrapper function for FormValidator library to add a new field to the validation process to allow a graceful failure if the
 * FFM.FormValidator hasn't been initialized, e.g. due to validation being disabled.
 * A new field is a field that didn't exist when the FormValidator initialized or didn't have a data-validate attribute at that time 
 * @param {FFM.FormValidator} formValidator a reference to the FFM.FormValidator instance that the field should be registered with
 * @param {HTMLElement|jQuery|string} field The field to validate (or its ID string)
 * @param {string} [validators] Optional space separated string containing validation rule IDs 
 */
function addFormValidationToField(formValidator, field, validators) {
	if (formValidator) {
		formValidator.addValidationToField(field, validators);
	}
}

/**
 * Wrapper function for FormValidator library to remove a field from the validation process to allow a graceful failure if the
 * FFM.FormValidator hasn't been initialized, e.g. due to validation being disabled.
 * Removes a field from the validation process
 * @param {FFM.FormValidator} formValidator a reference to the FFM.FormValidator instance that the field is be registered with
 * @param {HTMLElement|jQuery|string} field The field to remove from validation (or its ID string)
 */
function removeFormValidationFromField(formValidator, field) {
	if (formValidator) {
		formValidator.removeValidationFromField(field);
	}
}

function removeFormValidationFromGroup(formValidator, group) {
	if (formValidator) {
		for (var i = 0; i < group.length; i++)
		{
			formValidator.removeValidationFromField($(group[i]).prop('id'));
		}	
	}
}