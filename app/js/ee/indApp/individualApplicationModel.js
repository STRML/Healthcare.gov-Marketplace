function createNewIndAppModel() {
  var a = {
    action: null,
    identifier: null,
    creationDatetime: null,
    submissionDatetime: null,
    memberSignatureText: "",
    insuranceApplicationTypeCode: "",
    signatureName: "",
    signatureDate: "",
    signatureTypeCode: "",
    signatureEmployeeTypeName: "",
    reuseTaxDataPermissionIndicator: false,
    requestingFinancialAssistanceIndicator: null,
    applicationMember: [],
    applicationMemberAssociation: [],
    coverageYearNumber: 0,
    privacyPolicyAgreementIndicator: "",
    requestingCoverageMemberQuantity: 0,
    penaltyOfPerjuryAgreementIndicator: null,
    changeInformationAgreementIndicator: null,
    cardName: "",
    medicaidRequirementAgreementIndicator: null,
    absentParentAgreementIndicator: null,
    applicationSignature: [],
    taxHouseholdEscMecVerification: [],
    providedInsuranceApplicationSecurityQuestionAnswer: [],
    helpingApplicationAssistor: [{
      effectiveDate: "",
      firstName: "",
      middleName: "",
      lastName: "",
      suffix: "",
      assistorOrganizationIdentifier: "",
      organizationNomenclatureText: "",
      nationalProducerNumber: "",
      helpingApplicationAssisterTypeCode: "",
      helpingApplicationAssisterTypeName: "",
      systemUserLoginName: ""
    }]
  };
  addMember(a.applicationMember);
  return a
}

function getNewMember() {
  var a = {
    member: {
      birthDate: "",
      identifier: "",
      personName: {
        effectiveDate: "",
        firstName: "",
        middleName: "",
        lastName: "",
        salutationName: "",
        suffixName: ""
      },
      telephonePlace: [{
        personTelephoneStartDate: "",
        personTelephoneEndDate: "",
        personTelephoneCategoryCode: "",
        telephonePlace: {
          areaNumber: "",
          switchNumber: "",
          lineNumber: "",
          extensionNumber: "",
          number: "",
          telephoneCountry: {
            telephoneCountryCode: "",
            elephoneCountryName: ""
          }
        }
      }, {
        personTelephoneStartDate: "",
        personTelephoneEndDate: "",
        personTelephoneCategoryCode: "",
        telephonePlace: {
          areaNumber: "",
          switchNumber: "",
          lineNumber: "",
          extensionNumber: "",
          number: "",
          telephoneCountry: {
            telephoneCountryCode: "",
            elephoneCountryName: ""
          }
        }
      }, {
        personTelephoneStartDate: "",
        personTelephoneEndDate: "",
        personTelephoneCategoryCode: "",
        telephonePlace: {
          areaNumber: "",
          switchNumber: "",
          lineNumber: "",
          extensionNumber: "",
          number: "",
          telephoneCountry: {
            telephoneCountryCode: "",
            elephoneCountryName: ""
          }
        }
      }],
      personAddress: [{
        personAddressRelationshipRoleCode: "Home",
        personAddressStartDate: "",
        personAddressEndDate: "",
        personAddressCategoryCode: "Delivery",
        addressPlace: {
          zipPlus4Code: "",
          streetName1: "",
          streetName2: "",
          cityName: "",
          stateCode: "",
          countryCode: "",
          countyName: "",
          countyFipsCode: ""
        },
        validatingAddressStatusType: ""
      }, {
        personAddressRelationshipRoleCode: "Mail",
        personAddressStartDate: "",
        personAddressEndDate: "",
        personAddressCategoryCode: "Mailing",
        addressPlace: {
          zipPlus4Code: "",
          streetName1: "",
          streetName2: "",
          cityName: "",
          stateCode: "",
          countryCode: "",
          countyName: "",
          countyFipsCode: ""
        },
        validatingAddressStatusType: ""
      }, {
        personAddressRelationshipRoleCode: "Residential",
        personAddressStartDate: "",
        personAddressEndDate: "",
        personAddressCategoryCode: "Residential",
        addressPlace: {
          zipPlus4Code: "",
          streetName1: "",
          streetName2: "",
          cityName: "",
          stateCode: "",
          countryCode: "",
          countyName: "",
          countyFipsCode: ""
        },
        validatingAddressStatusType: ""
      }],
      personEmail: [{
        personEmailStartDate: "",
        personEmailEndDate: "",
        placeRelationshipRoleCode: "",
        messagePlace: {
          emailAddressName: "",
          emailAddressIdentifier: ""
        }
      }],
      personTrackingNumber: "",
      personIdentification: [{
        personIdentificationValueText: "",
        personIdentificationEffectiveDate: "",
        personIdentificationUpdateQuantity: 0,
        personIdentificationType: {
          personIdentificationTypeCode: "",
          personIdentificationTypeName: ""
        }
      }, {
        personIdentificationValueText: "",
        personIdentificationEffectiveDate: "",
        personIdentificationUpdateQuantity: 0,
        personIdentificationType: {
          personIdentificationTypeCode: "",
          personIdentificationTypeName: ""
        }
      }],
      ethnicityTypeCode: "",
      personTypeCode: "",
      genderTypeCode: "",
      personCitizenshipStatus: [{
        personCitizenshipStatusDate: "",
        citizenshipStatusType: {
          personCitizenshipStatusCode: "",
          personCitizenshipStatusName: ""
        }
      }],
      personRace: [{
        personRaceName: "",
        personOriginalCountryCode: "",
        raceSubCode: "",
        raceTypeCode: ""
      }],
      hispanicOriginIndicator: null,
      definedPersonEthnicity: []
    },
    incarcerationStartDate: "",
    incarcerationEndDate: "",
    incarcerationStatusIndicator: "",
    incarcerationType: "",
    residencyStartDate: "",
    residencyEndDate: "",
    residencyStatusIndicator: "",
    lawfulPresenceStartDate: "",
    lawfulPresenceEndDate: "",
    lawfulPresenceStatusIndicator: "",
    coverageStartDate: "",
    coverageEndDate: "",
    pregnancyIndicator: "",
    expectedDeliveryDate: "",
    fixedAddressIndicator: "Not Applicable",
    financialAssistanceIndicator: "Not Applicable",
    otherRaceText: "",
    otherEthnicityText: "",
    taxFilingStatusTypeCode: "",
    spokenLanguage: "",
    memberSchoolStatus: [{
      applicationMemberSchoolStatusDate: "",
      schoolStatusType: ""
    }],
    memberEmploymentStatus: [{
      applicationMemberEmploymentStatusDate: "",
      employmentStatus: ""
    }],
    memberEvent: [],
    memberEmployer: {},
    writtenLanguage: "",
    parentCaretakerIndicator: "",
    priorInsuranceEndDate: "",
    insuredIndicator: "",
    applicationMemberTaxFiler: {},
    applicationMemberCurrentYearTaxFilerTypeCode: "",
    applicationMemberCurrentYearTaxFilerTypeName: "",
    longTermCareIndicator: null,
    unpaidBillIndicator: null,
    absentParentIndicator: "",
    absentParentName: "",
    provideAbsentParentInfoIndicator: "",
    personRecognizedTribeIndicator: "",
    personAmericanIndianAlaskanNativeIndicator: null,
    eligibleITUIndicator: "",
    receiveITUIndicator: "",
    requestingCoverageIndicator: null,
    babyDueQuantity: "",
    contactIndicator: false,
    applicationMemberIdentifier: "",
    citizenshipStatusIndicator: "",
    applicationMemberAnnualTaxIncome: [],
    medicaidHouseholdAnchor: {},
    receivedCurrentIncomeSourceAttestation: [],
    nonCustodialParentIndicator: "",
    medicaidTaxRoleTypeCode: "",
    dependentIndicator: null,
    hasSpouseIndicator: null,
    studentIndicator: null,
    medicaidHousehold: {},
    nonCustodialParentName: "",
    livedInUS5YearIndicator: null,
    definingApplicationMemberContactMethod: [],
    nonESInsurance: [],
    isIncarcerated: null,
    marriedFilingJointlyIndicator: null,
    sevisIDIndicator: null,
    doNotKnowIncomeIndicator: "",
    greaterThanFPLIndicator: "",
    incomeSubjectToFederalRestrictions: "",
    receivedIndianHealthServicesIndicator: "",
    tribalAmount: "",
    blindDisabledIndicator: null,
    eligibleImmigrationStatusIndicator: null,
    parentOfStudentLivingInStateIndicator: null,
    taxFilerIndicator: "",
    registerToVoteIndicator: null,
    usMailIndicator: "",
    medicaidDeterminationIndicator: null,
    withdrawApplicationIndicator: null,
    caretakerRelativeIndicator: null,
    preliminaryParentCaretakerRelative: null,
    sameNameIndicator: "",
    motherAvgHoursWeek: "",
    fatherAvgHoursWeek: "",
    preliminaryChildOfCaretakerRelative: null,
    fosterCareIndicator: null,
    fosterCareEndedBecauseOfAge: null,
    studentParentInStateIndicator: "",
    liveOutsideStateTemporarilyIndicator: "",
    coverageInDifferentStateIndicator: "",
    privacyPolicyAgreementIndicator: null,
    amountIRSAnnualIncome: "",
    attestedAnnualIncome: "",
    attestedMonthlyIncome: "",
    attestedIRSAnnualIncome: "",
    ssnAlternateName: {
      effectiveDate: "",
      firstName: "",
      middleName: "",
      lastName: "",
      salutationName: "",
      suffixName: ""
    },
    employerInsurance: [{
      employerName: "",
      employerSponsoredCoverageStartDate: "",
      esiEnrollmentStatusType: "",
      otherHealthInsurancePlanEndIndicator: null,
      potentialMedicaidnonESIEnrolledIndicator: null,
      primaryInsuredName: {
        effectiveDate: "",
        firstName: "",
        middleName: "",
        lastName: "",
        salutationName: "",
        suffixName: ""
      }
    }],
    deprivedChildIndicator: null,
    fosterCareStateCode: "",
    deceasedIndicator: null,
    ageLeftFosterCareCode: "",
    hadMedicaidDuringFosterCareIndicator: null,
    citizenshipDocumentAlternateName: {
      effectiveDate: "",
      firstName: "",
      middleName: "",
      lastName: "",
      salutationName: "",
      suffixName: ""
    },
    tribeName: "",
    tribeStateCode: "",
    tribeCode: "",
    aptcReferralIndicator: null,
    attestedApplyingForCoverageIndicator: null,
    attestedChildOfCaretakerIndicator: null,
    attestedCaretakerID: "",
    dateOfAdoption: "",
    dateGainedEligibleImmigrationStatus: "",
    dateReleasedFromIncarceration: "",
    dateMarried: "",
    dateMoved: "",
    isMarriedIndicator: null,
    livesWithAdultTaxClaimerIndicator: null,
    livesWithMinorAgeDependentIndicator: null,
    livesWithOtherParentNotClaimerIndicator: null,
    movedFromCountyCode: "",
    movedFromZipCode: "",
    needsSeparateApplicationIndicator: null,
    veteranIndicator: null,
    childOfVeteranIndicator: null,
    spouseOfVeteranIndicator: null,
    performVerificationIndicator: false,
    exitExpeditedIncomeIndicator: null,
    statusIDSConfirmed: "",
    idsCalledCounter: 0,
    edsCalled: false,
    hubResponded: true,
    dateLostCoverage: "",
    dateProspectiveLostCoverage: "",
    definingMemberMaritalStatusTypeCode: "",
    definingMemberMaritalStatusTypeName: "",
    custodialClaimingTaxFilerIndicator: null,
    attestedApplicationMemberEstimatedIncome: {
      totalCurrentAnnualIncomeAmount: null
    },
    ftiUsedIndicator: null,
    taxYear: "",
    custodialParentClaimingTaxFilerIndicator: null,
    claimingTaxFilerNotApplicationMemberIndicator: null,
    coveringInsuranceProductTypeAttestation: [],
    provideOtherSSNAgreementIndicator: null,
    stateHealthBenefitAvaliableIndicator: null,
    stateHealthBenefitOfferedIndicator: null,
    claimsDependentsIndicator: null,
    livesWithCustodialParentNotApplicationMemberIndicator: null,
    nonCustodialParentClaimingTaxFilerIndicator: null,
    noAPTCTaxFilerNotProvidedIndicator: null,
    isEnrolled: null,
    coverageEndedIndicator: null,
    childLivesWithBothParents: null
  };
  return a
}

function addMember(a) {
  a.push(getNewMember())
}

function addApplicationMemberInsuranceMarket(a) {
  a.coveringInsuranceProductTypeAttestation.push(createApplicationMemberInsuranceMarket())
}

function createApplicationMemberInsuranceMarket() {
  var a = {
    attestationDateTime: "",
    attestationIndicator: "",
    classifyingInsuranceMarketTypeCode: "",
    classifyingInsuranceMarketTypeName: "",
    issuerOrganizationName: "",
    insurancePlanName: "",
    insurancePolicyNumber: "",
    coverageEndDate: "",
    namingPrimaryInsuredPerson: {
      effectiveDate: "",
      firstName: "",
      middleName: "",
      lastName: "",
      salutationName: "",
      suffixName: ""
    },
    definingInsuranceCoverageEndReasonTypeName: "",
    definingInsuranceCoverageEndReasonTypeCode: "",
    insuranceCoverageEndReasonText: "",
    namingPrimaryInsuredApplicationMember: "",
    definingEnrollmentStatusTypeCode: "",
    definingEnrollmentStatusTypeName: "",
    applicationMemberESI: {
      memberShareSelfOnlyPremiumAmount: "",
      employerLowestCostPlanName: "",
      employerLowestCostPlanCost: "",
      employerSponsoredCoverageIndicator: "",
      overThirtyHourWorkWeekIndicator: null,
      employerMinimumEssentialCoverageIndicator: "",
      employerSponsoredCoverageStartDate: "",
      specifyingPremiumPaymentCycleTypeName: "",
      specifyingPremiumPaymentCycleTypeCode: "",
      escWaitingPeriodIndicator: null,
      escCOBRAIndicator: null,
      escRetireePlanIndicator: null,
      employerSponsoredCoverageEndDate: "",
      specifingNewPremiumPaymentCycleTypeCode: "",
      specifingNewPremiumPaymentCycleTypeName: "",
      newMemberShareSelfOnlyPremiumAmount: 0,
      employerName: "",
      employerEIN: "",
      specifyingEmployerAddress: [{
        zipPlus4Code: "",
        streetName1: "",
        streetName2: "",
        cityName: "",
        stateCode: ""
      }],
      definingEmployerTelephoneNumber: [{
        extensionNumber: "",
        number: ""
      }],
      contactPersonFirstName: "",
      contactPersonMiddleName: "",
      contactPersonLastName: "",
      contactPersonSuffixName: "",
      contactPersonEmailAddressFullText: "",
      definingEmployerContactPersonTelephoneNumber: {
        extensionNumber: "",
        number: ""
      },
      employerStopProvidingCoverageDate: "",
      employerChangePlanPremiumDate: ""
    },
    definingPrimaryInsuredPersonEmploymentStatusTypeCode: "",
    definingPrimaryInsuredPersonEmploymentStatusTypeName: "",
    eligibleCoverageStartDate: ""
  };
  return a
}

function createSecurityQuestionAnswer() {
  var a = {
    questionAnswerAssignedDateTime: "",
    selectedInsuranceApplicationSecurityQuestionTypeCode: "",
    selectedInsuranceApplicationSecurityQuestionTypeName: "",
    answerText: ""
  };
  return a
}

function createApplicationAssistor() {
  var a = {
    effectiveDate: "",
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    assistorOrganizationIdentifier: "",
    organizationNomenclatureText: "",
    nationalProducerNumber: "",
    helpingApplicationAssisterTypeCode: "",
    helpingApplicationAssisterTypeName: "",
    systemUserLoginName: ""
  };
  return a
}

function createSignature(a, c) {
  var b = {
    signatureName: a,
    signatureDate: c
  };
  return b
}

function addAddress(a) {
  a.push({
    personAddressRelationshipRoleCode: "",
    personAddressStartDate: "",
    personAddressEndDate: "",
    personAddressCategoryCode: "",
    addressPlace: {
      zipPlus4Code: "",
      streetName1: "",
      streetName2: "",
      cityName: "",
      stateCode: "",
      countryCode: "",
      countyName: "",
      countyFipsCode: ""
    }
  })
}

function getNewPersonID() {
  var a = {
    personIdentificationValueText: "",
    personIdentificationEffectiveDate: "",
    personIdentificationUpdateQuantity: 0,
    personIdentificationOtherTypeText: "",
    personIdentificationEndDate: "",
    physicalDocumentTypeCode: "",
    physicalDocumentTypeName: "",
    personIdentificationType: {
      personIdentificationTypeCode: "",
      personIdentificationTypeName: ""
    },
    issuingCountryCode: "",
    issuingCountryName: "",
    employmentAuthorizationCategoryIdentifier: ""
  };
  return a
}

function addPersonID(a) {
  a.push(getNewPersonID())
}

function createPersonCitizenshipStatus() {
  var a = {
    personCitizenshipStatusDate: "",
    citizenshipStatusType: {
      personCitizenshipStatusCode: "",
      personCitizenshipStatusName: ""
    }
  };
  return a
}

function addNonESInsurance(a) {
  a.nonESInsurance.push(getNewNonESInsurance())
}

function getNewNonESInsurance() {
  var a = {
    coverageType: "",
    companyName: "",
    planName: "",
    policyNumber: "",
    primaryInsuredFirstName: "",
    primaryInsuredMiddleName: "",
    primaryInsuredLastName: "",
    endCoverageIndicator: null,
    endCoverageDate: "",
    endCoverageReasonCode: ""
  };
  return a
}

function createNewPersonAddress() {
  var a = {
    personAddressRelationshipRoleCode: "",
    personAddressStartDate: "",
    personAddressEndDate: "",
    personAddressCategoryCode: "",
    addressPlace: {
      zipPlus4Code: "",
      streetName1: "",
      streetName2: "",
      cityName: "",
      stateCode: "",
      countryCode: ""
    },
    validatingAddressStatusType: ""
  };
  return a
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

function copyContactDataFromUserPrincipal(b, a) {
  a.member.personName.firstName = b.get("firstName");
  a.member.personName.lastName = b.get("lastName");
  a.member.personAddress[0].addressPlace.streetName1 = b.get("streetName1");
  a.member.personAddress[0].addressPlace.streetName2 = b.get("streetName2");
  a.member.personAddress[0].addressPlace.cityName = b.get("cityName");
  a.member.personAddress[0].addressPlace.stateCode = b.get("stateCode");
  a.member.personAddress[0].addressPlace.zipPlus4Code = b.get("zipPlus4Code");
  a.member.personIdentification[0].personIdentificationValueText = b.get("ssn");
  a.member.birthDate = b.get("birthDate");
  if (!isEmpty(b.get("emailAddressName"))) {
    a.member.personEmail[0].messagePlace.emailAddressName = b.get("emailAddressName");
    a.definingApplicationMemberContactMethod = [];
    a.definingApplicationMemberContactMethod.push({
      definingContactMethodTypeCode: "4"
    })
  }
  return a
}

function copyContactDataFromSystemUserVO(b, a) {
  var e = b.get("personName");
  var c = b.get("personAddress");
  var d = b.get("personTelephone");
  a.member.personName.firstName = e.firstName;
  a.member.personName.lastName = e.lastName;
  a.member.personName.middleName = e.middleName;
  a.member.personName.suffixName = e.suffixName;
  addSSNToMember(a, b.get("personSSN"));
  a.member.birthDate = b.get("birthDate");
  if (!isEmpty(b.get("personEmail").messagePlace.emailAddressName)) {
    a.member.personEmail[0].messagePlace.emailAddressName = b.get("personEmail").messagePlace.emailAddressName
  }
  return a
};