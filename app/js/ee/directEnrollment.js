//this really should be called directEnrollment.js

var agentBrokerInfo=null;

function getAgentBrokerInfo() {
    if (isEmpty(agentBrokerInfo)) {
        // this is a bit misleading beause this is asynchronous
        // we are loading this in default.vm, so this should never be hit
        getDirectEnrollmentAgentBrokerInformation();
   }
   //if still empty defult to empty object
   if (isEmpty(agentBrokerInfo)) {
      return {};
   }
   return agentBrokerInfo;
}

function checkForAgentBroker()
{
	return (isUserAgentBroker(getAgentBrokerType()))
}


function makeDirectEnrollmentUIChanges()
{
	$('#agentBrokerSubNav').show();
	$('#agentBrokerStateBar').show();
   // hide the inprogress div in indApp when it is empty back to portal is displayed
	if (isEmpty($('#InProgressPage').html())) 
	{
	    $('#InProgressPage').hide();
	}
}


//fetches Agent/broker type from the SAML
function getAgentBrokerType()
{
	//emtpy means regular user
	var userType ="";

	if (!isEmpty(getAgentBrokerInfo()["User Type"]))
	{
	   userType = getAgentBrokerInfo()["User Type"];
	}
	return userType;
}

//fetches the agent broker ID from SAML
function getAgentBrokerUserID()
{
	//emtpy means regular user
	var userID ="";

	if (!isEmpty(getAgentBrokerInfo()["FFE User ID"]))
	{
	    userID = getAgentBrokerInfo()["FFE User ID"];
	}
	return userID;
}

//Need to update based on security team
//Determiens if the user is agent or a broker
function isUserAgentBroker(userType)
{
	var AGENT_BROKER ="FFM_AGENT_BROKER";
	var AGENT="Agent";
	var BROKER="Broker";
	var AGENTSLASHBROKER ="Agent/Broker";
	var isAgentBroker  = false;
	
	if(userType === AGENT|| userType===BROKER || userType === AGENT_BROKER|| userType === AGENTSLASHBROKER)
	{
		isAgentBroker = true;
	}
	return isAgentBroker;
}


function getDirectEnrollmentAgentBrokerInformation()
{
	$.ajax(
	{
		url:"/ee-rest/global/en_US/DirectEnrollment/getSecureRedirectInfo", 
		type:"GET",
		contentType:"application/json",
		dataType:"json",
		success:function(response)
		{
			agentBrokerInfo = response;
			return agentBrokerInfo;
		},
		error: function(response)
		{
			agentBrokerInfo = {};
			return agentBrokerInfo;
		}
	});
}


//makes sure we have the keep alive
function updateDirectEnrollmentKeepAliveUrl(keepAlive)
{
   	$.ajax(
	{
		url: keepAlive 
	});
 	
}