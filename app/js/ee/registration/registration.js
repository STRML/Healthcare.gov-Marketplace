//global variable used for SHOP upload functionality
var myView = null;
var agentBrokerSAMLToken=null;
var postCCRApplicantIDToken=null;
var postCCRAppIDToken=null;
var postCCRState=null;
var agentEmailUUID =null;

$(function($) {



var tenantId = 'global';
var locale = 'en_US';
var resources = {};
var environment = '';

var envReference = 'Production';



	resources['ffe.ee.shared.validation.required'] = '0 is required.';
	resources['ffe.ee.shared.dropdown.relation.january'] = 'January';
	resources['ffe.ee.shared.formValidator.eeChoose'] = 'Choose "individual," "SHOP," or "both."';
	resources['ffe.ee.shared.dropdown.docType.immigrantVisa'] = 'Machine Readable Immigrant Visa &#40;with Temporary I-551 Language&#41;';
	resources['ffe.ee.shared.nav.subNav.reviewAndConfirm'] = 'Review &amp; Confirm';
	resources['ffe.ee.shared.exceptions.400.403'] = 'Invalid XML Request';
	resources['ffe.ee.shared.exceptions.400.401'] = 'Missing action URI';
	resources['ffe.ee.shared.exceptions.400.400'] = 'Missing Taskname';
	resources['ffe.ee.shared.label.authorizedRep'] = 'Authorized representative';
	resources['ffe.ee.shared.formValidator.eeCertificateOfCitizenshipNum'] = 'This is not a valid certificate of citizenship number';
	resources['ffe.ee.shared.nav.subNav.selectHealthPlan'] = 'Select a health plan for';
	resources['ffe.ee.shared.expand'] = 'Expand';
	resources['ffe.ee.shared.dropdown.language.other'] = 'Other';
	resources['ffe.ee.shared.button.clear'] = 'Clear';
	resources['ffe.ee.shared.dropdown.race.otherPacificIslander'] = 'Other Pacific Islander';
	resources['ffe.ee.shared.collapse'] = 'Collapse';
	resources['ffe.ee.shared.footer.link.about'] = 'About Us';
	resources['ffe.ee.shared.dropdown.docType.i527Refugee'] = 'I-571 &#40;Refugee Travel Document&#41;';
	resources['ffe.ee.shared.validation.eeAlphaNumeric'] = 'Enter a valid value for 0.';
	resources['ffe.ee.shared.dropdown.language.korean'] = 'Korean';
	resources['ffe.ee.shared.button.print'] = 'Print';
	resources['ffe.ee.shared.exceptions.400.300'] = 'Misssing Password';
	resources['ffe.ee.shared.error.einNotValid'] = 'EIN not valid';
	resources['ffe.ee.shared.button.details'] = 'Details';
	resources['ffe.ee.shared.dropdown.suffix.iii'] = 'III';
	resources['ffe.ee.shared.button.Search'] = 'Search';
	resources['ffe.ee.shared.dropdown.ethnicity.puertoRican'] = 'Puerto Rican';
	resources['ffe.ee.shared.help.menu.CCS'] = 'Call Customer Service';
	resources['ffe.ee.shared.validation.password'] = 'Passwords must match.';
	resources['ffe.ee.shared.button.select'] = 'Select';
	resources['ffe.ee.shared.label.maybe'] = 'Maybe';
	resources['ffe.ee.shared.error.reviewInformation'] = 'Review the information you entered&#46; If the information you entered is correct&#44; select the &#39;Continue&#39; button&#46; If the information you entered isn&#39;t correct&#44; make any necessary changes&#44; then select the &#39;Continue&#39; button&#46;';
	resources['ffe.ee.shared.error.phoneNumbersNotMatching'] = 'Make sure phone numbers do not match';
	resources['ffe.ee.shared.button.login'] = 'Login';
	resources['ffe.ee.shared.dropdown.compLevel.novice'] = 'Novice';
	resources['ffe.ee.shared.exceptions.400.203'] = 'Document already exists';
	resources['ffe.ee.shared.exceptions.400.201'] = 'Missing argument';
	resources['ffe.ee.shared.exceptions.400.200'] = 'Missing Username';
	resources['ffe.ee.shared.exceptions.400.10014'] = 'Bad Request - Enrollment groups emptyException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.exceptions.400.10013'] = 'Bad Request - Enrollment groups emptyException in calling RetrieveSavePlansForAllGroups service';
	resources['ffe.ee.shared.exceptions.400.10012'] = 'Bad Request - Request is missing custom groups OR Tax household OR Enrollment groupsException in calling SubmitCustomEnrollmentGroups service';
	resources['ffe.ee.shared.exceptions.400.10011'] = 'Bad Request - Insurance application VO is emptyException in calling RetrieveEnrollmentGroupsByTaxHousehold service';
	resources['ffe.ee.shared.exceptions.400.10010'] = 'Bad Request - Enrollment groups emptyException in calling RetrieveNonFaPlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.400.10009'] = 'Bad Request - Enrollment groups emptyException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.400.10008'] = 'Bad Request - Enrollment groups emptyException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.400.10007'] = 'Bad Request - Enrollment groups emptyException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.400.10006'] = 'Bad Request - Enrollment groups emptyException in calling RetrievePlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.400.10005'] = 'Bad Request - Enrollment groups emptyException in calling RetrieveTaxHouseholdAPTC service';
	resources['ffe.ee.shared.exceptions.400.10004'] = 'Bad Request - APTC Attestation tax filler signature is emptyException in calling SaveAPTCAttestation service';
	resources['ffe.ee.shared.exceptions.400.10003'] = 'Bad Request  - Search enrollment group criteria emptyException in calling RetrievePlanCompareGroupEnrollment service';
	resources['ffe.ee.shared.exceptions.400.10002'] = 'Bad Request - Enrollment groups empty in RetrievePlanDetailsException in calling RetrievePlanDetails service';
	resources['ffe.ee.shared.exceptions.400.10001'] = 'Bad Request - enrollment groups empty in RetrievePlansSummaryByMetalException in calling RetrievePlansSummaryByMetal service';
	resources['ffe.ee.shared.exceptions.400.10000'] = 'Bad Request - Enrollment groups empty in RetrieveMetalGroupResultsException in calling RetrieveMetalGroupResults service';
	resources['ffe.ee.shared.error.phoneNumber'] = 'This is not a valid phone number';
	resources['ffe.ee.shared.label.email'] = 'Email Address:';
	resources['ffe.ee.shared.dropdown.race.asianIndian'] = 'Asian Indian';
	resources['ffe.ee.shared.footer.link.privacyPolicy'] = 'PRIVACY POLICY';
	resources['ffe.ee.shared.validation.eeNumeric2'] = 'This is not a valid value';
	resources['ffe.ee.shared.formvalidator.summary.summaryHeadingPlural'] = 'Your information contains %s errors';
	resources['ffe.ee.shared.formValidator.eeSpecialEnrollmentDate'] = 'This is not a valid date.';
	resources['ffe.ee.shared.role.individual'] = 'Individual Marketplace';
	resources['ffe.ee.shared.hidden.mail'] = 'mail';
	resources['ffe.ee.shared.formValidator.sameEEPassword'] = 'Please make sure passwords match';
	resources['ffe.ee.shared.formValidator.eeNaturalizedCertificateNum'] = 'This is not a valid naturalized certificate number';
	resources['ffe.ee.shared.dropdown.docType.i327'] = 'I-327 &#40;Reentry Permit&#41;';
	resources['ffe.ee.shared.footer.info.line2'] = '7500 Security Boulevard, Baltimore, MD 21244';
	resources['ffe.ee.shared.formValidator.eeSSN'] = 'This Social Security number &#40;SSN&#41; isn&#39;t valid.';
	resources['ffe.ee.shared.exceptions.500.20011'] = 'If retrieve Plan compare/enrollment  groups data service written errorException in calling RetrieveSavePlansForAllGroups service';
	resources['ffe.ee.shared.exceptions.500.20010'] = 'Error mapping the qualify enrollment group membersException in calling SubmitCustomEnrollmentGroups service';
	resources['ffe.ee.shared.exceptions.500.20009'] = 'If retrieve Plan compare/enrollment  groups data service written errorException in calling RetrieveNonFaPlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.500.20008'] = 'If retrieve Plan compare/enrollment  groups data service written errorException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.20007'] = 'If retrieve Plan compare/enrollment  groups data service written errorException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.20006'] = 'If retrieve Plan compare/enrollment  groups data service written errorException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.500.20005'] = 'If retrieve Plan compare/enrollment  groups data service written errorException in calling RetrievePlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.500.20004'] = 'If retrieve Plan compare/enrollment  groups data service written errorException in calling RetrieveTaxHouseholdAPTC service';
	resources['ffe.ee.shared.exceptions.500.20003'] = 'If retrieve Plan compare/enrollment  groups data service written errorException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.exceptions.500.20002'] = 'Retrieve Plan compare/enrollment  groups data service written errorException in calling RetrievePlanDetails service';
	resources['ffe.ee.shared.exceptions.500.20001'] = 'Retrieve plan compare/enrollment  groups data service written error in RetrievePlansSummaryByMetalException in calling RetrievePlansSummaryByMetal service';
	resources['ffe.ee.shared.exceptions.500.20000'] = 'Retrieve Plan compare/enrollment  groups data service written error in RetrieveMetalGroupResultsException in calling RetrieveMetalGroupResults service';
	resources['ffe.ee.shared.validation.eeName'] = 'This is not a valid name';
	resources['ffe.ee.shared.exceptions.400.100'] = 'Error Unmarshalling Request';
	resources['ffe.ee.shared.error.ageLessThanEqual'] = 'Select an age that is less than or equal to the current age';
	resources['ffe.ee.shared.error.percentageItems'] = 'Select at least %s item(s)';
	resources['ffe.ee.shared.validation.eeHomeAddress'] = 'This P.O. box isnt a valid address.';
	resources['ffe.ee.shared.error.urlInvalid'] = 'The URL you entered is invalid';
	resources['ffe.ee.shared.directEnrollment.back'] = 'Return to issuer website';
	resources['ffe.ee.shared.validation.eeBabiesDueNumeric'] = 'Enter a valid number for 0.';
	resources['ffe.ee.shared.validation.eeRequired'] = 'Enter 0.';
	resources['ffe.ee.shared.dropdown.relation.grandchild'] = 'Grandchild';
	resources['ffe.ee.shared.footer.link.accessibility'] = 'ACCESSIBILITY';
	resources['ffe.ee.shared.formValidator.moreThanOneCharacter'] = 'Please enter at least two characters.';
	resources['ffe.ee.shared.dropdown.relation.other'] = 'Other Relative';
	resources['ffe.ee.shared.footer.link glossary'] = 'GLOSSARY';
	resources['ffe.ee.shared.formValidator.ncqaOrganizationId'] = 'This is not a valid organazation ID';
	resources['ffe.ee.shared.validation.eeDigit'] = 'Enter [x] digits.';
	resources['ffe.ee.shared.footer.link.plainWriting'] = 'PLAIN WRITING';
	resources['ffe.ee.shared.select'] = 'Select...';
	resources['ffe.ee.shared.dropdown.phoneType.work'] = 'Work';
	resources['ffe.ee.shared.dropdown.relation.domesticPartner'] = 'Domestic Partner';
	resources['ffe.ee.shared.nav.subNav.dentalPlanResults'] = 'Select a dental plan for:';
	resources['ffe.ee.shared.label.warning'] = 'Warning';
	resources['ffe.ee.shared.dropdown.docType.foreignPassport'] = 'Unexpired Foreign Passport';
	resources['ffe.ee.shared.help.menu.search'] = 'Site Search';
	resources['ffe.ee.shared.dropdown.taxrelation.self'] = 'Self';
	resources['ffe.ee.shared.label.number'] = 'Number';
	resources['ffe.ee.shared.formValidator.checked'] = 'You must check this box before you can continue';
	resources['ffe.ee.shared.label.perMonthLong2'] = 'per month';
	resources['ffe.ee.shared.formValidator.eePassportNumber'] = 'This is not a valid passport number';
	resources['ffe.ee.shared.error.digitsLetters'] = 'Enter letters or digits only';
	resources['ffe.ee.shared.header.logOut'] = 'Logout';
	resources['ffe.ee.shared.dropdown.relation.october'] = 'October';
	resources['ffe.ee.shared.footer.link.privacy'] = 'PRIVACY POLICY';
	resources['ffe.ee.shared.error.maximumParents'] = 'Select a maximum of two parents or stepparents';
	resources['ffe.ee.shared.formValidator.eeUIDate'] = 'This is not a valid date.';
	resources['ffe.ee.shared.dropdown.taxrelation.child'] = 'Child';
	resources['ffe.ee.shared.error.categoryCode'] = 'This is not a valid category code';
	resources['ffe.ee.shared.dropdown.language.hindi'] = 'Hindi';
	resources['ffe.ee.shared.button.download'] = 'Download';
	resources['ffe.ee.shared.exceptions.406.30003'] = 'Not Acceptable - Eligible plan is emptyException in calling RetrieveNonFaPlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.406.30002'] = 'Not Acceptable - Eligible plan is emptyException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.406.30001'] = 'Not Acceptable - Eligible plan is emptyException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.406.30000'] = 'Not Acceptable - Eligible plan is emptyException in calling RetrievePlanReviewConfirmDetails service';
	resources['ffe.ee.shared.footer.dhs.alt'] = 'opens in a new window';
	resources['ffe.ee.shared.dropdown.relation.december'] = 'December';
	resources['ffe.ee.shared.exceptions.400.60001'] = 'Defining enrollment group plan type has wrong valueException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.dropdown.language.gujarati'] = 'Gujarati';
	resources['ffe.ee.shared.dropdown.relation.august'] = 'August';
	resources['ffe.ee.shared.validation.eeZipcode'] = 'Enter a valid ZIP code.';
	resources['ffe.ee.shared.dropdown.language.vietnamese'] = 'Vietnamese';
	resources['ffe.ee.shared.help.menu.call'] = 'Help Center';
	resources['ffe.ee.shared.label.yes'] = 'Yes';
	resources['ffe.ee.shared.nav.enroll'] = 'Enroll';
	resources['ffe.ee.shared.dropdown.race.americanIndianOrAlaskanNative'] = 'American Indian or Alaskan Native';
	resources['ffe.ee.shared.dropdown.taxrelation.parent'] = 'Parent';
	resources['ffe.ee.shared.error.legalName'] = 'Please enter a valid Issuer Legal Name';
	resources['ffe.ee.shared.formValidator.productType'] = 'This is not a valid product type';
	resources['ffe.ee.shared.header.learn.logo'] = 'images/logo.png';
	resources['ffe.ee.shared.dropdown.language.urdu'] = 'Urdu';
	resources['ffe.ee.shared.formvalidator.summary.waitingForValidation'] = 'Validating...';
	resources['ffe.ee.shared.exceptions.403.555'] = 'Security breaching in Individual Application';
	resources['ffe.ee.shared.label.phone'] = 'Phone Number:';
	resources['ffe.ee.shared.error.fiveDigitNumericValue'] = 'Please enter a 5 digit numeric value in the location field.';
	resources['ffe.ee.shared.button.continue'] = 'Continue';
	resources['ffe.ee.shared.exceptions.500.70003'] = 'Error in creating new enrollment groupsException in calling SubmitCustomEnrollmentGroups service';
	resources['ffe.ee.shared.exceptions.500.70002'] = 'Exception while calling logic engineException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.70001'] = 'General Exception While calling logic engineException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.500.70000'] = 'Exception while mapping benefit data, waiting data to the metal type plan data object in RetrieveMetalGroupResultsException in calling RetrieveMetalGroupResults service';
	resources['ffe.ee.shared.formValidator.state'] = 'This is not a valid state code';
	resources['ffe.ee.shared.formValidator.eeCategoryCode'] = 'This is not a valid category code';
	resources['ffe.ee.shared.header.learn'] = 'Learn';
	resources['ffe.ee.shared.formValidator.statusCode'] = 'This is not a valid state';
	resources['ffe.ee.shared.footer.info.2'] = '7500 Security Boulevard, Baltimore, MD 21244';
	resources['ffe.ee.shared.label.relationship'] = 'Relationship';
	resources['ffe.ee.shared.label.question'] = 'Question';
	resources['ffe.ee.shared.dropdown.docType.temporaryI551'] = 'Temporary I-551 Stamp &#40;on passport or I-94&#41;';
	resources['ffe.ee.shared.validation.eeDate'] = 'Enter a valid date.';
	resources['ffe.ee.shared.label.relationshipTo'] = 'Relationship to';
	resources['ffe.ee.shared.nav.subNav.setHealthPrefs'] = 'Set Health Insurance Preferences';
	resources['ffe.ee.shared.link.view'] = 'View';
	resources['ffe.ee.shared.label.none'] = 'None';
	resources['ffe.ee.shared.formValidator.title'] = 'This is not a valid title';
	resources['ffe.ee.shared.button.learnAbout State'] = 'LEARN ABOUT YOUR STATE';
	resources['ffe.ee.shared.domainValues.medicaidTaxRoletype.05'] = 'Joint Tax Filer';
	resources['ffe.ee.shared.footer.email.text.HyperLink'] = 'HealthCare.gov/help-center.';
	resources['ffe.ee.shared.label.thisSection'] = 'this section&#58;';
	resources['ffe.ee.shared.footer.link.archive'] = 'ARCHIVE';
	resources['ffe.ee.shared.formValidator.differentPhoneNumbers'] = 'Please make sure phone numbers do not match';
	resources['ffe.ee.shared.label.dateOfBirth'] = 'Date of birth';
	resources['ffe.ee.shared.error.supplierName'] = 'Enter a valid supplier name to proceed with your search';
	resources['ffe.ee.shared.dropdown.relation.unrelated'] = 'Unrelated';
	resources['ffe.ee.shared.formValidator.eeChoose.percentages'] = 'Select between [x]-[x] items.';
	resources['ffe.ee.shared.label.socialSecurityNumber'] = 'Social Security number &#40;SSN&#41;';
	resources['ffe.ee.shared.exceptions.403.401'] = 'Unauthorized access';
	resources['ffe.ee.shared.footer.link.terms'] = 'Terms of Service';
	resources['ffe.ee.shared.nav.subNav.eligiblePlans'] = 'Eligible Plans';
	resources['ffe.ee.shared.403.forbidden'] = 'Forbidden';
	resources['ffe.ee.shared.help.menu.helpCenter'] = 'Help Topics';
	resources['ffe.ee.shared.label.optional'] = 'optional';
	resources['ffe.ee.shared.dropdown.docType.ds2019'] = 'DS2019 &#40;Certificate of Eligibility for Exchange Visitor &#40;J-1&#41; Status&#41;';
	resources['ffe.ee.shared.formValidator.ncqaAccreditationStatus'] = 'This is not a valid option';
	resources['ffe.ee.shared.dropdown.language.polish'] = 'Polish';
	resources['ffe.ee.shared.link.update'] = 'Update';
	resources['ffe.ee.shared.label.perYearLong'] = 'per year';
	resources['ffe.ee.shared.requiredText'] = 'All fields are required unless they&#39;re marked optional.';
	resources['ffe.ee.shared.validation.attestation'] = 'Check all attestations before submitting your application.';
	resources['ffe.ee.shared.formValidator.weeklyHours'] = 'Weekly hours must be between 0 and 99.';
	resources['ffe.ee.shared.formValidator.marketType'] = 'You must choose between &#39;individual, &#39;SHOP&#39;, or &#39;both&#39;';
	resources['ffe.ee.shared.label.youMayNeed'] = 'You may need&#58;';
	resources['ffe.ee.shared.dropdown.suffix.sr'] = 'Sr.';
	resources['ffe.ee.shared.formValidator.notBlank'] = 'This field is required';
	resources['ffe.ee.shared.needHelp'] = 'Need Help?';
	resources['ffe.ee.shared.dropdown.suffix.jr'] = 'Jr&#46;';
	resources['ffe.ee.shared.dropdown.suffix.iv'] = 'IV';
	resources['ffe.ee.shared.footer.link.sitemap'] = 'SITEMAP';
	resources['ffe.ee.shared.label.group'] = 'Group';
	resources['ffe.ee.shared.dropdown.taxrelation.fosterChild'] = 'Foster&#45;child';
	resources['ffe.ee.shared.label.year'] = 'Year';
	resources['ffe.ee.shared.validation.duplicateName'] = 'This name is already on your application.';
	resources['ffe.ee.shared.formValidator.phoneNumberExtn'] = 'This is not a valid phone extension';
	resources['ffe.ee.shared.error.oneItem'] = 'Select at least 1 item';
	resources['ffe.ee.shared.footer.altText.whitehouse'] = 'Whitehouse.gov The White House Washington - opens in a new window';
	resources['ffe.ee.shared.header.getInsurance.link'] = 'https://www.healthcare.gov/marketplace/individual';
	resources['ffe.ee.shared.dropdown.taxrelation.domesticPartner'] = 'Domestic Partner';
	resources['ffe.ee.shared.footer.hiddenText.helpcenter'] = 'opens in a new window';
	resources['ffe.ee.shared.validation.eeNumeric'] = 'Enter a valid value for 0.';
	resources['ffe.ee.shared.dropdown.phoneType.home'] = 'Home';
	resources['ffe.ee.shared.label.suiteNo'] = 'Suite No.';
	resources['ffe.ee.shared.nav.subNav.setPremiumTaxCredit'] = 'Set Premium Tax Credit';
	resources['ffe.ee.shared.nav.subNav.comparePlans'] = 'Compare plans';
	resources['ffe.ee.shared.dropdown.language.chinese'] = 'Chinese';
	resources['ffe.ee.shared.step'] = 'Step';
	resources['ffe.ee.shared.exceptions.400.40001'] = 'Bad Request - Enrollment group member list emptyException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.exceptions.400.40000'] = 'Wrong plan type in RetrievePlansSummaryByMetalException in calling RetrievePlansSummaryByMetal service';
	resources['ffe.ee.shared.dropdown.relation.november'] = 'November';
	resources['ffe.ee.shared.label.error'] = 'Error&#58;';
	resources['ffe.ee.shared.button.upload'] = 'Upload';
	resources['ffe.ee.shared.footer.altText.HHS'] = 'HHS.gov Department of Health and Human Services USA - opens in a new window';
	resources['ffe.ee.shared.formValidator.networkId'] = 'Your network ID must be 5 digits';
	resources['ffe.ee.shared.formValidator.state51'] = 'Please choose a state';
	resources['ffe.ee.shared.validation.invalid'] = 'Not valid';
	resources['ffe.ee.shared.formValidator.notDuplicateName'] = 'You cannot enter people with identical names and dates of birth.';
	resources['ffe.ee.shared.menu.messages'] = 'Messages(#)';
	resources['ffe.ee.shared.formValidator.eeSevisId'] = 'This is not a valid SEVIS ID';
	resources['ffe.ee.shared.help.search.placeHolder'] = 'Search Help';
	resources['ffe.ee.shared.label.does'] = 'Does';
	resources['ffe.ee.shared.footer.link.help'] = 'Help';
	resources['ffe.ee.shared.formValidator.eeQuestionAnswerNotBlank'] = 'User needs to be at least 18 years of age.';
	resources['ffe.ee.shared.exceptions.500.50008'] = 'General Exception while calling APTC plan rate controller in RetrievePlanDetailsException in calling RetrievePlanDetails service';
	resources['ffe.ee.shared.exceptions.500.50007'] = 'General Exception in RetrieveNonFaPlanReviewConfirmDetailsException in calling RetrieveNonFaPlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.500.50006'] = 'Error while setting subscriber in all groupsException in calling SubmitCustomEnrollmentGroups service';
	resources['ffe.ee.shared.exceptions.500.50005'] = 'exception while invoking APTC rate controllerException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.50004'] = 'No Eligible planException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.500.50003'] = 'General Exception - While calling APTC read controllerException in calling RetrievePlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.500.50002'] = 'General exception while calling logic engine serviceException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.50001'] = 'General Exception while calling APTC plan rate controller Exception in calling RetrievePlansSummaryByMetal service';
	resources['ffe.ee.shared.exceptions.500.50000'] = 'General Exception while calling Plan benefit service in RetrieveMetalGroupResultsException in calling RetrieveMetalGroupResults service';
	resources['ffe.ee.shared.footer.link.helpCenter'] = 'CONTACT US';
	resources['ffe.ee.shared.nav.subNav.screeningQuestion4'] = 'Step 4 of 4 screening questions.';
	resources['ffe.ee.shared.nav.subNav.screeningQuestion3'] = 'Step 3 of 4 screening questions';
	resources['ffe.ee.shared.nav.subNav.screeningQuestion2'] = 'Step 2 of 4 screening questions';
	resources['ffe.ee.shared.nav.subNav.screeningQuestion1'] = 'You are currently on the first screening question.';
	resources['ffe.ee.shared.footer.altText.MarketplaceLogo'] = 'Health Insurance Marketplace logo';
	resources['ffe.ee.shared.dropdown.race.black'] = 'Black';
	resources['ffe.ee.shared.formValidator.firstName'] = 'Your first name must be between 2 and 30 characters';
	resources['ffe.ee.shared.dropdown.language.german'] = 'German';
	resources['ffe.ee.shared.dropdown.race.nativeHawaiian'] = 'Native Hawaiian';
	resources['ffe.ee.shared.footer.link.contact'] = 'A federal government website managed by the U.S. Centers for Medicare & Medicaid Services. 7500 Security Boulevard, Baltimore, MD 21244';
	resources['ffe.ee.shared.dropdown.compLevel.intermediate'] = 'Intermediate';
	resources['ffe.ee.shared.help.menu.localHelp'] = 'Find Local Help';
	resources['ffe.ee.shared.formValidator.eeZipcode'] = 'This is not a valid zip code';
	resources['ffe.ee.shared.footer.hiddenText.archive'] = 'opens in a new window';
	resources['ffe.ee.shared.formValidator.eeCheckBox'] = 'To continue, check this box.';
	resources['ffe.ee.shared.label.returnToMyAccount'] = 'Return to your Marketplace account';
	resources['ffe.ee.shared.header.learn.link'] = 'https://www.healthcare.gov/';
	resources['ffe.ee.shared.currentSection'] = 'current section';
	resources['ffe.ee.shared.label.iDontKnow'] = 'I don&#39;t know';
	resources['ffe.ee.shared.dropdown.language.portuguese'] = 'Portuguese';
	resources['ffe.ee.shared.validation.minLength'] = '0 must be at least one character.';
	resources['ffe.ee.shared.exceptions.406.60001'] = 'Not Acceptable- Financial assistance requester indicator is TrueException in calling RetrieveNonFaPlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.406.60000'] = 'Not Acceptable- Financial assistance requester indicator is TrueException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.button.backchapter'] = 'Back to Chapter Start';
	resources['ffe.ee.shared.formValidator.eeHomeAddress'] = 'This is not a valid home address.';
	resources['ffe.ee.shared.header.mail'] = 'Mail';
	resources['ffe.ee.shared.formValidator.zipCode'] = 'Please enter a 5 digit numeric value in the location field.';
	resources['ffe.ee.shared.label.applicationID'] = 'Application ID&#58;';
	resources['ffe.ee.shared.footer.hiddenText'] = 'Footer';
	resources['ffe.ee.shared.error.applicationExists'] = 'An application currently exists for this Issuer.';
	resources['ffe.ee.shared.error.hiosIssueID'] = 'Please enter a valid HIOS Issuer Id';
	resources['ffe.ee.shared.exceptions.500.30201'] = 'Exception occurred during processing of service for benefit initiate enrollmentException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.30200'] = 'Exception occurred during processing of service for benefit initiate enrollmentException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.domainValues.medicaidTaxRoleType.07'] = 'Non-Filer';
	resources['ffe.ee.shared.domainValues.medicaidTaxRoleType.06'] = 'Married Filing Separately';
	resources['ffe.ee.shared.domainValues.medicaidTaxRoleType.04'] = 'Individual Exclude Spouse';
	resources['ffe.ee.shared.domainValues.medicaidTaxRoleType.03'] = 'Individual Tax Filer';
	resources['ffe.ee.shared.domainValues.medicaidTaxRoleType.02'] = 'Dependent on Parent';
	resources['ffe.ee.shared.domainValues.medicaidTaxRoleType.01'] = 'Dependent on Other';
	resources['ffe.ee.shared.validation.date'] = 'Enter a valid date.';
	resources['ffe.ee.shared.help.search.altText'] = 'Enter text to search';
	resources['ffe.ee.shared.footer.hiddenText.sitemap'] = 'opens in a new window';
	resources['ffe.ee.shared.button.languageSelection'] = 'Espa&ntilde;ol';
	resources['ffe.ee.shared.label.state'] = 'State';
	resources['ffe.ee.shared.validation.numbersOnlySSN'] = 'Enter numbers only.';
	resources['ffe.ee.shared.dropdown.phoneType.friend'] = 'Friend';
	resources['ffe.ee.shared.label.errorID'] = 'Error ID';
	resources['ffe.ee.shared.validation.eeCurrency'] = 'Enter a valid value for 0.';
	resources['ffe.ee.shared.dropdown.taxrelation.grandchild'] = 'Grandchild';
	resources['ffe.ee.shared.formValidator.EIN'] = 'EIN not valid';
	resources['ffe.ee.shared.dropdown.relation.may'] = 'May';
	resources['ffe.ee.shared.validation.eeEIN'] = 'This Federal Tax ID Number isnt valid.';
	resources['ffe.ee.shared.help.button.search'] = 'Search';
	resources['ffe.ee.shared.dropdown.taxrelation.stepParent'] = 'Step&#45;parent';
	resources['ffe.ee.shared.footer.hiddenText.plainwriting'] = 'opens in a new window';
	resources['ffe.ee.shared.button.getQuickAnswers'] = 'GET READY';
	resources['ffe.ee.shared.dropdown.docType.i94ForeignPassport'] = 'I-94 &#40;Arrival/Departure Record&#41; in Unexpired Foreign Passport';
	resources['ffe.ee.shared.retainUNP'] = 'Please retain the User Name and Password that you enter here. You will need this information to log in and manage your account.';
	resources['ffe.ee.shared.validation.number'] = '0 must be a number.';
	resources['ffe.ee.shared.error.acaCategory'] = 'Select at least one ACA Category for this plan';
	resources['ffe.ee.shared.footer.link.feedback'] = 'Feedback';
	resources['ffe.ee.shared.formValidator.eeidenticalNames'] = 'You cant enter people with the same names and dates of birth.';
	resources['ffe.ee.shared.label.month'] = 'Month';
	resources['ffe.ee.shared.footer.email.text'] = 'If you have questions, visit';
	resources['ffe.ee.shared.nav.subNav.planPreview'] = 'Plan Preview';
	resources['ffe.ee.shared.exceptions.400.20005'] = 'Bad Request - Plan type is nullException in calling RetrieveSavePlansForAllGroups service';
	resources['ffe.ee.shared.exceptions.400.20004'] = 'Bad Request - Enrollment group is empty from DBException in calling RetrieveEnrollmentGroupsByTaxHousehold service';
	resources['ffe.ee.shared.exceptions.400.20003'] = 'Bad Request - Enrollment groups Data VO is nullException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.400.20002'] = 'Bad Request - Enrollment groups Data VO is nullException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.exceptions.400.20001'] = 'Bad Request - Enrollment groups Data VO is null in RetrievePlanDetailsException in calling RetrievePlanDetails service';
	resources['ffe.ee.shared.exceptions.400.20000'] = 'Bad Request - Enrollment groups Data VO is null in RetrieveMetalGroupResultsException in calling RetrieveMetalGroupResults service';
	resources['ffe.ee.shared.button.back'] = 'Back';
	resources['ffe.ee.shared.menu.myProfile'] = 'My Profile';
	resources['ffe.ee.shared.error.cardNumber'] = 'This is not a valid card number';
	resources['ffe.ee.shared.label.homeAddress'] = 'Home address';
	resources['ffe.ee.shared.footer.link.glossary'] = 'GLOSSARY';
	resources['ffe.ee.shared.button.remove'] = 'REMOVE';
	resources['ffe.ee.shared.error.validValue'] = 'This is not a valid value (used for fields where only letters or numbers are allowed, also for income amounts)';
	resources['ffe.ee.shared.dropdown.relation.parent'] = 'Parent&#47;Step&#45;parent';
	resources['ffe.ee.shared.section'] = 'section';
	resources['ffe.ee.shared.nav.currentSection'] = 'Current section';
	resources['ffe.ee.shared.formvalidator.summary.successPrefix'] = 'Success: ';
	resources['ffe.ee.shared.validation.pattern'] = 'Enter a valid value for 0.';
	resources['ffe.ee.shared.dropdown.language.tagalog'] = 'Tagalog';
	resources['ffe.ee.shared.exceptions.500.30011'] = 'General Exception while calling Logic engine for retrieve eligible plan in RetrievePlansSummaryByMetalException in calling RetrievePlansSummaryByMetal service';
	resources['ffe.ee.shared.exceptions.500.30010'] = 'General Exception while calling Logic engine for retrieve eligible planException in calling RetrieveSavePlansForAllGroups service';
	resources['ffe.ee.shared.exceptions.500.30009'] = 'Exception while calling logic engineException in calling SubmitCustomEnrollmentGroups service';
	resources['ffe.ee.shared.exceptions.500.30008'] = 'General exception while calling logic engine serviceException in calling RetrieveNonFaPlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.500.30007'] = 'General Exception - ConfirmNonFA EnrollmentTransactionException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.30006'] = 'General Exception - ConfirmEnrollmentTransactionException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.30005'] = 'General Exception - Retrieve plan policy OR Insurance policy is emptyException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.500.30004'] = 'General Exception- While calling logic engineException in calling RetrievePlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.500.30003'] = 'General Exception - in Retrieve tax household for APTCException in calling RetrieveTaxHouseholdAPTC service';
	resources['ffe.ee.shared.exceptions.500.30002'] = 'General Exception- While calling logic engineException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.exceptions.500.30001'] = 'General Exception while calling Logic engine for retrieve eligible planException in calling RetrievePlanDetails service';
	resources['ffe.ee.shared.exceptions.500.30000'] = 'General Exception while calling Logic engine for retrieve eligible plan in RetrieveMetalGroupResultsException in calling RetrieveMetalGroupResults service';
	resources['ffe.ee.shared.validation.eeSpecialEnrollmentDate'] = 'Enter a date within the last 60 days.';
	resources['ffe.ee.shared.button.visitIndAndFamSection'] = 'VISIT INDIVIDUALS & FAMILIES SECTION';
	resources['ffe.ee.shared.exceptions.500.10401'] = 'General Exception while retrieving Plan Compare DetailsException in calling RetrievePlanCompareDetails service';
	resources['ffe.ee.shared.formValidator.eeAlpha'] = 'This is not a valid value';
	resources['ffe.ee.shared.validation.emailConfirmation'] = 'Email addresses don’t match.';
	resources['ffe.ee.shared.dropdown.relation.childOfDomesticPartner'] = 'Child of Domestic Partner';
	resources['ffe.ee.shared.dropdown.language.french'] = 'French';
	resources['ffe.ee.shared.formValidator.notAnEmail'] = 'This is not a valid user name';
	resources['ffe.ee.shared.error.uploading'] = 'Select a file for uploading';
	resources['ffe.ee.shared.formValidator.eeNumeric'] = 'This is not a valid value';
	resources['ffe.ee.shared.dropdown.race.korean'] = 'Korean';
	resources['ffe.ee.shared.dropdown.relation.sibling'] = 'Brother&#47;Sister';
	resources['ffe.ee.shared.button.addNote'] = 'Add Note';
	resources['ffe.ee.shared.error.birthdate'] = 'Enter a valid birthdate';
	resources['ffe.ee.shared.dropdown.race.chinese'] = 'Chinese';
	resources['ffe.ee.shared.formValidator.supplierNameRule'] = 'Please enter a valid supplier name to proceed with your search';
	resources['ffe.ee.shared.error.i94'] = 'This is not a valid I-94 number';
	resources['ffe.ee.shared.button.update'] = 'Update';
	resources['ffe.ee.shared.dropdown.race.samoan'] = 'Samoan';
	resources['ffe.ee.shared.error.weeklyHours'] = 'Weekly hours must be between 0 and 99';
	resources['ffe.ee.shared.button.submit'] = 'Submit';
	resources['ffe.ee.shared.dropdown.relation.child'] = 'Son&#47;Daughter';
	resources['ffe.ee.shared.todo.description'] = 'Fill In this with actual content. Lorem Ipsum';
	resources['ffe.ee.shared.formValidator.uRL'] = 'The URL you entered is invalid';
	resources['ffe.ee.shared.dropdown.taxrelation.grandparent'] = 'Grandparent';
	resources['ffe.ee.shared.dropdown.docType.citizenship'] = 'Certificate of Citizenship';
	resources['ffe.ee.shared.formValidator.eeI94Number'] = 'This is not a valid I-94 number';
	resources['ffe.ee.shared.header.getInsurance'] = 'Get Insurance';
	resources['ffe.ee.shared.exceptions.406.40000'] = 'Not Acceptable - No selected plan existException in calling RetrievePlanReviewConfirmDetails service';
	resources['ffe.ee.shared.dropdown.taxrelation.spouse'] = 'Spouse';
	resources['ffe.ee.shared.exceptions.500.936'] = 'Person Matching failed';
	resources['ffe.ee.shared.exceptions.500.935'] = 'Person Matching failed when updating Person';
	resources['ffe.ee.shared.exceptions.500.934'] = 'Person Matching failed when retrieving Person';
	resources['ffe.ee.shared.exceptions.500.933'] = 'Exception in Process ESC MEC Verification business service';
	resources['ffe.ee.shared.exceptions.500.932'] = 'Exception in Manage EE Account Retrieve Documents For Exchange User business service';
	resources['ffe.ee.shared.exceptions.500.930'] = 'Exception in Manage EE Account Retrieve Tax Household APTC business service';
	resources['ffe.ee.shared.exceptions.400.70000'] = 'CRUD operation type exceptionException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.exceptions.500.929'] = 'Exception in finding application documents for the given user';
	resources['ffe.ee.shared.button.close'] = 'Close';
	resources['ffe.ee.shared.exceptions.500.924'] = 'Exception in get Enrolled Plans for an Exchange User data service';
	resources['ffe.ee.shared.exceptions.500.923'] = 'Exception in retrieving Saved Insurance Plans for an Exchange User';
	resources['ffe.ee.shared.exceptions.500.922'] = 'Exception in Manage EE Account Retrieve Enrolled plans business service';
	resources['ffe.ee.shared.exceptions.500.921'] = 'Exception in Logic Engine Get Eligible Plans For Qualified Members';
	resources['ffe.ee.shared.exceptions.500.920'] = 'Exception in Logic Engine Get Shop Employee Plan service';
	resources['ffe.ee.shared.button.saveAndContinue'] = 'Save &amp; Continue';
	resources['ffe.ee.shared.exceptions.500.919'] = 'Exception in Manage EE Account Retrieve Notifications';
	resources['ffe.ee.shared.exceptions.500.918'] = 'Exception in Logic Engine Get Shop Employer Plans service';
	resources['ffe.ee.shared.exceptions.500.917'] = 'Exception in update inconsistency with timer duration';
	resources['ffe.ee.shared.exceptions.500.916'] = 'Exception in inconsistency adjudication process';
	resources['ffe.ee.shared.exceptions.500.915'] = 'Exception in append timer duration to verification';
	resources['ffe.ee.shared.exceptions.500.914'] = 'Exception in Logic Engine Determine SLCSP service';
	resources['ffe.ee.shared.exceptions.500.913'] = 'Unable to access Rating Engine';
	resources['ffe.ee.shared.exceptions.500.912'] = 'Exception in Manage Insurance Application Correct Exchange Verification Flow';
	resources['ffe.ee.shared.exceptions.500.911'] = 'Exception in Manage Insurance Application Indian Verification Flow';
	resources['ffe.ee.shared.exceptions.500.910'] = 'Exception in Manage Insurance Application Non ESI MEC Verification Flow';
	resources['ffe.ee.shared.exceptions.500.909'] = 'Exception in Manage Insurance Application Mid Year Change Flow';
	resources['ffe.ee.shared.exceptions.500.908'] = 'Exception in Manage Insurance Application Mid Year Household Change Flow';
	resources['ffe.ee.shared.exceptions.500.907'] = 'Exception in Manage Insurance Application Income Residency Verification Flow';
	resources['ffe.ee.shared.exceptions.500.906'] = 'Exception in Manage Insurance Application Retrieve Income Flow';
	resources['ffe.ee.shared.exceptions.500.905'] = 'Exception in Manage Insurance Application Lawful Presence Verification Flow';
	resources['ffe.ee.shared.exceptions.500.904'] = 'Exception in Manage Insurance Application Submit Application Flow';
	resources['ffe.ee.shared.exceptions.500.903'] = 'Exception in Processing DHS Verified Cases';
	resources['ffe.ee.shared.exceptions.500.902'] = 'Exception in Message Center Service';
	resources['ffe.ee.shared.exceptions.500.901'] = 'Exception in Email Service';
	resources['ffe.ee.shared.exceptions.500.900'] = 'Exception in Template Service';
	resources['ffe.ee.shared.formValidator.brandNameRule'] = 'Enter a valid brand name to proceed with your search';
	resources['ffe.ee.shared.error.selectCheckbox'] = 'Select the checkbox in order to proceed.';
	resources['ffe.ee.shared.phoneNumber'] = 'Call us. 1-866-633-4227 Mon - Fri(8 am - 11 am)';
	resources['ffe.ee.shared.formValidator.naicGroupCode'] = 'Your group code must be six digits';
	resources['ffe.ee.shared.menu.startScreen'] = 'Apps &amp; Coverage';
	resources['ffe.ee.shared.dropdown.relation.stepchild'] = 'Stepson&#47;Stepdaughter';
	resources['ffe.ee.shared.footer.link.viewersPlayers'] = 'VIEWERS &#38; PLAYERS';
	resources['ffe.ee.shared.formValidator.middleName'] = 'Your middle name must be between 2 and 30 characters';
	resources['ffe.ee.shared.error.sameName'] = 'Enter the same name as shown on the Social Security card&#46;';
	resources['ffe.ee.shared.exceptions.500.888'] = 'Exception in Process Income Explanation Service';
	resources['ffe.ee.shared.exceptions.500.879'] = 'Exception in Process Income Verification service';
	resources['ffe.ee.shared.exceptions.500.878'] = 'Exception in Compute Member Annual Income service';
	resources['ffe.ee.shared.exceptions.500.877'] = 'Exception in Determine Exit Expedited Income Qualifier Service';
	resources['ffe.ee.shared.exceptions.500.876'] = 'Exception in Verify Annual Income for APTC service';
	resources['ffe.ee.shared.exceptions.500.875'] = 'Exception in Manage Income Verification Service';
	resources['ffe.ee.shared.exceptions.500.874'] = 'Exception in Save Insurance Applications Service';
	resources['ffe.ee.shared.exceptions.500.873'] = 'Exception in Update Application Enrollees For Reverification Service';
	resources['ffe.ee.shared.exceptions.500.872'] = 'Exception in Get Application Enrollees For Reverification Service';
	resources['ffe.ee.shared.exceptions.500.871'] = 'Exception in Medicaid CHIP MAGI Immigration Service';
	resources['ffe.ee.shared.exceptions.500.870'] = 'Exception in Medicaid CHIP MAGI Standard service';
	resources['ffe.ee.shared.exceptions.500.80004'] = 'General Exception in the get enrollment group variance in CSRException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.500.80003'] = 'No Eligible plansException in calling RetrieveSavePlansForAllGroups service';
	resources['ffe.ee.shared.exceptions.500.869'] = 'Exception in QHP Residency service';
	resources['ffe.ee.shared.exceptions.500.80002'] = 'No Eligible plan in RetrievePlanDetailsException in calling RetrievePlanDetails service';
	resources['ffe.ee.shared.exceptions.500.868'] = 'Exception in Correct Exchange Service';
	resources['ffe.ee.shared.exceptions.500.80001'] = 'No Eligible plan in RetrievePlansSummaryByMetalException in calling RetrievePlansSummaryByMetal service';
	resources['ffe.ee.shared.exceptions.500.867'] = 'Exception in Medicaid Residency service';
	resources['ffe.ee.shared.exceptions.500.80000'] = 'No Eligible plan in RetrieveMetalGroupResultsException in calling RetrieveMetalGroupResults service';
	resources['ffe.ee.shared.exceptions.500.866'] = 'Exception in Medicaid CHIP MAGI Eligibility service';
	resources['ffe.ee.shared.exceptions.500.865'] = 'Current attestation does not match prior successful verification';
	resources['ffe.ee.shared.exceptions.500.864'] = 'Exception in saving REINnsurance Plan';
	resources['ffe.ee.shared.exceptions.500.863'] = 'Exception in retreiving REInsurance Plan by criteria';
	resources['ffe.ee.shared.exceptions.500.862'] = 'Exception in saving SHOP Employer Roster';
	resources['ffe.ee.shared.exceptions.500.861'] = 'Exception in saving SHOP Employer Application';
	resources['ffe.ee.shared.exceptions.500.860'] = 'Exception in retrieving SHOP Employer Roster';
	resources['ffe.ee.shared.error.name'] = 'This is not a valid name';
	resources['ffe.ee.shared.exceptions.500.859'] = 'Exception in retrieving SHOP Employer Application';
	resources['ffe.ee.shared.exceptions.500.858'] = 'Exception in saving EEAccount';
	resources['ffe.ee.shared.formValidator.uracApplicationNumber'] = 'this is not a valid application number';
	resources['ffe.ee.shared.exceptions.500.857'] = 'Exception in creating SHOP Employer Application';
	resources['ffe.ee.shared.exceptions.500.856'] = 'Exception in retreiving EEAccount by criteria';
	resources['ffe.ee.shared.exceptions.500.855'] = 'Exception in creating EEAccount';
	resources['ffe.ee.shared.exceptions.500.854'] = 'Exception in saving Insurance Application';
	resources['ffe.ee.shared.exceptions.500.853'] = 'Exception in finding Insurance Application with inconsistency';
	resources['ffe.ee.shared.exceptions.500.852'] = 'Exception in creating Insurance Application';
	resources['ffe.ee.shared.exceptions.500.851'] = 'Exception in retrieving Insurance Application';
	resources['ffe.ee.shared.exceptions.500.850'] = 'Exception in Manage SHOP Employer Notice Generation service';
	resources['ffe.ee.shared.formValidator.tIN'] = 'TIN invalid';
	resources['ffe.ee.shared.exceptions.500.849'] = 'Exception in Manage Notice Generation service';
	resources['ffe.ee.shared.exceptions.500.848'] = 'Exception in ProcessApplicationMemberVerificationImpl';
	resources['ffe.ee.shared.exceptions.500.847'] = 'Exception in Process Mid Year Change Service';
	resources['ffe.ee.shared.exceptions.500.846'] = 'Exception in Link Application EEAccount Service';
	resources['ffe.ee.shared.exceptions.500.845'] = 'Exception in generating SHOP Employer denial notice';
	resources['ffe.ee.shared.exceptions.500.844'] = 'Exception in generating individual application notice';
	resources['ffe.ee.shared.exceptions.500.843'] = 'Exception in Manage SHOP Employer Application service';
	resources['ffe.ee.shared.exceptions.500.842'] = 'Exception in Process Plan Selection Service';
	resources['ffe.ee.shared.exceptions.500.841'] = 'Exception in Determining Enrollment Period Reason';
	resources['ffe.ee.shared.exceptions.500.840'] = 'Exception in Determining Eligibility For Special Enrollment Period';
	resources['ffe.ee.shared.exceptions.500.839'] = 'Exception in updating employee roster';
	resources['ffe.ee.shared.exceptions.500.838'] = 'Exception in saving employee roster';
	resources['ffe.ee.shared.exceptions.500.837'] = 'Exception in Manage EEAccount';
	resources['ffe.ee.shared.exceptions.500.836'] = 'Exception in Calculating Plan Select Date and Benefits Service';
	resources['ffe.ee.shared.exceptions.500.835'] = 'Exception in logging into My Account';
	resources['ffe.ee.shared.exceptions.500.834'] = 'Exception in linking exchange users';
	resources['ffe.ee.shared.exceptions.500.833'] = 'Exception in linking employer application';
	resources['ffe.ee.shared.exceptions.500.832'] = 'Exception in triggering the Inconsistency Clock Service';
	resources['ffe.ee.shared.exceptions.500.831'] = 'Exception in Incarceration Verification';
	resources['ffe.ee.shared.exceptions.500.830'] = 'Exception in Indian Status Verification';
	resources['ffe.ee.shared.footer.hiddenText.glossary'] = 'opens in a new window';
	resources['ffe.ee.shared.exceptions.500.829'] = 'Exception in Lawful Presence Verification';
	resources['ffe.ee.shared.exceptions.500.828'] = 'Exception in Processing USCIS Form';
	resources['ffe.ee.shared.exceptions.500.827'] = 'Exception in reading USCIS PDF file';
	resources['ffe.ee.shared.exceptions.500.826'] = 'Exception in uploading document and creating task';
	resources['ffe.ee.shared.exceptions.500.825'] = 'Exception in Retrieving Review Task List';
	resources['ffe.ee.shared.exceptions.500.824'] = 'Exception in Creating Review Task';
	resources['ffe.ee.shared.exceptions.500.823'] = 'Exception in Assigning Review Task';
	resources['ffe.ee.shared.exceptions.500.822'] = 'Exception in determining Medicaid Household';
	resources['ffe.ee.shared.exceptions.500.821'] = 'Exception in Updating USCIS Form';
	resources['ffe.ee.shared.exceptions.500.820'] = 'Exception in Determining Coverage Year Tax Household';
	resources['ffe.ee.shared.exceptions.500.819'] = 'Exception in Non-ESI MEC Verification';
	resources['ffe.ee.shared.exceptions.500.818'] = 'Exception in Process Exemption';
	resources['ffe.ee.shared.exceptions.500.817'] = 'Exception in Income Verification';
	resources['ffe.ee.shared.exceptions.500.816'] = 'Exception in Process Inconsistency Adjudication Service';
	resources['ffe.ee.shared.exceptions.500.815'] = 'Exception in Process Inconsistency Items';
	resources['ffe.ee.shared.exceptions.500.814'] = 'Exception in determining Individual Eligibility';
	resources['ffe.ee.shared.exceptions.500.813'] = 'Exception in determining Eligibility';
	resources['ffe.ee.shared.exceptions.500.812'] = 'Exception in determining Applicant Medicaid MAGI Eligibility';
	resources['ffe.ee.shared.exceptions.500.811'] = 'Exception in Manage Insurance Application';
	resources['ffe.ee.shared.exceptions.500.810'] = 'Exception in determining Applicant Applicable MAGI Standard';
	resources['ffe.ee.shared.exceptions.500.809'] = 'Exception in determining Tax Household CSR eligibility';
	resources['ffe.ee.shared.exceptions.500.808'] = 'Exception in determining Tax Household APTC eligibility';
	resources['ffe.ee.shared.exceptions.500.807'] = 'Exception in determining SHOP employer eligibility';
	resources['ffe.ee.shared.exceptions.500.806'] = 'Exception in determining SHOP employee eligibility';
	resources['ffe.ee.shared.exceptions.500.805'] = 'Exception in determining QHP eligibility';
	resources['ffe.ee.shared.exceptions.500.804'] = 'Exception in determining Non-MAGI eligibility';
	resources['ffe.ee.shared.exceptions.500.803'] = 'Exception in determining CHIP eligibility';
	resources['ffe.ee.shared.exceptions.500.802'] = 'Exception in determining BHP eligibility';
	resources['ffe.ee.shared.exceptions.500.801'] = 'Exception in computing Income Percentage FPL';
	resources['ffe.ee.shared.exceptions.500.800'] = 'Unable to generate Excel file';
	resources['ffe.ee.shared.formValidator.checkboxGroupMaximum'] = 'Select no more than %s item(s)';
	resources['ffe.ee.shared.validation.email'] = 'Enter a valid email address.';
	resources['ffe.ee.shared.youAreIn'] = 'you are in step';
	resources['ffe.ee.shared.blockUIMessage.validateEmail'] = 'Please wait while we validate your email';
	resources['ffe.ee.shared.dropdown.language.russian'] = 'Russian';
	resources['ffe.ee.shared.dropdown.docType.naturalization'] = 'Naturalization Certificate';
	resources['ffe.ee.shared.nav.subNav.screeningQuestionIntro'] = 'You are completing four steps of Screening questions.';
	resources['ffe.ee.shared.formValidator.date'] = 'This is not a valid date';
	resources['ffe.ee.shared.dropdown.language.english'] = 'English';
	resources['ffe.ee.shared.validation.contactAge'] = 'The household contact must be at least 18.';
	resources['ffe.ee.shared.formValidator.eeName'] = 'This is not a valid name';
	resources['ffe.ee.shared.formValidator.lastName'] = 'Your last name must be between 2 and 30 characters';
	resources['ffe.ee.shared.error.passportNumber'] = 'This is not a valid passport number';
	resources['ffe.ee.shared.dropdown.time.pm'] = 'PM';
	resources['ffe.ee.shared.button.cancel'] = 'Cancel';
	resources['ffe.ee.shared.validation.sameEmail'] = 'Make sure email addresses match.';
	resources['ffe.ee.shared.error.noMoreThanPercentageItems'] = 'Select no more than %s item(s)';
	resources['ffe.ee.shared.label.income'] = 'Income';
	resources['ffe.ee.shared.dropdown.taxrelation.stepchild'] = 'Step&#45;child';
	resources['ffe.ee.shared.footer.ee.alt'] = 'opens in a new window';
	resources['ffe.ee.shared.formValidator.checkboxGroupMinimum'] = 'Please select at least %s item(s)';
	resources['ffe.ee.shared.label.middleName'] = 'Middle Name';
	resources['ffe.ee.shared.exceptions.404.401'] = 'Application Members or Associations Not Found';
	resources['ffe.ee.shared.exceptions.404.400'] = 'Plan Not Found';
	resources['ffe.ee.shared.error.parentsStepParents'] = 'Select whether these people are parents or stepparents';
	resources['ffe.ee.shared.error.brandName'] = 'Enter a valid brand name to proceed with your search';
	resources['ffe.ee.shared.label.perMonth'] = '/mo.';
	resources['ffe.ee.shared.exceptions.500.700'] = 'Unable to create Insurance Application Review Task';
	resources['ffe.ee.shared.dropdown.time.am'] = 'AM';
	resources['ffe.ee.shared.dropdown.docType.other'] = 'Other';
	resources['ffe.ee.shared.error.unableFindMatch'] = 'The system was unable to find a match for this username.  To continue, enter the name and email address of the person you want to authorize.';
	resources['ffe.ee.shared.label.low'] = 'Low';
	resources['ffe.ee.shared.nav.subNav.savedPlansCurrentlySelected'] = ', currently selected';
	resources['ffe.ee.shared.exceptions.500.10016'] = 'General exception while call RetrieveAvailableOperations service';
	resources['ffe.ee.shared.exceptions.500.10015'] = 'Gneral Exception while call RefreshToDoList';
	resources['ffe.ee.shared.exceptions.500.10014'] = 'General Exception - Retrieve and enrollment groupsException in calling RetrieveSavePlansForAllGroups service';
	resources['ffe.ee.shared.exceptions.500.10013'] = 'Error getting insurance application by application IdException in calling SubmitCustomEnrollmentGroups service';
	resources['ffe.ee.shared.exceptions.500.10012'] = 'General Exception in RetrieveEnrollmentGroupsByTaxHouseholdException in calling RetrieveEnrollmentGroupsByTaxHousehold service';
	resources['ffe.ee.shared.exceptions.500.10011'] = 'General Exception while calling insurance applicationException in calling RetrieveNonFaPlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.500.10010'] = 'General Exception while calling insurance applicationException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.10009'] = 'General Exception - Retrieve and enrollment groupsException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.10008'] = 'General Exception - Retrieve and enrollment groupsException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.500.10007'] = 'General Exception - Retrieve and enrollment groupsException in calling RetrievePlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.500.10006'] = 'General Exception - Retrieve and enrollment groupsException in calling RetrieveTaxHouseholdAPTC service';
	resources['ffe.ee.shared.exceptions.500.10005'] = 'General Exception - while calling retrieve APTC attestation infoException in calling RetrieveAPTCAttestation service';
	resources['ffe.ee.shared.exceptions.500.10004'] = 'General Exception - Retrieve and enrollment groupsException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.exceptions.500.10003'] = 'General Exception - Retrieve plan compare groups in data serviceException in calling RetrievePlanCompareGroupEnrollment service';
	resources['ffe.ee.shared.exceptions.500.10002'] = 'General Exception - Retrieve and enrollment groups in RetrievePlanDetailsException in calling RetrievePlanDetails service';
	resources['ffe.ee.shared.exceptions.500.10001'] = 'General Exception while retrieve and enrollment groups in RetrievePlansSummaryByMetalException in calling RetrievePlansSummaryByMetal service';
	resources['ffe.ee.shared.exceptions.500.10000'] = 'General Exception while retrieving Enrollment groups in RetrieveMetalGroupResultsException in calling RetrieveMetalGroupResults service';
	resources['ffe.ee.shared.dropdown.docType.i94'] = 'I-94 &#40;Arrival/Departure Record&#41;';
	resources['ffe.ee.shared.dropdown.relation.self'] = 'Self';
	resources['ffe.ee.shared.dropdown.relation.april'] = 'April';
	resources['ffe.ee.shared.nav.subNav.basicInfo'] = 'Basic Information';
	resources['ffe.ee.shared.dropdown.docType.i20'] = 'I-20 &#40;Certificate of Eligibility for Nonimmigrant &#40;F-1&#41; Student Status&#41;';
	resources['ffe.ee.shared.button.delete'] = 'Delete';
	resources['ffe.ee.shared.formValidator.eePassword'] = 'This is not a valid password';
	resources['ffe.ee.shared.validation.eePattern'] = 'Enter a valid value for 0.';
	resources['ffe.ee.shared.error.twoCharacters'] = 'Enter at least two characters.';
	resources['ffe.ee.shared.role.employer'] = 'Employer Marketplace';
	resources['ffe.ee.shared.role.employee'] = 'Employee Marketplace';
	resources['ffe.ee.shared.dropdown.language.arabic'] = 'Arabic';
	resources['ffe.ee.shared.exceptions.404.300'] = 'File Not Found';
	resources['ffe.ee.shared.dropdown.phoneType.employer'] = 'Employer';
	resources['ffe.ee.shared.exceptions.500.601'] = 'Unable to access Hios Issuer services';
	resources['ffe.ee.shared.exceptions.500.600'] = 'Unable to access Task Management';
	resources['ffe.ee.shared.error.identical'] = 'You cannot enter people with identical names and dates of birth';
	resources['ffe.ee.shared.article.and'] = 'and';
	resources['ffe.ee.shared.dropdown.race.white'] = 'White';
	resources['ffe.ee.shared.button.register'] = 'Register';
	resources['ffe.ee.shared.dropdown.docType.i571Resident'] = 'I-551 &#40;Permanent Resident Card&#41;';
	resources['ffe.ee.shared.label.answer'] = 'Answer';
	resources['ffe.ee.shared.footer.hiddenText.privacypolicy'] = 'opens in a new window';
	resources['ffe.ee.shared.label.estimatedTime'] = 'Estimated time for';
	resources['ffe.ee.shared.label.noneOfThesePeople'] = 'None of these people';
	resources['ffe.ee.shared.button.edit'] = 'Edit';
	resources['ffe.ee.shared.formValidator.eeCardNumber'] = 'This is not a valid card number';
	resources['ffe.ee.shared.error.date'] = 'This is not a valid date';
	resources['ffe.ee.shared.button.continueTo'] = 'Continue to';
	resources['ffe.ee.shared.blockUIMessage.genericPleaseWait.message'] = 'Please wait while we update your Marketplace account';
	resources['ffe.ee.shared.label.high'] = 'High';
	resources['ffe.ee.shared.error.company'] = 'Select a company.';
	resources['ffe.ee.shared.exceptions.404.203'] = 'REInsurance Plan Not Found';
	resources['ffe.ee.shared.exceptions.404.202'] = 'SHOPEmployer Application Not Found';
	resources['ffe.ee.shared.exceptions.404.201'] = 'EEAccount Not Found';
	resources['ffe.ee.shared.exceptions.404.200'] = 'Insurance Application Not Found';
	resources['ffe.ee.shared.exceptions.406.20004'] = 'Not Acceptable - Queried enrollment group plan is empty OR Selected plan doesnt existException in calling RetrieveNonFaPlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.406.20003'] = 'Not Acceptable - Queried enrollment group plan is empty OR Selected plan doesnt existException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.406.20002'] = 'Not Acceptable - Queried enrollment group plan is empty OR Selected plan doesnt existException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.406.20001'] = 'Not Acceptable - Queried enrollment group plan is emptyException in calling RetrievePlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.406.20000'] = 'Not Acceptable - Tax household is emptyException in calling RetrieveTaxHouseholdAPTC service';
	resources['ffe.ee.shared.menu.logOut'] = 'Log out';
	resources['ffe.ee.shared.validation.notBlank'] = 'Important: This field is required.';
	resources['ffe.ee.shared.error.digits'] = 'Enter digits only';
	resources['ffe.ee.shared.exceptions.400.50000'] = 'Bad Request - Wrong metal valueException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.exceptions.500.500'] = 'Unable to access Content Management';
	resources['ffe.ee.shared.label.expectedFormat'] = 'Expected format&#58;';
	resources['ffe.ee.shared.formValidator.checkboxGroupRange'] = 'You must select between %s and %s items';
	resources['ffe.ee.shared.nav.application'] = 'Application';
	resources['ffe.ee.shared.dropdown.ethnicity.mexican'] = 'Mexican&#44; Mexican American&#44; Chicano';
	resources['ffe.ee.shared.dropdown.race.japanese'] = 'Japanese';
	resources['ffe.ee.shared.button.next'] = 'Next';
	resources['ffe.ee.shared.label.showMore'] = 'Show More';
	resources['ffe.ee.shared.dropdown.docType.i551Resident'] = 'I-551 &#40;Permanent Resident Card&#41;';
	resources['ffe.ee.shared.formValidator.phoneNumber'] = 'This is not a valid phone number';
	resources['ffe.ee.shared.formValidator.eeDate'] = 'This is not a valid date.';
	resources['ffe.ee.shared.chat.label'] = 'Live Chat';
	resources['ffe.ee.shared.formValidator.ee.memberName'] = 'We cant confirm the information you entered about [member name]s immigration document. Review the information below, and make any necessary changes.';
	resources['ffe.ee.shared.error.serffNumber'] = 'Enter a valid Serff Number';
	resources['ffe.ee.shared.label.view'] = 'View';
	resources['ffe.ee.shared.label.name'] = 'Name:';
	resources['ffe.ee.shared.dropdown.phoneType.cell'] = 'Cell';
	resources['ffe.ee.shared.blockUIMessage.pleaseWait'] = 'Please wait';
	resources['ffe.ee.shared.dropdown.relation.february'] = 'February';
	resources['ffe.ee.shared.label.fieldsAreRequired'] = 'All fields are required unless they&#39;re marked optional.';
	resources['ffe.ee.shared.exceptions.500.60007'] = 'General Exception - While calling RetrievePlanReviewConfirmDetailsException in calling RetrievePlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.500.60006'] = 'General Exception - HIOS Service  or Mapping benefits data to plan summaryException in calling RetrievePlansSummaryByMetal service';
	resources['ffe.ee.shared.exceptions.500.60005'] = 'Error while saving the enrollment groupsException in calling SubmitCustomEnrollmentGroups service';
	resources['ffe.ee.shared.exceptions.500.60004'] = 'No policy createdException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.60003'] = 'No policy createdException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.60002'] = 'Plan VO is nullException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.500.60001'] = 'General Exception - Plan benefits data serviceException in calling RetrievePlanDetails service';
	resources['ffe.ee.shared.exceptions.500.60000'] = 'General Exception while calling APTC plan rate controller in RetrieveMetalGroupResultsException in calling RetrieveMetalGroupResults service';
	resources['ffe.ee.shared.exceptions.404.100'] = 'Person Not Found';
	resources['ffe.ee.shared.formValidator.eeAddress'] = 'This is not a valid address.';
	resources['ffe.ee.shared.exceptions.500.400'] = 'Unable to access EIM';
	resources['ffe.ee.shared.blockUIMessage.saveApplication'] = 'Please wait while we save your application';
	resources['ffe.ee.shared.button.smallBusinessSection'] = 'VISIT SMALL BUSINESS SECTION';
	resources['ffe.ee.shared.buttton.add'] = 'Add';
	resources['ffe.ee.shared.dropdown.race.vietnamese'] = 'Vietnamese';
	resources['ffe.ee.shared.nav.subNav.selectDental'] = 'Select Dental Insurance';
	resources['ffe.ee.shared.label.addAuthorizedRep'] = 'Add Authorized Representative';
	resources['ffe.ee.shared.formvalidator.summary.summaryHeadingSingle'] = 'Your information contains 1 error';
	resources['ffe.ee.shared.formValidator.manufacturerNameRule'] = 'Please enter a valid manufacturer name to proceed with your search';
	resources['ffe.ee.shared.label.idk'] = 'I don&rsquo;t know';
	resources['ffe.ee.shared.dropdown.race.filipino'] = 'Filipino';
	resources['ffe.ee.shared.error.saveCancel'] = 'Select Save or Cancel';
	resources['ffe.ee.shared.label.noneOfAbove'] = 'None of the above';
	resources['ffe.ee.shared.footer.altText.USA'] = 'USA.gov Government made easy - opens in a new window';
	resources['ffe.ee.shared.dropdown.compLevel.advanced'] = 'Advanced';
	resources['ffe.ee.shared.formValidator.email'] = 'This is not a valid email address';
	resources['ffe.ee.shared.label.streetAddress'] = 'Street Address';
	resources['ffe.ee.shared.validation.phoneNotRequired'] = 'Enter a valid phone number.';
	resources['ffe.ee.shared.nav.subNav.savedPlans'] = 'Saved Plans';
	resources['ffe.ee.shared.exceptions.500.300'] = 'Exception in executing rules on BRMS Server';
	resources['ffe.ee.shared.label.of'] = 'of';
	resources['ffe.ee.shared.label.no'] = 'No';
	resources['ffe.ee.shared.label.na'] = 'N/A';
	resources['ffe.ee.shared.footer.imgae.USA'] = 'images/logo_USAgov.png';
	resources['ffe.ee.shared.requiredFeild'] = 'All fields are required unless they&#39;re marked optional.';
	resources['ffe.ee.shared.validation.eeMonetary'] = 'Enter a valid value for 0.';
	resources['ffe.ee.shared.validation.sameEEPassword'] = 'Make sure passwords match.';
	resources['ffe.ee.shared.javascript.alert'] = '<strong>Alert</strong>: The page could not be loaded.  This page currently does not fully support browsers with &quot;JavaScript&quot; disabled.  Please note that if you choose to continue without enabling &quot;JavaScript&quot; certain functionalities on this website may not be available.';
	resources['ffe.ee.shared.exceptions.406.70003'] = 'Not Acceptable - Defined insurance product division type is null for the enrollment groupException in calling RetrieveNonFaPlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.406.70002'] = 'Not Acceptable - Defined insurance product division type is null for the enrollment groupException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.406.70001'] = 'Not Acceptable - Defined insurance product division type is null for the enrollment groupException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.406.70000'] = 'Not Acceptable - Defined insurance product division type is null for the enrollment groupException in calling RetrievePlanReviewConfirmDetails service';
	resources['ffe.ee.shared.button.unselect'] = 'Unselect';
	resources['ffe.ee.shared.button.enroll'] = 'Enroll';
	resources['ffe.ee.shared.formValidator.uracAccreditationStatus'] = 'You must choose between &#39;Full, &#39;Conditional&#39; or &#39;provisional&#39;';
	resources['ffe.ee.shared.dropdown.ethnicity.cuban'] = 'Cuban';
	resources['ffe.ee.shared.button.finish'] = 'Finish';
	resources['ffe.ee.shared.button.save'] = 'Save';
	resources['ffe.ee.shared.error.productID'] = 'Enter a valid Product Id';
	resources['ffe.ee.shared.label.readMore'] = 'Read more';
	resources['ffe.ee.shared.exceptions.500.221'] = 'Exception in calling get saved plans for exchange user data service';
	resources['ffe.ee.shared.exceptions.500.220'] = 'Exception in calling get household APTC of exchange user data service';
	resources['ffe.ee.shared.validation.eeRegex'] = 'Enter [x] digits.';
	resources['ffe.ee.shared.footer.info'] = 'A federal government website managed by the Centers for Medicare & Medicaid Services';
	resources['ffe.ee.shared.exceptions.500.219'] = 'Exception in calling get application documents data service';
	resources['ffe.ee.shared.exceptions.500.218'] = 'Exception in calling get enrolled plans for exchange user data service';
	resources['ffe.ee.shared.exceptions.500.217'] = 'Exception in calling Get Latest Notification For  Exchange User data service';
	resources['ffe.ee.shared.exceptions.500.216'] = 'Exception in calling Get Application Member By Criteria data service';
	resources['ffe.ee.shared.exceptions.500.215'] = 'Exception in Find Insurance Application With Inconsistency data service';
	resources['ffe.ee.shared.exceptions.500.214'] = 'Exception in calling Save Insurance Policy data service';
	resources['ffe.ee.shared.exceptions.500.213'] = 'Exception in calling Get Resource Bundle data service';
	resources['ffe.ee.shared.exceptions.500.212'] = 'Exception in calling Create Insurance Application data service';
	resources['ffe.ee.shared.exceptions.500.211'] = 'Exception in calling Save Insurance Application data service';
	resources['ffe.ee.shared.dropdown.race.other'] = 'Other';
	resources['ffe.ee.shared.exceptions.500.210'] = 'Exception in calling Update Employee Roster data service';
	resources['ffe.ee.shared.exceptions.500.209'] = 'Exception in calling Create EEAccount data service';
	resources['ffe.ee.shared.exceptions.500.208'] = 'Exception in calling Get EEAccount By Criteria data service';
	resources['ffe.ee.shared.exceptions.500.207'] = 'Exception in calling Save Exchange User Authorization Link data service';
	resources['ffe.ee.shared.exceptions.500.206'] = 'Exception in calling Save EEAccount data service';
	resources['ffe.ee.shared.exceptions.500.205'] = 'Exception in calling Get RE Insurance Plan By Criteria data service';
	resources['ffe.ee.shared.exceptions.500.204'] = 'Exception in calling Create Employer Organization Application data service';
	resources['ffe.ee.shared.exceptions.500.203'] = 'Exception in calling Save Employer Organization Application data service';
	resources['ffe.ee.shared.exceptions.500.202'] = 'Exception in calling Get Employer Roster By Criteria data service';
	resources['ffe.ee.shared.exceptions.500.201'] = 'Unable to access Reference Code ';
	resources['ffe.ee.shared.exceptions.500.200'] = 'Exception in data service';
	resources['ffe.ee.shared.dropdown.ethnicity.other'] = 'Other';
	resources['ffe.ee.shared.footer.image.USA'] = 'images/logo_USAgov.png';
	resources['ffe.ee.shared.button.saveAsDraft'] = 'Save As Draft';
	resources['ffe.ee.shared.formValidator.eeCurrency'] = 'This is not a valid value';
	resources['ffe.ee.shared.button.apply'] = 'Apply';
	resources['ffe.ee.shared.formValidator.eeFutureDateBeforeEndOfCoverageYear'] = 'This is not a valid date.';
	resources['ffe.ee.shared.label.notSure'] = 'Not sure';
	resources['ffe.ee.shared.formValidator.eeAlienNumber'] = 'This is not a valid alien number';
	resources['ffe.ee.shared.validation.eePatternRequired'] = 'Enter a valid value for 0.';
	resources['ffe.ee.shared.learnMore'] = 'Learn More';
	resources['ffe.ee.shared.validation.eeAlpha'] = 'Enter a valid value for 0.';
	resources['ffe.ee.shared.formValidator.sameEmail'] = 'Please make sure emails match';
	resources['ffe.ee.shared.error.cityZip'] = 'Either fill out the city and zip code fields, or select "I dont know."';
	resources['ffe.ee.shared.footer.hiddenText.Viewersplayers'] = 'opens in a new window';
	resources['ffe.ee.shared.dropdown.language.spanish'] = 'Spanish';
	resources['ffe.ee.shared.label.date'] = 'Date&#58;';
	resources['ffe.ee.shared.button.previous'] = 'Previous';
	resources['ffe.ee.shared.error.manufacturerName'] = 'Please enter a valid manufacturer name to proceed with your search';
	resources['ffe.ee.shared.error.sevisID'] = 'This is not a valid SEVIS ID';
	resources['ffe.ee.shared.header.logout'] = 'Logout';
	resources['ffe.ee.shared.exceptions.500.109'] = 'Unable to access HUB for ESC MEC';
	resources['ffe.ee.shared.exceptions.500.107'] = 'Unable to access HUB for Non-ESI MEC';
	resources['ffe.ee.shared.exceptions.500.106'] = 'Unable to access HUB for Annual Income';
	resources['ffe.ee.shared.exceptions.500.105'] = 'Unable to access HUB for Current Income';
	resources['ffe.ee.shared.exceptions.500.104'] = 'Unable to access HUB for Medicaid Transfer';
	resources['ffe.ee.shared.exceptions.500.103'] = 'Unable to access HUB for Max APTC data';
	resources['ffe.ee.shared.exceptions.500.102'] = 'Unable to access HUB for DHS data';
	resources['ffe.ee.shared.exceptions.500.101'] = 'Unable to access HUB for SSA data';
	resources['ffe.ee.shared.exceptions.500.100'] = 'Unable to access HUB';
	resources['ffe.ee.shared.dropdown.relation.spouse'] = 'Spouse';
	resources['ffe.ee.shared.error.stateCode'] = 'This is not a valid state code';
	resources['ffe.ee.shared.dropdown.relation.september'] = 'September';
	resources['ffe.ee.shared.validation.eeSSN'] = 'This 0 isnt valid.';
	resources['ffe.ee.shared.exceptions.400.30005'] = 'Bad Request - Enrollment group member list is emptyException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.400.30004'] = 'General Exception - Calling plan benefit serviceException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.400.30003'] = 'Bad Request - Tax household is emptyException in calling RetrieveEnrollmentGroupsByTaxHousehold service';
	resources['ffe.ee.shared.exceptions.400.30002'] = 'Bad Request - Plan VO is nullException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.exceptions.400.30001'] = 'Bad Request - Plan ID is empty in plan details criteriaException in calling RetrievePlanDetails service';
	resources['ffe.ee.shared.exceptions.400.30000'] = 'Bad Request - Wrong metal type in RetrievePlansSummaryByMetalException in calling RetrievePlansSummaryByMetal service';
	resources['ffe.ee.shared.formValidator.phoneNumberExtension'] = 'This is not a valid phone extension';
	resources['ffe.ee.shared.dropdown.race.otherAsian'] = 'Other Asian';
	resources['ffe.ee.shared.validation.login'] = 'Enter a valid username and password.';
	resources['ffe.ee.shared.blockUIMessage.loginAccount'] = 'Please wait while we log you into your account';
	resources['ffe.ee.shared.formValidator.issuerMarketCoverage'] = 'You must choose between &#39;individual, &#39;SHOP&#39;, or &#39;both&#39;';
	resources['ffe.ee.shared.dropdown.relation.march'] = 'March';
	resources['ffe.ee.shared.help.menu.chat'] = 'Live Chat';
	resources['ffe.ee.shared.button.change'] = 'CHANGE';
	resources['ffe.ee.shared.dropdown.docType.i766'] = 'I-766 &#40;Employment Authorization Card&#41;';
	resources['ffe.ee.shared.formValidator.naicCompanyCode'] = 'Your ompany code must be six digits';
	resources['ffe.ee.shared.button.learnAboutState'] = 'Learn About ';
	resources['ffe.ee.shared.nav.eligibilityResult'] = 'Eligibility Results';
	resources['ffe.ee.shared.validation.eeEmail'] = 'Enter a valid email address.';
	resources['ffe.ee.shared.footer.hiddenText.accessibility'] = 'opens in a new window';
	resources['ffe.ee.shared.dropdown.race.guamanianOrChamorro'] = 'Guamanian or Chamorro';
	resources['ffe.ee.shared.formValidator.radioGroupRange'] = 'You must select between %s and %s items';
	resources['ffe.ee.shared.button.confirm'] = 'Confirm';
	resources['ffe.ee.shared.validation.maxLength'] = '0 must be no more than [x] characters.';
	resources['ffe.ee.shared.nav.subNav.planConfirm2'] = 'You are currently on the Plan Confirm page.';
	resources['ffe.ee.shared.nav.subNav.planConfirm1'] = 'You are currently on the APTC Attestation page.';
	resources['ffe.ee.shared.dropdown.language.frenchCreole'] = 'French Creole';
	resources['ffe.ee.shared.error.state'] = 'Choose a state';
	resources['ffe.ee.shared.exceptions.500.40009'] = 'General Exception - Retrieve and enrollment groupsException in calling RetrieveNonFaPlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.500.40008'] = 'General Exception - Retrieve and enrollment groupsException in calling ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.40007'] = 'General Exception - Exception in enrollment group CSR varianceException in calling RetrievePlansSummaryByMetal service';
	resources['ffe.ee.shared.exceptions.500.40006'] = 'No eligible plansException in calling SubmitCustomEnrollmentGroups service';
	resources['ffe.ee.shared.exceptions.500.40005'] = 'APTC calculation exceptionException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.40004'] = 'General Exception - Selected enrollment group plan data VO is emptyException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.500.40003'] = 'General Exception - While calling APTC calculationException in calling RetrievePlanReviewConfirmDetails service';
	resources['ffe.ee.shared.exceptions.500.40002'] = 'General Exception - while calling Save enrollment group plan data serviceException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.exceptions.500.40001'] = 'General Exception - Exception in enrollment group CSR varianceException in calling RetrievePlanDetails service';
	resources['ffe.ee.shared.exceptions.500.40000'] = 'General Exception - Exception in enrollment group CSR variance in RetrieveMetalGroupResultsException in calling RetrieveMetalGroupResults service';
	resources['ffe.ee.shared.validation.incompleteSSN'] = 'Enter a complete Social Security number (SSN).';
	resources['ffe.ee.shared.error.selectState'] = 'Select a State';
	resources['ffe.ee.shared.label.upload'] = 'Upload';
	resources['ffe.ee.shared.help.menu.glossary'] = 'Glossary';
	resources['ffe.ee.shared.formValidator.radioGroupMinimum'] = 'Select at least %s item(s)';
	resources['ffe.ee.shared.dropdown.relation.june'] = 'June';
	resources['ffe.ee.shared.dropdown.relation.july'] = 'July';
	resources['ffe.ee.shared.javascript.reload'] = 'Press to reload after enabling JavaScript';
	resources['ffe.ee.shared.nav.completedSection'] = 'Completed section';
	resources['ffe.ee.shared.label.perMonthLong'] = '/month';
	resources['ffe.ee.shared.formvalidator.summary.errorPrefix'] = '<span class="iconCustom-exclamation-sign" aria-hidden="true"></span><span class="HiddenText">Important: </span>';


$.referenceTypes = {};
	resources['ffe.ee.registration.forgotUsernameResults.usernameEmailText'] = 'We sent an email to the email address associated with your account with instructions on how to get your username&#46;';
	resources['ffe.ee.registration.forgotPassword.emailPasswordHiddenText'] = 'Marketplace Account Registration - Forgot Password - Email Sent';
	resources['ffe.ee.registration.clickHereLink'] = ' click here';
	resources['ffe.ee.registration.forgotUsernameResults.usernameEmailHiddenText'] = 'Marketplace Account Registration - Forgot Username - Email Sent';
	resources['ffe.ee.registration.forgotUsernameResults.usernameEmailText1'] = 'If you think you entered the wrong email address&#44;';
	resources['ffe.ee.registration.resubmitText'] = 'to try again.';
	resources['ffe.ee.registration.forgotPassword.emailPasswordText1'] = 'We sent an email to the email address associated with your account with instructions on how to reset your password.';
	resources['ffe.ee.myAccount.inconsistencies.medch5.detaildescription'] = '<p>There&#39;s a difference between what [FN] entered on the application and what the Marketplace has verified with other government records. You need to provide the Marketplace one of the documents below by [Date]. [FN] won&#39;t qualify for [[state Medicaid program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Driver&#39;s license</li><li>State ID</li><li>U.S. passport</li><li>If not a U.S. citizen, provide current immigration documents from the Department of Homeland Security (DHS)</li></ul>';
	resources['ffe.ee.myAccount.coverage.action'] = 'Action';
	resources['ffe.ee.myAccount.enroll.toDoList.chip.program'] = 'Children&#39;s Health Insurance Program (CHIP) information for [FN]';
	resources['ffe.ee.myAccount.profile.pageTitle'] = 'My Profile';
	resources['ffe.ee.myAccount.inconsistencies.qe3.shortdescription'] = 'Verify [FN]&#39;s Social Security number (SSN) validation';
	resources['ffe.ee.myAccount.readyToUpload.successText2'] = 'was uploaded successfully.';
	resources['ffe.ee.myAccount.readyToUpload.successText1'] = 'Your roster spreadsheet file';
	resources['ffe.ee.myAccount.label.annualDeductible'] = 'Annual Deductible';
	resources['ffe.ee.myAccount.registration.email'] = 'Email address';
	resources['ffe.ee.myAccount.accountSettings.employer.ownerName'] = 'Business Owner Name';
	resources['ffe.ee.myAccount.workZip'] = 'ZIP code';
	resources['ffe.ee.myAccount.inconsistencies.medch22.detaildescription'] = '<p>The Marketplace is reviewing [FN]&#39;s information and will contact you if [FN] needs to take any further action.</p>';
	resources['ffe.ee.myAccount.idProofing.authorizedRep.description'] = 'Before you continue with the application and become a/an [authorized representative or secondary account holder] for [First name, last name&#39;s] [Individual or Employee application], we need to get some more information about you.';
	resources['ffe.ee.myAccount.addEmployeeModal.confirmHeader'] = 'Review and confirm your new authorized representative.';
	resources['ffe.ee.myAccount.inconsistencies.in20.shortdescription'] = 'Verify [FN]&#39;s residency';
	resources['ffe.ee.myAccount.eligibility.appeal.stateMedicaidProgram'] = '[state Medicaid program]';
	resources['ffe.ee.myAccount.profile.LOALandingPage.continueBecomeAuthorizedLink'] = 'Continue the application for healthcare coverage on behalf of someone outside of my family';
	resources['ffe.ee.myAccount.inconsistencies.medch44.shortdescription'] = 'Verify [FN]&#39; Veteran status';
	resources['ffe.ee.myAccount.enroll.toDoList.memberNames'] = 'For [Name], [Name], and [Name]';
	resources['ffe.ee.myAccount.profile.primaryEmail.description'] = 'We will use this email address for essential things like resetting your password.';
	resources['ffe.ee.myAccount.coverage.child.heading'] = 'MIChild eligibility';
	resources['ffe.ee.myAccount.coverage.menu.header'] = 'My coverage';
	resources['ffe.ee.myAccount.eligibilityResults.complete1'] = 'Your application is complete, but there are some unresolved inconsistencies. Inconsistencies are situations where we must confirm information that you submitted, or we need you to submit more information.';
	resources['ffe.ee.myAccount.inconsistencies.medch41.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.profile.profileLevel1US.securityQuestion.question3'] = 'Question 3:';
	resources['ffe.ee.myAccount.profile.profileLevel1US.securityQuestion.question2'] = 'Question 2:';
	resources['ffe.ee.myAccount.profile.profileLevel1US.securityQuestion.question1'] = 'Question 1:';
	resources['ffe.ee.myAccount.registration.verification.heading'] = 'Marketplace Account Registration - Verification';
	resources['ffe.ee.myAccount.inconsistencies.program.chip'] = 'MiChild eligibility';
	resources['ffe.ee.myAccount.inconsistencies.in18.detaildescription'] = '<p>[FN] - Send the Marketplace proof of what the income will be for the current month. Do not submit documents that are more than 60 days old. Examples of documents you can send include:</p><ul><li>Official release papers from institution</li></ul>';
	resources['ffe.ee.myAccount.coverage.myPlans.description'] = 'Now that you&#39;re enrolled, you should contact your plan directly to learn more about your current coverage. If you need to make changes to your household information or your income, you can <a href="#reportLifeChanges" target="_blank">report a life change</a>.';
	resources['ffe.ee.myAccount.logIn.signIn'] = 'Log in';
	resources['ffe.ee.myAccount.profile.profileLevel1US.password.new2'] = 'Please confirm your new password';
	resources['ffe.ee.myAccount.upgradeLite.error.e124'] = 'Important: We can’t verify your identity. Call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.removeEmployee.label.terminationDate'] = 'Termination Date';
	resources['ffe.ee.myAccount.accountSettings.nav.authorizations'] = 'Authorizations';
	resources['ffe.ee.myAccount.inconsistencies.medch2.description'] = 'Verify [FN]&#39; Residency';
	resources['ffe.ee.myAccount.label.premium'] = 'Premium';
	resources['ffe.ee.myAccount.inconsistencies.in18.description'] = 'Verify [FN]&#39;s incarceration status';
	resources['ffe.ee.myAccount.inconsistencies.apcsr9.shortdescription'] = 'Verify that [FN] has an offer of coverage from a job that doesn&#39;t meet minimum value standard';
	resources['ffe.ee.myAccount.reportLifeChanges.discard.heading'] = 'You will lose all changes you have made to this unsubmitted application update&#46;';
	resources['ffe.ee.myAccount.eligibility.pending'] = 'Pending';
	resources['ffe.ee.myAccount.inconsistencies.medch10.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.forgotPassword.success.h1HiddenText'] = 'Marketplace Account Registration - Forgot Password - Reset Password - Successful';
	resources['ffe.ee.myAccount.home.notFinished'] = 'Your application is not finished.';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.income'] = 'Add or remove an application member';
	resources['ffe.ee.myAccount.inconsistencies.apcsr6.shortdescription'] = 'Verify [FN] has an offer of coverage from a job that is unaffordable';
	resources['ffe.ee.myAccount.settings.passwordInfo'] = 'Must contain 6-20 characters, at least 1 letter and 1 number, and no spaces.';
	resources['ffe.ee.myAccount.employer.terminateCoverageModal.confirmTerminateButton'] = 'Terminate coverage';
	resources['ffe.ee.myAccount.security.question3.select'] = 'Select your third security question';
	resources['ffe.ee.myAccount.coverage.fileAppeal'] = 'File an appeal';
	resources['ffe.ee.myAccount.login.enterUserName'] = 'Enter the User name and the password you selected during registration.';
	resources['ffe.ee.myAccount.inconsistencies.medch25.description'] = '[FN]&#39; yearly income';
	resources['ffe.ee.myAccount.inconsistencies.medch10.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date].</p>';
	resources['ffe.ee.myAccount.settings.reportALifeChange'] = 'report a life change here';
	resources['ffe.ee.myAccount.employerCoverage.hiddenText2'] = 'Healthcare Clients';
	resources['ffe.ee.myAccount.employerCoverage.hiddenText1'] = 'Employer Sponsored Benefits';
	resources['ffe.ee.myAccount.inconsistencies.apcsr17.detaildescription'] = '<p>You need to return to the application by [Date] and provide information about whether [FN] qualifies for health coverage from an employer. The Marketplace can&#39;t determine [FN]&#39;s eligibility for a tax credit and cost&#45;sharing reductions (lower copayments, coinsurance and deductibles) without this information. If you need help, call the Marketplace at 1&#45;800&#45;318&#45;2596. TTY users should call 1&#45;855&#45;889&#45;4325.</p>';
	resources['ffe.ee.myAccount.accountSettings.descriptionIndApp'] = 'Please note that any relevant updates in the Individual Application will be reflected here';
	resources['ffe.ee.myAccount.zipPlus4Code'] = 'Zip';
	resources['ffe.ee.myAccount.accountSettings.employer.authorization'] = 'Authorization';
	resources['ffe.ee.myAccount.registration.verification.success.description2'] = 'With this account, you can use the Health Insurance Marketplace to find health coverage that fits your budget and meets your needs.';
	resources['ffe.ee.myAccount.LogIn.pageTitle'] = 'Log In';
	resources['ffe.ee.myAccount.registration.verification.success.description1'] = 'Your account has been created.';
	resources['ffe.ee.myAccount.inconsistencies.in09.description'] = 'Verify that [FN] is not enrolled in Medicare';
	resources['ffe.ee.myAccount.inconsistencies.in06.detaildescription'] = '<p>[FN] - You need to send the Marketplace proof of your immigration status. You should update your student status with the school, or ask the school to update the status in the Student and Exchange Visitor Information System (SEVIS).  Or you can send a copy of the following document:</p><ul><li>Letter from school that proves you are maintaining legal status</li></ul><p>For more information about maintaining your status, see <a href="http://studyinthestates.dhs.gov/students/maintain-your-status" target="_blank">http://studyinthestates.dhs.gov/students/maintain-your-status</a>. For more information about how to update immigration status with DHS, contact U.S. Citizenship and Immigration Services by calling the National Customer Service Center at 1&#45;800&#45;375&#45;5283.</p>';
	resources['ffe.ee.myAccount.inconsistencies.medch35.detaildescription'] = '<p>Send the Marketplace proof that [FN] is a citizen by [Date]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date].  Send a copy of a document proving [FN] is a citizen. Examples of documents proving citizenship can include:</p><ul><li>U.S. passport</li><li>U.S. public birth record</li><li>Certification of Report of Birth</li><li>Consular Report of Birth Abroad</li><li>Certification of Birth Abroad</li><li>U.S. Citizen Identification Card</li><li>American Indian Card (I&#45;872)</li><li>Certificate of Naturalization</li><li>Certificate of Citizenship</li></ul>';
	resources['ffe.ee.myAccount.terminate.confirm'] = 'I&#39;ve fully read and understand that I&#39;m choosing to terminate coverage from this plan for any members in my household that are currently enrolled in this plan.  I also understand that there may be tax implications of terminating from a plan early.';
	resources['ffe.ee.myAccount.registration.verification.heading.alreadyVerified'] = 'Oops&#46; Your user name has already been verified&#46;';
	resources['ffe.ee.myAccount.home.lastStepCompleted'] = 'Your last step completed&#58;';
	resources['ffe.ee.myAccount.logIn.alert.emailAddressWarningText4'] = 'to receive another verification email';
	resources['ffe.ee.myAccount.logIn.alert.emailAddressWarningText3'] = 'link';
	resources['ffe.ee.myAccount.logIn.alert.emailAddressWarningText2'] = 'Select';
	resources['ffe.ee.myAccount.logIn.alert.emailAddressWarningText1'] = 'The email address associated with your log in information was not verified.';
	resources['ffe.ee.myAccount.home.devTool.plansPrograms'] = 'Plans and Programs';
	resources['ffe.ee.myAccount.home.status.notStarted'] = 'Application Not Started';
	resources['ffe.ee.myAccount.profile.LOALandingPage.viewCurrentAppHeading'] = 'View my current applications';
	resources['ffe.ee.myAccount.inconsistencies.medch16.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.forgotPassword.success.alertHeading'] = 'SUCCESS:';
	resources['ffe.ee.myAccount.enroll.toDoList'] = 'Enroll To-Do List';
	resources['ffe.ee.myAccount.home.viewPlans'] = 'View plans';
	resources['ffe.ee.myAccount.forgotPassword.questions.description'] = 'We found your Marketplace account. Please answer the following questions to reset your password.';
	resources['ffe.ee.myAccount.authorizations.captionDescription'] = 'Review and confirm your new secondary account holder';
	resources['ffe.ee.myAccount.label.emailAddress2'] = 'Email Address';
	resources['ffe.ee.myAccount.label.emailAddress1'] = 'Email Address';
	resources['ffe.ee.myAccount.label.friday'] = 'Friday';
	resources['ffe.ee.myAccount.accountSettings.header'] = 'Communication preferences';
	resources['ffe.ee.myAccount.home.Employer.shopProgram.alert'] = 'Looking to enroll in the Small Business Health Options Program (SHOP)? Come back on November 1, 2013.';
	resources['ffe.ee.myAccount.accountSettings.primaryContact'] = 'Primary Contact';
	resources['ffe.ee.myAccount.profile.clickHere'] = 'Click here';
	resources['ffe.ee.myAccount.coverage.eligibleChildren'] = 'Eligible Children';
	resources['ffe.ee.myAccount.idProofing.hidden.upcoming'] = '&#44; upcoming step';
	resources['ffe.ee.myAccount.editedEmailAddressName'] = 'Primary Email';
	resources['ffe.ee.myAccount.registration.questionFour'] = 'Question 4';
	resources['ffe.ee.myAccount.resetPassword.h1HiddenText'] = 'Marketplace Account Registration - Forgot Password - Reset Password';
	resources['ffe.ee.myAccount.registration.ifPasswordForgotten'] = 'If you forgot your password';
	resources['ffe.ee.myAccount.reportLifeChanges.modal.title'] = 'Report a life change';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.militaryDependent'] = 'Military dependent&quot;s identification card';
	resources['ffe.ee.myAccount.heading.createAccount'] = 'Create Your Account';
	resources['ffe.ee.myAccount.inconsistencies.apcsr1.description'] = 'Verify [FN]&#39;s yearly income';
	resources['ffe.ee.myAccount.home.eligibilityResults.employerSponsored.view'] = 'View';
	resources['ffe.ee.myAccount.forgotPassword.incorrect.alertHeading'] = 'One or more of your answers was incorrect.';
	resources['ffe.ee.myAccount.registration.listFindCoverageOptions'] = 'Find people who can help you choose the best coverage options';
	resources['ffe.ee.myAccount.newUserQuestion'] = 'New User?';
	resources['ffe.ee.myAccount.inconsistencies.medch23.detaildescription'] = '<p>Send the Marketplace proof of what the income for [FN1, FN2, and FN3, etc.] will be for this month (month and year that application is submitted) by [Date]. Do not submit documents that are more than 60 days old. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date]. The allowable documents for income types include: </p><ul><li>[documentation types for income type 1]</li><li>[documentation types for income type 2]</li><li>[documentation types for income type 3]</li></ul><p>If you have tribal income, send proof of this income.</p>';
	resources['ffe.ee.myAccount.coverage.documents.heading'] = 'Documents';
	resources['ffe.ee.myAccount.expiredPassword.h1HiddenText'] = 'Marketplace Account Registration - Forgot Password - Password Expired';
	resources['ffe.ee.myAccount.profile.profileLevel2US.name'] = 'Name';
	resources['ffe.ee.myAccount.authorizations.label.endDate'] = 'End:';
	resources['ffe.ee.myAccount.profile.LOALandingPage.exempt.description'] = 'If you believe you have a situation that may qualify you as exempt from the requirement to carry health insurance,';
	resources['ffe.ee.myAccount.enroll.toDoList.yourHealthInsurance'] = '[health insurance provider name] health insurance plan for [FN] and [FN]';
	resources['ffe.ee.myAccount.eligibility.description'] = 'Your application has been processed and your eligibility results are listed below.';
	resources['ffe.ee.myAccount.registration.accountNotCreated.userID'] = 'User ID already exists. Choose a different User ID.';
	resources['ffe.ee.myAccount.inconsistencies.medch51.shortdescription'] = 'Verify [FN]&#39; citizenship status';
	resources['ffe.ee.myAccount.profile.profileLevel1US.topics'] = 'Topics:';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.voterRegistration'] = 'Voter registration card';
	resources['ffe.ee.myAccount.inconsistencies.in19.detaildescription'] = '<p>[FN] - Send the Marketplace proof of what the income will be for the current month. Do not submit documents that are more than 60 days old. Examples of documents you can send include:</p><ul><li>Tribal Card</li><li>Authentic document from a tribe declaring membership for an individual</li></ul>';
	resources['ffe.ee.myAccount.idProofing.documentUpload.question'] = 'What type of document do you want to upload?';
	resources['ffe.ee.myAccount.tab.plan'] = 'Plan Information';
	resources['ffe.ee.myAccount.profile.username'] = 'Username';
	resources['ffe.ee.myAccount.smallBusiness.globalLanding.pdf.link'] = 'Apply for coverage for my employees (PDF, 2.1MB)';
	resources['ffe.ee.myAccount.tab.messageCenter'] = 'Inbox';
	resources['ffe.ee.myAccount.idProofing.upload.reviewDocuments'] = 'Review your documents before submitting them&#46;';
	resources['ffe.ee.myAccount.inconsistencies.in19.shortdescription'] = 'Verify [FN]&#39;s membership in a federally-recognized tribe';
	resources['ffe.ee.myAccount.authorizations.authorized'] = 'You have chosen to authorize this person to access this application and act on your behalf&#46;';
	resources['ffe.ee.myAccount.profile.LOALandingPage.smallBusinessHeading'] = 'Small Businesses';
	resources['ffe.ee.myAccount.inconsistencies.medch20.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.error.doubleTenant'] = 'Important: You can only have one application per state.';
	resources['ffe.ee.myAccount.accountSettings.employer.primaryPhone'] = 'Phone NumberApl';
	resources['ffe.ee.myAccount.idProofing.organizationName'] = 'Organization name';
	resources['ffe.ee.myAccount.home.eligibilityResults.employerSponsored.processReviewed'] = 'Employer sponsored coverage confirmation process reviewed';
	resources['ffe.ee.myAccount.inconsistencies.qe13.description'] = 'Verify [FN] status as an American Indian or Alaska Native';
	resources['ffe.ee.myAccount.inLineDOB'] = 'Date of birth';
	resources['ffe.ee.myAccount.inconsistencies.medch11.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date].<br/>[FN] can also update their immigration status with the U.S. Department of Homeland Security, U.S. Citizenship and Immigration Services (USCIS). For more information about how to update immigration status with the Department of Homeland Security, contact USCIS by calling the National Customer Service Center at 1&#45;800&#45;375&#45;5283.</p>';
	resources['ffe.ee.myAccount.profile.profileLevel1US.textSubscription'] = 'Text subscriptions';
	resources['ffe.ee.myAccount.profile.changesNotSaved'] = 'Your changes have not been saved&#46;';
	resources['ffe.ee.myAccount.forgotPassword.questions.question3'] = 'What street did you live on in third grade?';
	resources['ffe.ee.myAccount.forgotPassword.questions.question2'] = 'In what city/town was your first job?';
	resources['ffe.ee.myAccount.forgotPassword.questions.question1'] = 'What&#39;s your mother&#39;s maiden name?';
	resources['ffe.ee.myAccount.coverage.eligibility.heading'] = 'Application details';
	resources['ffe.ee.myAccount.inconsistencies.apcsr18.detaildescription'] = '<p>The Marketplace doesn&#39;t have information about [FN]&#39;s eligibility for health coverage through a job. The Marketplace will contact the employer by [Date] for additional information and let you know after [Date] if information from the employer changes [FN]&#39;s eligibility for a tax credit and cost&#45;sharing reductions (lower copayments, coinsurance and deductibles).</p>';
	resources['ffe.ee.myAccount.application.status.terminated'] = 'Terminated';
	resources['ffe.ee.myAccount.applicationDetails.incomplete.description'] = 'You haven’t finished your application for health coverage. You must complete and submit your application to find out if you’re eligible for coverage and to enroll in a plan.';
	resources['ffe.ee.myAccount.idProofing.upload.additional'] = 'Important: You must submit an additional document to verify your identity. Click "Select file to upload" to continue.';
	resources['ffe.ee.myAccount.profile.profileLevel2US.welcome'] = 'Welcome John!';
	resources['ffe.ee.myAccount.settings.phone'] = 'Phone';
	resources['ffe.ee.myAccount.authorizations.notAuthorized'] = 'You did not authorize anybody to access your account&#46;';
	resources['ffe.ee.myAccount.inconsistencies.qe12.shortdescription'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.specialCharacters.description'] = 'All fields are required unless they&#39;re marked optional. Don&#39;t enter any letters with special characters, like accents, tildes, etc. ';
	resources['ffe.ee.myAccount.smallBusiness.globalLanding.heading'] = 'Small Business Employers';
	resources['ffe.ee.myAccount.terminatePlans.enrolledPlans'] = 'Enrolled in [#] plans';
	resources['ffe.ee.myAccount.home.notifications.notFinished'] = 'Your application is not finished.';
	resources['ffe.ee.myAccount.coverage.heading.problem'] = 'Problem';
	resources['ffe.ee.myAccount.inconsistencies.in07.detaildescription'] = '<p>[FN] - You need to send the Marketplace proof that you have an eligible immigration status. Send a copy of the following document:</p><ul><li>Letter or certificate of Victim of Trafficking status</li></ul>';
	resources['ffe.ee.myAccount.inconsistencies.medch44.description'] = 'Verify [FN]&#39; Veteran status';
	resources['ffe.ee.myAccount.inconsistencies.medch36.detaildescription'] = '<p>Send the Marketplace proof of naturalized or derived citizenship, including your Naturalization Certificate or Certificate of Citizenship, by [Date]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date]. </p>';
	resources['ffe.ee.myAccount.inconsistencies.apcsr18.description'] = 'Review information about [FN]&#39;s coverage through a job';
	resources['ffe.ee.myAccount.forgotUsernameResults.notProcessRequest'] = 'We weren&#39;t able to process your request.';
	resources['ffe.ee.myAccount.application.status.started'] = 'In progress';
	resources['ffe.ee.myAccount.eligibility.complete.heading'] = 'Your application is complete';
	resources['ffe.ee.myAccount.notifications.writtenLanguage.english'] = 'English';
	resources['ffe.ee.myAccount.secContactModal.header'] = 'Please provide Secondary Contact information.';
	resources['ffe.ee.myAccount.inconsistencies.in20.detaildescription'] = '<p>[FN] - You need to send the Marketplace proof that you live in or plan to live in the state where you submitted your application. Send a copy of one of the following documents:</p><ul><li>Driver’s license</li><li>State ID</li><li>Mortgage payment receipt</li><li>Mortgage deed showing primary residency</li><li>Lease agreement</li><li>School enrollment documentation</li><li>Utility bill</li><li>Government mail (Social Security statement, DMV notice)</li></ul>';
	resources['ffe.ee.myAccount.securityQuestions.validation.description'] = 'The answers to your security questions must contain letters or numbers and can&#39;t be longer than 30 characters. Dont enter any letters with special characters, like accents, tildes, etc. The following special characters are allowed, as long as they follow a letter or number. This means that your answers can&#39;t start with one of these characters, apostrophe (&#39;), hyphen (-), spaces, period (.).';
	resources['ffe.ee.myAccount.idProofing.button.resubmit'] = 'Resubmit information';
	resources['ffe.ee.myAccount.security.question2.enter'] = 'Input your answer for the second security question';
	resources['ffe.ee.myAccount.EmployeeHomePage.employeePostAppCompUS.topTask'] = 'TOP TASKS';
	resources['ffe.ee.myAccount.inconsistencies.medch35.description'] = 'Verify [FN]&#39; citizenship status';
	resources['ffe.ee.myAccount.idProofing.ccrQuestionsIncorrect.alertHeading'] = 'Your answer was incorrect.';
	resources['ffe.ee.myAccount.enroll.toDoList.description1'] = 'You&#39;re not enrolled yet.';
	resources['ffe.ee.myAccount.home.accountSettings'] = 'Account Settings';
	resources['ffe.ee.myAccount.returnToLogin'] = 'Return to log in page';
	resources['ffe.ee.myAccount.tab.general'] = 'General Settings';
	resources['ffe.ee.myAccount.security.questions.use'] = 'Security questions are used for lorem ipsum dolor sit amet.';
	resources['ffe.ee.myAccount.inconsistencies.apcsr17.shortdescription'] = 'Verify information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.inconsistencies.medch24.detaildescription'] = '<p>The Marketplace is reviewing [FN]&#39;s information and will contact you if [FN] needs to take any further action.</p>';
	resources['ffe.ee.myAccount.registration.signUpNow'] = 'sign up for one now.';
	resources['ffe.ee.myAccount.accountSettings.addSecContact'] = 'Add Secondary Contact';
	resources['ffe.ee.myAccount.coverage.other'] = 'Other';
	resources['ffe.ee.myAccount.inconsistencies.generalInconsistency.detaildescription'] = '<p>Keep any original documents. Send a copy of one of the documents electronically to the Marketplace by logging into your Marketplace account, or mail them to: Health Insurance Marketplace, Department of Health and Human Services, 465 Industrial Boulevard, London, Kentucky  40750-0001. If you need additional time to get these documents, please call 1-800-318-2596 (TTY: 1-855-889-4325).</p>';
	resources['ffe.ee.myAccount.applicationsForCoverage.pageTitle'] = 'Application for individuals &amp; families';
	resources['ffe.ee.myAccount.remove.authoirzedUser.modal.heading'] = 'Remove authorized user';
	resources['ffe.ee.myAccount.inconsistencies.apcsr14.shortdescription'] = 'Verify health coverage through a job will no longer be affordable';
	resources['ffe.ee.myAccount.inconsistencies.medch3.description'] = 'Verify [FN]&#39; Residency';
	resources['ffe.ee.myAccount.inconsistencies.in19.description'] = 'Verify [FN]&#39;s membership in a federally-recognized tribe';
	resources['ffe.ee.myAccount.inconsistencies.qe1.description'] = 'Verify [FN]&#39;s incarceration status';
	resources['ffe.ee.myAccount.enroll.toDoList.effectiveDate'] = 'Estimated effective date:';
	resources['ffe.ee.myAccount.profile.profileLevel1US.password.description1'] = 'Your password must contain 8&#45;20 characters&#46; There must be at least 1 upper case letter&#44; 1 lower case letter&#44; and 1 number&#46; It must be different from your last 6 passwords&#46; It can&#39;t contain your username or any of these characters &#61; &#63;&#60;&#62; &#40; &#41; &#8216; &#34; &#47; &#92; &#38;';
	resources['ffe.ee.myAccount.eligibility.description2'] = 'Your application was received and has been processed&#46;';
	resources['ffe.ee.myAccount.home.applicationStatus'] = 'Application status';
	resources['ffe.ee.myAccount.label.faxNumber'] = 'Fax Number';
	resources['ffe.ee.myAccount.login.pageTitle'] = 'My Account Login';
	resources['ffe.ee.myAccount.inconsistencies.qe9.shortdescription'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.home.resumeButton'] = 'Continue Application';
	resources['ffe.ee.myAccount.readyToUpload.reminder'] = 'Reminder:';
	resources['ffe.ee.myAccount.inconsistencies.qe6.shortdescription'] = 'Verify [FN]&#39;s status as a naturalized citizen';
	resources['ffe.ee.myAccount.inconsistencies.program.aptc'] = 'Qualified Health Plan eligibility';
	resources['ffe.ee.myAccount.href.viewStatement'] = 'View Online Statement';
	resources['ffe.ee.myAccount.home.notifications.apply'] = 'Apply now.';
	resources['ffe.ee.myAccount.forgotPassword.notFound.alertDescription4'] = 'If you think you got this message in error, call 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.manageEmployee.addEmployee'] = 'Add New Employee';
	resources['ffe.ee.myAccount.home.specialEnrollment.description2'] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	resources['ffe.ee.myAccount.authorizations.heading'] = 'Authorized users';
	resources['ffe.ee.myAccount.communicationPreferences.general.success'] = 'Success! Your changes have been saved.';
	resources['ffe.ee.myAccount.estimateHealthcareCosts'] = 'Estimate Healthcare Costs';
	resources['ffe.ee.myAccount.registration.forgotPassword.emailPassword.pageTitle'] = 'Forgot Password - Email Sent';
	resources['ffe.ee.myAccount.messages.nav'] = 'Messages';
	resources['ffe.ee.myAccount.registration.accountNotCreated.challengeQuestions.format'] = 'Invalid format for answers of security questions.';
	resources['ffe.ee.myAccount.inconsistencies.documentType'] = 'Document type';
	resources['ffe.ee.myAccount.testthing'] = '<span  style="color: red">Reduce The Number of keys<a href="#" onclick="alert(&#39;hey&#39;);">This is a Links</a></span>';
	resources['ffe.ee.myAccount.enroll.toDoList.preferences'] = 'Set preference';
	resources['ffe.ee.myAccount.label.suffix'] = 'Suffix';
	resources['ffe.ee.myAccount.inconsistencies.medch19.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.messages.nav.trash'] = 'Trash';
	resources['ffe.ee.myAccount.secContactModal.header2'] = 'Does Secondary Contact mailing address is the same as primary business address?';
	resources['ffe.ee.myAccount.coverage.menu.reportLifeChanges'] = 'Report a life change';
	resources['ffe.ee.myAccount.terminate.description'] = 'You understand that once you click Terminate below, there may be tax implications of early plan termination&#46;';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.identicationCard'] = 'Identification card issued by the federal&#44; state&#44; or local government&#44; including a U&#46;S&#46; passport';
	resources['ffe.ee.myAccount.inconsistencies.medch16.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.registration.createUsername'] = 'Create your username';
	resources['ffe.ee.myAccount.resetPassword.password'] = 'Password';
	resources['ffe.ee.myAccount.idProofing.ccrApplicationFound.description'] = 'Add all the paragraph text here.';
	resources['ffe.ee.myAccount.inconsistencies.resolve.description'] = 'Inconsistencies are situations where we must confirm information that you submitted, or we need you to submit more information.';
	resources['ffe.ee.myAccount.home.status.viewEligibility'] = 'View Eligibility';
	resources['ffe.ee.myAccount.profile.homeAddress.noneRecord'] = 'None provided';
	resources['ffe.ee.myAccount.label.userName'] = 'Username';
	resources['ffe.ee.myAccount.profile.passwordGuidlineText'] = 'Your password must contain 8&#45;20 characters&#46; There must be at least 1 upper case letter&#44; 1 lower case letter&#44; and 1 number&#46; It must be different from your last 6 passwords&#46; It can&#39;t contain your username or any of these characters &#61; &#63;&#60;&#62; &#40; &#41; &#8216; &#34; &#47; &#92; &#38;';
	resources['ffe.ee.myAccount.profile.insufficientMessage2'] = 'to upload additional documents';
	resources['ffe.ee.myAccount.profile.insufficientMessage1'] = 'The documents you provided weren&#39;t enough to prove your identity&#46; <a href="">. Click here to upload additional documents.</a>';
	resources['ffe.ee.myAccount.heading.personalIdentifyingInformation'] = 'Personal Identifying Information';
	resources['ffe.ee.myAccount.idProofing.upload.warning'] = 'Important&#58;';
	resources['ffe.ee.myAccount.inconsistencies.apcsr2.description'] = 'Verify [FN] isn&#39;t enrolled in [MECType]';
	resources['ffe.ee.myAccount.addEmployee.header'] = 'Tell us more about Employee&#35;<%=(index+1)%> who will be added to your roster';
	resources['ffe.ee.myAccount.inconsistencies.in21.detaildescription'] = '<p>[FN]&#39;s - We cant finish your application now -- its going to take us a little longer to make sure we get you the lowest possible costs. We will contact you again soon with more information. If you have questions, please call us at 1-800-318-2596 (TTY: 1-855-889-4325).</p>';
	resources['ffe.ee.myAccount.forgotUsernameResults.again'] = 'again';
	resources['ffe.ee.myAccount.employer.terminateCoverageModal.confirmTerminate'] = 'I have fully read and understand that I’m choosing to terminate coverage from this plan for any members in my household that are currently enrolled in this plan. I also understand that there may be tax implications from terminating a plan early.';
	resources['ffe.ee.myAccount.inconsistencies.medch50.detaildescription'] = '<p>Send the Marketplace proof that [FN] is a citizen by [date= end of clock]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date].  Send a copy of a document proving [FN] is a citizen. Examples of documents proving citizenship can include:</p><ul><li>U.S. passport</li><li>U.S. public birth record</li><li>Certification of Report of Birth</li><li>Consular Report of Birth Abroad</li><li>Certification of Birth Abroad</li><li>U.S. Citizen Identification Card</li><li>American Indian Card (I&#45;872)</li><li>Certificate of Naturalization</li><li>Certificate of Citizenship</li></ul>';
	resources['ffe.ee.myAccount.button.saveChanges'] = 'Save Changes';
	resources['ffe.ee.myAccount.settings.primaryPhone'] = 'Phone number';
	resources['ffe.ee.myAccount.idProofing.underReview.pageTitle'] = 'Identity is still being verified';
	resources['ffe.ee.myAccount.registration.passwordMustContain'] = 'Your password must contain 8&#45;20 characters&#46; There must be at least 1 upper case letter&#44; 1 lower case letter&#44; and 1 number&#46; It must be different from your last 6 passwords&#46; It can&#39;t contain your username or any of these characters &#61; &#63;&#60;&#62; &#40; &#41; &#8216; &#34; &#47; &#92; &#38;';
	resources['ffe.ee.myAccount.healthSavingsCheck'] = 'Health Savings Check';
	resources['ffe.ee.myAccount.coverage.menu.documents'] = 'Documents';
	resources['ffe.ee.myAccount.inconsistencies.qe10.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] wont qualify to enroll in coverage through the Marketplace if documents arent provided by [Date].</p> ';
	resources['ffe.ee.myAccount.inconsistencies.apcsr3.detaildescription'] = '<p>You need to send the Marketplace proof that [FN] will lose coverage through [MEC type] in the next 60 days, by [Date]. [FN] won&#39;t qualify for help paying for coverage through the Marketplace if documents aren&#39;t provided by [Date]. Examples of documents you can send include:</p><ul><li>Letter from health insurer including coverage termination date</li><li>Statement of health benefits</li><li>Letter from [name of MEC type]</li><ul>';
	resources['ffe.ee.myAccount.authorizations.label.name'] = 'Name:';
	resources['ffe.ee.myAccount.addEmployee.ssn2'] = 'tax ID number';
	resources['ffe.ee.myAccount.addEmployee.ssn1'] = 'Social Security number (SSN) or';
	resources['ffe.ee.myAccount.tab.preferences'] = 'Preferences';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.heading4'] = 'Your Current Offer';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.heading3'] = 'EMPLOYER BENEFITS';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.heading2'] = 'Employee Choice';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.heading1'] = 'PARTICIPATION';
	resources['ffe.ee.myAccount.authorizedRepresentative.title'] = 'Authorized representative';
	resources['ffe.ee.myAccount.home.notifications.eligibilityProcessed'] = 'Your application has been processed and you are ready to proceed to enrollment.';
	resources['ffe.ee.myAccount.eligibility.medicaid.description'] = 'A joint federal and state program that helps with medical costs for some people with limited income and resources&#46; Medicaid programs vary from state to state&#46;';
	resources['ffe.ee.myAccount.forgotUsernameResults.success'] = 'SUCCESS:';
	resources['ffe.ee.myAccount.inconsistencies.medch3.shortdescription'] = 'Verify [FN]&#39; Residency';
	resources['ffe.ee.myAccount.enroll.toDoList.healthPlan.description1'] = 'To activate your new health coverage, you must pay your first month&#39;s premium by your health plan&#39;s due date. Your health plan will contact you in the next few days on how to pay, or you can visit your health plan online to make your payment now if your plan accepts online payment.  .  Contact the health plan&#39;s customer service if you have any payment questions or issues.';
	resources['ffe.ee.myAccount.reminderText2'] = 'The size limit for participating in SHOP is 50 employees.';
	resources['ffe.ee.myAccount.applicationDetails.error'] = 'Error';
	resources['ffe.ee.myAccount.reminderText1'] = 'Reminder:';
	resources['ffe.ee.myAccount.employer.terminateCoverageModal.terminationDate'] = 'Termination Date';
	resources['ffe.ee.myAccount.coverage.heading.active'] = 'Active';
	resources['ffe.ee.myAccount.application.status.complete'] = 'Complete';
	resources['ffe.ee.myAccount.verificationNeeded.almostFinishedHeading'] = 'Almost there...';
	resources['ffe.ee.myAccount.enroll.toDoList.groups'] = 'To activate your new health coverage, you must pay your first month&#39;s premium by your health plan&#39;s due date. Your health plan will contact you in the next few days on how to pay, or you can visit your health plan online to make your payment now if your plan accepts online payment.  .  Contact the health plan&#39;s customer service if you have any payment questions or issues.';
	resources['ffe.ee.myAccount.profile.profileLevel1US.stateLiveConfirm'] = 'Please confirm your home state';
	resources['ffe.ee.myAccount.eligibility.link.printApplication'] = 'Print Application';
	resources['ffe.ee.myAccount.settings.secondaryPhone'] = 'Second phone number';
	resources['ffe.ee.myAccount.profile.profileLevel1US.securityQuestion.answer3'] = 'Answer 3:';
	resources['ffe.ee.myAccount.profile.profileLevel1US.securityQuestion.answer2'] = 'Answer 2:';
	resources['ffe.ee.myAccount.profile.profileLevel1US.securityQuestion.answer1'] = 'Answer 1:';
	resources['ffe.ee.myAccount.accountSettings.employer.label.primaryPhone'] = 'Primary Phone Number';
	resources['ffe.ee.myAccount.registration.accountNotCreated.pageTitle'] = 'Sign Up - Unsuccessful';
	resources['ffe.ee.myAccount.settings.email.success'] = 'The email address used for this application has been updated.';
	resources['ffe.ee.myAccount.security.question2.select'] = 'Select your second security question';
	resources['ffe.ee.myAccount.sel_access'] = 'Access Level';
	resources['ffe.ee.myAccount.registration.emailList'] = '<ul class="inline smallText inlineElement"> <li> <a href="https://mail.google.com/"  target="_blank"><strong>Gmail</strong></a></li><li> <a href="https://login.live.com/"  target="_blank"><strong>Outlook</strong></a></li><li> <a href="https://login.yahoo.com/"  target="_blank"><strong>Yahoo</strong></a></li><li> <a href="https://mail.aol.com/"  target="_blank"><strong>AOL</strong></a></li></ul>';
	resources['ffe.ee.myAccount.idProofing.contact.label.middleName'] = 'Middle';
	resources['ffe.ee.myAccount.notifications.notices.description'] = 'Notices are official messages that lorem ipsum&#46;';
	resources['ffe.ee.myAccount.customizedPlans'] = 'Get customized and recommended plans right for you';
	resources['ffe.ee.myAccount.link.viewAllApplications'] = 'View all applications';
	resources['ffe.ee.myAccount.coverage.lastStepCompleted'] = 'Your last step completed&#58;';
	resources['ffe.ee.myAccount.enroll.toDoList.verify.button'] = 'Verify';
	resources['ffe.ee.myAccount.profile.address.pleaseEnterText'] = 'Enter your new address';
	resources['ffe.ee.myAccount.forgotPassword.provideDetails'] = 'Provide these details to reset your password:';
	resources['ffe.ee.myAccount.registration.almostThere.pageTitle'] = 'Sign Up - Email Verification';
	resources['ffe.ee.myAccount.coverage.changePlan.description'] = 'During Open Enrollment, you can change the health insurance plan for this group&#46;';
	resources['ffe.ee.myAccount.inconsistencies.medch45.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.security.questionsFirstJob'] = 'In what city/town was your first job?';
	resources['ffe.ee.myAccount.terminate.button.keep'] = 'Keep coverage';
	resources['ffe.ee.myAccount.tab.associations'] = 'Associations';
	resources['ffe.ee.myAccount.inconsistencies.in05.shortdescription'] = 'Verify [FN]&#39;s veteran status';
	resources['ffe.ee.myAccount.signUpSuccess.acctCreatedText'] = 'Your account has been created.';
	resources['ffe.ee.myAccount.resetPassword.button'] = 'Reset Password';
	resources['ffe.ee.myAccount.home.getStartedText'] = 'You haven&#39;t started your application yet&#58; or watch a video about why it&#39;s a good idea to apply.';
	resources['ffe.ee.myAccount.reportLifeChanges.hidden.step3'] = 'you are in step 3';
	resources['ffe.ee.myAccount.forgotPassword.heading'] = 'Forgot password';
	resources['ffe.ee.myAccount.inconsistencies.in02.shortdescription'] = 'Sample Text';
	resources['ffe.ee.myAccount.idProofing.results.wait'] = 'Please wait a few minutes and try again.';
	resources['ffe.ee.myAccount.applicationDetails.heading'] = 'Application details';
	resources['ffe.ee.myAccount.EmployeeHomePage.employeePostAppCompUS.reportLifeChange.description'] = 'Moving, children, etc';
	resources['ffe.ee.myAccount.label.thursday'] = 'Thursday';
	resources['ffe.ee.myAccount.readyToUpload.success'] = 'SUCCESS:';
	resources['ffe.ee.myAccount.idProofing.contact.label.extension'] = 'Ext&#46;';
	resources['ffe.ee.myAccount.inconsistencies.medch23.shortdescription'] = 'Verify [FN]&#39; current income';
	resources['ffe.ee.myAccount.security.question1.enter'] = 'Input your answer for the first security question';
	resources['ffe.ee.myAccount.label.forgotUserName'] = 'Forgot User Name?';
	resources['ffe.ee.myAccount.coverage.percentageDone'] = 'You are about 50% done.';
	resources['ffe.ee.myAccount.idProofing.contact.label.streetAddress2'] = 'Apt&#46;/Ste #&#46;';
	resources['ffe.ee.myAccount.authorizedUsers.pagetitle'] = 'Authorized Users';
	resources['ffe.ee.myAccount.addEmployeeModal.addByUpload'] = 'Upload a completed roster template';
	resources['ffe.ee.myAccount.label.emailAddress'] = 'Email Address';
	resources['ffe.ee.myAccount.notifications.writtenLanguage'] = 'Preferred written language';
	resources['ffe.ee.myAccount.inconsistencies.medch36.description'] = 'Verify [FN]&#39; naturalized or derived citizenship';
	resources['ffe.ee.myAccount.profile.LOALandingPage.applyFamilyLink'] = 'Apply and shop for coverage for me and/or my family';
	resources['ffe.ee.myAccount.notifications.notices.messageCenter'] = 'HealthCare.gov Message Center';
	resources['ffe.ee.myAccount.quoteTest'] = '“Apes.”';
	resources['ffe.ee.myAccount.ccrLanding.pageTitle'] = 'Application for individuals & families';
	resources['ffe.ee.myAccount.home.applicationIncompleteMessage'] = 'You haven’t finished your application for health coverage. You must complete and submit your application to find out if you’re eligible for coverage and to enroll in a plan.';
	resources['ffe.ee.myAccount.eligibility.inProgress.description'] = '<strong>Important&#58;</strong> Please read your Eligibility Results in their entirety before you enroll. You may have problems with your application that you&#39;ll need to resolve&#46;';
	resources['ffe.ee.myAccount.home.status.post'] = 'Post App Completion';
	resources['ffe.ee.myAccount.coverage.applicationProgress'] = 'Application progress&#58;';
	resources['ffe.ee.myAccount.forgotUsernameResults.usernameFoundEmailSent.partOne'] = 'We sent an email to';
	resources['ffe.ee.myAccount.profile.profileLevel1US.name'] = 'Name';
	resources['ffe.ee.myAccount.forgotPassword.questions.h1HiddenText'] = 'Marketplace Account Registration - Forgot Password - Security Questions';
	resources['ffe.ee.myAccount.registration.forgotUsername.hiddenText'] = 'Marketplace Account Registration - Forgot Username';
	resources['ffe.ee.myAccount.registration.profileHeader'] = 'Your Information';
	resources['ffe.ee.myAccount.inconsistencies.apcsr4.detaildescription'] = '<p>There&#39;s a difference between what [FN] said on the application and what the Marketplace has verified with other records. You need to send the Marketplace one of the following documents for [FN] by [Date]. [FN] won&#39;t qualify for a tax credit and cost&#45;sharing reductions (lower copayments, coinsurance and deductibles) if documents aren&#39;t provided by [Date]. Upload a copy of one of the following documents for each employer that offers coverage to [FN]</p><ul><li>A letter from an employer participating in the SHOP that says the employee isn&#39;t offered coverage </li><li>A completed Employer Coverage Tool and a cover letter signed by the employer participating in the SHOP</li><li>Other documentation from the employer participating in the SHOP that says that the employee isn&#39;t eligible for health coverage</li></ul>';
	resources['ffe.ee.myAccount.idProofing.contact.label.phoneNumber'] = 'Phone number';
	resources['ffe.ee.myAccount.inconsistencies.medch4.description'] = 'Verify [FN]&#39; Residency';
	resources['ffe.ee.myAccount.coverage.CSR'] = 'Cost Sharing Reduction &#40;CSR&#41;';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.divorceDecree'] = 'Divorce decree';
	resources['ffe.ee.myAccount.inconsistencies.qe2.description'] = 'Verify [FN]&#39;s SSN and date of death, if applicable';
	resources['ffe.ee.myAccount.registration.createAccountFailed'] = 'The Marketplace was unable to create a Profile&#46;';
	resources['ffe.ee.myAccount.logout.pageTitle'] = 'Logout';
	resources['ffe.ee.myAccount.terminate.endCoverage'] = 'Your coverage will end on [END_DATE]';
	resources['ffe.ee.myAccount.home.settings.link'] = 'Settings';
	resources['ffe.ee.myAccount.profile.LOALandingPage.viewBecomeAuthorizedLink'] = 'View the application for healthcare coverage submitted on behalf of someone outside of my family';
	resources['ffe.ee.myAccount.coverage.startDate'] = 'Start date&#58;';
	resources['ffe.ee.myAccount.link.application.appType'] = 'Individuals &amp; Families';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.disabled'] = 'Family member has become disabled&#44; blind&#44; or placed in long term care';
	resources['ffe.ee.myAccount.inLineFirstName'] = 'First name';
	resources['ffe.ee.myAccount.label.secondaryPhone'] = 'Secondary';
	resources['ffe.ee.myAccount.forgotUsernameResults.profileNotFound.hiddenText'] = 'Marketplace Account Registration - Forgot Username - Profile Not Found';
	resources['ffe.ee.myAccount.home.contactInfo'] = 'Contact Info, Security Settings, Authorized Users, Notifications';
	resources['ffe.ee.myAccount.enroll.toDoList.yourHealth'] = 'Your health plan';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.employer'] = 'Employer identification card';
	resources['ffe.ee.myAccount.employerHomePage.employerPostAppCompletionUS.heading4.description1'] = 'Add new employee, update employee information, remove employee';
	resources['ffe.ee.myAccount.profile.profileLevel1US.stateLive'] = 'State you live in';
	resources['ffe.ee.myAccount.registration.error.createAccountFailed.note'] = 'Please note that one of the errors below may have occurred:';
	resources['ffe.ee.myAccount.applicationUserName'] = 'User Name';
	resources['ffe.ee.myAccount.expiredPassword.oldPassword'] = 'Current password';
	resources['ffe.ee.myAccount.accountSettings.secondaryContact.notSetup'] = 'You do not have Secondary Contact Information set up.';
	resources['ffe.ee.myAccount.logIn.alert.expiredPasswordWarningText'] = 'Your password has expired.';
	resources['ffe.ee.myAccount.employeeFirstName'] = 'First name';
	resources['ffe.ee.myAccount.coverage.heading.inProgress'] = 'In progress';
	resources['ffe.ee.myAccount.applicationDetails.button.view'] = 'View eligibility results';
	resources['ffe.ee.myAccount.label.status'] = 'Status';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.driversLicense'] = 'Drivers license issued by state or territory';
	resources['ffe.ee.myAccount.employeeWorkAddress2'] = 'Address';
	resources['ffe.ee.myAccount.employeeWorkAddress1'] = 'Address';
	resources['ffe.ee.myAccount.label.ssn'] = 'SSN';
	resources['ffe.ee.myAccount.inconsistencies.medch7.detaildescription'] = '<p>Send the Marketplace proof that [FN] is a citizen by [Date]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date].  Send a copy of a document proving [FN] is a citizen. Examples of documents proving citizenship can include:</p><ul><li>U.S. passport</li><li>U.S. public birth record</li><li>Certification of Report of Birth</li><li>Consular Report of Birth Abroad</li><li>Certification of Birth Abroad</li><li>U.S. Citizen Identification Card</li><li>American Indian Card (I&#45;872)</li><li>Certificate of Naturalization</li><li>Certificate of Citizenship</li></ul>';
	resources['ffe.ee.myAccount.idProofing.ccrApplication.pageTitle'] = 'We have found an application that belongs to you';
	resources['ffe.ee.myAccount.profile.profileLevel1US.primaryEmail'] = 'Email address';
	resources['ffe.ee.myAccount.registration.securityHeader'] = 'Security Questions';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.employerSponsoredBenefitsDental.button.makePayments'] = 'Make Payment';
	resources['ffe.ee.myAccount.home.reportLifeChange'] = 'Report a life change';
	resources['ffe.ee.myAccount.inconsistencies.medch18.description'] = 'Verify [FN]&#39; Veteran status';
	resources['ffe.ee.myAccount.registration.forgotPassword.pageTitle'] = 'Forgot Password';
	resources['ffe.ee.myAccount.coverage.discountUsage.learn'] = 'Learn more about using your Premium tax credit&#46;';
	resources['ffe.ee.myAccount.viewDetail'] = 'View Detailed Cost Information';
	resources['ffe.ee.myAccount.home.notifications.inconsistencyNotification'] = 'Inconsistency Notification&#58;';
	resources['ffe.ee.myAccount.signUpSuccess.step3'] = 'Step 3 of 3';
	resources['ffe.ee.myAccount.signUpSuccess.step2'] = 'Step 2 of 3';
	resources['ffe.ee.myAccount.signUpSuccess.step1'] = 'Step 1 of 3';
	resources['ffe.ee.myAccount.settings.toChangeAddress'] = 'To change your address, you must';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.socialSecurityCard'] = 'Social Security card';
	resources['ffe.ee.myAccount.logIn.password'] = 'Password';
	resources['ffe.ee.myAccount.inconsistencies.apcsr3.description'] = 'Verify [FN] is losing [MECType]';
	resources['ffe.ee.myAccount.removePerson.modal.title'] = 'Removing a person from a health plan';
	resources['ffe.ee.myAccount.forgotPassword.username'] = 'What is your Marketplace username?';
	resources['ffe.ee.myAccount.inconsistencies.in12.shortdescription'] = 'Verify that [FN] is not enrolled in Peace Corps coverage';
	resources['ffe.ee.myAccount.idProofing.ccrQuestionsIncorrect.description'] = 'Add description text here.';
	resources['ffe.ee.myAccount.forgotPassword.provideDetails.firstName'] = 'First name';
	resources['ffe.ee.myAccount.profile.LOALandingPage.exempt.link'] = 'you can get more information and download applications here.';
	resources['ffe.ee.myAccount.inconsistencies.medch33.shortdescription'] = 'Verify [FN]&#39; Social security number and related information';
	resources['ffe.ee.myAccount.notifications.general.collapsed.header'] = 'Notifications';
	resources['ffe.ee.myAccount.registration.accountNotCreated.accountInfo'] = '<strong>Important:</strong> Your account couldn&#39;t be created at this time. Call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.inconsistencies.medch30.shortdescription'] = 'Verify [FN]&#39;s Social Security number (SSN)';
	resources['ffe.ee.myAccount.employerCoverage.viewPrevious'] = 'View previous applications';
	resources['ffe.ee.myAccount.accountSettings.employer.fax'] = 'Fax';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.employerSponsoredBenefits.descriptionText'] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra dictum nisl vitae tincidunt. Suspendisse suscipit tellus at massa eleifend dictum. Mauris imperdiet sem vitae erat egestas volutpat. In hac habitasse platea dictumst.';
	resources['ffe.ee.myAccount.agentBrokerNoAssisterQuestions.header'] = 'No assistor questions';
	resources['ffe.ee.myAccount.label.phoneNumber'] = 'Enter a new phone number';
	resources['ffe.ee.myAccount.inconsistencies.in10.description'] = 'Verify that [FN] is not enrolled in Medicaid or the Children&#39;s Health Insurance Program (CHIP)';
	resources['ffe.ee.myAccount.profile.profileLevel2US.fullName'] = 'John Phillip Smith, Jr.';
	resources['ffe.ee.myAccount.applicationDetails.incomplete.description2'] = 'You haven’t finished your application for health coverage. You must complete and submit your application to find out if you’re eligible for coverage and to enroll in a plan.';
	resources['ffe.ee.myAccount.applicationDetails.incomplete.description1'] = 'You haven’t finished your application for health coverage. You must complete and submit your application to find out if you’re eligible for coverage and to enroll in a plan.';
	resources['ffe.ee.myAccount.coverage.exemptions'] = 'Exemptions';
	resources['ffe.ee.myAccount.coverage.terminate.modal.title'] = 'Terminate coverage';
	resources['ffe.ee.myAccount.inconsistencies.apcsr5.detaildescription'] = '<p>There&#39;s a difference between what [FN] said on the application and what the Marketplace has verified with other records. You need to send the Marketplace one of the following documents for [FN] by [Date]. [FN] won&#39;t be eligible for a tax credit if documents aren&#39;t provided by [Date]. Send a document for each offer of employer coverage that [FN] qualifies for. Upload a copy of any of the following documents:</p><ul><li>A letter from an employer indicating that no plans offered to the employee meet the minimum value standard</li><li>A completed Employer Coverage Tool [link] and cover letter confirmation from employer </li><li>Other documentation from the employer that says that no plans offered to the employee meet the minimum value standard</li></ul>';
	resources['ffe.ee.myAccount.employerCoverage.description5'] = 'This list includes all of the changes made to this application.';
	resources['ffe.ee.myAccount.employerCoverage.description4'] = 'Employer Sponsored Benefits';
	resources['ffe.ee.myAccount.registration.emailUpdates'] = 'I want to have news and updates sent to this email address';
	resources['ffe.ee.myAccount.employerCoverage.description3'] = 'for lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	resources['ffe.ee.myAccount.employerCoverage.description2'] = 'eligibility results';
	resources['ffe.ee.myAccount.employerCoverage.description1'] = 'This is your most recent application which was used to determine your';
	resources['ffe.ee.myAccount.reportLifeChanges.heading2'] = 'What kinds of changes should be reported&#63;';
	resources['ffe.ee.myAccount.logIn.h1HiddenText'] = 'Marketplace Account Registration - Log In';
	resources['ffe.ee.myAccount.settings.fullName'] = 'Name';
	resources['ffe.ee.myAccount.registration.answerFour'] = 'Answer 4';
	resources['ffe.ee.myAccount.inconsistencies.in08.detaildescription'] = '<p>[FN] - You need to send the Marketplace proof that you are not enrolled in Tricare. Examples of documents you can send include:</p><ul><li>Letter from health insurer including coverage termination date</li><li>Statement of health benefits</li><li>Letter from Tricare</li></ul>';
	resources['ffe.ee.myAccount.coverage.income'] = 'Income';
	resources['ffe.ee.myAccount.enroll.toDoList.medicaid.info'] = 'Medicaid information for [FN]';
	resources['ffe.ee.myAccount.coverage.button.terminate'] = 'End (terminate) all coverage';
	resources['ffe.ee.myAccount.idProofing.upload.fileType'] = 'Document type';
	resources['ffe.ee.myAccount.accountSettings.employer.primaryMailing.description'] = 'Check here if the Primary Mailing Address is the same as Primary Business Addresss';
	resources['ffe.ee.myAccount.inconsistencies.medch37.detaildescription'] = '<p>Send the Marketplace proof of naturalized or derived citizenship, including your Naturalization Certificate or Certificate of Citizenship, by [date inconsistency period ends]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date]. <br/>[FN] can also update their immigration status with the U.S. Department of Homeland Security, U.S. Citizenship and Immigration Services (USCIS). For more information about how to correct your immigration status with the Department of Homeland Security, please contact USCIS by calling the National Customer Service Center at 1&#45;800&#45;375&#45;5283 or by visiting <a href="http://www.infopass.uscis.gov" target="_blank">www.infopass.uscis.gov</a>.</p>';
	resources['ffe.ee.myAccount.idProofing.upload.about'] = 'More information about submitting documents';
	resources['ffe.ee.myAccount.change'] = 'Change';
	resources['ffe.ee.myAccount.registration.emailConfirmation'] = 'Confirm email address';
	resources['ffe.ee.myAccount.registration.questionThree'] = 'Question 3';
	resources['ffe.ee.myAccount.security.questions'] = 'Security Questions';
	resources['ffe.ee.myAccount.agentBroker.noQuestions.pageTitle'] = 'No Assistor Questions';
	resources['ffe.ee.myAccount.inconsistencies.in01.description'] = 'Verify [FN]&#39;s citizenship';
	resources['ffe.ee.myAccount.agentBrokerQuestionsIncorrect.description'] = 'You didn’t answer the questions correctly. You will need to try again.';
	resources['ffe.ee.myAccount.home.fileAppeal'] = 'File an appeal';
	resources['ffe.ee.myAccount.security.question4'] = 'What is the name of your first pet?';
	resources['ffe.ee.myAccount.security.question3'] = 'In what city/town was your first job?';
	resources['ffe.ee.myAccount.security.question2'] = 'What street did you live on in third grade?';
	resources['ffe.ee.myAccount.security.question1'] = 'What is you mother&#39;s maiden name?';
	resources['ffe.ee.myAccount.reportLifeChanges.description'] = 'Changes in your household or your income may affect your health benefits&#46; It&#39;s important to update your account as soon as possible when changes happen&#46;';
	resources['ffe.ee.myAccount.eligibility.button.resume'] = 'Continue application';
	resources['ffe.ee.myAccount.employerCoverage.completeStatus'] = 'Status: Complete';
	resources['ffe.ee.myAccount.documents.coverageDocuments.proof'] = 'Proof of Tribal Membership';
	resources['ffe.ee.myAccount.profile.savedChanges'] = 'Your changes have been saved&#46;';
	resources['ffe.ee.myAccount.banner.enrollmentPeriodHasStarted'] = 'The 2014 Enrollment Period has started. You can now apply for the Federal Exchange.';
	resources['ffe.ee.myAccount.coverage.eligibleTaxDiscount'] = 'Eligible for $[TAXDISCOUNTAMOUNT] annually';
	resources['ffe.ee.myAccount.authorizations.button.remove'] = 'Remove';
	resources['ffe.ee.myAccount.inconsistencies.medch8.detaildescription'] = '<p>Send the Marketplace proof of naturalized or derived citizenship, including your Naturalization Certificate or Certificate of Citizenship, by [Date]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. </p>';
	resources['ffe.ee.myAccount.notifications.info'] = 'You can update your settings here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra dictum nisl vitae tincidunt.';
	resources['ffe.ee.myAccount.logIn.trouble'] = 'Having trouble logging in?';
	resources['ffe.ee.myAccount.profile.primaryEmail'] = 'Email address';
	resources['ffe.ee.myAccount.inconsistencies.medch9.shortdescription'] = 'Verify [FN]&#39; naturalized or derived citizenship';
	resources['ffe.ee.myAccount.accountSettings.employer.ein'] = 'EIN Number';
	resources['ffe.ee.myAccount.coverage.viewPlanDetails'] = 'View plan benefits';
	resources['ffe.ee.myAccount.coverage.members'] = 'Members&#58;';
	resources['ffe.ee.myAccount.inconsistencies.medch25.detaildescription'] = '<p>For [FN], send the Marketplace recent documents showing the yearly income of [FN1, FN2, and FN3, etc.] put for [coverage year] on the application.  Send this information to the Marketplace by [Date]. If no proof is sent, [FN] won&#39;t qualify for [state Medicaid program name]. Send a copy of the following document(s):</p><ul><li>Wages and tax statement (W&#45;2)</li><li>Pay stub</li><li>Letter from employer</li><li>Cost of living adjustment letter and other benefit verification notices</li><li>Lease agreement</li><li>Copy of a check paid to the household member</li><li>Bank or investment fund statement</li><li>Document or letter from Social Security Administration (SSA)</li><li>Form SSA 1099 Social Security benefits statement</li><li>Self&#45;employed ledger</li><li>Letter from government agency for unemployment benefits</li></ul>';
	resources['ffe.ee.myAccount.agentBrokerSearch.description'] = 'To find a client&#39;s Marketplace application, enter his or her information below. The easiest way to find an application is by entering the client&#39;s Marketplace application ID and application state.';
	resources['ffe.ee.myAccount.expiredPassword.heading'] = 'Your password has expired';
	resources['ffe.ee.myAccount.addEmployeeModal.addQuestion'] = 'How would you like to add new employees to the employee roster?';
	resources['ffe.ee.myAccount.enterBasicInfo'] = 'Enter some basic information';
	resources['ffe.ee.myAccount.reportLifeChanges.changes.heading'] = 'The changes you&#39;d like to make will require a change to your application and may require you to update other parts of your application&#46;';
	resources['ffe.ee.myAccount.profile.profileLevel1US.password'] = 'Password';
	resources['ffe.ee.myAccount.profile.profileLevel2US.suffix'] = 'Suffix';
	resources['ffe.ee.myAccount.initialStateCode'] = 'State';
	resources['ffe.ee.myAccount.forgotUsernameResults.clickLinkInEmail'] = 'You can click on the link in the email to log in.';
	resources['ffe.ee.myAccount.registration.accountNotCreated.systemUnavailable'] = 'The system is down at the moment. We&#39;re working to resolve the issue as soon as possible. Please try again later.';
	resources['ffe.ee.myAccount.accountSettings.employer.authorizationButton'] = 'Authorize';
	resources['ffe.ee.myAccount.accountSettings.employer.title'] = 'Title';
	resources['ffe.ee.myAccount.communicationPreferences.pagetitle'] = 'Communication Preferences';
	resources['ffe.ee.myAccount.idProofing.contact.heading2'] = 'Tell us about yourself. Use your complete name, as it appears on legal documents (like your Social Security card).';
	resources['ffe.ee.myAccount.link.viewApplication'] = 'View Application';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.coverage'] = 'Loss of coverage';
	resources['ffe.ee.myAccount.signUpSuccess.headingSuccess'] = 'Success';
	resources['ffe.ee.myAccount.coverage.documents.description'] = 'This is a record of the documents that you have submitted to Healthcare.gov to resolve an inconsistency or to provide proof for an authorization&#46;';
	resources['ffe.ee.myAccount.enroll.toDoList.getStarted'] = 'Get started';
	resources['ffe.ee.myAccount.inconsistencies.medch40.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.inconsistencies.medch5.description'] = 'Verify [FN]&#39; Social security number and related information';
	resources['ffe.ee.myAccount.coverage.status'] = 'Status';
	resources['ffe.ee.myAccount.createAccount'] = 'Create an account today';
	resources['ffe.ee.myAccount.inconsistencies.qe3.description'] = 'Validate [FN]&#39;s Social Security number (SSN)';
	resources['ffe.ee.myAccount.authorizations.description'] = 'You can give a trusted person permission to talk about this application with us, see your information, and act for you on matters related to this application, including getting information about your application and signing your application on your behalf. This person is called an “authorized user.” You can remove an authorized user at any time.';
	resources['ffe.ee.myAccount.reportLifeChanges.reportButton'] = 'Report a life change';
	resources['ffe.ee.myAccount.accountSettings.employer.label.secondaryPhone'] = 'Second phone number';
	resources['ffe.ee.myAccount.idProofing.questions.heading'] = 'Identity questions';
	resources['ffe.ee.myAccount.landingWelcome.hiddenText'] = 'Marketplace Account Registration - Welcome to your Marketplace account';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.employerSponsoredBenefitsHealth.button.viewPlanDetails'] = 'View Plan Details';
	resources['ffe.ee.myAccount.signUpButton'] = 'Create Account';
	resources['ffe.ee.myAccount.inconsistencies.in08.shortdescription'] = 'Sample Text';
	resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.line2'] = 'Address line 2';
	resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.line1'] = 'Address line 1';
	resources['ffe.ee.myAccount.stateLiveIn'] = 'State you live in';
	resources['ffe.ee.myAccount.coverage.menu.ApplicationsAndEligibility'] = 'Applications &amp; Eligibility';
	resources['ffe.ee.myAccount.inconsistencies.qe1.detaildescription'] = '<p>Send the Marketplace proof that [FN] isnt incarcerated (detained or jailed) by [Date]. [FN] won’t qualify to enroll in coverage through the Marketplace if documents aren’t provided by [Date]. Send a copy of the following document:</p><ul><li>Official release papers from institution</li></ul>';
	resources['ffe.ee.myAccount.idProofing.upload.addDocuments'] = 'If you have another document to upload, select &#34;Add another document&#46;&#34;';
	resources['ffe.ee.myAccount.readyToUpload.reminderText'] = 'The size limit for participating in SHOP is 50 employees.';
	resources['ffe.ee.myAccount.inconsistencies.apcsr5.shortdescription'] = 'Verify that [FN] has an offer of coverage from a job that doesn&#39;t meet minimum value standard';
	resources['ffe.ee.myAccount.showRadio'] = 'Show';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.birth'] = 'Birth or adoption';
	resources['ffe.ee.myAccount.profile.securityQuestions.pleaseUpdateText'] = 'Please update answers to your security questions';
	resources['ffe.ee.myAccount.inconsistencies.in09.detaildescription'] = '<p>[FN] - You need to send the Marketplace proof that you are not enrolled in Medicare. Examples of documents you can send include:</p><ul><li>Letter from health insurer including coverage termination date</li><li>Statement of health benefits</li><li>Letter from Medicare</li></ul>';
	resources['ffe.ee.myAccount.profile.marketplaceCouldNotProcessRequest'] = 'The Marketplace could not process your request&#46;';
	resources['ffe.ee.myAccount.inconsistencies.apcsr2.shortdescription'] = 'Verify that [FN] is not enrolled  in [MECType]';
	resources['ffe.ee.myAccount.enroll.toDoList.noEnrollment'] = 'You&#39;re not enrolled yet.';
	resources['ffe.ee.myAccount.home.savedPlans'] = 'Saved plans';
	resources['ffe.ee.myAccount.accountSettings.employer.label.jobTitle'] = 'Job Title';
	resources['ffe.ee.myAccount.eligiblityResults.pagetitle'] = 'Eligibility & Appeals';
	resources['ffe.ee.myAccount.home.eligibilityResults.ready.heading'] = 'Eligibility results ready';
	resources['ffe.ee.myAccount.inconsistencies.medch38.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date].</p>';
	resources['ffe.ee.myAccount.security.question1.select'] = 'Select your first security question';
	resources['ffe.ee.myAccount.registration.accountAlreadyExists.pageTitle'] = 'Sign Up - Account Creation Unsuccessful';
	resources['ffe.ee.myAccount.authRepSignature'] = 'Signature';
	resources['ffe.ee.myAccount.accountSettings.employer.primaryMailing'] = 'Primary Mailing Address';
	resources['ffe.ee.myAccount.inconsistencies.medch51.detaildescription'] = '<p>Send the Marketplace proof that [FN] is a citizen by [date= end of clock]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date].  Send a copy of a document proving [FN] is a citizen. Examples of documents proving citizenship can include:</p><ul><li>U.S. passport</li><li>U.S. public birth record</li><li>Certification of Report of Birth</li><li>Consular Report of Birth Abroad</li><li>Certification of Birth Abroad</li><li>U.S. Citizen Identification Card</li><li>American Indian Card (I&#45;872)</li><li>Certificate of Naturalization</li><li>Certificate of Citizenship</li></ul>';
	resources['ffe.ee.myAccount.eligibility.applicationIncompleteBefore'] = 'Your application is incomplete. It must be submitted before';
	resources['ffe.ee.myAccount.inconsistencies.apcsr10.description'] = 'Verify [FN] is voluntarily disenrolling from health coverage through a job';
	resources['ffe.ee.myAccount.inconsistencies.medch19.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.tab.docComplete'] = 'Documents Completed';
	resources['ffe.ee.myAccount.label.wednesday'] = 'Wednesday';
	resources['ffe.ee.myAccount.terminate.memberNames.modal'] = 'for [FN], [FN], and [FN].';
	resources['ffe.ee.myAccount.inconsistencies.qe11.detaildescription'] = '<p>The immigration status provided on the application for [FN] is expired or will expire in the next 30 days. If [FN]&#39;s immigration status has been extended, [FN] needs to give the Marketplace proof that [FN] has an eligible immigration status by [date status expires]. [FN] needs to send the Marketplace a copy of the immigration document or proof of the immigration status [FN] provided on the application.<br/>[FN] wont qualify to enroll in coverage through the Marketplace if documents arent provided by [Date].<br/>[FN] can also update their immigration status with the U.S. Department of Homeland Security, U.S. Citizenship and Immigration Services (USCIS). For more information about how to correct your immigration status with the Department of Homeland Security, contact USCIS by calling the National Customer Service Center at 1-800-375-5283 or go online at www.infopass.uscis.gov.</p>';
	resources['ffe.ee.myAccount.terminate.step2.description1'] = 'Once you select "Terminate coverage" below, the coverage will end effective [effective date]. This change is final. You may not be able to get new coverage through the Marketplace until the next Open Enrollment Period starting [next enrollment date].  Make sure that you want to cancel coverage.';
	resources['ffe.ee.myAccount.inconsistencies.medch9.detaildescription'] = '<p>Send the Marketplace proof of naturalized or derived citizenship, including your Naturalization Certificate or Certificate of Citizenship, by [date inconsistency period ends]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. <br/>[FN] can also update their immigration status with the U.S. Department of Homeland Security, U.S. Citizenship and Immigration Services (USCIS). For more information about how to correct your immigration status with the Department of Homeland Security, please contact USCIS by calling the National Customer Service Center at 1&#45;800&#45;375&#45;5283 or by visiting <a href="http://www.infopass.uscis.gov" target="_blank">www.infopass.uscis.gov</a>.</p>';
	resources['ffe.ee.myAccount.link.continueApplication'] = 'CONTINUE APPLICATION';
	resources['ffe.ee.myAccount.coverage.discount.eligible'] = 'Eligible for&#58;';
	resources['ffe.ee.myAccount.inconsistencies.in20.description'] = 'Verify [FN]&#39;s residency';
	resources['ffe.ee.myAccount.applicationDetails.inconsistency.heading'] = 'Resolve inconsistencies';
	resources['ffe.ee.myAccount.idProofing.verified.pageTitle'] = 'Identity verified';
	resources['ffe.ee.myAccount.addEmployeeModal.selectRoster.previous'] = 'Previously Uploaded Roster';
	resources['ffe.ee.myAccount.title.totalCost'] = 'Total Cost';
	resources['ffe.ee.myAccount.reportLifeChanges.updatesMessage'] = '<strong>Last changes were made [date].</strong><br/> You made some updates to your application&#44; but they haven&#39;t been submitted. You can <a href="javascript:void(0)" class="openReportsModal continueChanges">continue making changes</a> and submit them when you are finished&#46;';
	resources['ffe.ee.myAccount.agentBrokerQuestions.header'] = 'Look up the client&#39;s application';
	resources['ffe.ee.myAccount.agentBrokerQuestions.motherMaidenName'] = 'What is your mother&#39;s maiden name?';
	resources['ffe.ee.myAccount.addEmployee.DOB'] = 'Date of Birth';
	resources['ffe.ee.myAccount.label.firstName'] = 'First name';
	resources['ffe.ee.myAccount.profile.profileLevel1US.newEmailAddress'] = 'Enter your new email address';
	resources['ffe.ee.myAccount.EmployeeHomePage.employeePostAppCompUS.accountSettings'] = 'Account Settings';
	resources['ffe.ee.myAccount.inconsistencies.in10.detaildescription'] = '<p>[FN] - You need to send the Marketplace proof that you are not enrolled in Medicaid or the Childrens Health Insurance Program (CHIP). Examples of documents you can send include:</p><ul><li>Letter from health insurer including coverage termination date</li><li>Statement of health benefits</li><li>Letter from Medicaid or CHIP</li></ul>';
	resources['ffe.ee.myAccount.coverage.eligibleIndividuals'] = 'Eligible Individuals';
	resources['ffe.ee.myAccount.enroll.toDoList.submitPayment'] = 'Submit payment to [health insurance provider name]';
	resources['ffe.ee.myAccount.nav.coverage'] = 'My coverage';
	resources['ffe.ee.myAccount.profile.password'] = 'Password';
	resources['ffe.ee.myAccount.label.primaryEmail'] = 'Primary Email';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.tribe'] = 'Membership of a federally recognized tribe';
	resources['ffe.ee.myAccount.inLineLastName'] = 'Last name';
	resources['ffe.ee.myAccount.inconsistencies.in11.description'] = 'Verify that [FN] is not enrolled in health coverage through the Veterans Administration (VA)';
	resources['ffe.ee.myAccount.messages.nav.inbox'] = 'Inbox';
	resources['ffe.ee.myAccount.profile.profileLevel1US.title'] = 'My Profile';
	resources['ffe.ee.myAccount.profile.subscribeText2'] = 'Update subscription';
	resources['ffe.ee.myAccount.profile.subscribeText1'] = 'Subscribed to news & updates';
	resources['ffe.ee.myAccount.notifications.success.detail'] = 'Success: Your changes have been saved.';
	resources['ffe.ee.myAccount.notifications.general.success'] = 'Success&#33;';
	resources['ffe.ee.myAccount.coverage.heading.status'] = 'Status&#58;';
	resources['ffe.ee.myAccount.link.application'] = '<span class="appYear">0</span> application for';
	resources['ffe.ee.myAccount.home.eligibilityPending.description2'] = 'When your results are ready, you&#39;ll get an email at .';
	resources['ffe.ee.myAccount.home.eligibilityPending.description1'] = 'Your application is currently being processed.';
	resources['ffe.ee.myAccount.inconsistencies.medch14.detaildescription'] = '<p>Provide more information on the application so the Marketplace can determine whether [FN] is eligible for [state Medicaid program name].  [FN] won&#39;t qualify for [state Medicaid program name] if information about their immigration status isn&#39;t provided by [Date]. Call 1&#45;800&#45;318&#45;2596 (TTY: 1&#45;855&#45;889&#45;4325) to get help answering questions on the application about your immigration status.</p>';
	resources['ffe.ee.myAccount.authorizations.learnMore'] = 'Learn more about authorized users.';
	resources['ffe.ee.myAccount.idProofing.ccrQuestions.description'] = 'Add description text here.';
	resources['ffe.ee.myAccount.inconsistencies.in18.shortdescription'] = 'Verify [FN]&#39;s incarceration status';
	resources['ffe.ee.myAccount.bulletinBoard.notice.DataSourcesDown'] = 'You have a <a href="#">notice available</a> explaining that certain systems are unavailable.';
	resources['ffe.ee.myAccount.idProofing.results.continue2'] = 'click here to continue to your application.';
	resources['ffe.ee.myAccount.idProofing.results.continue1'] = 'If you aren&#39;t able to call now, ';
	resources['ffe.ee.myAccount.home.noSavedPlans.description1'] = 'Get started by';
	resources['ffe.ee.myAccount.inconsistencies.in15.shortdescription'] = 'Verify information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.inconsistencies.medch39.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.inconsistencies.in02.description'] = 'Validate [FN]&#39;s Social Security number (SSN)';
	resources['ffe.ee.myAccount.eligibility.eligibleIndividuals'] = 'Eligible Individuals';
	resources['ffe.ee.myAccount.coverage.noPlans.description'] = 'There are currently no plans or programs selected for this application.';
	resources['ffe.ee.myAccount.inconsistencies.medch36.shortdescription'] = 'Verify [FN]&#39; naturalized or derived citizenship';
	resources['ffe.ee.myAccount.state,confirmState'] = 'Please confirm your home state';
	resources['ffe.ee.myAccount.profile.success'] = 'Success&#33;';
	resources['ffe.ee.myAccount.profile.profileLevel1US.securityQuestion'] = 'Security questions';
	resources['ffe.ee.myAccount.applicationDetails.button.verify'] = 'Verify';
	resources['ffe.ee.myAccount.profile.profileLevel1US.primaryPhone.newPhoneNumber'] = 'Please enter your new phone number';
	resources['ffe.ee.myAccount.employeeSSN'] = 'SSN';
	resources['ffe.ee.myAccount.profile.profileLevel1US.emailSubscription'] = 'Email subscriptions';
	resources['ffe.ee.myAccount.forgotPassword.notFound.alertHeading'] = 'Your password couldn&#39;t be found, because there is no Marketplace account that matches the information you provided.';
	resources['ffe.ee.myAccount.EmployeeHomePage.employeePostAppCompUS.accountSettings.description'] = 'Contact Info, Password, Security Settings, Authorized, Users, Notifications, etc.';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.job'] = 'Change in job';
	resources['ffe.ee.myAccount.label.optional'] = 'optional';
	resources['ffe.ee.myAccount.registration.verification.success.pageTitle'] = 'Sign Up - Email Verification - Successful';
	resources['ffe.ee.myAccount.verificationNotice.description2'] = 'You will need to re-register your account and verify your email in order to sign into HealthCare.gov.';
	resources['ffe.ee.myAccount.verificationNotice.description1'] = ', the email verification notice has expired.';
	resources['ffe.ee.myAccount.profile.profileLevel1US.primaryPhone'] = 'Phone number';
	resources['ffe.ee.myAccount.firstName'] = 'First Name';
	resources['ffe.ee.myAccount.inconsistencies.qe11.shortdescription'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.bulletinBoard.notice.Outbound'] = 'You have a <a href="#">notice available</a> about Medicaid/CHIP eligibility.';
	resources['ffe.ee.myAccount.documents.coverageDocuments.viewButton'] = 'View';
	resources['ffe.ee.myAccount.reportLifeChanges.updatesMessage3'] = 'and keep your existing application&#46;';
	resources['ffe.ee.myAccount.reportLifeChanges.updatesMessage2'] = 'or';
	resources['ffe.ee.myAccount.reportLifeChanges.updatesMessage1'] = 'You made some updates to your application&#44; but they haven&#39;t been submitted. You can';
	resources['ffe.ee.myAccount.home.postAppCompletion.twoHundred'] = '$200';
	resources['ffe.ee.myAccount.EmployeeHomePage.employeePostAppCompUS.heading3'] = 'Employer pays:';
	resources['ffe.ee.myAccount.EmployeeHomePage.employeePostAppCompUS.heading2'] = 'Plans &amp; Employer Sponsored Benefits';
	resources['ffe.ee.myAccount.EmployeeHomePage.employeePostAppCompUS.heading1'] = 'COVERAGE &amp; BENEFITS';
	resources['ffe.ee.myAccount.coverage.history'] = 'History';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.unemployment'] = 'Recent unemployment';
	resources['ffe.ee.myAccount.profile.securityModal.phoneDescriptionText'] = 'To update your phone number, please answer these questions.';
	resources['ffe.ee.myAccount.home.postAppCompletion.using'] = 'Using:';
	resources['ffe.ee.myAccount.Notifications.emailSent'] = 'No email notifications sent';
	resources['ffe.ee.myAccount.registration.step3.hiddenText'] = 'Marketplace Account Registration - Sign Up - Step 3';
	resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.city'] = 'City';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.select'] = 'Select';
	resources['ffe.ee.myAccount.inconsistencies.qe12.detaildescription'] = '<p>Send the Marketplace proof of [FN]&#39;s immigration status by [Date]. [FN] wont qualify to enroll in coverage through the Marketplace if documents arent provided by [Date].  [FN] should update their student status with the school, or ask the school to update the status in the Student and Exchange Visitor Information System (SEVIS). Or you can upload a copy of the following document:</p><ul><li>Letter from school that proves [FN] is maintaining legal status</li></ul><p>For more information about maintaining your status, see <a href="http://studyinthestates.dhs.gov/students/maintain-your-status" target="_blank">http://studyinthestates.dhs.gov/students/maintain-your-status</a>.  For more information about how to update immigration status with DHS, contact U.S. Citizenship and Immigration Services by calling the National Customer Service Center at 1-800-375-5283.</p>';
	resources['ffe.ee.myAccount.label.email'] = 'Email';
	resources['ffe.ee.myAccount.idProofing.results.returnProfile'] = 'click here to return to My Profile.';
	resources['ffe.ee.myAccount.profile.profileLevel2US.updateName'] = 'To update your name please call 1-888-xxx-xxxx';
	resources['ffe.ee.myAccount.terminate.hidden.modal'] = 'you are in step modal';
	resources['ffe.ee.myAccount.forgotUsernameResults.usernameFound'] = 'Your username was found!';
	resources['ffe.ee.myAccount.registration.SecurityQuestions.pageTitle'] = 'Forgot Password - Security Questions';
	resources['ffe.ee.myAccount.home.devTool.postAppCompletion'] = 'Post App Completion';
	resources['ffe.ee.myAccount.password'] = 'Password';
	resources['ffe.ee.myAccount.bulletinBoard.notice.Eligibility'] = 'You have a <a href="#">notice available</a> about your Marketplace eligibility.';
	resources['ffe.ee.myAccount.settings.mailingAddress'] = 'Mailing Address';
	resources['ffe.ee.myAccount.profile.securityModal.title.updateAddress'] = 'Address update';
	resources['ffe.ee.myAccount.profile.label.confirmPassword'] = 'Confirm your new password';
	resources['ffe.ee.myAccount.registration.chooseUsername'] = 'The username is case sensitive. Choose a username that is 6&#45;74 characters long and must contain a lowercase or capital letter, a number, or one of these symbols &#95;&#46;&#64;&#47;&#45;';
	resources['ffe.ee.myAccount.coverage.menu.communicationPreferences'] = 'Communication preferences';
	resources['ffe.ee.myAccount.inconsistencies.in11.detaildescription'] = '<p>[FN] - You need to send the Marketplace proof that you are not enrolled in health coverage through the Veterans Administration (VA). Examples of documents you can send include:</p><ul><li>Letter from health insurer including coverage termination date</li><li>Statement of health benefits</li><li>Letter from VA</li></ul>';
	resources['ffe.ee.myAccount.idProofing.ccrQuestions.pageTitle'] = 'Verify your identity';
	resources['ffe.ee.myAccount.profile.label.currentPassword'] = 'Enter your current password';
	resources['ffe.ee.myAccount.resetPassword.password.instructions'] = 'Your password must contain 8&#45;20 characters&#46; There must be at least 1 upper case letter&#44; 1 lower case letter&#44; and 1 number&#46; It must be different from your last 6 passwords&#46; It can&#39;t contain your username or any of these characters &#61; &#63;&#60;&#62; &#40; &#41; &#8216; &#34; &#47; &#92; &#38;';
	resources['ffe.ee.myAccount.forgotPassword.provideDetails.lastName'] = 'Last name';
	resources['ffe.ee.myAccount.inconsistencies.medch40.detaildescription'] = '<p>Provide more information on the application so the Marketplace can determine whether [FN] is eligible for [state CHIP program name].  [FN] won&#39;t qualify for [state CHIP program name] if information about their immigration status isn&#39;t provided by [Date]. Call 1&#45;800&#45;318&#45;2596 (TTY: 1&#45;855&#45;889&#45;4325) to get help answering questions on the application about your immigration status.</p>';
	resources['ffe.ee.myAccount.inconsistencies.qe4.description'] = 'Verify [FN]&#39;s citizenship';
	resources['ffe.ee.myAccount.applicationDetails.eligibility.heading'] = 'Qualified Health Plan eligibility';
	resources['ffe.ee.myAccount.home.myApplication'] = 'MY APPLICATION';
	resources['ffe.ee.myAccount.removePersonModal.requireChange'] = 'This action will require a change to your application and may require updates to other aspects of your application.';
	resources['ffe.ee.myAccount.startApplication.pageTitle'] = 'Start Application';
	resources['ffe.ee.myAccount.inconsistencies.apcsr16.shortdescription'] = 'Verify information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.zipCode.supportText'] = 'XXXXX-XXXX';
	resources['ffe.ee.myAccount.profile.LOALandingPage.continueEmployeeCoverageLink'] = 'Continue the application for healthcare coverage for my employees';
	resources['ffe.ee.myAccount.expiredPassword.confirmPassword.instructions'] = 'You must enter the same password as the Password field&#46;';
	resources['ffe.ee.myAccount.inconsistencies.medch46.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.application.status.notEligible'] = 'Not Eligible';
	resources['ffe.ee.myAccount.inconsistencies.apcsr13.shortdescription'] = 'Verify [FN] will no longer be offered health coverage through a job that is affordable or meets the minimum value standard';
	resources['ffe.ee.myAccount.home.attention'] = 'Attention';
	resources['ffe.ee.myAccount.inconsistencies.apcsr10.shortdescription'] = 'Verify [FN] is voluntarily disenrolling from health coverage through a job';
	resources['ffe.ee.myAccount.forgotPassword.success.alertDescription2'] = 'We have sent you an email to <%=email%> with a confirmation of your request to update your password.';
	resources['ffe.ee.myAccount.forgotPassword.success.alertDescription1'] = 'Your password was reset.';
	resources['ffe.ee.myAccount.inconsistencies.apcsr10.detaildescription'] = '<p>[FN] reported they plan to drop health coverage through a job. [FN] may be eligible for a tax credit and cost&#45;sharing reductions (lower copayments, coinsurance and deductibles) if they send the Marketplace one of the following documents to confirm that they are no longer enrolled in employer coverage by [Date]. Send a copy of one of the following documents by [Date]:</p><ul><li>A letter from [FN]&#39;s plan that says they are no longer enrolled in employer coverage</li><li>Other documentation from [FN]&#39;s plan that says they are no longer enrolled in employer coverage</li></ul>';
	resources['ffe.ee.myAccount.idProofing.contactInfo'] = 'Contact information';
	resources['ffe.ee.myAccount.label.no'] = 'No';
	resources['ffe.ee.myAccount.employeeLastName'] = 'Last name';
	resources['ffe.ee.myAccount.tab.docPending'] = 'Documents Pending';
	resources['ffe.ee.myAccount.initialPassword'] = 'Password';
	resources['ffe.ee.myAccount.forgotUsernameResults.recievedInError'] = 'If you think you got this message in error, call 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.documents.coverageDocuments.smallText'] = 'Submitted by John Smith on January 4, 2014';
	resources['ffe.ee.myAccount.inconsistencies.qe5.shortdescription'] = 'Verify [FN]&#39;s status as a naturalized citizen';
	resources['ffe.ee.myAccount.agentBroker.removeModal.description3'] = '<p>Remove authority to:</p><ul><li>Act on your behalf on all matters related to your account and application</li></ul>';
	resources['ffe.ee.myAccount.agentBroker.removeModal.description2'] = 'Your agent/broker:';
	resources['ffe.ee.myAccount.agentBroker.removeModal.description1'] = 'Do you want to remove this person as your agent/broker?';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.exemptions'] = 'Change exemptions';
	resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.state'] = 'State';
	resources['ffe.ee.myAccount.inconsistencies.qe2.shortdescription'] = 'Verify [FN]&#39;s Social security number and related information';
	resources['ffe.ee.myAccount.inconsistencies.medch37.description'] = 'Verify [FN]&#39; naturalized or derived citizenship';
	resources['ffe.ee.myAccount.registration.createPassword'] = 'Create a password';
	resources['ffe.ee.myAccount.profile.homeAddress.noneRecordAddress'] = 'None provided';
	resources['ffe.ee.myAccount.inconsistencies.medch46.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.inconsistencies.apcsr11.description'] = 'Verify [FN] is losing coverage through a job';
	resources['ffe.ee.myAccount.employerHomePage.employerPostAppCompletionUS.heading5.description2'] = 'Contact Info, Security Settings, Authorized, Users, Notifications, etc';
	resources['ffe.ee.myAccount.idProofing.hidden.progress'] = 'Progress';
	resources['ffe.ee.myAccount.registration.accountNotCreated.note'] = 'Please note that one of the errors below may have occurred&#58;';
	resources['ffe.ee.myAccount.confirmEmailLink'] = 'Please click on the link there to confirm your email';
	resources['ffe.ee.myAccount.inconsistencies.in21.description'] = 'Eligibility for tax credits and lower out-of-pocket costs';
	resources['ffe.ee.myAccount.profile.primaryPhone'] = 'Phone number';
	resources['ffe.ee.myAccount.forgotUsernameResults.findUsername'] = 'Find username';
	resources['ffe.ee.myAccount.registration.forgotUsernameResults.usernameEmail.pageTitle'] = 'Forgot Username - Email Sent';
	resources['ffe.ee.myAccount.inconsistencies.medch15.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.label.memberSince'] = 'Member Since';
	resources['ffe.ee.myAccount.login.noScriptMessage'] = 'JavaScript must be enabled in your browser in order to use some E&E functions.';
	resources['ffe.ee.myAccount.expiredPassword.description'] = 'Enter your current password, and then provide a new password.';
	resources['ffe.ee.myAccount.notValidError'] = 'Important: This is not a valid';
	resources['ffe.ee.myAccount.inconsistencies.apcsr8.shortdescription'] = 'Verify [FN] has an offer of coverage from a job that is unaffordable';
	resources['ffe.ee.myAccount.inconsistencies.qe13.detaildescription'] = '<p>You need to send the Marketplace proof of [FN]&#39;s American Indian or Alaska Native status by [Date]. [FN] will not qualify for no cost-sharing if documents aren’t provided by [Date]. Upload a copy of one of the following documents:</p><ul><li>Tribal Card</li><li>Authentic document from a tribe declaring membership for an individual</li></ul>';
	resources['ffe.ee.myAccount.agentBrokerClient.header'] = 'Look up the client&#39;s application';
	resources['ffe.ee.myAccount.label.mailingAddress'] = 'Mailing Address';
	resources['ffe.ee.myAccount.inconsistencies.apcsr6.detaildescription'] = '<p>There&#39;s a difference between what [FN] said on the application and what the Marketplace has verified with other records. You need to send the Marketplace one of the following documents for [FN] by [Date]. [FN] won&#39;t be eligible for a tax credit if documents are not provided by [Date]. Upload a copy of one of the following documents for each employer that offers coverage to [FN]:</p><ul><li>A completed Employer Coverage Tool [link] with new employer coverage information and a cover letter signed by the employer. </li><li>A letter from the employer about the employer&#39;s coverage. The letter must include information about the about whether the employer offers a plan that meets the minimum value standard and the cost of the employee&#39;s share for the coverage (the "premium"). Provide this information about the lowest cost individual plan offered by the employer. If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didn&#39;t receive any other discounts based on wellness programs. </li><li>Other documentation from the employer with the new premium amount (and how often the employee would pay the amount). If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didn&#39;t receive any other discounts based on wellness programs.  </li></ul>';
	resources['ffe.ee.myAccount.home.eligibilityResults.sectionHeading'] = 'View eligibility results';
	resources['ffe.ee.myAccount.reportLifeChanges.updatesContinue'] = 'continue making changes';
	resources['ffe.ee.myAccount.coverage.discount.using'] = 'Using&#58;';
	resources['ffe.ee.myAccount.forgotUsernameResults.forgotUsername'] = 'Forgot username?';
	resources['ffe.ee.myAccount.employer.terminateCoverageModal.withdrawDescription2'] = 'Withdrawing from the SHOP will terminate the enrollment for all your employees.';
	resources['ffe.ee.myAccount.employer.terminateCoverageModal.withdrawDescription1'] = 'You have chosen to withdraw from SHOP:';
	resources['ffe.ee.myAccount.logInTerms.decline'] = 'Decline';
	resources['ffe.ee.myAccount.terminate.chose'] = 'You have chosen to end the following coverage&#58;';
	resources['ffe.ee.myAccount.inconsistencies.in12.description'] = 'Verify that [FN] is not enrolled in Peace Corps coverage';
	resources['ffe.ee.myAccount.coverage.endDate'] = 'End date&#58;';
	resources['ffe.ee.myAccount.profile.LOALandingPage.viewCurrentCCRHeading'] = 'View';
	resources['ffe.ee.myAccount.heading.basicInfo'] = 'Basic Information';
	resources['ffe.ee.myAccount.documents.pagetitle'] = 'Documents';
	resources['ffe.ee.myAccount.home.eligibilityResults.buttonViewResults'] = 'VIEW RESULTS';
	resources['ffe.ee.myAccount.reportLifeChanges.discardCancelButton'] = 'Do not discard';
	resources['ffe.ee.myAccount.registration.ForgotPassword.PasswordReset.Unsuccessful.pageTitle'] = 'Forgot Password - Security Questions - Unsuccessful';
	resources['ffe.ee.myAccount.profile.profileLevel1US.changeName2'] = 'report a life change.';
	resources['ffe.ee.myAccount.profile.profileLevel1US.changeName1'] = 'To change your name you must';
	resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.zipCode'] = 'ZIP Code';
	resources['ffe.ee.myAccount.logInTerms.description7'] = 'To continue, you must accept the terms and conditions. If you decline, your login will automatically be cancelled.';
	resources['ffe.ee.myAccount.logInTerms.description6'] = 'Any communication or data transiting or stored on this information system may be disclosed or used for any lawful Government purpose.';
	resources['ffe.ee.myAccount.logInTerms.description5'] = 'At any time, and for any lawful Government purpose, the government may monitor, intercept, and search and seize any communication or data transiting or stored on this information system.';
	resources['ffe.ee.myAccount.logInTerms.description4'] = 'You have no reasonable expectation of privacy regarding any communication or data transiting or stored on this information system.';
	resources['ffe.ee.myAccount.logInTerms.description3'] = 'To continue, you must accept the terms and conditions. If you decline, your login will automatically be cancelled.';
	resources['ffe.ee.myAccount.logInTerms.description2'] = 'remains accurate and available to you and all other visitors, we monitor network traffic to identify unauthorized attempts to upload or change information or otherwise cause damage to the web service. Use of this system constitutes consent to such monitoring and auditing. Unauthorized attempts to upload information and/or change information on this web site are strictly prohibited and are subject to prosecution under the Computer Fraud and Abuse Act of 1986 and Title 18 U.S.C. Sec.1001 and 1030.';
	resources['ffe.ee.myAccount.logInTerms.description1'] = 'So that';
	resources['ffe.ee.myAccount.idProofing.results.wait2'] = 'This process could take one to three business days';
	resources['ffe.ee.myAccount.home.plansAndPrograms'] = 'My plans & programs';
	resources['ffe.ee.myAccount.forgotUsernameResults.profileNotFound.pageTitle'] = 'Forgot Username - Profile Not Found';
	resources['ffe.ee.myAccount.inconsistencies.apcsr4.description'] = 'Verify [FN] doesn&#39;t have an offer of coverage from a job';
	resources['ffe.ee.myAccount.label.confirmPassword'] = 'Confirm Password';
	resources['ffe.ee.myAccount.authorizations.modalHeading.h3'] = 'Do you want to remove this person as your authorized representative?';
	resources['ffe.ee.myAccount.inconsistencies.in03.description'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.accountSettings.employer.authorization.description'] = 'Not authorized as Secondary Account Holder';
	resources['ffe.ee.myAccount.agentBroker.removeModal.emailDescription'] = '[Agent/Broker First Name and Last Name] will get an email confirming that he/she is no longer your authorized representative.';
	resources['ffe.ee.myAccount.coverage.updated'] = 'Updated&#58;';
	resources['ffe.ee.myAccount.agentBrokerSearch.lable.applicationID'] = 'Client&#39;s Marketplace application ID';
	resources['ffe.ee.myAccount.idProofing.upload.error'] = 'Important&#58;';
	resources['ffe.ee.myAccount.application.status.cancelled'] = 'Cancelled';
	resources['ffe.ee.myAccount.profile.profileLevel1US.primaryPhone.supportText'] = 'Note about usage.';
	resources['ffe.ee.myAccount.coverage.user'] = 'User';
	resources['ffe.ee.myAccount.forgotPassword.profileNotFound.pageTitle'] = 'Forgot Password - Profile Not Found';
	resources['ffe.ee.myAccount.label.preferredPhone'] = 'Preferred';
	resources['ffe.ee.myAccount.notifications.notices.success'] = 'Success&#33;';
	resources['ffe.ee.myAccount.accountSettings.employer.label.ein'] = 'EIN';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.topTasksHeading1.description1'] = 'Add new employee, update employee information, remove employee';
	resources['ffe.ee.myAccount.settings.label.password'] = 'Password';
	resources['ffe.ee.myAccount.inconsistencies.medch10.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.accountSettings.nav.notifications'] = 'Notifications';
	resources['ffe.ee.myAccount.agentBroker.questions.pageTitle'] = 'Look up the clients application';
	resources['ffe.ee.myAccount.tab.roster'] = 'Employee Roster';
	resources['ffe.ee.myAccount.forgotPassword.notFound.h1HiddenText'] = 'Marketplace Account Registration - Log In - Forgot Password - Account Not Found';
	resources['ffe.ee.myAccount.coverage.heading.statusMessage'] = '<span class="statusTxt">Status&#58; </span><span> [STATUS] to [PROGRAM_TITLE]&#39;s [PROGRAM_NAME] Program</span>';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.employerPays'] = 'Employer pays:';
	resources['ffe.ee.myAccount.accountSettings.nav'] = 'Account Settings';
	resources['ffe.ee.myAccount.terminate.date.modal'] = 'The coverage will end on [END DATE].';
	resources['ffe.ee.myAccount.notifications.writtenLanguage.spanish'] = 'Spanish';
	resources['ffe.ee.myAccount.inconsistencies.medch50.shortdescription'] = 'Verify [FN]&#39; citizenship status';
	resources['ffe.ee.myAccount.addEmployeeModal.addManually'] = 'Manually add them';
	resources['ffe.ee.myAccount.idProofing.contact.heading'] = 'Contact information';
	resources['ffe.ee.myAccount.profile.LOALandingPage.heading'] = '[FN], what would you like to do?';
	resources['ffe.ee.myAccount.home.notifications.inconsistencyNotification.description2'] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	resources['ffe.ee.myAccount.home.eligibilityPending.sectionHeading'] = 'Eligibility results pending';
	resources['ffe.ee.myAccount.application'] = 'Application';
	resources['ffe.ee.myAccount.coverage.terminate.description'] = 'You can withdraw from coverage associated with this application. Doing so would end your coverage from all of the plans and programs listed below.';
	resources['ffe.ee.myAccount.registration.haveProfile'] = 'Already have an account&#63;';
	resources['ffe.ee.myAccount.registration.listViewPlansAndSave'] = 'View plans on the Marketplace, and save favorites';
	resources['ffe.ee.myAccount.settings.toChangeName'] = 'To change your name you must';
	resources['ffe.ee.myAccount.inconsistencies.medch22.shortdescription'] = 'Verify [FN]&#39; current income';
	resources['ffe.ee.myAccount.eligibilityResults.memberName'] = 'For [FN], [FN] and [FN]';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.employment'] = 'Change employers, type of  work, or hours';
	resources['ffe.ee.myAccount.link.application.id'] = 'ID#:';
	resources['ffe.ee.myAccount.inconsistencies.qe2.detaildescription'] = '<p>Theres a difference between what [FN] entered on the application and what the Marketplace has verified with other government records. Send one of the documents below by [Date]. [FN] wont qualify to enroll in coverage through the Marketplace if documents arent provided by [Date]. Upload a copy of one of the following documents:</p><ul><li>Drivers license</li><li>State ID</li><li>U.S. passport</li><li>If [FN] isnt a U.S. citizen, they can provide current immigration documents from the Department of Homeland Security (DHS)</li></ul>';
	resources['ffe.ee.myAccount.inconsistencies.apcsr7.detaildescription'] = '<p>There&#39;s a difference between what [FN] said on the application and what the Marketplace has verified with other records. You need to send the Marketplace one of the following documents for [FN] by [Date].  [FN] won&#39;t be eligible for a tax credit and cost&#45;sharing reductions (lower copayments, coinsurance and deductibles) if documents are not provided by [Date]. Upload a copy of one of the following documents for each employer that offers coverage to [FN]:</p><ul><li>A letter from an employer that says the employee isn&#39;t eligible for health coverage</li><li>A completed Employer Coverage Tool [link] with a cover letter signed by the employer </li><li>Other documentation from the employer that says the employee isn&#39;t eligible for health coverage</li></ul>';
	resources['ffe.ee.myAccount.logIn.alert.warningText4'] = 'If you have a Marketplace account and forgot your username or password, click on the links below.';
	resources['ffe.ee.myAccount.logIn.alert.warningText1'] = 'You attempted to sign in too many times.';
	resources['ffe.ee.myAccount.accountSettings.description'] = 'You can make changes to the way you get Marketplace information. The information on this screen was taken from your application.';
	resources['ffe.ee.myAccount.home.demoTool.h3'] = 'Home page Dev Tool';
	resources['ffe.ee.myAccount.agentBrokerNoAssisterQuestions.description'] = 'Ask your client to complete the assistor questions in his or her Marketplace application.';
	resources['ffe.ee.myAccount.inconsistencies.qe5.description'] = 'Verify [FN]&#39;s status as a naturalized citizen';
	resources['ffe.ee.myAccount.inconsistencies.medch39.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date].<br/>[FN] can also update their immigration status with the U.S. Department of Homeland Security, U.S. Citizenship and Immigration Services (USCIS). For more information about how to update immigration status with the Department of Homeland Security, contact USCIS by calling the National Customer Service Center at 1&#45;800&#45;375&#45;5283.</p>';
	resources['ffe.ee.myAccount.coverage.heading.problem.description'] = '&#45; This plan has a problem&#46; TBD&#46;';
	resources['ffe.ee.myAccount.registration.step1.pageTitle'] = 'Sign Up - Step 1';
	resources['ffe.ee.myAccount.profile.LOALandingPage.continueFamilyLink'] = 'Continue the application for healthcare coverage for myself or my family';
	resources['ffe.ee.myAccount.notifications.general.expanded.header'] = 'Get notifications';
	resources['ffe.ee.myAccount.initialZipcode'] = 'Zip';
	resources['ffe.ee.myAccount.forgotUsernameResults.hiddenTextHeader'] = 'Marketplace Account Registration - Forgot Username';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.marriageCertificate'] = 'Marriage certificate';
	resources['ffe.ee.myAccount.applicationDetails.viewEligibilityResults.button'] = 'View eligibility results';
	resources['ffe.ee.myAccount.application.status.enrolled'] = 'Enrolled';
	resources['ffe.ee.myAccount.idProofing.contactInfo.pageTitle'] = 'Contact information';
	resources['ffe.ee.myAccount.registration.answerTwo'] = 'Answer 2';
	resources['ffe.ee.myAccount.agentBrokerQuestions.alertHeading'] = 'Important: One or more of your answers were incorrect.';
	resources['ffe.ee.myAccount.manageEmployee.header'] = 'Manage Employee';
	resources['ffe.ee.myAccount.settings.phone.success2'] = 'to change your account phone number&#46;';
	resources['ffe.ee.myAccount.settings.phone.success'] = 'The phone number used for this application has been updated.';
	resources['ffe.ee.myAccount.enroll.toDoList.imporant.updateEnrollment'] = 'Important: Based on recent updates to your application, review the tasks below to update your enrollment.';
	resources['ffe.ee.myAccount.coverage.discountUsage.heading'] = 'Premium Discount Usage';
	resources['ffe.ee.myAccount.registration.sendEmail'] = 'Send email';
	resources['ffe.ee.myAccount.accountSettings.employer.businessType'] = 'Business type';
	resources['ffe.ee.myAccount.addEmployee.email'] = 'Email Address';
	resources['ffe.ee.myAccount.idProofing.leftNav.verifyIdentity'] = 'VERIFY YOUR IDENTITY';
	resources['ffe.ee.myAccount.notifications.optOut'] = 'Opted Out';
	resources['ffe.ee.myAccount.inconsistencies.medch38.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.registration.verification.marketplaceError'] = 'Oops&#46; The Marketplace could not verify your email&#46;';
	resources['ffe.ee.myAccount.profile.profileLevel1US.lastName'] = 'Last name';
	resources['ffe.ee.myAccount.inconsistencies.apcsr12.description'] = 'Verify [FN]  will no longer be offered health coverage through a job';
	resources['ffe.ee.myAccount.terminate.button.terminate'] = 'Terminate coverage';
	resources['ffe.ee.myAccount.agentBroker.noClient.pageTitle'] = 'We didnt find the clients application.';
	resources['ffe.ee.myAccount.terminate.acknowledgementText'] = 'I have fully read and understand that I&#39;m choosing to terminate coverage from this plan for any members in my household that are currently enrolled in this plan. I also understand that there may be tax implications from terminating a plan early.';
	resources['ffe.ee.myAccount.registration.accountNotCreated.challengeQuestions.same'] = 'Two or more answers to your security questions were the same. You must provide different answers to each security question.';
	resources['ffe.ee.myAccount.reportLifeChanges.examples'] = 'Here are some examples of the changes you should report&#58;';
	resources['ffe.ee.myAccount.notifications.notices.lifeChange'] = 'report a life change';
	resources['ffe.ee.myAccount.addEmployeeModal.button.downloadTemplate'] = 'Download Template';
	resources['ffe.ee.myAccount.signUpText'] = 'New to HealthCare.gov?';
	resources['ffe.ee.myAccount.eligibility.incomplete.description'] = 'You haven’t finished your application for health coverage. You must complete and submit your application to find out if you’re eligible for coverage and to enroll in a plan.';
	resources['ffe.ee.myAccount.label.phone'] = 'Phone';
	resources['ffe.ee.myAccount.authRepSignatureDate'] = 'Date';
	resources['ffe.ee.myAccount.profile.homeAddress'] = 'Address';
	resources['ffe.ee.myAccount.idProofing.upload.errorMessage'] = 'The file format is wrong. Upload a .pdf,.jpeg,.jpg,.gif,.xml,.png,.tiff, or a.bmp file, and try again.';
	resources['ffe.ee.myAccount.heading.nameAndContactInfo'] = 'Name And Contact Information';
	resources['ffe.ee.myAccount.inLineSSN'] = 'SSN';
	resources['ffe.ee.myAccount.inconsistencies.qe8.shortdescription'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.inconsistencies.medch15.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. </p>';
	resources['ffe.ee.myAccount.idProofing.ccrApplicationFound.button.answerQuestions'] = 'ANSWER THE QUESTIONS';
	resources['ffe.ee.myAccount.coverage.basePremium'] = 'Base premium';
	resources['ffe.ee.myAccount.forgotPassword.success.description3'] = 'with a confirmation of your request to update your password.';
	resources['ffe.ee.myAccount.inconsistencies.in13.description'] = 'Verify information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.inconsistencies.qe3.detaildescription'] = '<p>Send the Marketplace proof that you have a valid Social Security number (SSN) by [Date]. You can still enroll in coverage even if documents arent provided by [Date], but its important that documents are provided so the Marketplace has accurate records. Send a copy of one of the following documents:</p><ul><li>Social Security card</li><li>Tax form(s)</li><p>The Marketplace will help you resolve this discrepancy for purposes of eligibility for health coverage. The Social Security Administration maintains Social Security numbers (SSNs). To resolve SSN discrepancies for purposes other than eligibility for health coverage, call Social Security toll-free at 1-800-772-1213 from 7 a.m.-7 p.m. Eastern, Monday, and Friday. TTY users should call 1-800-325-0778. </p>';
	resources['ffe.ee.myAccount.registration.firstName'] = 'First name';
	resources['ffe.ee.myAccount.SignUp.HiddenText.Success'] = 'Marketplace Account Registration - Sign Up - Success';
	resources['ffe.ee.myAccount.EmployeeHomePage.employeePostAppCompUS.heading3.description1'] = '(Employer contribution)';
	resources['ffe.ee.myAccount.registration.verification.hiddenTextH1'] = 'Marketplace Account Registration - Verification';
	resources['ffe.ee.myAccount.hideRadio'] = 'Hide';
	resources['ffe.ee.myAccount.terminate.pending'] = 'Pending';
	resources['ffe.ee.myAccount.profile.homeAddress.noneRecordPhoneNumber'] = 'None provided';
	resources['ffe.ee.myAccount.notifications.language.english'] = 'English';
	resources['ffe.ee.myAccount.reportLifeChanges.heading'] = 'Report a life change';
	resources['ffe.ee.myAccount.inconsistencies.medch20.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.enroll.toDoList.premiumTax.amount'] = 'Decide how much premium tax credit to use each month for [FN]';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.employerSponsoredBenefitsHealth.employerPaystext'] = 'Employer Pays:';
	resources['ffe.ee.myAccount.heading.myAccount'] = 'My Account';
	resources['ffe.ee.myAccount.startedApplication'] = 'Started Application on';
	resources['ffe.ee.myAccount.notifications.marketingEmail.info'] = 'Updates are occasional messages sent lorem ipsum...';
	resources['ffe.ee.myAccount.employer.terminateCoverageModal.indicateDate'] = 'If you wish to continue, please indicate the date you will leave the SHOP.';
	resources['ffe.ee.myAccount.authorizations.removeAuthorized'] = 'You are removing authorized representative:';
	resources['ffe.ee.myAccount.inconsistencies.medch18.shortdescription'] = 'Verify [FN]&#39; Veteran status';
	resources['ffe.ee.myAccount.documents.coverageDocuments.description'] = 'This is a record of the documents that you have submitted to Healthcare.gov to resolve an inconsistency or to provide proof for an authorization.';
	resources['ffe.ee.myAccount.coverage.terminate'] = 'Terminate coverage';
	resources['ffe.ee.myAccount.inconsistencies.apcsr5.description'] = 'Verify [FN] has an offer of employer coverage that doesn&#39;t meet the minimum value standard';
	resources['ffe.ee.myAccount.forgotUsernameResults.tryAgain'] = 'try again.';
	resources['ffe.ee.myAccount.inconsistencies.in04.description'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.coverage.premiumDiscount'] = 'Premium tax credit';
	resources['ffe.ee.myAccount.profile.profileLevel2US.identityVerified'] = 'Identity Verified';
	resources['ffe.ee.myAccount.manageEmployee.hidden'] = 'Healthcare Clients';
	resources['ffe.ee.myAccount.enroll.toDoList.submissionDate'] = 'Submit before [deadline]';
	resources['ffe.ee.myAccount.idProofing.hidden.currentSection'] = '&#44; current section';
	resources['ffe.ee.myAccount.state.confirmState'] = 'Select your home state';
	resources['ffe.ee.myAccount.step'] = 'Step';
	resources['ffe.ee.myAccount.notifications.address2'] = 'Springfield, MO 23433-4342';
	resources['ffe.ee.myAccount.notifications.address1'] = '123 Springfield Ave, Apt 456';
	resources['ffe.ee.myAccount.tab.applications'] = 'Applications';
	resources['ffe.ee.myAccount.registration.verification.failed.description4'] = 'Re&#45;enter your information now&#44; and we&#39;ll send you another email&#46; Check your email soon&#44; and click the link in the email to create your Marketplace account&#46; If you&#39;ve already verified your email address&#44; you can log in';
	resources['ffe.ee.myAccount.registration.verification.failed.description3'] = 'If you need to create a Marketplace account, re-enter your information and use a different user name. We&#39;ll send you another email with a link for you to get started.';
	resources['ffe.ee.myAccount.registration.verification.failed.description2'] = 'If you&#39;ve already verified your email address, you can log in here.';
	resources['ffe.ee.myAccount.registration.verification.failed.description1'] = 'You should&#39;ve gotten an email from the Marketplace with a link&#44; but too much time has passed for that link to work&#46; Re&#45;enter your information now&#44; and we&#39;ll send you another email&#46; Check your email soon&#44; and click the link in the email to create your Marketplace account&#46; If you&#39;ve already verified your email address&#44; you can log in';
	resources['ffe.ee.myAccount.home.pagetitle'] = 'Application Home';
	resources['ffe.ee.myAccount.error.unsupportedTenant'] = 'The currently selected state is not supported.  Please select a different state.';
	resources['ffe.ee.myAccount.inconsistencies.medch11.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.enroll.toDoList.heading'] = 'Enroll To-Do List';
	resources['ffe.ee.myAccount.label.lastUpdated'] = 'Last Updated';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.employerSponsoredBenefitsDental.employerPaystext'] = 'Employer Pays:';
	resources['ffe.ee.myAccount.secContactModal.authority'] = 'What authority do you give this person?';
	resources['ffe.ee.myAccount.editedStreetName1'] = 'Street address';
	resources['ffe.ee.myAccount.registration.TermsConditions.pageTitle'] = 'Log In - Terms & Conditions';
	resources['ffe.ee.myAccount.idProofing.button.selectFile'] = 'Select file to upload';
	resources['ffe.ee.myAccount.editedCityName'] = 'City';
	resources['ffe.ee.myAccount.idProofing.notVerified.pageTitle'] = 'Identity not verified';
	resources['ffe.ee.myAccount.signUpSuccess.headingText'] = 'Registration - Sign Up Success';
	resources['ffe.ee.myAccount.coverage.eligibility.info'] = 'More Info &amp; Appeal';
	resources['ffe.ee.myAccount.profile.primaryPhone.notesUsage'] = 'Note about usage.';
	resources['ffe.ee.myAccount.registration.pageTitle'] = 'Registration';
	resources['ffe.ee.myAccount.notifications.spokenLanguage.preferred'] = 'Change preferred spoken language';
	resources['ffe.ee.myAccount.forgotUsername'] = 'Forgot username';
	resources['ffe.ee.myAccount.profile.profileLevel2US.description1'] = 'Your profile includes the basic information associated with you in our system. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra dictum nisl vitae tincidunt.';
	resources['ffe.ee.myAccount.inconsistencies.in12.detaildescription'] = '<p>[FN] - You need to send the Marketplace proof that you are not enrolled in health coverage through the Veterans Administration (VA). Examples of documents you can send include:</p><ul><li>Letter from health insurer including coverage termination date</li><li>Statement of health benefits</li><li>Letter from PeaceCorps</li></ul>';
	resources['ffe.ee.myAccount.label.sunday'] = 'Sunday';
	resources['ffe.ee.myAccount.inconsistencies.medch41.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date]. </p>';
	resources['ffe.ee.myAccount.registration.questionTwo'] = 'Question 2';
	resources['ffe.ee.myAccount.enrollmentPeriod'] = 'Enrollment Period has started. You can now apply for the Federal Exchange.';
	resources['ffe.ee.myAccount.inconsistencies.medch8.shortdescription'] = 'Verify [FN]&#39; naturalized or derived citizenship';
	resources['ffe.ee.myAccount.logout.description2'] = 'Return to your Marketplace account here&#46;';
	resources['ffe.ee.myAccount.logout.description1'] = 'You&#39;re now logged out.';
	resources['ffe.ee.myAccount.logout.description0'] = 'Your Marketplace session timed out.';
	resources['ffe.ee.myAccount.coverage.menu.plansAndPrograms'] = 'My plans &amp; programs';
	resources['ffe.ee.myAccount.idProofing.modal.title'] = 'Submit documents that prove your identity.';
	resources['ffe.ee.myAccount.terminate.coverageEnd.date'] = 'If you think you made a mistake, or have other questions about your terminated coverage, call the Health Insurance Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.terminatePlans.final.heading'] = 'This change will be final';
	resources['ffe.ee.myAccount.readyToUploadHeader'] = 'Ready to upload your completed roster template?';
	resources['ffe.ee.myAccount.inconsistencies.medch5.shortdescription'] = 'Verify [FN]&#39; Social security number and related information';
	resources['ffe.ee.myAccount.employerHomePage.employerPostAppCompletionUS.heading7.description3'] = 'Description';
	resources['ffe.ee.myAccount.profile.profileLevel1US.primaryEmail.description1'] = 'We will use this email for essential things like resetting your password.';
	resources['ffe.ee.myAccount.label.editApplication'] = 'Edit my application';
	resources['ffe.ee.myAccount.forgotPassword.notReset.alert.description4'] = 'If you feel you got this message in error, please contact us at 1-800-XXX-XXXX (CMS Help Desk).';
	resources['ffe.ee.myAccount.forgotPassword.notReset.alert.description3'] = 'if you have forgotten your password.';
	resources['ffe.ee.myAccount.forgotPassword.notReset.alert.description2'] = 'Forgot Password?';
	resources['ffe.ee.myAccount.forgotPassword.notReset.alert.description1'] = 'Please try';
	resources['ffe.ee.myAccount.inconsistencies.medch2.shortdescription'] = 'Verify [FN]&#39; Residency';
	resources['ffe.ee.myAccount.footer.header'] = 'Footer';
	resources['ffe.ee.myAccount.home.postAppCompletion.eligibleFor'] = 'Eligible for&#58;';
	resources['ffe.ee.myAccount.inconsistencies.fileUpload.button'] = 'SELECT FILE TO UPLOAD';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.birthCertificate'] = 'Birth certificate';
	resources['ffe.ee.myAccount.logInTerms.accept'] = 'I accept';
	resources['ffe.ee.myAccount.applicationDetails.Incomplete.description'] = 'Your Marketplace application is complete and has been processed. View your eligibility results to find out if you can enroll in health coverage.';
	resources['ffe.ee.myAccount.registration.verification.failedHeading'] = 'Oops. You didn&#39;t check your email in time.';
	resources['ffe.ee.myAccount.applicationDetails.button.resume'] = 'Continue application';
	resources['ffe.ee.myAccount.inconsistencies.apcsr11.detaildescription'] = '<p>[FN] reported they will no longer qualify for health coverage through a job. [FN] may be eligible for a tax credit and cost&#45;sharing reductions (lower copayments, coinsurance and deductibles) if you send the Marketplace one of the following documents to confirm that [FN] no longer qualifies for employer coverage by [Date]. Upload a copy of one of the following documents by [Date]:</p><ul><li>A letter from an employer that says that the employer no longer offers health coverage</li><li>Other documentation from an employer indicating that the employer no longer offers health coverage</li></ul>';
	resources['ffe.ee.myAccount.profile.changeTenantModal.title'] = 'Choose your state of residence';
	resources['ffe.ee.myAccount.inconsistencies.medch16.detaildescription'] = '<p>The immigration status provided on the application for [FN] has expired or will expire in the next 30 days. If your immigration status has been extended, you need to give the Marketplace proof that you have an eligible immigration status by [Date]. [FN] needs to send the Marketplace a copy of the immigration document or proof of the immigration status [FN] provided on the application.<br/>[FN] won&#39;t qualify to enroll in coverage through [State Medicaid program] if documents aren&#39;t provided by [date inconsistency period ends].<br/>[FN] can also update their immigration status with the U.S. Department of Homeland Security, U.S. Citizenship and Immigration Services (USCIS). For more information about how to update immigration status with the Department of Homeland Security, please contact USCIS by calling the National Customer Service Center at 1&#45;800&#45;375&#45;5283.</p>';
	resources['ffe.ee.myAccount.inconsistencies.qe6.description'] = 'Verify [FN]&#39;s status as a naturalized citizen';
	resources['ffe.ee.myAccount.profile.profileLevel1US.middleName'] = 'Middle';
	resources['ffe.ee.myAccount.completedApplication'] = 'Completed Application on';
	resources['ffe.ee.myAccount.inconsistencies.qe4.detaildescription'] = '<p>Send the Marketplace proof that [FN] is a citizen by [Date]. [FN] won’t qualify to enroll in coverage through the Marketplace if a document isn’t provided by [Date].  Send a copy of a document proving [FN] is a citizen.  Examples of documents proving citizenship can include:</p><ul><li>U.S. passport</li><li>U.S. public birth record</li><li>Certification of Report of Birth</li><li>Consular Report of Birth Abroad</li><li>Certification of Birth Abroad</li><li>U.S. Citizen Identification Card</li><li>American Indian Card (I-872)</li><li>Certificate of Naturalization</li><li>Certificate of Citizenship</li></ul>';
	resources['ffe.ee.myAccount.registration.accountNotCreated.hiddenText'] = 'Marketplace Account Registration - Sign Up - Unsuccessful';
	resources['ffe.ee.myAccount.agentBrokerClient.notFoundAlert'] = 'Your search did not find the client&#39;s application.';
	resources['ffe.ee.myAccount.profile.verifyNow'] = 'Verify now';
	resources['ffe.ee.myAccount.coverage.youPay'] = 'You pay&#58;';
	resources['ffe.ee.myAccount.idProofing.guide.heading4'] = 'Confirm your identity';
	resources['ffe.ee.myAccount.idProofing.guide.heading2'] = 'Welcome back to the Marketplace';
	resources['ffe.ee.myAccount.appsCoverage.pagetitle'] = 'My Applications & Coverage';
	resources['ffe.ee.myAccount.idProofing.guide.heading1'] = 'Verify your identity';
	resources['ffe.ee.myAccount.forgotPassword.profileNotFound.h1HiddenText'] = 'Marketplace Account Registration - Forgot Password - Profile Not Found';
	resources['ffe.ee.myAccount.profile.LOALandingPage.familyHeading'] = 'Individuals &amp; Families';
	resources['ffe.ee.myAccount.home.devTool.viewEligibility'] = 'View Eligibility';
	resources['ffe.ee.myAccount.document.coverageDocuments.application'] = 'Application:';
	resources['ffe.ee.myAccount.coverage.menu.authorizedUsers'] = 'Authorized users';
	resources['ffe.ee.myAccount.inconsistencies.in07.shortdescription'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.authorizations.label.startDate'] = 'Start:';
	resources['ffe.ee.myAccount.inconsistencies.in04.shortdescription'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.initialAddress1'] = 'Address Line 1';
	resources['ffe.ee.myAccount.enroll.toDoList.review.dentalPlan2'] = 'Review or change dental plan for [FN]';
	resources['ffe.ee.myAccount.profile.LOALandingPage.viewEmployeeCoverageLink'] = 'View the application for healthcare coverage for my employees';
	resources['ffe.ee.myAccount.notifications.spokenLanguage'] = 'Preferred spoken language';
	resources['ffe.ee.myAccount.employerHomePage.employerPostAppCompletionUS.heading7'] = 'File an appeal';
	resources['ffe.ee.myAccount.employerHomePage.employerPostAppCompletionUS.heading6'] = 'Payments and Invoices';
	resources['ffe.ee.myAccount.employerHomePage.employerPostAppCompletionUS.heading5'] = 'Account Settings';
	resources['ffe.ee.myAccount.employerHomePage.employerPostAppCompletionUS.heading4'] = 'Manage Employee Roster';
	resources['ffe.ee.myAccount.employerHomePage.employerPostAppCompletionUS.heading3'] = 'TOP TASKS';
	resources['ffe.ee.myAccount.employerHomePage.employerPostAppCompletionUS.heading2'] = 'Plans &amp; Employer Sponsored Benefits';
	resources['ffe.ee.myAccount.employerHomePage.employerPostAppCompletionUS.heading1'] = 'COVERAGE &amp; BENEFITS';
	resources['ffe.ee.myAccount.inconsistencies.in01.shortdescription'] = 'Verify [FN]&#39;s citizenship';
	resources['ffe.ee.myAccount.inconsistencies.medch25.shortdescription'] = '[FN]&#39; yearly income';
	resources['ffe.ee.myAccount.editedStateCode'] = 'State';
	resources['ffe.ee.myAccount.removePersonModal.removeSomeone'] = 'To remove someone from a plan, you need to change your application to show they&#39;re no longer applying for coverage. This will remove him or her from all plans, including health and dental plans.';
	resources['ffe.ee.myAccount.inconsistencies.medch39.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.inconsistencies.apcsr13.description'] = 'Verify [FN] will no longer be offered health coverage through a job that is affordable or meets the minimum value standard';
	resources['ffe.ee.myAccount.lastName'] = 'Last Name';
	resources['ffe.ee.myAccount.passwordUpdate.validation.description'] = 'Your password must contain 8&#45;20 characters. There must be at least 1 upper case letter, 1 lower case letter, and 1 number. It must be different from your last 6 passwords. Dont enter any letters with special characters, like accents, tildes, etc. It can&#39;t contain your username or any of these characters &#61; &#63;&#60;&#62; &#40; &#41; &#8216; &#34; &#47; &#92; &#38;';
	resources['ffe.ee.myAccount.inconsistencies.medch7.description'] = 'Verify [FN]&#39; citizenship status';
	resources['ffe.ee.myAccount.home.eligibilityResults.description3'] = 'Your application is complete, but there are some unresolved inconsistencies. Inconsistencies are situations where we must confirm information that you submitted, or we need you to submit more information.';
	resources['ffe.ee.myAccount.settings.phone.settingsLink'] = 'Visit &#34;My Profile&#34; to change the phone number associated with your Marketplace account.';
	resources['ffe.ee.myAccount.home.eligibilityResults.description2'] = 'You are ready to proceed to enrollment.';
	resources['ffe.ee.myAccount.eligbilityResults.memberName'] = 'For [FN], [FN] and [FN]';
	resources['ffe.ee.myAccount.home.eligibilityResults.description1'] = 'Your application has been processed and your eligibility results are ready for your review.';
	resources['ffe.ee.myAccount.coverage.eligible'] = 'Eligible';
	resources['ffe.ee.myAccount.terminate.statusTerminated'] = 'Status: Terminated - Effective [DATE]';
	resources['ffe.ee.myAccount.SecurityQuestions.validation.rule'] = 'The answers to your security questions must contain letters or numbers and can&#39;t be longer than 30 characters. The following special characters are allowed, as long as they follow a letter or number. This means that your answers can&#39;t start with one of these characters, apostrophe (&#39;), hyphen (-), spaces, period (.).';
	resources['ffe.ee.myAccount.label.name'] = 'Name';
	resources['ffe.ee.myAccount.home.applyForExemption'] = 'Apply for an Exemption';
	resources['ffe.ee.myAccount.first_name'] = 'First Name';
	resources['ffe.ee.myAccount.home.devTool.enrollmentInProgress'] = 'Enrollment in Progress';
	resources['ffe.ee.myAccount.inconsistencies.in13.detaildescription'] = '<p> [FN] - Theres a difference between what you said on the application and what the Marketplace has verified with other records. Send a copy of one of the following documents for each employer that offers coverage to you:</p><ul><li>A completed Employer Coverage Tool from healthcare.gov with new employer coverage information and a cover letter signed by the employer</li><li>A letter from the employer about the employers coverage. The letter must include information about the about whether the employer offers a plan that meets the minimum value standard and the cost of the employees share for the coverage (the "premium"). Provide this information about the lowest cost individual plan offered by the employer. If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didnt receive any other discounts based on wellness programs.</li><li>Other documentation from the employer with the new premium amount (and how often the employee would pay the amount). If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didnt receive any other discounts based on wellness programs.</li><li>A letter from the employer about the employers coverage. The letter must include information about the about whether the employer offers a plan that meets the minimum value standard and the cost of the employees share for the coverage (the "premium"). Provide this information about the lowest cost individual plan offered by the employer. If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didnt receive any other discounts based on wellness programs.</li><li>Other documentation from the employer with the new premium amount (and how often the employee would pay the amount). If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didnt receive any other discounts based on wellness programs.</li><li>A letter from an employer indicating that no plans offered to the employee meet the minimum value standard</li><li>A completed Employer Coverage Tool from healthcare.gov and cover letter confirmation from employer</li><li>Other documentation from the employer that says that no plans offered to the employee meet the minimum value standard </li></ul>';
	resources['ffe.ee.myAccount.profile.profileLevel1US.password.current'] = 'Please enter your current password';
	resources['ffe.ee.myAccount.inconsistencies.medch42.detaildescription'] = '<p>The immigration status provided on the application for [FN] has expired or will expire in the next 30 days. If your immigration status has been extended, you need to give the Marketplace proof that you have an eligible immigration status by [Date]. [FN] needs to send the Marketplace a copy of the immigration document or proof of the immigration status [FN] provided on the application.<br/>[FN] won&#39;t qualify to enroll in coverage through [State CHIP program] if documents aren&#39;t provided by [date inconsistency period ends].<br/>[FN] can also update their immigration status with the U.S. Department of Homeland Security, U.S. Citizenship and Immigration Services (USCIS). For more information about how to update immigration status with the Department of Homeland Security, please contact USCIS by calling the National Customer Service Center at 1&#45;800&#45;375&#45;5283.</p>';
	resources['ffe.ee.myAccount.employeeWorkState'] = 'State';
	resources['ffe.ee.myAccount.employeeDifferentAddress'] = 'Response';
	resources['ffe.ee.myAccount.inconsistencies.in14.description'] = 'Verify information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.registration.verification.button.resendEmail'] = 'Create account';
	resources['ffe.ee.myAccount.label.city'] = 'City';
	resources['ffe.ee.myAccount.initialLastName'] = 'Last Name';
	resources['ffe.ee.myAccount.appsCoverage.appStatus.pageTitle'] = 'Application Status';
	resources['ffe.ee.myAccount.coverage.originallySubmitted'] = 'Originally Submitted&#58;';
	resources['ffe.ee.myAccount.documents.coverageDocuments.link'] = 'AP1234567890';
	resources['ffe.ee.myAccount.accountSettings.employer.companyName'] = 'Company name';
	resources['ffe.ee.myAccount.inconsistencies.apcsr12.detaildescription'] = '<p>[FN] reported they will no longer qualify for health coverage through a job. [FN] may be eligible for a tax credit and cost&#45;sharing reductions (lower copayments, coinsurance and deductibles) if you send the Marketplace one of the following documents to confirm that [FN] no longer has access to employer coverage by [Date]. Upload a copy of one of the following documents by [Date]:</p><ul><li>A letter from an employer that says the employer no longer offers health coverage</li><li>Other documentation from an employer that says that the employer no longer offers health coverage</li></ul>';
	resources['ffe.ee.myAccount.agentBrokerQuestions.search.button'] = 'Search';
	resources['ffe.ee.myAccount.expiredPassword.newPassword.instructions'] = 'Your password must contain 8&#45;20 characters&#46; There must be at least 1 upper case letter&#44; 1 lower case letter&#44; and 1 number&#46; It must be different from your last 6 passwords&#46; It can&#39;t contain your username or any of these characters &#61; &#63;&#60;&#62; &#40; &#41; &#8216; &#34; &#47; &#92; &#38;';
	resources['ffe.ee.myAccount.idProofing.questions.pageTitle'] = 'Identity questions';
	resources['ffe.ee.myAccount.nav.coverageAndBenefits'] = 'Coverage &amp; <br>Benefits';
	resources['ffe.ee.myAccount.home.devTool.resultsPending'] = 'Eligibility Results Pending';
	resources['ffe.ee.myAccount.inconsistencies.medch21.description'] = 'Verify [FN]&#39; current income';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.governmentSponsored'] = 'Change in access to government sponsored health insurance';
	resources['ffe.ee.myAccount.profile.profileLevel1US.firstName'] = 'First name';
	resources['ffe.ee.myAccount.inconsistencies.in01.detaildescription'] = '<p>[FN] - You need to send the Marketplace proof that you are a citizen. Send a copy of a document proving you are a citizen.  Examples of documents proving citizenship can include:</p><ul><li>U.S. passport</li><li>U.S. public birth record</li><li>Certification of Report of Birth</li><li>Consular Report of Birth Abroad</li><li>Certification of Birth Abroad</li><li>U.S. Citizen Identification Card</li><li>American Indian Card (I-872)</li><li>Certificate of Naturalization</li><li>Certificate of Citizenship</li></ul>';
	resources['ffe.ee.myAccount.inconsistencies.medch30.detaildescription'] = '<p>Send the Marketplace proof that you have a valid Social Security number (SSN). [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Social Security card</li><li>Tax form(s)</li></ul><p>The Marketplace will help you resolve this discrepancy for purposes of eligibility for health coverage. The Social Security Administration maintains SSNs.  To resolve SSN discrepancies for purposes other than eligibility for health coverage, call Social Security toll&#45;free at 1&#45;800&#45;772&#45;1213 from 7 a.m.&#45;7 p.m. Eastern, Monday&#45;Friday. TTY users should call 1&#45;800&#45;325&#45;0778.</p>';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.employerSponsoredBenefitsDental.button.viewPlanDetails'] = 'View Plan Details';
	resources['ffe.ee.myAccount.idProofing.upload.button.addDocument'] = 'Add another document';
	resources['ffe.ee.myAccount.inconsistencies.apcsr6.description'] = 'Verify [FN] has an offer of employer coverage that&#39;s unaffordable';
	resources['ffe.ee.myAccount.eligibility.heading'] = 'Eligibility &amp; appeals';
	resources['ffe.ee.myAccount.inconsistencies.in05.description'] = 'Verify [FN]&#39;s veteran status';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.description1'] = 'You must reach a participation rate of 70% of eligibible employees before the insurerer will accept you.';
	resources['ffe.ee.myAccount.home.devTool.coverage'] = 'My Coverage';
	resources['ffe.ee.myAccount.documents.coverageDocuments.h1'] = 'Documents';
	resources['ffe.ee.myAccount.reportLifeChanges.changes.description'] = 'Select &#34;Continue&#34; to go to your application and make changes&#46;';
	resources['ffe.ee.myAccount.registration.ForgotPassword.Confirmation.pageTitle'] = 'Forgot Password - Reset Password - Successful';
	resources['ffe.ee.myAccount.label.viewApplication'] = 'View my application';
	resources['ffe.ee.myAccount.employeeWorkCity'] = 'City';
	resources['ffe.ee.myAccount.label.password'] = 'Password';
	resources['ffe.ee.myAccount.idProofing.ccrQuestionsIncorrect.pageTitle'] = 'Verify your identity';
	resources['ffe.ee.myAccount.inconsistencies.in14.shortdescription'] = 'Verify information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.smallBusiness.globalLanding.description2'] = 'Right-click the link to the PDF document and select “Save As.” After you have downloaded the PDF document to your computer, open it using Adobe Reader to complete the application. Adobe Reader is required to complete the application and is available as a free download.';
	resources['ffe.ee.myAccount.smallBusiness.globalLanding.description1'] = '<strong>NOTE:</strong> This application is only for use by small business employers looking to provide coverage to their employees through the SHOP program.';
	resources['ffe.ee.myAccount.inconsistencies.in11.shortdescription'] = 'Verify that [FN] is not enrolled in health coverage through the Veterans Administration (VA)';
	resources['ffe.ee.myAccount.inconsistencies.medch35.shortdescription'] = 'Verify [FN]&#39; citizenship status';
	resources['ffe.ee.myAccount.inconsistencies.medch1.detaildescription'] = '<p>Send the Marketplace proof that you have a valid Social Security number (SSN). [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Social Security card</li><li>Tax form(s)</li></ul><p>The Marketplace will help you resolve this discrepancy for purposes of eligibility for health coverage. The Social Security Administration maintains SSNs.  To resolve SSN discrepancies for purposes other than eligibility for health coverage, call Social Security toll&#45;free at 1&#45;800&#45;772&#45;1213 from 7 a.m.&#45;7 p.m. Eastern, Monday &#45; Friday. TTY users should call 1&#45;800&#45;325&#45;0778.</p>';
	resources['ffe.ee.myAccount.label.middleName'] = 'Middle';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.employerSponsoredBenefits.title'] = 'Plan &amp; Employer Sponsored Benefits';
	resources['ffe.ee.myAccount.registration.verification.pleaseWaitDescritption'] = 'We&#39;re processing your request&#46; This may take a few moments.';
	resources['ffe.ee.myAccount.idProofing.button.continueApplication'] = 'Continue to my application';
	resources['ffe.ee.myAccount.inconsistencies.medch32.shortdescription'] = 'Verify [FN]&#39; Residency';
	resources['ffe.ee.myAccount.manageEmployee.description2'] = 'Learn how changes affect your coverage.';
	resources['ffe.ee.myAccount.manageEmployee.description1'] = 'It is important to update your employee roster as soon as possible when changes occurs.      Select all the links below that apply to provide updates.';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.tribal'] = 'Native American Tribal document';
	resources['ffe.ee.myAccount.eligibilityResults.marketplacePlan'] = 'Qualified Health Plan eligibility';
	resources['ffe.ee.myAccount.terminate.people'] = 'Coverage will be ended for these people&#58;';
	resources['ffe.ee.myAccount.inconsistencies.apcsr8.detaildescription'] = '<p>There&#39;s a difference between what [FN] said on the application and what the Marketplace has verified with other records. You need to send the Marketplace one of the following documents for [FN] by [Date]. [FN] won&#39;t be eligible for a tax credit if documents are not provided by [Date]. Upload a copy of one of the following documents for each employer that offers coverage to [FN]:</p><ul><li>A completed Employer Coverage Tool [link] with new employer coverage information and a cover letter signed by the employer. </li><li>A letter from the employer about the employer&#39;s coverage. The letter must include information about the about whether the employer offers a plan that meets the minimum value standard and the cost of the employee&#39;s share for the coverage (the "premium"). Provide this information about the lowest cost individual plan offered by the employer. If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didn&#39;t receive any other discounts based on wellness programs. </li><li>Other documentation from the employer with the new premium amount (and how often the employee would pay the amount). If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didn&#39;t receive any other discounts based on wellness programs.  </li></ul>';
	resources['ffe.ee.myAccount.authorizations.agentBroker'] = 'Agent/broker';
	resources['ffe.ee.myAccount.viewCostDetails'] = 'View Cost Details';
	resources['ffe.ee.myAccount.label.tuesday'] = 'Tuesday';
	resources['ffe.ee.myAccount.readyToUpload.aboutSubmitting'] = 'About submitting documents';
	resources['ffe.ee.myAccount.notifications.general.text'] = 'Text messages to';
	resources['ffe.ee.myAccount.registration.signUpHeader.title'] = 'Security Questions';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.taxStatus'] = 'Change in tax filing status';
	resources['ffe.ee.myAccount.profile.profileLevel2US.middleName'] = 'Middle Name';
	resources['ffe.ee.myAccount.secContactModal.addAddress'] = 'Add a new address';
	resources['ffe.ee.myAccount.coverage.menu.eligibility'] = 'Eligibility &amp; appeals';
	resources['ffe.ee.myAccount.agentBrokerQuestions.firstJob'] = 'In what city/town was your first job?';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.topTasksHeading2.description2'] = 'Contact Info, Security Settings, Authorized, Users, Notifications, etc';
	resources['ffe.ee.myAccount.agentBrokerQuestions.streetName'] = 'What street did you live on in third grade?';
	resources['ffe.ee.myAccount.profile.primaryEmail.newEmail'] = 'Enter your new email address';
	resources['ffe.ee.myAccount.notifications.general.info'] = 'Notifications are messages sent lorem ipsum...';
	resources['ffe.ee.myAccount.inconsistencies.close'] = 'Close';
	resources['ffe.ee.myAccount.reportLifeChanges.notReady'] = 'Report a life change will be available on 10/15/2013. Come back on that date to report your change.';
	resources['ffe.ee.myAccount.notifications.spokenLanguage.info'] = 'Explanation of what this is used for...';
	resources['ffe.ee.myAccount.inconsistencies.in14.detaildescription'] = '<p>[FN] - Theres a difference between what you said on the application and what the Marketplace has verified with other records. Send a copy of one of the following documents for each employer that offers coverage to you:</p><ul><li>A letter from an employer participating in the SHOP that says the employee isnt offered coverage</li><li>A completed Employer Coverage Tool from healthcare.gov and a cover letter signed by the employer participating in the SHOP</li><li>Other documentation from the employer participating in the SHOP that says that the employee isnt eligible for health coverage</li><li>Other documentation from the employer participating in the SHOP that says that the employee isnt eligible for health coverage</li><li>A letter from an employer that says the employee doesnt qualify for any coverage that meets the minimum value standard</li><li>A completed Employer Coverage Tool from healthcare.gov and a cover letter signed by the employer</li><li>Other documentation from the employer that says the employee doesnt qualify for any coverage that meets the minimum value standard</li><li>A completed Employer Coverage Tool from healthcare.gov with new employer coverage information and a cover letter signed by the employer</li><li>A letter from the employer about the employers coverage. The letter must include information about the about whether the employer offers a plan that meets the minimum value standard and the cost of the employees share for the coverage (the "premium"). Provide this information about the lowest cost individual plan offered by the employer. If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didnt receive any other discounts based on wellness programs.</li><li>Other documentation from the employer with the new premium amount (and how often the employee would pay the amount). If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didnt receive any other discounts based on wellness programs.</li></ul>';
	resources['ffe.ee.myAccount.eligibility.button.view'] = 'View eligibility results';
	resources['ffe.ee.myAccount.returnToSignIn'] = 'Return to Sign In';
	resources['ffe.ee.myAccount.home.status.eligibilityPending'] = 'Eligibility results pending';
	resources['ffe.ee.myAccount.registration.youGotEmail'] = 'Check your email!';
	resources['ffe.ee.myAccount.idProofing.ccrApplicationFound.noApplication'] = 'Dont have an application on the marketplace? <a id="ignoreApplication" href="javascript:void(0)">Click here to continue</a>';
	resources['ffe.ee.myAccount.forgotPassword.provideDetails.email'] = 'Email address associated with your account:';
	resources['ffe.ee.myAccount.forgotPassword.notFound.alertSignUpLink'] = 'Sign up';
	resources['ffe.ee.myAccount.idProofing.contact.format.socialSecurityNumber'] = 'XXX&#45;XX&#45;XXXX';
	resources['ffe.ee.myAccount.registration.forgotUsername.pageTitle'] = 'Forgot Username';
	resources['ffe.ee.myAccount.home.devTool.applicationInProgress'] = 'Application In-Progress';
	resources['ffe.ee.myAccount.terminate.notEligible'] = 'Not eligible';
	resources['ffe.ee.myAccount.notifications.general.emailTo'] = 'Emails to';
	resources['ffe.ee.myAccount.home.hidden.heading'] = 'My Account Landing Page';
	resources['ffe.ee.myAccount.application.status.initialEnrollment'] = 'Initial enrollment';
	resources['ffe.ee.myAccount.agentBrokerQuestions.searchAgain.button'] = 'Search again';
	resources['ffe.ee.myAccount.home.notifications.enrollmentPeriod'] = 'The 2014 Enrollment Period has started.';
	resources['ffe.ee.myAccount.inconsistencies.apcsr13.detaildescription'] = '<p>[FN] reported an employer will no longer offer employer coverage that is affordable or meets the minimum value standard. [FN] may be eligible for a tax credit and cost&#45;sharing reductions (lower copayments, coinsurance and deductibles) if you send the Marketplace one of the following documents to confirm that [FN] no longer has access to employer coverage that is affordable or meets the minimum value standard by [Date]. Upload a copy of one of the following documents:</p><ul><li>A completed Employer Coverage Tool [link] with new employer coverage information and a cover letter signed by the employer</li><li>A letter from the employer about the employer&#39;s coverage. The letter must include information about the about whether the employer offers a plan that meets the minimum value standard and the cost of the employee&#39;s share for the coverage (the "premium"). Provide this information about the lowest cost individual plan offered by the employer. If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didn&#39;t receive any other discounts based on wellness programs. </li><li>Other documentation from the employer with the new premium amount (and how often the employee would pay the amount). If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didn&#39;t receive any other discounts based on wellness programs.</li></ul>';
	resources['ffe.ee.myAccount.agentBroker.removeModal.header'] = 'Remove agent/broker';
	resources['ffe.ee.myAccount.home.notifications.applyFFE'] = 'You can apply for Federal Exchange.';
	resources['ffe.ee.myAccount.idProofing.results.email'] = 'The results of your identity verification will be emailed to you at [email address]';
	resources['ffe.ee.myAccount.employer.paymentsInvoiceHeader'] = 'UI for Payments and Invoices will be provided by NGS';
	resources['ffe.ee.myAccount.manageEmployee.download'] = 'Download Roster';
	resources['ffe.ee.myAccount.security.questionsStreetName'] = 'What street did you live on in third grade?';
	resources['ffe.ee.myAccount.idProofing.upload.pageTitle'] = 'Identity not verified';
	resources['ffe.ee.myAccount.inconsistencies.in02.detaildescription'] = '<p>[FN] - There’s a difference between what you entered on the application and what the Marketplace has verified with other government records. Send a copy of one of the following documents:</p><ul><li>Social Security card</li><li>Tax form(s)</li><li>Driver’s license</li><li>State ID</li><li>U.S. passport</li></ul><p>The Marketplace will help you resolve this discrepancy for purposes of eligibility for health coverage. The Social Security Administration maintains SSNs.  To resolve SSN discrepancies for purposes other than eligibility for health coverage, contact Social Security toll-free at 1-800-772-1213 from 7 a.m.-7 p.m. Eastern, Monday through Friday (TTY: 1-800-325-0778).</p>';
	resources['ffe.ee.myAccount.coverage.marketplaceHealthPlans'] = 'Marketplace Health Plans';
	resources['ffe.ee.myAccount.profile.LOALandingPage.viewFamilyLink'] = 'View my application for healthcare coverage for myself or my family';
	resources['ffe.ee.myAccount.inconsistencies.medch31.detaildescription'] = '<p>Send the Marketplace proof that [FN] lives in [state] by [Date]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Driver&#39;s license</li><li>State ID</li><li>Mortgage payment receipt</li><li>Mortgage deed showing primary residency</li><li>Lease agreement</li><li>School enrollment documentation</li><li>Utility bill</li><li>Government mail (Social Security statement, DMV notice)</li></ul>';
	resources['ffe.ee.myAccount.logIn.pageTitle'] = 'Log In';
	resources['ffe.ee.myAccount.coverage.premiumTaxDiscounts'] = 'Premium Tax Discounts';
	resources['ffe.ee.myAccount.forgotUsernameResults.emailAssociated'] = 'What is your email address associated with your account&#63;';
	resources['ffe.ee.myAccount.logIn.forgotUsername'] = 'Forgot your username&#63;';
	resources['ffe.ee.myAccount.th.docName'] = 'Document Name';
	resources['ffe.ee.myAccount.home.status.employerChoice'] = 'Employer Choice Stage';
	resources['ffe.ee.myAccount.applicationDetails.eligibility.submitBefore'] = 'Submit before';
	resources['ffe.ee.myAccount.inconsistencies.apcsr14.description'] = 'Verify health coverage through a job will no longer be affordable';
	resources['ffe.ee.myAccount.loginButton'] = 'Log In';
	resources['ffe.ee.myAccount.button.backToPortal'] = 'Go back';
	resources['ffe.ee.myAccount.applicationDetails.link.reportLifeChange'] = 'To change this information, <a href="#reportLifeChanges">report a life change </a>';
	resources['ffe.ee.myAccount.eidm.error.e582'] = 'This session ID isn&#39;t valid.';
	resources['ffe.ee.myAccount.eidm.error.e581'] = 'The user data from FARS doesn&#39;t match the Social Security number (SSN).';
	resources['ffe.ee.myAccount.eidm.error.e580'] = 'The user data from FARS doesn&#39;t match the phone number.';
	resources['ffe.ee.myAccount.applicationDetails.Incomplete'] = 'Your application is incomplete';
	resources['ffe.ee.myAccount.inconsistencies.qe1.shortdescription'] = 'Verify [FN]&#39;s incarceration status';
	resources['ffe.ee.myAccount.eidm.error.e579'] = 'You&#39;ve exceeded 2 attempts for verifying your data&#46;&#46;&#46;';
	resources['ffe.ee.myAccount.eidm.error.e578'] = 'The user data from FARS doesn&#39;t match the ZIP code extension.';
	resources['ffe.ee.myAccount.eidm.error.e577'] = 'The user data from FARS doesn&#39;t match the ZIP code.';
	resources['ffe.ee.myAccount.eidm.error.e576'] = 'The user data from FARS doesn&#39;t match the state.';
	resources['ffe.ee.myAccount.eidm.error.e575'] = 'The user data from FARS doesn&#39;t match the city.';
	resources['ffe.ee.myAccount.eidm.error.e574'] = 'The user data from FARS doesn&#39;t match the address.';
	resources['ffe.ee.myAccount.eidm.error.e573'] = 'The user data from FARS doesn&#39;t match the address.';
	resources['ffe.ee.myAccount.eidm.error.e571'] = 'The user data from FARS doesn&#39;t match the last name.';
	resources['ffe.ee.myAccount.eidm.error.e570'] = 'The user data from FARS doesn&#39;t match the first name.';
	resources['ffe.ee.myAccount.eidm.error.e566'] = 'This session has expired. Log in again.';
	resources['ffe.ee.myAccount.eligibility.appeal.description'] = 'If you think we made a mistake, you can appeal our decision about your [STATE_MEDICAID_PROGRAM_NAME] coverage or our decision about your eligibility for purchasing health coverage through the Marketplace, enrollment periods, or how much tax credit or cost-sharing reduction you can get through the Marketplace. If you qualify for tax credits or cost&#45;sharing reductions, you can appeal the amount we determined you are eligible for. You can have both of these appeals heard together at the Marketplace. You have 90 days to request these appeals from the date of this notice. If you choose this option, you will not have your appeal about your [STATE_MEDICAID_PROGRAM_NAME] decision separately heard at [STATE_MEDICAID_AGENCY_NAME].';
	resources['ffe.ee.myAccount.inconsistencies.medch8.description'] = 'Verify [FN]&#39; naturalized or derived citizenship';
	resources['ffe.ee.myAccount.inconsistencies.in21.shortdescription'] = 'Eligibility for tax credits and lower out-of-pocket costs';
	resources['ffe.ee.myAccount.home.notifications.complete'] = 'Complete';
	resources['ffe.ee.myAccount.employerCoverage.selectApp'] = 'Select Application:';
	resources['ffe.ee.myAccount.eidm.error.e547'] = 'The user data doesn&#39;t match.';
	resources['ffe.ee.myAccount.eidm.error.e546'] = 'There was no match in the FARS database.';
	resources['ffe.ee.myAccount.eidm.error.e545'] = 'An error occurred when contacting Experian to verify your information. Try again after some time.';
	resources['ffe.ee.myAccount.eidm.error.e544'] = 'Your information can&#39;t be validated. You can&#39;t continue with registration. To fix this issue, call Experian Verification Supporting Services [E] and provide this Review Reference Number: [R] to verify your identity.';
	resources['ffe.ee.myAccount.eidm.error.e543'] = 'Your information can&#39;t be validated. To fix this issue, contact the Experian Verification Support Services and provide this Review Reference Number: [R].';
	resources['ffe.ee.myAccount.eidm.error.e542'] = 'Your review reference ID wasn&#39;t located. To fix this issue, contact the Experian Verification Support Services and provide your information.';
	resources['ffe.ee.myAccount.eidm.error.e541'] = 'Provide a proper Language Code. Enter EN or ES.';
	resources['ffe.ee.myAccount.eidm.error.e540'] = 'User does not exist.';
	resources['ffe.ee.myAccount.terminatePlans.removingPerson'] = 'Removing a person from a health plan';
	resources['ffe.ee.myAccount.eidm.error.e539'] = 'The username you entered doesn&#39;t exist.';
	resources['ffe.ee.myAccount.eidm.error.e538'] = 'The username you entered doesn&#39;t exist.';
	resources['ffe.ee.myAccount.eidm.error.e537'] = 'Important: We can’t verify your identity. Call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.eidm.error.e536'] = 'An error has occurred.';
	resources['ffe.ee.myAccount.eidm.error.e535'] = 'An error has occurred.';
	resources['ffe.ee.myAccount.eidm.error.e534'] = 'Your password wasn&#39;t verified.';
	resources['ffe.ee.myAccount.eidm.error.e533'] = 'Important: State is not valid.';
	resources['ffe.ee.myAccount.eidm.error.e532'] = 'These fields don&#39;t match.';
	resources['ffe.ee.myAccount.eidm.error.e531'] = 'Your phone number wasn&#39;t updated.';
	resources['ffe.ee.myAccount.eidm.error.e530'] = 'The phone number isn&#39;t valid.';
	resources['ffe.ee.myAccount.inconsistencies.medch42.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.eidm.error.e529'] = 'Your address wasn&#39;t updated.';
	resources['ffe.ee.myAccount.eidm.error.e528'] = 'The questions and answers you entered can&#39;t be verified.';
	resources['ffe.ee.myAccount.eidm.error.e527'] = 'Important: One or more security answer is empty.';
	resources['ffe.ee.myAccount.eidm.error.e526'] = 'Important: Zipcode is empty.';
	resources['ffe.ee.myAccount.eidm.error.e525'] = 'Important: State is empty.';
	resources['ffe.ee.myAccount.eidm.error.e524'] = 'Important: City is empty.';
	resources['ffe.ee.myAccount.profile.updateSecurityPasswordText'] = 'To finalize the update of your security questions, please enter your password.';
	resources['ffe.ee.myAccount.eidm.error.e523'] = 'Important: Home address 1 is empty.';
	resources['ffe.ee.myAccount.eidm.error.e522'] = 'Your access has been denied.';
	resources['ffe.ee.myAccount.eidm.error.e521'] = 'An error occurred while updating your user profile.';
	resources['ffe.ee.myAccount.eidm.error.e520'] = 'Important: User e-mail and confirm e-mail do not match.';
	resources['ffe.ee.myAccount.eidm.error.e1508'] = 'Your information can&#39;t be validated. Verify the information you entered, and try again.';
	resources['ffe.ee.myAccount.eidm.error.e1507'] = 'Your information can&#39;t be validated. Verify your information, and try again. If you try 3 times and your information still can&#39;t be validated, your account will be locked.';
	resources['ffe.ee.myAccount.eidm.error.e1506'] = 'Your account has been locked. Try again after an hour.';
	resources['ffe.ee.myAccount.eidm.error.e1505'] = 'Enter a valid password.';
	resources['ffe.ee.myAccount.eidm.error.e1504'] = 'Your information can&#39;t be validated. Review your information, and try again. If you try 3 times and your information still can&#39;t be validated, your account will be locked.';
	resources['ffe.ee.myAccount.eidm.error.e1502'] = 'Your information can&#39;t be validated. Re-enter the information, and try again.';
	resources['ffe.ee.myAccount.eidm.error.e1501'] = 'Your account is disabled. Contact the EIDM help desk to enable your account.';
	resources['ffe.ee.myAccount.applicationDetails.pagetitle'] = 'Application Details';
	resources['ffe.ee.myAccount.inconsistencies.apcsr9.detaildescription'] = '<p>There&#39;s a difference between what [FN] said on the application and what the Marketplace has verified with other records. You need to send the Marketplace one of the following documents for [FN] by [Date]. [FN] won&#39;t be eligible for a tax credit if documents aren&#39;t provided by [Date]. Send a document for each offer of employer coverage that [FN] qualifies for. Upload a copy of any of the following documents: </p><ul><li>A letter from an employer indicating that no plans offered to the employee meet the minimum value standard</li><li>A completed Employer Coverage Tool [link] and cover letter confirmation from employer </li><li>Other documentation from the employer that says that no plans offered to the employee meet the minimum value standard</li></ul>';
	resources['ffe.ee.myAccount.eligibility.appeal.heading'] = 'What should I do if I think my eligibility results are wrong&#63;';
	resources['ffe.ee.myAccount.enroll.toDoList.customerService'] = 'Customer service:';
	resources['ffe.ee.myAccount.eidm.error.e518'] = 'The user role isn&#39;t valid. Enter valid user role.';
	resources['ffe.ee.myAccount.eidm.error.e517'] = 'Invalid format. Please choose another password based on the guidelines provided.';
	resources['ffe.ee.myAccount.eidm.error.e516'] = 'The password isn&#39;t valid. Try again.';
	resources['ffe.ee.myAccount.eidm.error.e514'] = 'The user account is invalid.';
	resources['ffe.ee.myAccount.eidm.error.e513'] = 'Two or more answered to the Security questions are the same. Enter different answers to the security questions.';
	resources['ffe.ee.myAccount.eidm.error.e512'] = 'Two or more answered to the security questions are the same. Enter different answers to the security questions.';
	resources['ffe.ee.myAccount.eidm.error.e511'] = 'An error has occurred. Contact the help desk.';
	resources['ffe.ee.myAccount.eidm.error.e510'] = 'Two or more answers to the security questions are the same. Enter different answers to the security questions.';
	resources['ffe.ee.myAccount.coverage.Inconsistencies'] = 'Inconsistencies';
	resources['ffe.ee.myAccount.idProofing.button.helpDesk'] = 'I already verified my identity over the phone';
	resources['ffe.ee.myAccount.eidm.error.e509'] = 'An error has occurred.';
	resources['ffe.ee.myAccount.eidm.error.e508'] = 'An error has occurred.';
	resources['ffe.ee.myAccount.eidm.error.e507'] = 'An error has occurred.';
	resources['ffe.ee.myAccount.eidm.error.e506'] = 'Your email can&#39;t be verified.';
	resources['ffe.ee.myAccount.eidm.error.e505'] = 'An error has occurred.';
	resources['ffe.ee.myAccount.eidm.error.e504'] = 'An error has occurred.';
	resources['ffe.ee.myAccount.eidm.error.e503'] = 'This password is incorrect. You either entered an old password or an incorrect format. Try again.';
	resources['ffe.ee.myAccount.eidm.error.e502'] = 'This password is old. Enter your new password.';
	resources['ffe.ee.myAccount.eidm.error.e501'] = 'Incorrect format. Choose a password based on the guidelines provided.';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type178'] = 'Notice';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type177'] = 'Document showing deferred compensation payment(s)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type176'] = 'Document listing loan proceeds';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type175'] = 'Documentation showing inheritance of cash or property';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type174'] = 'Documentation of prizes, settlements, or awards, including court-ordered awards';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type173'] = 'Worker&#39;s compensation document or check stub';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type172'] = 'Check stub(s)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type171'] = 'Recent check stub showing current amount and frequency of amount';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type170'] = 'Court or agency records for alimony payments';
	resources['ffe.ee.myAccount.registration.answerThree'] = 'Answer 3';
	resources['ffe.ee.myAccount.enroll.toDoList.personalizedGroups'] = 'Personalized groups';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type169'] = 'Ledger or other records showing dates and total amount received';
	resources['ffe.ee.myAccount.reportLifeChanges.learn'] = 'Learn how changes affect your coverage&#46;';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type168'] = 'Form 1040 Schedule C (rents) or E (royalties)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type167'] = 'Statement showing current pension, annuity, or retirement amount and frequency of amount';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type166'] = 'Form 1099-R';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type165'] = 'Signed time sheets and receipt of payroll';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type164'] = 'Tax return forms';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type163'] = '1040 ES from last 90 days';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type162'] = 'Letter from employer or contract with employer';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type161'] = 'Recent paystub(s)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type160'] = 'Last year&#39;s tax return';
	resources['ffe.ee.myAccount.accountSettings.employer.primaryBusinessAddress'] = 'Primary Business Address';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.topTasksHeading4'] = 'File an appeal';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.topTasksHeading3'] = 'Payments and Invoices';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.topTasksHeading2'] = 'Account Settings';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.topTasksHeading1'] = 'Manage Employee Roster';
	resources['ffe.ee.myAccount.label.address2'] = 'Address Line 2';
	resources['ffe.ee.myAccount.label.address1'] = 'Address Line 1';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type159'] = 'U.S. Coast Guard Merchant Mariner card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type158'] = 'Authentic Document from a Tribe declaring membership of an individual';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type157'] = 'Military dependent identification card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type156'] = 'U.S. Military draft card or draft record';
	resources['ffe.ee.myAccount.enroll.toDoList.leftHeading'] = 'General tasks';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type155'] = 'School identification card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type154'] = 'Tax form(s)';
	resources['ffe.ee.myAccount.eligibility.appeal.stateMedicaidAgency'] = '[state Medicaid agency]';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type153'] = 'Government mail (SSA statement, DMV notice)';
	resources['ffe.ee.myAccount.idProofing.upload.successMessage'] = 'Success! Your file(s) were uploaded successfully. They&#39;ll be reviewed and the results of your identity verification will be emailed to you at [email address].';
	resources['ffe.ee.myAccount.registration.confirmPassword'] = 'Confirm password';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type152'] = 'Utility bill';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type151'] = 'School enrollment documentation';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type150'] = 'Lease agreement';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type149'] = 'Mortgage deed showing primary residency';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type148'] = 'Mortgage payment receipt';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type147'] = 'State ID';
	resources['ffe.ee.myAccount.verificationNotice.heading'] = 'Verification expired.';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type146'] = 'Letter or statement of Children&#39;s Health Insurance Program (CHIP) benefits';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type145'] = 'Letter or statement of Medicare benefits';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type144'] = 'Letter from Peace Corps';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type143'] = 'Letter from Veterans Administration';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type142'] = 'Statement of health benefits';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type141'] = 'Letter from health insurer including coverage termination date';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type140'] = 'Other documentation from the employer participating in the SHOP that says that the employee isn&#39;t eligible for health coverage';
	resources['ffe.ee.myAccount.idProofing.upload.errorMessage3'] = 'File upload was canceled.  Review the file list, and try again&#46;';
	resources['ffe.ee.myAccount.idProofing.upload.errorMessage2'] = 'Your document couldn&amp;#39;t be uploaded at this time&amp;#46; Note the maximum upload size is 10MB. Please try again&amp;#46;';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type139'] = 'Completed Employer Coverage Tool [link] and a cover letter signed by the employer participating in the SHOP';
	resources['ffe.ee.myAccount.registration.Verification.pageTitle'] = 'Verify Account';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type138'] = 'Letter from an employer participating in the SHOP that says the employee isn&#39;t offered coverage';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type137'] = 'Other documentation from the employer with the new premium amount (and how often the employee would pay the amount).';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type136'] = 'A completed Employer Coverage Tool with new employer coverage information and a cover letter signed by the employer';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type135'] = 'Letter from the employer about the employer&#39;s coverage. The letter must include information about the about whether the employer offers a plan that meets the minimum value standard and the cost of the employee&#39;s share for the coverage (the "premium").';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type134'] = 'Other documentation from the employer that says the employee doesn&#39;t qualify for any coverage that meets the minimum value standard';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type133'] = 'Letter from an employer that says the employee doesn&#39;t qualify for any coverage that meets the minimum value standard';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type132'] = 'Completed Employer Coverage Tool and a cover letter signed by the employer';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type131'] = 'U.S. American Indian/Alaska Native tribal enrollment documentation/tribal census record - must contain biographical information';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type130'] = 'Document issued by BIA recognizing individual as American Indian';
	resources['ffe.ee.myAccount.registration.alert.description2'] = 'We sent an email to <%=email%> letting you know that your profile wasn&#39;t created.';
	resources['ffe.ee.myAccount.registration.alert.description1'] = 'Please wait a few moments and try again&#46;';
	resources['ffe.ee.myAccount.inconsistencies.medch11.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type129'] = 'Document issued by HIS indicating individual is/was eligible for HIS services as an American Indian';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type128'] = 'Certificate of Indian status card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type127'] = 'Certificate of decree of ½ Indian blood';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type126'] = 'Authentic document from a tribe declaring membership for an individual';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type125'] = 'Tribal Card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type124'] = 'Official release papers from institution';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type123'] = 'Travel/business reimbursement pay';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type122'] = 'Residuals';
	resources['ffe.ee.myAccount.inconsistencies.apcsr7.shortdescription'] = 'Verify that [FN] does not have an offer of health coverage from employer';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type121'] = 'Vacation pay';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type120'] = 'Substitute/assistant pay';
	resources['ffe.ee.myAccount.idProofing.contact.label.emailAddress'] = 'Email address';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type119'] = 'Deferred compensation payments';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type118'] = 'Sick pay';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type117'] = 'Severance pay';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type116'] = 'Bonus/incentive payments';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type115'] = 'Royalties';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type114'] = 'Proceeds of a loan';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type113'] = 'Interests and dividends income';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type112'] = 'Money from the sale, exchange or replacement of things you own';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type111'] = 'Strike pay and other benefits from unions';
	resources['ffe.ee.myAccount.applicationDetails.description'] = 'Here&#39;s your current application information:';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type110'] = 'Inheritances in cash or property';
	resources['ffe.ee.myAccount.label.number'] = 'Number';
	resources['ffe.ee.myAccount.secContactModal.authorizeQuestion'] = 'Only secondary contact can be authorized to be as secondary account holder. Do you want to authorize <%=authorizedName%> become your Secondary Account Holder.';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type109'] = 'Gifts and contributions';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type108'] = 'Prizes, settlements, and awards, including court-ordered awards';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type107'] = 'Worker&#39;s compensation';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type106'] = 'Pensions from any government or private source';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type105'] = 'Annuities';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type104'] = 'Most recent quarterly or year-to-date profit and loss statement';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type103'] = 'Signed time sheets and receipt of payroll, if you have employees';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type102'] = 'Bank Statements (personal & business) and cancelled checks';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type101'] = 'Bookkeeping records Receipts for all allowable expenses';
	resources['ffe.ee.myAccount.inconsistencies.in15.description'] = 'Verify information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type100'] = '1065 Schedule K1 with Schedule E';
	resources['ffe.ee.myAccount.inconsistencies.apcsr4.shortdescription'] = 'Verify that [FN] does not have an offer of health coverage from employer';
	resources['ffe.ee.myAccount.home.description'] = 'Description';
	resources['ffe.ee.myAccount.accountSettings.employer.authorization.question'] = 'Do you want to Authorize this person to be a Secondary Account Holder?';
	resources['ffe.ee.myAccount.coverage.QHP'] = 'Qualified Health Plans';
	resources['ffe.ee.myAccount.applicationDetails.eligibility.done'] = 'Done';
	resources['ffe.ee.myAccount.idProofing.results.description3NoReferenceId'] = 'Call the Health Insurance Marketplace Call Center at 1-800-318-2596 to discuss any issues with verifying your identity. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.inconsistencies.apcsr1.shortdescription'] = 'Verify [FN]&#39;s yearly income';
	resources['ffe.ee.myAccount.profile.changePasswordOnce'] = 'NOTE - You can only change your password once every 24 hours';
	resources['ffe.ee.myAccount.addEmployeeModal.upload.description2'] = 'Select and download either blank or previously uploaded template first. If you already have a completed roster template, please proceed to the next step.';
	resources['ffe.ee.myAccount.addEmployeeModal.upload.description1'] = 'To upload a completed roster template, you must use our template.';
	resources['ffe.ee.myAccount.myPlans.terminate.finalModal.description2'] = 'If you think you made a mistake, or have other questions about your terminated coverage, call the Health Insurance Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.myPlans.terminate.finalModal.description1'] = 'The coverage will end on [effective end date].';
	resources['ffe.ee.myAccount.registration.lastName'] = 'Last name';
	resources['ffe.ee.myAccount.idProofing.results.submit2'] = 'You can submit documents that prove your identity.';
	resources['ffe.ee.myAccount.idProofing.results.submit1'] = 'You can submit documents that prove your identity.';
	resources['ffe.ee.myAccount.coverageAndBenefits.pageTitle'] = 'Coverage & Benefits';
	resources['ffe.ee.myAccount.registration.step1.hiddenText'] = 'Marketplace Account Registration - Sign Up - Step 1';
	resources['ffe.ee.myAccount.registration.answerOne'] = 'Answer 1';
	resources['ffe.ee.myAccount.profile.profileLevel2US.firstName'] = 'First Name';
	resources['ffe.ee.myAccount.authorizations.label.authorizationType'] = 'Type:';
	resources['ffe.ee.myAccount.notifications.notices.mail'] = 'Get notices in the mail&#58;';
	resources['ffe.ee.myAccount.registration.createProfile'] = 'Create account';
	resources['ffe.ee.myAccount.idProofing.button.continueProofing'] = 'Verify my identity';
	resources['ffe.ee.myAccount.profile.notVerified'] = 'Identity not verified';
	resources['ffe.ee.myAccount.settings.password'] = 'Password';
	resources['ffe.ee.myAccount.inconsistencies.apcsr7.description'] = 'Verify [FN] doesn&#39;t have an offer of coverage from a job';
	resources['ffe.ee.myAccount.idProofing.hidden.step4'] = 'you are in step 4';
	resources['ffe.ee.myAccount.idProofing.hidden.step2'] = 'step 2 of 2';
	resources['ffe.ee.myAccount.idProofing.hidden.step1'] = 'step 1 of 2';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.deedOrTitle'] = 'Property deed or title';
	resources['ffe.ee.myAccount.registration.accountNotCreated.govDelivery'] = 'We had an issue in sending you an email&#46;  Please create a new account with a different username&#59; however&#44; if you choose to use the same username&#44; please wait until 48 hours to create another account&#46;';
	resources['ffe.ee.myAccount.inconsistencies.in06.description'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.idProofing.contact.label.phoneType'] = 'Phone type';
	resources['ffe.ee.myAccount.title.balance'] = 'My Account Balance';
	resources['ffe.ee.myAccount.registration.step2.pageTitle'] = 'Sign Up - Step 2';
	resources['ffe.ee.myAccount.idProofing.warning'] = 'Important&#58;';
	resources['ffe.ee.myAccount.secContactModal.businessAddress'] = 'Primary Business Address';
	resources['ffe.ee.myAccount.inconsistencies.medch30.description'] = 'Verify [FN]&#39;s Social Security number (SSN)';
	resources['ffe.ee.myAccount.employerCoverage.header1'] = 'Application for Coverage';
	resources['ffe.ee.myAccount.myCoverage.pageTitle'] = 'My Coverage';
	resources['ffe.ee.myAccount.application.status.effectuated'] = 'Active';
	resources['ffe.ee.myAccount.label.welcomeToMyAccount'] = 'Welcome to your secure FFE My Account';
	resources['ffe.ee.myAccount.agentBrokerSearch.applicationState'] = 'Application state';
	resources['ffe.ee.myAccount.registration.ifUsernameForgoten'] = 'If you forgot your username&#44;';
	resources['ffe.ee.myAccount.EmployeeHomePage.employeePostAppCompUS.youPay'] = 'You pay:';
	resources['ffe.ee.myAccount.employee.removeEmployee'] = 'Remove Employee';
	resources['ffe.ee.myAccount.coverage.discountUsage.description'] = 'Lorem ipsum dolor sit amet&#44; consectetur adipiscing elit&#46; Cras rhoncus vehicula lorem&#44; non posuere felis mattis non&#46; Aenean nisl metus&#44; pellentesque a tristique nec&#44; accumsan at turpis&#46;';
	resources['ffe.ee.myAccount.label.confirmEmailAddress'] = 'Confirm Email Address';
	resources['ffe.ee.myAccount.coverage.medicaid'] = 'Medicaid';
	resources['ffe.ee.myAccount.coverage.johnDoe'] = 'John Doe&#39;s Job Income';
	resources['ffe.ee.myAccount.documentUpload.change'] = 'Change';
	resources['ffe.ee.myAccount.registration.accountNotCreated.createSystemUser'] = 'The user account could not be saved&#46;  Please create a new account with a different username&#59; however&#44; if you choose to use the same username&#44; please wait until 48 hours to create another account&#46;';
	resources['ffe.ee.myAccount.settings.label.confirmPassword'] = 'Please confirm your new password';
	resources['ffe.ee.myAccount.reportLifeChanges.discardButton'] = 'discard changes';
	resources['ffe.ee.myAccount.inconsistencies.program.medicaid'] = 'Medicaid eligibility';
	resources['ffe.ee.myAccount.authorizations.modalStep'] = 'you are in step 1 of 1';
	resources['ffe.ee.myAccount.inconsistencies.status.open'] = 'Verify';
	resources['ffe.ee.myAccount.bulletinBoard.notice.IdProofFailure'] = 'You have a <a href="#">notice available</a> about your identity verification.';
	resources['ffe.ee.myAccount.label.saturday'] = 'Saturday';
	resources['ffe.ee.myAccount.logIn.pageTitle1'] = 'Log In';
	resources['ffe.ee.myAccount.inconsistencies.qe5.detaildescription'] = '<p>Send the Marketplace proof of naturalized or derived citizenship, including your Naturalization Certificate or Certificate of Citizenship, by [Date]. [FN] wont qualify to enroll in coverage through the Marketplace if documents arent provided by [Date].</p>';
	resources['ffe.ee.myAccount.settings.label.currentPassword'] = 'Please enter your current password';
	resources['ffe.ee.myAccount.forgotPassword.notReset'] = 'Your password could not be reset.';
	resources['ffe.ee.myAccount.resetPassword.description'] = 'Please create a new password.';
	resources['ffe.ee.myAccount.home.notifications.viewEligibilityResults'] = 'View your eligibility results.';
	resources['ffe.ee.myAccount.home.PremiumDiscountUsage'] = 'Premium tax credit usage';
	resources['ffe.ee.myAccount.profile.primaryPhone.newNumber'] = 'Please enter your new phone number';
	resources['ffe.ee.myAccount.forgotPassword.incorrect.alertDescription1'] = 'You answered one or more of your security questions incorrectly.';
	resources['ffe.ee.myAccount.inconsistencies.in17.shortdescription'] = 'Verify [FN]&#39;s income for the current month';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.topTasks'] = 'TOP TASKS';
	resources['ffe.ee.myAccount.idProofing.results.heading3CallNow'] = 'Please call the Help Desk now&#46;';
	resources['ffe.ee.myAccount.coverage.myPlans'] = 'My plans &amp; programs';
	resources['ffe.ee.myAccount.inconsistencies.goBack.button'] = 'TAKE ME BACK';
	resources['ffe.ee.myAccount.inconsistencies.medch38.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.nav.accountSettings'] = 'Account Settings';
	resources['ffe.ee.myAccount.security.questionsMotherMaidenName'] = 'What is you mother&#39;s maiden name?';
	resources['ffe.ee.myAccount.employeeMiddleName'] = 'Middle';
	resources['ffe.ee.myAccount.inconsistencies.fileUpload.warning3'] = 'Warning: The file type is invalid.';
	resources['ffe.ee.myAccount.inconsistencies.fileUpload.warning2'] = 'Warning: The server is currently unavailable. Please try again later.';
	resources['ffe.ee.myAccount.inconsistencies.fileUpload.warning1'] = 'Warning: Select the document type before selecting the file to upload.';
	resources['ffe.ee.myAccount.registration.waitToCreateProfile'] = 'Please wait a few moments and try again.';
	resources['ffe.ee.myAccount.profile.profileLevel2US.reportLifeChangeLink'] = 'report a life change here';
	resources['ffe.ee.myAccount.inconsistencies.qe13.shortdescription'] = 'Verify [FN]&#39;s status as an American Indian or Alaska Native  ';
	resources['ffe.ee.myAccount.coverage.estimatedTimeRemainingApplication'] = 'Estimated time remaining for the application&#58;';
	resources['ffe.ee.myAccount.home.demoTool.disableValidation'] = 'Disable Validation';
	resources['ffe.ee.myAccount.nav.messages'] = 'Messages';
	resources['ffe.ee.myAccount.inconsistencies.qe10.shortdescription'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.coverage.date'] = 'Date';
	resources['ffe.ee.myAccount.reportLifeChanges.continueButton'] = 'Continue making updates';
	resources['ffe.ee.myAccount.coverage.timeSpan'] = '15 minutes - 2 hours';
	resources['ffe.ee.myAccount.registration.verification.unsuccessful.hiddenTextH1'] = 'Marketplace Account Registration - Sign Up - Email Verification - Unsuccessful';
	resources['ffe.ee.myAccount.EmployeeHomePage.employeePostAppCompUS.reportLifeChange'] = 'Report a life change';
	resources['ffe.ee.myAccount.profile.verificationUnderReview'] = 'Verification under review';
	resources['ffe.ee.myAccount.idProofing.contact.label.lastName'] = 'Last name';
	resources['ffe.ee.myAccount.addEmployeeModal.numberOfEmployees'] = 'Enter number of employees. Remember to include yourself.';
	resources['ffe.ee.myAccount.profile.LOALandingPage.possessiveNoun.suffix'] = '&#39;s';
	resources['ffe.ee.myAccount.enroll.toDoList.requiredPrograms'] = 'Task required for multiple programs';
	resources['ffe.ee.myAccount.registration.signUpHeader'] = 'Create a Marketplace account';
	resources['ffe.ee.myAccount.security.info'] = 'We take security seriously. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra dictum nisl vitae tincidunt.';
	resources['ffe.ee.myAccount.hidden.youAreInStep'] = 'you are in step';
	resources['ffe.ee.myAccount.upgradeLite.error.genericError'] = 'An unexpected system error has occurred while contacting Experian to verify your information&#46; Please contact Experian Help desk at 1&#45;855&#45;339&#45;7880&#46;';
	resources['ffe.ee.myAccount.registration.almostThere.hiddenText'] = 'Marketplace Account Registration - Sign Up - Email Verification';
	resources['ffe.ee.myAccount.inconsistencies.medch9.description'] = 'Verify [FN]&#39; naturalized or derived citizenship';
	resources['ffe.ee.myAccount.authorizations.heading2'] = 'People authorized to access this application';
	resources['ffe.ee.myAccount.registration.questionOne'] = 'Question 1';
	resources['ffe.ee.myAccount.enroll.toDoList.amountDue'] = 'Amount due:';
	resources['ffe.ee.myAccount.registration.accountNotCreated.challengeQuestions.same.desc'] = 'Please note that two or more answers to the security questions cannot be the same. You must provide distinct answers to the chosen security questions.';
	resources['ffe.ee.myAccount.inconsistencies.qe7.description'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.notifications.language.spanish'] = 'Spanish';
	resources['ffe.ee.myAccount.secContactModal.mailingAddress.line2'] = 'Mailing address line 2';
	resources['ffe.ee.myAccount.secContactModal.mailingAddress.line1'] = 'Mailing address line 1';
	resources['ffe.ee.myAccount.manageEmployee.print'] = 'Print Roster';
	resources['ffe.ee.myAccount.idProofing.ccrQuestionsIncorrect.header'] = 'Verify your identity';
	resources['ffe.ee.myAccount.accountSettings.employer.primaryBusinessAddress.description'] = 'Check here if the Primary Business Address is the same as Primary Mailing Addresss';
	resources['ffe.ee.myAccount.inconsistencies.apcsr18.shortdescription'] = 'Review information about [FN]&#39;s coverage through a job';
	resources['ffe.ee.myAccount.idProofing.guide.info'] = 'Why we need this information?';
	resources['ffe.ee.myAccount.profile.profileLevel1US.suffix.select'] = 'Select...';
	resources['ffe.ee.myAccount.notifications.notices.success.line2'] = 'Allow 3&#45;5 business days to take effect&&#46;';
	resources['ffe.ee.myAccount.notifications.notices.success.line1'] = 'Success: Your changes have been saved.';
	resources['ffe.ee.myAccount.label.state'] = 'State';
	resources['ffe.ee.myAccount.inconsistencies.apcsr15.shortdescription'] = 'Verify information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.inconsistencies.medch18.detaildescription'] = '<p>Send the Marketplace proof that [FN]&#39;s [[spouse] or [parent]] is an honorably discharged veteran or active duty member of the military by [date= end of clock]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Military record</li><li>Letter from Veterans Administration</li></ul>';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.employerSponsoredBenefitsHealth.button.makePayments'] = 'Make Payments';
	resources['ffe.ee.myAccount.enroll.toDoList.medicaid.stateInfo'] = 'Your information has been sent to [name of state&#39;s Medicaid agency]. Someone who works at [name of state&#39;s Medicaid agency] will contact you soon.Medicaid eligibility is based on income and family size. If you qualify, you get free or low-cost care and don&#39;t need to buy a Marketplace plan. To learn more about your state&#39;s Medicaid program, visit your state&#39;s Medicaid website .';
	resources['ffe.ee.myAccount.agentBrokerClient.button.startApplication'] = 'Start application';
	resources['ffe.ee.myAccount.inconsistencies.apcsr12.shortdescription'] = 'Verify [FN]  will no longer be offered health coverage through a job';
	resources['ffe.ee.myAccount.login.header'] = 'Log In';
	resources['ffe.ee.myAccount.inconsistencies.qe6.detaildescription'] = '<p>Send the Marketplace proof of naturalized or derived citizenship, including your Naturalization Certificate or Certificate of Citizenship, by [date inconsistency period ends]. [FN] wont qualify to enroll in coverage through the Marketplace if documents arent provided by [Date].<br/>[FN] can also their update immigration status with the U.S. Department of Homeland Security, U.S. Citizenship and Immigration Services (USCIS). For more information about how to correct your immigration status with the Department of Homeland Security, please contact USCIS by calling the National Customer Service Center at 1-800-375-5283 or by visiting www.infopass.uscis.gov.</p>';
	resources['ffe.ee.myAccount.idProofing.button.continueWithAppplication'] = 'Continue to my application';
	resources['ffe.ee.myAccount.applicationDetails.eligibility.noConsis'] = 'You have no inconsistences';
	resources['ffe.ee.myAccount.inconsistencies.qe7.shortdescription'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.idProofing.successMessage3'] = 'Your file&#40;s&#41; were uploaded successfully. They&#39;ll be reviewed and the results of your identity verification will be emailed to you at [email address]&#46;';
	resources['ffe.ee.myAccount.employerHomePage.employerChoiceStageUS.topTasksHeading4.description4'] = 'Description';
	resources['ffe.ee.myAccount.inconsistencies.medch40.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.enroll.toDoList.helpLink'] = 'Explain this task';
	resources['ffe.ee.myAccount.inconsistencies.qe4.shortdescription'] = 'Verify [FN]&#39;s citizenship';
	resources['ffe.ee.myAccount.notifications.general.success.line2'] = 'Allow 3&#45;5 business days to take effect&&#46;';
	resources['ffe.ee.myAccount.notifications.general.success.line1'] = 'Your changes have been saved&#46;';
	resources['ffe.ee.myAccount.label.forgotPassword'] = 'Forgot Password?';
	resources['ffe.ee.myAccount.label.ext'] = 'Ext';
	resources['ffe.ee.myAccount.coverage.getStarted'] = 'verify your identity';
	resources['ffe.ee.myAccount.applicationDetails.eligibility.description'] = 'You have unresolved inconsistencies. You need to provide additional documentation.';
	resources['ffe.ee.myAccount.home.notifications.eligibleFor'] = 'your application to find out what you are eligible for.';
	resources['ffe.ee.myAccount.notifications.general.header'] = 'Notifications';
	resources['ffe.ee.myAccount.coverage.eligibilityResults'] = 'Eligibility results';
	resources['ffe.ee.myAccount.inconsistencies.medch45.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.inconsistencies.medch2.detaildescription'] = '<p>Send the Marketplace proof that [FN] lives in [state] by [Date]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Driver&#39;s license</li><li>State ID</li><li>Mortgage payment receipt</li><li>Mortgage deed showing primary residency</li><li>Lease agreement</li><li>School enrollment documentation</li><li>Utility bill</li><li>Government mail (Social Security statement, DMV notice)</li></ul>';
	resources['ffe.ee.myAccount.home.hidden.heading2'] = 'View Eligibility';
	resources['ffe.ee.myAccount.profile.LOALandingPage.employer.day1Alert'] = 'If you came here to enroll your company in a healthcare plan, you will have to come back after XX/XX/XXXX';
	resources['ffe.ee.myAccount.home.yourSavedPlans'] = 'Your saved plans&#58;';
	resources['ffe.ee.myAccount.inconsistencies.apcsr8.description'] = 'Verify [FN] has an offer of coverage from a job that is unaffordable';
	resources['ffe.ee.myAccount.idProofing.questions.description'] = 'Answer these questions so we can verify your identity.';
	resources['ffe.ee.myAccount.profile.updateName'] = 'To change your name you must call 1-800-XXX-XXXX';
	resources['ffe.ee.myAccount.inconsistencies.in07.description'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.eligibilityResults.planEligibility'] = 'Qualified Health Plan eligibility';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type99'] = 'Financial Aid transcript form for current semester/school year';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type98'] = 'Agricultural income certificate';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type97'] = 'Proof of gambling winnings';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type96'] = 'Military LES';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type95'] = '1099-G';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type94'] = '1099-MISC';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type93'] = 'Proof of tribal income';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type92'] = 'Document or letter from Social Security Administration';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type91'] = 'Letter from government agency for unemployment benefits';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type90'] = 'Self-employed ledger';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type89'] = 'Legal documents that establish amount and frequency of alimony';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type88'] = 'Court records for alimony and records of agency through which alimony is paid';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type87'] = 'Form SSA 1099 Social Security benefits statement';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type86'] = 'Document or letter from Social Security Administration (SSA)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type85'] = 'Bank or investment fund statement';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type84'] = 'Copy of a check paid to the household member';
	resources['ffe.ee.myAccount.link.home'] = 'Home';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type83'] = 'Lease agreement';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type82'] = 'Cost of living adjustment letter and other benefit verification notices';
	resources['ffe.ee.myAccount.inconsistencies.medch31.description'] = 'Verify [FN]&#39; Residency';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type81'] = 'Letter from employer';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type80'] = 'Pay stub';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type79'] = 'Wages and tax statement (W-2)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type78'] = 'Tax return';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type77'] = 'Current orders showing active duty in the Army, Navy, Air Force, Marine Corps, or Coast Guard';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type76'] = 'Veteran&#39;s discharge certificate showing “Honorable” discharge';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type75'] = 'Resident of American Samoa Card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type74'] = 'Document indicating a member of a federally-recognized Indian tribe or American Indian born in Canada';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type73'] = 'Tribal documentation that demonstrates membership in a federally recognized tribe';
	resources['ffe.ee.myAccount.inconsistencies.medch14.shortdescription'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type72'] = 'Evidence showing foreign born in the Canal Zone or Republic of Panama';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type71'] = 'Evidence showing foreign born to U.S. citizen parent(s)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type70'] = 'Statement from adoption agency';
	resources['ffe.ee.myAccount.notifications.marketingEmail.header'] = 'Marketing Email';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type69'] = 'Military record';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type68'] = 'U.S. Civil Service employment record';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type67'] = 'Early U.S. school record';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type66'] = 'U.S. religious record';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type65'] = 'Certificate statement from a U.S. consular official';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type64'] = 'Final U.S. adoption decree';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type63'] = 'Machine Readable Immigrant Visa (with IR3 or IH3 Code)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type62'] = 'U.S. Citizen Identification Card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type61'] = 'Consular Report of Birth Abroad';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type60'] = 'Certification of Report of Birth';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type59'] = 'Insurance Application Eligibility Notice';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type58'] = 'Certification of Birth Abroad';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type57'] = 'US Passport';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type56'] = 'I-873 Northern Mariana Card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type55'] = 'I-872 American Indian Card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type53'] = 'IRS Form 1040';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type52'] = 'Federal Drivers License';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type51'] = 'State Drivers License';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type50'] = 'State Voter Identification Card';
	resources['ffe.ee.myAccount.home.enrollmentPeriod.closeButton'] = 'Close alert message';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type49'] = 'US Federal Identification Card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type48'] = 'US Public Birth Certificate';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type47'] = 'Social Security Card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type46'] = 'Marriage License';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type45'] = 'Divorce Decree';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type44'] = 'Employer Identification Card';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type43'] = 'High School Diploma';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type42'] = 'Deed for Property';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type41'] = 'I-797 Notice Of Action';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type40'] = 'OT4 Administrative stay by DHS';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type39'] = 'OT3 Document Indicating Withholding of removal';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type38'] = 'OT2 Cuban/Haitian Entrant';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type37'] = 'OT1 Certification from HHS/ORR';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type36'] = 'Plan Metadata';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type35'] = 'Manifest File';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type34'] = 'CDM XML';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type33'] = 'FFE XML';
	resources['ffe.ee.myAccount.applicationDetails.button.back'] = 'Take me back';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type32'] = 'NCQA CDM XML';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type31'] = 'NCQA FFE XML';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type30'] = 'URAC CDM XML';
	resources['ffe.ee.myAccount.inconsistencies.in15.detaildescription'] = '<p>[FN] - You need to return to the application and provide information about health coverage from employers. The Marketplace cant determine your eligibility for a tax credit and cost-sharing reductions (lower copayments, coinsurance and deductibles) without this information. If you need help, call the Marketplace at at the phone number provided below.</p>';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type29'] = 'URAC FFE XML';
	resources['ffe.ee.myAccount.home.notifications.regularNotification'] = 'Regular Notification&#58;';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type28'] = 'NS4 Non-citizen who is lawfully present in American Samoa';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type27'] = 'NS3 Office of Refugee Resettlement (ORR) eligibility letter (if under 18)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type26'] = 'NS2 Non-citizen who is lawfully present in American Samoa under the immigration laws of American Samoa.';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type25'] = 'NS1 Members of a Federally-recognized Indian tribe';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type24'] = 'DS2019 (Certificate of Eligibility for Exchange Visitor (J-1) Status)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type23'] = 'I-20 (Certificate of Eligibility for Nonimmigrant (F-1) Student Status)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type22'] = 'Foreign Passport';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type21'] = 'I-94 (Arrival/Departure Record) in Unexpired Foreign Passport';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type20'] = 'I-94 (Arrival/Departure Record)';
	resources['ffe.ee.myAccount.profile.error'] = 'Important:';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type19'] = 'Temporary I-551 Stamp (on passport or I-94)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type18'] = 'Machine Readable Immigrant Visa (with Temporary I-551 Language)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type17'] = 'Naturalization Certificate';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type16'] = 'Certificate of Citizenship';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type15'] = 'I-766 (Employment Authorization Card)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type14'] = 'I-688B (Employment Authorization Document)*';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type13'] = 'I-688A (Employment Authorization Card)*';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type12'] = 'I-688 (Temporary Resident Card)*';
	resources['ffe.ee.myAccount.inconsistencies.medch44.detaildescription'] = '<p>Send the Marketplace proof that [FN]&#39;s [[spouse] or [parent]] is an honorably discharged veteran or active duty member of the military by [Date]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Military record</li><li>Letter from Veterans Administration</li></ul>';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type11'] = 'I-571 (Refugee Travel Document)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type10'] = 'I-551 (Permanent Resident Card)';
	resources['ffe.ee.myAccount.label.zipCode'] = 'ZIP code';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.passport'] = 'U&#46;S&#46; Passport';
	resources['ffe.ee.myAccount.removeEmployee.confirm'] = 'Please confirm that you want to remove the selected employee:';
	resources['ffe.ee.myAccount.authorizations.button.add'] = 'Add an authorized user';
	resources['ffe.ee.myAccount.inconsistencies.medch22.description'] = 'Verify [FN]&#39; current income';
	resources['ffe.ee.myAccount.applicationDetails.link.expand'] = 'Expand';
	resources['ffe.ee.myAccount.home.noSavedPlans.link'] = 'viewing plans in your area.';
	resources['ffe.ee.myAccount.idProofing.results.heading6'] = 'Your identity is still being verified&#46;';
	resources['ffe.ee.myAccount.idProofing.results.heading5'] = 'We&#39;re still not able to verify your identity&#46;';
	resources['ffe.ee.myAccount.idProofing.results.heading4'] = 'Submit documents that prove your identity.';
	resources['ffe.ee.myAccount.idProofing.results.heading3'] = 'Call the Experian help desk.';
	resources['ffe.ee.myAccount.idProofing.results.heading2'] = 'Your identity wasn&#39;t verified&#46;';
	resources['ffe.ee.myAccount.idProofing.results.heading1'] = 'Your identity has been verified';
	resources['ffe.ee.myAccount.inconsistencies.apcsr14.detaildescription'] = '<p>[FN] reported that an employer will no longer offer health coverage that is affordable or meets the minimum value standard. [FN] may be eligible for a tax credit and cost&#45;sharing reductions (lower copayments, coinsurance and deductibles) if you send the Marketplace one of the following documents to confirm that [FN] no longer qualifies for employer coverage by [Date]. Upload a copy of one of the following documents by [Date]:</p><ul><li>A completed Employer Coverage Tool [link] with new employer coverage information and a cover letter signed by the employer</li><li>A letter from the employer about the employer&#39;s coverage. The letter must include information about the about whether the employer offers a plan that meets the minimum value standard and the cost of the employee&#39;s share for the coverage (the "premium"). Provide this information about the lowest cost individual plan offered by the employer. If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didn&#39;t receive any other discounts based on wellness programs. </li><li>Other documentation from the employer with the new premium amount (and how often the employee would pay the amount). If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didn&#39;t receive any other discounts based on wellness programs.</li></ul>';
	resources['ffe.ee.myAccount.uploadTemplate'] = 'Upload Template';
	resources['ffe.ee.myAccount.inconsistencies.medch19.detaildescription'] = '<p>6) Send the Marketplace proof of [FN]&#39;s eligible immigration status by [Date]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date].  Send a copy of the following document:</p><ul><li>Letter or certificate of Victim of Trafficking status</li></ul>';
	resources['ffe.ee.myAccount.inconsistencies.medch4.shortdescription'] = 'Verify [FN]&#39; Residency';
	resources['ffe.ee.myAccount.inconsistencies.medch1.shortdescription'] = 'Verify [FN]&#39;s Social Security number (SSN)';
	resources['ffe.ee.myAccount.eligibility.applicationIncomplete'] = 'Your application is incomplete';
	resources['ffe.ee.myAccount.inconsistencies.in03.detaildescription'] = '<p> [FN] - Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.</p>';
	resources['ffe.ee.myAccount.profile.profileLevel1US.suffix'] = 'Suffix';
	resources['ffe.ee.myAccount.accountSettings.employer.federalEin'] = 'Federal Employer Identification Number (EIN)';
	resources['ffe.ee.myAccount.inconsistencies.medch32.detaildescription'] = '<p>Send the Marketplace proof that [FN] plans to live in [state] by [Date]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Driver&#39;s license</li><li>State ID</li><li>Mortgage payment receipt</li><li>Mortgage deed showing primary residency</li><li>Lease agreement</li><li>School enrollment documentation</li><li>Utility bill</li><li>Government mail (Social Security statement, DMV notice)</li></ul>';
	resources['ffe.ee.myAccount.eligibility.inProgress.heading'] = 'In-progress application';
	resources['ffe.ee.myAccount.registration.stateLabel'] = 'State you live in';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.other'] = 'Other';
	resources['ffe.ee.myAccount.notifications.general.email'] = 'Email';
	resources['ffe.ee.myAccount.terminate.finish.modal'] = 'Finish';
	resources['ffe.ee.myAccount.label.lastName'] = 'Last Name';
	resources['ffe.ee.myAccount.agentBrokerSearch.header'] = 'Look up the client&#39;s application';
	resources['ffe.ee.myAccount.coverage.applicationNumber'] = 'Application Number&#58;';
	resources['ffe.ee.myAccount.registration.accountAlreadyExists.hiddenText'] = 'Marketplace Account Registration &#45; Sign Up &#45; Account Creation Unsuccessful';
	resources['ffe.ee.myAccount.viewOnlineStatement'] = 'View Online Statement';
	resources['ffe.ee.myAccount.notifications.success'] = 'Success!';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.merchantMarine'] = 'U&#46;S&#46; Coast Guard Merchant Mariner card';
	resources['ffe.ee.myAccount.profile.LOALandingPage.applyEmployeeCoverageLink'] = 'Apply to offer healthcare coverage to my employees';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.married'] = 'Marriage';
	resources['ffe.ee.myAccount.th.action'] = 'Actions';
	resources['ffe.ee.myAccount.profile.primaryPhone.updateToNumber'] = 'I want to get news and updates sent by text messages to this number';
	resources['ffe.ee.myAccount.lookUpBenefits'] = 'Look up Benefits';
	resources['ffe.ee.myAccount.registration.verification.userDoesntExist'] = 'Oops&#46; That user doesnt exist&#46;';
	resources['ffe.ee.myAccount.notifications.notices.description2'] = 'Notices will always be sent to your Message Center&#46;';
	resources['ffe.ee.myAccount.home.devTool.employerChoice'] = 'Employer Choice Stage';
	resources['ffe.ee.myAccount.notifications.TextMessages.sent'] = 'No text messages sent';
	resources['ffe.ee.myAccount.registration.profileCreateAccountFailed'] = 'Your profile couldn&#39;t be created at this time.';
	resources['ffe.ee.myAccount.accountSettings.employer.faxNumber'] = 'Fax Number';
	resources['ffe.ee.myAccount.inconsistencies.medch3.detaildescription'] = '<p>2) Send the Marketplace proof that [FN] plans to live in [state] by [Date]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Driver&#39;s license</li><li>State ID</li><li>Mortgage payment receipt</li><li>Mortgage deed showing primary residency</li><li>Lease agreement</li><li>School enrollment documentation</li><li>Utility bill</li><li>Government mail (Social Security statement, DMV notice)</li></ul>';
	resources['ffe.ee.myAccount.eidm.error.e139'] = 'Invalid format for suffix.';
	resources['ffe.ee.myAccount.eidm.error.e138'] = 'Invalid format for answers of security questions.';
	resources['ffe.ee.myAccount.eidm.error.e137'] = 'Invalid format for Zip Code Extension.';
	resources['ffe.ee.myAccount.eidm.error.e136'] = 'Invalid format for Zip Code.';
	resources['ffe.ee.myAccount.eidm.error.e135'] = 'Invalid format for City.';
	resources['ffe.ee.myAccount.reportLifeChanges.discard.description'] = 'You are about delete any updates you have made to your application&#46; These changes have not be submitted and your eligibility and enrollment will be unaffected by deleting them&#46;';
	resources['ffe.ee.myAccount.eidm.error.e134'] = 'Invalid format for Home Address Line 2.';
	resources['ffe.ee.myAccount.eidm.error.e133'] = 'Invalid format for Home Address Line 1.';
	resources['ffe.ee.myAccount.eidm.error.e132'] = 'Invalid format for Last Name.';
	resources['ffe.ee.myAccount.eidm.error.e131'] = 'Invalid format for Middle Name.';
	resources['ffe.ee.myAccount.eidm.error.e130'] = 'Invalid format for First Name.';
	resources['ffe.ee.myAccount.logInTerms.heading'] = 'Terms & Conditions';
	resources['ffe.ee.myAccount.eidm.error.e129'] = 'Invalid State given as part of address. Please enter the valid State.';
	resources['ffe.ee.myAccount.eidm.error.e128'] = 'Invalid format. Please choose another password based on the guidelines provided.';
	resources['ffe.ee.myAccount.eidm.error.e127'] = 'Your password can&#39;t contain your user ID.';
	resources['ffe.ee.myAccount.eidm.error.e125'] = 'An error occurred.';
	resources['ffe.ee.myAccount.eidm.error.e124'] = 'Our records indicate you&#39;ve already registered with EIDM. If you&#39;ve forgotten your username, select "Forgot Username." If you&#39;re not already registered, review the information you&#39;ve entered.';
	resources['ffe.ee.myAccount.eidm.error.e123'] = 'User must be over 18 to register.';
	resources['ffe.ee.myAccount.eidm.error.e122'] = 'Invalid format. Enter a valid E-mail address. Valid E-mail address format is user&#38;email.com. You may use hyphen (&#45;), apostrophe (&#39;), and underscore (&#95;) as needed.';
	resources['ffe.ee.myAccount.eidm.error.e121'] = 'Your password can&#39;t be validated.';
	resources['ffe.ee.myAccount.eidm.error.e120'] = 'Password does not match the Confirm Password';
	resources['ffe.ee.myAccount.profile.LOALandingPage.becomeAuthorizedLink'] = 'Become authorized to apply for someone outside of my household';
	resources['ffe.ee.myAccount.eidm.error.e119'] = 'E-mail address entered in the E-mail Address and Confirm E-mail Address fields do not match.';
	resources['ffe.ee.myAccount.eidm.error.e118'] = 'You must provide answers to all challenge  questions to proceed.';
	resources['ffe.ee.myAccount.eidm.error.e117'] = 'The system is unavailable.';
	resources['ffe.ee.myAccount.eidm.error.e116'] = 'This date of birth isn&#39;t valid.';
	resources['ffe.ee.myAccount.eidm.error.e115'] = 'E-mail address entered in the E-mail Address and Confirm E-mail Address fields do not match.';
	resources['ffe.ee.myAccount.eidm.error.e114'] = 'Two or more answers to the security questions are the same. Enter different answers to the security questions.';
	resources['ffe.ee.myAccount.eidm.error.e113'] = 'Invalid format. Enter a valid Primary Phone Number.';
	resources['ffe.ee.myAccount.eidm.error.e112'] = 'Invalid format. Enter a valid Social Security Number.';
	resources['ffe.ee.myAccount.eidm.error.e111'] = 'Important: Password does not match the confirm password.';
	resources['ffe.ee.myAccount.eidm.error.e110'] = 'This username already exists. Enter a different username.';
	resources['ffe.ee.myAccount.eidm.error.e109'] = 'Invalid format. Please try again.';
	resources['ffe.ee.myAccount.eidm.error.e108'] = 'Invalid format. Please choose another password based on the guidelines provided.';
	resources['ffe.ee.myAccount.eidm.error.e107'] = 'Please provide answers to all the above questions to proceed.';
	resources['ffe.ee.myAccount.eidm.error.e106'] = 'An error occurred when contacting Experian to verify your information. Call the Experian help desk at 1-855-339-7880 for help.';
	resources['ffe.ee.myAccount.eidm.error.e105'] = 'Your information can&#39;t be verified. Review your information before trying to register with this system again, and make changes, if needed. If the information you entered is correct, contact t the Experian Support Center help desk at [N] and provide [R] for help.';
	resources['ffe.ee.myAccount.eidm.error.e104'] = 'Your information can&#39;t be verified. Review your information before trying to register with this system again. If the information you entered is correct, contact the Experian Verification Support Services at [phone #].';
	resources['ffe.ee.myAccount.eidm.error.e103'] = 'Your information can&#39;t be verified. To continue with your Marketplace application, call the Experian Verification Support Services at [phone number] and tell them this number: [###].';
	resources['ffe.ee.myAccount.eidm.error.e102'] = 'Your information can&#39;t be verified. To verify your information, call the Experian Verification Support Services at [phone number] and tell them this number: [###]. You can continue setting up your Marketplace account now by selecting "OK," but you&#39;ll have limited access until your information is verified.';
	resources['ffe.ee.myAccount.eidm.error.e101'] = 'Your information can&#39;t be verified. Review the information you entered, and make changes, if needed. If the information you entered is correct, call the Experian Verification Support Services at [phone number] and tell them this number: [###]. You can continue setting up your Marketplace account now by selecting "OK," but you&#39;ll have limited access until your information is verified.';
	resources['ffe.ee.myAccount.eidm.error.e100'] = 'Your information can&#39;t be verified. Review the information you entered, and make changes, if needed.';
	resources['ffe.ee.myAccount.inconsistencies.in03.shortdescription'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.idProofing.warningMessage3'] = 'Your file(s) were removed successfully&#46; However, to verify your identity, you must upload at least one document&#46;';
	resources['ffe.ee.myAccount.idProofing.warningMessage2'] = 'Be sure to make any changes to your information before you continue&#46;';
	resources['ffe.ee.myAccount.idProofing.warningMessage1'] = 'Your attempt to verify your identity was unsuccessful&#46; Review your information&#44; and try again&#46;';
	resources['ffe.ee.myAccount.button.tryAgain'] = 'Try again';
	resources['ffe.ee.myAccount.terminatePlans.button'] = 'TERMINATE ALL PLANS';
	resources['ffe.ee.myAccount.home.status.enrollmentInProgress'] = 'Enrollment in Progress';
	resources['ffe.ee.myAccount.inconsistencies.medch20.detaildescription'] = '<p>Send the Marketplace proof of [FN]&#39;s immigration status by [Date]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by Date].  [FN] should update their student status with the school, or ask the school to update the status in the Student and Exchange Visitor Information System (SEVIS).  Or you can upload a copy of the following document:</p><ul><li>Letter from school that proves [FN] is maintaining legal status</li></ul><p>For more information about maintaining your status, see <a href="http://studyinthestates.dhs.gov/students/maintain-your-status" target="_blank">http://studyinthestates.dhs.gov/students/maintain-your-status</a>. For more information about how to update immigration status with DHS, contact U.S. Citizenship and Immigration Services by calling the National Customer Service Center at 1&#45;800&#45;375&#45;5283.</p>';
	resources['ffe.ee.myAccount.idProofing.button.upload'] = 'Upload documents';
	resources['ffe.ee.myAccount.coverage.selectApplication'] = 'Select Application&#58;';
	resources['ffe.ee.myAccount.idProofing.contact.label.firstName'] = 'First name';
	resources['ffe.ee.myAccount.inconsistencies.medch24.shortdescription'] = 'Verify [FN]&#39; current income';
	resources['ffe.ee.myAccount.security.question4.enter'] = 'Input your answer for the fourth security question';
	resources['ffe.ee.myAccount.profile.profileLevel1US.userName'] = 'Username';
	resources['ffe.ee.myAccount.home.incomeChange'] = 'Income change, moving, children, etc.';
	resources['ffe.ee.myAccount.employerCoverage.appForCoverage'] = 'Application for Coverage';
	resources['ffe.ee.myAccount.profile.verified'] = 'Identity verified';
	resources['ffe.ee.myAccount.inconsistencies.medch21.shortdescription'] = 'Verify [FN]&#39; current income';
	resources['ffe.ee.myAccount.inconsistencies.resolve.heading'] = 'Resolve inconsistencies';
	resources['ffe.ee.myAccount.inconsistencies.qe8.description'] = 'Verify [FN]’s immigration status';
	resources['ffe.ee.myAccount.idProofing.contact.label.streetAddress'] = 'Street address';
	resources['ffe.ee.myAccount.sponsoredBenefitsSideMenu.heading4'] = 'Payments and Invoices';
	resources['ffe.ee.myAccount.sponsoredBenefitsSideMenu.heading3'] = 'Applications for Coverage';
	resources['ffe.ee.myAccount.sponsoredBenefitsSideMenu.heading2'] = 'Manage Employees';
	resources['ffe.ee.myAccount.sponsoredBenefitsSideMenu.heading1'] = 'Plans &amp; Employer Sponsored Benefits';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.status'] = 'Status: Active';
	resources['ffe.ee.myAccount.home.resumeApplication'] = 'Your application is incomplete';
	resources['ffe.ee.myAccount.startApplication.pagetitle'] = 'Start Application';
	resources['ffe.ee.myAccount.inconsistencies.in16.detaildescription'] = '<p>[FN] - You need to send the Marketplace proof of your yearly income for 2014. Examples of documents you can send include:</p><ul><li>Wages and tax statement (W-2)</li><li>Pay stub</li><li>Letter from employer</li><li>Cost of living adjustment letter and other benefit verification notices</li><li>Lease agreement</li><li>Copy of a check paid to the household member</li><li>Bank or investment fund statement</li><li>Document or letter from Social Security Administration (SSA)</li><li>Form SSA 1099 Social Security benefits statement</li><li>Self-employed ledger</li><li>Letter from government agency for unemployment benefits</li></ul>';
	resources['ffe.ee.myAccount.notifications.notices.header'] = 'Notices';
	resources['ffe.ee.myAccount.shared.deadline'] = '03/01/2014';
	resources['ffe.ee.myAccount.forgotPassword.h1HiddenText'] = 'Marketplace Account Registration - Forgot Password';
	resources['ffe.ee.myAccount.inconsistencies.medch45.detaildescription'] = '<p>Send the Marketplace proof of [FN]&#39;s eligible immigration status by [Date]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date].  Send a copy of the following document:</p><ul><li>Letter or certificate of Victim of Trafficking status</li></ul>';
	resources['ffe.ee.myAccount.inconsistencies.medch50.description'] = 'Verify [FN]&#39; citizenship status';
	resources['ffe.ee.myAccount.inLineEmailAddress'] = 'Email address';
	resources['ffe.ee.myAccount.btn.Profile'] = 'Profile';
	resources['ffe.ee.myAccount.expiredPassword.confirmPassword'] = 'Confirm new password';
	resources['ffe.ee.myAccount.registration.marketplaceCouldNotProcessRequest'] = 'We weren&#39;t able to process your request because we couldn&#39;t find a Marketplace profile that matched the information that you provided.';
	resources['ffe.ee.myAccount.registration.alertHeading'] = 'Important: Your account couldnt be created at this time.';
	resources['ffe.ee.myAccount.removePersonModal.pressNext'] = 'Press Next to be taken to your application to make these changes.';
	resources['ffe.ee.myAccount.applicationDetails.incomplete.heading'] = 'Your application is incomplete';
	resources['ffe.ee.myAccount.inconsistencies.qe10.description'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.manageEmployee.applicationStatus'] = 'Application status';
	resources['ffe.ee.myAccount.registration.verification.failed.tryAgainLater'] = 'Try to verify your account again in a few minutes.';
	resources['ffe.ee.myAccount.sponsoredBenefitsSideMenu.Title'] = 'My coverage';
	resources['ffe.ee.myAccount.authorizations.label.action'] = 'Action:';
	resources['ffe.ee.myAccount.inconsistencies.apcsr15.detaildescription'] = '<p>You need to return to the application by [Date] and provide information about [FN]&#39; offer of coverage. The Marketplace can&#39;t determine [FN]&#39;s eligibility for a tax credit and cost&#45;sharing reductions (lower copayments, coinsurance and deductibles) without this information. If you need help, call the Marketplace at 1&#45;800&#45;318&#45;2596. TTY users should call 1&#45;855&#45;889&#45;4325.</p>';
	resources['ffe.ee.myAccount.profile.LOALandingPage.viewEmployerHealthcareLink'] = 'View my employee application for healthcare coverage through the Marketplace';
	resources['ffe.ee.myAccount.coverage.terminateCoverage'] = 'Terminate coverage';
	resources['ffe.ee.myAccount.inconsistencies.medch41.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.home.noSavedPlans'] = 'You have no saved plans.';
	resources['ffe.ee.myAccount.inconsistencies.apcsr15.description'] = 'Verify information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.medicaid'] = 'Medicaid Transfer';
	resources['ffe.ee.myAccount.inconsistencies.in04.detaildescription'] = '<p>[FN] - You need to provide more information on your application so the Marketplace can determine whether you are eligible for health coverage. Call 1-800-318-2596 (TTY: 1-855-889-4325) to get help answering questions on the application about your immigration status.</p>';
	resources['ffe.ee.myAccount.inconsistencies.medch33.detaildescription'] = '<p>There&#39;s a difference between what [FN] entered on the application and what the Marketplace has verified with other government records. You need to provide the Marketplace one of the documents below by [Date]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Driver&#39;s license</li><li>State ID</li><li>U.S. passport</li><li>If not a U.S. citizen, provide current immigration documents from the Department of Homeland Security (DHS)</li></ul>';
	resources['ffe.ee.myAccount.authorizations.description2'] = 'You didn&#39;t add any authorized users to your account.';
	resources['ffe.ee.myAccount.inconsistencies.apcsr9.description'] = 'Verify [FN] has an offer of employer coverage that doesn&#39;t meet the minimum value standard';
	resources['ffe.ee.myAccount.employerCoverage.summary3'] = 'Updated:';
	resources['ffe.ee.myAccount.employerCoverage.summary2'] = 'Application Number:';
	resources['ffe.ee.myAccount.employerCoverage.summary1'] = 'Originally Submitted:';
	resources['ffe.ee.myAccount.expiredPassword.newPassword'] = 'New password';
	resources['ffe.ee.myAccount.enroll.toDoList.pay'] = 'Pay';
	resources['ffe.ee.myAccount.application.status.transferred'] = 'Transferred';
	resources['ffe.ee.myAccount.enroll.toDoList.reviewPlan'] = 'Review your health plan';
	resources['ffe.ee.myAccount.eidm.error.e1001'] = 'The role you requested is already assigned to you.';
	resources['ffe.ee.myAccount.terminate.description.confirm'] = 'Your coverage has been terminated';
	resources['ffe.ee.myAccount.manageEmployee.employeeRoster'] = 'EMPLOYEE ROSTER';
	resources['ffe.ee.myAccount.notifications.general.how'] = 'How would you like to get notifications?';
	resources['ffe.ee.myAccount.inconsistencies.medch32.description'] = 'Verify [FN]&#39; Residency';
	resources['ffe.ee.myAccount.profile.label.newPassword'] = 'Enter your new password';
	resources['ffe.ee.myAccount.inconsistencies.medch4.detaildescription'] = '<p>1) Send the Marketplace proof that [FN] lives in [state] by [Date]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Driver&#39;s license</li><li>State ID</li><li>Mortgage payment receipt</li><li>Mortgage deed showing primary residency</li><li>Lease agreement</li><li>School enrollment documentation</li><li>Utility bill</li><li>Government mail (Social Security statement, DMV notice)</li></ul>';
	resources['ffe.ee.myAccount.login.pageTitle1'] = 'My Account Login';
	resources['ffe.ee.myAccount.coverage.menu.premiumDiscountUsage'] = 'Your premium tax credit';
	resources['ffe.ee.myAccount.profile.profileLevel1US.password.new'] = 'Please enter your new password';
	resources['ffe.ee.myAccount.idProofing.resubmitDocuments.link2'] = 'If you aren&#39;t able to upload your documents now, ';
	resources['ffe.ee.myAccount.idProofing.resubmitDocuments.link1'] = 'If you aren&#39;t able to resubmit your information or upload your documents now, ';
	resources['ffe.ee.myAccount.logout.heading'] = 'Please log in again&#46;&#46;&#46;';
	resources['ffe.ee.myAccount.registration.forgotPassword.securityQuestionsHiddenText'] = 'Marketplace Account Registration - Forgot Password - Security Questions';
	resources['ffe.ee.myAccount.downloadText3'] = 'for adding employees to a spreadsheet template';
	resources['ffe.ee.myAccount.downloadText2'] = 'instructions';
	resources['ffe.ee.myAccount.downloadText1'] = 'Download';
	resources['ffe.ee.myAccount.resetPassword.confirmPassword'] = 'Confirm password';
	resources['ffe.ee.myAccount.enroll.toDoList.review.healthPlan3'] = 'Review and confirm your health coverage';
	resources['ffe.ee.myAccount.inconsistencies.in16.description'] = 'Verify [FN]&#39;s yearly income';
	resources['ffe.ee.myAccount.enroll.toDoList.review.healthPlan1'] = 'Review or change health plan for [FN].';
	resources['ffe.ee.myAccount.inconsistencies.medch21.detaildescription'] = '<p>Send the Marketplace proof of what the income for [FN1, FN2, and FN3, etc.] will be for this month (month and year that application is submitted) by [Date]. Do not submit documents that are more than 60 days old. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. The allowable documents for income types include: </p><ul><li>[ Pay stub]</li><li>[ Letter from employer]</li><li>[ Cost of living adjustment letter and other benefit verification notices]</li><li>[ Lease agreement]</li><li>[ Copy of a check paid to the household member]</li><li>[ Bank or investment fund statement]</li><li>[ Self-employed ledger]</li><li>[ Document or letter from Social Security Administration (SSA)]</li><li>[ Form SSA 1099 Social Security benefits statement]</li><li>[ Letter from government agency for unemployment benefits]</li></ul><p>If you have tribal income, send proof of this income.</p>';
	resources['ffe.ee.myAccount.home.postAppCompletion.threeHundred'] = '$300';
	resources['ffe.ee.myAccount.resetPassword.confirmPassword.instructions'] = 'You must enter the same password as the Password field.';
	resources['ffe.ee.myAccount.idProofing.hidden.stepModal'] = 'You are in';
	resources['ffe.ee.myAccount.idProofing.contact.label.zipCode'] = 'Zip code';
	resources['ffe.ee.myAccount.inconsistencies.in10.shortdescription'] = 'Verify that [FN] is not enrolled in Medicaid or the Children&#39;s Health Insurance Program (CHIP)';
	resources['ffe.ee.myAccount.profile.profileLevel1US.welcome'] = 'Welcome <%=memberFirstName%>';
	resources['ffe.ee.myAccount.myProfile.identityVerificationPending'] = 'Verification under review';
	resources['ffe.ee.myAccount.inconsistencies.medch31.shortdescription'] = 'Verify [FN]&#39; Residency';
	resources['ffe.ee.myAccount.registration.resetPassword'] = 'reset it now';
	resources['ffe.ee.myAccount.inconsistencies.medch23.description'] = 'Verify [FN]&#39; current income';
	resources['ffe.ee.myAccount.logIn.username'] = 'Username';
	resources['ffe.ee.myAccount.upgradeLite.error.e542'] = 'Important: We can’t verify your identity. Call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.upgradeLite.error.e537'] = 'Important: We can’t verify your identity. Call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.profile.profileLevel2US.lastName'] = 'Last Name';
	resources['ffe.ee.myAccount.forgotPasswordQuestion'] = 'Forgot password?';
	resources['ffe.ee.myAccount.button.payments'] = 'Payments';
	resources['ffe.ee.myAccount.settings.enterEmail'] = 'Enter your new email address';
	resources['ffe.ee.myAccount.landingWelcome.pageTitle'] = 'Welcome to your Marketplace account';
	resources['ffe.ee.myAccount.eligibility.medicaid.heading'] = 'Medicaid';
	resources['ffe.ee.myAccount.forgotUsernameResults.provideDetails'] = 'Please give us the following information and we&#39;ll send you an email with instructions.';
	resources['ffe.ee.myAccount.agentBrokerQuestions.submit.button'] = 'Submit';
	resources['ffe.ee.myAccount.notifications.header'] = 'Notifications';
	resources['ffe.ee.myAccount.notifications.notices.paper'] = 'Paper notices sent by mail to:';
	resources['ffe.ee.myAccount.label.Welcome'] = 'Welcome to your secure FFE My Account';
	resources['ffe.ee.myAccount.coverage.changePlan'] = 'Change to a different plan';
	resources['ffe.ee.myAccount.home.topTasks'] = 'TOP TASKS';
	resources['ffe.ee.myAccount.agentBroker.search.pageTitle'] = 'Look up the clients application';
	resources['ffe.ee.myAccount.remove.hidden.modal'] = 'you are in step modal';
	resources['ffe.ee.myAccount.home.notifications.specialEnrollmentPeriodAvailable'] = 'Special Enrollment Period Available.';
	resources['ffe.ee.myAccount.profile.profileLevel1US.description1'] = 'Your profile contains your basic information. You can make changes here.';
	resources['ffe.ee.myAccount.applicationDetails.inconsistency.description2'] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus vehicula lorem, non posuere felis mattis non. Aenean nisl metus, pellentesque a tristique nec, accumsan at turpis.';
	resources['ffe.ee.myAccount.application.status.pending'] = 'Initial enrollment';
	resources['ffe.ee.myAccount.idProofing.contact.label.expectedFormat'] = 'XXXXX-XXXX';
	resources['ffe.ee.myAccount.link.apply'] = 'Apply Now';
	resources['ffe.ee.myAccount.registration.getFreeEmail'] = 'You need an email address to sign up. You can get one now for free:';
	resources['ffe.ee.myAccount.coverage.applicants'] = 'Applicants&#58;';
	resources['ffe.ee.myAccount.inconsistencies.medch14.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.dynamicallyLoadedPage'] = 'Dynamically Loaded Page';
	resources['ffe.ee.myAccount.readyToUploadDescription'] = 'Remember the new file will take the place of any previous spreadsheet you&#39;ve uploaded here.';
	resources['ffe.ee.myAccount.notifications.writtenLanguage.preferred'] = 'Change preferred written language';
	resources['ffe.ee.myAccount.coverage.button.changeUsage'] = 'Change Usage';
	resources['ffe.ee.myAccount.registration.SignUpSuccess.pageTitle'] = 'Sign Up - Success';
	resources['ffe.ee.myAccount.registration.contactCMSIfError'] = 'If you think you got this message in error, call 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.home.status.inProgress'] = 'Application in progress';
	resources['ffe.ee.myAccount.eligibility.appeal.description3'] = 'For further assistance, phone the Call Center at 1&#45;800&#45;318&#45;2596 &#40;TTY users should call 1&#45;855&#45;889&#45;4325&#41;&#44;';
	resources['ffe.ee.myAccount.eligibility.appeal.description2'] = 'Exchange online appeals submission will begin on 12&#47;1&#47;2013.  Or, print and mail the <a href="/can-i-appeal-a-marketplace-decision/" target="_blank">Appeals Paper Form</a> now.';
	resources['ffe.ee.myAccount.employer.mailingAddress.description'] = 'Check here if the Secondary Contact Mailing Address is the same as Primary Business Addresss';
	resources['ffe.ee.myAccount.home.postAppCompletion.john'] = 'John, Susan, and Bob';
	resources['ffe.ee.myAccount.idProofing.resubmit.pageTitle'] = 'Identity not verified';
	resources['ffe.ee.myAccount.terminatePlans.removingPerson.description2'] = 'To remove someone from a plan, you need to change your application to show they&#39;re no longer applying for coverage. This will remove him or her from all plans, including health and dental plans.  Press Next to be taken to your application to make these changes.';
	resources['ffe.ee.myAccount.title.employerCost'] = 'My Costs';
	resources['ffe.ee.myAccount.idProofing.results.code'] = 'Your code is:';
	resources['ffe.ee.myAccount.profile.profileLevel1US.textSubscription.topics'] = 'Topics:';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.miltary'] = 'U&#46;S&#46; military card or draft record';
	resources['ffe.ee.myAccount.home.eligibilityResults.status4'] = 'Review';
	resources['ffe.ee.myAccount.home.eligibilityResults.status3'] = 'Reviewed';
	resources['ffe.ee.myAccount.home.eligibilityResults.status2'] = 'Validation submitted:';
	resources['ffe.ee.myAccount.home.eligibilityResults.status1'] = 'Verification submitted:';
	resources['ffe.ee.myAccount.coverage.eligibility.description'] = 'Lorem ipsum dolor sit amet&#44; consectetur adipiscing elit&#46; Cras rhoncus vehicula lorem&#44; non posuere felis mattis non&#46; Aenean nisl metus&#44; pellentesque a tristique nec&#44; accumsan at turpis&#46;';
	resources['ffe.ee.myAccount.profile.stateLiveIn.descriptiveText'] = 'We will use your State to provide you with available coverage options.';
	resources['ffe.ee.myAccount.settings.label.newPassword'] = 'Please enter your new password';
	resources['ffe.ee.myAccount.idProofing.results.description6'] = 'The documents you submitted are still being reviewed&#46;';
	resources['ffe.ee.myAccount.idProofing.results.description5'] = 'If you verified your identity over the phone, you can try submitting your information again.';
	resources['ffe.ee.myAccount.idProofing.results.description4'] = 'Once you upload your documents&#44; they&#39;ll be reviewed&#46; The results of your identity verification will be emailed to you at [email address]&#46;';
	resources['ffe.ee.myAccount.idProofing.results.description3'] = 'Call (866)-578-5409 to verify your identity over the phone&#46; You&#39;ll speak to someone who&#39;ll ask you additional questions&#46;';
	resources['ffe.ee.myAccount.idProofing.results.description2'] = 'You won&#39;t be able to submit your application for health coverage until your identity is verified&#46;';
	resources['ffe.ee.myAccount.idProofing.results.description1'] = 'You can now fill out and submit your application for health coverage through the Marketplace&#46;';
	resources['ffe.ee.myAccount.registration.verification.unsuccessful.pageTitle'] = 'Sign Up - Email Verification - Unsuccessful';
	resources['ffe.ee.myAccount.inconsistencies.medch7.shortdescription'] = 'Verify [FN]&#39; citizenship status';
	resources['ffe.ee.myAccount.addEmployeeModal,selectRoster.previous'] = 'Previously Uploaded Roster';
	resources['ffe.ee.myAccount.home.devTool.applicationNotStarted'] = 'Application Not Started';
	resources['ffe.ee.myAccount.coverage.discount.heading3'] = 'were determined to be eligible for help with your costs. When you chose your plans, you decided how much of the Premium Discount to use&#46;';
	resources['ffe.ee.myAccount.coverage.discount.heading2'] = '&#44;';
	resources['ffe.ee.myAccount.coverage.discount.heading1'] = '[FN], [FN], and [FN] are eligible for a new tax credit that can be used right away to lower monthly premium costs (based on [application number]). When you chose your plan, you decided how much of the premium tax credit to use each month.';
	resources['ffe.ee.myAccount.accountSettings.employer.label.emailAddress'] = 'Email Address';
	resources['ffe.ee.myAccount.profile.LOALandingPage.iewCurrentCCRHeading2'] = 'Current Applications';
	resources['ffe.ee.myAccount.agentBrokerClient.description'] = 'We didn&#39;t find the client&#39;s application. Ask the client if he or she would like to start a new application. Or, you can go back and search again.';
	resources['ffe.ee.myAccount.eligibleToEnroll'] = 'See if  you are eligible and enroll in a Qualified Health Plan';
	resources['ffe.ee.myAccount.forgotUsernameResults.usernameFoundEmailSent'] = 'We sent an email to [email] with your username.';
	resources['ffe.ee.myAccount.identityVerification.pagetitle'] = 'Identity Verification';
	resources['ffe.ee.myAccount.security.question3.enter'] = 'Input your answer for the third security question';
	resources['ffe.ee.myAccount.profile.securityModal.title.updateSecurityQuestions'] = 'Security questions update';
	resources['ffe.ee.myAccount.inconsistencies.qe9.description'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.profile.profileLevel2US.changeName'] = 'To change your name you must';
	resources['ffe.ee.myAccount.inconsistencies.qe7.detaildescription'] = '<p>Provide more information on the application so the Marketplace can determine whether [FN] is eligible for coverage. [FN] wont qualify to enroll in coverage through the Marketplace if information about their immigration status isnt provided by [Date]. Call 1-800-318-2596 to get help answering questions on the application about your immigration status. TTY users should call 1-855-889-4325.</p>';
	resources['ffe.ee.myAccount.registration.step3.pageTitle'] = 'Sign Up - Step 3';
	resources['ffe.ee.myAccount.forgotPassword.description'] = 'Please give us the following information and we&#39;ll send you an email with instructions.';
	resources['ffe.ee.myAccount.inconsistencies.status.submitted'] = 'Submitted';
	resources['ffe.ee.myAccount.security.question4.select'] = 'Select your fourth security question';
	resources['ffe.ee.myAccount.userName'] = 'Username';
	resources['ffe.ee.myAccount.idProofing.upload.button.change'] = 'Change';
	resources['ffe.ee.myAccount.enroll.toDoList.choosingHealthPlan'] = 'Choosing a Health Plan';
	resources['ffe.ee.myAccount.security.header'] = 'Security';
	resources['ffe.ee.myAccount.inconsistencies.medch51.description'] = 'Verify [FN]&#39; citizenship status';
	resources['ffe.ee.myAccount.addEmployee.employment'] = 'Employment Status';
	resources['ffe.ee.myAccount.emailSentTo'] = 'An Email has been sent to';
	resources['ffe.ee.myAccount.forgotPassword.resetOfPasswordUnsuccessful.hiddenText'] = 'Marketplace Account Registration - Forgot Password - Reset Password - Unsuccessful';
	resources['ffe.ee.myAccount.idProofing.contact.format.dateOfBirth'] = 'MM&#47;DD&#47;YYYY';
	resources['ffe.ee.myAccount.notifications.writtenLanguage.info'] = 'Explanation of what this is used for...';
	resources['ffe.ee.myAccount.settings.email.settingsLink'] = 'Visit &#34;My Profile&#34; to change the email address associated with your Marketplace account.';
	resources['ffe.ee.myAccount.enroll.toDoList.chip.info'] = 'Your information has been sent to [name of state&#39;s CHIP agency]. Someone who works at [name of state&#39;s CHIP agency] will contact you soon. CHIP provides low-cost health coverage to children in families that earn too much money to qualify for Medicaid. If your children qualify, you won&#39;t need to buy a Marketplace plan to cover them. To learn more about CHIP coverage, check with your state .';
	resources['ffe.ee.myAccount.settings.email.success2'] = 'to change your account email address&#46;';
	resources['ffe.ee.myAccount.forgotUsernameResults.noMatchUsername'] = 'No usernames match the information you provided.';
	resources['ffe.ee.myAccount.idProofing.button.getStarted'] = 'Get started';
	resources['ffe.ee.myAccount.inconsistencies.qe11.description'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.idProofing.upload.documentType2'] = 'Document type&#58;';
	resources['ffe.ee.myAccount.idProofing.upload.documentType1'] = 'Document type&#58;';
	resources['ffe.ee.myAccount.coverage.menu.appplicationDetails'] = 'Applications details';
	resources['ffe.ee.myAccount.registration.madeMistakeText'] = 'If you think you made a mistake,';
	resources['ffe.ee.myAccount.healthCare'] = 'HealthCare.gov';
	resources['ffe.ee.myAccount.plansPrograms.pagetitle'] = 'My Plans & Programs';
	resources['ffe.ee.myAccount.profile.LOALandingPage.employerHealthcareLink'] = 'My employer is offering healthcare coverage through the Marketplace';
	resources['ffe.ee.myAccount.inconsistencies.in09.shortdescription'] = 'Verify that [FN] is not enrolled in Medicare';
	resources['ffe.ee.myAccount.notifications.writtenLanguage.success'] = 'Success!';
	resources['ffe.ee.myAccount.idProofing.ccrQuestions.noApplication'] = 'Dont have an application on the marketplace? <a id="ignoreApplication" href="javascript:void(0)">Click here to continue</a>';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.employerSponsoredBenefits.button.terminateShopEnrollment'] = 'Terminate SHOP Enrollment';
	resources['ffe.ee.myAccount.idProofing.getStarted.pageTitle'] = 'Verify your identity';
	resources['ffe.ee.myAccount.coverage.myPlans.enrolled'] = 'Enrolled in [NUMBERPLANS] plans';
	resources['ffe.ee.myAccount.inconsistencies.in06.shortdescription'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.home.postAppCompletion.perMonth'] = 'per month';
	resources['ffe.ee.myAccount.profile.securityModal.title.updatePassword'] = 'Password update';
	resources['ffe.ee.myAccount.profile.LOALandingPage.continueEmployerHealthcareLink'] = 'Continue my employee application for healthcare coverage through the Marketplace';
	resources['ffe.ee.myAccount.inconsistencies.medch42.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.terminate.'] = 'To remove someone from a plan, you need to change your application to show they&#39;re no longer applying for coverage. This will remove him or her from all plans, including health and dental plans.  Press Next to be taken to your application to make these changes.';
	resources['ffe.ee.myAccount.inconsistencies.apcsr16.description'] = 'Verify information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.inconsistencies.apcsr3.shortdescription'] = 'Verify [FN]&#39;s loss of  [MECType]';
	resources['ffe.ee.myAccount.idProofing.contact.label.city'] = 'City';
	resources['ffe.ee.myAccount.btn.AccountSettings'] = 'Account Settings';
	resources['ffe.ee.myAccount.initialUserName'] = 'Username';
	resources['ffe.ee.myAccount.th.submitDate'] = 'Date Submit By';
	resources['ffe.ee.myAccount.reportLifeChanges.updatesDiscard'] = 'remove all changes';
	resources['ffe.ee.myAccount.coverage.houseHold'] = 'Household';
	resources['ffe.ee.myAccount.profile.profileLevel1US.primaryPhone.supportText2'] = 'Get text updates to this number';
	resources['ffe.ee.myAccount.registration.middleName'] = 'Middle';
	resources['ffe.ee.myAccount.coverage.applicationForCoverage'] = 'Application for Coverage';
	resources['ffe.ee.myAccount.registration.verification.successHeading'] = 'Success!';
	resources['ffe.ee.myAccount.registration.returnToSignUp'] = 'Return to Create account page';
	resources['ffe.ee.myAccount.notifications.notices.noPaper'] = 'Paper notices won&#39;t be sent.';
	resources['ffe.ee.myAccount.registration.passwordNotFound.pageTitle'] = 'Forgot Password - Password Not Found';
	resources['ffe.ee.myAccount.authRepOptions'] = 'At least one Option';
	resources['ffe.ee.myAccount.registration.recoverUsername'] = 'recover it here';
	resources['ffe.ee.myAccount.registration.PasswordExpired.pageTitle'] = 'Forgot Password - Password Expired';
	resources['ffe.ee.myAccount.inconsistencies.medch33.description'] = 'Verify [FN]&#39; Social security number and related information';
	resources['ffe.ee.myAccount.label.monday'] = 'Monday';
	resources['ffe.ee.myAccount.employeeDOB'] = 'Date of birth';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type9'] = 'I-327 (Reentry Permit)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type8'] = 'G845 Supplement Form';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type7'] = 'G845 Form';
	resources['ffe.ee.myAccount.label.outOfPocket'] = 'Out of Pocket Costs';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type6'] = 'Other';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type5'] = 'Policy';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type4'] = 'SBC (Summary of Benefit Coverage)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type3'] = 'SPD (Summary Plan Description)';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type2'] = 'Prescription Drug Template';
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type1'] = 'EHB Template';
	resources['ffe.ee.myAccount.profile.profileLevel2US.title'] = 'My Profile';
	resources['ffe.ee.myAccount.application.status.004'] = 'Post App Completion';
	resources['ffe.ee.myAccount.application.status.003'] = 'Enrollment in progress';
	resources['ffe.ee.myAccount.signUpSuccess.textParagraph'] = 'With this account, you can use the Health Insurance Marketplace beginning October 1 to find health coverage that fits your budget and your needs.';
	resources['ffe.ee.myAccount.profile.LOALandingPage.appyForCoverage'] = 'Apply for new coverage';
	resources['ffe.ee.myAccount.application.status.002'] = 'View Eligilibility';
	resources['ffe.ee.myAccount.application.status.001'] = 'Application in progress';
	resources['ffe.ee.myAccount.inconsistencies.medch1.description'] = 'Verify [FN]&#39;s Social Security number (SSN)';
	resources['ffe.ee.myAccount.inconsistencies.in17.description'] = 'Verify [FN]&#39;s income for the current month';
	resources['ffe.ee.myAccount.applicationDetails.inconsistency.description'] = 'Inconsistencies are situations where we must confirm information that you submitted, or we need you to submit more information.';
	resources['ffe.ee.myAccount.authRepUsername'] = 'Authorized representative&#39;s Username';
	resources['ffe.ee.myAccount.inconsistencies.apcsr1.detaildescription'] = '<p>Send the Marketplace proof of [FN] yearly income for [coverage year] yearly income by [Date].  [FN]&#39;s may get less or no help paying for coverage, and may have to pay back some or all of the tax credit received between now and then if documents aren&#39;t provided by [Date].  Examples of documents you can send include:</p><ul><li>Wages and tax statement (W&#45;2)</li><li>Pay stub</li><li>Letter from employer</li><li>Cost of living adjustment letter and other benefit verification notices</li><li>Lease agreement</li><li>Copy of a check paid to the household member</li><li>Bank or investment fund statement</li><li>Document or letter from Social Security Administration (SSA)</li><li>Form SSA 1099 Social Security benefits statement</li><li>Self&#45;employed ledger</li><li>Letter from government agency for unemployment benefits</li></ul>';
	resources['ffe.ee.myAccount.home.resumeEnrollmentButton'] = 'Resume Enrollment';
	resources['ffe.ee.myAccount.agentPrimaryPhone'] = 'Phone number';
	resources['ffe.ee.myAccount.forgotUsernameResults.usernameNotFound'] = 'Your username couldn&#39;t be found, because there is no Marketplace account that matches the information you provided.';
	resources['ffe.ee.myAccount.agentBrokerNoAssisterQuestions.alertHeading'] = 'There aren&#39;t any assistor questions for this application.';
	resources['ffe.ee.myAccount.inconsistencies.qe8.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] wont qualify for coverage through the Marketplace if documents aren’t provided by [Date].</p>';
	resources['ffe.ee.myAccount.accountCreationSuccess'] = 'Your Account was succesfully created!';
	resources['ffe.ee.myAccount.inconsistencies.medch24.description'] = 'Verify [FN]&#39; current income';
	resources['ffe.ee.myAccount.idProofing.guide.description6'] = 'You started an application for health coverage, but haven&#39;t verified your identity. If you don&#39;t verify your identity, you won&#39;t be able to submit your application. What would you like to do&#63;';
	resources['ffe.ee.myAccount.idProofing.guide.description5'] = 'You can represent a trusted person&#44; family member&#44; friend&#44; or partner to help with his&#47;her Marketplace application&#44; including signing and submitting the application on his&#47;her behalf&#46;';
	resources['ffe.ee.myAccount.idProofing.guide.description4'] = 'Before you continue with the application and become a&#47;an &#91;authorized representative or secondary account holder&#93; for &#91;First name, last name&#39;s&#93; &#91;Individual or Employee application&#93;&#44; we need to get some more information about you&#46;';
	resources['ffe.ee.myAccount.idProofing.guide.description3'] = 'You have reached the maximum attempts for verifying your identity online&#46; You can call (866)-578-5409 to verify your identity over the phone, or, you can upload documents that prove your identity&#46;  What would you like to do&#63;';
	resources['ffe.ee.myAccount.idProofing.guide.description2'] = 'You started an application for health coverage, but haven&#39;t verified your identity. If you don&#39;t verify your identity, you won&#39;t be able to submit your application.';
	resources['ffe.ee.myAccount.idProofing.guide.description1'] = 'Before you continue&#44; we need to ask you a few questions to verify your identity&#46;';
	resources['ffe.ee.myAccount.coverage.discount.applicationNumber'] = 'Application #';
	resources['ffe.ee.myAccount.inconsistencies.fileUpload.remove'] = 'REMOVE';
	resources['ffe.ee.myAccount.label.zip'] = 'Zip';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.diploma'] = 'High school or college diploma &#40;including high school equivalency diplomas&#41;';
	resources['ffe.ee.myAccount.TEST'] = 'Apples to Apples';
	resources['ffe.ee.myAccount.terminate.step2.confirm'] = 'I have fully read and understand that I&#39;m choosing to terminate coverage from this plan for any members in my household that are currently enrolled in this plan. I also understand that there may be tax implications from terminating a plan early.';
	resources['ffe.ee.myAccount.initialFirstName'] = 'First Name';
	resources['ffe.ee.myAccount.settings.email'] = 'Email';
	resources['ffe.ee.myAccount.employerHomePage.employerPostAppCompletionUS.button.makePayment'] = 'MAKE PAYMENTS';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.school'] = 'School identification card';
	resources['ffe.ee.myAccount.registration.step2.hiddenText'] = 'Marketplace Account Registration - Sign Up - Step 2';
	resources['ffe.ee.myAccount.tab.cic'] = 'Change in Circumstances';
	resources['ffe.ee.myAccount.readyToUpload.warning'] = 'Important:';
	resources['ffe.ee.myAccount.applicationDetails.button.selectFileToUpload'] = 'SELECT FILE TO UPLOAD';
	resources['ffe.ee.myAccount.logInTerms.h1HiddenText'] = 'Marketplace Account Registration - Log In - Terms &#38; Conditions';
	resources['ffe.ee.myAccount.registration.noAccountText'] = 'If you don&#39;t have an account,';
	resources['ffe.ee.myAccount.inconsistencies.in08.description'] = 'Verify that [FN] is not enrolled in Tricare';
	resources['ffe.ee.myAccount.applicationDetails.complete.heading'] = 'Your application is complete';
	resources['ffe.ee.myAccount.registration.ResetPassword.pageTitle'] = 'Forgot Password - Reset Password';
	resources['ffe.ee.myAccount.label.birthDate'] = 'Date of birth';
	resources['ffe.ee.myAccount.registration.verification.success.hiddenTextH1'] = 'Marketplace Account Registration - Sign Up - Email Verification - Successful';
	resources['ffe.ee.myAccount.home.enrollmentIncompleteMessage'] = 'You must finish all enrollment tasks to get health coverage.';
	resources['ffe.ee.myAccount.removeEmployee.label.reason'] = 'Reason for Removal';
	resources['ffe.ee.myAccount.readyToUpload.selectFile'] = 'Select file to upload';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.financialAssistance'] = 'Determine if family qualifies for financial assistance';
	resources['ffe.ee.myAccount.inconsistencies.medch15.description'] = 'Verify [FN]&#39; immigration status';
	resources['ffe.ee.myAccount.verificationNeeded.description3'] = 'For further action please follow the instructions provided in that email.';
	resources['ffe.ee.myAccount.verificationNeeded.description2'] = 'Click the link in the email message and you&#39;ll be one step closer to having health insurance.';
	resources['ffe.ee.myAccount.verificationNeeded.description1'] = 'We sent an email to';
	resources['ffe.ee.myAccount.inconsistencies.in16.shortdescription'] = 'Sample Text';
	resources['ffe.ee.myAccount.coverage.button.programWebsite'] = 'Visit Medicaid/CHIP website';
	resources['ffe.ee.myAccount.idProofing.questions'] = 'Identity questions';
	resources['ffe.ee.myAccount.registration.listRecieveInfoFromFFM'] = 'Get information about the Marketplace';
	resources['ffe.ee.myAccount.inconsistencies.in13.shortdescription'] = 'Verify information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.inconsistencies.medch37.shortdescription'] = 'Verify [FN]&#39; naturalized or derived citizenship';
	resources['ffe.ee.myAccount.reportLifeChange.pagetitle'] = 'Report a Life Change';
	resources['ffe.ee.myAccount.home.premiumDiscount'] = 'Premium tax credit';
	resources['ffe.ee.myAccount.profile.primaryEmail.updatesToEmail'] = 'I want to have news and updates sent to this email address';
	resources['ffe.ee.myAccount.agentBrokerQuestionsIncorrect.header'] = 'Look up the client&#39;s application';
	resources['ffe.ee.myAccount.bulletinBoard.notice.Message'] = 'You have a <a href="#">notice available</a>.';
	resources['ffe.ee.myAccount.home.postAppCompletion.michael'] = 'Michael, Maddie';
	resources['ffe.ee.myAccount.accountSettings.secondaryContact'] = 'Secondary Contact';
	resources['ffe.ee.myAccount.signUpSuccess.hiddenAccessible'] = 'you are in step modal';
	resources['ffe.ee.myAccount.manageEmployee.name'] = 'Name';
	resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress'] = 'Address';
	resources['ffe.ee.myAccount.home.getStarted'] = 'Get started';
	resources['ffe.ee.myAccount.login.registeredAlready'] = 'Have an account already? Login below.';
	resources['ffe.ee.myAccount.agentBrokerQuestions.description'] = 'To find a clients Marketplace application, enter his or her information below. The easiest way to find an application is by entering the clients Marketplace application ID and application state.';
	resources['ffe.ee.myAccount.inconsistencies.in17.detaildescription'] = '<p>[FN] - Send the Marketplace proof of what the income will be for the current month. Do not submit documents that are more than 60 days old. Examples of documents you can send include:</p><ul><li>Pay stub</li><li>Letter from employer</li><li>Cost of living adjustment letter and other benefit verification notices</li><li>Lease agreement</li><li>Copy of a check paid to the household member</li><li>Bank or investment fund statement</li><li>Document or letter from Social Security Administration (SSA)</li><li>Form SSA 1099 Social Security benefits statement</li><li>Self-employed ledger</li><li>Letter from government agency for unemployment benefits</li></ul><p>If you have tribal income, send proof of this income.</p>';
	resources['ffe.ee.myAccount.applicationDetails.complete.description'] = 'Your Marketplace application is complete and has been processed. View your eligibility results to find out if you can enroll in health coverage.';
	resources['ffe.ee.myAccount.readyToUpload.warningText'] = 'Lorem ipsum...This makes you ineligible for the Small Business Health Options Program (SHOP).';
	resources['ffe.ee.myAccount.coverage.dateStarted'] = 'Date Started&#58;';
	resources['ffe.ee.myAccount.inconsistencies.medch46.detaildescription'] = '<p>Send the Marketplace proof of [FN]&#39;s immigration status by [Date]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date].  [FN] should update their student status with the school, or ask the school to update the status in the Student and Exchange Visitor Information System (SEVIS).  Or you can upload a copy of the following document:</p><ul><li>Letter from school that proves [FN] is maintaining legal status</li></ul><p>For more information about maintaining your status, see <a href="http://studyinthestates.dhs.gov/students/maintain-your-status" target="_blank">http://studyinthestates.dhs.gov/students/maintain-your-status</a>. For more information about how to update immigration status with DHS, contact U.S. Citizenship and Immigration Services by calling the National Customer Service Center at 1&#45;800&#45;375&#45;5283.</p>';
	resources['ffe.ee.myAccount.accountSettings.employer.secondaryPhone'] = 'Second phone number';
	resources['ffe.ee.myAccount.employeeEmailAddress'] = 'Email address';
	resources['ffe.ee.myAccount.inconsistencies.expand'] = 'Expand';
	resources['ffe.ee.myAccount.profile.securityModal.descriptionText'] = 'For security reasons and in order to complete the update, please provide answers to your security questions.';
	resources['ffe.ee.myAccount.upgradeLite.error.e239'] = 'Important: We can’t verify your identity. You exceeded the maximum number of attempts. Please try again later.';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.chip'] = 'CHIP Transfer';
	resources['ffe.ee.myAccount.eligibility.incomplete.heading'] = 'Your application is incomplete.';
	resources['ffe.ee.myAccount.registration.profileAlreadyExist'] = 'An account already exists with this information.';
	resources['ffe.ee.myAccount.terminatePlans.removingPerson.description'] = 'This action will require a change to your application and may require updates to other parts of your application.';
	resources['ffe.ee.myAccount.stepModal'] = 'you are in';
	resources['ffe.ee.myAccount.forgotUsernameResults.usernameFoundEmailSent.partTwo'] = 'with your username.';
	resources['ffe.ee.myAccount.inconsistencies.program.qhp'] = 'Qualified Health Plan eligibility';
	resources['ffe.ee.myAccount.accountSettings.nav.security'] = 'Security';
	resources['ffe.ee.myAccount.coverage.notEligible'] = 'Not Eligible For';
	resources['ffe.ee.myAccount.notifications.notices.changeAddress'] = 'To change your address&#44; you must';
	resources['ffe.ee.myAccount.profile.securityModal.addressDescriptionText'] = 'To update your address, please answer these questions.';
	resources['ffe.ee.myAccount.birthDate'] = 'Date of birth';
	resources['ffe.ee.myAccount.inconsistencies.apcsr16.detaildescription'] = '<p>You need to return to the application by [Date] and provide more information about [FN]&#39; coverage through a job. <br/>If the employer offers wellness programs, provide the premium that the employee would pay if they received the maximum discount for any tobacco cessation programs, and didn&#39;t receive any other discounts based on wellness programs for the employer. The Marketplace can&#39;t determine [FN]&#39;s eligibility for a tax credit and cost&#45;sharing reductions (lower copayments, coinsurance and deductibles) without this information. If you need help, call the Marketplace at 1&#45;800&#45;318&#45;2596. TTY users should call 1&#45;855&#45;889&#45;4325.</p>';
	resources['ffe.ee.myAccount.eligibility.applicationIncompleteAfter'] = 'in order                                 to determine your eligibility and enroll.';
	resources['ffe.ee.myAccount.addEmployeeModal.label.selectRoster'] = 'Select Roster';
	resources['ffe.ee.myAccount.profile.verificationPending'] = 'Identity verification pending';
	resources['ffe.ee.myAccount.authorizations.label.status'] = 'Status:';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.citizenship'] = 'Change in citizenship';
	resources['ffe.ee.myAccount.inconsistencies.apcsr2.detaildescription'] = '<p>Send the Marketplace proof that [FN] is not enrolled in [MEC type] by [Date]. [FN] won&#39;t qualify for help paying for coverage through the Marketplace if documents aren&#39;t provided by [Date]. Examples of documents you can send include:<p><ul><li>Letter from health insurer including coverage termination date</li><li>Statement of health benefits</li><li>Letter from [name of MEC type]</li></ul>';
	resources['ffe.ee.myAccount.homeLanding.applications.hiddenH1'] = 'Marketplace Account – Application Home';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.student'] = 'Change in full time student status &#40;for family member age 19-21&#41;';
	resources['ffe.ee.myAccount.accesstools'] = 'Access tools and resources to help you live healthy';
	resources['ffe.ee.myAccount.inconsistencies.qe9.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] wont qualify to enroll in coverage through the Marketplace if documents aren’t provided by [date inconsistency period ends].<br/>[FN] can also update their immigration status with the U.S. Department of Homeland Security, U.S. Citizenship and Immigration Services (USCIS). For more information about how to update immigration status with the Department of Homeland Security, contact USCIS by calling the National Customer Service Center at 1-800-375-5283.</p>';
	resources['ffe.ee.myAccount.inconsistencies.qe12.description'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.inconsistencies.in05.detaildescription'] = '<p>[FN] - There’s a difference between what you entered on the application and what the Marketplace has verified with other government records. Send a copy of one of the following documents:</p><ul><li>Military record</li><li>Letter from Veterans Administration</li></ul>';
	resources['ffe.ee.myAccount.label.yes'] = 'Yes';
	resources['ffe.ee.myAccount.logIn.forgotPassword'] = 'Forgot your password&#63;';
	resources['ffe.ee.myAccount.reportLifeChanges.examples.employerSponsored'] = 'Gain or loss of health coverage';
	resources['ffe.ee.myAccount.profile.securityModal.title.updatePhoneNumber'] = 'Phone number update';
	resources['ffe.ee.myAccount.home.enrollmentIncomplete'] = 'Enrollment incomplete';
	resources['ffe.ee.myAccount.reportLifeChanges.description3'] = 'Do you want to report a change in circumstances that may qualify you or your dependents for a Special Enrollment Period?';
	resources['ffe.ee.myAccount.reportLifeChanges.description2'] = 'Lorem ipsum dolor sit amet&#44; consectetur adipiscing elit&#46; Nulla nec varius arcu&#46; Nam vehicula imperdiet tristique&#46; Ut eu egestas leo&#46; Aliquam in felis ligula&#46; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas&#46; Nulla eget malesuada nulla&#46; Suspendisse commodo non augue a interdum&#46;';
	resources['ffe.ee.myAccount.plansPrograms.description'] = 'Now that you&#39;re enrolled, contact your insurance provider directly if you have questions about your coverage. If you need to make changes to your household information or your income, you can report a life change. ';
	resources['ffe.ee.myAccount.initialCity'] = 'City';
	resources['ffe.ee.myAccount.eligibility.complete.description'] = '<strong>Important&#58;</strong> Read your eligibility results before you enroll. We&#39;ll let you know if there are problems with your application that you&#39;ll need to resolve.';
	resources['ffe.ee.myAccount.idProofing.ccrApplicationFound.header'] = 'We have found an application that belongs to you';
	resources['ffe.ee.myAccount.agentBroker.questionResults.pageTitle'] = 'Look up the clients application';
	resources['ffe.ee.myAccount.logIn.alert.warning'] = 'Important:';
	resources['ffe.ee.myAccount.inconsistencies.apcsr11.shortdescription'] = 'Verify [FN] is losing coverage through a job';
	resources['ffe.ee.myAccount.registration.verification.pleaseAwaitResponse'] = 'Please wait&#46;&#46;&#46;';
	resources['ffe.ee.myAccount.idProofing.ccrQuestions.header'] = 'Verify your identity';
	resources['ffe.ee.myAccount.registration.mustEnterPassword'] = 'You must enter the same password as the Password field.';
	resources['ffe.ee.myAccount.forgotPassword.resetOfPasswordUnsuccessful.pageTitle'] = 'Forgot Password - Reset Password - Unsuccessful';
	resources['ffe.ee.myAccount.inconsistencies.apcsr17.description'] = 'Provide information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.secContactModal.mailingAddress'] = 'Please provide Secondary Contact mailing address';

	resources['ffe.ee.oam.error.oam7'] = 'Theres a problem. Please try again. If you continue getting this message, call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.oam.error.oam6'] = 'Youre already logged in.';
	resources['ffe.ee.oam.error.oam5'] = 'This account is locked or disabled. For help, call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.oam.error.oam4'] = 'Theres a problem. Please call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.oam.error.oam3'] = 'Theres a problem. Please try again.  ';
	resources['ffe.ee.oam.error.oam2'] = 'The information you entered isn&#39;t valid. Review this information. If you&#39;re having trouble, call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';


var oamServer = 'https://eidm.cms.gov/oam/server/authentication?type=english'; 
var oamSpanishServer = 'https://eidm.cms.gov/oam/server/authentication?type=spanish'; 
var oamSuccessURL = 'https://eidm.cms.gov/successffmeng.html';
var oamSpanishSuccessURL = 'https://eidm.cms.gov/successffmesp.html';
var oamLogoutURL = 'https://eidm.cms.gov/oam/server/logout?end_url=https://www.healthcare.gov/marketplace/global/en_US/registration';





//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBmodel.js.vsl in andromda-backbone-js-ui cartridge.
//

// Create the RegistrationBBModel Model
var Registration_RegistrationBBModel = FFEModel.extend({

    // Each Backbone Model that is not a part of a Backbone collection requires
	// a reference to a REST URL that *follows the Backbone/REST conventions*
	urlRoot : "../ee-rest/tenantId/locale/IssuerParentNOI/TODO",

	// If the Backbone Model's associated VO does not have an identifier field called
	// "id", specify the identifier field using the idAttribute property. This will be
	// use to generate the REST URL called for save and delete.
	idAttribute : "id"

});

var registrationRegistrationBBModel = new Registration_RegistrationBBModel();
//provides support for some Individual application specific Validation
//index is for the indexed fields.
var CommonValidationBBModel = FFEModel.extend(
{
	sync : Backbone._sync,
	defaults : {},
	resourceBundle : resources, //name of the resource bundle 
	namespace : "ffe.ee", //which package we are using
	index : null, //for indexed properties, change to NOT null if  used
	constructor : function(attributes) 
	{
		this.preservedValidate = _.clone(this.validate);
		Backbone.Model.prototype.constructor.call(this, attributes);
		this.bind("showCommonErrorMessage", showCommonErrorMessage);
	}
});

var commonBBValidationModel = new CommonValidationBBModel();
FFM.resources = resources; var IsDirectEnrollmentConsumerBBModel = CommonValidationBBModel.extend({

    defaults: {},

    url: environment + "/ee-rest/" + tenantId + "/" + locale + "/DirectEnrollment/isDirectEnrollmentConsumer",
    urlRoot: environment + "/ee-rest/" + tenantId + "/" + locale + "/DirectEnrollment/isDirectEnrollmentConsumer",
    //idAttribute : "userName",
    resources: resources,
    role: null
});
var isDirectEnrollmentConsumerBBModel = new IsDirectEnrollmentConsumerBBModel();var sendSecureRedirectBBModel = CommonValidationBBModel.extend({

	pageName:"indApp",
	defaults : { },
	 
	url : environment+"/ee-rest/"+tenantId+"/" +locale +"/DirectEnrollment/sendSecureRedirect",
	urlRoot: environment+"/ee-rest/"+tenantId+"/" +locale +"/DirectEnrollment/sendSecureRedirect",
	//idAttribute : "userName",
	resources : resources,
	role : null
}); 
var sendSecureRedirectBBModel = new sendSecureRedirectBBModel();var getSecureRedirectInfoBBModel = CommonValidationBBModel.extend({

	defaults : { },
	 
	url : environment+"/ee-rest/"+tenantId+"/" +locale +"/DirectEnrollment/getSecureRedirectInfo",
	urlRoot: environment+"/ee-rest/"+tenantId+"/" +locale +"/DirectEnrollment/getSecureRedirectInfo",
	//idAttribute : "userName",
	resources : resources,
	role : null
}); 
var getSecureRedirectInfoBBModel = new getSecureRedirectInfoBBModel();var CreatePersonMappingBBModel = CommonValidationBBModel.extend({

	defaults : { },
	 
	url : environment+"/ee-rest/"+tenantId+"/" +locale +"/DirectEnrollment/createPersonMapping",
	urlRoot: environment+"/ee-rest/"+tenantId+"/" +locale +"/DirectEnrollment/createPersonMapping",
	//idAttribute : "userName",
	resources : resources,
	role : null
}); 
var createPersonMappingBBModel = new CreatePersonMappingBBModel();
var registrationEIDMIntegration_createLiteEIDMAccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/createLiteEIDMAccount",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/createLiteEIDMAccount",
	idAttribute : "exchangeUserIdentifier",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationCreateLiteEIDMAccountBBModel = new registrationEIDMIntegration_createLiteEIDMAccountBBModel(initializeEIDMIntegrationCreateLiteEIDMModel());
var registrationEIDMIntegration_fetchUserSpecSecurityQuestionsEIDMAccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/fetchSecurityQuestions/",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/fetchSecurityQuestions/",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationFetchUserSpecSecurityQuestionsEIDMAccountBBModel = new registrationEIDMIntegration_fetchUserSpecSecurityQuestionsEIDMAccountBBModel();
var registrationEIDMIntegration_fetchSecurityQuestionsEIDMAccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/fetchAllSecurityQuestions/ffm",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/fetchAllSecurityQuestions/ffm",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationFetchSecurityQuestionsEIDMAccountBBModel = new registrationEIDMIntegration_fetchSecurityQuestionsEIDMAccountBBModel();
var registrationEIDMIntegration_fetchValidationRulesEIDMAccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/fetchEIDMValidations/ffm",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/fetchEIDMValidations/ffm",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationFetchValidationRulesEIDMAccountBBModel = new registrationEIDMIntegration_fetchValidationRulesEIDMAccountBBModel();
var registrationEIDMIntegration_UpdateEmailEIDMAccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateEmail",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateEmail",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationUpdateEmailEIDMAccountBBModel = new registrationEIDMIntegration_UpdateEmailEIDMAccountBBModel(initializeEIDMEmail());
var registrationEIDMIntegration_updateExpiredPasswordBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateExpiredPassword",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateExpiredPassword",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationUpdateExpiredPasswordBBModel = new registrationEIDMIntegration_updateExpiredPasswordBBModel(initializeEIDMIntegrationUpdateExpiredPasswordModel());
var registrationEIDMIntegration_updateForgotPasswordBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateForgottenPassword",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateForgottenPassword",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationUpdateForgotPasswordBBModel = new registrationEIDMIntegration_updateForgotPasswordBBModel(initializeEIDMIntegrationUpdateForgotPasswordModel());
var registrationEIDMIntegration_updateForgottenUserNameBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	//url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateForgottenUserName",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateForgottenUserName",
	//idAttribute : "userLevel",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationUpdateForgottenUserNameBBModel = new registrationEIDMIntegration_updateForgottenUserNameBBModel(initializeEIDMIntegrationUpdateForgottenUserNameModel());
var registrationEIDMIntegration_updatePasswordBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updatePassword",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updatePassword",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationUpdatePasswordBBModel = new registrationEIDMIntegration_updatePasswordBBModel(initializeEIDMIntegrationUpdatePasswordModel());
var registrationEIDMIntegration_updatePhoneNumberBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	//url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updatePhoneNumber",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updatePhoneNumber",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationUpdatePhoneNumberBBModel = new registrationEIDMIntegration_updatePhoneNumberBBModel(initializeEIDMIntegrationUpdatePhoneNumberModel());
var registrationEIDMIntegration_UpdateSecurityQuestionsEIDMAccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateSecurityQuestions",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateSecurityQuestions",
	idAttribute : "exchangeUserIdentifier",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationUpdateSecurityQuestionsEIDMAccountBBModel = new registrationEIDMIntegration_UpdateSecurityQuestionsEIDMAccountBBModel(updateEIDMSecurityQuestions());
var registrationEIDMIntegration_verifyEmailAddressEIDMAccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/verifyEmailAddress/ffm",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/verifyEmailAddress/ffm",
	idAttribute : "exchangeUserIdentifier",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationVerifyEmailAddressEIDMAccountBBModel = new registrationEIDMIntegration_verifyEmailAddressEIDMAccountBBModel(initializeEIDMIntegrationverifyEmailAddressEIDMModel());
var registrationEIDMIntegration_confirmUserLoginBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/confirmUserLogin",
	urlRoot: environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/confirmUserLogin",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var registrationEIDMIntegrationConfirmUserLoginBBModel = new registrationEIDMIntegration_confirmUserLoginBBModel();


//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
//
var AgentBrokerBBView = FFEView.extend({
    // The el property is the root element of the view.
    // You can only bind to events fired in this element or its children.
    el: $("#agentBrokerSubNav"),

    // The "model" attribute is the one that the model binding library uses
    model: (typeof(individualApplicationApplicationBBModel) != 'undefined' && !isEmpty(individualApplicationApplicationBBModel) ? individualApplicationApplicationBBModel : null),

    isDirectEnrollmentConsumerModel: isDirectEnrollmentConsumerBBModel,
    getSecureRedirectInfoModel: getSecureRedirectInfoBBModel,
    sendSecureRedirectModel: sendSecureRedirectBBModel,
    createPersonMappingModel: createPersonMappingBBModel,

    // Underscore.js template variables points to the template in the XHTML
    // file. There can be more than one template.



    theUrl: "",

    qhpEligible: null,

    // Variable through which the view can access the resource bundle. 
    resources: resources,

    // Initialize is always called first when the prototype constructor ("new")
    // is called
    initialize: function () {
        //FFEView.prototype.initialize.call(this);

        // Generally all methods in the view will require a reference to the
        // "this" context. The Underscore.js bindAll method fixes loss of 
        // context in the bound methods
        _.bindAll(this, 'render', 'refreshTemplate',
				'fetchIsDirectEnrollmentConsumer', 'sendSecureRedirect', 'getSecureRedirectInfo', 'createPersonMappingForDirectEnrollment');


        // Initialize generally completes by calling this.render
        this.render();
    },

    // The events object links all UI events in this view with their event
    // handlers
    events: {
        "click #backToPortalLink": "createPersonMappingForDirectEnrollment"
    },

    render: function () {
        this.refreshTemplate();
    },

    refreshTemplate: function () {
       // the shwing/hide of the link is handled in default.vm
       // this.fetchIsDirectEnrollmentConsumer();
    },



    fetchIsDirectEnrollmentConsumer: function () {
        var $this = this;

        this.isDirectEnrollmentConsumerModel.fetch({
            success: function (model, response) {
                $this.isDirectEnrollment = true;
                if (response === true) {
                    console.log('direct enrollment');

                    $('#agentBrokerSubNav').show();
                    $('#agentBrokerStateBar').show();
                }
                else {
                    console.log("not direct enrollment");
                    $('#agentBrokerSubNav').hide();
                    $('#agentBrokerStateBar').hide();
                }

            },
            error: function (model, response) {
                $this.isDirectEnrollment = false;

                console.log("Is direct enrollment consumer service has failed! Setting isDirectEnrollment variable to false.");
                $('#agentBrokerSubNav').hide();
                $('#agentBrokerStateBar').hide();
            }
        });
    },

    createPersonMappingForDirectEnrollment: function () {
        //create some sort of person mapping and go to Direct Enrollment
        var $this = this;
        var appId = (!isEmpty(this.model) ? this.model.get("identifier") : (!isEmpty(window.myAccountAppID) ? window.myAccountAppID : ''));
        var newCreatePersonMappingModel = new CreatePersonMappingBBModel();
        if (!isEmpty(this.model) || !isEmpty(window.myAccountAppID)) {
            newCreatePersonMappingModel.url = newCreatePersonMappingModel.urlRoot + "?applicationId=" + appId;
        }
        newCreatePersonMappingModel.save(
		null,
		{
		    success: function (model, response) {
		        $this.sendSecureRedirect();
		    },
		    error: function (model, response) {
		        console.log(response);
		    }
		});
    },

    sendSecureRedirect: function () {
        var $this = this;

        this.sendSecureRedirectModel.fetch({
            dataType: "text",
            success: function (model, response) {
                if (!isEmpty(response)) {
                    //redirect back to the Issuer site
                    $this.getSecureRedirectInfo(response);
                }
            },
            error: function (model, response) {
                console.log(response);
            }
        });
    },

    getSecureRedirectInfo: function (token) {
        //redirects back to the Issue's Partner Form/website 
        var $this = this;
        this.getSecureRedirectInfoModel.fetch({
            success: function (model, response) {
                var formAction = $this.theUrl = response["Return URL"];
                var html = "<form name='redirectToPartnerForm' id='redirectToPartnerForm'  method='post'>";
                html += "<input type='hidden' name='SAMLResponse' value='" + token + "'/>";
                html += "</form>";

                $('body').append(html);
                document.forms['redirectToPartnerForm'].action = formAction;
                document.forms['redirectToPartnerForm'].submit();
            },
            error: function (model, response) {
                console.log(response);
            }
        });
    }
});
var agentBrokerBBView = new AgentBrokerBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_LoginBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#logInPage"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	basicValidationRulesModel : registrationEIDMIntegrationFetchValidationRulesEIDMAccountBBModel,
	
	isDirectEnrollmentConsumerModel : isDirectEnrollmentConsumerBBModel,
	
	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	logInTemplate : _.template($('#logInTemplate').html()),
	//logInSignUpTemplate : _.template($('#logInSignUpTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'signIn', 'forgotPasswordLink',
				'goToSignUp','forgotUsernameLink','showAlertText',
				'fetchBasicValidationRules','initializeValidation','fetchInitialFetch',
				'addValdidationObjectsToFFM', 'submitForm', 'spanishRegex', 'englishRegex','inspectSessionForAgentBroker','makeAgentBrokerUIChanges',
				'fetchIsDirectEnrollmentConsumer');
		
		this.model.bind('refreshLogInTemplates', this.refreshTemplate);
		
		// Custom validation handlers could be added here

		//delete the stale EE Sessions- commented out as per Suresh
		//deleteStaleEESessions();
		// Initialize generally completes by calling this.render
		this.render();
		this.fetchInitialFetch();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #logInPageSignInButton" : "signIn",
		"click #loginSignUpButton" : "goToSignUp",
		"click #alertTextSignUp" : "goToSignUp",
		"click #forgotPasswordLink" : "forgotPasswordLink",
		"click #forgotUsernameLink" : "forgotUsernameLink",
		"click #loginSubmit" : "submitForm"
		
	},
	
	render : function() {
		this.refreshTemplate();
	},
	
	fetchInitialFetch : function() {
	    var $this = this;
	    if (window.registrationInitialSessionCallsComplete) {
	            $this.fetchBasicValidationRules();
	            //this.fetchBasicValidationRules();
	    } else {
	            setTimeout(function () {
	                $this.fetchInitialFetch();
	            }, 100);
	    }
	    //this.fetchBasicValidationRules();
	},
	
	refreshTemplate : function() {
		
		this.$el.empty();
		
		if(locale.indexOf("es_MX")> -1){
			this.$el.append(this.logInTemplate({
				oamServerURL : oamSpanishServer,
				oamSuccessURL : oamSpanishSuccessURL
				
			}));
		}else{
			this.$el.append(this.logInTemplate({
				oamServerURL : oamServer,
				oamSuccessURL : oamSuccessURL
			}));
		}
		
		this.initializeValidation();
		
		
	   checkDeleteSession(locale, environment, oamLogoutURL);
		
		$('input', '#logInPage').customInput();
		inspectOAMErrors(resources);
		
		this.fetchIsDirectEnrollmentConsumer();
		
	},
	
	addValdidationObjectsToFFM : function() {
		var validations = this.basicValidationRulesModel.get('validations'),
			validationsAttr,
			validationMessage;

		
		FFM.defaultValidatorRules.notBlank = ["^(?!\\s*$).+", this.resources['ffe.ee.shared.validation.notBlank']];
		//TODO: maybe modify the below to use a similar method instead.
		FFM.defaultValidatorRules.sameEmail = [function(value, $group, args) {
			var firstPassword = $("[id=" + args[0] + "]").val();
			var secondPassword = $("[id=" + args[1] + "]").val();
			if(firstPassword !== secondPassword) {
				return false;
			}
			else
			{
				return true;
			}
		}, this.resources['ffe.ee.shared.validation.sameEmail']];
		FFM.defaultValidatorRules.sameEEPassword = [function(value, $group, args) {
			var firstPassword = $("[id=" + args[0] + "]").val();
			var secondPassword = $("[id=" + args[1] + "]").val();
			if(firstPassword !== secondPassword) {
				return false;
			}
			else {
				return true;
			}
		}, this.resources['ffe.ee.shared.validation.sameEEPassword']];
		
		if(!isEmpty(validations)) {
			for(var i = 0; i < validations.length; i++) {
				if(!isEmpty(validations[i].fieldName) && !isEmpty(validations[i].regularExpression)) {
					validationsAttr = 'EIDM'+validations[i].fieldName.replace(/\s+/g, '');
					validationMessage = this.resources['ffe.ee.myAccount.notValidError'];
					
					if(FFM.defaultValidatorRules[validationsAttr] !== 'undefined') {
						FFM.defaultValidatorRules[validationsAttr] = [validations[i].regularExpression, validationMessage];
					}
					if(locale === 'es_MX') {
						this.spanishRegex(validationsAttr, validations[i], validationMessage);
					}
					else {
						this.englishRegex(validationsAttr, validations[i], validationMessage);
					}
					
					validationMessage = this.resources['ffe.ee.myAccount.notValidError']+' '+this.resources['ffe.ee.myAccount.label.userName'];
					FFM.defaultValidatorRules['notAnEmail'][1] = validationMessage;
					FFM.defaultValidatorRules['eeExt'][1] = validationMessage;
					FFM.defaultValidatorRules['eeUserName'][1] = validationMessage;
				}
			}
		}
	},
	
	spanishRegex : function( validationsAttr, validations, validationMessage ) {
		//waiting on EIDM fix for password regular expression
		if(validationsAttr === 'EIDMPassword') {
			validations.regularExpression = "((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*[=<>&()'"+'"'+"\\/]).{8,20})";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.label.password'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMFirstName') {
			validations.regularExpression = "^[\u00C0-\u00FF\u0061-\u007A\u0041-\u005A'\\-\\s]{1,20}$";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.registration.firstName'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMAddressLine1') {
			validationMessage += ' '+this.resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.line1'];
			validations.regularExpression = "^[a-zA-Z0-9._\\-,'\\s]*$";
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMAddressLine2') {
			validationMessage += ' '+this.resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.line2'];
			validations.regularExpression = "^[a-zA-Z0-9._\\-,'\\s]*$";
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMCity') {
			validationMessage += ' '+this.resources['ffe.ee.myAccount.label.city'];
			validations.regularExpression = "^[a-zA-Z \\-'\\s]*$";
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMZipCode') {
			validations.regularExpression = "[\\d]{5}";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.label.zipCode'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMLastName') {
			validations.regularExpression = "^[\u00C0-\u00FF\u0061-\u007A\u0041-\u005A'\\-\\s]{1,25}$";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.registration.lastName'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMMiddleName') {
			validations.regularExpression = "^[\u00C0-\u00FF\u0061-\u007A\u0041-\u005A'\\-\\s]{1,25}$";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.registration.middleName'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMEmail') {
			validationMessage += ' '+this.resources['ffe.ee.myAccount.registration.email'];
			validations.regularExpression = "^([a-zA-Z0-9'._-]+)@((?:[-a-zA-Z0-9]+\\.)+[a-zA-Z]{2,4})$";
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMOutofwalletAnswers') {
			validationMessage += ' '+this.resources['ffe.ee.shared.label.answer'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMUserLogin') {
			validationMessage += ' '+this.resources['ffe.ee.myAccount.label.userName'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
	},
	
	englishRegex : function( validationsAttr, validations, validationMessage ) {
		//waiting on EIDM fix for password regular expression
		if(validationsAttr === 'EIDMPassword') {
			validations.regularExpression = "((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*[=<>&()'"+'"'+"\\/]).{8,20})";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.label.password'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMFirstName') {
			validations.regularExpression = "^[a-zA-Z'\\-\\s]{1,20}$";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.registration.firstName'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMAddressLine1') {
			validations.regularExpression = "^[a-zA-Z0-9._\\-,'\\s]*$";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.line1'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMAddressLine2') {
			validations.regularExpression = "^[a-zA-Z0-9._\\-,'\\s]*$";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.line2'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMCity') {
			validations.regularExpression = "^[a-zA-Z \\-'\\s]*$";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.label.city'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMZipCode') {
			validations.regularExpression = "[\\d]{5}";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.label.zipCode'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMLastName') {
			validations.regularExpression = "^[a-zA-Z'\\-\\s]{1,25}$";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.registration.lastName'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMMiddleName') {
			validations.regularExpression = "^[a-zA-Z'\\-\\s]{1,25}$";
			validationMessage += ' '+this.resources['ffe.ee.myAccount.registration.middleName'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMEmail') {
			validationMessage += ' '+this.resources['ffe.ee.myAccount.registration.email'];
			validations.regularExpression = "^([a-zA-Z0-9'._-]+)@((?:[-a-zA-Z0-9]+\\.)+[a-zA-Z]{2,4})$";
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMOutofwalletAnswers') {
			validationMessage += ' '+this.resources['ffe.ee.shared.label.answer'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
		else if(validationsAttr === 'EIDMUserLogin') {
			validationMessage += ' '+this.resources['ffe.ee.myAccount.label.userName'];
			FFM.defaultValidatorRules[validationsAttr] = [validations.regularExpression, validationMessage];
		}
	},
	
	initializeValidation : function() {
		var eventTrigger = $("#loginSubmit"),
			formContainer = $("#loginSubmitContainer");
			
		if(formContainer.length > 0) {
			FFM.FormValidator.currentLocale = locale;
			var loginValidator = new FFM.FormValidator(formContainer, eventTrigger);
		}
	},
	
	fetchBasicValidationRules : function() {
		var $this = this;
		if(false){ // spare eidm right now
		this.basicValidationRulesModel.fetch({
			success : function(model, response) {
				$this.addValdidationObjectsToFFM();
				/* console.log(model);
				console.log(response); */
			},
			error : function(model, response) {
				/* console.log(model);
				console.log(response); */
			}
		});
		} else {
		 var validations = [{"csrf":null,"regularExpression":"^[a-zA-Z0-9_]*$","fieldName":"Application ID","nullString":""},
		                    {"csrf":null,"regularExpression":"^[a-zA-Z0-9][a-zA-Z0-9'. -]{0,30}$","fieldName":"Out of wallet Answers","nullString":""},
								  {"csrf":null,"regularExpression":"[0-9][0-9][0-9][0-9]","fieldName":"Last Four SSN","nullString":""},
								  {"csrf":null,"regularExpression":"^(?!(000|666))([0-6]\\d{2}|7([0-6]\\d|7[012]))-(?!00)\\d{2}-(?!0000)\\d{4}$","fieldName":"SSN","nullString":""},
								  {"csrf":null,"regularExpression":"","fieldName":"Suffix","nullString":""},
								  {"csrf":null,"regularExpression":"((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20})&quot; &amp;&amp; (&quot;.*[=&lt;&gt;()/'&amp;?\\&quot;].*","fieldName":"Password","nullString":""},
								  {"csrf":null,"regularExpression":"/^(?:(0[1-9]|1[012])[\\/.](0[1-9]|[12][0-9]|3[01])[\\/.](19|20)[0-9]{2})$/","fieldName":"Date of Birth","nullString":""},
								  {"csrf":null,"regularExpression":"([a-zA-Z \\\\-'\\\\s]{1,25}){1}","fieldName":"Middle Name","nullString":""},{"csrf":null,"regularExpression":"","fieldName":"User Role","nullString":""},
								  {"csrf":null,"regularExpression":"^[a-zA-Z0-9][a-zA-Z0-9_.@/'-]{5,74}$","fieldName":"User Login","nullString":""},
								  {"csrf":null,"regularExpression":"([a-zA-Z \\\\-'\\\\s]{1,38}){1}","fieldName":"City","nullString":""},
								  {"csrf":null,"regularExpression":"[A-Za-z0-9\\.\\_\\#\\!\\$\\&amp;\\'\\*\\/\\=\\?\\^\\`\\{\\}\\~\\|\\%\\+\\-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}","fieldName":"Email","nullString":""},
								  {"csrf":null,"regularExpression":"[A-Za-z{5,74}]","fieldName":"State","nullString":""},{"csrf":null,"regularExpression":"[\\\\d]{4}","fieldName":"Zip Code Extension","nullString":""},
								  {"csrf":null,"regularExpression":"(^[a-zA-Z0-9._\\\\-,'\\\\s]{1,68}){1}","fieldName":"Address Line 1","nullString":""},
								  {"csrf":null,"regularExpression":"^[a-zA-Z0-9][a-zA-Z0-9_.@/'-]{5,74}$","fieldName":"Admin ID","nullString":""},
								  {"csrf":null,"regularExpression":"(^[a-zA-Z0-9._\\\\-,'\\\\s]{1,68}){1}","fieldName":"Address Line 2","nullString":""},
								  {"csrf":null,"regularExpression":"[\\\\d]{5}","fieldName":"Zip Code","nullString":""},
								  {"csrf":null,"regularExpression":"^[2-9][0-9]{9}","fieldName":"Primary Phone","nullString":""},
								  {"csrf":null,"regularExpression":"([a-zA-Z \\\\-'\\\\s]{1,25}){1}","fieldName":"Last Name","nullString":""},
								  {"csrf":null,"regularExpression":"([a-zA-Z \\\\-'\\\\s]{1,20}){1}","fieldName":"First Name","nullString":""}];

				this.basicValidationRulesModel.set("validations", validations);
				this.addValdidationObjectsToFFM();
		}
	},
	
	signIn : function() {
		var passwordStatus = "expired";//for testing purposes
		if(passwordStatus === 'expired') {
			router.navigate("expiredPassword", {trigger: true});
			this.model.trigger("refreshExpiredPasswordTemplates");	
		}
		else {
			router.navigate("termsAndConditions", {trigger: true});
			this.model.trigger("refreshLogInTermsAndConditionsTemplates");	
		}
	},
	
	forgotPasswordLink : function() {
		router.navigate("forgotPassword", {trigger: true});
		this.model.trigger("refreshForgotPasswordTemplates");
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#forgotPasswordPage h2').attr('tabindex', '-1').focus();
	},
	
	forgotUsernameLink : function() {
		router.navigate("forgotUsername", {trigger: true});
		this.model.trigger("refreshForgotUsername");
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#forgotUsernameDetails h2').attr('tabindex', '-1').focus();
	},
	
	showAlertText :function() {
		//TODO: add functionality to show alert text after too many tries at log in
	},
	
	goToSignUp : function() {
		router.navigate("signUpStepOne", {trigger: true});
		this.model.trigger("signUpStepOne");
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#registrationSignUpOne h2').attr('tabindex', '-1').focus();
	},
	
	submitForm : function() {
		$('#loginData').submit();
	},
	
	inspectSessionForAgentBroker: function() 
	{
		if(!isEmpty(agentBrokerSAMLToken))
		{
			var userType =getAgentBrokerType();
			
			if(!isEmpty(userType))
			{
				if(isUserAgentBroker(userType))
				{
					var userID=getAgentBrokerUserID();
					if(!isEmpty(userID))
					{
						//show return button AND pre pop the user id
						this.makeAgentBrokerUIChanges(userID);
					}
					else
					{
						//still show the return button
						this.makeDirectEnrollmentUIRelatedChanges();
					}
				}
				else
				{
					//still show the return button
					this.makeDirectEnrollmentUIRelatedChanges();
				}
			}
		}
	},
	makeDirectEnrollmentUIRelatedChanges : function()
	{
		makeDirectEnrollmentUIChanges();
		$('#forgotUserNamePasswordDiv').hide();
		//$('#signUpButton').hide(); pod 6 doesn't want this hidden
	},
	makeAgentBrokerUIChanges : function( userId ) {
		this.makeDirectEnrollmentUIRelatedChanges();
		$('#username').val(userId);
		$('#username').attr('readonly','readonly');
	},
	fetchIsDirectEnrollmentConsumer : function()
	{
	    var $this = this;
       // make sure we don;t try to do this before the saml has been posted
	    if (window.registrationInitialSessionCallsComplete) {
	        if (!isEmpty(agentBrokerSAMLToken)) {
	            $this.inspectSessionForAgentBroker();
	        }
	    } else {
	        setTimeout(function () {
	            $this.fetchIsDirectEnrollmentConsumer();
	        }, 100);
	    }
		
	}
});
var registrationLoginBBView = new Registration_LoginBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_RegistrationBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#registrationSignUp"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	createLiteAccountModel : registrationEIDMIntegrationCreateLiteEIDMAccountBBModel,
	verifyEmailAddressModel : registrationEIDMIntegrationVerifyEmailAddressEIDMAccountBBModel,
	securityQuestionsModel : registrationEIDMIntegrationFetchSecurityQuestionsEIDMAccountBBModel,
	basicValidationRulesModel : registrationEIDMIntegrationFetchValidationRulesEIDMAccountBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	suffixDropDownUSTemplate : _.template($('#suffixDropDownUSTemplate').html()),
	stateDropDownUSTemplateFFM : _.template($('#stateDropDownUSTemplateFFM').html()),
	registrationSignUpOneStepTemplate : _.template($('#registrationSignUpOneStepTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate','createProfile', 'goBackToLogIn', 'setModelInfo',
					'fetchInitialFetches', 'fetchSecurityQuestions', 'initRenderSecurityQuestions',
					'changeSecurityQuestions', 'initializeValidation');
		
		this.model.bind('refreshSignUp', this.refreshTemplate);
				
		// Custom validation handlers could be added here
		this.fetchInitialFetches();

		// Initialize generally completes by calling this.render
		//this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #signUpCreate" : "createProfile",
		"click .goBackToLogIn" : "goBackToLogIn",
		"change .securityQuestions" : "changeSecurityQuestions"
	},
	
	render : function() {
		this.refreshTemplate();	
	},

   fetchInitialFetches: function () {
      var $this = this;
      if (window.registrationInitialSessionCallsComplete) {
		       $this.fetchSecurityQuestions();
		       //this.fetchBasicValidationRules();
		} else {
             setTimeout(function() {
                $this.fetchInitialFetches();
             }, 100);
      }

	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.registrationSignUpOneStepTemplate());
		
		
		$('#registrationSignUpSuffixContainer').empty();
		$('#registrationSignUpSuffixContainer').append(this.suffixDropDownUSTemplate({
			'idToUse' : 'registrationSignUpSuffix',
			'labelToUse' : 'Suffix <span class="noBold">(Optional)</span>',
			'forToUse' : 'registrationSignUpSuffix',
			'isRequired' : false,
			'nameToUse' : null
		}));
		$("#registrationSignUpSuffix")
			.attr('data-validate', 'EIDMSuffix')
			.attr('aria-describedby', 'registrationSignUpSuffix-feedbackMsg');
		
		$('#registrationSignUpStateContainer').empty();
		$('#registrationSignUpStateContainer').append(this.stateDropDownUSTemplateFFM({
			'idToUse' : 'registrationStateSignUp',
			'labelToUse' : 'State You Live In',
			'forToUse' : 'registrationStateSignUp',
			'isRequired' : false,
			'nameToUse' : null
		}));
		$("#registrationStateSignUp")
			.attr('data-validate', 'notBlank EIDMState')
			.attr('aria-describedby', 'registrationSignUpState-feedbackMsg');
				
		$('input').customInput();
		this.initRenderSecurityQuestions();
		this.initializeValidation();
	},
	
	initializeValidation : function() {
		var eventTrigger = $("#signUpCreate"),
			formContainer = $("#registrationValidationSignUp");
		
		if(formContainer.length > 0) {
			var registrationValidator = new FFM.FormValidator(formContainer, eventTrigger);
		}
	},
	
	fetchSecurityQuestions : function() {
		var $this = this;
		
		if(false) { // spare EIDM right now
			 this.securityQuestionsModel.fetch({
				 success : function(model, response) {
					 $this.initRenderSecurityQuestions();
				 },
				 error : function(model, response) {
					 console.log('failure');
				 }
			 });
		} else {
		  var questions = [ { question: 'What is your favorite radio station?'},  { question: 'What was your favorite toy when you were a child?'}, { question: 'What is your favorite cuisine?'}, 
		    { question: 'What is the first name of your oldest niece?'}, { question: 'What is a relative\'s telephone number that is not your own?'}, { question: 'What is the name of your favorite pet?'},
			 { question: 'Type a significant date in your life?'}, { question: 'In what city was your mother born?'}, { question: 'What is the name of your favorite childhood friend?'}, 
			 { question: 'What is your parents\' wedding anniversary date?'}, { question: 'What is the name of the manager at your first job?'}, { question: 'What is the nick name of your grandmother?'} ];
			 this.securityQuestionsModel.set('securityQuestions', questions);
		  $this.initRenderSecurityQuestions();
		}
	},
	
	initRenderSecurityQuestions : function() {
		var securityQs = this.securityQuestionsModel.get('securityQuestions'),
			options = '';
		$('.securityQuestions option', '#registrationSignUp').remove();
		
		//loop through the three inputs
		for(var j = 0; j < 3; j++) {
			options = '';
			options += '<option value="" selected>'+this.resources['ffe.ee.shared.select']+'</option>';
			if(!isEmpty(securityQs)) {
				//loop through all the security questions
				for(var i = 0; i < securityQs.length ; i++) {
					options += '<option value="'+securityQs[i].question+'">'+securityQs[i].question+'</option>';
				}
			}
			$('#registrationSignUpSecurityQ'+j).append(options);
		}
	},
	
	changeSecurityQuestions : function() {
		filterSecurityQuestions(this.securityQuestionsModel, 'registrationSignUp');
	},
	
	createProfile : function() {
		var $this = this,
			errors;
		
		this.setModelInfo();
		
		this.createLiteAccountModel.save(null, {
			success : function(model, response) {
				switch (response.errors[0].errorType) {
					case '200':
						$this.model.trigger('signUpSuccess');
						break;
					case '204':
						//$this.model.trigger('profileAlreadyExists');
						$this.model.trigger('couldNotCreateAccountGeneric');
						break;
					case '500':
						$this.model.trigger('couldNotCreateAccountGeneric');
						break;
					default :
						$this.model.trigger('couldNotCreateAccountGeneric');
						break;
				}
			},
			error : function(model, response) {
				console.log('create lite loa1 account failure');
				$this.model.trigger('couldNotCreateAccountGeneric');
			}
		});
		router.navigate("registrationSignUpResults", {trigger: true});
	},
	
	setModelInfo : function() {
		this.createLiteAccountModel.set({'securityQuestions' : []});
		var questions = this.createLiteAccountModel.get('securityQuestions');
		
		for(var i = 0; i < 3; i++) {
			questions.push(newEIDMSecurityQuestion());
			
			questions[i].question = $.trim($('#registrationSignUpSecurityQ'+i).val());
			questions[i].answer = $.trim($('#registrationSignUpsecurityQ'+i+'Answer').val());
			questions[i].index = i;
		}
		
		this.createLiteAccountModel.set({'firstName' :$.trim( $('#registrationSignUpFirstName').val())});
		this.createLiteAccountModel.set({'middleName' : $.trim($('#registrationSignUpMiddleName').val())});
		this.createLiteAccountModel.set({'lastName' : $.trim($('#registrationSignUpLastName').val())});
		this.createLiteAccountModel.set({'suffix' : $.trim($('#registrationSignUpSuffix').val())});
		this.createLiteAccountModel.set({'email' : $.trim($('#registrationSignUpEmail').val())});
		this.createLiteAccountModel.set({'password' : $.trim($('#registrationSignUpPassword').val())});
		this.createLiteAccountModel.set({'securityQuestions' : questions});
		this.createLiteAccountModel.set({'userName' : $.trim($('#registrationSignUpUsername').val())});
		
		if(this.createLiteAccountModel.attributes.hasOwnProperty('errors')) {
			delete this.createLiteAccountModel.attributes.errors;
		}
	},
	
	verifyEmailAddress : function() {
		var $this = this;
		
		this.verifyEmailAddressModel.set({'username' : this.createLiteAccountModel.get('userName')});
		
		this.verifyEmailAddressModel.save(null, {
			success : function(model, response) {
				console.log('email was verified');
			},
			error : function(model, response) {
				console.log('email was not verfied');
			}
		});
	},
	
	goBackToLogIn : function() {
		this.model.trigger('refreshLogInTemplates');
		router.navigate("logIn", {trigger: true});
	}
});
var registrationRegistrationBBView = new Registration_RegistrationBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_ForgotPasswordDetailsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#forgotPasswordPage"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	fetchSecurityQuestionsModel : registrationEIDMIntegrationFetchUserSpecSecurityQuestionsEIDMAccountBBModel,
	confirmUserLoginModel : registrationEIDMIntegrationConfirmUserLoginBBModel,
	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	forgotPasswordTemplate : _.template($('#forgotPasswordTemplate').html()),
	//logInSignUpTemplate : _.template($('#logInSignUpTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate','sendEmail', 'cancel', 'continueToQuestions', 'goToSignUp', 'initializeValidation');
		
		this.model.bind('refreshForgotPasswordTemplates', this.refreshTemplate);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #forgotPasswordCancel" : "cancel",
		"click #forgotPasswordContinue" : "continueToQuestions",
		"click #forgotPasswordSignUpButton" : "goToSignUp",
		"click #forgotPasswordSendEmail" : "sendEmail"
		
	},
	
	render : function() {
		this.refreshTemplate();	
	
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.forgotPasswordTemplate());
		this.initializeValidation();
	},
	
	initializeValidation : function() {
		var eventTrigger = $("#forgotPasswordSendEmail"),
			formContainer = $("#forgotPasswordContainer");
			
		if(formContainer.length > 0) {
			var forgotPasswordValidator = new FFM.FormValidator(formContainer, eventTrigger);
			forgotPasswordValidator.setRule("notBlank", ["^(?!\\s*$).+", this.resources['ffe.ee.shared.validations.notBlank']]);
		}
	},
	
	sendEmail : function() {
		blockUIForProfile();
		var userName = $.trim($('#userNameForgotPassword').val());
		this.confirmUserLoginModel.url = environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/confirmUserLogin/"+userName;
		this.confirmUserLoginModel.save();
		this.model.trigger('forgotPasswordEmail');
		$.unblockUI();
	},
	
	cancel : function() {
		this.model.trigger("refreshLogInTemplates");
		router.navigate("logIn", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
	},
	
	goToSignUp : function() {
		this.model.trigger("signUpStepOne");
		router.navigate("signUpStepOne", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#registrationSignUpOne h2').attr('tabindex', '-1').focus();
	},
	
	continueToQuestions : function() {
		var $this = this,
			userName = $.trim($('#userNameForgotPassword').val());

		blockUIForProfile();
		this.fetchSecurityQuestionsModel.set({'securityQuestions': []});
		this.fetchSecurityQuestionsModel.url = environment+"/ee-rest/global/" +locale +"/MyAccountEIDMUnsecuredIntegration/fetchSecurityQuestions/"+userName;
		this.fetchSecurityQuestionsModel.fetch({
			success : function(model, response) {
				$.unblockUI();
				$this.model.trigger('refreshPasswordChallengeQuestionsTemplates');
			},
			error : function(model, response) {
				$.unblockUI();
				console.log(response);
				$this.model.trigger('forgotPasswordCouldNotProcessUsernameTemplate');
			}
		});
		router.navigate("forgotPasswordQuestions", {trigger: true});
	}
});
var registrationForgotPasswordDetailsBBView = new Registration_ForgotPasswordDetailsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_ForgotUsernameDetailsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#forgotUsernameDetails"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	forgotUserNameModel : registrationEIDMIntegrationUpdateForgottenUserNameBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	forgotUsernameDetailsTemplate : _.template($('#forgotUsernameDetailsTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate','forgotUsernameCancel','sendEmail',/*, 'updateUserName','setUpdateUserNameModelInfo',*/ 'initializeValidation');
		this.model.bind('refreshForgotUsername', this.refreshTemplate);
		this.model.bind('registrationFindUsername', this.findUsername);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #signUp" : "signUp",
		//"click #forgotUsernameCancel" : "updateUserName",
		"click #forgotUsernameSendEmail" : "sendEmail",
		"click #forgotUsernameCancel" : "forgotUsernameCancel"
	},
	
	render : function() {
		this.refreshTemplate();
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.forgotUsernameDetailsTemplate());
		this.initializeValidation();
	},
	
	initializeValidation : function() {
		var eventTrigger = $("#forgotUsernameSendEmail"),
			formContainer = $("#forgotUserNameContainer");
		
		if(formContainer.length > 0) {
			FFM.FormValidator.currentLocale = locale;
			var forgotUserNameValidator = new FFM.FormValidator(formContainer, eventTrigger);
		}
	},
	
	signUp : function() {
		this.model.trigger("signUpStepOne");
		router.navigate("signUpStepOne", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#registrationSignUpOne h2').attr('tabindex', '-1').focus();
	},
	
	forgotUsernameCancel : function (){
		this.model.trigger('refreshLogInTemplates');
		router.navigate("logIn", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
	},
	
	sendEmail : function() {
		blockUIForProfile();
		this.setUpdateUserNameModelInfo();
		this.forgotUserNameModel.url =environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateForgottenUserName";
		this.forgotUserNameModel.save();
		this.model.trigger('forgotUsernameEmail');
		$.unblockUI();
	},
	
	setUpdateUserNameModelInfo : function () {
		
		this.forgotUserNameModel.set({'firstName' : $.trim($('#forgotUserNameFirstName').val())});
		this.forgotUserNameModel.set({'lastName' : $.trim($('#forgotUserNameLastName').val())});
		this.forgotUserNameModel.set({'email' : $.trim($('#forgotUserNameEmail').val())});
		
		// removing attributes from the model to be able to call service again
		if(this.forgotUserNameModel.attributes.hasOwnProperty('errors')) {
			delete this.forgotUserNameModel.attributes.errors;
		}
		if(this.forgotUserNameModel.attributes.hasOwnProperty('emailSentTo')) {
			delete this.forgotUserNameModel.attributes.emailSentTo;
		}
		if(this.forgotUserNameModel.attributes.hasOwnProperty('key')) {
			delete this.forgotUserNameModel.attributes.key;
		}
		if(this.forgotUserNameModel.attributes.hasOwnProperty('value')) {
			delete this.forgotUserNameModel.attributes.value;
		}
	}
});
var registrationForgotUsernameDetailsBBView = new Registration_ForgotUsernameDetailsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_RegistrationResultsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#registrationSignUpResults"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	createLiteAccountModel : registrationEIDMIntegrationCreateLiteEIDMAccountBBModel,
	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	profileAlreadyExistsTemplate : _.template($('#profileAlreadyExistsTemplate').html()),
	profileCouldNotBeCreatedTemplate : _.template($('#profileCouldNotBeCreatedTemplate').html()),
	signUpSuccessTemplate : _.template($('#signUpSuccessTemplate').html()),
	profileCouldNotCreateAccountTemplate : _.template($('#profileCouldNotCreateAccountTemplate').html()),
	registrationAlmostFinishedTemplate : _.template($('#registrationAlmostFinishedTemplate').html()),
	waitingTemplate : _.template($('#registrationWaitingTemplate').html()),
	userIDAlreadyExistsTemplate : _.template($('#userIDAlreadyExistsTemplate').html()),
	combinationNotUniqueTemplate : _.template($('#combinationNotUniqueTemplate').html()),
	securityQuestionsInvalidFormatTemplate : _.template($('#securityQuestionsInvalidFormatTemplate').html()),
	securityQuestionsDuplicateTemplate : _.template($('#securityQuestionsDuplicateTemplate').html()),
	mlErrorTemplate : _.template($('#mlErrorTemplate').html()),
	govDeliveryErrorTemplate : _.template($('#govDeliveryErrorTemplate').html()),
	
	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'renderResutlsFromUrl', 'profileAlreadyExists', 'profileCouldNotBeCreated', 'waitingToCreate',
					'gobackToSignUp', 'signUpSuccess','almostFinished', 'toLandingPage', 'goBackToLogIn', 'couldNotCreateAccountGeneric',
					'userIDAlreadyExists', 'combinationNotUnique', 'securityQuestionsInvalidFormat', 'securityQuestionsDuplicate', 'forgotPassword',
					'forgotUsername', 'mlError250', 'mlError950', 'govDeliveryError');
					
		this.model.bind('profileAlreadyExists', this.profileAlreadyExists);
		this.model.bind('profileCouldNotBeCreated', this.profileCouldNotBeCreated);
		this.model.bind('signUpSuccess', this.signUpSuccess);
		this.model.bind('almostFinished', this.almostFinished);
		this.model.bind('couldNotCreateAccountGeneric', this.couldNotCreateAccountGeneric);
		this.model.bind('waitingToCreate',this.waitingToCreate);
		this.model.bind('userIDAlreadyExists',this.userIDAlreadyExists);
		this.model.bind('combinationNotUnique',this.combinationNotUnique);
		this.model.bind('securityQuestionsInvalidFormat',this.securityQuestionsInvalidFormat);
		this.model.bind('securityQuestionsDuplicate',this.securityQuestionsDuplicate);
		this.model.bind('govDeliveryError',this.govDeliveryError);
		this.model.bind('mlError250',this.mlError250);
		this.model.bind('mlError950',this.mlError950);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .modal-next" : "toLandingPage",
		"click .gobackToSignUp" : "gobackToSignUp",
		"click .forgotUsername" : "forgotUsername",
		"click .forgotPassword" : "forgotPassword",
		"click .goBackToLogIn" : "goBackToLogIn"
	},
	
	render : function() {
		this.refreshTemplate();	
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.renderResutlsFromUrl();
		
		
	},
	
	renderResutlsFromUrl : function() {
		var urls,
			$this = this;
		
		urls = getUrlVarsFromRout();
		setTimeout(function() {
			if(!isEmpty(urls[0])) {
				if(urls[0] === 'registrationSignUpResults') {
					switch (urls[1]) {
						case 'waiting': //Almost there
							$this.waitingToCreate();
							break;
						case '200':  //Almost there
							$this.almostFinished();
							break;
						case '204': //couldnt be created at this time
							$this.couldNotCreateAccountGeneric();
							break;
						case 'E110': //User ID already exists
							$this.userIDAlreadyExists();
							break;
						case 'E537': //Combination of First Name, Last Name, and Email Address is not Unique
							$this.combinationNotUnique();
							break;
						case 'E138': //Answers to challenge questions (format)
							$this.securityQuestionsInvalidFormat();
							break;
						case 'E114': //Two or more answers to the challenge questions that you have provided are the same
							$this.securityQuestionsDuplicate();
							break;
						case 'E117': //couldnt be created at this time
							$this.profileCouldNotBeCreated();
							break;
						case '250': //Exception in createSystemUser data service
							$this.mlError250();
							break;
						case '950': //Exception in createSystemUser business service
							$this.mlError950();
							break;
						case '990': //Exception in email delivery
							$this.govDeliveryError();
							break;
						case '500': //Please wait a few moments and try again + updated to have sec questions text
							$this.couldNotCreateAccountGeneric();
							break;
						case '': //couldnt be created at this time
							$this.profileCouldNotBeCreated();
							break;
						default : //couldnt be created at this time
							$this.couldNotCreateAccountGeneric();
							break;
					}
				}
			}
		}, 250);
	},

	profileAlreadyExists : function() {
		//when service is done this will be moved to the registration results
		document.title = this.resources['ffe.ee.myAccount.registration.accountAlreadyExists.pageTitle'];
		router.navigate("registrationSignUpResults", {trigger: true});
		this.$el.empty();
		this.$el.append(this.profileAlreadyExistsTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	signUpSuccess : function() { 
		document.title = this.resources['ffe.ee.myAccount.registration.SignUpSuccess.pageTitle'];
		router.navigate("registrationSignUpResults", {trigger: true});
		this.$el.empty();
		this.$el.append(this.signUpSuccessTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	almostFinished : function() {
		document.title = this.resources['ffe.ee.myAccount.registration.almostThere.pageTitle'];
		router.navigate("registrationSignUpResults:200", {trigger: true});
		var email = this.createLiteAccountModel.get('email');
		this.$el.empty();
		this.$el.append(this.registrationAlmostFinishedTemplate({
			"email" : email
		}));
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	waitingToCreate : function() {
		router.navigate("registrationSignUpResults:waiting", {trigger: true});
		this.$el.empty();
		this.$el.append(this.waitingTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	profileCouldNotBeCreated : function() {
		//if profile could not created
		document.title = this.resources['ffe.ee.myAccount.registration.accountNotCreated.pageTitle'];
		router.navigate("registrationSignUpResults:204", {trigger: true});
		var email = this.createLiteAccountModel.get('email');
		this.$el.empty();
		this.$el.append(this.profileCouldNotBeCreatedTemplate({
			"email" : email
		}));
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	couldNotCreateAccountGeneric : function() {
		//if profile could not created
		router.navigate("registrationSignUpResults:500", {trigger: true});
		var email = this.createLiteAccountModel.get('email');
		this.$el.empty();
		this.$el.append(this.profileCouldNotCreateAccountTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	userIDAlreadyExists : function() {
		router.navigate("registrationSignUpResults:E110", {trigger: true});
		this.$el.empty();
		this.$el.append(this.userIDAlreadyExistsTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	combinationNotUnique : function() {
		router.navigate("registrationSignUpResults:E537", {trigger: true});
		this.$el.empty();
		this.$el.append(this.combinationNotUniqueTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	securityQuestionsInvalidFormat : function() {
		router.navigate("registrationSignUpResults:E138", {trigger: true});
		this.$el.empty();
		this.$el.append(this.securityQuestionsInvalidFormatTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	securityQuestionsDuplicate : function() {
		router.navigate("registrationSignUpResults:E114", {trigger: true});
		this.$el.empty();
		this.$el.append(this.securityQuestionsDuplicateTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	mlError250 : function() {
		router.navigate("registrationSignUpResults:250", {trigger: true});
		this.$el.empty();
		this.$el.append(this.mlErrorTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	mlError950 : function() {
		router.navigate("registrationSignUpResults:950", {trigger: true});
		this.$el.empty();
		this.$el.append(this.mlErrorTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	govDeliveryError : function() {
		router.navigate("registrationSignUpResults:990", {trigger: true});
		this.$el.empty();
		this.$el.append(this.govDeliveryErrorTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	gobackToSignUp : function() {
		router.navigate("signUpStepOne", {trigger: true});
		this.model.trigger('signUpStepOne');
		$('h2[tabindex=-1]').removeAttr('tabindex');
	},
	
	goBackToLogIn : function() {
		router.navigate("logIn", {trigger: true});
		this.model.trigger('refreshLogInTemplates');
		$('h2[tabindex=-1]').removeAttr('tabindex');
	},

	forgotPassword : function() {
		router.navigate("forgotPassword", {trigger: true});
		this.model.trigger('refreshForgotPasswordTemplates');
		$('h2[tabindex=-1]').removeAttr('tabindex');
	},

	forgotUsername : function() {
		router.navigate("forgotUsername", {trigger: true});
		this.model.trigger('refreshForgotUsername');
		$('h2[tabindex=-1]').removeAttr('tabindex');
	},
	
	toLandingPage : function() {
		window.location.href = "/"+eePath+"/auth/"+tenantId+"/"+locale+"/myProfile#landingPage";
	}
});
var registrationRegistrationResultsBBView = new Registration_RegistrationResultsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_LoginTermsAndConditionsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#logInTermsAndConditionsPage"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	termsAndConditionsTemplate : _.template($('#logInTermsAndConditionsTemplate').html()),
	//logInSignUpTemplate : _.template($('#logInSignUpTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'goToSignUp');
		
		this.model.bind('refreshLogInTermsAndConditionsTemplates', this.refreshTemplate);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #termsAndConditionsSignupButton" : "goToSignUp"
	},
	
	render : function() {
		this.refreshTemplate();	
		
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.termsAndConditionsTemplate());
		
		//$("#logInSignUpContent").empty();
		
		/*$("#logInSignUpContent").append(this.logInSignUpTemplate({
			h1Heading : "My Account Registration - Log In Terms &amp; Conditions",
			signUpText : "New to HealthCare.gov?",
			buttonText : "Sign Up"
		}));*/
	},
	
	goToSignUp : function(){
		this.model.trigger("signUpStepOne");
		router.navigate("signUpStepOne", {trigger: true});	
	}
});
var registrationLoginTermsAndConditionsBBView = new Registration_LoginTermsAndConditionsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_ForgotUsernameResultsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#forgotUsernameResultsPage"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	forgotUserNameModel : registrationEIDMIntegrationUpdateForgottenUserNameBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	forgotUsernameResultConfirmationTemplate : _.template($('#forgotUsernameResultConfirmationTemplate').html()),
	forgotUsernameResultUnsuccessfulTemplate : _.template($('#forgotUsernameResultUnsuccessfulTemplate').html()),
	forgotUsernameCouldNotProsessRequestTemplate : _.template($('#forgotUsernameCouldNotProsessRequestTemplate').html()),
	forgotPasswordUsernameEmailTemplate : _.template($('#forgotPasswordUsernameEmailTemplate').html()),
	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'renderResutlsFromUrl', 'forgotUsernameResultConfirmation',
				'forgotUsernameResultUnsuccessful', 'goBackToLogIn', 'usernameCouldNotProsessRequest', 'backToForgotUsername', 
				'forgotUsernameEmail');
		
		this.model.bind('forgotUsernameResultConfirmation', this.forgotUsernameResultConfirmation);
		this.model.bind('forgotUsernameResultUnsuccessful', this.forgotUsernameResultUnsuccessful);
		this.model.bind('forgotUsernameCouldNotProsessRequest', this.usernameCouldNotProsessRequest);
		this.model.bind('forgotUsernameEmail', this.forgotUsernameEmail);
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .returnLogin" : "goBackToLogIn",
		"click  #returnToForgotUsername" : "backToForgotUsername",
		"click .signUpButton" : "goToSignUp",
		"click .toResubmitLink" : "backToForgotUsername"
	},
	
	render : function() {
		this.refreshTemplate();
		
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.renderResutlsFromUrl();
	},
	
	renderResutlsFromUrl : function() {
		var urls,
			$this = this;
		
		urls = getUrlVarsFromRout();
		setTimeout(function() {
			if(!isEmpty(urls[0])) {
				if(urls[0] === 'forgotUsernameResults') {
					switch (urls[1])
					{
						case 'usernameEmail': //email sent
							$this.forgotUsernameEmail();
							break;
						default: //email sent
							$this.forgotUsernameEmail();
							break;	
					}
				}
			}
		}, 250);
	},
		
	goBackToLogIn : function() {
		this.model.trigger('refreshLogInTemplates');
		router.navigate("logIn", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
	},
	
	backToForgotUsername : function() {
		this.model.trigger("refreshForgotUsername");	
		router.navigate("forgotUsername", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	forgotUsernameEmail : function(){
		document.title = this.resources['ffe.ee.myAccount.registration.forgotUsernameResults.usernameEmail.pageTitle'];
		this.$el.empty();
		this.$el.append(this.forgotPasswordUsernameEmailTemplate({
			'emailScreenText' : this.resources['ffe.ee.registration.forgotUsernameResults.usernameEmailText'],
			'emailScreenText2' :'<a class="toResubmitLink" href="#">'+ this.resources['ffe.ee.registration.forgotUsernameResults.usernameEmailText1'] +
				this.resources['ffe.ee.registration.clickHereLink']+ " " + this.resources['ffe.ee.registration.resubmitText'] + '</a>',
			'hiddenText' : this.resources['ffe.ee.registration.forgotUsernameResults.usernameEmailHiddenText']
		}));
		router.navigate("forgotUsernameResults:usernameEmail", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},	
	
	forgotUsernameResultConfirmation : function() {
		//when service is done this will be moved to the registration results
		this.$el.empty();
		this.$el.append(this.forgotUsernameResultConfirmationTemplate({
			'emailTo' : this.forgotUserNameModel.get('email')
		}));
		router.navigate("forgotUsernameResults", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	forgotUsernameResultUnsuccessful : function() {
		//if profile could not created
		this.$el.empty();
		this.$el.append(this.forgotUsernameResultUnsuccessfulTemplate());
		router.navigate("forgotUsernameResults", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	usernameCouldNotProsessRequest : function() {
		//if profile could not created
		document.title = this.resources['ffe.ee.myAccount.forgotUsernameResults.profileNotFound.pageTitle'];
		this.$el.empty();
		this.$el.append(this.forgotUsernameCouldNotProsessRequestTemplate());
		router.navigate("forgotUsernameResults", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	goToSignUp : function() {
		this.model.trigger("signUpStepOne");	
		router.navigate("signUpStepOne", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
	}
});
var registrationForgotUsernameResultsBBView = new Registration_ForgotUsernameResultsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_ForgotPasswordChallengeQuestionBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#passwordChallengeQuestionsPage"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	fetchSecurityQuestionsModel : registrationEIDMIntegrationFetchUserSpecSecurityQuestionsEIDMAccountBBModel,
	
	
	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	challengeQuestionsTemplate : _.template($('#forgotPasswordChallengeQuestionsTemplate').html()),
	questionTemplate : _.template($('#forgotPasswordQuestionTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'backToForgotPassword', 'continueToReset',
				'goToSignUp', 'initializeValidation','writeSecurityQuestions');
		
		this.model.bind('refreshPasswordChallengeQuestionsTemplates', this.writeSecurityQuestions);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #challengeQuestionsBack" : "backToForgotPassword",
		"click #challengeQuestionsContinue" : "continueToReset",
		"click #challengeQuestionsSignUpButton" : "goToSignUp"
	},
	
	render : function() {
		this.refreshTemplate();	
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.challengeQuestionsTemplate());
		
		var vars =getUrlVars();
		
		if(!isEmpty(vars.user )) {
			//TODO: refactor
			var fauxThis = this,
			userName =vars.user;
			var uuid = vars.uuid; 
				
			$('#userNameForgotPassword').val(userName);
			$('#forgotPasswordUuid').val(uuid);
			
			document.title = this.resources['ffe.ee.myAccount.registration.SecurityQuestions.pageTitle'];
			
			blockUIForProfile();
			this.fetchSecurityQuestionsModel.set({'securityQuestions': []});
			this.fetchSecurityQuestionsModel.url = environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/fetchSecurityQuestions/"+userName;
			this.fetchSecurityQuestionsModel.fetch({
				success : function(model, response) {
					$.unblockUI();
					fauxThis.model.trigger('refreshPasswordChallengeQuestionsTemplates');
					
				},
				error : function(model, response) {
					$.unblockUI();
					fauxThis.model.trigger('forgotPasswordCouldNotProcessUsernameTemplate');
				}
			});
		}
	},
	
	writeSecurityQuestions : function() {
		var questions = this.fetchSecurityQuestionsModel.get('securityQuestions');
		
		$('#questionTemplateSection').empty();
		
		if(!isEmpty(questions)) {
			for(var x = 0; x < 3; x++) {
				$('#questionTemplateSection').append(this.questionTemplate({
					"question" : questions[x].question,
					"index" : x
				}));
			}
		}
		$('#logInPage').hide();
		$('#passwordChallengeQuestionsPage').show();
		this.initializeValidation();
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	initializeValidation : function() {
		var eventTrigger = $("#challengeQuestionsContinue"),
			formContainer = $("#forgotPasswordQuestionsContainer");
			
		if(formContainer.length > 0) {
			var challengeQuestionsValidator = new FFM.FormValidator(formContainer, eventTrigger);
			challengeQuestionsValidator.setRule("notBlank", ["^(?!\\s*$).+", this.resources['ffe.ee.shared.validations.notBlank']]);
		}
	},
	
	backToForgotPassword : function() {
		this.model.trigger("refreshForgotPasswordTemplates");	
		router.navigate("forgotPassword", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#forgotPasswordPage h2').attr('tabindex', '-1').focus();
	},
	
	continueToReset : function() {
		this.model.bind('refreshResetPasswordTemplates', this.refreshTemplate);
		router.navigate("resetPassword", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#resetPasswordPage h2').attr('tabindex', '-1').focus();
	},
	
	goToSignUp : function() {
		this.model.trigger("signUpStepOne");
		router.navigate("signUpStepOne", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#registrationSignUpOne h2').attr('tabindex', '-1').focus();
	}
});
var registrationForgotPasswordChallengeQuestionBBView = new Registration_ForgotPasswordChallengeQuestionBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_ForgotPasswordResultsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#forgotPasswordResultsPage"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	updateForgotPasswordModel : registrationEIDMIntegrationUpdateForgotPasswordBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	resultSuccessTemplate : _.template($('#forgotPasswordResultSuccessTemplate').html()),
	resultNotFoundTemplate : _.template($('#forgotPasswordResultNotFoundTemplate').html()),
	resultIncorrectTemplate : _.template($('#forgotPasswordResultIncorrectTemplate').html()),
	forgotPasswordCouldNotProcessRequestTemplate : _.template($('#forgotPasswordCouldNotProcessRequestTemplate').html()),
	forgotPasswordCouldNotProcessUsernameTemplate : _.template($('#forgotPasswordCouldNotProcessUsernameTemplate').html()),
	forgotPasswordUsernameEmailTemplate : _.template($('#forgotPasswordUsernameEmailTemplate').html()),
	forgotPasswordQuestionsAndAnswersDoNotMatchTemplate : _.template($('#forgotPasswordQuestionsAndAnswersDoNotMatchTemplate').html()),
	forgotPasswordAnswersDoNotMatchTemplate : _.template($('#forgotPasswordAnswersDoNotMatchTemplate').html()),
	forgotPasswordInvalidPasswordTemplate : _.template($('#forgotPasswordInvalidPasswordTemplate').html()),
	forgotPasswordPasswordsDoNotMatchTemplate : _.template($('#forgotPasswordPasswordsDoNotMatchTemplate').html()),
	forgotPasswordUserIDisInvalidTemplate : _.template($('#forgotPasswordUserIDisInvalidTemplate').html()),
	
	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'renderResutlsFromUrl', 'returnToLogin', 'goToSignUp',
				'returnToForgotPassword','passwordNotFound','resultUnsuccessful','resultSuccessful',
				'passwordCouldNotProcessRequest','passwordCouldNotProcessUsername','forgotPasswordEmail',
				'questionsAndAnswersDoNotMatch', 'questionsDontMatch', 'passwordsDoNotMatch', 'userIDisInvalid',
				'passwordInvalid');
		
		this.model.bind('refreshForgotPasswordResultsTemplates', this.refreshTemplate);
		this.model.bind('resultSuccessful', this.resultSuccessful);
		this.model.bind('resultUnsuccessful', this.resultUnsuccessful);
		this.model.bind('passwordNotFound', this.passwordNotFound);
		this.model.bind('forgotPasswordCouldNotProcessRequestTemplate', this.passwordCouldNotProcessRequest);
		this.model.bind('forgotPasswordCouldNotProcessUsernameTemplate', this.passwordCouldNotProcessUsername);
		this.model.bind('forgotPasswordEmail', this.forgotPasswordEmail);
		this.model.bind('questionsAndAnswersDoNotMatch', this.questionsAndAnswersDoNotMatch);
		this.model.bind('questionsDontMatch', this.questionsDontMatch);
		this.model.bind('passwordInvalid', this.passwordInvalid);
		this.model.bind('passwordsDoNotMatch', this.passwordsDoNotMatch);
		this.model.bind('userIDisInvalid', this.userIDisInvalid);
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .returnLogin" : "returnToLogin",
		"click .retryForgotPasswordLink" : "returnToForgotPassword",
		"click .signUpButton" : "goToSignUp",
		"click .toResubmitLink" : "returnToForgotPassword"
	},
	
	render : function() {
		this.refreshTemplate();	
		
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.renderResutlsFromUrl();
	},
	
	renderResutlsFromUrl : function() {
		var urls,
			$this = this;
		
		urls = getUrlVarsFromRout();
		setTimeout(function() {
			if(!isEmpty(urls[0])) {
				if(urls[0] === 'forgotPasswordResults') {
					switch (urls[1]) {
						case 'forgotPasswordEmail': //email sent
							$this.resultSuccessful();
							break;
						case 'username': //email sent
							$this.passwordCouldNotProcessUsername();
							break;
						case '200': //Your password was reset
							$this.resultSuccessful();
							break;
						case 'E514': //User ID Invalid
							$this.userIDisInvalid();
							break;
						case 'E513': //Challenge Questions and Answers do not match
							$this.questionsAndAnswersDoNotMatch();
							break;
						case 'E521': //Challenge Questions
							$this.questionsDontMatch();
							break;
						case 'E128': //Password invalid format
							$this.passwordInvalid();
							break;
						case 'E111': //Password does not match the confirm password
							$this.passwordsDoNotMatch();
							break;
						case '204': //couldn't find a matched
							$this.passwordCouldNotProcessRequest();
							break;
						case '': //couldn't find a matched
							$this.passwordCouldNotProcessRequest();
							break;
						default: //couldn't find a matched
							$this.passwordCouldNotProcessRequest();
							break;
					}
				}
			}
		}, 250);
	},
	
	forgotPasswordEmail : function(){
		document.title = this.resources['ffe.ee.myAccount.registration.forgotPassword.emailPassword.pageTitle'];
		router.navigate("forgotPasswordResults:passwordEmail", {trigger: true});
		this.$el.empty();
		this.$el.append(this.forgotPasswordUsernameEmailTemplate({
			'emailScreenText' : this.resources['ffe.ee.registration.forgotPassword.emailPasswordText1'],
			'emailScreenText2' : '',
			'hiddenText' : this.resources['ffe.ee.registration.forgotPassword.emailPasswordHiddenText']
		}));
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	returnToLogin : function() {
		router.navigate("logIn", {trigger: true});
		this.model.trigger("refreshLogInTemplates");
		$('h2[tabindex=-1]').removeAttr('tabindex');
	},
	
	returnToForgotPassword : function() {
		router.navigate("forgotPassword", {trigger: true});
		this.model.trigger("refreshForgotPasswordTemplates");
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#forgotPasswordPage h2').attr('tabindex', '-1').focus();
	},
	
	goToSignUp : function() {
		this.model.trigger("signUpStepOne");	
		router.navigate("signUpStepOne", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#registrationSignUpOne h2').attr('tabindex', '-1').focus();
	},
	
	resultUnsuccessful : function() {
		//when service is done this will be moved to the registration results 
		document.title = this.resources['ffe.ee.myAccount.registration.ForgotPassword.PasswordReset.Unsuccessful.pageTitle'];
		this.$el.empty();
		this.$el.append(this.resultIncorrectTemplate());
		router.navigate("forgotPasswordResults", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	resultSuccessful : function() { 
		document.title = this.resources['ffe.ee.myAccount.registration.ForgotPassword.Confirmation.pageTitle'];
		var email = this.updateForgotPasswordModel.get('email');
		this.$el.empty();
		this.$el.append(this.resultSuccessTemplate({
			"email" : email
		}));
		router.navigate("forgotPasswordResults:200", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	passwordNotFound : function() {
		//if profile could not created 
		document.title = this.resources['ffe.ee.myAccount.registration.passwordNotFound.pageTitle'];
		this.$el.empty();
		this.$el.append(this.resultNotFoundTemplate());
		router.navigate("forgotPasswordResults", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	passwordCouldNotProcessRequest : function() {
		//if profile could not created
		document.title = this.resources['ffe.ee.myAccount.forgotPassword.profileNotFound.pageTitle'];
		this.$el.empty();
		this.$el.append(this.forgotPasswordCouldNotProcessRequestTemplate());
		router.navigate("forgotPasswordResults:204", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	passwordCouldNotProcessUsername : function() {
		//if profile could not created
		this.$el.empty();
		this.$el.append(this.forgotPasswordCouldNotProcessUsernameTemplate());
		router.navigate("forgotPasswordResults:username", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	questionsAndAnswersDoNotMatch : function() {
		this.$el.empty();
		this.$el.append(this.forgotPasswordQuestionsAndAnswersDoNotMatchTemplate());
		router.navigate("forgotPasswordResults:E513", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	questionsDontMatch : function() {
		this.$el.empty();
		this.$el.append(this.forgotPasswordAnswersDoNotMatchTemplate());
		router.navigate("forgotPasswordResults:E521", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	passwordInvalid : function() {
		this.$el.empty();
		this.$el.append(this.forgotPasswordInvalidPasswordTemplate());
		router.navigate("forgotPasswordResults:E128", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	passwordsDoNotMatch : function() {
		this.$el.empty();
		this.$el.append(this.forgotPasswordPasswordsDoNotMatchTemplate());
		router.navigate("forgotPasswordResults:E111", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	},
	
	userIDisInvalid : function() {
		this.$el.empty();
		this.$el.append(this.forgotPasswordUserIDisInvalidTemplate());
		router.navigate("forgotPasswordResults:E514", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.find('h2').attr('tabindex', '-1').focus();
	}
});
var registrationForgotPasswordResultsBBView = new Registration_ForgotPasswordResultsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_ResetPasswordBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#resetPasswordPage"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	updateForgotPasswordModel : registrationEIDMIntegrationUpdateForgotPasswordBBModel,
	fetchSecurityQuestionsModel : registrationEIDMIntegrationFetchUserSpecSecurityQuestionsEIDMAccountBBModel,


	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	resetPasswordTemplate : _.template($('#resetPasswordTemplate').html()),
	//logInSignUpTemplate : _.template($('#logInSignUpTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'returnToChallengeQuestions',
				'goToSignUp','updateForgotPassword','setUpdateModelInfo', 'handleResponse');
		
		this.model.bind('refreshResetPasswordTemplates', this.refreshTemplate);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #resetPasswordBack" : "returnToChallengeQuestions",
		"click #resetLoginInSignUpButton" : "goToSignUp",
		"click #resetPasswordReset" : "updateForgotPassword"
	},
	
	render : function() {
		this.refreshTemplate();	
		
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.resetPasswordTemplate());
		this.initializeValidation();
	},
	
	initializeValidation : function() {
		var eventTrigger = $("#resetPasswordReset"),
			formContainer = $("#resetPasswordContainer");
			
		if(formContainer.length > 0) {
			FFM.FormValidator.currentLocale = locale;
			var resetPasswordValidator = new FFM.FormValidator(formContainer, eventTrigger);
		}
	},
	
	returnToChallengeQuestions : function() {
		this.model.trigger("refreshPasswordChallengeQuestionsTemplates");	
		router.navigate("forgotPasswordQuestions", {trigger: true});
	},
	
	goToSignUp : function(){
		this.model.trigger("signUpStepOne");
		router.navigate("signUpStepOne", {trigger: true});	
	},
	
	updateForgotPassword : function() {
		var $this = this,
			theResponse;
			
		blockUIForProfile();
		this.setUpdateModelInfo();
		var username = $.trim($('#userNameForgotPassword').val());
		var uuid = $.trim($('#forgotPasswordUuid').val());
		if(!isEmpty(username)){
			$this.updateForgotPasswordModel.url = environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateForgottenPassword/"+username;
			$this.updateForgotPasswordModel.set({"userName" : username});
			$this.updateForgotPasswordModel.set({"emailConfirmationId" : uuid});
			$this.updateForgotPasswordModel.save(null, {
				success : function(model, response) {
					$.unblockUI();
					$this.handleResponse(response);
				},
				error : function(model, response) {
					console.log("Service failure");
					$.unblockUI();
					try {
						theResponse = $.parseJSON(response.responseText);
						$this.handleResponse(theResponse);
					}
					catch(e) {
						$this.model.trigger('forgotPasswordCouldNotProcessRequestTemplate');
					}
				}
			});
		}
	},
	
	handleResponse : function( response ) {
		response.errors[0].errorType = response.errors[0].errorType.toUpperCase();
		console.log(response.errors[0].errorType);
		switch (response.errors[0].errorType) {
			case '200': //Your password was reset
				this.updateForgotPasswordModel.set({'email' : response.email});
				this.model.trigger('resultSuccessful');
				break;
			case 'E514': //User ID Invalid
				this.model.trigger('userIDisInvalid');
				break;
			case 'E513': //Challenge Questions and Answers do not match
				this.model.trigger('questionsAndAnswersDoNotMatch');
				break;
			case 'E521': //Challenge Questions
				this.model.trigger('questionsDontMatch');
				break;
			case 'E128': //Password invalid format
				this.model.trigger('passwordInvalid');
				break;
			case 'E111': //Password does not match the confirm password
				this.model.trigger('passwordsDoNotMatch');
				break;
			case '204': //couldn't find a matched
				this.model.trigger('forgotPasswordCouldNotProcessRequestTemplate');
				break;
			default: //couldn't find a matched
				this.model.trigger('forgotPasswordCouldNotProcessRequestTemplate');
				break;		
		}
	},
	
	setUpdateModelInfo : function () {
		this.updateForgotPasswordModel.set({'securityQuestions' : []});
		
		var questionsFromFetch = this.fetchSecurityQuestionsModel.get('securityQuestions');
		var questions = this.updateForgotPasswordModel.get('securityQuestions');
		
		if(!isEmpty(questionsFromFetch)) {
			for(var i = 0; i < 3; i++) {
				questions.push(newEIDMSecurityQuestion());
							
				questions[i].question = questionsFromFetch[i].question;
				questions[i].answer = $.trim($('#forgotPasswordSecurityQAnswer'+i).val());
				questions[i].index = i;
			}
		}
		
		this.updateForgotPasswordModel.set({'password' : $.trim($('#resetPasswordNewPassword').val())});
		this.updateForgotPasswordModel.set({"securityQuestions" : questions});
		
		if(this.updateForgotPasswordModel.attributes.hasOwnProperty('errors')) {
			delete this.updateForgotPasswordModel.attributes.errors;
		}
	}
});
var registrationResetPasswordBBView = new Registration_ResetPasswordBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_ExpiredPasswordBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#expiredPasswordPage"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	updateExpiredPasswordModel : registrationEIDMIntegrationUpdateExpiredPasswordBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	expiredPasswordTemplate : _.template($('#expiredPasswordTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'updatePassword','goToSignUp',
				'setUpdateModelInfo');
				
		this.model.bind('refreshExpiredPasswordTemplates', this.refreshTemplate);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #passwordExpiredSignUpButton" : "goToSignUp",
		"click #expiredPasswordContinue" : "updatePassword"
	},
	
	render : function() {
		this.refreshTemplate();	
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.expiredPasswordTemplate());
	},
	
	goToSignUp : function(){
		this.model.trigger("signUpStepOne");	
		router.navigate("signUpStepOne", {trigger: true});		
	},

	updatePassword : function() {
		var $this = this;
		this.setUpdateModelInfo();
		var username = ffeUserName;
		if(!isEmpty(username)) {
			$this.updateExpiredPasswordModel.url =environment+"/ee-rest/ffe/" +locale +"/MyAccountEIDMUnsecuredIntegration/updateExpiredPassword/"+username;
			$this.updateExpiredPasswordModel.set({"userName" : username});
			$this.updateExpiredPasswordModel.save(null, {
				success : function(model, response) {
					$this.model.trigger('resultSuccessful');
				},
				error : function(model, response) {
					$this.model.trigger('resultUnsuccessful');
				}
			});
		}
	},
	setUpdateModelInfo : function () {
		this.updateExpiredPasswordModel.set({'oldPassword' : $.trim($('#expiredPasswordOldPassword').val())});
		this.updateExpiredPasswordModel.set({'newPassword' : $.trim($('#expiredPasswordNewPassword').val())});
	}
});
var registrationExpiredPasswordBBView = new Registration_ExpiredPasswordBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_RegistrationStepOneBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#registrationSignUpOne"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	createLiteAccountModel : registrationEIDMIntegrationCreateLiteEIDMAccountBBModel,
	basicValidationRulesModel : registrationEIDMIntegrationFetchValidationRulesEIDMAccountBBModel,
	
	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	suffixDropDownUSTemplate : _.template($('#suffixDropDownUSTemplate').html()),
	stateDropDownUSTemplateFFM : _.template($('#stateDropDownUSTemplateFFM').html()),
	registrationSignUpStepOneTemplate : _.template($('#registrationSignUpStepOneTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'goToStepTwo', 'closeModel', 'goToLogIn',
				'initializeValidation', 'setModelInfo', 'delayedValuePopulation');
		
		this.model.bind('signUpStepOne', this.refreshTemplate);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #goToStepTwo" : "goToStepTwo",
		"click #step1Close" : "closeModel",
		"click .goToLogIn" : "goToLogIn"
	},
	
	render : function() {
		this.refreshTemplate();	
	},
		
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.registrationSignUpStepOneTemplate());
		
		
		$('#registrationStep1SignUpSuffixContainer').empty();
		$('#registrationStep1SignUpSuffixContainer').append(this.suffixDropDownUSTemplate({
			'idToUse' : 'registrationSignUpStep1Suffix',
			'labelToUse' : this.resources['ffe.ee.myAccount.label.suffix']+" "+'<span class="instructionalText">'+ this.resources['ffe.ee.myAccount.label.optional']+'</span>',
			'forToUse' : 'registrationSignUpStep1Suffix',
			'isRequired' : false,
			'nameToUse' : null
		}));
		
		$("#registrationSignUpStep1Suffix")
		.attr('data-validate', 'EIDMSuffix')
		.attr('aria-describedby', 'registrationSignUpStep1Suffix-feedbackMsg');
		
		$('#registrationStep1SignUpStateContainer').empty();
		$('#registrationStep1SignUpStateContainer').append(this.stateDropDownUSTemplateFFM({
			'idToUse' : 'registrationStateStep1SignUp',
		}));
		
		$("#registrationStateStep1SignUp")
			.attr('data-validate', 'notBlank EIDMState')
			.attr('aria-describedby', 'registrationStateStep1SignUp-feedbackMsg');
		
		$('input').customInput();
		
		//inspect cookie to prepopulate the state cookie
		var quickAnswers = parseCookie(COOKIE_QUICK_ANSWERS);
		if(!isEmpty(quickAnswers)) {
			//note this is the state name, we need the state code
			if (!isEmpty(quickAnswers.state)) {
				var stateCode = getStateCodeFromState(quickAnswers.state);
				$('#registrationStateStep1SignUp').val(stateCode);
			}
		}
		
		//Direct enrollment, pre populate
		if(!isEmpty(agentBrokerSAMLToken))
		{
          this.delayedValuePopulation();
		}
		
		this.initializeValidation();
	},

   delayedValuePopulation : function(){

	    var $this = this;
       // make sure we don;t try to do this before the saml has been posted
	    if (window.registrationInitialSessionCallsComplete) {
	        if (!isEmpty(agentBrokerSAMLToken)) {
                var sessionInfo = getAgentBrokerInfo();
	             var firstName = sessionInfo['First Name'];
	             var middleName = sessionInfo['Middle Name'];
	             var lastName = sessionInfo['Last Name'];
	             var suffix = sessionInfo['Suffix Name'];
	             var emailAddress = sessionInfo['Email Address'];
	             var state = sessionInfo['State'];
	             $('#registrationThreeStepFirstName').val(firstName);
	             $('#registrationThreeStepMiddleName').val(middleName);
	             $('#registrationThreeStepLastName').val(lastName);
						
	             $('#registrationSignUpStep1Suffix').val(suffix);
						
	             $('#registrationThreeStepEmailUpdates').val(emailAddress); 
	             $('#registrationStateStep1SignUp').val(state);
	        }
	    } else {
	        setTimeout(function () {
	            $this.delayedValuePopulation();
	        }, 100);
	    }
    
   },
	
	initializeValidation : function() {
		var eventTrigger = $("#goToStepTwo"),
			formContainer =$("#registrationStep1ValidationContainer");
			
		if(formContainer.length > 0) {
			FFM.FormValidator.currentLocale = locale;
			var step1Validator = new FFM.FormValidator(formContainer, eventTrigger);		
		}
	},
	
	goToLogIn : function() {
		this.model.trigger("refreshLogInTemplates");
		router.navigate("logIn", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
	},
		
	goToStepTwo : function() {
		this.setModelInfo();
		this.model.trigger('signUpStepTwo');
		router.navigate("signUpStepTwo", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#registrationSignUpTwo h2').attr('tabindex', '-1').focus();
	},
	
	setModelInfo : function() {
		this.createLiteAccountModel.set({'firstName' : $.trim($('#registrationThreeStepFirstName').val())});
		this.createLiteAccountModel.set({'middleName' : $.trim($('#registrationThreeStepMiddleName').val())});
		this.createLiteAccountModel.set({'lastName' : $.trim($('#registrationThreeStepLastName').val())});
		this.createLiteAccountModel.set({'suffix' : $('#registrationSignUpStep1Suffix').val()});
		this.createLiteAccountModel.set({'email' : $.trim($('#registrationThreeStepEmailUpdates').val())});	
		this.createLiteAccountModel.set({'stateLivedIn' : $.trim($('#registrationStateStep1SignUp').val())});	
		
		if($('#registrationStepOneCheckbox').is(":checked") === true){
			this.createLiteAccountModel.set({'subscriptionTrigger' : true});
		}
		else {
			this.createLiteAccountModel.set({'subscriptionTrigger' : false});
		}
	},
	
	closeModel : function() {
		this.model.trigger('refreshLogInTemplates');
		router.navigate("logIn", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
	}
});
var registrationRegistrationStepOneBBView = new Registration_RegistrationStepOneBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_RegistrationStepTwoBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#registrationSignUpTwo"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	securityQuestionsModel : registrationEIDMIntegrationFetchSecurityQuestionsEIDMAccountBBModel,
	createLiteAccountModel : registrationEIDMIntegrationCreateLiteEIDMAccountBBModel,
	verifyEmailAddressModel : registrationEIDMIntegrationVerifyEmailAddressEIDMAccountBBModel,
	basicValidationRulesModel : registrationEIDMIntegrationFetchValidationRulesEIDMAccountBBModel,
	
	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	registrationSignUpStepTwoTemplate : _.template($('#registrationSignUpStepTwoTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'goToStepThree', 'gobackToPrevious', 'goToLogIn',
				'initializeValidation', 'setModelInfo');
				
					
		this.model.bind('signUpStepTwo', this.refreshTemplate);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #goToStepThree" : "goToStepThree",
		"click #gobackToStepOne" : "gobackToPrevious",
		"click .goToLogIn" : "goToLogIn"
	},
	
	render : function() {
		this.refreshTemplate();	
	},
		
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.registrationSignUpStepTwoTemplate());

		this.initializeValidation();
	},
	
	initializeValidation : function() {
		var validations = this.basicValidationRulesModel.get('validations'),
			eventTrigger = $("#goToStepThree"),
			formContainer =$("#registrationValidationStep2Container");
			
		if(formContainer.length > 0) {
			FFM.FormValidator.currentLocale = locale;
			var step2Validator = new FFM.FormValidator(formContainer, eventTrigger);
		}
	},
	
	goToStepThree : function() {
		this.setModelInfo();
		this.model.trigger('signUpStepThree');
		router.navigate("signUpStepThree", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#registrationSignUpThree h2').attr('tabindex', '-1').focus();
	},
	
	setModelInfo : function() {
		this.createLiteAccountModel.set({'password' : $.trim($('#registrationThreeStepPassword').val())});
		this.createLiteAccountModel.set({'userName' : $.trim($('#registrationThreeStepUsername').val())});
	},
		
	goToLogIn : function() {
		this.model.trigger("refreshLogInTemplates");
		router.navigate("logIn", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
	},
		
	gobackToPrevious : function() {
		this.model.trigger('signUpStepOne');
		router.navigate("signUpStepOne", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#registrationSignUpOne h2').attr('tabindex', '-1').focus();
	}
});
var registrationRegistrationStepTwoBBView = new Registration_RegistrationStepTwoBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// registration
// gov.hhs.cms.ffe.ee.web.registration
// web
//
var Registration_RegistrationStepThreeBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#registrationSignUpThree"),

	// The "model" attribute is the one that the model binding library uses
	model : registrationRegistrationBBModel,
	securityQuestionsModel : registrationEIDMIntegrationFetchSecurityQuestionsEIDMAccountBBModel,
	createLiteAccountModel : registrationEIDMIntegrationCreateLiteEIDMAccountBBModel,
	verifyEmailAddressModel : registrationEIDMIntegrationVerifyEmailAddressEIDMAccountBBModel,
	basicValidationRulesModel : registrationEIDMIntegrationFetchValidationRulesEIDMAccountBBModel,
	//directEnrollmentModel : directEnrollmentBBModel,
	//isDirectEnrollmentConsumerModel : isDirectEnrollmentConsumerBBModel,
	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	registrationSignUpStepThreeTemplate : _.template($('#registrationSignUpStepThreeTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "registration",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'createProfile', 'gobackToPrevious', 'goToLogIn',
				'initializeValidation','initRenderSecurityQuestions', 'changeSecurityQuestions', 'handleResponse',
				'setModelInfo'/*,'fetchIsDirectEnrollmentConsumer'*/);
				
					
		this.model.bind('signUpStepThree', this.refreshTemplate);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #signUpCreate" : "createProfile",
		"click #gobackToPrevious" : "gobackToPrevious",
		"click .goToLogIn" : "goToLogIn",
		"change .securityQuestions" : "changeSecurityQuestions"
	},
	
	render : function() {
		this.refreshTemplate();	
	},
		
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.registrationSignUpStepThreeTemplate());
		
		var securityQuestions = this.securityQuestionsModel.get('securityQuestions');
		
		if(!isEmpty(securityQuestions)){
			this.initRenderSecurityQuestions();
		}
		
		this.initializeValidation();
	},
	
	initializeValidation : function() {
		var validations = this.basicValidationRulesModel.get('validations'),
			eventTrigger = $("#signUpCreate"),
			formContainer = $("#registrationValidationStep3Container");
					
		if(formContainer.length > 0) {
			FFM.FormValidator.currentLocale = locale;
			var step3Validator = new FFM.FormValidator(formContainer, eventTrigger);
		}
	},
	
	initRenderSecurityQuestions : function() {
		var securityQs = this.securityQuestionsModel.get('securityQuestions');
		$('.securityQuestions option', '#registrationSignUp').remove();
		
		//loop through the 4 inputs
		for(var j = 0; j < 3; j++) {
			$('#registrationSignUpStep3SecurityQ'+j).append('<option  value="" selected>'+this.resources['ffe.ee.shared.select']+'</option>');
			if(!isEmpty(securityQs)) {
			//loop through all the security questions
				for(var i = 0; i < securityQs.length ; i++) {
					$('#registrationSignUpStep3SecurityQ'+j).append('<option value="'+securityQs[i].question+'">'+securityQs[i].question+'</option>');
				}
			}
		}
	},
	
	changeSecurityQuestions : function() {
		filterSecurityQuestions(this.securityQuestionsModel, 'registrationSignUpThree', this.resources['ffe.ee.shared.select']);
	},
		
	createProfile : function() {
		var $this = this,
			theResponse;
		
		blockUIForProfile();
		this.setModelInfo();
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.createLiteAccountModel.save(null, {
			success : function(model, response) {
				$.unblockUI();
				$this.handleResponse(response);
			},
			error : function(model, response) {
				console.log('create lite loa1 account failure');
				$.unblockUI();
				try{
					theResponse = $.parseJSON(response.responseText);
					$this.handleResponse(theResponse);
				}
				catch(e) {
					$this.model.trigger('profileCouldNotBeCreated');
				}
			}
		}); 
		$this.model.trigger('waitingToCreate');	
		router.navigate("registrationSignUpResults:waiting", {trigger: true});
	},
	
	handleResponse : function( response ) {
		response.errors[0].errorType = response.errors[0].errorType.toUpperCase();
		console.log(response.errors[0].errorType);
		switch (response.errors[0].errorType) {
			case '200': //Almost there
				//$this.model.trigger('signUpSuccess');
				//$this.fetchIsDirectEnrollmentConsumer();
				this.model.trigger('almostFinished');
				break;
			case '204': //couldnt be created at this time
				this.model.trigger('couldNotCreateAccountGeneric');
				break;
			case 'E110': //User ID already exists
				this.model.trigger('userIDAlreadyExists');
				break;
			case 'E537': //Combination of First Name, Last Name, and Email Address is not Unique
				this.model.trigger('combinationNotUnique');
				break;
			case 'E138': //Answers to challenge questions (format)
				this.model.trigger('securityQuestionsInvalidFormat');
				break;
			case 'E114': //Two or more answers to the challenge questions that you have provided are the same
				this.model.trigger('securityQuestionsDuplicate');
				break;
			case 'E117': //couldnt be created at this time
				this.model.trigger('profileCouldNotBeCreated');
				break;
			case '250': //Exception in createSystemUser data service
				this.model.trigger('mlError250');
				break;
			case '950': //Exception in createSystemUser business service
				this.model.trigger('mlError950');
				break;
			case '990': //Exception in email delivery
				this.model.trigger('govDeliveryError');
				break;
			case '500': //Please wait a few moments and try again
				this.model.trigger('couldNotCreateAccountGeneric');
				break;
			default :
				this.model.trigger('couldNotCreateAccountGeneric');
				break;
		}
	},
	
	/*fetchIsDirectEnrollmentConsumer : function(){
		var $this = this;
		this.isDirectEnrollmentConsumerModel.fetch({
			success : function(model, response) {
				if(response === true){
					$this.directEnrollmentModel.save();
				} 
			},
			error : function(model, response) {
				console.log(response);
			}
		});
	},*/
	
	setModelInfo : function() {
		this.createLiteAccountModel.set({'securityQuestions' : []});
		var questions = this.createLiteAccountModel.get('securityQuestions');
		var language = locale;
		
		for(var i = 0; i < 3; i++) {
			questions.push(newEIDMSecurityQuestion());
			
			questions[i].question = $.trim($('#registrationSignUpStep3SecurityQ'+i).val());
			questions[i].answer = $.trim($('#registrationSignUpStep3SecurityQ'+i+'Answer').val());
			questions[i].index = i;
		}
		
		this.createLiteAccountModel.set({'language' : language});
				
		if(this.createLiteAccountModel.attributes.hasOwnProperty('errors')) {
			delete this.createLiteAccountModel.attributes.errors;
		}
	},
	
	verifyEmailAddress : function() {	
		this.verifyEmailAddressModel.set({'username' : this.createLiteAccountModel.get('userName')});
		
		this.verifyEmailAddressModel.save(null, {
			success : function(model, response) {
				console.log('email was verified');
			},
			error : function(model, response) {
				console.log('email was not verfied');
			}
		});
	},
	
	goToLogIn : function() {
		this.model.trigger("refreshLogInTemplates");
		router.navigate("logIn", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
	},
		
	gobackToPrevious : function() {
		this.model.trigger('signUpStepTwo');
		router.navigate("signUpStepTwo", {trigger: true});
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('#registrationSignUpTwo h2').attr('tabindex', '-1').focus();
	}
});
var registrationRegistrationStepThreeBBView = new Registration_RegistrationStepThreeBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBMasterView.js.vsl in andromda-backbone-js-ui cartridge.
//
var MasterBBView = Backbone.View.extend({
	el : $("body"),

	loginView : registrationLoginBBView,

	registrationView : registrationRegistrationBBView,

	forgotPasswordDetailsView : registrationForgotPasswordDetailsBBView,

	resetPasswordView : registrationResetPasswordBBView,

	expiredPasswordView : registrationExpiredPasswordBBView,

	registrationResultsView : registrationRegistrationResultsBBView,

	forgotUsernameDetailsView : registrationForgotUsernameDetailsBBView,

	loginTermsView : registrationLoginTermsAndConditionsBBView,

	forgotUsernameResultsView : registrationForgotUsernameResultsBBView,

	passwordChallengeView : registrationForgotPasswordChallengeQuestionBBView,

	forgotPasswordResultsView : registrationForgotPasswordResultsBBView,

	registrationModel : registrationRegistrationBBModel,
	
	verifyEmailAddress : registrationEIDMIntegrationVerifyEmailAddressEIDMAccountBBModel,
	
	securityQuestionsModel : registrationEIDMIntegrationFetchSecurityQuestionsEIDMAccountBBModel,
	
	userSpecSecurityQuestionsModel : registrationEIDMIntegrationFetchUserSpecSecurityQuestionsEIDMAccountBBModel,
	
	validationRulesModel : registrationEIDMIntegrationFetchValidationRulesEIDMAccountBBModel,

	registrationStepOneView : registrationRegistrationStepOneBBView,

	registrationStepTwoView : registrationRegistrationStepTwoBBView,

	registrationConfirmUserLoginModel : registrationEIDMIntegrationConfirmUserLoginBBModel,
	
	registrationStepThreeView : registrationRegistrationStepThreeBBView,
	
	//directEnrollmentModel : DirectEnrollmentBBModel,
	
	isDirectEnrollmentConsumerModel : IsDirectEnrollmentConsumerBBModel
});
var masterBBView = new MasterBBView();

var registrationRouter = Backbone.Router.extend({
	routes: {
		"signUp" : "signUp",
		"signUpStepOne" : "signUpStepOne",
		"signUpStepTwo" : "signUpStepTwo",
		"signUpStepThree" : "signUpStepThree",
		"registrationSignUpResults:param" : "registrationSignUpResults",
		"logIn" : "logIn",
		"termsAndConditions" : "termsAndConditions",
					
		"forgotUsername" : "forgotUsername",
		"forgotUsernameResults:param" : "forgotUsernameResults",
		"forgotPassword" : "forgotPassword",
		"forgotPasswordQuestions" : "forgotPasswordQuestions",
		"forgotPasswordResults:param" : "forgotPasswordResults",
		"expiredPassword" : "expiredPassword",
		"resetPassword" : "resetPassword",
		
		"*default" : "logIn"
	},
	logIn : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#logInPage').show();
		document.title = resources['ffe.ee.myAccount.LogIn.pageTitle'];
	},
	signUp : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#registrationSignUp').show();
		document.title = resources['ffe.ee.myAccount.registration.pageTitle'];
	},
	signUpStepOne : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#registrationSignUpOne').show();
		this.setSignUpStepsProgress('signUpStep0');
		document.title = resources['ffe.ee.myAccount.registration.step1.pageTitle'];
	},
	signUpStepTwo : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#registrationSignUpTwo').show();
		this.setSignUpStepsProgress('signUpStep1');
		document.title = resources['ffe.ee.myAccount.registration.step2.pageTitle'];
	},
	signUpStepThree : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#registrationSignUpThree').show();
		this.setSignUpStepsProgress('signUpStep2');
		document.title = resources['ffe.ee.myAccount.registration.step3.pageTitle'];
	},
	registrationSignUpResults : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#registrationSignUpResults').show();
	},
	termsAndConditions : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#logInTermsAndConditionsPage').show();
	},
	forgotUsername : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#forgotUsernameDetails').show();
		document.title = resources['ffe.ee.myAccount.registration.forgotUsername.pageTitle'];
	},
	forgotUsernameResults : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#forgotUsernameResultsPage').show();
	},
	forgotPassword : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#forgotPasswordPage').show();
		document.title = resources['ffe.ee.myAccount.registration.forgotPassword.pageTitle'];
	},
	forgotPasswordQuestions : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#passwordChallengeQuestionsPage').show();
		document.title = resources['ffe.ee.myAccount.registration.SecurityQuestions.pageTitle'];
	},
	forgotPasswordResults : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#forgotPasswordResultsPage').show();
	},
	expiredPassword : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#expiredPasswordPage').show();
		document.title = resources['ffe.ee.myAccount.registration.PasswordExpired.pageTitle '];

	},
	resetPassword : function() {
		this.hideAll();
		$('#logInSignUpContent').show();
		$('#resetPasswordPage').show();
		document.title = resources['ffe.ee.myAccount.registration.ResetPassword.pageTitle'];
	},
	hideAll : function() {
		$('#logInPage').hide();
		$('#registrationSignUp').hide();
		$('#registrationSignUpOne').hide();
		$('#registrationSignUpTwo').hide();
		$('#registrationSignUpThree').hide();
		$('#registrationSignUpResults').hide();
		$('#logInSignUpContent').hide();
		$('#logInTermsAndConditionsPage').hide();
		$('#forgotUsernameDetails').hide();
		$('#forgotUsernameResultsPage').hide();
		$('#forgotPasswordPage').hide();
		$('#passwordChallengeQuestionsPage').hide();
		$('#forgotPasswordResultsPage').hide();
		$('#expiredPasswordPage').hide();
		$('#resetPasswordPage').hide();
		
		//hide commonErrorMessage content
		$('#commonErrorMessageBlock').hide();		
	},
	setSignUpStepsProgress : function(number) {
		//$('#screeningQuestionNav').show();
		var m,k, num = $('#signUpStepNav li').get();
		var length = num.length;
		
		for (m = 0; m < length+1; m++) {
			// Only performs logic when loop count is equal to current progress bar li
			if (num[m] === number) {
				// Applies CSS for current page li
				$(num[m]).children('i').prop('class', 'iconCustom-circle-filled circleCurrent');
				
				// Applies CSS to all pages prior to the current page
				for (k = m - 1; k >= 0; k--) {
					$(num[k]).children('i').prop('class', 'iconCustom-circle-filled circleComplete');
				}
			}	
			else {
					$(num[m]).children('i').prop('class', 'iconCustom-circle-filled');
			}
		}
	}
});

var router = new registrationRouter();
Backbone.history.start({root : "/"+eePath+"/"+tenantId+"/"+locale+"/registration"});

});