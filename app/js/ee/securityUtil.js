//Security Util

//applications are in exchangeUserInsuranceApp
function checkApplicationsForUser(applications, selectedState)
{
	var hasAppInSelectedTenant = false;
	
	if(!isEmpty(applications))
	{
		//loop thru the applications (exchangeUserInsuranceApp)
		for(var x=0; x< applications.length; x++)
		{
			var  currApp = applications[x];
			if(!isEmpty(currApp))
			{
				if(!isEmpty(currApp.state))
				{
					//user already has an app in that state
					if(currApp.state === selectedState &&
						!isEmpty(currApp.insuranceAppId))
					{
						hasAppInSelectedTenant = true;
					}
				}
			}
		}
	}
	
	return hasAppInSelectedTenant;
}