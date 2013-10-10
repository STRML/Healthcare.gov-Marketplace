//contains common variables and methods for states

var stateData = new Array ( {"stateCode": "AK" , "stateName": "Alaska"}, {"stateCode": "AL", "stateName": "Alabama"}, {"stateCode": "AR", "stateName": "Arkansas"}, {"stateCode": "AZ", "stateName": "Arizona"}, {"stateCode": "CA", "stateName": "California"}, {"stateCode": "CO", "stateName": "Colorado"}, {"stateCode": "CT", "stateName": "Connecticut"}, {"stateCode":
	"DE", "stateName": "Delaware"}, {"stateCode": "DC", "stateName": "District of Columbia"}, {"stateCode": "FL", "stateName": "Florida"}, {"stateCode": "GA", "stateName": "Georgia"}, {"stateCode": "HI", "stateName": "Hawaii"}, {"stateCode": "IA", "stateName": "Iowa"}, {"stateCode": "ID", "stateName": "Idaho"}, {"stateCode":
	"IL", "stateName": "Illinois"}, {"stateCode": "IN", "stateName": "Indiana"}, {"stateCode": "KS", "stateName": "Kansas"}, {"stateCode": "KY", "stateName": "Kentucky"}, {"stateCode": "LA", "stateName": "Louisiana"}, {"stateCode": "MA", "stateName": "Massachusetts"}, {"stateCode": "MD", "stateName": "Maryland"}, {"stateCode":
	"ME", "stateName": "Maine"}, {"stateCode": "MI", "stateName": "Michigan"}, {"stateCode": "MN", "stateName": "Minnesota"}, {"stateCode": "MS", "stateName": "Mississippi"}, {"stateCode": "MO", "stateName": "Missouri"}, {"stateCode": "MT", "stateName": "Montana"}, {"stateCode": "NC", "stateName": "North Carolina"}, {"stateCode":
	"ND", "stateName": "North Dakota"}, {"stateCode": "NE", "stateName": "Nebraska"}, {"stateCode": "NH", "stateName": "New Hampshire"}, {"stateCode": "NJ", "stateName": "New Jersey"}, {"stateCode": "NM", "stateName": "New Mexico"}, {"stateCode": "NV", "stateName": "Nevada"}, {"stateCode": "NY", "stateName":
	"New York"}, {"stateCode": "OH", "stateName": "Ohio"}, {"stateCode": "OK", "stateName": "Oklahoma"}, {"stateCode": "OR", "stateName": "Oregon"}, {"stateCode": "PA", "stateName": "Pennsylvania"}, {"stateCode": "RI", "stateName": "Rhode Island"}, {"stateCode": "SC", "stateName": "South Carolina"}, {"stateCode":
	"SD", "stateName": "South Dakota"}, {"stateCode": "TN", "stateName": "Tennessee"}, {"stateCode": "TX", "stateName": "Texas"}, {"stateCode": "UT", "stateName": "Utah"}, {"stateCode": "VA", "stateName": "Virginia"}, {"stateCode": "VT", "stateName": "Vermont"}, {"stateCode": "WA", "stateName": "Washington"}, {"stateCode":
	"WI", "stateName": "Wisconsin"}, {"stateCode": "WV", "stateName": "West Virginia"}, {"stateCode": "WY", "stateName": "Wyoming"} );

	
//technically we should look at the length of the stateData and not use 50
function getStateCodeFromState(state)
{
	var stateCode ="";
	for(var x=0;x<50;x++)
	{
		if(stateData[x].stateName===state)
		{
			notFound = true;
			stateCode = stateData[x].stateCode;
		}
	}
	return stateCode;
}

function getStateNameFromStateCode(state)
{
	var stateName ="";
	for(var x=0;x<stateData.length;x++)
	{
		if(stateData[x].stateCode===state)
		{
			notFound = true;
			stateName = stateData[x].stateName;
		}
	}
	return stateName;
}

function updateStateBar(theTenant)
{
	if(!isEmpty(theTenant))
	{
		$('.stateName').hide();
		//a couple states have specific logos
		$('#stateLogo').removeClass('idahoState').removeClass('newMexicoState');
		
		if("ID" === theTenant)
		{
			$('#stateLogo').addClass('idahoState');
			 
			
		}
		else if("NM"=== theTenant)
		{
			$('#stateLogo').addClass('newMexicoState');
			
		}
		else
		{
			$('.stateName').text(getStateNameFromStateCode(theTenant));
			$('.stateName').show();
		}
		
	}
}

