var pathArray = window.location.pathname.split( '/' );
var eePath = pathArray[1];

//Common Navigation methods
function navigateToIndApp(theState, theLocale)
{
	navigateToIndAppHelper(theState, theLocale, null);	
}

function navigateToIndAppWithId(theState, theLocale, appId)
{
	var appIdParam = "?appId=";
	if(!isEmpty(appId))
	{
		appIdParam += appId;
	}
	else
	{
		appIdParam="";
	}
	navigateToIndAppHelper(theState, theLocale, appIdParam);	
}


function navigateToIndAppHelper(theState, theLocale, appIDParam)
{
	var ending= '/individualApplication';
	if(!isEmpty(appIDParam))
	{
		ending+=appIDParam;
	}
	window.location.href = '/'+eePath+'/auth/'+theState+'/'+theLocale+ ending;	
}


function navigateToIDProofing(theLocale)
{
	window.location.href = "/"+eePath+"/auth/global/"+theLocale+"/myAccount?from=individualApplication#IDProofingGetStarted";	
}

function navigateToPlanCompare(theTenant, theLocale, appId, groupId, planID)
{
	window.location.href = "/" + eePath + "/auth/" + theTenant + "/" + theLocale + "/planCompare?a="+ appId + "&g=" + groupId+ "#planDetails/"+planID;
}

function navigateToPlanCompareDental(theTenant, theLocale, appId, groupId, planID)
{
	window.location.href = "/" + eePath + "/auth/" + theTenant + "/" + theLocale + "/planCompare?a="+ appId + "&g=" + groupId+ "#dentalDetails/"+planID;
}

function navigateToTODOList(theTenant, theLocale, applicationID)
{
	window.location.href = "/" + eePath + "/auth/" + theTenant + "/" + theLocale + "/toDoList?a=" + applicationID;	
}