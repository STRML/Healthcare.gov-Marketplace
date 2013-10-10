//Contains several custom validators used in the EE Application

//using same reg exes as in the backbone.validations.full
//adds the phone validator (phone is NOT required, but if it is provided, the format will be checked)
Backbone.Validations.addValidator("phoneNotRequired", function(options, attributeName, model, valueToSet)
{
	return phoneValidation(options, attributeName, model, valueToSet, false);
});

Backbone.Validations.addValidator("phoneRequired", function(options, attributeName, model, valueToSet)
{
	return phoneValidation(options, attributeName, model, valueToSet, true);
});

function phoneValidation(options, attributeName, model, valueToSet, isRequired)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}
	if(isRequired)
	{		
		//checks if field is completely blank to send required message
		if(isEmpty(valueToSet))
		{
			return "required";
		}
		//checks if empty spaces were entered to send failed validation message
		
		if(isEmpty(valueToSet))
		{
			return "phoneNotRequired";
		}
	}
	
	if( !isEmpty(valueToSet))
	{
		//validates the phone number format
		var phoneRegex = /^\d{3}\-\d{3}\-\d{4}$/; 
		var test = valueToSet.match(phoneRegex);
		if(!test)
		{
			return "phoneNotRequired";
		}
	}
}

//adds the email validator (email is NOT required, but if provided it will check the format.
Backbone.Validations.addValidator("eeEmail", function(options, attributeName, model, valueToSet)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}
	
	//validates the email format IF provided. 'pattern' assumes is always required...
	if ( !isEmpty(valueToSet)) 
    {
		var regex = new RegExp("^(?!-)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-][^--]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-][^--]+)*@(?:[^--][a-z0-9](?:[a-z0-9-]?[a-z0-9])*\\.)+(?:[^--][a-z0-9](?:[a-z0-9-]?[a-z0-9])*[^-]$)");

		if (!regex.test(valueToSet))
		{
			return "email";
		}
    }
});

Backbone.Validations.addValidator("eeRequired", function(options, attributeName, model, valueToSet)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}
		
	if (isEmpty(valueToSet))
	{
		return 'eeRequired';
	}
});

Backbone.Validations.addValidator("eePattern", function(options, attributeName, model, valueToSet)
{
	return patternValidation(options, attributeName, model, valueToSet, false);
});

Backbone.Validations.addValidator("eePatternRequired", function(options, attributeName, model, valueToSet)
{
	return patternValidation(options, attributeName, model, valueToSet, true);
});


function patternValidation(options, attributeName, model, valueToSet, isRequired)
{

	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}
	if(isRequired)
	{
		//checks if field is completely blank to send required message
		if(isEmpty(valueToSet))
		{
			return "required";
		}
		//checks if empty spaces were entered to send failed validation message
		valueToSet= $.trim(valueToSet);
		if(isEmpty(valueToSet))
		{
			return "eePattern";
		}
	}
	
	if( !isEmpty(valueToSet))
	{
		var match = valueToSet.match(options);

		// if null is returned the valueToSet did not match the pattern
		if (match === null )
		{
			return "eePattern";
		}
	}	

	return;
}


Backbone.Validations.addValidator("eeAlphaNumeric", function(options, attributeName, model, valueToSet)
{
	return alphaNumericValidation(options, attributeName, model, valueToSet, false);
});

Backbone.Validations.addValidator("eeAlphaNumericRequired", function(options, attributeName, model, valueToSet)
{
	return alphaNumericValidation(options, attributeName, model, valueToSet, true);
});


//Does alphanumeric validations- required or not required.
function alphaNumericValidation(options, attributeName, model, valueToSet, isRequired)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}
	if(isRequired)
	{		
		//checks if field is completely blank to send required message
		if(isEmpty(valueToSet))
		{
			return "required";
		}
		//checks if empty spaces were entered to send failed validation message
		valueToSet= $.trim(valueToSet);
		if(isEmpty(valueToSet))
		{
			return "eeAlphaNumeric";
		}
	}	
	
	if(!isEmpty(valueToSet))
	{
		//look to match a NON a-zA-Z0-9 space char
		valueToSet= $.trim(valueToSet);
		var regex = new RegExp("^[a-zA-Z 0-9]+$");
		if (!regex.test(valueToSet))
		{
			return 'eeAlphaNumeric';
		}
	}	
}

Backbone.Validations.addValidator("eeAlpha", function(options, attributeName, model, valueToSet)
{
	return alphaValidation(options, attributeName, model, valueToSet, false);
});

Backbone.Validations.addValidator("eeAlphaRequired", function(options, attributeName, model, valueToSet)
{
	return alphaValidation(options, attributeName, model, valueToSet, true);
});


//Does alphanumeric validations- required or not required.
function alphaValidation(options, attributeName, model, valueToSet, isRequired)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}
	if(isRequired)
	{
		//checks if field is completely blank to send required message
		if(isEmpty(valueToSet))
		{
			return "required";
		}
		//checks if empty spaces were entered to send failed validation message
		valueToSet= $.trim(valueToSet);
		if(isEmpty(valueToSet))
		{
			return "eeAlpha";
		}
	}
	
	if(!isEmpty(valueToSet))
	{
		valueToSet= $.trim(valueToSet);
		//look for a NON a-zA-Z and non SPACE character
		var regex = new RegExp("^[a-zA-Z ]+$");
		if (!regex.test(valueToSet))
		{
			return 'eeAlpha';
		}
	}	
}


Backbone.Validations.addValidator("eeNumeric", function(options, attributeName, model, valueToSet)
{
	return numericValidation(options, attributeName, model, valueToSet, false);
});

Backbone.Validations.addValidator("eeNumericRequired", function(options, attributeName, model, valueToSet)
{
	return numericValidation(options, attributeName, model, valueToSet, true);
});

//Does validations on digit ranges specified in regEx sent from model
Backbone.Validations.addValidator("eeRegex", function(options, attributeName, model, valueToSet)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}	
	if(!isEmpty(valueToSet))
	{	
		if (!valueToSet.match(options)){
			return 'eeRegex';
		}
	}
});

//Does alphanumeric validations- required or not required.
function numericValidation(options, attributeName, model, valueToSet, isRequired)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}	
	//cast to string to handle string as well as number inputs
	if(isRequired)
	{
		//checks if field is completely blank to send required message
		if(isEmpty(valueToSet))
		{
			return "required";
		}
		//checks if empty spaces were entered to send failed validation message
		valueToSet= $.trim(valueToSet);
		if(isEmpty(valueToSet))
		{
			return "eeNumeric";
		}
	}
	if(!isEmpty(valueToSet))
	{
		var regex = new RegExp("^[0-9]+$");

		if (!valueToSet.match(regex))
		{
			return 'eeNumeric';
		}
	}	
}

Backbone.Validations.addValidator("eeDate", function(options, attributeName, model, valueToSet)
{
	if (validationEnabled === false)
	{
		return;
	}
/*	if(isRequired)
	{
		//if required, make sure that a non empty/undefined/spaces only value is entered
		valueToSet= $.trim(valueToSet);	
		if(isEmpty(valueToSet))
		{
			return "required";
		}
	}	*/
	if( !isEmpty(valueToSet))
	{
		if (!isValidUIDate(valueToSet))
		{	
			return 'eeDate';
		}
	}	
});

// Checks to make sure a date is a valid date without restrictions (as of yet)
Backbone.Validations.addValidator("eeValidDate", function(options, attributeName, model, valueToSet)
{
	if (validationEnabled === false)
	{
		return;
	}
/*	if(isRequired)
	{
		//if required, make sure that a non empty/undefined/spaces only value is entered
		valueToSet= $.trim(valueToSet);	
		if(isEmpty(valueToSet))
		{
			return "required";
		}
	}	*/
	if( !isEmpty(valueToSet))
	{
		if (!isValidDate(valueToSet))
		{	
			return 'eeDate';
		}
	}	
});

Backbone.Validations.addValidator("eeSpecialEnrollmentDate", function(options, attributeName, model, valueToSet)
		{
			if (validationEnabled === false)
			{
				return;
			}
		/*	if(isRequired)
			{
				//if required, make sure that a non empty/undefined/spaces only value is entered
				valueToSet= $.trim(valueToSet);	
				if(isEmpty(valueToSet))
				{
					return "required";
				}
			}	*/
			if( !isEmpty(valueToSet))
			{
				if (isValidUIDate(valueToSet))
				{	
					var daysDifference = calculateDateDifference(valueToSet);
					if (daysDifference > 60)
					{	
						return 'eeSpecialEnrollmentDate';
					}
				}
				else{
					return 'eeDate';
				}			
			}	
		});

Backbone.Validations.addValidator("eePregnancyDueDate", function(options, attributeName, model, valueToSet)
{
	if (validationEnabled === false)
	{
		return;
	}
/*	if(isRequired)
	{
		//if required, make sure that a non empty/undefined/spaces only value is entered
		valueToSet= $.trim(valueToSet);	
		if(isEmpty(valueToSet))
		{
			return "required";
		}
	}	*/
	if( !isEmpty(valueToSet))
	{
		if (isValidDate(valueToSet))
		{	
			if (!isValidDueDate(valueToSet))
			{	
				return 'eeDate';
			}
		}
		else{
			return 'eeDate';
		}	
	}
});
Backbone.Validations.addValidator("eeBabiesDueNumeric", function(options, attributeName, model, valueToSet)
		{
			if (validationEnabled === false)
			{
				return;
			}
		/*	if(isRequired)
			{
				//if required, make sure that a non empty/undefined/spaces only value is entered
				valueToSet= $.trim(valueToSet);	
				if(isEmpty(valueToSet))
				{
					return "required";
				}
			}	*/
			if(!isEmpty(valueToSet))
			{
				if(valueToSet < 10)
				{
					var regex = new RegExp("^[0-9]+$");

					if (!valueToSet.match(regex))
					{
						
						return 'eeBabiesDueNumeric';
					}
				}
				else{
					return 'eePattern';
				}
			}
		});

Backbone.Validations.addValidator("eeZipcode", function(options, attributeName, model, valueToSet)
{
	if (validationEnabled === false)
	{
		return;
	}
/*	if(isRequired)
	{
		//if required, make sure that a non empty/undefined/spaces only value is entered
		valueToSet= $.trim(valueToSet);	
		if(isEmpty(valueToSet))
		{
			return "required";
		}
	}	*/
	
	if( !isEmpty(valueToSet))
	{
		var regex = new RegExp("^[0-9]{5}(-[0-9]{4})?$");
		
		if (!valueToSet.match(regex))
		{
			return 'eeZipcode';
		}
	}	
});

Backbone.Validations.addValidator("eeCurrency", function(options, attributeName, model, valueToSet)
{
	return currencyValidation(options, attributeName, model, valueToSet, false);
});

Backbone.Validations.addValidator("eeCurrencyRequired", function(options, attributeName, model, valueToSet)
{
	return currencyValidation(options, attributeName, model, valueToSet, true);
});

//Does monetary validations- required or not required.
function currencyValidation(options, attributeName, model, valueToSet, isRequired)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}
	if(isRequired)
	{
		//checks if field is completely blank to send required message
		if(isEmpty(valueToSet))
		{
			return "required";
		}
		//checks if empty spaces were entered to send failed validation message
		valueToSet= $.trim(valueToSet);
		if(isEmpty(valueToSet))
		{
			return "eeCurrency";
		}
	}
	if( !isEmpty(valueToSet))
	{
		//var regex = new RegExp("^\$?\d{1,3}(\,?\d{3})(\.\d{1,2})?$");
		var regex = /^\$?\d{1,3}(,?\d{3})*(\.\d{1,2})?$/;
		if (!valueToSet.match(regex))
		{
			return 'eeCurrency';
		}
		else {
			valueToSet = valueToSet.replace(/[^\d.]/g, '');
			if (parseInt(roundDollarAmountUp(valueToSet), 10) > 999999) {
				return 'eeCurrency';
			}
		}
	}	
}

//Might want to consider changing eeSSN to 'false' and eeSSNNotRequired to eeSSNRequired and 'true' to be more
//consistent with other functions, was created this way to not cause issues with pages that already call eeSSN
//which was assumed as always being required
Backbone.Validations.addValidator("eeSSN", function(options, attributeName, model, valueToSet)
{
	return ssnValidation(options, attributeName, model, valueToSet, true);
});

Backbone.Validations.addValidator("eeSSNNotRequired", function(options, attributeName, model, valueToSet)
{
	return ssnValidation(options, attributeName, model, valueToSet, false);
});

function ssnValidation(options, attributeName, model, valueToSet, isRequired)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}
	
	if(isRequired)
	{
		//checks if field is completely blank to send required message
		if(isEmpty(valueToSet))
		{
			return "required";
		}
		//checks if empty spaces were entered to send failed validation message
		valueToSet= $.trim(valueToSet);
		if(isEmpty(valueToSet))
		{
			return "incompleteSSN";
		}
	}
	
	if(!isEmpty(valueToSet))
	{
		var ssnPart1 = valueToSet.substring(0,valueToSet.indexOf('-'));
		var ssnPart2 = valueToSet.substring(valueToSet.indexOf('-')+1,valueToSet.lastIndexOf('-'));
		var ssnPart3 = valueToSet.substring(valueToSet.lastIndexOf('-')+1);
		
		var regexEmpty1 = new RegExp("^.{3}$");
		var regexEmpty2 = new RegExp("^.{2}$");
		var regexEmpty3 = new RegExp("^.{4}$");

		var regexDigit1 = new RegExp("^[0-9]{3}$");
		var regexDigit2 = new RegExp("^[0-9]{2}$");
		var regexDigit3 = new RegExp("^[0-9]{4}$");

		if (isEmpty(ssnPart1) || isEmpty(ssnPart2) || isEmpty(ssnPart3) || !ssnPart1.match(regexEmpty1) || !ssnPart2.match(regexEmpty2) || !ssnPart3.match(regexEmpty3)){
			return "incompleteSSN";
		}
		else if (!ssnPart1.match(regexDigit1) || !ssnPart2.match(regexDigit2) || !ssnPart3.match(regexDigit3)){
			return "numbersOnlySSN";
		}
		var valid = validateSSN(valueToSet);
		if (!valid)
		{
			return 'eeSSN';
		}
	}
}

// Might want to consider changing eeEIN to 'false' and eeEINNotRequired to eeEINRequired and 'true' to be more
// consistent with other functions, was created this way to not cause issues with pages that already call eeEIN
// which was assumed as always being required
Backbone.Validations.addValidator("eeEIN", function(options, attributeName, model, valueToSet)
{
	return einValidation(options, attributeName, model, valueToSet, true);
});

Backbone.Validations.addValidator("eeEINNotRequired", function(options, attributeName, model, valueToSet)
{
	return einValidation(options, attributeName, model, valueToSet, false);
});

function einValidation(options, attributeName, model, valueToSet, isRequired)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}
	
	if(isRequired)
	{
		//checks if field is completely blank to send required message
		if(isEmpty(valueToSet))
		{
			return "required";
		}
		//checks if empty spaces were entered to send failed validation message
		valueToSet= $.trim(valueToSet);
		if(isEmpty(valueToSet))
		{
			return "eeEIN";
		}
	}
	
	if(!isEmpty(valueToSet))
	{
		valueToSet= $.trim(valueToSet);	
		var ein1 = valueToSet.substring(0,2);
		var ein2 = valueToSet.substring(2);

		var einRegex1 = new RegExp("^[0-9]{2}$");
		var einRegex2 = new RegExp("^[0-9]{7}$");

		var einArray = ['00', '07', '08', '09', '17', '18', '19', '28', '29', '49', '69', '70', '78', '79', '89', '96', '97'];
		for (var i = 0; i < einArray.length; i++){
			if (ein1 === einArray[i]){
				return "eeEIN";
			}
		}
		if (isEmpty(ein1) || isEmpty(ein2) || !ein1.match(einRegex1) || !ein2.match(einRegex2)){
			return "eeEIN";
		}
	}
}

Backbone.Validations.addValidator("eeAddress", function(options, attributeName, model, valueToSet)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}
	
	var modifiedValue = valueToSet;
	
	modifiedValue = modifiedValue.replace(/\s/g, '');
	
	if(!isEmpty(modifiedValue))
	{	
		// alpha-numeric + "."
		var regex = new RegExp("[a-zA-Z0-9\\.\\s]+$");

		if (!modifiedValue.match(regex))
		{
			return 'pattern';
		}
	}
});

Backbone.Validations.addValidator("eeHomeAddress", function(options, attributeName, model, valueToSet)
{
	//check global validation flag
	if (validationEnabled === false)
	{
		return;
	}
	
	var modifiedValue = valueToSet;
	
	if(!isEmpty(valueToSet))
	{
		// remove "." & make lower case
		modifiedValue = modifiedValue.toLowerCase();
		modifiedValue = modifiedValue.replace(/\./g, '');
		modifiedValue = modifiedValue.replace(/\s/g, '');
		
		var regex = new RegExp("^[pobox]");
		
		// if match is found, validation fails
		if (!isEmpty(modifiedValue.match(regex)))
		{			
			return 'eeHomeAddress';
		}
		else
		{
			// aplha-numeric + "."
			regex = new RegExp("[a-zA-Z0-9\\.\\s]+$");

			if (!modifiedValue.match(regex))
			{
				
				return 'pattern';
			}
		}
	}
});	