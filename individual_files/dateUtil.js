//Various Date Utility methods

//from Menka
(function ($)
   {
		$.fn.enableFormElements = function (parentLevel) {
	        if (parentLevel === null) 
			{
				parentLevel = 2;
			}
			
	        var elem = this;
	        for (var i = 0; i < parentLevel; i++) 
			{
				elem = $(elem).parent();
			}
			
	        if ($(this).text() === "Edit") {
	            $(elem).find('input, select').removeAttr('disabled');
	        }
	    };
	    
	    //creates function to add DatePicker to an element.
	    $.fn.addDatePicker = function () {
	        // createDatePicker seems to require an ID, so if no ID, create guid!
	        if (!$(this).attr('id').length)
			{
				$(this).attr('id', somewhatRandomIdGenerator());
			}	
	        // initialize datepicker
	       
	        eval("datePickerController.createDatePicker({ formElements: { \"" + $(this).attr('id') + "\" : \"%m/%d/%Y\" }})");
	    };
   }
)(jQuery);


//from Menka
//NOTE: Bruce indicates that this may not actually give *that* unique of IDs
function somewhatRandomIdGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

//makes sure all date pickers are datepickers, called mainly because of the various template refreshes we do (overwrites the initial page)
function reinitializeDatePickers()
{	
	$(".select_date").each(function(item){
		$(this).addDatePicker();
	});
}

//returns Today's date in the format YYYY-MM-DD
function getTodaysDate()
{
	var todaysDate = new Date();
	
	return todaysDate;
}

//Truncates the date from the  format:"2012-02-27 19:00:00.0-050" to "2012-02-27"
function truncateDate(dateIn)
{
	if(!isEmpty(dateIn))
	{
		if(dateIn.length >10)
		{
			return dateIn.substring(0,10);
		}	
	}
	else
	{
		return getTodaysDate();
	}
	
}


//takes the date as a 1970-01-01 19:00:00.0-0500 or 1970-01-01, converts it to YYYY-MM-DD to be saved 
function dateToFFEDate(dateIn)
{
	var temp = dateIn.toString();
	var dateMod = "";
	if(!isEmpty(dateIn))
	{
		//make sure is 10 chars //1970-01-01
		dateMod= temp.substring(0,10);
		var year = dateMod.substring(6);
		
		var day= dateMod.substring(3,5);
		var month= dateMod.substring(0,2);
		dateMod= year+"-"+month+'-'+day;
	}
	else {
		dateMod = dateToFFEDate(new Date());
	}
	return dateMod;
}

//Takes in the UI date (MM/DD/YYYY) and converts it to YYYY-MM-DD
//which will be used on the REST and beyond to save
function uiDateToFFEDate(dateIn)
{
	var dateMod ="";
	if(!isEmpty(dateIn))
	{
		//assuming is the correct format if not null/empty
		dateMod = new Date( dateIn);

		var month= dateMod.getMonth();
		month = month.toString();

		var theDate = dateMod.getDate();
		theDate = theDate.toString();
		
		var year = dateMod.getFullYear();

		if(theDate.length===1)
		{
			theDate ="0".concat(theDate);
		}	
		
		if(month.length===1)
		{
			month = "0".concat(month);
		}	

		//create new java date
		dateMod = new Date(year, month, theDate, 0, 0, 0, 0);
		
	}
	return dateMod;
}

//takes the date as a 1970-01-01 19:00:00.0-0500 or 1970-01-01, converts it to
//01/01/1970  aka from YYYY-MM-DD to MM/DD/YYYY
//NOTE this is done on the vm page itself... for now
function FFEDateToUiDate(dateIn)
{
	var dateMod ="";
	if(!isEmpty(dateIn))
	{
		dateMod = new Date(dateIn);
	
		var month= dateMod.getMonth() +1;
		month = month.toString();

		var theDate = dateMod.getDate();
		theDate = theDate.toString();
		
		var year = dateMod.getFullYear();
	
		if(theDate.length===1)
		{
			theDate ="0".concat(theDate);
		}	
		if(month.length===1)
		{
			month = "0".concat(month);
		}		
		dateMod= month+"/"+theDate+"/" +year;
		
		// Fix for IE date formatting
		if(dateMod === "NaN/NaN/NaN") {
			dateMod = dateIn;
			var dateYear = dateMod.substring(0,4);
			var dateMonth = dateMod.substring(5,7);
			var dateDay = dateMod.substring(8);
			dateMod = dateMonth + "/" + dateDay + "/" + dateYear;
		}
	}
	return dateMod ;
}


//prevents an invalid date from being passed to the DB
function preventInvalidDate(dateIn)
{
	if(isEmpty(dateIn) || dateIn === "NaN-NaN-NaN" || dateIn === 'NaN/NaN/NaN')
	{
		dateIn = "";
	}
	return dateIn;
}

function calculateAge(dobIn) {
	var curr = new Date(); 
	var dob = new Date(dobIn);  
	if (curr.getMonth() < dob.getMonth() || 
            (curr.getMonth() === dob.getMonth() && curr.getDate() < dob.getDate())) {
        return (curr.getFullYear() - dob.getFullYear() - 1);
    } else {
        return (curr.getFullYear() - dob.getFullYear()); 
    }
}

function addDaysToDate(dateIn, daysToAdd)
{
	myDate = new Date(dateIn);
	return new Date(myDate.getTime() + daysToAdd*24*60*60*1000);
}

// Specifically for ESD only (hence the 90 day part)
function calculateDaysDifference(dateOne)
{
	var today = new Date();
	var msecPerMinute = 1000 * 60;
	var msecPerHour = msecPerMinute * 60;
	var msecPerDay = msecPerHour * 24;
	var interval = today.getTime() - new Date(dateOne).getTime();
	return 90 - (Math.floor(interval / msecPerDay ));
}


// For general use
function calculateDateDifference(dateIn)
{
	var today = new Date();
	var msecPerMinute = 1000 * 60;
	var msecPerHour = msecPerMinute * 60;
	var msecPerDay = msecPerHour * 24;
	var interval = today.getTime() - new Date(dateIn).getTime();
	return Math.floor(interval / msecPerDay );
}

//Determines if date is valid (can be a future date)
function isValidDate(dateIn)
{
	var valid = false;
	
	var month = dateIn.substring(0,dateIn.indexOf('/'));
	var day = dateIn.substring(dateIn.indexOf('/')+1,dateIn.lastIndexOf('/'));
	var year = dateIn.substring(dateIn.lastIndexOf('/')+1);
	
	month = parseInt(month, 10);
	day = parseInt(day, 10);
	year = parseInt(year, 10);
	
	//check to see if is empty, etc.
	dateIn = preventInvalidDate(dateIn);
	
	if(!isEmpty(dateIn))
	{
		//TODO :now check format, may need more?
		var regex=/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
		if(regex.test(dateIn))
		{
			var status = Date.parse(dateIn);
			var newDate = new Date(dateIn);
			
			if(!isNaN(status) && !isNaN(newDate))
			{	
				if (month >= 1 && month <= 12){
					//check day range in months with 31 days
					if (month === 1 || month === 3 || month === 5 || month === 7 ||
						month === 8 || month === 10 || month === 12)
					{					
						if (day >= 1 && day <= 31)
						{
							valid = true;
						}					
					}
					//check day range in months with 30 days
					else if (month === 4 || month === 6 || month === 9 || month === 11)
					{
						if (day >= 1 && day <= 30)
						{
							valid = true;
						}
					}
					//check day range in february
					else if (month === 2)
					{
						//check for leap year
						if (isLeapYear(year))
						{
							if (day >= 1 && day <= 29)
							{
								valid = true;
							}
						}
						else
						{
							if (day >= 1 && day <= 28)
							{
								valid = true;
							}
						}
					}
				}
			}	
		}
	}
	return valid;
}

//determines if UI date is valid (can NOT be a future date)
function isValidUIDate(dateIn)
{
	var valid= false;
	
	var month = dateIn.substring(0,dateIn.indexOf('/'));
	var day = dateIn.substring(dateIn.indexOf('/')+1,dateIn.lastIndexOf('/'));
	var year = dateIn.substring(dateIn.lastIndexOf('/')+1);
	
	var today = new Date();
	month = parseInt(month, 10);
	day = parseInt(day, 10);
	year = parseInt(year, 10);
	
	//check to see if is empty, etc.
	dateIn = preventInvalidDate(dateIn);
	if(!isEmpty(dateIn))
	{
		//TODO :now check format, may need more?
		var regex=/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
		if(regex.test(dateIn))
		{
			var status = Date.parse(dateIn);
			var newDate = new Date(dateIn);
			
			if(!isNaN(status) && !isNaN(newDate))
			{			
				// more in-depth date checks
				//check year range
				//1912 came from sprint 9 requirements
				if (year >= 1900 && year <= today.getFullYear())
				{
					//check against today's date
					if (year === today.getFullYear())
					{
						if (month === (today.getMonth()+1)) //month is zero indexed, so add 1
						{
							//if day is less or equal, date is valid
							if (day <= today.getDate())
							{
								valid = true;
							}
							//day is greater, so date is invalid
							else
							{
								valid = false;
							}
						}
						else if(month < (today.getMonth()+1)){
							valid = true;
						}
					}
					
					//check month range
					else if (month >= 1 && month <= 12)
					{
						//check day range in months with 31 days
						if (month === 1 || month === 3 || month === 5 || month === 7 ||
							month === 8 || month === 10 || month === 12)
						{					
							if (day > 0 && day < 32)
							{
								valid = true;
							}					
						}
						//check day range in months with 30 days
						else if (month === 4 || month === 6 || month === 9 || month === 11)
						{
							if (day >= 1 && day <= 30)
							{
								valid = true;
							}
						}
						//check day range in february
						else if (month === 2)
						{
							//check for leap year
							if (isLeapYear(year))
							{
								if (day >= 1 && day <= 29)
								{
									valid = true;
								}
							}
							else
							{
								if (day >= 1 && day <= 28)
								{
									valid = true;
								}
							}
						}
					}
				}
			}	
		}
	}
	return valid;
}

//determines if a given year is a leap year or not
function isLeapYear(yearIn)
{	
	//if year is not divisible by 4, its NOT a leap year
	if (yearIn%4 !== 0)
	{
		return false;
	}
	else
	{
		//if year is divisible by 4 
		//& not divisible by 100 it is a leap year
		if (yearIn%100 !== 0)
		{
			return true;
		}
		else
		{
			//if year is divisible by 4
			//& divisible by 100
			//& not divisible by 400 it is NOT a leap year
			if (yearIn%400 !== 0)
			{
				return false;
			}
		}
	}
	
	//if year is divisible by 4
	//& divisible by 100
	//& divisible by 400 it is a leap year
	return true;
}

//determine if due date is valid
//based on 10-month pregnancy (sprint 9 requirements)
function isValidDueDate(dateIn)
{
	var valid= false;
	
	var month = dateIn.substring(0,dateIn.indexOf('/'));
	var day = dateIn.substring(dateIn.indexOf('/')+1,dateIn.lastIndexOf('/'));
	var year = dateIn.substring(dateIn.lastIndexOf('/')+1);
	
	var today = new Date();
	
	month = parseInt(month, 10);
	day = parseInt(day, 10);
	year = parseInt(year, 10);
	
	//check to see if is empty, etc.
	dateIn = preventInvalidDate(dateIn);
	if(!isEmpty(dateIn))
	{
		//TODO :now check format, may need more?
		var regex=/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
		if(regex.test(dateIn))
		{
			var status = Date.parse(dateIn);
			var newDate = new Date(dateIn);
			
			if(!isNaN(status) && !isNaN(newDate))
			{
				var timeInADay = parseInt(1000*60*60*24, 10);
				
				today = parseInt(today.getTime(), 10);
				newDate = parseInt(newDate.getTime(), 10);
				
				var dateDifference = calculateDateDifference(dateIn);

				if (parseInt((newDate - today)/timeInADay, 10) <= PREGNANCY_LENGTH && dateDifference <= 21)
				{
					valid = true;
				}
			}
		}
	}

	return valid;
}

//determines if UI date is in valid date range given set parameters
function inValidDateRange(dateIn, startDate, endDate)
{
	var valid = false;
	if(isValidDate(dateIn) && isValidDate(startDate) && isValidDate(endDate)){		
		dateIn = new Date(dateIn);
		startDate = new Date(startDate);
		endDate = new Date(endDate);
		if (dateIn >= startDate && dateIn <= endDate){
			valid = true;
		}
	}
	return valid;
}


//Return the month name
//long option means it will use the full month name "January"
//short option means it will use short month name "Jan"
//date must be in format MM/YYYY
function getMonthNameAndYear(unformattedDate,option)
{
	var monthNames = [ "January", "February", "March", "April", "May", "June", 
		"July", "August", "September", "October", "November", "December" ];
	if(isEmpty(unformattedDate) || unformattedDate.length !== 7) 
	{
		return "";
	}
	var monthNumber = unformattedDate.substring(0,2);
	var yearNumber = unformattedDate.substring(2,7);
	var formattedYear = yearNumber.replace("/",", ");

	if(option==="long")		
	{
		return monthNames[parseInt(monthNumber,10)-1] + formattedYear;
	}
	else if(option === "short")
	{
		return monthNames[parseInt(monthNumber,10)-1].substring(0,3) + formattedYear;
	}
}

//Reflects the current Enrollment Year.
//WILL need to get updated logic once the 
function getCurrentEnrollmentYear()
{
	//TODO: add logic
	//hardcoded 2014 now
	return "2014";
}

function getCurrentYear()
{
	//TODO: implement real getting of current year
	return new Date().getUTCFullYear();
}

function getCoverageYear()
{
	//TODO: implement real getting of coverage year
	return 2014;
}

function getNextYear()
{
	return getCurrentYear() + 1;
}

//comes in YYYY-MM-DD  need to change to MM/DD/YYYY
function convertInconsistencyDate(dateIn)
{
	var newDate= '';
	
	if(!isEmpty(dateIn))
	{
		var year = dateIn.substring(0,dateIn.indexOf('-'));
		var month = dateIn.substring(dateIn.indexOf('-')+1,dateIn.lastIndexOf('-'));
		var day = dateIn.substring(dateIn.lastIndexOf('-')+1);
		
		newDate = month +'/' + day +'/' + year;
		
	}
	
	return newDate;
}

//converts from a UI date (MM/DD/YYYY) to a simple date format (YYY-MM-DD)
function uiDateToSimpleDate(dateIn)
{
	var dateMod ="";
	
	if(!isEmpty(dateIn)) {
		dateMod = dateIn;
		dateMod = dateMod.split('/');
		dateMod = dateMod[2]+'-'+dateMod[0]+'-'+dateMod[1]; //YYY-MM-DD
	}
	
	return dateMod;
}

//converts from a simple date format (YYY-MM-DD) to a UI date (MM/DD/YYYY)
function simpleDateToUIDate(dateIn)
{
	var dateMod ="";
	
	if(!isEmpty(dateIn)) {
		dateMod = dateIn;
		dateMod = dateMod.split('-');
		dateMod = dateMod[1]+'/'+dateMod[2]+'/'+dateMod[0]; // MM/DD/YYYY
	}
	
	return dateMod;
}