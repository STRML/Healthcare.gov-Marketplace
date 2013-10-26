function newMyProfileModel() {
  var a = {
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    email: "",
    userName: "",
    dateOfBirth: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    phoneNumberExt: "",
    ssn: "",
    userLevel: "",
    language: "",
    systemUserLoginName: "",
    systemUserIdentifier: "",
    registeredStateCode: "",
    personIdentifier: "",
    userEmailConfirmationUuId: "",
    userTrackingNumber: "",
    exchangeUserInsuranceApp: [{
      exchangeUserId: "",
      insuranceAppId: "",
      insuranceAppStatus: "",
      state: ""
    }]
  };
  return a
}

function fetchUserInfoProfile() {
  var a = {
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    email: "",
    userName: "",
    dateOfBirth: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    phoneNumberExt: "",
    ssn: "",
    userLevel: "",
    language: "",
    errors: [{
      errorType: "",
      errorMessage: ""
    }]
  };
  return a
}

function fetchCCRUserInfoProfile() {
  var a = {
    firstName: "",
    middleName: "",
    lastName: "",
    userId: "",
    userType: "",
    trackingId: ""
  };
  return a
}

function fetchAllApplicationsForPersonId() {
  var a = {
    personTrackingNumber: "",
    userId: ""
  };
  return a
}

function fetchApplicationByApplicationID() {
  var a = {
    filerLastName: "",
    filerFirstName: "",
    filerMiddleName: "",
    filerSuffix: "",
    insuranceApplication: [{
      exchangeUserId: "",
      insuranceAppId: "",
      insuranceAppStatus: "",
      state: ""
    }]
  };
  return a
}

function fetchUserInfoWaas() {
  var a = {
    username: ""
  };
  return a
}

function fetchAgentBrokerQuestions() {
  var a = {
    agentBrokerQuestionList: [{
      question: "",
      index: "",
      answer: ""
    }],
    applicationId: ""
  };
  return a
}

function verifyAgentBrokerQuestions() {
  var a = {
    agentBrokerQuestionList: [{
      question: "",
      index: "",
      answer: ""
    }],
    applicationId: ""
  };
  return a
}

function newAgentBrokerQuestions() {
  agentBrokerQuestionList = {
    question: "",
    index: "",
    answer: ""
  };
  return agentBrokerQuestionList
}

function getSystemUserInfo() {
  var a = {
    generatedPersonExchangeSystemIdentification: "",
    systemUser: {
      firstName: "",
      lastName: "",
      middleName: "",
      suffix: "",
      emailAddress: "",
      systemUserLoginName: "",
      dateOfBirth: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      phoneNumberExt: "",
      ssn: "",
      language: "",
      userLevel: "",
      systemUserIdentifier: "",
      registeredStateCode: "",
      personIdentifier: "",
      userEmailConfirmationUuId: "",
      userTrackingNumber: "",
      termsAccepted: "",
      emailConfirmationId: "",
      isAuthorizedRep: "",
      receiveEmailNotificationIndicator: "",
      receiveTelephoneNotificationIndicator: "",
      receiveMarketingMessageIndicator: "",
      personIDProofingEvent: [{
        proofingEventDate: "",
        personIdentityProofingEventSourceTypeCode: "",
        proofingEventSuccessIndicator: "",
        proofingEsdEngagedIndicator: "",
        proofingEventRidpSessionIdentifier: "",
        personIdentifier: "",
        systemUserIdentifier: "",
        systemUserLoginName: ""
      }],
      exchangeUserInsuranceApp: [{
        exchangeUserId: "",
        insuranceAppId: "",
        insuranceAppStatus: "",
        state: ""
      }]
    }
  };
  return a
}

function updatePersonFromEIDM() {
  var a = {
    firstName: "",
    lastName: "",
    middleName: "",
    suffix: "",
    emailAddress: "",
    systemUserLoginName: "",
    dateOfBirth: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    phoneNumberExt: "",
    ssn: "",
    language: "",
    userLevel: "",
    systemUserIdentifier: "",
    registeredStateCode: "",
    personIdentifier: "",
    userEmailConfirmationUuId: "",
    userTrackingNumber: "",
    termsAccepted: "",
    emailConfirmationId: "",
    isAuthorizedRep: "",
    receiveEmailNotificationIndicator: "",
    receiveTelephoneNotificationIndicator: "",
    receiveMarketingMessageIndicator: "",
    personIDProofingEvent: [{
      proofingEventDate: "",
      personIdentityProofingEventSourceTypeCode: "",
      proofingEventSuccessIndicator: "",
      proofingEsdEngagedIndicator: "",
      proofingEventRidpSessionIdentifier: "",
      personIdentifier: "",
      systemUserIdentifier: "",
      systemUserLoginName: ""
    }],
    exchangeUserInsuranceApp: [{
      exchangeUserId: "",
      insuranceAppId: "",
      insuranceAppStatus: "",
      state: ""
    }]
  };
  return a
}

function initializeTermsConditionModel() {
  var a = {
    termsAccepted: "",
    systemUserId: ""
  };
  return a
}

function initializeEIDMIntegrationUpdatePasswordModel() {
  var a = {
    password: "",
    userName: "",
    newPassword: "",
    language: "",
    subscriptionTrigger: "",
    email: "",
    errors: [{
      errorType: null,
      errorMessage: null
    }]
  };
  return a
}

function initializeEIDMIntegrationUpdateAddressModel() {
  var a = {
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    userName: "",
    securityQuestions: []
  };
  return a
}

function updateRegisteredState() {
  registeredState = {
    state: "",
    systemUserIdentifier: "",
    personIdentifier: "",
    systemUserLoginName: ""
  };
  return registeredState
}

function initializeEIDMIntegrationUpdatePhoneNumberModel() {
  var a = {
    phoneNumber: "",
    phoneNumberExt: "",
    userName: "",
    subscriptionTrigger: "",
    language: "",
    securityQuestions: [{
      question: "",
      answer: "",
      index: ""
    }]
  };
  return a
}

function initializeEIDMIntegrationUpdateEmail() {
  emailObject = {
    userName: null,
    email: null,
    language: null,
    subscriptionTrigger: ""
  };
  return emailObject
}

function initializeSystemUserUpdateEmail() {
  emailObject = {
    emailAddress: "",
    subscriptionTrigger: "",
    systemUserIdentifier: "",
    personIdentifier: "",
    systemUserLoginName: ""
  };
  return emailObject
}

function initializeSystemUserUpdatePhoneNumber() {
  phoneNumberObject = {
    phoneNumber: "",
    subscriptionTrigger: "",
    personIdentifier: "",
    systemUserIdentifier: "",
    systemUserLoginName: ""
  };
  return phoneNumberObject
}

function initializeSystemUserUpdateAddress() {
  phoneNumberObject = {
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    systemUserIdentifier: "",
    personIdentifier: "",
    systemUserLoginName: ""
  };
  return phoneNumberObject
}

function updateEIDMSecurityQuestions() {
  securityQuestion = {
    userName: null,
    password: null,
    language: null,
    securityQuestions: []
  };
  return securityQuestion
}

function newEIDMSecurityQuestion() {
  securityQuestion = {
    question: null,
    answer: null,
    index: null
  };
  return securityQuestion
}

function findPersonResponse() {
  findPerson = {
    informationExchangeSystemStateCode: "",
    personFindResults: [{
      exchangeUserID: "",
      personID: "",
      exchangeUserNISTAccountLevelCode: "",
      personSSNID: "",
      personSexCode: "",
      personBirthDate: "",
      personGivenName: "",
      personMiddleName: "",
      personSurName: "",
      personNameSuffixText: "",
      structuredAddress: [],
      personContactTelephone: "",
      personSupplementalInformation: [],
      personContactEmailID: ""
    }]
  };
  return findPerson
}

function findPersonRequest() {
  findPerson = {
    findPersonCriteria: {
      exchangeUserID: "",
      personGivenName: "",
      personMiddleName: "",
      personSurName: "",
      personNameSuffixText: "",
      personSSNID: "",
      personBirthDate: "",
      locationCityName: "",
      locationStateUSPostalServiceCode: "",
      locationPostalCode: "",
      informationExchangeSystemStateCode: ""
    }
  };
  return findPerson
}

function newCriterisRequest() {
  criteria = {
    exchangeUserID: "",
    personGivenName: "",
    personMiddleName: "",
    personSurName: "",
    personNameSuffixText: "",
    personSSNID: "",
    personBirthDate: "",
    locationCityName: "",
    locationStateUSPostalServiceCode: "",
    locationPostalCode: "",
    informationExchangeSystemStateCode: ""
  };
  return criteria
};