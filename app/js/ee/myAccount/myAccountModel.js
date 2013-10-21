function initializeEEAccount(){var a={exchangeUserIdentifier:"",firstName:"",lastName:"",streetName1:"",streetName2:"",cityName:"",stateCode:"",zipPlus4Code:"",birthDate:"",ssn:"",userName:"",password:"",isValidUser:"",emailAddressName:"",personEmailConfirmationUUID:"",personEmailConfirmedIndicator:"",personEmailConfirmedDatetime:"",accountCreationDate:"",accountUpdateDatetime:"",myApplications:[],action:"",myAssociatedUsers:[],usersGivenMeAccess:[],myPendingAuthorizedUsers:[],userRoleTypeCode:"",nationalProducerNumber:"",licenses:[],primaryPhone:"",primaryPhoneExt:"",primaryPhoneTypeCode:"",secondaryPhone:"",secondaryPhoneExt:"",secondaryPhoneTypeCode:"",faxNumber:"",faxNumberExt:"",agentBrokerLicenseStatus:"",agentBrokerTrainingStatus:"",agentBrokerAgreementStatus:"",assistingMarketCode:"",workAddressSameIndicator:"",agentBrokerAppointmentTime:{},website:"",languageProficiency:[],textMessageNotificationIndicator:"",notificationCellPhone:"",homeAddressHideIndicator:"",primaryPhoneNumberHideIndicator:"",emailAddressHideIndicator:"",appointmentTimesHideIndicator:"",languageProficiencyHideIndicator:"",websiteHideIndicator:"",middleName:"",suffixName:"",workAddresses:[],secondaryPhoneNumberHideIndicator:"",faxNumberHideIndicator:"",employerApplications:[]};
return a
}function getSystemUserInfo(){var a={generatedPersonExchangeSystemIdentification:"",systemUser:{firstName:"",lastName:"",middleName:"",suffix:"",emailAddress:"",systemUserLoginName:"",dateOfBirth:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",phoneNumber:"",phoneNumberExt:"",ssn:"",language:"",userLevel:"",systemUserIdentifier:"",registeredStateCode:"",personIdentifier:"",userEmailConfirmationUuId:"",userTrackingNumber:"",termsAccepted:"",emailConfirmationId:"",isAuthorizedRep:"",receiveEmailNotificationIndicator:"",receiveTelephoneNotificationIndicator:"",receiveMarketingMessageIndicator:"",personIDProofingEvent:[{proofingEventDate:"",personIdentityProofingEventSourceTypeCode:"",proofingEventSuccessIndicator:"",proofingEsdEngagedIndicator:"",proofingEventRidpSessionIdentifier:"",personIdentifier:"",systemUserIdentifier:"",systemUserLoginName:""}],exchangeUserInsuranceApp:[{exchangeUserId:"",insuranceAppId:"",insuranceAppStatus:"",state:""}]}};
return a
}function updatePersonFromEIDM(){var a={firstName:"",lastName:"",middleName:"",suffix:"",emailAddress:"",systemUserLoginName:"",dateOfBirth:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",phoneNumber:"",phoneNumberExt:"",ssn:"",language:"",userLevel:"",systemUserIdentifier:"",registeredStateCode:"",personIdentifier:"",userEmailConfirmationUuId:"",userTrackingNumber:"",termsAccepted:"",emailConfirmationId:"",isAuthorizedRep:"",receiveEmailNotificationIndicator:"",receiveTelephoneNotificationIndicator:"",receiveMarketingMessageIndicator:"",personIDProofingEvent:[{proofingEventDate:"",personIdentityProofingEventSourceTypeCode:"",proofingEventSuccessIndicator:"",proofingEsdEngagedIndicator:"",proofingEventRidpSessionIdentifier:"",personIdentifier:"",systemUserIdentifier:"",systemUserLoginName:""}],exchangeUserInsuranceApp:[{exchangeUserId:"",insuranceAppId:"",insuranceAppStatus:"",state:""}]};
return a
}function updateSystemUserDetails(){var a={firstName:"",lastName:"",middleName:"",suffix:"",emailAddress:"",systemUserLoginName:"",dateOfBirth:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",phoneNumber:"",phoneNumberExt:"",ssn:"",language:"",userLevel:"",systemUserIdentifier:"",registeredStateCode:"",personIdentifier:"",userEmailConfirmationUuId:"",userTrackingNumber:"",termsAccepted:"",emailConfirmationId:"",isAuthorizedRep:"",receiveEmailNotificationIndicator:"",receiveTelephoneNotificationIndicator:"",receiveMarketingMessageIndicator:"",personIDProofingEvent:[{proofingEventDate:"",personIdentityProofingEventSourceTypeCode:"",proofingEventSuccessIndicator:"",proofingEsdEngagedIndicator:"",proofingEventRidpSessionIdentifier:"",personIdentifier:"",systemUserIdentifier:"",systemUserLoginName:""}],exchangeUserInsuranceApp:[{exchangeUserId:"",insuranceAppId:"",insuranceAppStatus:"",state:""}]};
return a
}function updatePersonIDProofingEvent(){var a={proofingEventDate:"",personIdentityProofingEventSourceTypeCode:"",proofingEventSuccessIndicator:"",proofingEsdEngagedIndicator:"",proofingEventRidpSessionIdentifier:"",personIdentifier:"",systemUserIdentifier:"",systemUserLoginName:"",proofingEventBarcodeIdentifier:"",personIDProofingEventTask:[{taskId:"",verificationEventStatusReasonType:""}],forwardingPhysicalDocument:[{physicalDocumentRepositoryURI:""}],applicantPersonInfo:[]};
return a
}function idProofApplicantInfo(){var a={applFirstName:"",applMiddleName:"",applLastName:"",applSuffix:"",applBirthDate:"",applEmailAddress:"",applFullNumberCode:"",applStreetName1:"",applStreetName2:"",applCityName:"",applStateCode:"",applZipPlus4Code:"",applSsnNumber:"",applPersonIdentifier:""};
return a
}function getIndAppContactInfo(){var a={emailAddress:"",primaryPhoneNumber:"",secondaryPhoneNumber:"",receiveEmailNotifications:"",notificationsEmailAddress:"",messagingPhoneNumber:"",receiveNoticesByEmail:"",receiveNoticesByMailingAddress:"",receiveMessagingNotifications:"",spokenLanguagePreference:"",writtenLanguagePreference:"",applicationId:"",exchangeUserIdentifier:"",applicationStatus:"",address:""};
return a
}function requestForExchangeUserInfo(){var a={applicationId:"",exchangeUserId:"",systemUserLoginName:"",systemUserId:""};
return a
}function responseForExchangeUserInfo(){var a={applicationStatus:"",applicationId:"",savedPlanList:[],enrolledPlanList:[],taxHolderAPTCList:[],enrolledProgram:[{status:"",programName:"",programTitle:""}],authorizedUser:[{firstName:"",lastName:"",status:"",authorizationType:"",statusStartDate:"",statusEndDate:""}],coverageYearNumber:"",creationDateTime:"",submissionDateTime:"",updateDateTime:"",postalStateCode:""};
return a
}function requestForPlanCompareInfo(){var a={applicationIdentifier:[]};
return a
}function responseForPlanCompareInfo(){var a={applicationIdentifier:"",postalStateCode:[],collectedEnrollmentGroup:[{enrollmentGroupIdentifier:"",enrollmentGroupName:"",desiredEnrollmentGroupDivisionType:[],queriedEnrollmentGroupPlan:[{allocatedAptcAmount:"",queriedInsurancePlan:"",definingEnrollmentGroupPlanType:"",insurancePlanName:""}],joiningEnrollmentGroupMember:[],defaultEnrollmentGroupReasonType:[],effectiveStartDate:"",effectiveEndDate:"",csrVariantCode:"",calculatedAptcVO:[],exchangeArea:"",aptcSavings:"",planTotalPremium:"",planEhbPremium:"",ehbStateMandatePremium:"",planBrochureUrl:"",definedInsuranceProductDivisionType:"",issuerName:""}],creationDatetime:"",submissionDatetime:"",applicationMemberAssociationList:[],enrollmentGroupType:[],shepherdedInsuranceApplicationSection:[],requestingFinancialAssistanceIndicator:""};
return a
}function initializeEmployerApplication(){var a={identifier:null,creationDatetime:null,submissionDate:null,employeeRoster:[],employeeRosterURI:null,eligibilityIndicator:true,employerAddress:{zipPlus4Code:"",streetName1:"",streetName2:"",cityName:"",stateCode:"",countryCode:""}};
return a
}function liteAccountUpgradeModel(){var a={firstName:"",lastName:"",middleName:"",suffix:"",email:"",userName:"",dateOfBirth:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",phoneNumber:"",phoneNumberExt:"",ssn:"",language:"",userRole:"",applicationID:"",zipcodeExtension:""};
return a
}function verifyManualIDProofingModel(){var a={firstName:"",lastName:"",middleName:"",suffix:"",email:"",userName:"",dateOfBirth:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",zipcodeExtension:"",phoneNumber:"",phoneNumberExt:"",ssn:"",userRole:"",applicationId:"",language:""};
return a
}function submitOutofWalletAnswersModel(){var a={eidmSessionID:"",referenceID:"",userID:"",outOfWalletAnswersList:""};
return a
}function fetchUserInfoProfile(){var a={firstName:"",middleName:"",lastName:"",suffix:"",email:"",userName:"",dateOfBirth:"",addressLine1:"",addressLine2:"",city:"",state:"",zipCode:"",phoneNumber:"",phoneNumberExt:"",ssn:"",userLevel:"",language:"",errors:[{errorType:"",errorMessage:""}]};
return a
}function newEIDMSecurityQuestion(){securityQuestion={question:null,answer:null,index:null};
return securityQuestion
}function getNewWorkAddress(){var a={workStreetName1:"",workStreetName2:"",workCity:"",workState:"",workZip:"",workAddressHideIndicator:false};
return a
}function getNewLanguage(){var a={languageTypeCode:"",competencyLevelCode:""};
return a
}function updateLanguage(){var a={exchangeUserIdentifier:"",writtenLanguagePreference:"",spokenLanguagePreference:"",applicationId:"",concurrencyHash:""};
return a
}function addAuthorizedRep(a){a.push({exchangeResourceTypeCode:"",exchangeResourceTypeName:"",authorizedExchangeUserIdentifier:"",authorizedSystemUserName:"",timestamp:"",myRoleAccess:[{applicationId:"",exchangeResourceAccessTypeCode:"",exchangeResourceAccessTypeName:""}]})
}function terminatePlans(){var a={terminatePlans:[{applicationID:"",planID:"",terminationDate:"",reason:""}]};
return a
}function printEEAccountModel(a){if(a!==null&&a!==undefined){console.log("EEAccountModel is now: "+a.get("firstName")+", "+a.get("middleName")+", "+a.get("lastName"));
console.log("	: "+a.get("streetName1")+", "+a.get("streetName2"));
console.log("	: "+a.get("cityName")+", "+a.get("stateCode"));
console.log("	: "+a.get("zipPlus4Code")+", "+a.get("birthDate"));
console.log("	: "+a.get("ssn")+", "+a.get("emailAddressName"));
console.log("	: "+a.get("userName")+", "+a.get("password"));
console.log("	: "+a.get("exchangeUserIdentifier")+", "+a.get("action"))
}else{console.log("Model= "+a)
}}function createEmptyThinEligibility(){return createThinEligibility(null,null)
}function createThinEligibility(b,a){var c={eligibilityStatusDeterminationDate:b,eligibilityStatus:a};
return c
}function createEmptyThinApplication(){return createThinApplication(null,null,null,[],[])
}function createThinApplication(f,a,e,b,d){var c={identifier:f,creationDatetime:a,submissionDatetime:e,myApplicationMembers:b,myApplicationMemberAssociations:d};
return c
}function createEmptyThinAppMember(){return createThinAppMember(null,null,null,null,null,[])
}function createThinAppMember(d,c,b,f,g,a){var e={firstName:d,middleName:c,lastName:b,suffixName:f,applicationMemberIdentifier:g,myEligibilityStatus:a};
return e
}function initializeEIDMIntegrationCreateLiteEIDMModel(){var a={firstName:null,middleName:null,lastName:null,suffix:null,email:null,password:null,userName:null,securityQuestions:[]};
return a
}function initializeEIDMEmail(){emailObject={userName:null,email:null};
return emailObject
}function initializeEIDMIntegrationUpdateExpiredPasswordModel(){var a={userName:"",oldPassword:"",newPassword:""};
return a
}function initializeEIDMIntegrationUpdateForgotPasswordModel(){var a={userName:"",password:"",securityQuestions:[{question:"",answer:"",index:""}]};
return a
}function initializeEIDMIntegrationUpdateForgottenUserNameModel(){var a={firstName:"",lastName:"",userLevel:""};
return a
}function initializeEIDMIntegrationUpdatePasswordModel(){var a={password:"",userName:"",newPassword:"",errors:{errorType:"",errorMessage:""}};
return a
}function initializeEIDMIntegrationUpdatePhoneNumberModel(){var a={phoneNumber:"",phoneNumberExt:"",userName:"",securityQuestions:[{question:"",answer:"",index:""}]};
return a
}function updatePhoneNumberModel(){var a={exchangeUserIdentifier:"",phoneFaxNumber:"",concurrencyHash:"",applicationId:""};
return a
}function updateEIDMSecurityQuestions(){securityQuestion={userName:null,password:null,securityQuestions:[]};
return securityQuestion
}function newEIDMSecurityQuestion(){securityQuestion={question:null,answer:null,index:null};
return securityQuestion
}function findPersonRequest(){findPerson={findPersonCriteria:{exchangeUserID:"",personGivenName:"",personMiddleName:"",personSurName:"",personNameSuffixText:"",personSSNID:"",personBirthDate:"",locationCityName:"",locationStateUSPostalServiceCode:"",locationPostalCode:"",informationExchangeSystemStateCode:""}};
return findPerson
}function fetchAgentBrokerQuestions(){var a={agentBrokerQuestionList:[{question:"",index:"",answer:""}],applicationId:""};
return a
}function verifyAgentBrokerQuestions(){var a={agentBrokerQuestionList:[{question:"",index:"",answer:""}],applicationId:""};
return a
}function newAgentBrokerQuestions(){agentBrokerQuestionList={question:"",index:"",answer:""};
return agentBrokerQuestionList
};