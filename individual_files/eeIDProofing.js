function countIDProofingAttempts( personEvents, attemptType, propToCheck ) {
	var attempts = 0;
		
	for(var i = 0; i < personEvents.length; i++) 
	{
		if(!isEmpty(personEvents[i]))
		{
			if(personEvents[i].personIdentityProofingEventSourceTypeCode === attemptType) 
			{
				if(personEvents[i].hasOwnProperty(propToCheck))
				{
					if(personEvents[i][propToCheck] === false) {
						attempts++;
					}
				}
			}
		}
	}
	return attempts;
}

function checkESDIDProofingAttempts( personEvents ) {
	var eventCase = '0';
	
	for(var i = (personEvents.length - 1); i > 0; i--) 
	{
		if(!isEmpty(personEvents[i]))
		{
			if(personEvents[i].personIdentityProofingEventSourceTypeCode === '4') {
				if(personEvents[i].proofingEventSuccessIndicator === false) {
					if(personEvents[i].proofingEsdEngagedIndicator === false) {
						//under review
						eventCase = '1';
						break;
					}
					else if(personEvents[i].proofingEsdEngagedIndicator === true) {
						//more documentation needed
						eventCase = '2';
						break;
					}
				}
				else if(personEvents[i].proofingEventSuccessIndicator === true) {
					if(personEvents[i].proofingEsdEngagedIndicator === false) {
						//under review
						eventCase = '3';
						break;
					}
					else if(personEvents[i].proofingEsdEngagedIndicator === true) {
						//error
						eventCase = '4';
						break;
					}
				}
			}
		}
	}
	return eventCase;
}

//check for success indicators
function countIDProofingSuccess( personEvents ) {
	var attempts = false;
		
	for(var i = 0; i < personEvents.length; i++) 
	{
		if(!isEmpty(personEvents[i]))
		{
			if(personEvents[i].personIdentityProofingEventSourceTypeCode === '2' || personEvents[i].personIdentityProofingEventSourceTypeCode === '3') {
				if(personEvents[i].proofingEventSuccessIndicator) {
					attempts = true;
				}
			}
		}
	}
	return attempts;
}

//determine if the User if ID proofed or not
//SystemUser is  getSystemUserInfoModel.get('systemUser')
function isIDProofed(systemUser, userLevel)
{
	var loaCode = '',
		idVerified = false;
	 
	//query the LOA status
	var userLvl = !isEmpty(userLevel) ? parseInt(userLevel, 10) : '';
	var statusValue = !isEmpty(userLevel) ? parseInt(userLevel, 10) : '';
		
	var loaStatus = countIDProofingSuccess(systemUser.personIDProofingEvent);
	
	if(loaStatus) {
		idVerified = true;
	}
	else if(!isEmpty(statusValue)) {
		loaCode = statusValue;
	}
	else if(!isEmpty(userLvl)) {
		loaCode = userLvl;
	}
	
	//set flags
	if(loaCode === 2) {
		idVerified=true;
	}
	else if(loaCode === 1) {
		idVerified=false;
	}
		
	
	return idVerified;
}
