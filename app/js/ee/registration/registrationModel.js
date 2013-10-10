function initializeEIDMIntegrationCreateLiteEIDMModel() {
	var createEIDMLiteModel = {
		'firstName' : null,
		'middleName' : null,
		'lastName' : null,
		'suffix' : null,
		'email' : null,
		'password' : null,
		'userName' : null,
		"subscriptionTrigger" : "",
		"stateLivedIn" : "",
		"language" : "",
		'securityQuestions' : []
	};
	
	return createEIDMLiteModel;
}

function initializeEIDMEmail() {
	emailObject = {
		'userName' : null,
		'email' : null
	};
	
	return emailObject;
}

function initializeEIDMIntegrationUpdateExpiredPasswordModel() {
	var updateExpiredPasswordModel = {
			"userName": "",
			"oldPassword": "",
			"newPassword": ""
	};
	
	return updateExpiredPasswordModel;
}

function initializeEIDMIntegrationUpdateForgotPasswordModel() {
	var updateForgotPasswordModel = {
			"userName" : "",
			"password" : "",
			"email" : "",
			"emailConfirmationId" : "",
			"securityQuestions" :[{ 
				//EIDMSecurityQuestionVO
				"question" : "",
				"answer" : "",
				"index" : ""
			}] 
	};
	
	return updateForgotPasswordModel;
}


function initializeEIDMIntegrationUpdateForgottenUserNameModel() {
	var updateForgottenUserNameModel = {
			"firstName" : "",
			"lastName" : "",
			"email" : ""
	};
	
	return updateForgottenUserNameModel;
}

function initializeEIDMIntegrationUpdatePasswordModel() {
	var updatePasswordModel = {
			"password" : "",
			"userName" : "",
			"newPassword" : "",
			"errors" : {
				//EIDMStatusVO
				"errorType" : "",
				"errorMessage" : ""
			}
	};
	
	return updatePasswordModel;
}

function initializeEIDMIntegrationverifyEmailAddressEIDMModel() {
	var userName = {
		'username' : ""
	};
	return userName;
}

function initializeEIDMIntegrationUpdatePhoneNumberModel() {
	var updatePhoneNumberModel = {
			"phoneNumber" : "",
			"phoneNumberExt" : "",
			"userName" : "",
			"securityQuestions" : [{
				//EIDMSecurityQuestionVO
				"question" : "",
				"answer" : "",
				"index" : ""
			}]
	};
	
	return updatePhoneNumberModel;
}

function updateEIDMSecurityQuestions() {
	securityQuestion = {
		'userName' : null,
		'password' : null,
		'securityQuestions' : []
	};
	
	return securityQuestion;
}

function newEIDMSecurityQuestion() {
	securityQuestion = {
		'question' : null,
		'answer' : null,
		'index' : null
	};
	
	return securityQuestion;
}
