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

var loggingEnabled =false;

var environment = '';

var envReference = 'Production';




var spanishEnabled = 'false';

	resources['ffe.ee.shared.validation.required'] = '0 is required.';
	resources['ffe.ee.shared.dropdown.relation.january'] = 'January';
	resources['ffe.ee.shared.formValidator.eeChoose'] = 'Choose "individual," "SHOP," or "both."';
	resources['ffe.ee.shared.dropdown.docType.immigrantVisa'] = 'Machine Readable Immigrant Visa &#40;with Temporary I-551 Language&#41;';
	resources['ffe.ee.shared.nav.subNav.reviewAndConfirm'] = 'Review &amp; Confirm';
	resources['ffe.ee.shared.exceptions.400.403'] = 'Invalid XML Request';
	resources['ffe.ee.shared.exceptions.400.401'] = 'Missing action URI';
	resources['ffe.ee.shared.exceptions.400.400'] = 'Missing Taskname';
	resources['ffe.ee.shared.label.authorizedRep'] = 'Authorized representative';
	resources['ffe.ee.shared.globalHeader.nav.getResults'] = 'Get Results ';
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
	resources['ffe.ee.shared.employmentStatus.partTime'] = 'Part Time';
	resources['ffe.ee.shared.error.reviewInformation'] = 'Review the information you entered&#46; If the information you entered is correct&#44; select the &#39;Continue&#39; button&#46; If the information you entered isn&#39;t correct&#44; make any necessary changes&#44; then select the &#39;Continue&#39; button&#46;';
	resources['ffe.ee.shared.globalHeader.nav.apply'] = 'Apply ';
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
	resources['ffe.ee.shared.closeAlertMessage'] = 'Close alert message';
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
	resources['ffe.ee.shared.exceptions.500.70004'] = 'EnrollmentTransactionResponseList is null on ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.70003'] = 'Error in creating new enrollment groupsException in calling SubmitCustomEnrollmentGroups service';
	resources['ffe.ee.shared.exceptions.500.70002'] = 'Exception while calling logic engineException in calling ConfirmEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.70001'] = 'General Exception While calling logic engineException in calling RetrieveQHPPaymentPortalData service';
	resources['ffe.ee.shared.exceptions.500.70000'] = 'Exception while mapping benefit data, waiting data to the metal type plan data object in RetrieveMetalGroupResultsException in calling RetrieveMetalGroupResults service';
	resources['ffe.ee.shared.formValidator.state'] = 'This is not a valid state code';
	resources['ffe.ee.shared.formValidator.eeCategoryCode'] = 'This is not a valid category code';
	resources['ffe.ee.shared.header.learn'] = 'Learn';
	resources['ffe.ee.shared.globalHeader.nav.getCoverage'] = 'Get Coverage ';
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
	resources['ffe.ee.shared.help'] = 'Help';
	resources['ffe.ee.shared.formValidator.eeChoose.percentages'] = 'Select between [x]-[x] items.';
	resources['ffe.ee.shared.label.socialSecurityNumber'] = 'Social Security number &#40;SSN&#41;';
	resources['ffe.ee.shared.exceptions.403.401'] = 'Unauthorized access';
	resources['ffe.ee.shared.footer.link.terms'] = 'Terms of Service';
	resources['ffe.ee.shared.nav.subNav.eligiblePlans'] = 'Eligible Plans';
	resources['ffe.ee.shared.403.forbidden'] = 'Forbidden';
	resources['ffe.ee.shared.help.menu.helpCenter'] = 'Help Topics';
	resources['ffe.ee.shared.label.optional'] = 'optional';
	resources['ffe.ee.shared.dropdown.docType.ds2019'] = 'DS2019 &#40;Certificate of Eligibility for Exchange Visitor &#40;J-1&#41; Status&#41;';
	resources['ffe.ee.shared.footer.image.path.USA'] = 'images/logo_USAgov.png';
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
	resources['ffe.ee.shared.modal.modalDialog'] = 'You are in modal dialog';
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
	resources['ffe.ee.shared.sessionExpired.description2'] = 'Select &#34;ok&#34; to extend your session for 30 minutes. Otherwise, select &#34;Cancel&#34; to end your session in 5 minutes';
	resources['ffe.ee.shared.sessionExpired.description1'] = 'Your session is about to expired';
	resources['ffe.ee.shared.dropdown.language.chinese'] = 'Chinese';
	resources['ffe.ee.shared.step'] = 'Step';
	resources['ffe.ee.shared.exceptions.400.40001'] = 'Bad Request - Enrollment group member list emptyException in calling SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.exceptions.400.40000'] = 'Wrong plan type in RetrievePlansSummaryByMetalException in calling RetrievePlansSummaryByMetal service';
	resources['ffe.ee.shared.dropdown.relation.november'] = 'November';
	resources['ffe.ee.shared.label.error'] = 'Important&#58;';
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
	resources['ffe.ee.shared.formValidator.eeZipcode'] = 'This ZIP code isn&#39;t valid';
	resources['ffe.ee.shared.footer.hiddenText.archive'] = 'opens in a new window';
	resources['ffe.ee.shared.footer.link.otherSites'] = 'Links to other sites';
	resources['ffe.ee.shared.formValidator.eeCheckBox'] = 'To continue, check this box.';
	resources['ffe.ee.shared.label.returnToMyAccount'] = 'Return to your Marketplace account';
	resources['ffe.ee.shared.footer.hiddenText.otherSites'] = 'opens in a new window';
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
	resources['ffe.ee.shared.formValidator.eeAlpha'] = 'This value isn&#39;t valid.';
	resources['ffe.ee.shared.validation.emailConfirmation'] = 'Email addresses don’t match.';
	resources['ffe.ee.shared.dropdown.relation.childOfDomesticPartner'] = 'Child of Domestic Partner';
	resources['ffe.ee.shared.dropdown.language.french'] = 'French';
	resources['ffe.ee.shared.formValidator.notAnEmail'] = 'This is not a valid user name';
	resources['ffe.ee.shared.error.uploading'] = 'Select a file for uploading';
	resources['ffe.ee.shared.formValidator.eeNumeric'] = 'This value isn&#39;t valid.';
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
	resources['ffe.ee.shared.exceptions.500.80005'] = 'EnrollmentTransactionResponseList is null on ConfirmEnrollmentTransaction service';
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
	resources['ffe.ee.shared.employmentStatus.spouse'] = 'Spouse of Owner';
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
	resources['ffe.ee.shared.formValidator.registrationAnswers'] = 'Two or more answers to your security questions were the same. You must provide different answers to each security question.';
	resources['ffe.ee.shared.selectOne'] = '&#40;Select one&#41;';
	resources['ffe.ee.shared.globalHeader.nav.hiddenText.currentStep'] = ', current section';
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
	resources['ffe.ee.shared.exceptions.500.10022'] = 'General exception while call RefreshToDoList service on SubmitCustomEnrollmentGroups service';
	resources['ffe.ee.shared.exceptions.500.10021'] = 'General exception while call RefreshToDoList service on SaveScreeningQuestionsBusiness service';
	resources['ffe.ee.shared.exceptions.500.10020'] = 'General exception while call RefreshToDoList service on SavePlanInEnrollmentGroup service';
	resources['ffe.ee.shared.nav.subNav.savedPlansCurrentlySelected'] = ', currently selected';
	resources['ffe.ee.shared.exceptions.500.10019'] = 'General exception while call RefreshToDoList service on GenerateDentalEnrollmentGroups service';
	resources['ffe.ee.shared.exceptions.500.10018'] = 'General exception while call RefreshToDoList service on ConfirmNonFaEnrollmentTransaction service';
	resources['ffe.ee.shared.exceptions.500.10017'] = 'General exception while call RefreshToDoList service on ConfirmEnrollmentTransaction service';
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
	resources['ffe.ee.shared.modal.stepModal'] = 'You are in step modal';
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
	resources['ffe.ee.shared.employmentStatus.owner'] = 'Owner/Business Partner';
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
	resources['ffe.ee.shared.help.search.value'] = 'help';
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
	resources['ffe.ee.shared.header.HELP.link'] = 'HELP';
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
	resources['ffe.ee.shared.formValidator.eeCurrency'] = 'This value isn&#39;t valid';
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
	resources['ffe.ee.shared.globalHeader.nav.hiddenText.upcomingStep'] = ', upcoming section';
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
	resources['ffe.ee.shared.link.download'] = 'Download';
	resources['ffe.ee.shared.label.upload'] = 'Upload';
	resources['ffe.ee.shared.help.menu.glossary'] = 'Glossary';
	resources['ffe.ee.shared.formValidator.radioGroupMinimum'] = 'Select at least %s item(s)';
	resources['ffe.ee.shared.progress'] = 'Progress';
	resources['ffe.ee.shared.dropdown.relation.june'] = 'June';
	resources['ffe.ee.shared.sections.hiddenText'] = 'Sections';
	resources['ffe.ee.shared.dropdown.relation.july'] = 'July';
	resources['ffe.ee.shared.javascript.reload'] = 'Press to reload after enabling JavaScript';
	resources['ffe.ee.shared.nav.completedSection'] = 'Completed section';
	resources['ffe.ee.shared.label.perMonthLong'] = '/month';
	resources['ffe.ee.shared.formvalidator.summary.errorPrefix'] = '<span class="iconCustom-exclamation-sign" aria-hidden="true"></span><span class="HiddenText">Important: </span>';
	resources['ffe.ee.shared.employmentStatus.fullTime'] = 'Full Time';


var ffeUserName = 'STRML_';
var ffeFirstName ='Samuel';
var ffeCCRCheck = '';
var ffeCCRUser = 'false';
var ffeCCRUserID = '';
var ffeLOAUserLvl = '1';
var ffeLOAStatusValue = '';

$.referenceTypes = {};
	resources['ffe.ee.myAccount.inconsistencies.medch5.detaildescription'] = '<p>There&#39;s a difference between what [FN] entered on the application and what the Marketplace has verified with other government records. You need to provide the Marketplace one of the documents below by [Date]. [FN] won&#39;t qualify for [[state Medicaid program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Driver&#39;s license</li><li>State ID</li><li>U.S. passport</li><li>If not a U.S. citizen, provide current immigration documents from the Department of Homeland Security (DHS)</li></ul>';
	resources['ffe.ee.myAccount.coverage.action'] = 'Action:';
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
	resources['ffe.ee.myAccount.enroll.toDoList.memberNames'] = 'For [FN], [FN], and [FN]';
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
	resources['ffe.ee.myAccount.upgradeLite.error.e124'] = 'Important: We can&#39;t verify your identity. Call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
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
	resources['ffe.ee.myAccount.idProofing.documentUpload.question'] = 'Document type:';
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
	resources['ffe.ee.myAccount.applicationDetails.incomplete.description'] = 'You haven&#39;t finished your application for health coverage. You must complete and submit your application to find out if you&#39;re eligible for coverage and to enroll in a plan.';
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
	resources['ffe.ee.myAccount.planPrograms.status'] = 'Status:';
	resources['ffe.ee.myAccount.accountSettings.addSecContact'] = 'Add Secondary Contact';
	resources['ffe.ee.myAccount.coverage.other'] = 'Other';
	resources['ffe.ee.myAccount.inconsistencies.generalInconsistency.detaildescription'] = '<p>Keep any original documents. Send a copy of one of the documents electronically to the Marketplace by logging into your Marketplace account, or mail them to: Health Insurance Marketplace, Department of Health and Human Services, 465 Industrial Boulevard, London, Kentucky  40750-0001. If you need additional time to get these documents, please call 1-800-318-2596 (TTY: 1-855-889-4325).</p>';
	resources['ffe.ee.myAccount.registration.genericError.description'] = '<p>Your account couldn&#39;t be created.</p><ul><li>User ID already exists.  Choose a different User ID.</li><li>Two or more answers to the security questions that you have provided are the same. You must provide distinct answers to the chosen security questions.</li><li>The email address you entered is already associated with an account.  If you are unsure, please select &#39;Forgot your username&#39; on the Log In page</li></ul>';
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
	resources['ffe.ee.myAccount.idProofing.ccrApplicationFound.description'] = 'To view your application, you&#243;ll need to answer a security question to verify your identity.';
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
	resources['ffe.ee.myAccount.employer.terminateCoverageModal.confirmTerminate'] = 'I have fully read and understand that I&#39;m choosing to terminate coverage from this plan for any members in my household that are currently enrolled in this plan. I also understand that there may be tax implications from terminating a plan early.';
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
	resources['ffe.ee.myAccount.communicationPref.phone.editButton.hiddenText'] = 'Phone number';
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
	resources['ffe.ee.myAccount.inconsistencies.in02.shortdescription'] = 'Validate [FN]&#39;s Social Security number (SSN)';
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
	resources['ffe.ee.myAccount.home.applicationIncompleteMessage'] = 'You haven&#39;t finished your application for health coverage. You must complete and submit your application to find out if you&#39;re eligible for coverage and to enroll in a plan.';
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
	resources['ffe.ee.myAccount.terminate.endCoverage'] = 'Your coverage will end on [END_DATE].';
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
	resources['ffe.ee.myAccount.idProofing.ccrApplication.pageTitle'] = 'Verify Your Identity';
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
	resources['ffe.ee.myAccount.registration.genericError.heading'] = 'Your account couldn&#39;t be created';
	resources['ffe.ee.myAccount.settings.toChangeAddress'] = 'To change your address, you must';
	resources['ffe.ee.myAccount.idProofing.upload.fileType.socialSecurityCard'] = 'Social Security card';
	resources['ffe.ee.myAccount.logIn.password'] = 'Password';
	resources['ffe.ee.myAccount.inconsistencies.apcsr3.description'] = 'Verify [FN] is losing [MECType]';
	resources['ffe.ee.myAccount.removePerson.modal.title'] = 'Removing a person from a health plan';
	resources['ffe.ee.myAccount.forgotPassword.username'] = 'What is your Marketplace username?';
	resources['ffe.ee.myAccount.inconsistencies.in12.shortdescription'] = 'Verify that [FN] is not enrolled in Peace Corps coverage';
	resources['ffe.ee.myAccount.idProofing.ccrQuestionsIncorrect.description'] = 'If you think you typed in the wrong answer to the security question, please call the Marketplace Call Center at 1-800-318-2596.  TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.forgotPassword.provideDetails.firstName'] = 'First name';
	resources['ffe.ee.myAccount.profile.LOALandingPage.exempt.link'] = 'you can get more information and download applications here.';
	resources['ffe.ee.myAccount.inconsistencies.medch33.shortdescription'] = 'Verify [FN]&#39; Social security number and related information';
	resources['ffe.ee.myAccount.notifications.general.collapsed.header'] = 'Notifications';
	resources['ffe.ee.myAccount.registration.accountNotCreated.accountInfo'] = 'The combination of the first name, last name, and email address arent unique.';
	resources['ffe.ee.myAccount.inconsistencies.medch30.shortdescription'] = 'Verify [FN]&#39;s Social Security number (SSN)';
	resources['ffe.ee.myAccount.employerCoverage.viewPrevious'] = 'View previous applications';
	resources['ffe.ee.myAccount.accountSettings.employer.fax'] = 'Fax';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.employerSponsoredBenefits.descriptionText'] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra dictum nisl vitae tincidunt. Suspendisse suscipit tellus at massa eleifend dictum. Mauris imperdiet sem vitae erat egestas volutpat. In hac habitasse platea dictumst.';
	resources['ffe.ee.myAccount.agentBrokerNoAssisterQuestions.header'] = 'No assistor questions';
	resources['ffe.ee.myAccount.label.phoneNumber'] = 'Enter a new phone number';
	resources['ffe.ee.myAccount.inconsistencies.in10.description'] = 'Verify that [FN] is not enrolled in Medicaid or the Children&#39;s Health Insurance Program (CHIP)';
	resources['ffe.ee.myAccount.profile.profileLevel2US.fullName'] = 'John Phillip Smith, Jr.';
	resources['ffe.ee.myAccount.applicationDetails.incomplete.description2'] = 'You haven&#39;t finished your application for health coverage. You must complete and submit your application to find out if you&#39;re eligible for coverage and to enroll in a plan.';
	resources['ffe.ee.myAccount.applicationDetails.incomplete.description1'] = 'You haven&#39;t finished your application for health coverage. You must complete and submit your application to find out if you&#39;re eligible for coverage and to enroll in a plan.';
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
	resources['ffe.ee.myAccount.idProofing.upload.fileType'] = 'What type of document do you want to upload?';
	resources['ffe.ee.myAccount.accountSettings.employer.primaryMailing.description'] = 'Check here if the Primary Mailing Address is the same as Primary Business Addresss';
	resources['ffe.ee.myAccount.inconsistencies.medch37.detaildescription'] = '<p>Send the Marketplace proof of naturalized or derived citizenship, including your Naturalization Certificate or Certificate of Citizenship, by [date inconsistency period ends]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date]. <br/>[FN] can also update their immigration status with the U.S. Department of Homeland Security, U.S. Citizenship and Immigration Services (USCIS). For more information about how to correct your immigration status with the Department of Homeland Security, please contact USCIS by calling the National Customer Service Center at 1&#45;800&#45;375&#45;5283 or by visiting <a href="http://www.infopass.uscis.gov" target="_blank">www.infopass.uscis.gov</a>.</p>';
	resources['ffe.ee.myAccount.idProofing.upload.about'] = 'More information about submitting documents';
	resources['ffe.ee.myAccount.change'] = 'Change';
	resources['ffe.ee.myAccount.registration.emailConfirmation'] = 'Confirm email address';
	resources['ffe.ee.myAccount.registration.questionThree'] = 'Question 3';
	resources['ffe.ee.myAccount.security.questions'] = 'Security Questions';
	resources['ffe.ee.myAccount.agentBroker.noQuestions.pageTitle'] = 'No Assistor Questions';
	resources['ffe.ee.myAccount.inconsistencies.in01.description'] = 'Verify [FN]&#39;s citizenship';
	resources['ffe.ee.myAccount.agentBrokerQuestionsIncorrect.description'] = 'You didn&#39;t answer the questions correctly. You will need to try again.';
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
	resources['ffe.ee.myAccount.agentBrokerSearch.description'] = 'To find a client&#39;s Marketplace application, enter his or her information below.';
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
	resources['ffe.ee.myAccount.authorizations.description'] = 'You can give a trusted person permission to talk about this application with us, see your information, and act for you on matters related to this application, including getting information about your application and signing your application on your behalf. This person is called an “Authorized user.” You can remove an authorized user at any time.';
	resources['ffe.ee.myAccount.reportLifeChanges.reportButton'] = 'Report a life change';
	resources['ffe.ee.myAccount.accountSettings.employer.label.secondaryPhone'] = 'Second phone number';
	resources['ffe.ee.myAccount.idProofing.questions.heading'] = 'Identity questions';
	resources['ffe.ee.myAccount.landingWelcome.hiddenText'] = 'Marketplace Account Registration - Welcome to your Marketplace account';
	resources['ffe.ee.myAccount.employerSponsoredBenefits.employerSponsoredBenefitsHealth.button.viewPlanDetails'] = 'View Plan Details';
	resources['ffe.ee.myAccount.signUpButton'] = 'Create Account';
	resources['ffe.ee.myAccount.inconsistencies.in08.shortdescription'] = 'Verify that [FN] is not enrolled in Tricare';
	resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.line2'] = 'Address line 2';
	resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.line1'] = 'Address line 1';
	resources['ffe.ee.myAccount.stateLiveIn'] = 'State you live in';
	resources['ffe.ee.myAccount.coverage.menu.ApplicationsAndEligibility'] = 'Applications &amp; Eligibility';
	resources['ffe.ee.myAccount.inconsistencies.qe1.detaildescription'] = '<p>Send the Marketplace proof that [FN] isnt incarcerated (detained or jailed) by [Date]. [FN] won&#39;t qualify to enroll in coverage through the Marketplace if documents aren&#39;t provided by [Date]. Send a copy of the following document:</p><ul><li>Official release papers from institution</li></ul>';
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
	resources['ffe.ee.myAccount.idProofing.ccrQuestions.description'] = 'To view your application, you&#243;ll need to answer the question below to verify your identity.';
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
	resources['ffe.ee.myAccount.idProofing.ccrQuestions.pageTitle'] = 'Verify Your Identity';
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
	resources['ffe.ee.myAccount.agentBroker.removeModal.description4'] = 'Act on your behalf on all matters related to your account and application';
	resources['ffe.ee.myAccount.agentBroker.removeModal.description3'] = 'Remove authority to:';
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
	resources['ffe.ee.myAccount.inconsistencies.qe13.detaildescription'] = '<p>You need to send the Marketplace proof of [FN]&#39;s American Indian or Alaska Native status by [Date]. [FN] will not qualify for no cost-sharing if documents aren&#39;t provided by [Date]. Upload a copy of one of the following documents:</p><ul><li>Tribal Card</li><li>Authentic document from a tribe declaring membership for an individual</li></ul>';
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
	resources['ffe.ee.myAccount.agentBroker.removeModal.emailDescription'] = '[FN] will receive an email to [email address] notifying them that their authority was removed.';
	resources['ffe.ee.myAccount.coverage.updated'] = 'Updated&#58;';
	resources['ffe.ee.myAccount.communicationPref.notifications.editButton.hiddenText'] = 'Notifications';
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
	resources['ffe.ee.myAccount.agentBroker.noClient.pageTitle'] = 'We didnt find the clients application';
	resources['ffe.ee.myAccount.terminate.acknowledgementText'] = 'I have fully read and understand that I&#39;m choosing to terminate coverage from this plan for any members in my household that are currently enrolled in this plan. I also understand that there may be tax implications from terminating a plan early.';
	resources['ffe.ee.myAccount.registration.accountNotCreated.challengeQuestions.same'] = 'Two or more answers to your security questions were the same. You must provide different answers to each security question.';
	resources['ffe.ee.myAccount.reportLifeChanges.examples'] = 'Here are some examples of the changes you should report&#58;';
	resources['ffe.ee.myAccount.notifications.notices.lifeChange'] = 'report a life change';
	resources['ffe.ee.myAccount.addEmployeeModal.button.downloadTemplate'] = 'Download Template';
	resources['ffe.ee.myAccount.signUpText'] = 'New to HealthCare.gov?';
	resources['ffe.ee.myAccount.eligibility.incomplete.description'] = 'You haven&#39;t finished your application for health coverage. You must complete and submit your application to find out if you&#39;re eligible for coverage and to enroll in a plan.';
	resources['ffe.ee.myAccount.label.phone'] = 'Phone';
	resources['ffe.ee.myAccount.authRepSignatureDate'] = 'Date';
	resources['ffe.ee.myAccount.profile.homeAddress'] = 'Address';
	resources['ffe.ee.myAccount.idProofing.upload.errorMessage'] = 'We weren&#39;t able to upload your document. The file you&#39;re uploading must be a .pdf, .jpeg, .jpg, .gif, .xml, .png, .tiff, or .bmp. Please try again.';
	resources['ffe.ee.myAccount.heading.nameAndContactInfo'] = 'Name And Contact Information';
	resources['ffe.ee.myAccount.inLineSSN'] = 'SSN';
	resources['ffe.ee.myAccount.inconsistencies.qe8.shortdescription'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.inconsistencies.medch15.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. </p>';
	resources['ffe.ee.myAccount.idProofing.ccrApplicationFound.button.answerQuestions'] = 'ANSWER THE QUESTION';
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
	resources['ffe.ee.myAccount.error.unsupportedTenant'] = 'Important: The currently selected state is not supported.  Please select a different state.';
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
	resources['ffe.ee.myAccount.inconsistencies.qe4.detaildescription'] = '<p>Send the Marketplace proof that [FN] is a citizen by [Date]. [FN] won&#39;t qualify to enroll in coverage through the Marketplace if a document isn&#39;t provided by [Date].  Send a copy of a document proving [FN] is a citizen.  Examples of documents proving citizenship can include:</p><ul><li>U.S. passport</li><li>U.S. public birth record</li><li>Certification of Report of Birth</li><li>Consular Report of Birth Abroad</li><li>Certification of Birth Abroad</li><li>U.S. Citizen Identification Card</li><li>American Indian Card (I-872)</li><li>Certificate of Naturalization</li><li>Certificate of Citizenship</li></ul>';
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
	resources['ffe.ee.myAccount.registration.error.timout'] = 'There was an unexpected error &#45; Please try again later&#46;';
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
	resources['ffe.ee.myAccount.idProofing.ccrQuestionsIncorrect.pageTitle'] = 'Verify Your Identity';
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
	resources['ffe.ee.myAccount.reportLifeChanges.notReady'] = 'Report a life change will be available on 11/15/2013. Come back on that date to report your change.';
	resources['ffe.ee.myAccount.communicationPref.notices.editButton.hiddenText'] = 'Notices';
	resources['ffe.ee.myAccount.notifications.spokenLanguage.info'] = 'Explanation of what this is used for...';
	resources['ffe.ee.myAccount.inconsistencies.in14.detaildescription'] = '<p>[FN] - Theres a difference between what you said on the application and what the Marketplace has verified with other records. Send a copy of one of the following documents for each employer that offers coverage to you:</p><ul><li>A letter from an employer participating in the SHOP that says the employee isnt offered coverage</li><li>A completed Employer Coverage Tool from healthcare.gov and a cover letter signed by the employer participating in the SHOP</li><li>Other documentation from the employer participating in the SHOP that says that the employee isnt eligible for health coverage</li><li>Other documentation from the employer participating in the SHOP that says that the employee isnt eligible for health coverage</li><li>A letter from an employer that says the employee doesnt qualify for any coverage that meets the minimum value standard</li><li>A completed Employer Coverage Tool from healthcare.gov and a cover letter signed by the employer</li><li>Other documentation from the employer that says the employee doesnt qualify for any coverage that meets the minimum value standard</li><li>A completed Employer Coverage Tool from healthcare.gov with new employer coverage information and a cover letter signed by the employer</li><li>A letter from the employer about the employers coverage. The letter must include information about the about whether the employer offers a plan that meets the minimum value standard and the cost of the employees share for the coverage (the "premium"). Provide this information about the lowest cost individual plan offered by the employer. If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didnt receive any other discounts based on wellness programs.</li><li>Other documentation from the employer with the new premium amount (and how often the employee would pay the amount). If the employer has wellness programs, provide the cost (the "premium") that the employee would pay if he/she received the maximum discount for any tobacco cessation programs, and didnt receive any other discounts based on wellness programs.</li></ul>';
	resources['ffe.ee.myAccount.eligibility.button.view'] = 'View eligibility results';
	resources['ffe.ee.myAccount.returnToSignIn'] = 'Return to Sign In';
	resources['ffe.ee.myAccount.home.status.eligibilityPending'] = 'Eligibility results pending';
	resources['ffe.ee.myAccount.registration.youGotEmail'] = 'Check your email!';
	resources['ffe.ee.myAccount.idProofing.ccrApplicationFound.noApplication'] = 'Don&#39;t have a Marketplace application? <a id="ignoreApplication" href="javascript:void(0)">Click here to continue</a>';
	resources['ffe.ee.myAccount.forgotPassword.provideDetails.email'] = 'Email address associated with your account:';
	resources['ffe.ee.myAccount.forgotPassword.notFound.alertSignUpLink'] = 'Sign up';
	resources['ffe.ee.myAccount.idProofing.contact.format.socialSecurityNumber'] = 'XXX&#45;XX&#45;XXXX';
	resources['ffe.ee.myAccount.registration.forgotUsername.pageTitle'] = 'Forgot Username';
	resources['ffe.ee.myAccount.home.devTool.applicationInProgress'] = 'Application In-Progress';
	resources['ffe.ee.myAccount.terminate.notEligible'] = 'Not eligible';
	resources['ffe.ee.myAccount.notifications.general.emailTo'] = 'Emails to';
	resources['ffe.ee.myAccount.home.hidden.heading'] = 'My Account Landing Page';
	resources['ffe.ee.myAccount.communicationPref.secondPhone.editButton.hiddenText'] = 'Second phone number';
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
	resources['ffe.ee.myAccount.inconsistencies.in02.detaildescription'] = '<p>[FN] - There&#39;s a difference between what you entered on the application and what the Marketplace has verified with other government records. Send a copy of one of the following documents:</p><ul><li>Social Security card</li><li>Tax form(s)</li><li>Driver&#39;s license</li><li>State ID</li><li>U.S. passport</li></ul><p>The Marketplace will help you resolve this discrepancy for purposes of eligibility for health coverage. The Social Security Administration maintains SSNs.Ã‚Â  To resolve SSN discrepancies for purposes other than eligibility for health coverage, contact Social Security toll-free at 1-800-772-1213 from 7 a.m.-7 p.m. Eastern, Monday through Friday (TTY: 1-800-325-0778).</p>';
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
	resources['ffe.ee.myAccount.eidm.error.e537'] = 'Important: We can&#39;t verify your identity. Call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
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
	resources['ffe.ee.myAccount.idProofing.upload.errorMessage2'] = 'We weren&#39;t able to upload your document. The file you&#39;re uploading can&#39;t be bigger than 10MB. Please try again.';
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
	resources['ffe.ee.myAccount.profile.notVerified'] = 'Identity wasn&#39;t verified';
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
	resources['ffe.ee.myAccount.communicationPref.writtenLanguage.editButton.hiddenText'] = 'Preferred written language';
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
	resources['ffe.ee.myAccount.upgradeLite.error.genericError'] = 'An unexpected system error has occurred while contacting Experian to verify your information&#46; Please contact Experian Help desk at 1-866-578-5409';
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
	resources['ffe.ee.myAccount.inconsistencies.physicalDocument.type76'] = 'Veteran&#39;s discharge certificate showing &#34;Honorable&#34; discharge';
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
	resources['ffe.ee.myAccount.home.notifications.regularNotification'] = 'Regular notification&#58;';
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
	resources['ffe.ee.myAccount.applicationDetails.SHOP.employeeChioce.description'] = 'Your employees must now review and decide whether to accept your offer. You must reach a participation rate of X% of eligible employees before you can get SHOP coverage';
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
	resources['ffe.ee.myAccount.applicationDetails.coverageSHOP.incomplete.description'] = 'Your application for SHOP coverage is incomplete. You must complete and submit your application in order to determine your eligibility and enroll.';
	resources['ffe.ee.myAccount.inconsistencies.medch19.detaildescription'] = '<p>Send the Marketplace proof of [FN]&#39;s eligible immigration status by [Date]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date].  Send a copy of the following document:</p><ul><li>Letter or certificate of Victim of Trafficking status</li></ul>';
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
	resources['ffe.ee.myAccount.inconsistencies.medch3.detaildescription'] = '<p>Send the Marketplace proof that [FN] plans to live in [state] by [Date]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Driver&#39;s license</li><li>State ID</li><li>Mortgage payment receipt</li><li>Mortgage deed showing primary residency</li><li>Lease agreement</li><li>School enrollment documentation</li><li>Utility bill</li><li>Government mail (Social Security statement, DMV notice)</li></ul>';
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
	resources['ffe.ee.myAccount.eidm.error.e110'] = 'Call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.eidm.error.e109'] = 'Invalid format. Please try again.';
	resources['ffe.ee.myAccount.eidm.error.e108'] = 'Invalid format. Please choose another password based on the guidelines provided.';
	resources['ffe.ee.myAccount.eidm.error.e107'] = 'Please provide answers to all the above questions to proceed.';
	resources['ffe.ee.myAccount.eidm.error.e106'] = 'An error occurred when contacting Experian to verify your information. Call the Experian help desk at 1-866-578-5409';
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
	resources['ffe.ee.myAccount.inconsistencies.qe8.description'] = 'Verify [FN]&#39;s immigration status';
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
	resources['ffe.ee.myAccount.registration.alertHeading'] = '<strong>Important:</strong> Your account couldn&#39;t be created at this time.';
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
	resources['ffe.ee.myAccount.upgradeLite.error.t100'] = 'There was an unexpected error &#45; Please try again later&#46;';
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
	resources['ffe.ee.myAccount.inconsistencies.medch4.detaildescription'] = '<p>Send the Marketplace proof that [FN] lives in [state] by [Date]. [FN] won&#39;t qualify for [state Medicaid program name] if documents aren&#39;t provided by [Date]. Send a copy of one of the following documents:</p><ul><li>Driver&#39;s license</li><li>State ID</li><li>Mortgage payment receipt</li><li>Mortgage deed showing primary residency</li><li>Lease agreement</li><li>School enrollment documentation</li><li>Utility bill</li><li>Government mail (Social Security statement, DMV notice)</li></ul>';
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
	resources['ffe.ee.myAccount.upgradeLite.error.e542'] = 'Important: We can&#39;t verify your identity. Call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
	resources['ffe.ee.myAccount.upgradeLite.error.e537'] = 'Important: We can&#39;t verify your identity. Call the Marketplace Call Center at 1-800-318-2596. TTY users should call 1-855-889-4325.';
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
	resources['ffe.ee.myAccount.communicationPref.spokenLanguage.editButton.hiddenText'] = 'Preferred spoken language';
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
	resources['ffe.ee.myAccount.eligibility.appeal.description2'] = 'Exchange online appeals submission will begin on 12&#47;1&#47;2013.  Or, print and mail the <a href="/can-i-appeal-a-marketplace-decision" target="_blank">Appeals Paper Form</a> now.';
	resources['ffe.ee.myAccount.employer.mailingAddress.description'] = 'Check here if the Secondary Contact Mailing Address is the same as Primary Business Addresss';
	resources['ffe.ee.myAccount.home.postAppCompletion.john'] = 'John, Susan, and Bob';
	resources['ffe.ee.myAccount.idProofing.resubmit.pageTitle'] = 'Identity not verified';
	resources['ffe.ee.myAccount.terminatePlans.removingPerson.description2'] = 'To remove someone from a plan, you need to change your application to show they&#39;re no longer applying for coverage. This will remove him or her from all plans, including health and dental plans.  Press Next to be taken to your application to make these changes.';
	resources['ffe.ee.myAccount.applicationDetails.employeeChioce.inProgress.heading'] = 'Employee choice in progress';
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
	resources['ffe.ee.myAccount.idProofing.ccrQuestions.noApplication'] = 'Don&#39;t have a Marketplace application? <a id="ignoreApplication" href="javascript:void(0)">Click here to continue</a>';
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
	resources['ffe.ee.myAccount.communicationPref.email.editButton.hiddenText'] = 'Email';
	resources['ffe.ee.myAccount.inconsistencies.medch1.description'] = 'Verify [FN]&#39;s Social Security number (SSN)';
	resources['ffe.ee.myAccount.inconsistencies.in17.description'] = 'Verify [FN]&#39;s income for the current month';
	resources['ffe.ee.myAccount.applicationDetails.inconsistency.description'] = 'Inconsistencies are situations where we must confirm information that you submitted, or we need you to submit more information.';
	resources['ffe.ee.myAccount.authRepUsername'] = 'Authorized representative&#39;s Username';
	resources['ffe.ee.myAccount.inconsistencies.apcsr1.detaildescription'] = '<p>Send the Marketplace proof of [FN] yearly income for [coverage year] yearly income by [Date].  [FN]&#39;s may get less or no help paying for coverage, and may have to pay back some or all of the tax credit received between now and then if documents aren&#39;t provided by [Date].  Examples of documents you can send include:</p><ul><li>Wages and tax statement (W&#45;2)</li><li>Pay stub</li><li>Letter from employer</li><li>Cost of living adjustment letter and other benefit verification notices</li><li>Lease agreement</li><li>Copy of a check paid to the household member</li><li>Bank or investment fund statement</li><li>Document or letter from Social Security Administration (SSA)</li><li>Form SSA 1099 Social Security benefits statement</li><li>Self&#45;employed ledger</li><li>Letter from government agency for unemployment benefits</li></ul>';
	resources['ffe.ee.myAccount.home.resumeEnrollmentButton'] = 'Resume Enrollment';
	resources['ffe.ee.myAccount.agentPrimaryPhone'] = 'Phone number';
	resources['ffe.ee.myAccount.forgotUsernameResults.usernameNotFound'] = 'Your username couldn&#39;t be found, because there is no Marketplace account that matches the information you provided.';
	resources['ffe.ee.myAccount.agentBrokerNoAssisterQuestions.alertHeading'] = 'There aren&#39;t any assistor questions for this application.';
	resources['ffe.ee.myAccount.inconsistencies.qe8.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] wont qualify for coverage through the Marketplace if documents aren&#39;t provided by [Date].</p>';
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
	resources['ffe.ee.myAccount.inconsistencies.in16.shortdescription'] = 'Verify [FN, FN, and FN]&#39;s yearly income';
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
	resources['ffe.ee.myAccount.agentBrokerQuestions.description'] = 'To find a client&#39;s Marketplace application, enter his or her information below.';
	resources['ffe.ee.myAccount.inconsistencies.in17.detaildescription'] = '<p>[FN] - Send the Marketplace proof of what the income will be for the current month. Do not submit documents that are more than 60 days old. Examples of documents you can send include:</p><ul><li>Pay stub</li><li>Letter from employer</li><li>Cost of living adjustment letter and other benefit verification notices</li><li>Lease agreement</li><li>Copy of a check paid to the household member</li><li>Bank or investment fund statement</li><li>Document or letter from Social Security Administration (SSA)</li><li>Form SSA 1099 Social Security benefits statement</li><li>Self-employed ledger</li><li>Letter from government agency for unemployment benefits</li></ul><p>If you have tribal income, send proof of this income.</p>';
	resources['ffe.ee.myAccount.applicationDetails.complete.description'] = 'Your Marketplace application is complete and has been processed. View your eligibility results to find out if you can enroll in health coverage.';
	resources['ffe.ee.myAccount.readyToUpload.warningText'] = 'Lorem ipsum...This makes you ineligible for the Small Business Health Options Program (SHOP).';
	resources['ffe.ee.myAccount.coverage.dateStarted'] = 'Date Started&#58;';
	resources['ffe.ee.myAccount.inconsistencies.medch46.detaildescription'] = '<p>Send the Marketplace proof of [FN]&#39;s immigration status by [Date]. [FN] won&#39;t qualify for [state CHIP program name] if documents aren&#39;t provided by [Date].  [FN] should update their student status with the school, or ask the school to update the status in the Student and Exchange Visitor Information System (SEVIS).  Or you can upload a copy of the following document:</p><ul><li>Letter from school that proves [FN] is maintaining legal status</li></ul><p>For more information about maintaining your status, see <a href="http://studyinthestates.dhs.gov/students/maintain-your-status" target="_blank">http://studyinthestates.dhs.gov/students/maintain-your-status</a>. For more information about how to update immigration status with DHS, contact U.S. Citizenship and Immigration Services by calling the National Customer Service Center at 1&#45;800&#45;375&#45;5283.</p>';
	resources['ffe.ee.myAccount.accountSettings.employer.secondaryPhone'] = 'Second phone number';
	resources['ffe.ee.myAccount.employeeEmailAddress'] = 'Email address';
	resources['ffe.ee.myAccount.inconsistencies.expand'] = 'Expand';
	resources['ffe.ee.myAccount.profile.securityModal.descriptionText'] = 'For security reasons and in order to complete the update, please provide answers to your security questions.';
	resources['ffe.ee.myAccount.upgradeLite.error.e239'] = 'Important: We can&#39;t verify your identity. You exceeded the maximum number of attempts. Please try again later.';
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
	resources['ffe.ee.myAccount.inconsistencies.qe9.detaildescription'] = '<p>Send the Marketplace a copy of the immigration document or proof of the immigration status you provided on the application.<br/>[FN] wont qualify to enroll in coverage through the Marketplace if documents aren&#39;t provided by [date inconsistency period ends].<br/>[FN] can also update their immigration status with the U.S. Department of Homeland Security, U.S. Citizenship and Immigration Services (USCIS). For more information about how to update immigration status with the Department of Homeland Security, contact USCIS by calling the National Customer Service Center at 1-800-375-5283.</p>';
	resources['ffe.ee.myAccount.inconsistencies.qe12.description'] = 'Verify [FN]&#39;s immigration status';
	resources['ffe.ee.myAccount.inconsistencies.in05.detaildescription'] = '<p>[FN] - There&#39;s a difference between what you entered on the application and what the Marketplace has verified with other government records. Send a copy of one of the following documents:</p><ul><li>Military record</li><li>Letter from Veterans Administration</li></ul>';
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
	resources['ffe.ee.myAccount.idProofing.ccrApplicationFound.header'] = 'We found your application';
	resources['ffe.ee.myAccount.agentBroker.questionResults.pageTitle'] = 'Look up the clients application';
	resources['ffe.ee.myAccount.logIn.alert.warning'] = 'Important:';
	resources['ffe.ee.myAccount.inconsistencies.apcsr11.shortdescription'] = 'Verify [FN] is losing coverage through a job';
	resources['ffe.ee.myAccount.registration.verification.pleaseAwaitResponse'] = 'Please wait&#46;&#46;&#46;';
	resources['ffe.ee.myAccount.idProofing.ccrQuestions.header'] = 'Verify your identity';
	resources['ffe.ee.myAccount.registration.mustEnterPassword'] = 'You must enter the same password as the Password field.';
	resources['ffe.ee.myAccount.forgotPassword.resetOfPasswordUnsuccessful.pageTitle'] = 'Forgot Password - Reset Password - Unsuccessful';
	resources['ffe.ee.myAccount.inconsistencies.apcsr17.description'] = 'Provide information about [FN]&#39;s offer of health coverage through a job';
	resources['ffe.ee.myAccount.secContactModal.mailingAddress'] = 'Please provide Secondary Contact mailing address';

	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn16'] = 'What&#39;s the first and list name of your oldest cousin&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn15'] = 'What was your first job&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn14'] = 'What was your favorite place to visit as a child&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn13'] = 'What was the first concert you attended&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn12'] = 'What was the color of your first car&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn11'] = 'What school did you go to in 6th grade&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn10'] = 'What&#39;s the middle name of your oldest brother or sister&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.instructions'] = 'Enter a security response&#46;  Choose only information that you&#39;ll know&#46;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.Questionlabel4'] = 'Question 4';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.Questionlabel3'] = 'Question 3';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.Questionlabel2'] = 'Question 2';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.Questionlabel1'] = 'Question 1';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.Answerlabel4'] = 'Answer 4';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.Answerlabel3'] = 'Answer 3';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.Answerlabel2'] = 'Answer 2';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.Answerlabel1'] = 'Answer 1';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.withAssitance'] = 'You&#8217;ve told us another person is helping you complete the application.';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn9'] = 'What was the name of your first stuffed animal&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn8'] = 'Who was your childhood hero&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn7'] = 'What&#39;s the name&#44; breed&#44; or color of your current pet&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn6'] = 'What&#39;s your father&#39;s middle name&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn5'] = 'Where was your wedding reception was held&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn4'] = 'What was your childhood nickname&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn3'] = 'What&#39;s the middle name of your oldest child&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn2'] = 'What&#39;s the last name of your favorite high school teacher&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.qn1'] = 'In what city or town was your first job&#63;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.title'] = 'We need to make sure that only people who have your permission are viewing the application&#46;';
	resources['ffe.ee.indApp.gettingStarted.AssistancewithAppQuestions.noAssistance'] = 'You&#8217;ve told us no one else is helping you complete the application. You may have other people help you in the future.';


      resources['ffe.ee.indApp.helptext.income.deductions'] = '<a href="/help/deduction-questions/" target="_blank">Learn more about deductions</a>';
      resources['ffe.ee.indApp.helptext.EligibilityResults.appeals'] = 'Learn more about appeals';
      resources['ffe.ee.indApp.helptext.additionalInfo.AmericanIndians'] = '<a href="/help/help-for-american-indians-and-alaska-natives/" target="_blank">Learn more about coverage for American Indians and Alaskan Natives</a>';
      resources['ffe.ee.indApp.helptext.familyAndHousehold.moreaboutthishousehold'] = '<a href="/help/disability-questions/" target="_blank">Learn more about how to answer this question</a>';
      resources['ffe.ee.indApp.helptext.additionalInfo.relationships'] = '<a href="/help/household-questions/" target="_blank">Learn more about these relationships</a>';
      resources['ffe.ee.indApp.helptext.familyAndHousehold.documenttypes'] = '<a href="/help/immigration-document-types/" target="_blank">Learn more about document types</a>';
      resources['ffe.ee.indApp.helptext.EligibilityResults'] = '<a href="/help/eligibility-results-and-next-steps/" target="_blank">Learn more about your eligibility results</a>';
      resources['ffe.ee.indApp.helptext.reviewSign.attestations'] = '<a href="/help/agreement-statements/" target="_blank">Learn more about these statements</a>';
      resources['ffe.ee.indApp.helptext.gettingStarted.relationships'] = '<a href="/help/household-questions/" target="_blank">Learn more about these relationships</a>';
      resources['ffe.ee.indApp.helptext.familyAndHousehold.immigrationstatus'] = '<a href="/help/immigration-status-questions" target="_blank">Learn more about immigration status</a>';
      resources['ffe.ee.indApp.helptext.income.incometypes'] = '<a href="/help/income-questions/" target="_blank">Learn more about Income</a>';
      resources['ffe.ee.indApp.helptext.additionalInfo.MedicaidCHIPquestions'] = '<a href="/help/coverage-questions/" target="_blank">Learn more about other health coverage</a>';
      resources['ffe.ee.indApp.helptext.additionalInfo.parentcaretaker'] = '<a href="/help/parent-and-caretaker-relative-questions/" target="_blank">Learn more about parent and caretaker relatives</a>';


      resources['ffe.ee.indApp.shared.countryList.LVA'] = 'Latvia';
      resources['ffe.ee.indApp.shared.countryList.LUX'] = 'Luxembourg';
      resources['ffe.ee.indApp.shared.countryList.LTU'] = 'Lithuania';
      resources['ffe.ee.indApp.shared.countryList.LSO'] = 'Lesotho';
      resources['ffe.ee.indApp.shared.grandparent'] = 'Grandparent';
      resources['ffe.ee.indApp.shared.button.edit'] = 'EDIT';
      resources['ffe.ee.indApp.shared.countryList.LKA'] = 'Sri Lanka';
      resources['ffe.ee.indApp.shared.countryList.LIE'] = 'Liechtenstein';
      resources['ffe.ee.indApp.shared.countryList.LCA'] = 'Saint Lucia';
      resources['ffe.ee.indApp.shared.countryList.LBY'] = 'Libyan Arab Jamahiriya';
      resources['ffe.ee.indApp.shared.countryList.LBR'] = 'Liberia';
      resources['ffe.ee.indApp.shared.countryList.LBN'] = 'Lebanon';
      resources['ffe.ee.indApp.shared.countryList.LAO'] = 'Lao PeopleS Democratic Republic';
      resources['ffe.ee.indApp.shared.other'] = 'Other';
      resources['ffe.ee.indApp.shared.countryList.KWT'] = 'Kuwait';
      resources['ffe.ee.indApp.shared.countryList.KVO'] = 'Kosovo';
      resources['ffe.ee.indApp.shared.parent'] = 'Parent';
      resources['ffe.ee.indApp.shared.countryList.KOR'] = 'Korea, Republic Of';
      resources['ffe.ee.indApp.shared.courtAppointedGuardian'] = 'Court-appointed guardian';
      resources['ffe.ee.indApp.shared.grandchild'] = 'Grandchild';
      resources['ffe.ee.indApp.shared.countryList.KNA'] = 'Saint Kitts And Nevis';
      resources['ffe.ee.indApp.shared.countryList.KIR'] = 'Kiribati';
      resources['ffe.ee.indApp.shared.countryList.KHM'] = 'Cambodia';
      resources['ffe.ee.indApp.shared.countryList.KGZ'] = 'Kyrgyzstan';
      resources['ffe.ee.indApp.shared.countryList.KEN'] = 'Kenya';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.permanentResidentCard'] = 'Permanent Resident Card &#40;&#34;Green Card&#34;&#44; I&#45;551&#41;';
      resources['ffe.ee.indApp.shared.countryList.KAZ'] = 'Kazakhstan';
      resources['ffe.ee.indApp.shared.domesticPartner'] = 'Domestic partner';
      resources['ffe.ee.indApp.shared.countryList.JPN'] = 'Japan';
      resources['ffe.ee.indApp.shared.countryList.JOR'] = 'Jordan';
      resources['ffe.ee.indApp.shared.countryList.JEY'] = 'Jersey';
      resources['ffe.ee.indApp.shared.countryList.JAM'] = 'Jamaica';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.arrivalDepartureRecord'] = 'Arrival/Departure Record &#40;I&#45;94&#44; I&#45;94A&#41;';
      resources['ffe.ee.indApp.shared.countryList.ITA'] = 'Italy';
      resources['ffe.ee.indApp.shared.countryList.ISR'] = 'Israel';
      resources['ffe.ee.indApp.shared.countryList.ISL'] = 'Iceland';
      resources['ffe.ee.indApp.shared.countryList.IRQ'] = 'Iraq';
      resources['ffe.ee.indApp.shared.countryList.IRN'] = 'Iran, Islamic Republic Of';
      resources['ffe.ee.indApp.shared.countryList.IRL'] = 'Ireland';
      resources['ffe.ee.indApp.shared.countryList.IOT'] = 'British Indian Ocean Territory';
      resources['ffe.ee.indApp.shared.countryList.IND'] = 'India';
      resources['ffe.ee.indApp.shared.countryList.IMN'] = 'Isle Of Man';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.reentryPermit'] = 'Reentry Permit &#40;I&#45;327&#41;';
      resources['ffe.ee.indApp.shared.countryList.IDN'] = 'Indonesia';
      resources['ffe.ee.indApp.shared.button.save'] = 'Save';
      resources['ffe.ee.indApp.shared.collateralDependent'] = 'Collateral dependent';
      resources['ffe.ee.indApp.shared.daughterInLawSonInLaw'] = 'Daughter-in-law/son-in-law';
      resources['ffe.ee.indApp.shared.countryList.HUN'] = 'Hungary';
      resources['ffe.ee.indApp.shared.countryList.HTI'] = 'Haiti';
      resources['ffe.ee.indApp.shared.label.readMyNoticesOnline'] = 'Read my notices online';
      resources['ffe.ee.indApp.shared.countryList.HRV'] = 'Croatia';
      resources['ffe.ee.indApp.shared.countryList.HND'] = 'Honduras';
      resources['ffe.ee.indApp.shared.countryList.HMD'] = 'Heard Island And Mcdonald Islands';
      resources['ffe.ee.indApp.shared.countryList.HKG'] = 'Hong Kong';
      resources['ffe.ee.indApp.shared.uncleAunt'] = 'Uncle/aunt';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe99'] = 'Native Village of Kipnuk';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe98'] = 'Native Village of Kiana';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe97'] = 'Native Village of Karluk';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe96'] = 'Native Village of Kanatak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe95'] = 'Native Village of Hooper Bay';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe94'] = 'Native Village of Hamilton';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe93'] = 'Native Village of Goodnews Bay';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe92'] = 'Native Village of Georgetown';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe91'] = 'Native Village of Gambell';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe90'] = 'Native Village of Gakona';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe89'] = 'Native Village of Fort Yukon';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe88'] = 'Native Village of False Pass';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe87'] = 'Native Village of Eyak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe86'] = 'Native Village of Elim';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe85'] = 'Native Village of Ekuk';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe84'] = 'Native Village of Eek';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe83'] = 'Native Village of Eagle';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe82'] = 'Native Village of Diomede';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe81'] = 'Native Village of Deering';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe80'] = 'Native Village of Council';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe79'] = 'Native Village of Chuathbaluk';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe78'] = 'Native Village of Chitina';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe77'] = 'Native Village of Chignik Lagoon';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe76'] = 'Native Village of Chenega';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe75'] = 'Native Village of Cantwell';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe74'] = 'Native Village of Buckland';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe73'] = 'Native Village of Brevig Mission';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe72'] = 'Native Village of Belkofski';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe71'] = 'Native Village of Barrow Inupiat Traditional Government';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe70'] = 'Native Village of Atka';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe69'] = 'Native Village of Ambler';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe68'] = 'Native Village of Aleknagik';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe67'] = 'Native Village of Akutan';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe66'] = 'Native Village of Akhiok';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe65'] = 'Native Village of Afognak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe64'] = 'Naknek Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe63'] = 'Metlakatla Indian Community, Annette Island Reserve';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe62'] = 'Mentasta Traditional Council';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe61'] = 'McGrath Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe60'] = 'Manokotak Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe59'] = 'Manley Hot Springs Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe58'] = 'Lime Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe57'] = 'Levelock Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe56'] = 'Koyukuk Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe55'] = 'Kokhanok Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe54'] = 'Knik Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe53'] = 'Klawock Cooperative Association';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe52'] = 'King Salmon Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe51'] = 'King Island Native Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe50'] = 'Ketchikan Indian Corporation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe49'] = 'Kenaitze Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe48'] = 'Kasigluk Traditional Elders Council';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe47'] = 'Kaktovik Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe46'] = 'Kaguyak Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe45'] = 'Ivanoff Bay Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe44'] = 'Iqurmuit Traditional Council';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe43'] = 'Inupiat Community of the Arctic Slope';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe42'] = 'Igiugig Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe41'] = 'Hydaburg Cooperative Association';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe40'] = 'Huslia Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe39'] = 'Hughes Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe38'] = 'Hoonah Indian Association';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe37'] = 'Holy Cross Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe36'] = 'Healy Lake Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe35'] = 'Gulkana Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe34'] = 'Galena Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe33'] = 'Evansville Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe32'] = 'Emmonak Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe31'] = 'Ekwok Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe30'] = 'Eklutna Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe29'] = 'Egegik Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe28'] = 'Douglas Indian Association';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe27'] = 'Curyung Tribal Council';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe26'] = 'Craig Tribal Association';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe25'] = 'Circle Native Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe24'] = 'Chuloonawick Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe23'] = 'Chinik Eskimo Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe22'] = 'Chilkoot Indian Association';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe21'] = 'Chilkat Indian Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe20'] = 'Chignik Lake Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe19'] = 'Chignik Bay Tribal Council';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe18'] = 'Chickaloon Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe17'] = 'Chevak Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe16'] = 'Cheesh-Na Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe15'] = 'Chalkyitsik Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe14'] = 'Central Council of the Tlingit &amp; Haida Indian Tribes';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe13'] = 'Birch Creek Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe12'] = 'Beaver Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe11'] = 'Atqasuk Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe10'] = 'Asa&#39;carsarmiut Tribe';
      resources['ffe.ee.indApp.shared.countryList.GUY'] = 'Guyana';
      resources['ffe.ee.indApp.shared.countryList.GUM'] = 'Guam';
      resources['ffe.ee.indApp.shared.countryList.GUF'] = 'French Guiana';
      resources['ffe.ee.indApp.shared.countryList.GTM'] = 'Guatemala';
      resources['ffe.ee.indApp.shared.countryList.GRL'] = 'Greenland';
      resources['ffe.ee.indApp.shared.countryList.GRD'] = 'Grenada';
      resources['ffe.ee.indApp.shared.countryList.GRC'] = 'Greece';
      resources['ffe.ee.indApp.shared.ward'] = 'Ward';
      resources['ffe.ee.indApp.shared.countryList.GNQ'] = 'Equatorial Guinea';
      resources['ffe.ee.indApp.shared.countryList.GNB'] = 'Guinea-Bissau';
      resources['ffe.ee.indApp.shared.countryList.GMB'] = 'Gambia';
      resources['ffe.ee.indApp.shared.countryList.GLP'] = 'Guadeloupe';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.wv'] = 'West Virginia';
      resources['ffe.ee.indApp.shared.countryList.GIN'] = 'Guinea';
      resources['ffe.ee.indApp.shared.countryList.GIB'] = 'Gibraltar';
      resources['ffe.ee.indApp.shared.countryList.GHA'] = 'Ghana';
      resources['ffe.ee.indApp.shared.countryList.GGY'] = 'Guernsey';
      resources['ffe.ee.indApp.shared.sponsoredDependent'] = 'Sponsored dependent';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.sd'] = 'South Dakota';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.sc'] = 'South Carolina';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.ri'] = 'Rhode Island';
      resources['ffe.ee.indApp.shared.countryList.GEO'] = 'Georgia';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.pa'] = 'Pennsylvania';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.or'] = 'Oregon';
      resources['ffe.ee.indApp.shared.countryList.GBR'] = 'United Kingdom';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.ny'] = 'New York';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.nm'] = 'New Mexico';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.nj'] = 'New Jersey';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.nh'] = 'New Hampshire';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.nd'] = 'North Dakota';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.nc'] = 'North Carolina';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.ms'] = 'Mississippi';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.mo'] = 'Missouri';
      resources['ffe.ee.indApp.shared.countryList.GAB'] = 'Gabon';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.mn'] = 'Minnesota';
      resources['ffe.ee.indApp.shared.trustee'] = 'Trustee';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.la'] = 'Louisiana';
      resources['ffe.ee.indApp.shared.button.saveDraft'] = 'Save Draft';
      resources['ffe.ee.indApp.shared.stateFullNameDropDown.dc'] = 'District of Columbia';
      resources['ffe.ee.indApp.shared.label.notProvided'] = 'Not provided';
      resources['ffe.ee.indApp.shared.countryList.FSM'] = 'Micronesia, Federated States Of';
      resources['ffe.ee.indApp.shared.countryList.FRO'] = 'Faroe Islands';
      resources['ffe.ee.indApp.shared.countryList.FRA'] = 'France';
      resources['ffe.ee.indApp.shared.firstCousin'] = 'First cousin';
      resources['ffe.ee.indApp.shared.countryList.FLK'] = 'Falkland Islands (Malvinas)';
      resources['ffe.ee.indApp.shared.countryList.FJI'] = 'Fiji';
      resources['ffe.ee.indApp.shared.countryList.FIN'] = 'Finland';
      resources['ffe.ee.indApp.shared.notApplicable'] = 'N/A';
      resources['ffe.ee.indApp.shared.countryList.ETH'] = 'Ethiopia';
      resources['ffe.ee.indApp.shared.countryList.EST'] = 'Estonia';
      resources['ffe.ee.indApp.shared.countryList.ESP'] = 'Spain';
      resources['ffe.ee.indApp.shared.countryList.ESH'] = 'Western Sahara';
      resources['ffe.ee.indApp.shared.countryList.ERI'] = 'Eritrea';
      resources['ffe.ee.indApp.shared.optional'] = 'optional';
      resources['ffe.ee.indApp.shared.countryList.EGY'] = 'Egypt';
      resources['ffe.ee.indApp.shared.countryList.ECU'] = 'Ecuador';
      resources['ffe.ee.indApp.shared.brotherSister'] = 'Brother/sister';
      resources['ffe.ee.indApp.shared.countryList.DZA'] = 'Algeria';
      resources['ffe.ee.indApp.shared.button.edit.saveDraft'] = 'Save Draft';
      resources['ffe.ee.indApp.shared.guardian'] = 'Guardian';
      resources['ffe.ee.indApp.shared.countryList.DOM'] = 'Dominican Republic';
      resources['ffe.ee.indApp.shared.countryList.DNK'] = 'Denmark';
      resources['ffe.ee.indApp.shared.countryList.DMA'] = 'Dominica';
      resources['ffe.ee.indApp.shared.countryList.DJI'] = 'Djibouti';
      resources['ffe.ee.indApp.shared.countryList.DEU'] = 'Germany';
      resources['ffe.ee.indApp.shared.countryList.CZE'] = 'Czech Republic';
      resources['ffe.ee.indApp.shared.countryList.CYP'] = 'Cyprus';
      resources['ffe.ee.indApp.shared.countryList.CYM'] = 'Cayman Islands';
      resources['ffe.ee.indApp.shared.countryList.CXR'] = 'Christmas Island';
      resources['ffe.ee.indApp.shared.countryList.CUB'] = 'Cuba';
      resources['ffe.ee.indApp.shared.button.confirm'] = 'Confirm';
      resources['ffe.ee.indApp.shared.countryList.CRI'] = 'Costa Rica';
      resources['ffe.ee.indApp.shared.countryList.CPV'] = 'Cape Verde';
      resources['ffe.ee.indApp.shared.countryList.COM'] = 'Comoros';
      resources['ffe.ee.indApp.shared.countryList.COL'] = 'Colombia';
      resources['ffe.ee.indApp.shared.countryList.COK'] = 'Cook Islands';
      resources['ffe.ee.indApp.shared.countryList.COG'] = 'Congo';
      resources['ffe.ee.indApp.shared.countryList.COD'] = 'Congo, Democratic Republic Of The';
      resources['ffe.ee.indApp.shared.countryList.CMR'] = 'Cameroon';
      resources['ffe.ee.indApp.shared.youAreIn'] = 'you are in step';
      resources['ffe.ee.indApp.shared.countryList.CIV'] = 'Cete DIvoire';
      resources['ffe.ee.indApp.shared.countryList.CHN'] = 'China';
      resources['ffe.ee.indApp.shared.countryList.CHL'] = 'Chile';
      resources['ffe.ee.indApp.shared.countryList.CHE'] = 'Switzerland';
      resources['ffe.ee.indApp.shared.countryList.CCK'] = 'Cocos (Keeling) Islands';
      resources['ffe.ee.indApp.shared.countryList.CAN'] = 'Canada';
      resources['ffe.ee.indApp.shared.countryList.CAF'] = 'Central African Republic';
      resources['ffe.ee.indApp.shared.childOfDomesticPartner'] = 'Child of domestic partner';
      resources['ffe.ee.indApp.shared.countryList.BWA'] = 'Botswana';
      resources['ffe.ee.indApp.shared.countryList.BVT'] = 'Bouvet Island';
      resources['ffe.ee.indApp.shared.label.mname'] = 'MIddle';
      resources['ffe.ee.indApp.shared.countryList.BTN'] = 'Bhutan';
      resources['ffe.ee.indApp.shared.countryList.BRN'] = 'Brunei Darussalam';
      resources['ffe.ee.indApp.shared.countryList.BRB'] = 'Barbados';
      resources['ffe.ee.indApp.shared.countryList.BRA'] = 'Brazil';
      resources['ffe.ee.indApp.shared.countryList.BOL'] = 'Bolivia, Plurinational State Of';
      resources['ffe.ee.indApp.shared.countryList.BMU'] = 'Bermuda';
      resources['ffe.ee.indApp.shared.countryList.BLZ'] = 'Belize';
      resources['ffe.ee.indApp.shared.countryList.BLR'] = 'Belarus';
      resources['ffe.ee.indApp.shared.countryList.BLM'] = 'Saint Barthelemy';
      resources['ffe.ee.indApp.shared.countryList.BIH'] = 'Bosnia And Herzegovina';
      resources['ffe.ee.indApp.shared.countryList.BHS'] = 'Bahamas';
      resources['ffe.ee.indApp.shared.countryList.BHR'] = 'Bahrain';
      resources['ffe.ee.indApp.shared.countryList.BGR'] = 'Bulgaria';
      resources['ffe.ee.indApp.shared.countryList.BGD'] = 'Bangladesh';
      resources['ffe.ee.indApp.shared.countryList.BFA'] = 'Burkina Faso';
      resources['ffe.ee.indApp.shared.countryList.BEN'] = 'Benin';
      resources['ffe.ee.indApp.shared.countryList.BEL'] = 'Belgium';
      resources['ffe.ee.indApp.shared.documentDropDown.machineReadableIV'] = 'Machine Readable Immigrant Visa &#40;with temporary I&#45;551 language&#41;';
      resources['ffe.ee.indApp.shared.countryList.BDI'] = 'Burundi';
      resources['ffe.ee.indApp.shared.countryList.AZE'] = 'Azerbaijan';
      resources['ffe.ee.indApp.shared.parentsDomesticPartner'] = 'Parent&#39;s domestic partner';
      resources['ffe.ee.indApp.shared.countryList.AUT'] = 'Austria';
      resources['ffe.ee.indApp.shared.countryList.AUS'] = 'Australia';
      resources['ffe.ee.indApp.shared.countryList.ATG'] = 'Antigua And Barbuda';
      resources['ffe.ee.indApp.shared.countryList.ATF'] = 'French Southern Territories';
      resources['ffe.ee.indApp.shared.countryList.ATA'] = 'Antarctica';
      resources['ffe.ee.indApp.shared.countryList.ASM'] = 'American Samoa';
      resources['ffe.ee.indApp.shared.countryList.ARM'] = 'Armenia';
      resources['ffe.ee.indApp.shared.countryList.ARG'] = 'Argentina';
      resources['ffe.ee.indApp.shared.countryList.ARE'] = 'United Arab Emirates';
      resources['ffe.ee.indApp.shared.countryList.ANT'] = 'Netherlands Antilles';
      resources['ffe.ee.indApp.shared.countryList.AND'] = 'Andorra';
      resources['ffe.ee.indApp.shared.countryList.ALB'] = 'Albania';
      resources['ffe.ee.indApp.shared.countryList.ALA'] = 'Eland Islands';
      resources['ffe.ee.indApp.shared.countryList.AIA'] = 'Anguilla';
      resources['ffe.ee.indApp.shared.countryList.AGO'] = 'Angola';
      resources['ffe.ee.indApp.shared.label.fname'] = 'First name';
      resources['ffe.ee.indApp.shared.countryList.AFG'] = 'Afghanistan';
      resources['ffe.ee.indApp.shared.countryList.ZWE'] = 'Zimbabwe';
      resources['ffe.ee.indApp.shared.countryList.ABW'] = 'Aruba';
      resources['ffe.ee.indApp.shared.button.previous'] = 'Previous';
      resources['ffe.ee.indApp.shared.label.emailAddressConfirm'] = 'Re&#45;enter email address';
      resources['ffe.ee.indApp.shared.countryList.ZMB'] = 'Zambia';
      resources['ffe.ee.indApp.shared.taxFiler'] = 'Tax filer';
      resources['ffe.ee.indApp.shared.countryList.ZAF'] = 'South Africa';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.foreignPassport'] = 'Foreign passport';
      resources['ffe.ee.indApp.shared.countryList.YEM'] = 'Yemen';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.employmentAuthorizationCard'] = 'Employment Authorization Card &#40;EAD&#44; I&#45;766&#41;';
      resources['ffe.ee.indApp.shared.adoptedChild'] = 'Adopted child';
      resources['ffe.ee.indApp.shared.countryList.WSM'] = 'Samoa';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe566'] = 'Shoshone Tribe of the Wind River Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe565'] = 'Arapaho Tribe of the Wind River Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe564'] = 'Stockbridge Munsee Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe563'] = 'St. Croix Chippewa Indians of Wisconsin';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe562'] = 'Sokaogon Chippewa Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe561'] = 'Red Cliff Band of Lake Superior Chippewa Indians of Wisconsin';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe560'] = 'Oneida Tribe of Indians of Wisconsin';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe559'] = 'Menominee Indian Tribe of Wisconsin';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe558'] = 'Lac du Flambeau Band of Lake Superior Chippewa Indians of the Lac du Flambeau Reservation of Wisconsin';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe557'] = 'Lac Courte Oreilles Band of Lake Superior Chippewa Indians of Wisconsin';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe556'] = 'Ho-Chunk Nation of Wisconsin';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe555'] = 'Forest County Potawatomi Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe554'] = 'Bad River Band of the Lake Superior Tribe of Chippewa Indians of the Bad River Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe553'] = 'Upper Skagit Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe552'] = 'Tulalip Tribes of Washington';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe551'] = 'Swinomish Indians of the Swinomish Reservation of Washington';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe550'] = 'Suquamish Indian Tribe of the Port Madison Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe549'] = 'Stillaguamish Tribe of Indians of Washington';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe548'] = 'Squaxin Island Tribe of the Squaxin Island Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe547'] = 'Spokane Tribe of the Spokane Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe546'] = 'Snoqualmie Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe545'] = 'Skokomish Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe544'] = 'Shoalwater Bay Indian Tribe of the Shoalwater Bay Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe543'] = 'Sauk-Suiattle Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe542'] = 'Samish Indian Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe541'] = 'Quinault Indian Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe540'] = 'Quileute Tribe of the Quileute Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe539'] = 'Puyallup Tribe of the Puyallup Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe538'] = 'Port Gamble Band of S&#39;Klallam Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe537'] = 'Nooksack Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe536'] = 'Nisqually Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe535'] = 'Muckleshoot Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe534'] = 'Makah Indian Tribe of the Makah Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe533'] = 'Lummi Tribe of the Lummi Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe532'] = 'Lower Elwha Tribal Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe531'] = 'Kalispel Indian Community of the Kalispel Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe530'] = 'Jamestown S&#39;Klallam Tribe';
      resources['ffe.ee.indApp.shared.countryList.WLF'] = 'Wallis And Futuna';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe529'] = 'Hoh Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe528'] = 'Cowlitz Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe527'] = 'Confederated Tribes of the Colville Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe526'] = 'Confederated Tribes of the Chehalis Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe525'] = 'Confederated Tribes and Bands of the Yakama Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe524'] = 'Ute Mountain Tribe of the Ute Mountain Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe523'] = 'Ute Indian Tribe of the Uintah &amp; Ouray Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe522'] = 'Skull Valley Band of Goshute Indians of Utah';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe521'] = 'Paiute Indian Tribe of Utah';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe520'] = 'Northwestern Band of Shoshoni Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe519'] = 'Navajo Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe518'] = 'Confederated Tribes of the Goshute Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe517'] = 'Ysleta Del Sur Pueblo of Texas';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe516'] = 'Kickapoo Traditional Tribe of Texas';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe515'] = 'Alabama-Coushatta Tribe of Texas';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe514'] = 'Yankton Sioux Tribe of South Dakota';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe513'] = 'Standing Rock Sioux Tribe of North &amp; South Dakota';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe512'] = 'Sisseton-Wahpeton Oyate of the Lake Traverse Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe511'] = 'Rosebud Sioux Tribe of the Rosebud Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe510'] = 'Oglala Sioux Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe509'] = 'Lower Brule Sioux Tribe of the Lower Brule Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe508'] = 'Flandreau Santee Sioux Tribe of South Dakota';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe507'] = 'Crow Creek Sioux Tribe of the Crow Creek Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe506'] = 'Cheyenne River Sioux Tribe of the Cheyenne River Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe505'] = 'Catawba Indian Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe504'] = 'Narragansett Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe503'] = 'Klamath Tribes';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe502'] = 'Fort McDermitt Paiute and Shoshone Tribes of the Fort McDermitt Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe501'] = 'Cow Creek Band of Umpqua Tribe of Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe500'] = 'Coquille Indian Tribe';
      resources['ffe.ee.indApp.shared.cancel'] = 'Cancel';
      resources['ffe.ee.indApp.shared.countryList.VUT'] = 'Vanuatu';
      resources['ffe.ee.indApp.shared.nephewNiece'] = 'Nephew/niece';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe499'] = 'Confederated Tribes of the Warm Springs Reservation of Oregon';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe498'] = 'Confederated Tribes of the Umatilla Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe497'] = 'Confederated Tribes of the Grand Ronde Community of Oregon';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe496'] = 'Confederated Tribes of the Coos, Lower Umpqua and Siuslaw Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe495'] = 'Confederated Tribes of Siletz Indians of Oregon';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe494'] = 'Burns Paiute Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe493'] = 'Wyandotte Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe492'] = 'Wichita and Affiliated Tribes';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe491'] = 'United Keetoowah Band of Cherokee Indians in Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe490'] = 'Tonkawa Tribe of Indians of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe489'] = 'Thlopthlocco Tribal Town';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe488'] = 'The Seminole Nation of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe487'] = 'The Osage Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe486'] = 'The Muscogee Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe485'] = 'Shawnee Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe484'] = 'Seneca-Cayuga Tribe of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe483'] = 'Sac &amp; Fox Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe482'] = 'Quapaw Tribe of Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe481'] = 'Ponca Tribe of Indians of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe480'] = 'Peoria Tribe of Indians of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe479'] = 'Pawnee Nation of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe478'] = 'Ottawa Tribe of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe477'] = 'Otoe-Missouria Tribe of Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe476'] = 'Modoc Tribe of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe475'] = 'Miami Tribe of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe474'] = 'Kiowa Indian Tribe of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe473'] = 'Kickapoo Tribe of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe472'] = 'Kialegee Tribal Town';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe471'] = 'Kaw Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe470'] = 'Iowa Tribe of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe469'] = 'Fort Sill Apache Tribe of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe468'] = 'Eastern Shawnee Tribe of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe467'] = 'Delaware Tribe of Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe466'] = 'Delaware Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe465'] = 'Comanche Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe464'] = 'Citizen Potawatomi Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe463'] = 'Choctaw Nation of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe462'] = 'Chickasaw Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe461'] = 'Cheyenne and Arapaho Tribes, Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe460'] = 'Cherokee Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe459'] = 'Caddo Nation of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe458'] = 'Apache Tribe of Oklahoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe457'] = 'Alabama-Quassarte Tribal Town';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe456'] = 'Absentee-Shawnee Tribe of Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe455'] = 'Tuscarora Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe454'] = 'Tonawanda Band of Seneca';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe453'] = 'Shinnecock Indian Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe452'] = 'Seneca Nation of Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe451'] = 'Saint Regis Mohawk Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe450'] = 'Onondaga Nation';
      resources['ffe.ee.indApp.shared.countryList.VNM'] = 'Viet Nam';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe449'] = 'Oneida Nation of New York';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe448'] = 'Cayuga Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe447'] = 'Yomba Shoshone Tribe of the Yomba Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe446'] = 'Yerington Paiute Tribe of the Yerington Colony &amp; Campbell Ranch';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe445'] = 'Winnemucca Indian Colony of Nevada';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe444'] = 'Washoe Tribe of Nevada &amp; California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe443'] = 'Walker River Paiute Tribe of the Walker River Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe442'] = 'Te-Moak Tribe of Western Shoshone Indians of Nevada';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe441'] = 'Summit Lake Paiute Tribe of Nevada';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe440'] = 'Shoshone-Paiute Tribes of the Duck Valley Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe9'] = 'Arctic Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe8'] = 'Anvik Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe7'] = 'Angoon Community Association';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe6'] = 'Allakaket Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe439'] = 'Reno-Sparks Indian Colony';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe5'] = 'Algaaciq Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe438'] = 'Pyramid Lake Paiute Tribe of the Pyramid Lake Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe4'] = 'Alatna Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe437'] = 'Paiute-Shoshone Tribe of the Fallon Reservation and Colony';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe3'] = 'Akiak Native Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe436'] = 'Moapa Band of Paiute Indians of the Moapa River Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe2'] = 'Akiachak Native Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe435'] = 'Lovelock Paiute Tribe of the Lovelock Indian Colony';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe1'] = 'Agdaagux Tribe of King Cove';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe434'] = 'Las Vegas Tribe of Paiute Indians of the Las Vegas Indian Colony';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe433'] = 'Fort Mojave Indian Tribe of Arizona';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe432'] = 'Ely Shoshone Tribe of Nevada';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe431'] = 'Duckwater Shoshone Tribe of the Duckwater Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe430'] = 'Zuni Tribe of the Zuni Reservation';
      resources['ffe.ee.indApp.shared.annuitant'] = 'Annuitant';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe429'] = 'Pueblo of Zia';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe428'] = 'Pueblo of Tesuque';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe427'] = 'Pueblo of Taos';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe426'] = 'Pueblo of Santa Clara';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe425'] = 'Pueblo of Santa Ana';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe424'] = 'Pueblo of Sandia';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe423'] = 'Pueblo of San Ildefonso';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe422'] = 'Pueblo of San Felipe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe421'] = 'Pueblo of Pojoaque';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe420'] = 'Pueblo of Picuris';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe419'] = 'Pueblo of Nambe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe418'] = 'Pueblo of Laguna';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe417'] = 'Pueblo of Jemez';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe416'] = 'Pueblo of Isleta';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe415'] = 'Pueblo of Cochiti';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe414'] = 'Pueblo of Acoma';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe413'] = 'Ohkay Owingeh';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe412'] = 'Mescalero Apache Tribe of the Mescalero Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe411'] = 'Kewa Pueblo, New Mexico';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe410'] = 'Jicarilla Apache Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe409'] = 'Winnebago Tribe of Nebraska';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe408'] = 'Santee Sioux Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe407'] = 'Sac &amp; Fox Nation of Missouri in Kansas and Nebraska';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe406'] = 'Ponca Tribe of Nebraska';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe405'] = 'Omaha Tribe of Nebraska';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe404'] = 'Iowa Tribe of Kansas and Nebraska';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe403'] = 'Turtle Mountain Band of Chippewa Indians of North Dakota';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe402'] = 'Three Affiliated Tribes of the Fort Berthold Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe401'] = 'Spirit Lake Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe400'] = 'Eastern Band of Cherokee Indians';
      resources['ffe.ee.indApp.shared.countryList.VIR'] = 'Virgin Islands (U.S.)';
      resources['ffe.ee.indApp.shared.countryList.VGB'] = 'Virgin Islands (British)';
      resources['ffe.ee.indApp.shared.countryList.VEN'] = 'Venezuela, Bolivarian Republic Of';
      resources['ffe.ee.indApp.shared.countryList.VCT'] = 'Saint Vincent And The Grenadines ';
      resources['ffe.ee.indApp.shared.countryList.VAT'] = 'Holy See (Vatican City State)';
      resources['ffe.ee.indApp.shared.stepsonStepdaughter'] = 'Stepson/stepdaughter';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.tempI551Stamp'] = 'Temporary I&#45;551 Stamp &#40;on passport or I&#45;94&#44; I&#45;94A&#41;';
      resources['ffe.ee.indApp.shared.learnMore'] = 'Learn More';
      resources['ffe.ee.indApp.shared.countryList.UZB'] = 'Uzbekistan';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe399'] = 'Northern Cheyenne Tribe of the Northern Cheyenne Indian Reservation';
      resources['ffe.ee.indApp.shared.countryList.USA'] = 'United States';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe398'] = 'Fort Belknap Indian Community of the Fort Belknap Reservation of Montana';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe397'] = 'Crow Tribe of Montana';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe396'] = 'Confederated Salish and Kootenai Tribes of the Flathead Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe395'] = 'Chippewa-Cree Indians of the Rocky Boy&#39;s Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe394'] = 'Blackfeet Tribe of the Blackfeet Indian Reservation of Montana';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe393'] = 'Assiniboine and Sioux Tribes of the Fort Peck Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe392'] = 'Mississippi Band of Choctaw Indians';
      resources['ffe.ee.indApp.shared.countryList.URY'] = 'Uruguay';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe391'] = 'Upper Sioux Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe390'] = 'Shakopee Mdewakanton Sioux Community of Minnesota';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe389'] = 'Red Lake Band of Chippewa Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe388'] = 'Prairie Island Indian Community in the State of Minnesota';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe387'] = 'Lower Sioux Indian Community in the State of Minnesota';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe386'] = 'Sault Ste. Marie Tribe of Chippewa Indians of Michigan';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe385'] = 'Saginaw Chippewa Indian Tribe of Michigan';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe384'] = 'Pokagon Band of Potawatomi Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe383'] = 'Nottawaseppi Huron Band of the Potawatomi';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe382'] = 'Minnesota Chippewa Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe381'] = 'Match-e-be-nash-she-wish Band of Pottawatomi Indians of Michigan';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe380'] = 'Little Traverse Bay Bands of Odawa Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe379'] = 'Little River Band of Ottawa Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe378'] = 'Lac Vieux Desert Band of Lake Superior Chippewa Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe377'] = 'Keweenaw Bay Indian Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe376'] = 'Hannahville Indian Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe375'] = 'Grand Traverse Band of Ottawa and Chippewa Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe374'] = 'Bay Mills Indian Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe373'] = 'Penobscot Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe372'] = 'Passamaquoddy Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe371'] = 'Houlton Band of Maliseet Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe370'] = 'Aroostook Band of Micmacs';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe369'] = 'Wampanoag Tribe of Gay Head';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe368'] = 'Mashpee Wampanoag Indian Tribal Council, Inc.';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe367'] = 'Tunica-Biloxi Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe366'] = 'Jena Band of Choctaw Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe365'] = 'Coushatta Tribe of Louisiana';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe364'] = 'Chitimacha Tribe of Louisiana';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe363'] = 'Prairie Band Potawatomi Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe362'] = 'Kickapoo Tribe of Indians of the Kickapoo Reservation in Kansas';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe361'] = 'Shoshone-Bannock Tribes of the Fort Hall Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe360'] = 'Nez Perce Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe359'] = 'Kootenai Tribe of Idaho';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe358'] = 'Coeur D&#39;Alene Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe357'] = 'Sac &amp; Fox Tribe of the Mississippi in Iowa';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe356'] = 'Seminole Tribe of Florida';
      resources['ffe.ee.indApp.shared.button.continue'] = 'Continue';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe355'] = 'Miccosukee Tribe of Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe354'] = 'Mohegan Indian Tribe of Connecticut';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe353'] = 'Mashantucket Pequot Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe352'] = 'Southern Ute Indian Tribe of the Southern Ute Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe351'] = 'Yurok Tribe of the Yurok Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe350'] = 'Yocha Dehe Wintun Nation, California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe349'] = 'Wiyot Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe348'] = 'Wilton Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe347'] = 'Utu Utu Gwaitu Paiute Tribe of the Benton Paiute Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe346'] = 'United Auburn Indian Community of the Auburn Rancheria of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe345'] = 'Twenty-Nine Palms Band of Mission Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe344'] = 'Tuolumne Band of Me-Wuk Indians of the Tuolumne Rancheria of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe343'] = 'Tule River Indian Tribe of the Tule River Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe342'] = 'Torres Martinez Desert Cahuilla Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe341'] = 'Tejon Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe340'] = 'Table Mountain Rancheria of California';
      resources['ffe.ee.indApp.shared.countryList.UMI'] = 'United States Minor Outlying Islands';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe339'] = 'Sycuan Band of the Kumeyaay Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe338'] = 'Susanville Indian Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe337'] = 'Soboba Band of Luiseno Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe336'] = 'Smith River Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe335'] = 'Shingle Springs Band of Miwok Indians, Shingle Springs Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe334'] = 'Sherwood Valley Rancheria of Pomo Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe333'] = 'Scotts Valley Band of Pomo Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe332'] = 'Santa Ynez Band of Chumash Mission Indians of the Santa Ynez Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe331'] = 'Santa Rosa Indian Community of the Santa Rosa Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe330'] = 'Santa Rosa Band of Cahuilla Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe329'] = 'San Pasqual Band of Diegueno Mission Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe328'] = 'San Manuel Band of Mission Indians, California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe327'] = 'Round Valley Indian Tribes, Round Valley Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe326'] = 'Robinson Rancheria Band of Pomo Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe325'] = 'Rincon Band of Luiseno Mission Indians of the Rincon Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe324'] = 'Resighini Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe323'] = 'Redwood Valley or Little River Band of Pomo Indians of the Redwood Valley Rancheria California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe322'] = 'Redding Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe321'] = 'Ramona Band of Cahuilla, California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe320'] = 'Quechan Tribe of the Fort Yuma Indian Reservation';
      resources['ffe.ee.indApp.shared.countryList.UKR'] = 'Ukraine';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe319'] = 'Quartz Valley Indian Community of the Quartz Valley Reservation of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe318'] = 'Potter Valley Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe317'] = 'Pit River Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe316'] = 'Pinoleville Pomo Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe315'] = 'Picayune Rancheria of Chukchansi Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe314'] = 'Pechanga Band of Luiseno Mission Indians of the Pechanga Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe313'] = 'Pauma Band of Luiseno Mission Indians of the Pauma &amp; Yuima Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe312'] = 'Paskenta Band of Nomlaki Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe311'] = 'Pala Band of Luiseno Mission Indians of the Pala Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe310'] = 'Northfork Rancheria of Mono Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe309'] = 'Morongo Band of Mission Indians, California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe308'] = 'Mooretown Rancheria of Maidu Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe307'] = 'Middletown Rancheria of Pomo Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe306'] = 'Mesa Grande Band of Diegueno Mission Indians of the Mesa Grande Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe305'] = 'Mechoopda Indian Tribe of Chico Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe304'] = 'Manzanita Band of Diegueno Mission Indians of the Manzanita Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe303'] = 'Manchester Band of Pomo Indians of the Manchester Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe302'] = 'Lytton Rancheria of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe301'] = 'Lower Lake Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe300'] = 'Los Coyotes Band of Cahuilla and Cupeno Indians, California';
      resources['ffe.ee.indApp.shared.countryList.UGA'] = 'Uganda';
      resources['ffe.ee.indApp.shared.countryList.TZA'] = 'Tanzania, United Republic Of';
      resources['ffe.ee.indApp.shared.countryList.TWN'] = 'Taiwan, Province Of China';
      resources['ffe.ee.indApp.shared.countryList.TUV'] = 'Tuvalu';
      resources['ffe.ee.indApp.shared.countryList.TUR'] = 'Turkey';
      resources['ffe.ee.indApp.shared.countryList.TUN'] = 'Tunisia';
      resources['ffe.ee.indApp.shared.countryList.TTO'] = 'Trinidad And Tobago';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe299'] = 'Lone Pine Paiute-Shoshone Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe298'] = 'La Posta Band of Diegueno Mission Indians of the La Posta Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe297'] = 'La Jolla Band of Luiseno Indians, California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe296'] = 'Kashia Band of Pomo Indians of the Stewarts Point Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe295'] = 'Karuk Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe294'] = 'Jamul Indian Village of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe293'] = 'Jackson Rancheria of Me-Wuk Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe292'] = 'Ione Band of Miwok Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe291'] = 'Inaja Band of Diegueno Mission Indians of the Inaja and Cosmit Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe290'] = 'Iipay Nation of Santa Ysabel, California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe289'] = 'Hopland Band of Pomo Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe288'] = 'Hoopa Valley Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe287'] = 'Habematolel Pomo of Upper Lake';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe286'] = 'Guidiville Rancheria of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe285'] = 'Grindstone Indian Rancheria of Wintun-Wailaki Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe284'] = 'Greenville Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe283'] = 'Fort Independence Indian Community of Paiute Indians of the Fort Independence Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe282'] = 'Fort Bidwell Indian Community of the Fort Bidwell Reservation of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe281'] = 'Federated Indians of Graton Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe280'] = 'Ewiiaapaayp Band of Kumeyaay Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe279'] = 'Enterprise Rancheria of Maidu Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe278'] = 'Elk Valley Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe277'] = 'Elem Indian Colony of Pomo Indians of the Sulphur Bank Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe276'] = 'Dry Creek Rancheria Band of Pomo Indians, California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe275'] = 'Death Valley Timbi-sha Shoshone Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe274'] = 'Coyote Valley Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe273'] = 'Cortina Indian Rancheria of Wintun Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe272'] = 'Colorado River Indian Tribes of the Colorado River Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe271'] = 'Cold Springs Rancheria of Mono Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe270'] = 'Cloverdale Rancheria of Pomo Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe269'] = 'Chicken Ranch Rancheria of Me-Wuk Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe268'] = 'Cher-Ae Heights Indian Community of the Trinidad Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe267'] = 'Chemehuevi Indian Tribe of the Chemehuevi Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe266'] = 'Cedarville Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe265'] = 'Capitan Grande Band of Diegueno Mission Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe264'] = 'Campo Band of Diegueno Mission Indians of the Campo Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe263'] = 'California Valley Miwok Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe262'] = 'Cahuilla Band of Mission Indians of the Cahuilla Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe261'] = 'Cahto Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe260'] = 'Cachil DeHe Band of Wintun Indians of the Colusa Indian Community of the Colusa Rancheria';
      resources['ffe.ee.indApp.shared.countryList.TON'] = 'Tonga';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe259'] = 'Cabazon Band of Mission Indians';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe258'] = 'Buena Vista Rancheria of Me-Wuk Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe257'] = 'Bridgeport Indian Colony';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe256'] = 'Blue Lake Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe255'] = 'Bishop Paiute TribeBishop Colony';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe254'] = 'Big Valley Band of Pomo Indians of the Big Valley Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe253'] = 'Big Sandy Rancheria of Western Mono Indians of California of Mono Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe252'] = 'Big Pine Paiute Tribe of the Owens Valley';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe251'] = 'Big Lagoon Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe250'] = 'Berry Creek Rancheria of Maidu Indians of California';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe249'] = 'Bear River Band of the Rohnerville Rancheria';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe248'] = 'Augustine Band of Cahuilla IndiansMission Indians of the Augustine Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe247'] = 'Alturas Indiane Band';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe246'] = 'Agua Caliente Band of Cahuilla Indians of the Agua Caliente Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe245'] = 'Yavapai-Prescott Indian Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe244'] = 'Yavapai-Apache Nation of the Camp Verde Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe243'] = 'White Mountain Apache Tribe of the Fort Apache Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe242'] = 'Tonto Apache Tribe of Arizona';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe241'] = 'Tohono O&#39;odham Nation of Arizona';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe240'] = 'San Juan Southern Paiute Tribe of Arizona';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe239'] = 'San Carlos Apache Tribe of the San Carlos Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe238'] = 'Salt River Pima-Maricopa Indian Community of the Salt River Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe237'] = 'Pascua Yaqui Tribe of Arizona';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe236'] = 'Kaibab Band of Paiute Indians of the Kaibab Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe235'] = 'Hualapai Indian Tribe of the Hualapai Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe234'] = 'Hopi Tribe of Arizona';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe233'] = 'Havasupai Tribe of the Havasupai Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe232'] = 'Gila River Indian Community of the Gila River Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe231'] = 'Fort McDowell Yavapai Nation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe230'] = 'Cocopah Tribe of Arizona';
      resources['ffe.ee.indApp.shared.countryList.TLS'] = 'Timor-Leste';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe229'] = 'Ak Chin Indian Community of the Maricopa Indian Reservation';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe228'] = 'Poarch Band of Creeks';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe227'] = 'Yupiit of Andreafski';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe226'] = 'Yakutat Tlingit Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe225'] = 'Wrangell Cooperative Association';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe224'] = 'Village of Wainwright';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe223'] = 'Village of Venetie';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe222'] = 'Village of Stony River';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe221'] = 'Village of Solomon';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe220'] = 'Village of Sleetmute';
      resources['ffe.ee.indApp.shared.countryList.TKM'] = 'Turkmenistan';
      resources['ffe.ee.indApp.shared.countryList.TKL'] = 'Tokelau';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe219'] = 'Village of Salamatoff';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe218'] = 'Village of Red Devil';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe217'] = 'Village of Old Harbor';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe216'] = 'Village of Ohogamiut';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe215'] = 'Village of Lower Kalskag';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe214'] = 'Village of Kotlik';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe213'] = 'Village of Kaltag';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe212'] = 'Village of Kalskag';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe211'] = 'Village of Iliamna';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe210'] = 'Village of Dot Lake';
      resources['ffe.ee.indApp.shared.countryList.TJK'] = 'Tajikistan';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe209'] = 'Village of Crooked Creek';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe208'] = 'Village of Clarks Point';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe207'] = 'Village of Chefornak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe206'] = 'Village of Bill Moore&#39;s Slough';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe205'] = 'Village of Atmautluak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe204'] = 'Village of Aniak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe203'] = 'Village of Anaktuvuk Pass';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe202'] = 'Village of Alakanuk';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe201'] = 'Umkumiut Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe200'] = 'Ugashik Village';
      resources['ffe.ee.indApp.shared.countryList.THA'] = 'Thailand';
      resources['ffe.ee.indApp.shared.countryList.TGO'] = 'Togo';
      resources['ffe.ee.indApp.shared.countryList.TCD'] = 'Chad';
      resources['ffe.ee.indApp.shared.countryList.TCA'] = 'Turks And Caicos Islands';
      resources['ffe.ee.indApp.shared.dependentOfMinorDependent'] = 'Dependent of a minor dependent';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.other'] = 'Other documents or status types';
      resources['ffe.ee.indApp.shared.countryList.SYR'] = 'Syrian Arab Republic';
      resources['ffe.ee.indApp.shared.countryList.SYC'] = 'Seychelles';
      resources['ffe.ee.indApp.shared.fosterChild'] = 'Foster child';
      resources['ffe.ee.indApp.shared.countryList.SWZ'] = 'Swaziland';
      resources['ffe.ee.indApp.shared.countryList.SWE'] = 'Sweden';
      resources['ffe.ee.indApp.shared.countryList.SVN'] = 'Slovenia';
      resources['ffe.ee.indApp.shared.countryList.SVK'] = 'Slovakia';
      resources['ffe.ee.indApp.shared.countryList.SUR'] = 'Suriname';
      resources['ffe.ee.indApp.shared.countryList.STP'] = 'Sao Tome And Principe';
      resources['ffe.ee.indApp.shared.countryList.STL'] = 'Stateless';
      resources['ffe.ee.indApp.shared.countryList.SSD'] = 'South Sudan';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe199'] = 'Twin Hills Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe198'] = 'Tuluksak Native Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe197'] = 'Traditional Village of Togiak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe196'] = 'Telida Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe195'] = 'Tangirnaq Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe194'] = 'Takotna Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe193'] = 'Sun&#39;aq Tribe of Kodiak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe192'] = 'Stebbins Community Association';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe191'] = 'South Naknek Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe190'] = 'Skagway Village';
      resources['ffe.ee.indApp.shared.countryList.SRB'] = 'Serbia';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe189'] = 'Sitka Tribe of Alaska';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe188'] = 'Shageluk Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe187'] = 'Seldovia Village Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe186'] = 'Saint Paul Island';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe185'] = 'Saint George Island';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe184'] = 'Rampart Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe183'] = 'Qawalangin Tribe of Unalaska';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe182'] = 'Qagan Tayagungin Tribe of Sand Point Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe181'] = 'Portage Creek Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe180'] = 'Platinum Traditional Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe179'] = 'Pilot Station Traditional Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe178'] = 'Petersburg Indian Association';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe177'] = 'Pedro Bay Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe176'] = 'Pauloff Harbor Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe175'] = 'Oscarville Traditional Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe174'] = 'Orutsararmuit Native Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe173'] = 'Organized Village of Saxman';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe172'] = 'Organized Village of Kwethluk';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe171'] = 'Organized Village of Kasaan';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe170'] = 'Organized Village of Kake';
      resources['ffe.ee.indApp.shared.countryList.SPM'] = 'Saint Pierre And Miquelon';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe169'] = 'Organized Village of Grayling';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe168'] = 'Nunakauyarmiut Tribe';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe167'] = 'Nulato Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe166'] = 'Northway Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe165'] = 'Noorvik Native Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe164'] = 'Nondalton Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe163'] = 'Nome Eskimo Community';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe162'] = 'Ninilchik Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe161'] = 'Nikolai Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe160'] = 'Newtok Village';
      resources['ffe.ee.indApp.shared.countryList.SOM'] = 'Somalia';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe159'] = 'Newhalen Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe158'] = 'New Stuyahok Village';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe157'] = 'New Koliganek Village Council';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe156'] = 'Nenana Native Association';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe155'] = 'Native Village of White Mountain';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe154'] = 'Native Village of Wales';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe153'] = 'Native Village of Unga';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe152'] = 'Native Village of Unalakleet';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe151'] = 'Native Village of Tyonek';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe150'] = 'Native Village of Tununak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe149'] = 'Native Village of Tuntutuliak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe148'] = 'Native Village of Tetlin';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe147'] = 'Native Village of Teller';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe146'] = 'Native Village of Tazlina';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe145'] = 'Native Village of Tatitlek';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe144'] = 'Native Village of Tanana';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe143'] = 'Native Village of Tanacross';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe142'] = 'Native Village of Stevens';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe141'] = 'Native Village of Shungnak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe140'] = 'Native Village of Shishmaref';
      resources['ffe.ee.indApp.shared.countryList.SMR'] = 'San Marino';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe139'] = 'Native Village of Shaktoolik';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe138'] = 'Native Village of Selawik';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe137'] = 'Native Village of Scammon Bay';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe136'] = 'Native Village of Savoonga';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe135'] = 'Native Village of Saint Michael';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe134'] = 'Native Village of Ruby';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe133'] = 'Native Village of Port Lions';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe132'] = 'Native Village of Port Heiden';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe131'] = 'Native Village of Port Graham';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe130'] = 'Native Village of Point Lay';
      resources['ffe.ee.indApp.shared.countryList.SLV'] = 'El Salvador';
      resources['ffe.ee.indApp.shared.countryList.SLE'] = 'Sierra Leone';
      resources['ffe.ee.indApp.shared.countryList.SLB'] = 'Solomon Islands';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe129'] = 'Native Village of Point Hope';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe128'] = 'Native Village of Pitka&#39;s Point';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe127'] = 'Native Village of Pilot Point';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe126'] = 'Native Village of Perryville';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe125'] = 'Native Village of Paimiut';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe124'] = 'Native Village of Ouzinkie';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe123'] = 'Native Village of Nunapitchuk';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe122'] = 'Native Village of Nunam Iqua';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe121'] = 'Native Village of Nuiqsut';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe120'] = 'Native Village of Noatak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe119'] = 'Native Village of Nikolski';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe118'] = 'Native Village of Nightmute';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe117'] = 'Native Village of Nelson Lagoon';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe116'] = 'Native Village of Napaskiak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe115'] = 'Native Village of Napakiak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe114'] = 'Native Village of Napaimute';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe113'] = 'Native Village of Nanwalek';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe112'] = 'Native Village of Minto';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe111'] = 'Native Village of Mekoryuk';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe110'] = 'Native Village of Mary&#39;s Igloo';
      resources['ffe.ee.indApp.shared.countryList.SJM'] = 'Svalbard And Jan Mayen';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe109'] = 'Native Village of Marshall';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe108'] = 'Native Village of Larsen Bay';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe107'] = 'Native Village of Kwinhagak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe106'] = 'Native Village of Kwigillingok';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe105'] = 'Native Village of Koyuk';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe104'] = 'Native Village of Kotzebue';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe103'] = 'Native Village of Kongiganak';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe102'] = 'Native Village of Kobuk';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe101'] = 'Native Village of Kluti Kaah';
      resources['ffe.ee.indApp.shared.indianTribeDropDown.tribe100'] = 'Native Village of Kivalina';
      resources['ffe.ee.indApp.shared.taxDependent'] = 'Tax dependent';
      resources['ffe.ee.indApp.shared.countryList.SHN'] = 'Saint Helena, Ascension And Tristan Da Cunha ';
      resources['ffe.ee.indApp.shared.countryList.SGS'] = 'South Georgia And The South Sandwich Islands ';
      resources['ffe.ee.indApp.shared.countryList.SGP'] = 'Singapore';
      resources['ffe.ee.indApp.shared.countryList.SEN'] = 'Senegal';
      resources['ffe.ee.indApp.shared.countryList.SDN'] = 'Sudan';
      resources['ffe.ee.indApp.shared.countryList.SAU'] = 'Saudi Arabia';
      resources['ffe.ee.indApp.shared.label.dob'] = 'Date of birth';
      resources['ffe.ee.indApp.shared.countryList.RWA'] = 'Rwanda';
      resources['ffe.ee.indApp.shared.countryList.RUS'] = 'Russian Federation';
      resources['ffe.ee.indApp.shared.otherUnrelated'] = 'Other unrelated';
      resources['ffe.ee.indApp.shared.button.submtApplication'] = 'Submit Application';
      resources['ffe.ee.indApp.shared.countryList.ROU'] = 'Romania';
      resources['ffe.ee.indApp.shared.countryList.REU'] = 'Reunion';
      resources['ffe.ee.indApp.shared.formerSpouse'] = 'Former spouse';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.certificateOfEligibilityForExchangeVisitorStatus'] = 'Certificate of Eligibility for Exchange Visitor (J-1) Status (DS2019)';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.arrivalDepartureRecordInForeignPassport'] = 'Arrival/Departure Record in foreign passport &#40;I&#45;94&#41;';
      resources['ffe.ee.indApp.shared.applicationId'] = 'Application ID&#58;';
      resources['ffe.ee.indApp.shared.countryList.QAT'] = 'Qatar';
      resources['ffe.ee.indApp.shared.label.wantPaperNotices'] = 'Want paper notices';
      resources['ffe.ee.indApp.shared.countryList.PYF'] = 'French Polynesia';
      resources['ffe.ee.indApp.shared.countryList.PSE'] = 'Palestinian Territory, Occupied';
      resources['ffe.ee.indApp.shared.countryList.PRY'] = 'Paraguay';
      resources['ffe.ee.indApp.shared.countryList.PRT'] = 'Portugal';
      resources['ffe.ee.indApp.shared.countryList.PRK'] = 'Korea, Democratic PeopleS Republic Of';
      resources['ffe.ee.indApp.shared.countryList.PRI'] = 'Puerto Rico';
      resources['ffe.ee.indApp.shared.countryList.POL'] = 'Poland';
      resources['ffe.ee.indApp.shared.countryList.PNG'] = 'Papua New Guinea';
      resources['ffe.ee.indApp.shared.otherRelative'] = 'Other relative';
      resources['ffe.ee.indApp.shared.countryList.PLW'] = 'Palau';
      resources['ffe.ee.indApp.shared.countryList.PHL'] = 'Philippines';
      resources['ffe.ee.indApp.shared.countryList.PER'] = 'Peru';
      resources['ffe.ee.indApp.shared.countryList.PCN'] = 'Pitcairn';
      resources['ffe.ee.indApp.shared.countryList.PAN'] = 'Panama';
      resources['ffe.ee.indApp.shared.countryList.PAK'] = 'Pakistan';
      resources['ffe.ee.indApp.shared.stepparent'] = 'Stepparent';
      resources['ffe.ee.indApp.shared.countryList.OMN'] = 'Oman';
      resources['ffe.ee.indApp.shared.husbandWife'] = 'Spouse';
      resources['ffe.ee.indApp.shared.label.emailAddress'] = 'Email address';
      resources['ffe.ee.indApp.shared.self'] = 'Self';
      resources['ffe.ee.indApp.shared.countryList.NZL'] = 'New Zealand';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.noticeOfAction'] = 'Notice of Action (I-797)';
      resources['ffe.ee.indApp.shared.countryList.NRU'] = 'Nauru';
      resources['ffe.ee.indApp.shared.countryList.NPL'] = 'Nepal';
      resources['ffe.ee.indApp.shared.countryList.NOR'] = 'Norway';
      resources['ffe.ee.indApp.shared.countryList.NLD'] = 'Netherlands';
      resources['ffe.ee.indApp.shared.countryList.NIU'] = 'Niue';
      resources['ffe.ee.indApp.shared.countryList.NIC'] = 'Nicaragua';
      resources['ffe.ee.indApp.shared.countryList.NGA'] = 'Nigeria';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.refugeeTravelDocument'] = 'Refugee Travel Document (I-571)';
      resources['ffe.ee.indApp.shared.countryList.NFK'] = 'Norfolk Island';
      resources['ffe.ee.indApp.shared.countryList.NER'] = 'Niger';
      resources['ffe.ee.indApp.shared.countryList.NCL'] = 'New Caledonia';
      resources['ffe.ee.indApp.shared.countryList.NAM'] = 'Namibia';
      resources['ffe.ee.indApp.shared.countryList.MYT'] = 'Mayotte';
      resources['ffe.ee.indApp.shared.countryList.MYS'] = 'Malaysia';
      resources['ffe.ee.indApp.shared.countryList.MWI'] = 'Malawi';
      resources['ffe.ee.indApp.shared.countryList.MUS'] = 'Mauritius';
      resources['ffe.ee.indApp.shared.countryList.MTQ'] = 'Martinique';
      resources['ffe.ee.indApp.shared.countryList.MSR'] = 'Montserrat';
      resources['ffe.ee.indApp.shared.countryList.MRT'] = 'Mauritania';
      resources['ffe.ee.indApp.shared.countryList.MOZ'] = 'Mozambique';
      resources['ffe.ee.indApp.shared.countryList.MNP'] = 'Northern Mariana Islands';
      resources['ffe.ee.indApp.shared.countryList.MNG'] = 'Mongolia';
      resources['ffe.ee.indApp.shared.label.lname'] = 'Last name';
      resources['ffe.ee.indApp.shared.countryList.MNE'] = 'Montenegro';
      resources['ffe.ee.indApp.shared.countryList.MMR'] = 'Myanmar';
      resources['ffe.ee.indApp.shared.countryList.MLT'] = 'Malta';
      resources['ffe.ee.indApp.shared.countryList.MLI'] = 'Mali';
      resources['ffe.ee.indApp.shared.countryList.MKD'] = 'Macedonia, The Former Yugoslav Replublic Of';
      resources['ffe.ee.indApp.shared.countryList.MHL'] = 'Marshall Islands';
      resources['ffe.ee.indApp.shared.newDocumentTypeDropDown.certificateOfEligibilityForNonimmigrantStudentStatus'] = 'Certificate of Eligibility for Nonimmigrant (F-1) Student Status (I-20)';
      resources['ffe.ee.indApp.shared.countryList.MEX'] = 'Mexico';
      resources['ffe.ee.indApp.shared.countryList.MDV'] = 'Maldives';
      resources['ffe.ee.indApp.shared.countryList.MDG'] = 'Madagascar';
      resources['ffe.ee.indApp.shared.countryList.MDA'] = 'Moldova, Republic Of';
      resources['ffe.ee.indApp.shared.countryList.MCO'] = 'Monaco';
      resources['ffe.ee.indApp.shared.countryList.MAR'] = 'Morocco';
      resources['ffe.ee.indApp.shared.countryList.MAF'] = 'Saint Martin (French Part)';
      resources['ffe.ee.indApp.shared.countryList.MAC'] = 'Macao';
      resources['ffe.ee.indApp.shared.sonDaughter'] = 'Son/daughter';
      resources['ffe.ee.indApp.shared.motherInLawFatherInLaw'] = 'Mother-in-law/father-in-law';




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
FFM.resources = resources; // Model associated with an individual ESD worker task
var CreateTaskBBModel = CommonValidationBBModel.extend(
{
	// TODO: Fix service call
	urlRoot: "/ee-rest/auth/"+tenantId+"/"+locale+"/InsuranceApplicationReview/createTask",
	idAttribute : "id",
	pageName : "essd",
	
	// insuranceApplicationTaskReviewVO
	"taskName":"ASSIGN_INSURANCE_APPL_REVIEW",
        "workTypeId" : "",
        "taskArea" : "",
        "exchangeServiceAreaId" : "",
        "assignedTo" : "",
        "taskPriorityStatus" : "",
        "personName" : "",
        "applicationId" : "",
        "documentTypeId" : "",
        "documentId" : ""
});

var eligibilitySupportStaffDesktopCreateTaskBBModel = new CreateTaskBBModel();
var IsDirectEnrollmentConsumerBBModel = CommonValidationBBModel.extend({

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
var createPersonMappingBBModel = new CreatePersonMappingBBModel();var myAccount_AccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/EeAccount",
	loginUrl : environment+"/ee-rest/auth/"+tenantId + "/"+locale+"/EeAccount/linkUsers/",
	idAttribute : "exchangeUserIdentifier",
	resources : resources,
	role : null
}); 
var myAccountAccountBBModel = new myAccount_AccountBBModel(initializeEEAccount());
var MyAccount_IndAppBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	idAttribute : "identifier",
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/IndividualApplication",
	
	// TODO Create IndAppMember Model

	getMemberEvents: function(member, filterFn)
	{
		return filterFn ? _.filter(member.memberEvent, filterFn) : member.memberEvents;
	},
	
	filterMedicaid: function(ev)
	{
		return ev.memberEventType==='Eligibility' &&
		ev.memberEligibility.memberEligibilityType==='ExchangeMedicaidMagi' &&
		ev.memberEligibility.eligibilityDeterminationDate;
	},
	
	getLatestEvent: function(events)
	{
		var latest = null;
		return events.length && _.reduce(events, function(memo, ev) 
		{
			if (ev.eligibilityDeterminationDate > latest)
			{
				latest = ev.eligibilityDeterminationDate;
				return ev;
			}
			else
			{
				return memo;
			}
		});
	},
	
	getMedicaidIndividuals: function()
	{
	var
		members = this.get('applicationMember'),
		event;
		return _.filter(members, function(member) {
			event = this.getLatestEvent(this.getMemberEvents(member, this.filterMedicaid));
			
			return (event && event.memberEligibility.eligibilityIndicator==='Y');
		}, this);
	}
});
var myAccount_IndAppBBModel = new MyAccount_IndAppBBModel();
// Create the MyAccount_GetSystemUserBBModel Model
var MyAccount_GetSystemUserBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	url: environment+"/ee-rest/auth/global/"+locale+"/EeAccount/getSystemUserByUserLogin/ffm",
	idAttribute : "ffm",
	resources : resources,
	role : null
});

var myAccountGetSystemUserBBModel = new MyAccount_GetSystemUserBBModel(getSystemUserInfo());
// Create the MyAccount_GetSystemUserBBModel Model
var MyAccount_GetIndAppContactInfoBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/getIndAppContactInformation",
	idAttribute : "applicationId",
	resources : resources,
	role : null
});

var myAccountGetIndAppContactInfoBBModel = new MyAccount_GetIndAppContactInfoBBModel(getIndAppContactInfo());
// Create the MyAccount_GetSystemUserBBModel Model
var MyAccount_RetrieveExchangeUserRequestBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/retrieveExchangeUserAppInfo",
	idAttribute : "applicationId",
	resources : resources,
	role : null
});

var myAccountRetrieveExchangeUserRequestBBModel = new MyAccount_RetrieveExchangeUserRequestBBModel(requestForExchangeUserInfo());
// Create the MyAccount_GetSystemUserBBModel Model
var MyAccount_RetrieveExchangeUserResponseBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/retrieveExchangeUserAppInfo",
	idAttribute : "applicationId",
	resources : resources,
	role : null
});

var myAccountRetrieveExchangeUserResponseBBModel = new MyAccount_RetrieveExchangeUserResponseBBModel(responseForExchangeUserInfo());
// Create the MyAccount_GetSystemUserBBModel Model
var MyAccount_RetrievePlanCompareEnrollmentRequestBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/PlanCompare/retrievePlanCompareGroupEnrollment",
	//idAttribute : "applicationId",
	resources : resources,
	role : null
});

var myAccountRetrievePlanCompareEnrollmentRequestBBModel = new MyAccount_RetrievePlanCompareEnrollmentRequestBBModel(requestForPlanCompareInfo());
// Create the MyAccount_GetSystemUserBBModel Model
var MyAccount_RetrievePlanCompareEnrollmentResponseBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/PlanCompare/retrievePlanCompareGroupEnrollment",
	//idAttribute : "applicationId",
	resources : resources,
	role : null
});

var myAccountRetrievePlanCompareEnrollmentResponseBBModel = new MyAccount_RetrievePlanCompareEnrollmentResponseBBModel(responseForPlanCompareInfo());
//coordinates with eeaccountUtil -> /auth/{tenantId}/{locale}/EeAccount/retrieveTaxHouseholdAPTC/{userId}
//to fetch APTC Info
var myAccountFetchAPTCInfoBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/EeAccount/retrieveTaxHouseholdAPTC/",
	idAttribute : "userId",
	resources : resources,
	role : null
}); 
var myAccountFetchAPTCInfoModel = new myAccountFetchAPTCInfoBBModel();

//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBmodel.js.vsl in andromda-backbone-js-ui cartridge.
//

// Create the ProfileBBModel Model
var MyAccount_FindPersonRequestBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/Person/findExistingApplicationsForUser",
	resources : resources,
	role : null
});

var myAccountFindPersonRequestBBModel = new MyAccount_FindPersonRequestBBModel(findPersonRequest());
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBmodel.js.vsl in andromda-backbone-js-ui cartridge.
//

// Create the ProfileBBModel Model
var MyAccount_FetchAgentBrokerQuestionsBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	urlRoot: environment + "/ee-rest/auth/" + tenantId + "/" + locale + "/IndividualApplication/fetchAgentBrokerQuestionsForUser",
   // on agent broker search the user will log in global, but we need to fetch application stuff in specific tenant
	urlRootPart1: environment + "/ee-rest/auth/",
   urlRootPart2: "/" + locale + "/IndividualApplication/fetchAgentBrokerQuestionsForUser",
	idAttribute: "applicationId",
	resources : resources,
	role : null
});

var myAccountFetchAgentBrokerQuestionsBBModel = new MyAccount_FetchAgentBrokerQuestionsBBModel(fetchAgentBrokerQuestions());
var MyAccount_VerifyCCRQuestionsBBModel = CommonValidationBBModel.extend({

	pageName:"myProfile",
	defaults : { },
	urlRoot: environment + "/ee-rest/auth/" + tenantId + "/" + locale + "/IndividualApplication/verifyAgentBrokerQuestionsForUser",
	urlPart1: environment + "/ee-rest/auth/",
	urlPart2: "/" + locale + "/IndividualApplication/verifyAgentBrokerQuestionsForUser",
	idAttribute: "applicationId",
	resources : resources,
	role : null
});

var myAccountVerifyCCRQuestionsBBModel = new MyAccount_VerifyCCRQuestionsBBModel(verifyAgentBrokerQuestions());

var myAccount_TerminatePlansBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/EeAccount/terminatePlans/ffm",
	idAttribute : "applicationID",
	resources : resources,
	role : null
}); 
var myAccountTerminatePlansBBModel = new myAccount_TerminatePlansBBModel(terminatePlans());
var myAccount_AuthorizationRepsBBModel = FFEModel.extend({
	idAttribute: 'userId'
});

var myAccount_AuthorizationRepsBBCollection = Backbone.Collection.extend({

	model: myAccount_AuthorizationRepsBBModel,
	url: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/authorizedRepsForSystemUser/",
	initialize : function() {
	},
	
	removeAuthorizedUserURL: environment + "/ee-rest/auth/" + tenantId + '/' + locale + '/IndividualApplication/unlinkApplicationToUser',
	
	removeAuthorizedUser: function(appId, userId)
	{
		var me = this;
		
		$.post(this.removeAuthorizedUserURL, {
			applicationId: appId,
			userId: userId
		}, function() {
			me.fetch();
		},
            {}).fail(function()
            {
                console.log('Remove authorized user failed');
            });
	}

});
var myAccount_UpdateAuthorizationRepsBBModel = CommonValidationBBModel.extend({
    pageName:"myAccount",
    defaults : { },
    urlRoot: environment + '/ee-rest/auth/global/' + locale + '/IndividualApplication/unlinkApplicationToUser',
    resources : resources,
    role : null
});
var myAccountupdateAuthorizationRepsBBModel = new myAccount_UpdateAuthorizationRepsBBModel({
        "applicationId" : "",
        "userId" : "",
        "accessType" : ""
});

var myAccountEIDMIntegration_createLiteEIDMAccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/createLiteEIDMAccount",
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/createLiteEIDMAccount",
	idAttribute : "exchangeUserIdentifier",
	resources : resources,
	role : null
}); 
var myAccountEIDMIntegrationCreateLiteEIDMAccountBBModel = new myAccountEIDMIntegration_createLiteEIDMAccountBBModel(initializeEIDMIntegrationCreateLiteEIDMModel());
var myAccountEIDMIntegration_fetchSecurityQuestionsEIDMAccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url: environment+"/ee-rest/global/" +locale+ "/MyAccountEIDMUnsecuredIntegration/fetchAllSecurityQuestions/ffm",
	idAttribute : "ffm",
	resources : resources,
	role : null
}); 
var myAccountEIDMIntegrationFetchSecurityQuestionsEIDMAccountBBModel = new myAccountEIDMIntegration_fetchSecurityQuestionsEIDMAccountBBModel();
var myAccountEIDMIntegration_UpdateSecurityQuestionsEIDMAccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updateSecurityQuestions",
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updateSecurityQuestions",
	idAttribute : "exchangeUserIdentifier",
	resources : resources,
	role : null
}); 
var myAccountEIDMIntegrationUpdateSecurityQuestionsEIDMAccountBBModel = new myAccountEIDMIntegration_UpdateSecurityQuestionsEIDMAccountBBModel(updateEIDMSecurityQuestions());
var myAccountEIDMIntegration_updatePasswordBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updatePassword",
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updatePassword",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var myAccountEIDMIntegrationUpdatePasswordBBModel = new myAccountEIDMIntegration_updatePasswordBBModel(initializeEIDMIntegrationUpdatePasswordModel());
var myAccountEIDMIntegration_updateExpiredPasswordBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updateExpiredPassword",
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updateExpiredPassword",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var myAccountEIDMIntegrationUpdateExpiredPasswordBBModel = new myAccountEIDMIntegration_updateExpiredPasswordBBModel(initializeEIDMIntegrationUpdateExpiredPasswordModel());
var myAccountEIDMIntegration_updateForgotPasswordBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updateForgottenPassword",
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updateForgottenPassword",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var myAccountEIDMIntegrationUpdateForgotPasswordBBModel = new myAccountEIDMIntegration_updateForgotPasswordBBModel(initializeEIDMIntegrationUpdateForgotPasswordModel());
var myAccountEIDMIntegration_updateForgottenUserNameBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	//url : environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updateForgottenUserName",
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updateForgottenUserName",
	//idAttribute : "userLevel",
	resources : resources,
	role : null
}); 
var myAccountEIDMIntegrationUpdateForgottenUserNameBBModel = new myAccountEIDMIntegration_updateForgottenUserNameBBModel(initializeEIDMIntegrationUpdateForgottenUserNameModel());
var myAccountEIDMIntegration_updatePhoneNumberBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	//url : environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updatePhoneNumber",
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updatePhoneNumber",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var myAccountEIDMIntegrationUpdatePhoneNumberBBModel = new myAccountEIDMIntegration_updatePhoneNumberBBModel(initializeEIDMIntegrationUpdatePhoneNumberModel());
var myAccountEIDMIntegration_UpdateEmailEIDMAccountBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	url : environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updateEmail",
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updateEmail",
	idAttribute : "userName",
	resources : resources,
	role : null
}); 
var myAccountEIDMIntegrationUpdateEmailEIDMAccountBBModel = new myAccountEIDMIntegration_UpdateEmailEIDMAccountBBModel(initializeEIDMEmail());

var myAccount_UpdateContactNoticesBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/EeAccount/updateIndAppContactNotices",
	idAttribute : "applicationId",
	resources : resources,
	role : null
}); 
var myAccountUpdateContactNoticesBBModel = new myAccount_UpdateContactNoticesBBModel(
		{
		    "exchangeUserIdentifier" : "",
		    "primaryBusinessAddress" : "",
		    "applicationId" : "",
		    "concurrencyHash" : "",
		    "emailAddress" : "",
		    "receiveNoticesByMailingAddress" : "",
		    "receiveNoticesByEmail" : ""
		});
var myAccount_UpdateContactNotificationBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/EeAccount/updateIndAppContactNotifications",
	idAttribute : "applicationId",
	resources : resources,
	role : null
}); 
var myAccountUpdateContactNotificationBBModel = new myAccount_UpdateContactNotificationBBModel(
		{
		    "exchangeUserIdentifier" : "",
		    "notificationPreferenceType" : "",
		    "applicationId" : "",
		    "concurrencyHash" : "",
		    "emailAddress" : "",
		    "receiveEmailNotifications" : "",
		    "receiveMessagingNotifications" : "",
		    "phoneNumber" : ""
		});
var myAccount_UpdateEmailBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/EeAccount/updateIndAppContactEmailAddress",
	idAttribute : "applicationId",
	resources : resources,
	role : null
});
var myAccountUpdateEmailBBModel = new myAccount_UpdateEmailBBModel(
		{
		    "exchangeUserIdentifier" : "",
		    "emailAddress" : "",
		    "concurrencyHash" : "",
		    "applicationId" : ""
		});
var myAccount_UpdatePrimaryNumberBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/EeAccount/updateIndAppContactPrimaryPhoneNumber",
	idAttribute : "applicationId",
	resources : resources,
	role : null
}); 
var myAccountUpdatePrimaryNumberBBModel = new myAccount_UpdatePrimaryNumberBBModel(updatePhoneNumberModel());
var myAccount_UpdateSpokenLanguageBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/EeAccount/updateIndAppContactSpokenLanguagePreference",
	idAttribute : "applicationId",
	resources : resources,
	role : null
}); 
var myAccountUpdateSpokenLanguageBBModel = new myAccount_UpdateSpokenLanguageBBModel(updateLanguage());
var myAccount_UpdateSecondaryNumberBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/EeAccount/updateIndAppContactSecondaryPhoneNumber",
	idAttribute : "applicationId",
	resources : resources,
	role : null
}); 
var myAccountUpdateSecondaryNumberBBModel = new myAccount_UpdateSecondaryNumberBBModel(updatePhoneNumberModel());
var myAccount_UpdateWrittenLanguageBBModel = CommonValidationBBModel.extend({

	pageName:"myAccount",
	defaults : { },
	 
	urlRoot: environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/EeAccount/updateIndAppContactWrittenLanguagePreference",
	idAttribute : "applicationId",
	resources : resources,
	role : null
}); 
var myAccountUpdateWrittenLanguageBBModel = new myAccount_UpdateWrittenLanguageBBModel(updateLanguage());

//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBmodel.js.vsl in andromda-backbone-js-ui cartridge.
//

// Create the ProfileBBModel Model
var MyAccount_fetchUserInfoBBModel = CommonValidationBBModel.extend({

	pageName	: "myProfile",
	defaults	: { },
	url			: environment+"/ee-rest/auth/global/"+locale+"/MyAccountEIDMSecuredIntegration/fetchUserInfo/ffm",
	idAttribute	: "ffm",
	resources	: resources,
	role		: null
});

var myAccountFetchUserInfoBBModel = new MyAccount_fetchUserInfoBBModel(fetchUserInfoProfile());
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBmodel.js.vsl in andromda-backbone-js-ui cartridge.
//

// Create the ProfileBBModel Model
var MyAccount_LiteAccountUpgradeBBModel = CommonValidationBBModel.extend({

	pageName	: "myProfile",
	defaults	: { },
	url			: environment+"/ee-rest/auth/global/"+locale+"/MyAccountEIDMSecuredIntegration/upgradeLiteEIDMAccount/ffm",
	idAttribute	: "userName",
	resources	: resources,
	role		: null
});

var myAccountLiteAccountUpgradeBBModel = new MyAccount_LiteAccountUpgradeBBModel(liteAccountUpgradeModel());
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBmodel.js.vsl in andromda-backbone-js-ui cartridge.
//

// Create the ProfileBBModel Model
var MyAccount_SubmitOutofWalletAnswersBBModel = CommonValidationBBModel.extend({

	pageName	: "myProfile",
	defaults	: { },
	url			: environment+"/ee-rest/auth/global/"+locale+"/MyAccountEIDMSecuredIntegration/submitOutofWalletAnswers/ffm",
	idAttribute	: "userID",
	resources	: resources,
	role		: null
});

var myAccountSubmitOutofWalletAnswersBBModel = new MyAccount_SubmitOutofWalletAnswersBBModel(submitOutofWalletAnswersModel());
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBmodel.js.vsl in andromda-backbone-js-ui cartridge.
//

// Create the ProfileBBModel Model myAccount_EIDMIntegration_IDProofQuestionsBBModel
var MyAccount_IDProofQuestionsBBModel = CommonValidationBBModel.extend({

	pageName	: "myProfile",
	defaults	: { },
	url			: environment+"/ee-rest/auth/global/"+locale+"/MyAccountEIDMSecuredIntegration/submitOutofWalletAnswers/ffm",
	idAttribute	: "userID",
	resources	: resources,
	role		: null
});

var myAccountIDProofQuestionsBBModel = new MyAccount_IDProofQuestionsBBModel();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBmodel.js.vsl in andromda-backbone-js-ui cartridge.
//

// Create the ProfileBBModel Model
var MyAccount_UpdatePersonEventBBModel = CommonValidationBBModel.extend({

	pageName	: "myProfile",
	defaults	: { },
	url			: environment+"/ee-rest/auth/global/"+locale+"/EeAccount/updateSystemUserIDProofingEvent/ffm",
	idAttribute	: "systemUserLoginName",
	resources	: resources,
	role		: null
});

var myAccountUpdatePersonEventBBModel = new MyAccount_UpdatePersonEventBBModel(updatePersonIDProofingEvent());
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBmodel.js.vsl in andromda-backbone-js-ui cartridge.
//

// Create the ProfileBBModel Model
var MyAccount_VerifyManualIDProofingBBModel = CommonValidationBBModel.extend({

	pageName	: "myProfile",
	defaults	: { },
	url			: environment+"/ee-rest/auth/global/"+locale+"/MyAccountEIDMSecuredIntegration/verifyManualIDProofing/ffm",
	idAttribute	: "userName",
	resources	: resources,
	role		: null
});

var myAccountVerifyManualIDProofingBBModel = new MyAccount_VerifyManualIDProofingBBModel(verifyManualIDProofingModel());
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBmodel.js.vsl in andromda-backbone-js-ui cartridge.
//

// Create the ProfileBBModel Model
var MyAccount_updateSystemUserDetailsBBModel = CommonValidationBBModel.extend({

	pageName	: "myProfile",
	defaults	: { },
	url			: environment+"/ee-rest/auth/global/"+locale+"/MyAccountEIDMSecuredIntegration/updateAfterSuccessfulIDProofing/ffm",
	idAttribute	: "systemUserLoginName",
	resources	: resources,
	role		: null
});

var myAccountUpdateSystemUserDetailsBBModel = new MyAccount_updateSystemUserDetailsBBModel(updatePersonFromEIDM());
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBmodel.js.vsl in andromda-backbone-js-ui cartridge.
//

// Create the ProfileBBModel Model
var MyAccount_UpdatePersonFromEIDMBBModel = CommonValidationBBModel.extend({

	pageName	: "myProfile",
	defaults	: { },
	url			: environment+"/ee-rest/auth/global/"+locale+"/EeAccount/updatePersonFromEIDM/ffm",
	idAttribute	: "userName",
	resources	: resources,
	role		: null
});

var myAccountUpdatePersonFromEIDMBBModel = new MyAccount_UpdatePersonFromEIDMBBModel(updatePersonFromEIDM());



// A Backbone collection of AccountNotificationsBBCollection objects, tied to the REST URL for retrieval
// The model property, unlike most properties, MUST be a Backbone "class object", 
// not an object derived from it

var myAccount_AccountNotificationsBBCollection = Backbone.Collection.extend({
	url: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/retrieveNotifications/"
});
// We must run the prototype constructor to run initialize
var myAccountAccountNotificationsBBCollection = new myAccount_AccountNotificationsBBCollection();// A Backbone collection of myAccount_AccountPlansBBCollection objects, tied to the REST URL for retrieval
// The model property, unlike most properties, MUST be a Backbone "class object", 
// not an object derived from it

var myAccount_AccountPlansBBCollection = Backbone.Collection.extend({
	url: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/retrieveSavedPlans/"
});
// We must run the prototype constructor to run initialize
var myAccountSavedPlansBBCollection = new myAccount_AccountPlansBBCollection();// A Backbone collection of AccountNotificationsBBCollection objects, tied to the REST URL for retrieval
// The model property, unlike most properties, MUST be a Backbone "class object", 
// not an object derived from it

var myAccount_AccountEnrolledPlansBBCollection = Backbone.Collection.extend({
	url: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/retrieveEnrolledPlans/"
});
// We must run the prototype constructor to run initialize
var myAccountEnrolledPlansBBCollection = new myAccount_AccountEnrolledPlansBBCollection();// A Backbone collection of AccountEnrolledProgramsBBCollection objects, tied to the REST URL for retrieval
// The model property, unlike most properties, MUST be a Backbone "class object", 
// not an object derived from it

var myAccount_AccountEnrolledProgramsBBCollection = Backbone.Collection.extend({
	url: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/getEnrolledPrograms"
});
// We must run the prototype constructor to run initialize
var myAccountEnrolledProgramsBBCollection = new myAccount_AccountEnrolledProgramsBBCollection();// A Backbone collection of AccountNotificationsBBCollection objects, tied to the REST URL for retrieval
// The model property, unlike most properties, MUST be a Backbone "class object", 
// not an object derived from it

var myAccount_AccountTaxHouseholdAPTCBBCollection = Backbone.Collection.extend({
	url: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/retrieveTaxHouseholdAPTC/"
});
// We must run the prototype constructor to run initialize
var myAccountTaxHouseholdAPTCBBCollection = new myAccount_AccountTaxHouseholdAPTCBBCollection();var myAccount_ApplicationDetailsBBModel = FFEModel.extend({
	initialize : function() {
	}
});
var myApplicationDetailsBBModel = new myAccount_ApplicationDetailsBBModel();

var myAccount_ApplicationDetailsBBCollection = Backbone.Collection.extend({
	model: myAccount_ApplicationDetailsBBModel,
	url: environment+"/ee-rest/"+tenantId+"/"+locale+"/ToDoList/eligibilityToDoList/",

	initialize : function() {
	},
	initUrl:function()
	{
		this.url=environment+"/ee-rest/"+tenantId+"/"+locale+"/ToDoList/eligibilityToDoList/";
	}
});
var myApplicationDetailsBBCollection = new myAccount_ApplicationDetailsBBCollection();

var myAccount_PhysicalDocumentToVerification = FFEModel.extend({
    url: environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/LinkDocumentToVerification/",
    initUrl:function()
    {
        this.url=environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/LinkDocumentToVerification/";
    }
});
var physicalDocumentBBModel = new myAccount_PhysicalDocumentToVerification();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var myAccount_AccountHomepageBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#myAccountHomePage"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,
	getSystemUserModel : myAccountGetSystemUserBBModel,
	retrieveExchangeUserRequestModel:myAccountRetrieveExchangeUserRequestBBModel,
	retrieveExchangeUserResponseModel:myAccountRetrieveExchangeUserResponseBBModel,
	notificationsCollection : myAccountAccountNotificationsBBCollection,
	accountPlansCollection : myAccountSavedPlansBBCollection,
	accountEnrolledPlansCollection : myAccountEnrolledPlansBBCollection,
	accountEnrolledProgramsCollection : myAccountEnrolledProgramsBBCollection,
	fetchAPTCModel: myAccountFetchAPTCInfoModel, 
	fetchedAPTCInfo : {},
	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	homePageDemoToolTemplate : _.template($('#homePageDemoToolTemplate').html()),
	//headerSubNavTemplate : _.template($('#headerSubNavTemplate').html()),
	//homePageSideNavTemplate : _.template($('#homePageSideNav').html()),
	homePageSideNavTemplate  : _.template($('#accountSettingsNavBarTemplate').html()),
	//navBarTemplate  : _.template($('#accountSettingsNavBarTemplate').html()),
	appNotStartedTemplate : _.template($('#appNotStartedTemplate').html()),
	appInProgressTemplate : _.template($('#appInProgressTemplate').html()),
	eligibilityResultsPendingTemplate : _.template($('#eligibilityResultsPendingTemplate').html()),
	enrollmentInProgressTemplate : _.template($('#enrollmentInProgressTemplate').html()),
	viewEligibilityTemplate : _.template($('#viewEligibilityTemplate').html()),
	postAppCompletionTemplate : _.template($('#postAppCompletionTemplate').html()),
	regularNotificationTemplate : _.template($('#regularNotificationTemplate').html()),
	inconsistencyNotificationTemplate : _.template($('#inconsistencyNotificationTemplate').html()),
	enrollmentPeriodTemplate : _.template($('#enrollmentPeriodTemplate').html()),
	specialEnrollmentPeriodAvailableTemplate : _.template($('#specialEnrollmentPeriodAvailableTemplate').html()),
	viewEligibilityResultsTemplate : _.template($('#viewEligibilityResultsTemplate').html()),
	notFinishedTemplate : _.template($('#notFinishedTemplate').html()),
	savedPlansTemplate : _.template($('#savedPlansTemplate').html()),
	savedPlansListTemplate : _.template($('#savedPlansListTemplate').html()),
	noSavedPlansTemplate : _.template($('#noSavedPlansTemplate').html()),
	enrolledPlansTemplate : _.template($('#enrolledPlansTemplate').html()),
	enrolledProgramsTemplate : _.template($('#enrolledProgramsTemplate').html()),
	enrolledPlansListTemplate : _.template($('#enrolledPlansListTemplate').html()),
	discountInfoTemplate : _.template($('#discountInfoTemplate').html()),
	discountInfoListTemplate : _.template($('#discountInfoListTemplate').html()),
	
	
	// employer templates
	employerChoiceStageTemplate : _.template($('#employerChoiceStageTemplate').html()),
	employerPostAppCompletionTemplate : _.template($('#employerPostAppCompletionTemplate').html()),
	
	//employee templates 
	employeePostAppCompletionTemplate : _.template($('#employeePostAppCompletionTemplate').html()),
	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'cancel', 'changeViews', 'appNotStarted','addPremiumDisounts','backToMyAccountLanding',
					'appInProgress', 'eligibilityResultsPending', 'enrollmentInProgress', 'viewEligibility', 'postAppCompletion',
					'getNotifications', 'addNotifications', 'getPlans', 'addPlansTolist', 'viewEligibilityResults', 
					'employerChoiceStage','hideAttentionHeader','fetchGetSystemUser','initialFetch','goToEligibiltyResultsPage',
					'goToEnrollmentPage','goToCompleteApplication','displayCorrectLanding', 'getStatusText','getCurrentStateForUrls',
					'getCurrentApplicationID','fetchExchangeUserInfo','getEnrolledPrograms','addEnrolledProgramsList');
					
		this.model.bind('homePage', this.refreshTemplate);
		
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.initialFetch();
		//moved render
		//this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #cancel" : "cancel", 
		"click .viewEligibility" : "viewEligibilityResults",
		"click #goToEligibiltyResultsPage" : "goToEligibiltyResultsPage",
		"click #goToEnrollmentPage" : "goToEnrollmentPage",
		"click #goToCompleteApplication" :"goToCompleteApplication",
		//"click #disableValidation" : "disableValidation",
		"click #myAccountBackButton" : "backToMyAccountLanding",
		"click .close" : "hideAttentionHeader"
		//"click .demoTool" : "changeViews"
	},
	
	render : function() {
		this.refreshTemplate();	
		 
	},
	
	initialFetch : function()
	{
		this.getCurrentApplicationID();
		this.fetchGetSystemUser();
				
	},
	
	refreshTemplate : function() 
	{
		updateStateBar(tenantId);
		if(!isEmpty(agentBrokerSAMLToken))
		{
			makeDirectEnrollmentUIChanges();
		}
		
		//validationEnabled = false;
		// commented to prevent blank homepage
		//$('#homePageNotifactionArea').empty();
		//$('#homePageBodyArea').empty();

		this.addNotifications();
		
		//note make more dynamic
		var applicationID = myAccountAppID;
	},
		
	//disableValidation : function() {
	//	if (isCheckboxChecked('disableValidation')) {
	//		validationEnabled = false;
	//	}
	//	else {
	//		validationEnabled = true;
	//	}
	//	this.model.trigger('refreshAccountSettings');
	//	this.model.trigger('refreshSecurity');
	//	this.model.trigger('refreshNotifications');
	//},
	changeViews : function( e ) {
		switch(e) {
			case 'NOT STARTED':
				$('#appNotStarted').show();
				this.appNotStarted();
				break;
			case 'STARTED':
				$('#appInProgress').show();
				this.appInProgress();
				break;
			case 'ELIGIBILITY PENDING':
				$('#eligibilityResultsPending').show();
				this.eligibilityResultsPending();
				break;
			case 'ENROLLMENT IN PROGRESS':
				$('#enrollmentInProgress').show();
				this.enrollmentInProgress();
				break;
			case 'VIEW ELIGIBILITY':
				$('#viewEligibility').show();
				this.viewEligibility();
				break;
			/*case '5':
				if(myAccountRoleType === 'individual') {
					$('#postAppCompletion').show();
				}
				else if(myAccountRoleType === 'employer') {
					$('#postAppCompletionEmployer').show();
				}
				else {
					$('#postAppCompletionEmployee').show();
				}
				this.postAppCompletion();
				break;
			case '6':
				if(myAccountRoleType === 'employer') {
					$('#employerChoiceStage').show();
				}
				this.employerChoiceStage();
				break;*/
			case 'POST APP':
				$('#postAppCompletion').show();
				$('#homePageBodyArea').empty();
				$('#postAppNav').empty();
				$('#homePageBodyArea').append(this.postAppCompletionTemplate());
				$('#postAppNav').append(this.homePageSideNavTemplate());
				$('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.post']);
				break;
			
		}
		return false;
	},
	
	/*currentStatus : function() {
		var apps = this.model.get('myApplications');
		
		if(apps.length > 0) {
			for(var i = 0; i < apps.length; i++) {
				if(_.isNull(apps[i].submissionDatetime)) {
					if(!isEmpty(apps[i].identifier)) {
						$('#homePageNotifactionArea').prepend(this.notFinishedTemplate({
							'applicationName' : determineApplicationName(),
							'appId' : apps[i].identifier
						}));
					}
					
				}
				else {
					if(!isEmpty(apps[i].identifier)) {
						$('#homePageNotifactionArea').prepend(this.viewEligibilityResultsTemplate({
							'appId' : apps[i].identifier
						}));
					}
				}
			}
		}
		else {
			$('#homePageNotifactionArea').prepend(this.enrollmentPeriodTemplate({
				'applicationName' : determineApplicationName(),
				'user' : ffeUserName
			}));
		}
	},*/
	
	fetchGetSystemUser : function() 
	{
		var $this = this, systemUserLoginName = '';
		
		
		if(ffeCCRUser ==='true')
		{
		   if(!isEmpty(postCCRApplicantIDToken) && postCCRApplicantIDToken !=='$paramPostCCRApplicantID')
			{
				//If CCR Post Applicant ID
				systemUserLoginName = postCCRApplicantIDToken;	
			}
		}
		else
		{
			systemUserLoginName = ffeUserName;	
		}
		
		
		if(ffeCCRUser ==='true')
		{
			this.getSystemUserModel.url = environment+"/ee-rest/auth/global/"+locale+"/EeAccount/getSystemUserByUserLogin/"+ systemUserLoginName;
		}
		
		this.getSystemUserModel.set({'systemUserLoginName' : systemUserLoginName});
		this.getSystemUserModel.fetch({
			success : function(model, response) 
			{
				console.log("successful fetch user info");
				$this.model.trigger('renderIDProofGetStarted');
				$('.appYear').html(getCurrentEnrollmentYear()); 
				$('.appType').html($this.resources['ffe.ee.myAccount.link.application.appType']);
			
				if(!isEmpty(myAccountAppID))
				{
					$(".currentAppId").html(myAccountAppID);
				}
				else
				{
					$(".currentAppId").html($this.resources['ffe.ee.shared.label.na']);
				}
				if(!isEmpty(myAccountAppID))
				{
					$this.fetchExchangeUserInfo();
					$this.getNotifications(); 
					//$this.getEnrolledPlans();
					$this.getAPTC(); //new method
					//refresh the communication preferences
					$this.model.trigger("refreshAccountSettings");
					//communication preferences
					$this.model.trigger("refreshCommunicationPreferences");
					
				}
				$this.render(); //after a complete fetch, render the display
			},
			error : function(model, response) {
				console.log("error in fetch user info");
			}
		});
	},
	
	fetchExchangeUserInfo : function(){
		var applicationID = myAccountAppID;
		var exchangeUserID = "";
		var currentApplications = this.getSystemUserModel.get('systemUser').exchangeUserInsuranceApp;
			if(!isEmpty(applicationID)){
				for(var m=0; m<currentApplications.length; m++){
					if(currentApplications[m].insuranceAppId === applicationID){
						exchangeUserID = currentApplications[m].exchangeUserId;
					}
				}
			}
		var $this = this;
		if(!isEmpty(applicationID))
		{
			this.retrieveExchangeUserRequestModel.set({'applicationId' : applicationID});
			this.retrieveExchangeUserRequestModel.set({'exchangeUserId' : exchangeUserID});
			this.retrieveExchangeUserRequestModel.fetch({
				success : function(model, response) 
				{
					//push the response into the response model 
					var status = response.applicationStatus;
					var appId = response.applicationId;
					if(!isEmpty(appId)){
						$this.retrieveExchangeUserResponseModel.set({"applicationStatus" : status});
						$this.retrieveExchangeUserResponseModel.set({"applicationId" : appId});
					}
					$this.getEnrolledPlans();
					$this.displayCorrectLanding(status);
					$this.model.trigger('hideSideNavItems');
					//may make a new method, just pass in both models- and reutn the one with the data or something
					console.log("successful fetch user info");
					
				},
				error : function(model, response) {
					console.log("error in fetch user info");
				}
			});
		}
	},
	
	displayCorrectLanding : function(status){
		
		//var status = s;
		
		//if(!isEmpty(appId)){
		//	status = this.retrieveExchangeUserResponseModel.get('applicationStatus');
		//}
		switch(status){
			case '001'://Application in Progress
				this.changeViews("STARTED");
				break;
			case '002'://View Eligilibility
				this.changeViews("VIEW ELIGIBILITY");
				break;
			case '003'://Enrollment in progress
				this.changeViews("ENROLLMENT IN PROGRESS");
				break;
			//case '004'://Enrollment complete
			//	this.changeViews("POST APP");
			//	break;
			//default :
			//	this.changeViews("NOT STARTED");
			//	break;
		}
	
	},
	
	getNotifications : function() {
		var $this = this,
			notCollection = this.notificationsCollection,
			oldURL = notCollection.url,
			url = environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/retrieveNotifications/"+ffeUserName;
		
		notCollection.url = url;
		this.notificationsCollection.fetch({
			success : function(collection, response) {
				
				notCollection.url = oldURL;
				console.log('success fetching notification collection');
				//TESTING MESSAGE
				$this.render(); //after a complete fetch, render the display
			},
			error : function(collection, response) {
				console.log('error fetching notification collection');
			}
		});
	},
	
	addNotifications : function() {
		var notifications = this.notificationsCollection;
		var notificationList = '';
		var link = '';
		var downloadLink ='';
		var downloadText = '';
		
		$('#homePageNotifactionArea').empty();
		if(notifications.length > 0) {
			downloadLink = resources['ffe.ee.shared.label.na'];
			downloadVar = resources['ffe.ee.shared.link.download'];
			for(var i = 0; i < notifications.length; i++) {
				if(!isEmpty(notifications.models[i].attributes.linkUrl)) 
				{
					link = createLinkForDocument(notifications.models[i].attributes.linkUrl, locale, downloadText, downloadLink);
				}
				else {
					link = '';
				}
				notificationList += this.regularNotificationTemplate({
					'subject' : notifications.models[i].attributes.notificationSubject,
					'message' : link
				});
			}
			$('#homePageNotifactionArea').append(notificationList);
			$('#homeNotificationArea').show();
		} else {
         $('#homeNotificationArea').hide();
      }
	},
	
	hideAttentionHeader : function(){
		var numOfNotifications= $('#homePageNotifactionArea > div.alert');
		
		if(numOfNotifications.length === 1){
			$('#attentionHeading').hide();
			$('#homeNotificationArea').hide();
		}
	},
	
	getPlans : function() {
		var $this = this,
			planCollection = this.accountPlansCollection,
			oldURL = planCollection.url,
			url = environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/retrieveSavedPlans/"+ffeUserName;
			
		planCollection.url = url;
		this.accountPlansCollection.fetch({
			success : function(model, response) {
				$this.addPlansTolist();
				planCollection.url = oldURL;
				console.log('success fetching plans');
			},
			error : function(model, response) {
				console.log('error fetching plans');
			}
		});
	},
	
	addPlansTolist : function() {
		$('.plansList').empty();
		var planList = this.accountPlansCollection,
			plans = '';
		
		if(planList.models.length > 0) {
			$('#planList').append(this.savedPlansListTemplate());
			for(var i = 0; i < planList.models.length; i++) {
				plans += this.savedPlansTemplate({
					'issuerName' : planList.models[0].attributes.issuerName,
					'planName' : planList.models[0].attributes.planName
				});
			}
			$('.plansList').append(plans);
		}
		else {
			$('#planList').append(this.noSavedPlansTemplate());
		}
	},
	getAPTC: function()
	{ 
		var theContext = this;
		
		if(!isEmpty(myAccountAppID))
		{
			this.fetchAPTCModel.set({userId : myAccountAppID });
			this.fetchAPTCModel.fetch(
			{
				success: function(model, response)
				{ 
					console.log('fetchAPTC success');
					//set the response to the APTC info 
					theContext.fetchedAPTCInfo =response;
					//theContext.postAppCompletion(); //for testing
					theContext.addPremiumDisounts();
					
				},
				error: function(model, response)
				{
					console.log('fetchAPTC failure');
				}
			});
		}	
	},
	getEnrolledPlans : function() {
		var applicationID = myAccountAppID;
		var status = this.retrieveExchangeUserResponseModel.get('applicationStatus');
		var $this = this,
			enrolledPlanCollection = this.accountEnrolledPlansCollection,
			oldURL = enrolledPlanCollection.url;
			var url = environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/retrieveEnrolledPlans/"+applicationID;
			
		enrolledPlanCollection.url = url;
        //if ('003' !== $this.retrieveExchangeUserRequestModel.attributes.applicationStatus) {
            blockUIForProfile();
            this.accountEnrolledPlansCollection.fetch({
                success : function(model, response) {
					$.unblockUI();
					if(response.length > 0) {
						if(status === '003') {
							$this.changeViews("POST APP");
							$this.addEnrolledPlansTolist();
							$this.getAPTC();
							//$this.getEnrolledPrograms();
						}
					}
					$this.getEnrolledPrograms();
										
					$this.model.trigger('hideSideNavItems');
					enrolledPlanCollection.url = oldURL;
					$this.model.trigger("myPlansAndPrograms");
					console.log('success fetching plans');
                },
                error : function(model, response) {
                    $.unblockUI();
                    //TODO replace with exception handling
                    $this.getEnrolledPrograms();
                    console.log('error fetching plans');
                }
            });
       // }
	},
	
	getEnrolledPrograms : function() {
		var enrolledPlanCollection = this.accountEnrolledPlansCollection;
		var applicationID = myAccountAppID;
		var status =  this.retrieveExchangeUserResponseModel.get('applicationStatus');
		var $this = this,
			enrolledProgramCollection = this.accountEnrolledProgramsCollection,
			oldURL = enrolledProgramCollection.url;
			var url = environment+"/ee-rest/auth/"+tenantId+"/"+locale+"/EeAccount/getEnrolledPrograms/"+applicationID;
			
		enrolledProgramCollection.url = url;
		this.accountEnrolledProgramsCollection.fetch({
			success : function(model, response) {
				var compareStatus = parseInt(status);
				if (response.length > 0){
					status = $this.retrieveExchangeUserRequestModel.attributes.applicationStatus;
					if(status === '003'){
						if(enrolledPlanCollection.length === 0){
							$this.changeViews("POST APP");
						}
						$this.addEnrolledProgramsList();
					
						for(var i = 0; i < enrolledProgramCollection.models.length; i++) {
							if(enrolledProgramCollection.models[i].attributes.website === undefined ||
								enrolledProgramCollection.models[i].attributes.website.trim.length === 0 || 
								enrolledProgramCollection.models[i].attributes.website === null) {
								$("#medicaidCHIPwebiteButton"+i).hide();
							}
						}
					}
				}
				else if(enrolledPlanCollection.length === 0 || compareStatus !== 3){
					$this.displayCorrectLanding(status);
				}

				$this.model.trigger("myPlansAndPrograms");
				enrolledProgramCollection.url = oldURL;
				console.log('success fetching plans');
			},
			error : function(model, response) {
				//TODO replace with exception handling
				$this.displayCorrectLanding(status);
				console.log('error fetching plans');
			}
		});
	},
	
	addEnrolledPlansTolist : function() {
		$('.enrolledPlan').empty();
		var enrolledPlanList = this.accountEnrolledPlansCollection,
			enrolledPlans = '';
		var enrolledProgramList = this.accountEnrolledProgramsCollection;
		
		var memberFirstNameList = [];
		var statusClass = "";
		if(enrolledPlanList.models.length > 0) {
			$('#enrolledPlan').append(this.enrolledPlansListTemplate());
			for(var i = 0; i < enrolledPlanList.models.length; i++) {
				var members = enrolledPlanList.models[i].attributes.enrolledMemberList;
				for(var x =0; x< members.length; x++){
					memberFirstNameList.push(members[x].firstName);
				}
				var planStatus = enrolledPlanList.models[i].attributes.planStatus;
				if(planStatus === "Problem"){
					statusClass = "colorRedAlert";
				}
				var status = this.getStatusText(planStatus);
				var displayNames = this.concatNamesTogether(memberFirstNameList);
				enrolledPlans += this.enrolledPlansTemplate({
					'issuerName' : enrolledPlanList.models[i].attributes.issuerName,
					'planName' : enrolledPlanList.models[i].attributes.planName,
					'planStatus' : status,
					'colorClass' : statusClass,
					'members' : displayNames
				});
				
				memberFirstNameList = [];
			}
			
			$('.enrolledPlan').append(enrolledPlans);
			if(enrolledProgramList.length > 0){
				this.addEnrolledProgramsList();
			}			
		}
		
	},
	
	addEnrolledProgramsList : function (){
		//$('.enrolledPlan').empty();
		var enrolledPlanList = this.accountEnrolledPlansCollection;
		var enrolledProgramList = this.accountEnrolledProgramsCollection,
		enrolledPrograms = '';
		var memberFirstNameList = [];
		if(enrolledProgramList.models.length > 0) {
			if(enrolledPlanList.length === 0)
			{
				$('#enrolledPlan').append(this.enrolledPlansListTemplate());
				$('#enrolledPlan').removeClass('span4');
				$('#enrolledPlan').addClass('span6');
			}
			for(var i = 0; i < enrolledProgramList.models.length; i++) 
			{
				var members = enrolledProgramList.models[i].attributes.memberList;
				for(var x =0; x< members.length; x++)
				{
					memberFirstNameList.push(members[x].firstName);
				}
				var planStatus = enrolledProgramList.models[i].attributes.status;
				var status = this.getStatusText(planStatus);
				var displayNames = this.concatNamesTogether(memberFirstNameList);
				enrolledPrograms += this.enrolledProgramsTemplate({
					'programTitle' : enrolledProgramList.models[i].attributes.programTitle,
					'programName' : enrolledProgramList.models[i].attributes.programName,
					'planStatus' : status,
					'members' : displayNames
				});
				memberFirstNameList = [];
			}
		}
		$('.enrolledPlan').append(enrolledPrograms);
	},
	
	addPremiumDisounts : function()
	{
		//modified to pull from tax household
		$('#discountInfo').show();
		var aPremiumIsUndefined = false;
		console.log('rendering premiums');
		$('.discountInfo').empty();
		var discountInfoList = this.fetchedAPTCInfo;
		
		if(!isEmpty(this.fetchedAPTCInfo) && this.fetchedAPTCInfo.length > 0) 
		{
			var memberFirstNames = [];
			$('#discountInfo').empty();
			$('#discountInfo').append(this.discountInfoListTemplate());
			for(var i = 0; i < this.fetchedAPTCInfo.length; i++) 
			{
				var currAPTC = this.fetchedAPTCInfo[i];
				var members = currAPTC.taxHouseholdMemberList;
				
				for(var x =0; x< members.length; x++)
				{
					memberFirstNames.push(members[x].firstName);
				}
				var displayMemberNames = this.concatNamesTogether(memberFirstNames);
				
				var usingAPTC = currAPTC.allocatedAPTCAmount;
				if(isEmpty(usingAPTC))
				{
					usingAPTC = resources['ffe.ee.shared.label.na'];
					aPremiumIsUndefined=true;
				}
				var eligibleAPTC = currAPTC.availableAPTCAmount;
				if(isEmpty(eligibleAPTC))
				{
					eligibleAPTC=resources['ffe.ee.shared.label.na'];
					aPremiumIsUndefined=true;
				}
				
				$('.discountInfo').append(this.discountInfoTemplate({
					'allocatedAPTC' : usingAPTC,
					'availableAPTC' :eligibleAPTC,
					'member' : displayMemberNames,
					'index' : i
				})); 
				
				//only show slider if both values exist
				if(!aPremiumIsUndefined)
				{
					$( "#slider" + i ).slider({
						value: usingAPTC,
						range: "min",
						disabled: true,
						max: eligibleAPTC 
						
					});
					$('#slider' + i).children('a').removeClass('ui-slider-handle');
				}
			}
			//$('.discountInfo').append(discountInfo);

		}
	
	}, 
	//Get Status Text for  the plan/program
	getStatusText : function(status)
	{
		var statusRes= '';
		switch(status)
		{
			case '1':
				statusRes= this.resources['ffe.ee.myAccount.application.status.pending'];
				break;
			case '2':
				statusRes= this.resources['ffe.ee.myAccount.coverage.heading.active'];
				break;
			case '3':
				statusRes= this.resources['ffe.ee.myAccount.application.status.cancelled'];
				break;
			case '4':
				statusRes= this.resources['ffe.ee.myAccount.application.status.terminated'];
				break;
		    default: //N/A for default
				statusRes= this.resources['ffe.ee.shared.label.na'];
				break;
		}
		return statusRes;
	},
	
	concatNamesTogether : function( members ) {
		var label = "";
		
		for(var x = 0; x < members.length; x++) {
			label += members[x];
			if(members.length > 1) {
				if(members.length > 2) {
					if(x === members.length - 2) {
						label += " and ";
					}
					else if(x !== members.length - 1) {
						label += ", ";
					}
				}
				else if(x === 0) {
					label += " and ";
				}
			}
		}
		return label;
	},
	
	viewEligibilityResults : function( e ) {
		viewEligibilityResults = e.target.id;
	},
	
	appNotStarted : function() 
	{
		
		this.addPlansTolist();
		
		//if(myAccountRoleType === 'individual'){
			$('#homePageBodyArea').empty();
			$('#homePageBodyArea').append(this.appNotStartedTemplate());
			$('#appNotStartedNav').append(this.homePageSideNavTemplate());
			
			$('#applyForExemptionNotApplied').hide();
			$('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.notStarted']);
			
			this.model.trigger('hideSideNavItems');
		/*}
		else if(myAccountRoleType === 'employee'){
			$('#homePageBodyArea').empty();
			$('#homePageBodyArea').append(this.appNotStartedTemplate());
			
			var planList = this.accountPlansCollection;
			
			if(planList.models.length === 0){
				$('#planList').hide();
				$('#myApplicationGetStartedDisplay').removeClass('span4');
				$('#myApplicationGetStartedDisplay').addClass('span8');
			}
			else{
				$('#planList').show();
				$('#myApplicationGetStartedDisplay').removeClass('span8');
				$('#myApplicationGetStartedDisplay').addClass('span4');
				this.addPlansTolist();
			}
			$('#applyForExemptionNotApplied').hide();
			$('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.notStarted']);
		}*/
	},
	
	appInProgress : function() {
		//if(myAccountRoleType === 'individual'){
			var strDescription = (!isEmpty(this.resources['ffe.ee.myAccount.home.applicationIncompleteMessage']) ? this.resources['ffe.ee.myAccount.home.applicationIncompleteMessage'] : '');
			var strDeadline = (!isEmpty(this.resources['ffe.ee.myAccount.shared.deadline']) ? this.resources['ffe.ee.myAccount.shared.deadline'] : '');
			strDescription = strDescription.replace('[deadline]', strDeadline);

			$('#homePageBodyArea').html(this.appInProgressTemplate({ 'description' : strDescription }));
			$('#inProgressNav').html(this.homePageSideNavTemplate());

			$('#applyForExemptionInProgress').show();
			$('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.inProgress']);
			this.addPlansTolist();
			document.title = resources['ffe.ee.myAccount.appsCoverage.appStatus.pageTitle'];
		/*}
		else if(myAccountRoleType === 'employee') {
			var strDescription = 'Waiting on Employee RBK';

			$('#homePageBodyArea').empty();
			$('#homePageBodyArea').append(this.appInProgressTemplate());
			
			var planList = this.accountPlansCollection;
			
			if(planList.models.length === 0) {
				$('#planList').hide();
				$('#myApplicationResumeDisplay').removeClass('span4');
				$('#myApplicationResumeDisplay').addClass('span8');
			}
			else {
				$('#planList').show();
				$('#myApplicationResumeDisplay').removeClass('span8');
				$('#myApplicationResumeDisplay').addClass('span4');
				this.addPlansTolist();
			}
			$('#applyForExemptionInProgress').hide();
			$('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.inProgress']);		}*/
	},
	
	eligibilityResultsPending : function() {
		$('#homePageBodyArea').html(this.eligibilityResultsPendingTemplate({
			"email" : this.model.get('emailAddressName')
		}));
		$('#resultsPendingNav').html(this.homePageSideNavTemplate());
		$('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.eligibilityPending']);
		this.addPlansTolist();
		document.title = resources['ffe.ee.myAccount.appsCoverage.appStatus.pageTitle'];
	},
	
	enrollmentInProgress : function() {
		$('#homePageBodyArea').empty();
		$('#enrollmentNav').empty();
		var strDescription = (!isEmpty(this.resources['ffe.ee.myAccount.home.enrollmentIncompleteMessage']) ? this.resources['ffe.ee.myAccount.home.enrollmentIncompleteMessage'] : '');
		var strDeadline = (!isEmpty(this.resources['ffe.ee.myAccount.shared.deadline']) ? this.resources['ffe.ee.myAccount.shared.deadline'] : '');
		strDescription = strDescription.replace('[deadline]', strDeadline);
		$('#homePageBodyArea').append(this.enrollmentInProgressTemplate({ 'description': strDescription }));
		$('#enrollmentNav').append(this.homePageSideNavTemplate());
		$('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.enrollmentInProgress']);
		this.addPlansTolist();
		document.title = resources['ffe.ee.myAccount.appsCoverage.appStatus.pageTitle'];
	},
	
	viewEligibility : function() {
		$('#homePageBodyArea').html(this.viewEligibilityTemplate());
		$('#viewEligibiltiyNav').html(this.homePageSideNavTemplate());
		$('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.viewEligibility']);
		this.addPlansTolist();
		document.title = resources['ffe.ee.myAccount.appsCoverage.appStatus.pageTitle'];
	},
	
	postAppCompletion : function() {
		//if(myAccountRoleType === 'individual'){
			$('#homePageBodyArea').empty();
			$('#homePageBodyArea').append(this.postAppCompletionTemplate());
			//$('#postAppNav').append(this.homePageSideNavTemplate());
			$('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.post']);
			
		/*}
		else if(myAccountRoleType === 'employer'){
			$('#homePageBodyArea').empty();
			$('#homePageBodyArea').append(this.employerPostAppCompletionTemplate());
			$('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.post']);
		}
		document.title = resources['ffe.ee.myAccount.myCoverage.pageTitle'];
		/*
		else{
			$('#homePageBodyArea').empty();
			$('#homePageBodyArea').append(this.employeePostAppCompletionTemplate());
			$('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.post']);
		}*/
		
	},
	
	goToEnrollmentPage : function(){
		var applicationID = myAccountAppID;
		var state = this.getCurrentStateForUrls();
		window.location.href = "/" + eePath + "/auth/" + state + "/" + locale + "/toDoList?a=" + applicationID;
	
	},
	
	goToEligibiltyResultsPage : function(){
		var applicationID = myAccountAppID;
		var state = this.getCurrentStateForUrls();
		window.location.href = "/" + eePath + "/auth/" + state + "/" + locale + "/individualApplication?appId=" + applicationID;
	
	},
	
	goToCompleteApplication : function(){
		var applicationID = myAccountAppID;
		var state = this.getCurrentStateForUrls();
		window.location.href = "/" + eePath + "/auth/" + state + "/" + locale + "/individualApplication?appId=" + applicationID;
	
	},
	backToMyAccountLanding : function(){
		var applicationID = myAccountAppID;
		var state = this.getCurrentStateForUrls();
		window.location.href = "/" + eePath + "/auth/" + state + "/" + locale + "/myAccount?appId=" + applicationID;
		
	},
	
	employerChoiceStage : function() {
		
		$('#homePageBodyArea').empty();
		$('#homePageBodyArea').append(this.employerChoiceStageTemplate());

		//progress bar for employer
		var progress3_feedback = '';
        

        var myProgressOptions = {
            containerID:    "progress3",										//div id
            inlineKey:      "false",											//if false key will be stacked  
			textOption:     2,													//if 1 displays text format 1, else it displays other text option         
            participation:  ["participation", 70],								//participation text and threshold number 
            Enrolled:       ["Enrolled", 31, "icon-circle_ok" ],				//enrolled display text & number enrolled
            Undecided:      ["Undecided", 11, "icon-circle_question_mark" ],	//undecided display text & number undecided
            Waived:         ["Waived coverage", 8, "icon-circle_remove"],		//waived display text & number waived
            feedback:       progress3_feedback 
        };	
        
		//call script from initiateWidget.js
        generateMulitBar(myProgressOptions);
        $('#homePageHeading').text(this.resources['ffe.ee.myAccount.home.status.employerChoice']);
		this.addPlansTolist();
	
	},
	
	cancel : function() {
		window.location.href = "/"+eePath+"";
	},
	getCurrentApplicationID : function()
	{
			var fromUrl = getQueryParams(); 
			formUrl = fromUrl.appId;
			//saves apllicatin id from url to global variable for use across pages
			if(!isEmpty(formUrl)){
				myAccountAppID = formUrl;
			}		
		
		
	},
	
	getCurrentStateForUrls : function() {
		var currentApplications = this.getSystemUserModel.get('systemUser').exchangeUserInsuranceApp;
		var currentApplicationID = myAccountAppID;
		var currentState =tenantId;
		if(!isEmpty(currentApplications))
		{
			if(!isEmpty(currentApplicationID)){
				for(var x=0; x < currentApplications.length; x++)
				{
					applicationIdsForUser = currentApplications[x].insuranceAppId;
					if(currentApplicationID === applicationIdsForUser){
						currentState =  currentApplications[x].state;
					}
				}
				return currentState;
			}
		}
	}
});
var myAccountAccountHomepageBBView = new myAccount_AccountHomepageBBView();
var AgentBrokerBBView=FFEView.extend({el:$("#agentBrokerSubNav"),model:(typeof(individualApplicationApplicationBBModel)!="undefined"&&!isEmpty(individualApplicationApplicationBBModel)?individualApplicationApplicationBBModel:null),isDirectEnrollmentConsumerModel:isDirectEnrollmentConsumerBBModel,getSecureRedirectInfoModel:getSecureRedirectInfoBBModel,sendSecureRedirectModel:sendSecureRedirectBBModel,createPersonMappingModel:createPersonMappingBBModel,theUrl:"",qhpEligible:null,resources:resources,initialize:function(){_.bindAll(this,"render","refreshTemplate","fetchIsDirectEnrollmentConsumer","sendSecureRedirect","getSecureRedirectInfo","createPersonMappingForDirectEnrollment");
this.render()
},events:{"click #backToPortalLink":"createPersonMappingForDirectEnrollment"},render:function(){this.refreshTemplate()
},refreshTemplate:function(){},fetchIsDirectEnrollmentConsumer:function(){var a=this;
this.isDirectEnrollmentConsumerModel.fetch({success:function(c,b){a.isDirectEnrollment=true;
if(b===true){console.log("direct enrollment");
$("#agentBrokerSubNav").show();
$("#agentBrokerStateBar").show()
}else{console.log("not direct enrollment");
$("#agentBrokerSubNav").hide();
$("#agentBrokerStateBar").hide()
}},error:function(c,b){a.isDirectEnrollment=false;
console.log("Is direct enrollment consumer service has failed! Setting isDirectEnrollment variable to false.");
$("#agentBrokerSubNav").hide();
$("#agentBrokerStateBar").hide()
}})
},createPersonMappingForDirectEnrollment:function(){var c=this;
var b=(!isEmpty(this.model)?this.model.get("identifier"):(!isEmpty(window.myAccountAppID)?window.myAccountAppID:""));
var a=new CreatePersonMappingBBModel();
if(!isEmpty(this.model)||!isEmpty(window.myAccountAppID)){a.url=a.urlRoot+"?applicationId="+b
}a.save(null,{success:function(e,d){c.sendSecureRedirect()
},error:function(e,d){console.log(d)
}})
},sendSecureRedirect:function(){var a=this;
this.sendSecureRedirectModel.fetch({dataType:"text",success:function(c,b){if(!isEmpty(b)){a.getSecureRedirectInfo(b)
}},error:function(c,b){console.log(b)
}})
},getSecureRedirectInfo:function(a){var b=this;
this.getSecureRedirectInfoModel.fetch({success:function(e,d){var c=b.theUrl=d["Return URL"];
var f="<form name='redirectToPartnerForm' id='redirectToPartnerForm'  method='post'>";
f+="<input type='hidden' name='SAMLResponse' value='"+a+"'/>";
f+="</form>";
$("body").append(f);
document.forms.redirectToPartnerForm.action=c;
document.forms.redirectToPartnerForm.submit()
},error:function(d,c){console.log(c)
}})
}});
var agentBrokerBBView=new AgentBrokerBBView();//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var myAccount_SecuritySettingsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#accountSecurityPage"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,
	fetchSecurityQuestionsModel : myAccountEIDMIntegrationFetchSecurityQuestionsEIDMAccountBBModel,
	updateSecurityQuestionsModel : myAccountEIDMIntegrationUpdateSecurityQuestionsEIDMAccountBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	template : _.template($('#securityQuestionsTemplate').html()),
	questionTemplate : _.template($('#securityQuestionTemplate').html()),
	securityQuestionsDropDownTemplate :_.template($('#securityQuestionsDropDownTemplate').html()), 
	
	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,
	MAX_SECURITY_QUESTIONS : 3, //maximum of 3 for now
	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate','editSecurityQuestions','cancelEdit','confirmEdit',
			'restoreReadOnlyView', 'getSecurityQuestions', 'updateSecurityQuestions', 'setUpdateSecurityQuestionsModel');
		this.model.bind('refreshSecurity', this.refreshTemplate);
		 
		this.render();
	},
 
	events : {
		"click #editSecurityQuestions" : "editSecurityQuestions",
		"click #cancelSecurityQuestions" : "cancelEdit",
		"click #saveSecurityQuestions" : "confirmEdit"
	},
	
	render : function() {
		if(ffeCCRUser !=='true')
		{
			this.getSecurityQuestions();
		}
		this.refreshTemplate();	 
		return this;
	},
	
	refreshTemplate : function() {
		$("#accountSecurityPage").empty();
		$("#accountSecurityPage").append(this.template());
		
		$('#securityQuestionsDynamic').empty();
		
		//Dynamically write all 4 questions 
		for(var index=1; index <= this.MAX_SECURITY_QUESTIONS; index++)
		{
			//RBs are 1 indexed, not 0 indexed
			var qString = 'ffe.ee.myAccount.security.question'+index+'.enter';
			var qString2 = 'ffe.ee.myAccount.security.question'+index+'.select';
			
			var questionEnter = this.resources[qString];
			var questionSelect = this.resources[qString2];
			
			//NOTE: to update this to be more dynamic
			$('#securityQuestionsDynamic').append(this.questionTemplate(
			{
				index: index,
				questionEnter : questionEnter,
				questionSelect : questionSelect
				
			}));
			//write the questions pool
			$('#securityQuestionDropDownSection'+index).append(this.securityQuestionsDropDownTemplate(
			{
				questionSelect : questionSelect,
				index: index
			}));
			
			//TODO: make sure the right one is selected
		}
		//set up validation containers
		this.initializeValidation();
		
	},
	
	getSecurityQuestions : function() {
		var $this = this,
			userName = ffeUserName;
		if(false) {// spare EIDM right now
		this.fetchSecurityQuestionsModel.set({'securityQuestions': []});
		this.fetchSecurityQuestionsModel.fetch({
			success : function(model, response) {
				$this.refreshTemplate();
				console.log(response);
			},
			error : function(model, response) {
				console.log(response);
			}
		});
		} else {
		  var questions = getEIDMSecurityQuestions(locale);
			 this.fetchSecurityQuestionsModel.set('securityQuestions', questions);
			 $this.refreshTemplate();
		}
	},
	
	updateSecurityQuestions : function() {
		var $this = this,
			url = environment+"/ee-rest/auth/"+tenantId+"/" +locale +"/MyAccountEIDMIntegration/updateSecurityQuestions/"+ffeUserName,
			oldUrl = this.updateSecurityQuestionsModel.url;
		
		this.setUpdateSecurityQuestionsModel();
		
		this.updateSecurityQuestionsModel.url = url;
		this.updateSecurityQuestionsModel.save(null, {
			success : function(model, response) {
				$this.updateSecurityQuestionsModel.url = oldUrl;
				console.log(response);
			},
			error : function(model, response) {
				console.log(response);
			}
		});
	},
	
	setUpdateSecurityQuestionsModel : function() {
		this.updateSecurityQuestionsModel.set({'securityQuestions' : []});
		var questions = this.updateSecurityQuestionsModel.get('securityQuestions');
		
		for(var i = 0; i < 3; i++) {
			questions.push(newEIDMSecurityQuestion());
			
			questions[i].question = $('#securityQuestion'+(i+1)).val();
			questions[i].answer = $('#securityQuestionInput'+(i+1)).val();
			questions[i].index = i;
		}
		
		this.updateSecurityQuestionsModel.set({'userName' : ffeUserName});
		this.updateSecurityQuestionsModel.set({'password' : this.model.get('password')});
		this.updateSecurityQuestionsModel.set({'securityQuestions' : questions});
	},
	
	initializeValidation : function() {
		if(validationEnabled) {
			if($("#accountSecurityPage").find('.validatorFormGroup').length === 0){
				var myValidator = new FFM.FormValidator($("#validationSecurityQuestionsContainer"), $("#saveSecurityQuestions"));
				
				
			}
		}
	},
	
	confirmEdit : function()
	{
		//TODO: set questions once we know what's up
		this.updateSecurityQuestions();
		
		//save
		saveEEAccount(this.model);
		
		//update the R/O view/

		this.restoreReadOnlyView();
	},
	cancelEdit : function()
	{
		this.restoreReadOnlyView();
	},
	editSecurityQuestions: function()
	{
		$('#securityQuestionsEdit').show();
		$('#securityQuestionsReadOnlyList').hide();
		$('#editSecurityQuestions').hide();
		$('#securityQuestionsSection').removeClass('inactiveEditSection').addClass('activeEditSection');
		
		$('#securityParent').removeClass('span6');
		$('#securityParent').addClass('span9');
		hideValidationErrors();
	},
	restoreReadOnlyView : function()
	{
		//restore the R/O q's, hide the editable q's, show the edit button
		$('#securityQuestionsEdit').hide();
		$('#securityQuestionsReadOnlyList').show();
		$('#editSecurityQuestions').show();
		$('#securityQuestionsSection').removeClass('activeEditSection').addClass('inactiveEditSection');

		$('#securityParent').removeClass('span9');
		$('#securityParent').addClass('span6');
	}
});
var myAccountSecuritySettingsBBView = new myAccount_SecuritySettingsBBView();
var myAccount_AuthorizationSettingsBBView = FFEView.extend({

	el : $("#accountAuthorizationsPage"),
	model: myAccountRetrieveExchangeUserRequestBBModel,
    updateModel: myAccountupdateAuthorizationRepsBBModel,
    collection: '', // passed in constructor in router
	template : _.template($('#authorizationsTemplate').html()),

	namespace : "ffe.ee",
	pageName : "myAccount",
	resources : resources,
	
	removeDialogId: '#authorized-user-remove-dialog',
	removeDialog: null,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		_.bindAll(this, 'onRemoveUser', 'onConfirmRemove', 'onConfirmCancel');

        this.collection.bind('change reset', this.render, this);

        this.collection.fetch();
	},
	
	renderRemoveDialog: function()
	{
		this.removeDialog = $(this.removeDialogId).dialog({
			autoOpen: false,
			resizable: false,
			width: 780,
			height: 525,
			modal: true,
			// TODO RBK
			title: this.resources['ffe.ee.myAccount.agentBroker.removeModal.header']
		});
		
		this.removeDialog.find('button[action="confirm-remove"]').click(this.onConfirmRemove);
		this.removeDialog.find('button[action="confirm-cancel"]').click(this.onConfirmCancel);
	},

	render : function() {
		if (this.removeDialog != null){
		   this.removeDialog.dialog('destroy');
		}
		this.$el.html(this.template({authorizedUser : this.collection.toJSON()}));
		$('button[action="remove"]', this.el).click(this.onRemoveUser);
		
	   this.renderRemoveDialog();
	},
	
	onRemoveUser: function(ev)
	{
	var
		userId = ev.target.getAttribute('data-user-id'),
		user = this.collection.get(userId)
	;
		this.removeDialog.find('.authorized-user-name').html(
			user.get('firstName') + ' ' + user.get('lastName')
		);
		this.removeDialog.dialog('open');
		this.removingUser = user;
	},
	
	onConfirmRemove: function()
	{
	var
		// TODO maybe get user from somewhere else?
		user = this.removingUser,
		me = this;

        blockUIForProfile();
        // save model
        this.updateModel.save({"userId": user.id, "applicationId": myAccountAppID, "accessType" : ""}, {
            success : function(model, response) {
                me.removeDialog.dialog('close');
					 if(response ==='true' || response === true){
						  me.collection.fetch();
					 }
                $.unblockUI();
            },
            error : function(model, response) {
                $.unblockUI();
                console.log(response);
            }
        });
	},
	
	onConfirmCancel: function()
	{
		this.removeDialog.dialog('close');
	}
	
	
	
});
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_PlansAndProgramsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#planAndProgramPage"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,
	accountEnrolledPlansCollection : myAccountEnrolledPlansBBCollection,
	accountEnrolledProgramsCollection : myAccountEnrolledProgramsBBCollection,
	retrievePlanCompareEnrollmentRequestModel:myAccountRetrievePlanCompareEnrollmentRequestBBModel,
	retrievePlanCompareEnrollmentResponseModel:myAccountRetrievePlanCompareEnrollmentResponseBBModel,
	getSystemUserModel : myAccountGetSystemUserBBModel,
	
	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	myPlanAndProgramsTemplate : _.template($('#planAndProgramsTemplate').html()),
	activePlansTemplate : _.template($('#activePlansTemplate').html()),
	terminatePlansTemplate : _.template($('#terminatePlansTemplate').html()),
	problemPlansTemplate : _.template($('#problemPlansTemplate').html()),
	childPlansTemplate : _.template($('#childPlansTemplate').html()),
	plansAndProgramsMembersTemplate : _.template($('#plansAndProgramsMembersTemplate').html()),
	plansAndProgramsMedicaidChipTemplate : _.template($('#plansAndProgramsMedicaidChipTemplate').html()),
	terminateCoverageTemplate : _.template($('#terminateCoverageTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'cancel', 'save','goToWebsiteForMedicaidChip',
				'appendActivePlans','appendProblemPlans','addPlanMembersMedicaid','goToViewPlans',
				'appendChildPlans','getStatusText','changePlansLink','getCurrentStateForUrls','appendTerminatePlans');
		
		this.model.bind('myPlansAndPrograms', this.refreshTemplate);
		
		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #cancel" : "cancel",
		"click #save" : "save",
		"click #terminateButton" : "terminate",
		"click .removeMember" : "removeMember",
		"click .medicaidCHIPwebiteButton" : "goToWebsiteForMedicaidChip",
		"click #goToPlanCompareFlow" : "goToViewPlans",
		"click .changePlans" : "changePlansLink"
	},
	
	render : function() {
		this.refreshTemplate();	
	},
		
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
	
		$("#planAndProgramPage").empty();
		var enrolledPlans = this.accountEnrolledPlansCollection;
		var enrolledPrograms = this.accountEnrolledProgramsCollection;
		
		var strEnrolledNumberOfPlansText = this.resources['ffe.ee.myAccount.coverage.myPlans.enrolled'];
		strEnrolledNumberOfPlansText = strEnrolledNumberOfPlansText.replace('[NUMBERPLANS]', ''+enrolledPlans.models.length);
		
		var plansLength = enrolledPlans.models.length;
		var programsLength = enrolledPrograms.models.length;
		var numberOfPlansPrograms = parseInt(plansLength, 10) + parseInt(programsLength, 10);
		var plansDesc= this.resources['ffe.ee.myAccount.coverage.noPlans.description'];
		
		if(numberOfPlansPrograms > 0)
		{
			plansDesc= this.resources['ffe.ee.myAccount.coverage.myPlans.description'];
		}
		$("#planAndProgramPage").append(this.myPlanAndProgramsTemplate({
			'numberOfPlans' : numberOfPlansPrograms,	
			'plansDesc' : plansDesc
		}));
		
		if(enrolledPlans.models.length > 0 ){
			$("#terminateCovergeDiv").empty();
			$("#terminateCovergeDiv").append(this.terminateCoverageTemplate({
				'enrolledNumberOfPlansText': strEnrolledNumberOfPlansText
			}));
			
		}
		
		var i=0;
		for( i = 0; i < enrolledPlans.models.length; i++) {
			switch(enrolledPlans.models[i].attributes.planStatus) {
				//plans with active status
				case '2':
					this.appendActivePlans(enrolledPlans.models[i].attributes, i);
					break;
				case '3':
					this.appendTerminatePlans(enrolledPlans.models[i].attributes, i);
					break;
				case '4':
					this.appendTerminatePlans(enrolledPlans.models[i].attributes, i);
					break;
				case '1':
					this.appendActivePlans(enrolledPlans.models[i].attributes, i);
					break;
				// plans that have a problem
				case '0':
					this.appendProblemPlans(enrolledPlans.models[i].attributes, i);
					break;
				
			}
		}
		for( i = 0; i < enrolledPrograms.models.length; i++) {
			switch(enrolledPrograms.models[i].attributes.programName) {
				case 'Medicaid':
					this.appendChildPlans(enrolledPrograms.models[i].attributes, i);
					break;
				case 'CHIP':
					this.appendChildPlans(enrolledPrograms.models[i].attributes, i);
					break;
			}
		}
	},
	
	appendActivePlans : function( plan, index ) {
		var url,
			phoneNumber,
			monthlyAmount,
			status,
			monthlyDiscount;
			
		url = ((!isEmpty(plan.issuerEmail)) ? (plan.issuerEmail.replace('http://', '')) : (plan.issuerEmail)); //testing different format
		phoneNumber = phoneNumberWithCommas(plan.issuerPhone);
		status = plan.planStatus;
		status = this.getStatusText(status);
		
		var youPay = resources['ffe.ee.shared.label.na'];
		if(!isEmpty(plan.monthlyPremiumAmount))
		{
			youPay = plan.monthlyPaymentAmount;
		}
		 
		monthlyAmount = curencyNumberWithCommas(plan.monthlyPremiumAmount);
		if(isEmpty(monthlyAmount))
		{
			monthlyAmount= resources['ffe.ee.shared.label.na'];
		}
		monthlyDiscount = curencyNumberWithCommas(plan.monthlyPremiumDiscountAmount);
		if(isEmpty(monthlyDiscount))
		{
			monthlyDiscount= resources['ffe.ee.shared.label.na'];
		}
		
		$('#coverageEnrolledPlans').append(this.activePlansTemplate({
			'issuerName' : plan.issuerName,
			'planName' : plan.planName,
			'issuerStreetName1' : plan.issuerStreetName1,
			'issuerCityName' : plan.issuerCityName,
			'issuerStateCode' : plan.issuerStateCode,
			'issuerZipPlus4Code' : plan.issuerZipPlus4Code,
			'issuerPhone' : phoneNumber,
			'issuerEmail' : url,
			'status' : status,
			'monthlyPremiumAmount' : monthlyAmount,
			'monthlyPremiumDiscountAmount' : monthlyDiscount,
			'index' : index,
			'youPayAmount' : youPay
			
		}));
		this.addPlanMembers(plan.enrolledMemberList, index);
	},
	
	appendProblemPlans : function( plan, index ) {
		var url,
			phoneNumber,
			status,
			monthlyAmount;
			
		(!isEmpty(plan.issuerEmail)) ? (url = plan.issuerEmail.replace('http://', '')) : (url = plan.issuerEmail);
		phoneNumber = phoneNumberWithCommas(plan.issuerPhone);
		status = plan.planStatus;
		status = this.getStatusText(status);
		monthlyAmount = curencyNumberWithCommas(plan.monthlyPremiumAmount);
		if(isEmpty(monthlyAmount))
		{
			monthlyAmount= resources['ffe.ee.shared.label.na'];
		}
		$('#coverageEnrolledPlans').append(this.problemPlansTemplate({
			'issuerName' : plan.issuerName,
			'planName' : plan.planName,
			'issuerStreetName1' : plan.issuerStreetName1,
			'issuerCityName' : plan.issuerCityName,
			'issuerStateCode' : plan.issuerStateCode,
			'issuerZipPlus4Code' : plan.issuerZipPlus4Code,
			'issuerPhone' : phoneNumber,
			'issuerEmail' : url,
			'status' : status,
			'monthlyPremiumAmount' : monthlyAmount,
			
			'index' : index
		}));
		this.addPlanMembers(plan.enrolledMemberList, index);
	},
	
	appendTerminatePlans : function( plan, index ) {
		var url,
			phoneNumber,
			status,
			monthlyAmount;
			
		(!isEmpty(plan.issuerEmail)) ? (url = plan.issuerEmail.replace('http://', '')) : (url = plan.issuerEmail);
		phoneNumber = phoneNumberWithCommas(plan.issuerPhone);
		status = plan.planStatus;
		status = this.getStatusText(status);
		monthlyAmount = curencyNumberWithCommas(plan.monthlyPremiumAmount);
		if(isEmpty(monthlyAmount))
		{
			monthlyAmount= resources['ffe.ee.shared.label.na'];
		}
		$('#terminatePlansDiv').append(this.terminatePlansTemplate({
			'issuerName' : plan.issuerName,
			'planName' : plan.planName,
			'issuerStreetName1' : plan.issuerStreetName1,
			'issuerCityName' : plan.issuerCityName,
			'issuerStateCode' : plan.issuerStateCode,
			'issuerZipPlus4Code' : plan.issuerZipPlus4Code,
			'issuerPhone' : phoneNumber,
			'issuerEmail' : url,
			'status' : status,
			'monthlyPremiumAmount' : monthlyAmount,
			
			'index' : index
		}));
		//this.addPlanMembers(plan.enrolledMemberList, index);
	},
	
	appendChildPlans : function(program, index) {
		var programs = this.accountEnrolledProgramsCollection;
		var plan =this.accountEnrolledPlansCollection;
		var programStatus = programs.models[index].attributes.status;
		var status = this.getStatusText(programStatus);
		var strStatusMessage = (!isEmpty(this.resources['ffe.ee.myAccount.coverage.heading.statusMessage']) ? this.resources['ffe.ee.myAccount.coverage.heading.statusMessage'] : '');
		strStatusMessage = strStatusMessage.replace(/\[STATUS\]/g, status);
		strStatusMessage = strStatusMessage.replace(/\[PROGRAM_TITLE\]/g, programs.models[index].attributes.programTitle);
		strStatusMessage = strStatusMessage.replace(/\[PROGRAM_NAME\]/g, programs.models[index].attributes.programName);
		$('#coverageEnrolledPlans').append(this.childPlansTemplate({
			'programTitle' : programs.models[index].attributes.programTitle,
			'programName' : programs.models[index].attributes.programName,
			'status': status,
			'statusMessageText' : strStatusMessage,
			//'issuerCityName' : plan.issuerCityName,
			'index' : index
		}));
		this.addPlanMembersMedicaid(programs.models[index].attributes.memberList, index);
		
	},
	
	addPlanMembersMedicaid : function( members, index) {
		var id = '#enrolledPrograms'+index,
			memberList,
			name;
		
		for(var i =0; i < members.length; i++) {
			name = members[i].firstName+' '+members[i].lastName;
			var coverageStatus = members[i].coverageStatus;
			var status = this.getStatusText(coverageStatus);
			memberList += this.plansAndProgramsMedicaidChipTemplate({
				'id' :  index+'_'+i,
				'name' : name,
				'status' : status
				
			});
		}
		$(id).append(memberList);
	},
	
	goToWebsiteForMedicaidChip  : function(e){
		var id = e.target.id,
			target = parseInt(e.target.id.slice(24), 10);
		var programs = this.accountEnrolledProgramsCollection;
		for(var i = 0; i < programs.models.length; i++) {
			if(i === target){
				var website = programs.models[i].attributes.website;
				if(website.indexOf("http") === -1) 
				{
					website = "http://" + website;
				}
				window.open(website,"_blank");
			}
		}
	},
	
	goToViewPlans : function (){
		var $this = this;
		var applicationID = myAccountAppID;
		var postData = {
			    applicationIdentifier : [applicationID],
			    enrollmentGroupIdentifier : [] // NOTE: This is not required. Can leave blank
			};

			$.ajax(environment + '/ee-rest/auth/' + tenantId + '/' + locale + '/PlanCompare/retrievePlanCompareGroupEnrollment', {
			    type : "POST",
			    contentType : "application/json",
			    dataType : "json",
			    data : JSON.stringify(postData),
			    success : function (response) {
			    	if(!isEmpty(response) && !isEmpty(response[0])&& !isEmpty(response[0].collectedEnrollmentGroup)){
			    		$this.setURLs(response);
			    	}
			    },
			    error : function () {
			        // Error handling goes here
			    }
			});
	},
	
	setURLs : function(response){
		var enrollmentGroup = "";
		var queriedGroup = "";
		var planID = ""; 
		var groupType = "";
		var groupId = "";
		
		for(var x=0; x< response.length; x++){
			enrollmentGroup = response[x].collectedEnrollmentGroup;
			queriedGroup = enrollmentGroup[x].queriedEnrollmentGroupPlan;
			for(var m=0; m< queriedGroup.length ; m++){
				if(queriedGroup[m].definingEnrollmentGroupPlanType === "2"){
					planID = queriedGroup[m].queriedInsurancePlan;
				}
				
			}
			groupType = enrollmentGroup[x].definedInsuranceProductDivisionType;
			groupId = enrollmentGroup[x].enrollmentGroupIdentifier;
			
		}
		
		if(groupType === "1")
		{
			navigateToPlanCompare(tenantId, locale, myAccountAppID, groupId, planID);
		}
		else if(groupType ==="2")
		{
			navigateToPlanCompareDental(tenantId, locale, myAccountAppID, groupId, planID);
		}
	},
	
	changePlansLink : function()
	{
		navigateToTODOList(tenantId, locale, myAccountAppID);
	},
	
	getStatusText : function(status)
	{
		var text= "";
		switch(status){
			case '2':
			case 'Effectuated':  
				text= resources['ffe.ee.myAccount.coverage.heading.active'];
				break;
			case '1':
			case 'Initial Enrollment':
				text= resources['ffe.ee.myAccount.application.status.pending'];
				break;
			case 'Pending':
				text= resources['ffe.ee.myAccount.application.status.pending'];
				break;
			case 'Transferred':
				text= resources['ffe.ee.myAccount.application.status.transferred'];
				break;
			case 'Enrolled':
				text= resources['ffe.ee.myAccount.application.status.enrolled'];
				break;
			case 'Not Eligible':
				text= resources['ffe.ee.myAccount.application.status.notEligible'];
				break;
			case '3':
			case 'Cancelled':
				text= resources['ffe.ee.myAccount.application.status.cancelled'];
				break;
			case '4':
			case 'Terminated':
				text= resources['ffe.ee.myAccount.application.status.terminated'];
				break;
			case '0':
			case 'Problem':
				text= resources['ffe.ee.myAccount.coverage.heading.problem'];
				break;
		
		}
		return text;
		
	},
	
	addPlanMembers : function( members, index) {
		var id = '#enrolledPlans'+index,
			memberList,
			name,
			startDate,
			endDate;
		for(var i =0; i < members.length; i++) {
			name = members[i].firstName+' '+members[i].lastName;
			(!isEmpty(members[i].coverageStartDate)) ? (startDate = FFEDateToUiDate(members[i].coverageStartDate)) : (startDate = members[i].coverageStartDate);
			(!isEmpty(members[i].coverageEndDate)) ? (endDate = FFEDateToUiDate(members[i].coverageEndDate)) : (endDate = members[i].coverageEndDate);
			
			memberList += this.plansAndProgramsMembersTemplate({
				'id' :  index+'_'+i,
				'name' : name,
				'startDate' : startDate,
				'endDate' : endDate
			});
		}
		$(id).append(memberList);
	},
	
	removeMember : function() {
		
		this.model.trigger("initializeRemovePersonModal");
	},
	
	concatNamesTogether : function( members ) {
		var label = "";
		
		for(var x = 0; x < members.length; x++) {
			label += this.createName(members[x]);
			if(members.length > 1) {
				if(members.length > 2) {
					if(x === members.length - 2) {
					    label += ' ' + this.resource['ffe.ee.shared.article.and'] + ' ';
					}
					else if(x !== members.length - 1) {
						label += ", ";
					}
				}
				else if(x === 0) {
				    label += ' ' + this.resource['ffe.ee.shared.article.and'] + ' ';
				}
			}
		}
		return label;
	},
	
	createName : function( memberList ) {
		var name = memberList.firstName + " " + memberList.lastName;
		
		if(!isEmpty(memberList.suffixName)) {
			name += " " + memberList.suffixName;
		}
		return name;
	},
	
	createNameObj : function( firstName, middleName, lastName , amount, type ) 
	{
		var object = {
			'firstName' : firstName,
			'lastName' : lastName,
			'suffixName' : middleName,
			'eligibilityResultAmount' : amount,
			'memberEligibilityType' : type
		};
		return object;
	},
	
	terminate : function() {
		//trigger the renderTerminateCoverage method from modal bbview
		this.model.trigger("renderTerminateCoverage");
	},
	
	//terminateEmployerShopEnrollment : function() {
	//	this.model.trigger("initTerminateEmployerShopEnrollment");
	//},
	
	getCurrentStateForUrls : function(){
	var currentApplications = this.getSystemUserModel.get('systemUser').exchangeUserInsuranceApp;
		var currentApplicationID = myAccountAppID;
		var currentState ="";
		if(!isEmpty(currentApplications))
		{
			if(!isEmpty(currentApplicationID)){
				for(var x=0; x < currentApplications.length; x++)
				{
					applicationIdsForUser = currentApplications[x].insuranceAppId;
					if(currentApplicationID === applicationIdsForUser){
						currentState =  currentApplications[x].state;
					}
				}
				return currentState;
			}
		}	

	
	},
	
	cancel : function() {
		window.location.href = "/ee-ui";
	},

	save : function() {
		if (this.model.isValid()) {
			this.model.save(null, {
				success : function(model, response) {
					console.log("successful save");
				},
				error : function(model, response) {
					console.log("error in save");
				}
			});
		}
	}
	
});
var myAccountPlansAndProgramsBBView = new MyAccount_PlansAndProgramsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_RemovePersonModalBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#removePersonModal"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	removePersonModalUSTemplate : _.template($('#removePersonModalUSTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'closeDialog', 'save','initializeRemovePersonModal',
				'removeMember');
		
		this.model.bind('initializeRemovePersonModal', this.initializeRemovePersonModal);

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		'click .cancel' : 'closeDialog',
		'click .removeMember' : 'removeMember'
	},
	
	render : function() {
		this.refreshTemplate();	
		//Backbone.ModelBinding.bind(this);
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
	},
	initializeRemovePersonModal : function() {
		//append all necessary templates
		this.$el.empty();
		this.$el.append(this.removePersonModalUSTemplate());
		this.$el.dialog({
			autoOpen: false,
			resizable: false,
			width: 780,
			height: 525,
			modal: true,
			descriptionId: this.resources['ffe.ee.myAccount.dynamicallyLoadedPage'],
			title: this.resources['ffe.ee.myAccount.removePerson.modal.title']
        });
		this.$el.dialog('open');
		this.$el.parent().find('h1').eq(0).attr('tabindex', '-1').focus();
		this.close();
	},
	
	removeMember : function() {
		this.$el.dialog('close');
		this.$el.dialog('destroy');
		this.model.trigger("reportLifeChanges");
		router.navigate("reportLifeChanges", {trigger: true});
		$('#reportLifeChanges').find('h1').attr('tabindex', '-1').focus();
		
	},
	
	closeDialog : function() {
		$('h1[tabindex=-1]').removeAttr('tabindex');
		this.$el.empty();
		this.$el.dialog('close');
		this.$el.dialog('destroy');
	},
	
	close : function( e ) {
		var $this = this,
			input = this.$el.find('input');
		
		this.$el.parent().find('.icon-circle_remove').on('click', function() {
			$('h1[tabindex=-1]').removeAttr('tabindex');
			$this.$el.dialog('destroy');
		});
	},

	save : function() {
		if (this.model.isValid()) {
			this.model.save(null, {
				success : function(model, response) {
					console.log("successful save");
				},
				error : function(model, response) {
					console.log("error in save");
				}
			});
		}
	}
	
});
var myAccountRemovePersonModalBBView = new MyAccount_RemovePersonModalBBView();

var MyAccount_EligibilityBBView = FFEView.extend({

	el : $("#eligibilityPage"),
	template : _.template($('#eligibilityTemplate').html()),
	resultsDetailsEligibilityResultsTemplate : _.template($('#resultsDetailsEligibilityResultsTemplate').html()),
	checkboxTemplate : _.template($('#applicationMemberCheckboxesTemplate').html()),

	//model: myAccountRetrieveExchangeUserRequestBBModel,
	modelIndApp: myAccount_IndAppBBModel,

	namespace : "ffe.ee",
	pageName : "myAccount",
	resources : resources,
	
	medicaidStateAgency : "",
	stateAcceptsMedicaid : null,

	initialize : function() {
		//FFEView.prototype.initialize.call(this);
		//this.model.set('applicationId', myAccountAppID);
		_.bindAll(this, 'onEligibilityView','proceedToEnrollButton','populateMedicaidDeterminationSelection','toggleMedicaidDeterminationCheckbox','sendToMedicaid',
		'createPersonMappingForDirectEnrollment','redirectToPlanCompare');
		
		 this.render();
		this.modelIndApp.set('identifier', myAccountAppID);
		this.modelIndApp.bind('change', this.renderIndApp, this);
		//this.model.fetch();
	},
	events :  
	{
		"click #viewEligibility" : "onEligibilityView",
		"click #proceedToEnrollButton" : "proceedToEnrollButton",
		"click .medicaidDeterminationCheckbox" : "toggleMedicaidDeterminationCheckbox",
		"click #sendToMedicaidButton" : "sendToMedicaid",
		"click #goToIssuerFlow" :  "createPersonMappingForDirectEnrollment",
		"click #goToPlanCompareFlow" :  "redirectToPlanCompare"
	},
	render: function() 
	{
		// Render page if app not complete, if it is load data from indapp
		if (this.modelIndApp.get('applicationStatus') === '001')
		{
			this.renderIncomplete();
		}
		else
		{
			if(!isEmpty(myAccountAppID))
			{
				this.modelIndApp.fetch();
				this.renderIndApp();
			}
		}
	},
	
	renderIncomplete: function()
	{
		this.$el.html(this.template({ submittedText: '', status: '001' }));
		$('#myAccountResumeApp').click(this.goToIndApp);
	},
	
	renderIndApp: function()
	{
	   /*var strSubmittedText = (!isEmpty(this.resources['ffe.ee.myAccount.eligibility.description']) ? this.resources['ffe.ee.myAccount.eligibility.description'] : '');
	   var strAppealDescription = (!isEmpty(this.resources['ffe.ee.myAccount.eligibility.appeal.description']) ? this.resources['ffe.ee.myAccount.eligibility.appeal.description'] : '');
	   var strProgram = (!isEmpty(this.resources['ffe.ee.myAccount.eligibility.appeal.stateMedicaidProgram']) ? this.resources['ffe.ee.myAccount.eligibility.appeal.stateMedicaidProgram'] : '');
	   var strAgency = (!isEmpty(this.resources['ffe.ee.myAccount.eligibility.appeal.stateMedicaidAgency']) ? this.resources['ffe.ee.myAccount.eligibility.appeal.stateMedicaidAgency'] : '');

	   strSubmittedText = strSubmittedText.replace('[SUBMITTED_DATE]', this.model.get('submissionTimeDate'));
	   strAppealDescription = strAppealDescription.replace(/\[STATE_MEDICAID_PROGRAM_NAME\]/g, strProgram);
	   strAppealDescription = strAppealDescription.replace(/\[STATE_MEDICAID_AGENCY_NAME\]/g, strAgency);
		*/
	   //var data = {
	      //"submittedText" : strSubmittedText,
	      //"appealDescription": strAppealDescription,
	     // "status": '002' //this.model.get('applicationStatus')
	      //"medicaid": this.modelIndApp.getMedicaidIndividuals()
	   //};
	   
		var members = this.modelIndApp.get('applicationMember');
		this.medicaidStateAgency = getStateOptionForNameOfMedicaidProgram(tenantId);
		this.stateAcceptsMedicaid = getStateOptionForAcceptingMedicaidFromFFM(tenantId);
		var submissionDateTime = this.modelIndApp.get("submissionDatetime");
				
		this.$el.html(this.template({ submittedText: '', status: '002' }));
		$('#detailsEligibilityResultsDiv').append(this.resultsDetailsEligibilityResultsTemplate(
			{
				status: this.modelIndApp.get('applicationStatus'),
				appId: myAccountAppID ,
				submissionDateTime :submissionDateTime,
				medicaidStateAgency :getStateOptionForNameOfMedicaidProgram(tenantId)
			}));
		this.$el.find('.resultsBox , .inverted , .white , .guideSectionRule').removeClass('resultsBox , inverted , white , guideSectionRule');
		this.$el.find('hr').addClass('grayRule margin30');
		$('#eligibilityResultsPage').removeAttr('role');
		$('#eligibilityResultsPage').removeAttr('class' , '.cardContainer');
		$('input', this.el).customInput();
		
		//add logic to show planToEnroll button only when one of the members is qhp eligible
		if(!isEmpty(members)){
			for(var y = 0; y < members.length; y++ )
			{
				if(isMemberQHPEligible(members[y]))
				{
					$('#proceedToEnrollDiv').show();
					break;
				}
			}
		}
		// Show full determination section only if financial assistance is requested
		var finAssistanceIndicator = this.modelIndApp.get("requestingFinancialAssistanceIndicator");
		if(!isEmpty(finAssistanceIndicator)){
			if (finAssistanceIndicator === "Yes"){
				this.populateMedicaidDeterminationSelection();
			}
			else{
				$('#medicaidDeterminationBlock').hide(); // Just in case this block isn't hidden by default
			}
		}
		//this.$el.find('button[action="eligibility-view"]').click(this.onEligibilityView);
	},
	
	populateMedicaidDeterminationSelection : function() {
		
		/*
		Populate names that have 
		(applicantMedicaidEligibleStatusIndicator = N; AND 
		EmergencyMedicaidStatusIndicator = N AND 
		applicantRefugeeMedicalAssistanceStatusIndicator = N or X) OR 
		(applicantRefugeeMedicalAssistanceStatusIndicator = Y)
		*/
		var members = this.modelIndApp.get("applicationMember");
		var atLeastOne = false;
		
		for (var i = 0; i < members.length; i++)
		{
			if (members[i].requestingCoverageIndicator === true &&
				(!isMemberMedicaidEligible(members[i]) && 
				!isMemberEligibleForEmergencyMedicaid(members[i]) && 
				!isMemberEligibleForRefugeeMedicalAssistance(members[i])) || 
				isMemberEligibleForRefugeeMedicalAssistance(members[i]))
			{	
				atLeastOne = true;
				$('#medicaidDeterminationCheckboxBlock').append(this.checkboxTemplate(
					{
						"checkFor" : "medicaidDeterminationCheckbox" + i,
						"checkValue" : i,
						"checkId" : "medicaidDeterminationCheckbox" + i,
						"checkClass" : "medicaidDeterminationCheckbox",
						"checkName" : null, 
						"applicantName" : getAppMemberFullName(members[i])
					}					
				));
			}
		}
		
		if (atLeastOne)
		{
			$('#medicaidDeterminationBlock').show();
			
			if (this.stateAcceptsMedicaid)
			{
				$('#acceptMedicaidYesStatement').show();
				$('#acceptMedicaidNoStatement').hide();
			}
			else
			{
				$('#acceptMedicaidNoStatement').show();
				$('#acceptMedicaidYesStatement').hide();
			}
		}
		else
		{
			$('#medicaidDeterminationBlock').hide();
		}
	},
	
	toggleMedicaidDeterminationCheckbox : function(event) {
		var id = getIdFromEvent(event);
		
		if (isCheckboxChecked)
		{
			if (id === "medicaidDeterminationNone")
			{
				$('#medicaidDeterminationBlock :checkbox').prop('checked', false);
				removeCustomInputClassGroup('medicaidDeterminationBlock');
				$('#medicaidDeterminationNone').prop('checked', true);
				addCustomInputClass('medicaidDeterminationNone');
			}
			else
			{
				$('#medicaidDeterminationNone').prop('checked', false);
				removeCustomInputClass('medicaidDeterminationNone');
			}
		}	
	},
	
	sendToMedicaid : function() {
		var members = this.modelIndApp.get("applicationMember");
		var checkboxes = $('#medicaidDeterminationBlock :checkbox:checked');
		var index = 0;
		
		$('#medicaidDeterminationBlock :checkbox:checked').prop('disabled', true);
		
		for (var i = 0; i < checkboxes.length; i++)
		{
			index = $(checkboxes[i]).val();
			members[index].medicaidDeterminationIndicator = true;
		}
		
		this.modelIndApp.set({'applicationMember' : members});
		this.modelIndApp.set({'cardName' : 'ResultsDetails'});
		//saveIndividualApplication(this.model);
	},
	
	proceedToEnrollButton : function(){
		var applicationId = myAccountAppID;
		window.location.href = "/" + eePath + "/auth/" + tenantId + "/" + locale + "/toDoList?a=" + applicationId;		
	},
	
	onEligibilityView: function()
	{
		this.downloadAttachment();
	},

	downloadAttachment : function() {
	  var i, fi = null;
	  var phyDoc = this.modelIndApp.get("supportingPhysicalDocument");
	  
	  for( i = 0 ; i < phyDoc.length; i++ ) 
	  {
	   if ( phyDoc[i].physicalDocumentSubjectTypeCode === '1' )
	   {
	    fi = phyDoc[i].physicalDocumentRepositoryFileIdentifier;
	    break;
	   }
	  }
	  
	  if (fi)
	  {
		  $.download('/ee-rest/auth/'+ tenantId + '/' + locale + '/DocumentManagementEE/DocumentFromECM', 'fileIdentifier=' + fi , 'get');
	  }
	  else
	  {
		  console.log('empty file from Ind App');
	  }
	},
	
	//For Pod 6 integration, go to the Issuer site IF the cookies/session data are there
	goToPlanCompare : function() {
		
		//does logic to determine to show the Issuer flow or reg Plan Compare
		this.fetchIsDirectEnrollmentConsumer();
		
	},
	
	fetchIsDirectEnrollmentConsumer : function(){
		var $this = this;
		var qhpEligible = this.qhpEligible;
		
		this.isDirectEnrollmentConsumerModel.fetch({
			success : function(model, response) 
			{
				$this.isDirectEnrollment = true;
				if(response === true)
				{
					console.log('direct enrollment');
					//show the Issuer flow
					$('#proceedToEnrollDiv h2').text("What would you like to do next?");
					$('#proceedToEnrollDiv button#proceedToEnrollButton').attr('id', 'goToIssuerFlow').text("Go to Issuer Website");
					$('#proceedToEnrollDiv').show();
				} 
			},
			error : function(model, response) 
			{
				$this.isDirectEnrollment = false;

				console.log("Is direct enrollment consumer service has failed! Setting isDirectEnrollment variable to false.");
			}
		});
	},	
	
	createPersonMappingForDirectEnrollment : function()	{
		//create some sort of person mapping and go to Direct Enrollment
	   var $this = this;
	   var appId = this.modelIndApp.get("identifier");
	   var newCreatePersonMappingModel = new CreatePersonMappingBBModel();
	   newCreatePersonMappingModel.url = newCreatePersonMappingModel.urlRoot+"?applicationId="+appId;
		newCreatePersonMappingModel.save(
		null,
		{
			success : function(model, response) 
			{
				$this.sendSecureRedirect();
			},
			error : function(model, response) 
			{
				console.log(response);
			}
		});
	},
	
	sendSecureRedirect : function() {
		var $this = this;
		
		this.sendSecureRedirectModel.fetch({
			dataType : "text",
			success : function(model, response) 
			{
				if(!isEmpty(response))
				{ 
					//redirect back to the Issuer site
					$this.getSecureRedirectInfo(response);
				} 
			},
			error : function(model, response) 
			{
				console.log(response);
			}
		});
	},
	
	getSecureRedirectInfo : function(token)	{
		//redirects back to the Issue's Partner Form/website 
		var $this = this;
		this.getSecureRedirectInfoModel.fetch({
			success : function(model, response) 
			{
				var formAction =$this.theUrl=response["Return URL"];
				var html = "<form name='redirectToPartnerForm' id='redirectToPartnerForm'  method='post'>";
				html += "<input type='hidden' name='SAMLResponse' value='"+token+"'/>";
				html += "</form>";
			
				$('body').append(html);
				document.forms['redirectToPartnerForm'].action=formAction;
				document.forms['redirectToPartnerForm'].submit();
			},
			error : function(model, response) 
			{
				console.log(response);
			}
		});
	},
	
	redirectToPlanCompare : function () {
		//redirects the user to plan Compare 
		var view = this;
		
		$.ajax({
			type:"GET",
			url: environment + "/ee-rest/auth/global/" + locale + "/EeAccount/getSystemUserByUserLogin/" + ffeUserName, 
			success: function(data){
				view.navigateToPlanCompare();
			}, 
			error: function(jqXHR, textStatus, errorThrown){ 
				console.log("Error retrieving system user");
			}
		});
	},
	
	navigateToPlanCompare : function(){
		var applicationId = this.modelIndApp.get('identifier');
		window.location.href = "/" + eePath + "/auth/" + tenantId + "/" + locale + "/toDoList?a=" + applicationId;
	},	

	// TODO move this to a better place so other views can access it.
	goToIndApp: function()
	{
		var systemUser =myAccountGetSystemUserBBModel.get('systemUser');
		var registeredAbbr ='';
		if(!isEmpty(systemUser))
		{
			registeredAbbr = systemUser.registeredStateCode;
		}
		var idVerified = isIDProofed(systemUser, ffeLOAUserLvl); 
		
		//now determine
	    if(idVerified) 
        {
            navigateToIndApp(registeredAbbr, locale);
        }
        else 
        {
        	navigateToIDProofing(locale);
         
        }
	}
	
});

var myAccountEligibilityBBView = new MyAccount_EligibilityBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var myAccount_CoverageDocumentsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#accountCoveragePage"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	coverageDocumentsTemplate : _.template($('#coverageDocumentsTemplate').html()),
	coverageSideMenuTemplate : _.template($('#coverageSideMenuTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'cancel', 'save', 'appendCoverageDocuments');
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #cancel" : "cancel",
		"click #save" : "save"
	},
	
	render : function() {
		this.refreshTemplate();	
		//;
		return this;
	},
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
	},
	
	appendCoverageDocuments : function( templateOne, templateTwo ) {
		this.$el.empty();
		this.$el.append(this.coverageDocumentsTemplate());
	},
	
	cancel : function() {
		window.location.href = "/"+eePath+"";
	},

	save : function() {
		if (this.model.isValid()) {
			this.model.save(null, {
				success : function(model, response) {
					console.log("successful save");
				},
				error : function(model, response) {
					console.log("error in save");
				}
			});
		}
	}
	
});
var myAccountCoverageDocumentsBBView = new myAccount_CoverageDocumentsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_ReportLifeChangesBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#reportLifeChangesPage"),
	
	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,
	indAppModel : myAccount_IndAppBBModel,
	
	enrolledPlansCollection : myAccountEnrolledPlansBBCollection,
	taxHouseholdAPTCCollection : myAccountTaxHouseholdAPTCBBCollection,
	
	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	
	//templates for Individual
	reportLifeChangesTemplate : _.template($('#reportLifeChangesTemplate').html()),
	reportLifeChangesDraftExistsTemplate : _.template($('#reportLifeChangesDraftExistsTemplate').html()),
	reportLifeChangesNoDraftExistsTemplate : _.template($('#reportLifeChangesNoDraftExistsTemplate').html()),
	//reportLifeChangesNoDraftExistsTemplate : _.template($('#reportLifeChangesNoDraftExistsTemplate').html()),
	
	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,
	
	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'openReportsModal', 'openDiscardChangesModal');
				
		this.model.bind('reportLifeChanges', this.refreshTemplate);
		
		// Initialize generally completes by calling this.render
		this.render();
	},
	
	// The events object links all UI events in this view with their event
	// handlers
	events : {
		'click .openReportsModal' : 'openReportsModal',
		'click .openDiscardChangesModal' : 'openDiscardChangesModal'
	},
	
	render : function() {
		this.refreshTemplate();	
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		var draftsExist = false;
		this.$el.empty();
		this.$el.append(this.reportLifeChangesTemplate());
		$('#reportLifeChangesDraft').empty();
		
		if(draftsExist) {
			$('#reportLifeChangesDraft').append(this.reportLifeChangesDraftExistsTemplate());
		}
		else {
			$('#reportLifeChangesDraft').append(this.reportLifeChangesNoDraftExistsTemplate());
		}
	},
	
	openReportsModal : function( e ) {
		var target = $(e.target);
		if(target.hasClass('continueUpdates')) {
			this.model.trigger('setFocusContinueUpdates');
		}
		else if(target.hasClass('continueChanges')) {
			this.model.trigger('setFocusContinueChanges');
		}
		this.model.trigger('renderLifeChangesModal');
	},
	
	openDiscardChangesModal : function() {
		this.model.trigger('renderDiscardChangesModal');
	}
});
var myAccountReportLifeChangesBBView = new MyAccount_ReportLifeChangesBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_ReportLifeChangesModalBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#reportLifeChangesModalPage"),
	focusEl : '',

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,
	getSystemUserModel :myAccountGetSystemUserBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	reportLifeChangesModalTemplate : _.template($('#reportLifeChangesModalTemplate').html()),
	reportLifeChangesModalDiscardChangesTemplate : _.template($('#reportLifeChangesModalDiscardChangesTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'renderReportLifeChangesModal', 'renderDiscardAppChangesModal',  'goToNext',
			'close', 'closeDialog', 'setFocusContinueUpdates', 'setFocusContinueChanges');
		
		this.model.bind('renderLifeChangesModal', this.renderReportLifeChangesModal);
		this.model.bind('renderDiscardChangesModal', this.renderDiscardAppChangesModal);
		this.model.bind('setFocusContinueUpdates', this.setFocusContinueUpdates);
		this.model.bind('setFocusContinueChanges', this.setFocusContinueChanges);
		
		// Custom validation handlers could be added here

	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		'click .cancel' : 'closeDialog',
		'click .discardChanges' : 'discardChanges',
		'click .goToNext' : 'goToNext'
	},
	
	render : function() {

	},
	
	renderReportLifeChangesModal : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.reportLifeChangesModalTemplate());
		this.$el.dialog({
			autoOpen: false,
			resizable: false,
			width: 780,
			height: 525,
			modal: true,
			descriptionId: this.resources['ffe.ee.myAccount.dynamicallyLoadedPage'],
			title: this.resources['ffe.ee.myAccount.reportLifeChanges.modal.title']
        });
		this.$el.dialog('open');
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.parent().find('h2').eq(0).attr('tabindex', '-1').focus();
		this.close();
	},
	
	renderDiscardAppChangesModal : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.focusEl = $('.openDiscardChangesModal', '#reportLifeChangesPage');
		this.$el.empty();
		this.$el.append(this.reportLifeChangesModalDiscardChangesTemplate());
		this.$el.dialog({
			autoOpen: false,
			resizable: false,
			width: 780,
			height: 525,
			modal: true,
			descriptionId: this.resources['ffe.ee.myAccount.dynamicallyLoadedPage'],
			title: this.resources['ffe.ee.myAccount.reportLifeChanges.modal.title']
        });
		this.$el.dialog('open');
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.parent().find('h2').eq(0).attr('tabindex', '-1').focus();
		this.close();
	},
	
	goToNext : function() {
		var registeredState = this.getSystemUserModel.get('systemUser').registeredStateCode;
		this.closeDialog();
		navigateToIndApp(registeredState, locale);
	},
	
	closeDialog : function() {
		$('h1[tabindex=-1]').removeAttr('tabindex');
		this.$el.empty();
		this.$el.dialog('close');
		this.focusEl.focus();
		this.focusEl = '';
		this.$el.dialog('destroy');
	},
	
	close : function( e ) {
		var $this = this,
			input = this.$el.find('input');
		
		this.$el.parent().find('.icon-circle_remove').on('click', function() {
			$('h1[tabindex=-1]').removeAttr('tabindex');
			$($this.focusEl).focus();
			$this.focusEl = '';
			$this.$el.dialog('destroy');
		});
	},
	
	discardChanges : function() {
		this.closeDialog();
	},
	
	setFocusContinueUpdates : function() {
		this.focusEl = $('.continueUpdates', '#reportLifeChangesPage');
	},
	
	setFocusContinueChanges : function() {
		this.focusEl = $('.continueChanges', '#reportLifeChangesPage');
	}
});
var myAccountReportLifeChangesModalBBView = new MyAccount_ReportLifeChangesModalBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_CommunicationsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#communicationsPage"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,
	getSystemUserModel :myAccountGetSystemUserBBModel,
	getIndAppContactInfoModel :myAccountGetIndAppContactInfoBBModel,
	updatePasswordModel : myAccountEIDMIntegrationUpdatePasswordBBModel,
	updateContactNotificationModel : myAccountUpdateContactNotificationBBModel,
	updateContactNoticiesModel : myAccountUpdateContactNoticesBBModel,
	updatePhoneNumberModel : myAccountUpdatePrimaryNumberBBModel,
	updateEmailModel : myAccountUpdateEmailBBModel,
	updateWrittenLanguageModel : myAccountUpdateWrittenLanguageBBModel,
	updateSpokenLanguageModel : myAccountUpdateSpokenLanguageBBModel,
	updatePrimaryNumberModel : myAccountUpdatePrimaryNumberBBModel,
	updateSecondaryNumberModel : myAccountUpdateSecondaryNumberBBModel,
	accountPlansCollection : myAccountSavedPlansBBCollection,
	retrieveExchangeUserRequestModel : myAccountRetrieveExchangeUserRequestBBModel,
	
	//templates for individual
	template : _.template($('#communicationPreferencesTemplate').html()),
	//editNameTemplate : _.template($('#editNameTemplate').html()),
	emailTemplate : _.template($('#editEmailTemplate').html()),
	//passwordTemplate : _.template($('#editPasswordTemplate').html()),
	phoneTemplate : _.template($('#editPhoneTemplate').html()),
	//mailingAddyTemplate : _.template($('#editMailingAddressTemplate').html()),
	navBarTemplate  : _.template($('#accountSettingsNavBarTemplate').html()),
	//navBarTemplate : _.template($('#homePageSideNav').html()),
	
	writtenLanguageTemplate :_.template($('#writtenLanguageTemplate').html()),
	spokenLanguageTemplate :_.template($('#spokenLanguageTemplate').html()),
	generalNotificationsTemplate : _.template($('#generalNotificationsTemplate').html()),
	noticesTemplate : _.template($('#noticesTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate',
				'editEmail','cancelEmailEdit','confirmEmailEdit',
				'editPrimaryPhone','cancelPrimaryPhoneEdit','confirmPrimaryPhoneEdit','updatePrimaryPhoneNumber','setUpdatePhoneNumberModelInfo',
				'editSecondaryPhone','cancelSecondaryPhoneEdit','confirmSecondaryPhoneEdit','setUpdateSecondaryPhoneNumberModelInfo','updateSecondaryPhoneNumber',
				'restoreEmailReadOnlyView','restorePrimaryPhoneReadOnlyView','restoreSecondaryPhoneReadOnlyView',
				'disableEditButtons','enableEditButtons',
				'hyphenCheckerZip',
				'editGeneralNotifications', 'confirmGeneralNotificationsEdit', 'cancelGeneralNotificationsEdit', 'restoreGeneralNotificationsReadOnly',
				'updateEmailLinkNotifications','editNotices', 'confirmNoticesEdit', 'cancelNoticesEdit', 'restoreNoticesReadOnly',
				'editSpokenLanguage', 'confirmSpokenLanguageEdit', 'cancelSpokenLanguageEdit', 'restoreSpokenLanguageReadOnly',
				'editWrittenLanguage', 'confirmWrittenLanguageEdit', 'cancelWrittenLanguageEdit', 'restoreWrittenLanguageReadOnly',
				'updateWrittenLanguage','setWrittenLanguageInfo','updateSpokenLanguage','setSpokenLanguageInfo',
				'initialFetch','fetchIndAppContactInfo', 'goToEditPrimaryPhone', 'goToEditEmail', 'hideSideNavItems');
				
		this.model.bind('refreshAccountSettings', this.refreshTemplate);
		this.model.bind('refreshCommunicationPreferences', this.initialFetch);
		this.model.bind('hideSideNavItems', this.hideSideNavItems);
		
		// Initialize generally completes by calling this.render
		this.initialFetch();
		
		
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .editEmail" : "editEmail",
		"click .editEmailCancel" : "cancelEmailEdit",
		"click .editEmailConfirm" : "confirmEmailEdit",
		
		"click .editPrimaryPhone" : "editPrimaryPhone",
		"click .editPrimaryPhoneCancel" : "cancelPrimaryPhoneEdit",
		"click .editPrimaryPhoneConfirm" : "confirmPrimaryPhoneEdit",
		
		"click .editSecondaryPhone" : "editSecondaryPhone",
		"click .editSecondaryPhoneCancel" : "cancelSecondaryPhoneEdit",
		"click .editSecondaryPhoneConfirm" : "confirmSecondaryPhoneEdit",
		
		"click #generalNotificationsEdit" : "editGeneralNotifications",
		"click #generalNotificationsSave" : "confirmGeneralNotificationsEdit",
		"click #generalNotificationsCancel" : "cancelGeneralNotificationsEdit",
		"click .updateEmailLink" : "updateEmailLinkNotifications",
		
		"click #editNotices" : "editNotices",
		"click #noticesSave" : "confirmNoticesEdit",
		"click #noticesCancel" : "cancelNoticesEdit",
			
		"click #spokenLanguageEdit" : "editSpokenLanguage",
		"click #spokenLanguageSave" : "confirmSpokenLanguageEdit",
		"click #spokenLanguageCancel" : "cancelSpokenLanguageEdit",
		
		"click #writtenLanguageEdit" : "editWrittenLanguage",
		"click #writtenLanguageSave" : "confirmWrittenLanguageEdit",
		"click #writtenLanguageCancel" : "cancelWrittenLanguageEdit",
		"click .goToEditEmail": "goToEditEmail",
		"click .goToEditPrimaryPhone": "goToEditPrimaryPhone",
		
		"keyup .zipcode" : "hyphenCheckerZip"
	},
	
	render : function() {
		this.refreshTemplate();	
	},
	
	hyphenCheckerZip : function(event) 
	{
		// Calls method to add a hyphen in zip code if more than 5 digits are entered
		hyphenCheckerZip(event);
	},
	
	initialFetch: function(){
		console.log('fetching contact info from app');
		this.fetchIndAppContactInfo();
		this.render();
	},
	
	refreshTemplate : function() 
	{
		$("#communicationsPage").html(this.template());
		$('#fixedElementNavContainer').html(this.navBarTemplate());

		this.hideSideNavItems();
		
		var applicationID = myAccountAppID;
				
		if(isEmpty(applicationID)){
			$('#sideNavCommunication').hide();
		}
		else{
		   $('#sideNavCommunication').show();
		   
		}
		
		var email = this.getIndAppContactInfoModel.get('emailAddress');
		var phone = this.getIndAppContactInfoModel.get('primaryPhoneNumber');
		var secondaryPhone = this.getIndAppContactInfoModel.get('secondaryPhoneNumber');
				
		$("#editEmailSection").empty();
		$("#editEmailSection").append(this.emailTemplate(
		{
			email: email,
			environment : environment
		}));
		
		$("#editPrimaryPhoneSection").empty();
		$("#editPrimaryPhoneSection").append(this.phoneTemplate({
			id:'primary',
			idUpper: 'Primary',
			labelToUse: this.resources['ffe.ee.myAccount.settings.primaryPhone'],
			phoneNumber: phone,
			environment : environment
		}));
		$('#primaryPhone').val(phone);
		$('#primaryPhone').prop('readonly', true);
		addPhoneMaskingToId('primaryPhoneEdit');
		
		$("#editSecondaryPhoneSection").empty();
		$("#editSecondaryPhoneSection").append(this.phoneTemplate({
			id:'secondary',
			idUpper: 'Secondary',
			labelToUse: this.resources['ffe.ee.myAccount.settings.secondaryPhone'],
			phoneNumber : secondaryPhone,
			environment : environment
		}));
		$('#secondaryPhone').val(secondaryPhone);
		$('#secondaryPhone').prop('readonly', true);
		addPhoneMaskingToId('secondaryPhoneEdit');
		
		//write rest of the templates
		var writtenLanguage = this.getIndAppContactInfoModel.get('writtenLanguagePreference');
		if(writtenLanguage === "1"){
		    writtenLanguage = this.resources['ffe.ee.myAccount.notifications.language.english'];
		}
		else if(writtenLanguage === "2"){
		    writtenLanguage = this.resources['ffe.ee.myAccount.notifications.language.spanish'];
		}
		if(isEmpty(writtenLanguage))
		{
		    writtenLanguage = this.resources['ffe.ee.myAccount.notifications.language.english'];
		}
		
		var spokenLanguage = this.getIndAppContactInfoModel.get('spokenLanguagePreference');
		if(spokenLanguage === "1"){
		    spokenLanguage = this.resources['ffe.ee.myAccount.notifications.language.english'];
		}
		else if(spokenLanguage === "2"){
		    spokenLanguage = this.resources['ffe.ee.myAccount.notifications.language.spanish'];
		}
		if(isEmpty(spokenLanguage))
		{
		    spokenLanguage = this.resources['ffe.ee.myAccount.notifications.language.english'];
		} 
		$('#spokenLangSection').empty();
		$('#spokenLangSection').append(this.spokenLanguageTemplate(
		{
			language : spokenLanguage
		}));
		
		$('#writtenLangSection').empty();
		$('#writtenLangSection').append(this.writtenLanguageTemplate(
		{
			language : writtenLanguage
		}));
		
		// notifications
		var notifyEmail = this.getIndAppContactInfoModel.get('receiveEmailNotifications');
		var notifyPrimaryPhone = this.getIndAppContactInfoModel.get('receiveMessagingNotifications');
		$('#notificationsSection').empty();
		$('#notificationsSection').append(this.generalNotificationsTemplate(
		{
			notifyEmail : notifyEmail,
			notifyPrimaryPhone : notifyPrimaryPhone,
			emailAddy: email,
			primaryPhone : phone,
			secondaryPhone : secondaryPhone,
			environment : environment
		}));
		$('#notificationGeneralEmail').customInput();
		$('#textPrimaryMessage').customInput();
		$('#textSecondaryMessage').customInput();
		// notices
		$('#noticeSection').empty();
		var streetName2 = ( this.getIndAppContactInfoModel.get('address.streetName2') !== null ? this.getIndAppContactInfoModel.get('address.streetName2') : '');
		if (streetName2 && streetName2.length > 0) {
		    streetName2 = '<span>' + streetName2 + '</span><br/>';
      }
		$('#noticeSection').append(this.noticesTemplate(
		{
			noticeToEmail : this.getIndAppContactInfoModel.get('receiveNoticesByEmail'),
			noticeToMail : this.getIndAppContactInfoModel.get('receiveNoticesByMailingAddress'),
			emailAddress : this.getIndAppContactInfoModel.get('emailAddress'),
			mailAddress: this.getIndAppContactInfoModel.get('primaryBusinessAddress'),
			streetName1: this.getIndAppContactInfoModel.get('address.streetName1'),
         streetName2: streetName2,
			cityName: this.getIndAppContactInfoModel.get('address.cityName'),
			stateCode: this.getIndAppContactInfoModel.get('address.stateCode'),
			zipPlus4Code: this.getIndAppContactInfoModel.get('address.zipPlus4Code'),
			environment: environment
		}));
		$('#noticeToMail').customInput();
		//set up validations		
		this.initializeValidation();
	},
	
	initializeValidation : function() {
		if($("#communicationsPage").find('.validatorFormGroup').length === 0){
				var emailValidator = new FFM.FormValidator($("#validationDivContainer"), $(".editEmailConfirm"));
				var phoneValidator = new FFM.FormValidator($("#validationPrimaryPhoneContainer"), $(".editPrimaryPhoneConfirm")); 
				var phone2Validator = new FFM.FormValidator($("#validationSecondaryPhoneContainer"), $(".editSecondaryPhoneConfirm"));
				//var passwordValidator = new FFM.FormValidator($("#validationPasswordContainer"), $(".editPasswordConfirm"));
				var myValidator = new FFM.FormValidator($("#validationGeneralNotificationsContainer"), $("#generalNotificationsSave"));
				var spokenLangValidator = new FFM.FormValidator($("#validationSpokenLanguageContainer"), $("#spokenLanguageSave"));
		}
		
	},
	
	fetchIndAppContactInfo : function() {
		var $this = this;
		var applicationID = myAccountAppID;
		
		//TEST
		
		if(!isEmpty(applicationID))
		{		
		
			this.getIndAppContactInfoModel.set({'applicationId' : applicationID});
			this.getIndAppContactInfoModel.fetch({
				success : function(model, response) {
					$this.refreshTemplate();	
					console.log("successful get contact info");
					console.log(response);
					
					
				},
				error : function(model, response) {
					console.log("error in get contact info");
				}
			});
		}
	},
	
	editEmail : function()
	{
			$('#emailSuccessMessage').hide();
         $('.success').hide();
			$('#editEmailSection').removeClass('inactiveEditSection').addClass('activeEditSection');
			$('.editEmail').hide();
			$('#email').hide();
			$('#emailInputField').val($('#email').text());
			$('#emailInputSection').show();
			$('#emailParent').removeClass('span6');
			$('#emailParent').addClass('span8');
			
			this.disableEditButtons();
	},
	
	cancelEmailEdit : function()
	{ 
		this.restoreEmailReadOnlyView();
	},
	confirmEmailEdit: function()
	{
		blockUIForProfile();
		var emailAddress = $('#emailInputField').val();
		// update model
		this.updateEmailModel.set({"emailAddress": emailAddress});
		this.updateEmailModel.set({"exchangeUserIdentifier": this.getIndAppContactInfoModel.get('exchangeUserIdentifier')});
		this.updateEmailModel.set({"applicationId": this.getIndAppContactInfoModel.get('applicationId')});
		// save model
		this.updateEmailModel.save(null, {
			success : function(model, response) {
				$.unblockUI();
				$('#email').text(emailAddress);
				$('#emailSuccessMessage').show();
			},
			error : function(model, response) {
				$.unblockUI();
				console.log(response);
//				$('#emailSuccessMessage').show(); // TODO emailErrorMessage
			}
		});
		this.restoreEmailReadOnlyView();
	},	
	//common show/hide parts
	restoreEmailReadOnlyView: function()
	{
			$('#editEmailSection').removeClass('activeEditSection').addClass('inactiveEditSection');
			$('#email').show();
			$('#emailInputSection').hide();
			$('.editEmail').show();
			$('#emailParent').removeClass('span8');
			$('#emailParent').addClass('span6');
			
			this.enableEditButtons();
	},
	editPrimaryPhone : function()
	{
		   $('#primaryPhoneSuccessMessage').hide();
		   $('.success').hide();
		   $('#editPrimaryPhoneSection').removeClass('inactiveEditSection').addClass('activeEditSection');
			$('#primaryPhone').hide();
			$('.editPrimaryPhone').hide();
			$('#primaryPhoneEdit').val($('#primaryPhone').text());
			$('#primaryPhoneInput').show();
			$('#primaryPhoneParent').removeClass('span6');
			$('#primaryPhoneParent').addClass('span8');
			
			this.disableEditButtons();
	},
	
	cancelPrimaryPhoneEdit : function()
	{
		this.restorePrimaryPhoneReadOnlyView();
	},
	confirmPrimaryPhoneEdit : function()
	{
		blockUIForProfile();
			this.updatePrimaryPhoneNumber();
			this.restorePrimaryPhoneReadOnlyView();
	},
	
	restorePrimaryPhoneReadOnlyView : function()
	{
		
		
			$('#editPrimaryPhoneSection').removeClass('activeEditSection').addClass('inactiveEditSection');
			$('#primaryPhone').show();
			$('.editPrimaryPhone').show();
			$('#primaryPhoneInput').hide();
			$('#primaryPhoneParent').removeClass('span8');
			$('#primaryPhoneParent').addClass('span6');
			
			this.enableEditButtons();
	},
	
	updatePrimaryPhoneNumber : function() {
		this.setUpdatePhoneNumberModelInfo();
		this.updatePrimaryNumberModel.save(null, {
				success : function(model, response) {
					$.unblockUI();
					$('#primaryPhone').text($('#primaryPhoneEdit').val());
					$('#primaryPhoneSuccessMessage').show();
					console.log("successful save");
				},
				error : function(model, response) {
					$.unblockUI();
					console.log("error in save");
				}
			});
	},
	setUpdatePhoneNumberModelInfo : function (){
		var applicationID =  this.getIndAppContactInfoModel.get('applicationId');
		this.updatePrimaryNumberModel.set({'phoneFaxNumber' : $('#primaryPhoneEdit').val()});
		this.updatePrimaryNumberModel.set({'applicationId' : applicationID});
	},
	
	editSecondaryPhone : function()
	{
	      $('#secondaryPhoneSuccessMessage').hide();
	      $('.success').hide();
	      $('#editSecondaryPhoneSection').removeClass('inactiveEditSection').addClass('activeEditSection');
			$('#secondaryPhone').hide();
			$('.editSecondaryPhone').hide();
			$('#secondaryPhoneEdit').val($('#secondaryPhone').text());
			$('#secondaryPhoneInput').show();
			$('#secondaryPhoneParent').removeClass('span6');
			$('#secondaryPhoneParent').addClass('span8');
			
			this.disableEditButtons();
	},
	
	cancelSecondaryPhoneEdit : function()
	{
		this.restoreSecondaryPhoneReadOnlyView();
	},
	confirmSecondaryPhoneEdit : function()
	{ 
		blockUIForProfile();
			this.updateSecondaryPhoneNumber();
			
			this.restoreSecondaryPhoneReadOnlyView();
	},
	
	restoreSecondaryPhoneReadOnlyView : function()
	{
		
			$('#editSecondaryPhoneSection').removeClass('activeEditSection').addClass('inactiveEditSection');
			$('#secondaryPhone').show();
			$('.editSecondaryPhone').show();
			$('#secondaryPhoneInput').hide();
			$('#secondaryPhoneParent').removeClass('span8');
			$('#secondaryPhoneParent').addClass('span6');
			
			this.enableEditButtons();
	},
	
	updateSecondaryPhoneNumber : function() {
		this.setUpdateSecondaryPhoneNumberModelInfo();
		this.updateSecondaryNumberModel.save(null, {
				success : function(model, response) {
					$.unblockUI();
					$('#secondaryPhone').text($('#secondaryPhoneEdit').val());
					$('#secondaryPhoneSuccessMessage').show();
					console.log("successful save");
				},
				error : function(model, response) {
					$.unblockUI();
					console.log("error in save");
				}
			});
	},
	setUpdateSecondaryPhoneNumberModelInfo : function (){
		var applicationID =  this.getIndAppContactInfoModel.get('applicationId');
		this.updateSecondaryNumberModel.set({'phoneFaxNumber' : $('#secondaryPhoneEdit').val()});
		this.updateSecondaryNumberModel.set({'applicationId' : applicationID});
	},
	
	
	editGeneralNotifications: function()
	{
		var notificationsPref = this.getIndAppContactInfoModel.get('notificationPreference');
		if(!isEmpty(notificationsPref)) {
			$('#notificationGeneralEmail').attr('checked',true);
		}
		$('#generalNotificationSuccessMessage').hide();
		$('.success').hide();
		$('#generalNotificationsInput').show();
		$('#generalNotificationsReadOnly').hide();
		$('#generalNotificationsReadOnlyLabelCollapsed').hide();
		$('#generalNotificationsReadOnlyLabelExpanded').show();
		$('#notificationsSection').removeClass('inactiveEditSection').addClass('activeEditSection');
		$('#generalNotificationsEdit').hide();
		$('#generalNotificationsParent').removeClass('span6');
		$('#generalNotificationsParent').addClass('span8');
		this.disableEditButtons();
	},
	confirmGeneralNotificationsEdit: function()
	{ 
		blockUIForProfile();
		var emailChecked = isCheckboxChecked('notificationGeneralEmail');
		var textMessageChecked = isCheckboxChecked('textPrimaryMessage');
		this.updateContactNotificationModel.set(
			{
				'receiveEmailNotifications' : emailChecked,
				'emailAddress' : this.updateEmailModel.emailAddress,
				'receiveMessagingNotifications' : textMessageChecked,
				'phoneNumber' : this.updatePrimaryNumberModel.phoneFaxNumber,
				"exchangeUserIdentifier": this.getIndAppContactInfoModel.get('exchangeUserIdentifier'),
				"applicationId": this.getIndAppContactInfoModel.get('applicationId')
			});
		this.updateContactNotificationModel.save(null, {
			success : function(model, response) {
				$.unblockUI();
				$('#generalNotificationSuccessMessage').show();
				$('#generalNotificationFailureMessage').hide();
				// update the icons in the readonly section
				if (emailChecked) {
				    $('#generalNotificationsReadOnlyEmailChecked').removeClass('icon-circle_remove').addClass('icon-circle_ok');
				} else {
				    $('#generalNotificationsReadOnlyEmailChecked').removeClass('icon-circle_ok').addClass('icon-circle_remove');
				}
				if (textMessageChecked) {
				    $('#generalNotificationsReadOnlyTextChecked').removeClass('icon-circle_remove').addClass('icon-circle_ok');
				} else {
				    $('#generalNotificationsReadOnlyTextChecked').removeClass('icon-circle_ok').addClass('icon-circle_remove');
				}
         },
			error : function(model, response) {
				$.unblockUI();
				$('#generalNotificationSuccessMessage').hide();
				$('#generalNotificationFailureMessage').show();
			}
		});
		$('#generalNotificationSaveStatus').show(); 
		this.restoreGeneralNotificationsReadOnly();
	},
	cancelGeneralNotificationsEdit : function()
	{
		this.restoreGeneralNotificationsReadOnly();
	},
	updateEmailLinkNotifications : function()
	{
		this.restoreGeneralNotificationsReadOnly();
	},
	restoreGeneralNotificationsReadOnly : function()
	{
		$('#generalNotificationsInput').hide();
		$('#generalNotificationsReadOnly').show();
		$('#generalNotificationsReadOnlyLabelCollapsed').show();
		$('#generalNotificationsReadOnlyLabelExpanded').hide();
		$('#notificationsSection').removeClass('activeEditSection').addClass('inactiveEditSection');
		$('#generalNotificationsEdit').show();
		
		$('#generalNotificationsParent').removeClass('span8');
		$('#generalNotificationsParent').addClass('span6');
		this.enableEditButtons();
	},
   goToEditEmail: function () {
       this.cancelGeneralNotificationsEdit();
       this.editEmail();
       $('#emailInputField').focus();
	},
	goToEditPrimaryPhone: function () {
	    this.cancelGeneralNotificationsEdit();
	    this.editPrimaryPhone();
	    $('#primaryPhoneEdit').focus();
	},
	editNotices: function ()
	{
		$('#noticesInput').show();
		$('#noticeSection').removeClass('inactiveEditSection').addClass('activeEditSection');
		$('#editNotices').hide();
		$('#noticesSuccessMessage').hide();
		$('.success').hide();
		$('#noticesReadOnly').hide();
		$('#noticesParent').removeClass('span6');
		$('#noticesParent').addClass('span8');
		this.disableEditButtons();
	},
	confirmNoticesEdit : function()
	{
		blockUIForProfile();
		var mailChecked = isCheckboxChecked('noticeToMail');
		this.updateContactNoticiesModel.set(
				{
				   'receiveNoticesByMailingAddress': mailChecked,
					'receiveNoticesByEmail' : this.getIndAppContactInfoModel.get('receiveNoticesByEmail'),
					"exchangeUserIdentifier": this.getIndAppContactInfoModel.get('exchangeUserIdentifier'),
					"applicationId": this.getIndAppContactInfoModel.get('applicationId')
				});		
		this.updateContactNoticiesModel.save(null, {
			success : function(model, response) {
				$.unblockUI();
				$('#noticesSuccessMessage').show();
				$('#noticesFailureMessage').hide();
				if (mailChecked) {
				    $('#noticesReadOnlyMailChecked').removeClass('icon-circle_remove').addClass('icon-circle_ok');
				} else {
				    $('#noticesReadOnlyMailChecked').removeClass('icon-circle_ok').addClass('icon-circle_remove');
				}
         },
			error : function(model, response) {
				$.unblockUI();
				$('#noticesSuccessMessage').hide();
				$('#noticesFailureMessage').show();
			}
		});
		this.restoreNoticesReadOnly();
	},
	cancelNoticesEdit : function()
	{
		this.restoreNoticesReadOnly();
	},
	restoreNoticesReadOnly : function()
	{
		$('#noticesInput').hide();
		$('#noticeSection').removeClass('activeEditSection').addClass('inactiveEditSection');
		$('#editNotices').show();
		$('#noticesReadOnly').show();
		$('#noticesParent').removeClass('span8');
		$('#noticesParent').addClass('span6');
		this.enableEditButtons();
	},
	editSpokenLanguage : function()
	{
		$('#spokenLanguagesInput').show();
		$('#spokenLanguagesReadOnly').hide();
		$('#spokenLangSection').removeClass('inactiveEditSection').addClass('activeEditSection');
		$('#spokenLanguageEdit').hide();
		$('#spokenLanguageSaveStatus').hide(); //hide success
		
		$('#spokenLanguageParent').removeClass('span6');
		$('#spokenLanguageParent').addClass('span8');
		this.disableEditButtons();
	},
	confirmSpokenLanguageEdit : function()
	{ 
		blockUIForProfile();
		var newSpokenLangVal= $('#addSpokenLanguage :selected').val();
		
		this.model.set({spokenLanguagePreference:newSpokenLangVal});
		
		//saveEEAccount(this.model);
		this.updateSpokenLanguage(); 
		
		this.restoreSpokenLanguageReadOnly();
	},
	cancelSpokenLanguageEdit : function()
	{
		this.restoreSpokenLanguageReadOnly();
	},
	restoreSpokenLanguageReadOnly : function()
	{
		$('#spokenLanguagesInput').hide();
		$('#spokenLanguagesReadOnly').show();
		$('#spokenLanguageEdit').show();
		$('#spokenLangSection').removeClass('activeEditSection').addClass('inactiveEditSection');
		
		$('#spokenLanguageParent').removeClass('span8');
		$('#spokenLanguageParent').addClass('span6');
		this.enableEditButtons();
	},
	
	
	editWrittenLanguage : function()
	{
		$('#writtenLanguagesInput').show();
		$('#writtenLanguagesReadOnly').hide();
		$('#writtenLangSection').removeClass('inactiveEditSection').addClass('activeEditSection');
		$('#writtenLanguageEdit').hide();
		$('#writtenLanguageSaveStatus').hide(); //hide success
		
		$('#writtenLanguageParent').removeClass('span6');
		$('#writtenLanguageParent').addClass('span8');
		this.disableEditButtons();
	},
	confirmWrittenLanguageEdit : function()
	{
		blockUIForProfile();
		//note that the code and the text are different
		var newWrittenLangVal= $('#addWrittenLanguage :selected').val();
		this.model.set({writtenLanguagePreference:newWrittenLangVal});
		
		//saveEEAccount(this.model);
		this.updateWrittenLanguage();
				
		this.restoreWrittenLanguageReadOnly();
	},
	cancelWrittenLanguageEdit : function()
	{ 
		this.restoreWrittenLanguageReadOnly();
	},
	restoreWrittenLanguageReadOnly: function()
	{
		$('#writtenLanguagesInput').hide();
		$('#writtenLanguagesReadOnly').show();
		$('#writtenLanguageEdit').show();
		$('#writtenLangSection').removeClass('activeEditSection').addClass('inactiveEditSection');
		
		$('#writtenLanguageParent').removeClass('span8');
		$('#writtenLanguageParent').addClass('span6');
		this.enableEditButtons();
		
	},
	
	disableEditButtons : function()
	{
		$(':button.settingsEditButton', '#communicationsPage').attr('disabled','disabled').attr('aria-disabled', true).addClass("disabled");
	},
	enableEditButtons : function()
	{
		$(':button.settingsEditButton', '#communicationsPage').removeAttr("disabled").removeClass('disabled').attr('aria-disabled', false);
		hideValidationErrors();
	},
	
	updateWrittenLanguage : function(){
		var newWrittenLang= $('#addWrittenLanguage :selected').text();
		this.setWrittenLanguageInfo();
		this.updateWrittenLanguageModel.save(null, {
			success : function(model, response) {
			//  update view
				$.unblockUI();
				$('#writtenLanguageText').text(newWrittenLang);
				$('#writtenLanguageSaveStatus').show();
				console.log("successful save");
			},
			error : function(model, response) {
				$.unblockUI();
				console.log("error in save");
			}
		});
		
	},
	
	setWrittenLanguageInfo : function(){
		var applicationID =  this.getIndAppContactInfoModel.get('applicationId');
		var exchangeUserIdentifier =  this.getIndAppContactInfoModel.get('exchangeUserIdentifier');
		var newWrittenLangVal= $('#addWrittenLanguage :selected').val();
		this.updateWrittenLanguageModel.set({"writtenLanguagePreference": newWrittenLangVal});
		this.updateWrittenLanguageModel.set({"exchangeUserIdentifier": exchangeUserIdentifier});
		this.updateWrittenLanguageModel.set({"applicationId": applicationID});
	},
	
	updateSpokenLanguage : function(){
		var newSpokenLang= $('#addSpokenLanguage :selected').text();
		this.setSpokenLanguageInfo();
		this.updateSpokenLanguageModel.save(null, {
			success : function(model, response) {
				$.unblockUI();
				$('#spokenLanguageText').text(newSpokenLang);
				$('#spokenLanguageSaveStatus').show();
				console.log("successful save");
			},
			error : function(model, response) {
				$.unblockUI();
				console.log("error in save");
			}
		});
		
	},
	
	setSpokenLanguageInfo : function(){
		var applicationID =  this.getIndAppContactInfoModel.get('applicationId');
		var exchangeUserIdentifier =  this.getIndAppContactInfoModel.get('exchangeUserIdentifier');
		var newSpokenLangVal= $('#addSpokenLanguage :selected').val();
		this.updateSpokenLanguageModel.set({"spokenLanguagePreference": newSpokenLangVal});
		this.updateSpokenLanguageModel.set({"exchangeUserIdentifier": exchangeUserIdentifier});
		this.updateSpokenLanguageModel.set({"applicationId": applicationID});
	},
	
	hideSideNavItems : function() {
		var status = this.retrieveExchangeUserRequestModel.attributes.applicationStatus;
		
		if(!isEmpty(status)) {
			if( status !== '002' || status !== '001') {
				$('#sideNavApplicationDetails').show();
				$('#applicationLink').show();
			}
			else {
				$('#sideNavApplicationDetails').hide();
				$('#applicationLink').hide();
			}
		}
		else {
			$('#sideNavApplicationDetails').hide();
			$('#applicationLink').hide();
		}
	}
});
var myAccountCommunicationsBBView = new MyAccount_CommunicationsBBView();

var MyAccount_ApplicationsDetailsBBView = FFEView.extend(
{
	el : $("#applicationsDetailsPage"),

	model : myAccountAccountBBModel,
	exchangeUserModel: myAccountRetrieveExchangeUserRequestBBModel,
	indAppModel : myAccount_IndAppBBModel,
    physicalDocumentModel : physicalDocumentBBModel,
	collection : myApplicationDetailsBBCollection,
	template : _.template($('#applicationDetailsTemplate').html()),
	templateUploadForm : _.template($('#applicationDetailsUploadFormTemplate').html()),
	inconsistencyItemTemplate : _.template($('#inconsistencyItemTemplate').html()),
	
	inconsistencyAreaTemplate : _.template($('#inconsistencyAreaTemplate').html()),
	inconsistencyAreaEmptyTemplate : _.template($('#inconsistencyAreaEmptyTemplate').html()),
 
	namespace : "ffe.ee",
	pageName : "myAccount",
	resources : resources,
	
	initialize : function() 
	{
		FFEView.prototype.initialize.call(this);
		
		_.bindAll(this, 'render', 'refreshTemplate', 'updateTask', 'renderIndApp','goToIndAppFromEligibility','renderDisplay',
		'status','verify', 'downloadAttachment');

		this.render(); 
	},
	// The events object links all UI events in this view with their event
	// handlers
	events : 
	{
		"click #status" : "status",
		"click .verify" : "verify",
		"click #myAccountAppDetailsResumeApp" : "goToIndAppFromEligibility",
		"click #viewEligibilityResults" : "downloadAttachment"  //download directly
	},
	render : function() 
	{
		console.log('AppDetails: render for app details');
		this.refreshTemplate();	
	},
	renderIndApp: function()
	{
		//set the ids n stuff on this model before the fetch
		this.exchangeUserModel.set({'applicationId':myAccountAppID});
		this.exchangeUserModel.set({'exchangeUserId':ffeUserName});
		this.exchangeUserModel.fetch(
		{
			success: function(model, response)
			{
				console.log('fetched User Info');
			},
			error: function(model, response)
			{
				console.log('ERROR fetching User Info');
			}
		});
		
		$("#applicationsDetailsPage").empty();
		$("#applicationsDetailsPage").append(this.template(
			{
				data: this.collection.toJSON(), 
				indApp: this.indAppModel.toJSON(), 
				status: this.exchangeUserModel.get('applicationStatus') 
			}));
		
		$("#inconsistenciesArea").empty();
		
		$("#listOfInconsistencies").empty();
		$("#listOfInconsistenciesqhp").empty();
		$("#listOfInconsistencieschip").empty();
		$("#listOfInconsistenciesmedicaid").empty();
		$("#listOfInconsistenciesaptc").empty();
		
		if(!isEmpty(this.collection) && !isEmpty(this.collection.models))
		{
			//basic non empty
			
			var json ='';
			var taskList = [];
			var programTypes =[];
			
			if(!isEmpty(this.collection))
			{
				json= this.collection.toJSON();
			}
			
			if(!isEmpty(json) && !isEmpty(json[0]))
			{
				taskList= json[0].taskList;
			}
			
			
			for(var x=0;x < taskList.length ; x++)
			{	
				var currTask = taskList[x];
				
				var status=this.resources[currTask.statusCode];
				var programAcronym = parseInconsistencyCodeFromRBK(currTask.programTypeCode);
				var program=this.resources[currTask.programTypeCode];
				var taskId= currTask.taskId;
				
				//this will corral the desc and detailedDescription
				var templates = this.replaceTaskTemplates(currTask);

				if(isEmpty(program))
				{
					program="qhp";
				}

				var hasProgram=false;
				for(var y=0;y<programTypes.length;y++)
				{
					if(programAcronym === programTypes[y])
					{
						hasProgram =true;
					}
				}
				if(!hasProgram)
				{
					programTypes.push(programAcronym);
					$('#inconsistenciesArea').append(this.inconsistencyAreaTemplate(
					{
						programTypeCodeContent: program,
						theIndex : programAcronym
					}));
				}
				var canUploadDocs = true;
				
				if(taskId=== 'in04' || taskId ==='in15' || taskId ==='in21')
				{
					canUploadDocs =false;
				}
				
				console.log('loop startwrite' + x);
				$("#listOfInconsistencies" +programAcronym).append(this.inconsistencyItemTemplate(
				{
					programTypeCode: program,
					taskDescription : templates.desc,
                    taskDescriptionContent : templates.detailedDescription,
					status : status,  
					dueDate: currTask.dueDateDisplay,
					taskId : taskId, 
					showDoc :canUploadDocs
				})); 
			}	
		}
		else
		{
			//empty
			$('#inconsistenciesArea').append(this.inconsistencyAreaEmptyTemplate(
			{
				
			}));
		}
		$('input', this.el).customInput();
	},
	
	// TODO Move all this to the model
	replaceTemplate: function(tpl, task)
	{
		var member = task.memberNames && task.memberNames[0] || "";
		var result = tpl.replace(/\[FN\]/g, member)
			.replace(/\[Date\]/g, task.dueDateDisplay)
		;
		
		return result;
	},
	
	// TODO Move all this to the model
	replaceTaskTemplates: function(task)
	{
		if (task.dueDate)
		{
			task.dueDateDisplay = convertInconsistencyDate(task.dueDate);
		}
		return {
			detailedDescription: this.replaceTemplate(this.resources[task.operationDescription], task),
			desc: this.replaceTemplate(this.resources[task.taskDescription], task)
		};
	},
	
	goToIndAppFromEligibility : function()
	{
		myAccountEligibilityBBView.goToIndApp();
		
	},
	downloadAttachment : function() {
	  var i, fi = null;
	  var phyDoc = this.modelIndApp.get("supportingPhysicalDocument");
	  
	  for( i = 0 ; i < phyDoc.length; i++ ) 
	  {
	   if ( phyDoc[i].physicalDocumentSubjectTypeCode === '1' )
	   {
		fi = phyDoc[i].physicalDocumentRepositoryFileIdentifier;
		break;
	   }
	  }
	  
	  if (fi)
	  {
		  $.download('/ee-rest/auth/'+ tenantId + '/' + locale + '/DocumentManagementEE/DocumentFromECM', 'fileIdentifier=' + fi , 'get');
	  }
	  else
	  {
		  console.log('empty file from Ind App');
	  }
	},
	fetchInconsistencies: function()
	{
		var theContext=this;
		
		if(!isEmpty(myAccountAppID))
		{
			this.collection.initUrl();
			this.collection.url+=myAccountAppID;
			this.collection.fetch(
            {
                success: function()
                {
					
					if (theContext.collection.models[0] && theContext.collection.models[0].attributes && theContext.collection.models[0].attributes.taskList) {
						$.each(theContext.collection.models[0].attributes.taskList, function(i, task) 
						{
							task.statusCodeContent = theContext.resources[task.statusCode];
                            task.operationDescriptionContent = theContext.resources[task.operationDescription];
							task.programTypeCodeContent = theContext.resources[task.programTypeCode];
							task.documentTypeIds = taskIdDocumentTypeMap[task.taskId];
							
							task.taskId = i;
						});
					} //TODO debug
                    //and renders them
                    theContext.renderIndApp();
                },
				error: function()
                {
                    //and renders them
                    theContext.renderIndApp();
                }
            });
		}
	},
	refreshTemplate : function()
	{
		console.log('AppDetails: refresh');
		var theContext = this;
		// Render page if app not complete, if it is load data from indapp
		if (this.exchangeUserModel.get('applicationStatus') !== '001') {
			if(!isEmpty(myAccountAppID)) {
				this.indAppModel.set('identifier', myAccountAppID);
				this.indAppModel.fetch({
					success: function(model, response) { 
						console.log('AppDetails: fetching');
						//and renders them
						theContext.fetchInconsistencies();
					},
					error : function(model, response) {
						theContext.fetchInconsistencies();
					}
				});
			}
		}
		
		
		$('#myAccountAppDetailsResumeApp').click(myAccountEligibilityBBView.goToIndApp);
		
		$.unblockUI();
	},
	renderDisplay: function()
	{
		var theContext = this;
		if(!isEmpty(this.collection) && !isEmpty(this.collection.models))
		{
			if(!isEmpty(this.collection.models[0]))
			{
				if(!isEmpty(this.collection.models[0].attributes) && !isEmpty(this.collection.models[0].attributes.taskList))
				{
					$.each(this.collection.models[0].attributes.taskList, function(i, task) 
					{
                        if (!task.statusCodeContent) {
						    task.statusCodeContent = theContext.resources[''+task.statusCode];
                        }
					});
				}
			}
		}
		console.log('AppDetails: rendering Display For app details');
		$('#applicationsDetailsPage').empty();
		$('#applicationsDetailsPage').append(this.template(
		{ 
			data: theContext.collection.toJSON(), 
			indApp: theContext.indAppModel.toJSON(), 
			status: theContext.exchangeUserModel.get('applicationStatus') 
		}));
	},
	
	status : function() 
	{
		this.refreshTemplate();
        this.renderDisplay();
		$("#applicationDetailsVerify").hide();
		$("#applicationDetailsStatus").show();
	},
	
	updateTask : function(taskId) {
// TODO hide or fetch or show other statusCode
	},
	
	renderFileUploadTask: function(task)
	{
		var templates = this.replaceTaskTemplates(task);
				 
        $('#inconsistencies').append(this.templateUploadForm({
        	task: task,
        	resources: this.resources,
        	description: templates.desc,
        	detailedDescription: templates.detailedDescription
        }));
	},
	
	verify : function(e) 
	{
        var $this = this;
        $('#inconsistencies').empty();

        if (this.collection.models[0] && this.collection.models[0].attributes && this.collection.models[0].attributes.taskList)
        {
            _.each(this.collection.models[0].attributes.taskList, this.renderFileUploadTask, this);
        }

		$("#applicationDetailsVerify").show();
		$("#applicationDetailsStatus").hide();
		$('.collapsible', $("#applicationDetailsVerify")).collapsible({"text": true, "icon": false, "closeAll": true});
		var event = jQuery.event.fix(e);
        if (event.srcElement)
        {
            var selectedTaskId = event.srcElement.getAttribute('data-taskId');
            if (selectedTaskId)
            {
                $('#row' + selectedTaskId).find('.collapsible-heading').trigger('expand');
                $('html, body').animate({
                    scrollTop: $('#row' + selectedTaskId).offset().top - 180
                }, 200);
            }
        }
		// file upload bind
		var data = this.collection.toJSON();
		var updateTask = this.updateTask;
		var personTrackingNumber = getSystemUserInfo().systemUser.userTrackingNumber;

        if (this.collection.models[0] && this.collection.models[0].attributes && this.collection.models[0].attributes.taskList) {
            $.each(data[0].taskList, function(i, task) {

            	// Filetype select box
            	var taskContainer = $('#task-' + task.taskId);
            	var filetype = $('#task' + task.taskId + '-filetype').change(function(value) {
                    form.find('input').attr('disabled', false);
                    form.find('.btn').removeClass('disabled');
            	});

                var getMetaData= function(form, input)
                {
                    var
                        doc = input.val(),
                        docArr = doc.split( "\\" ),
                        docName = docArr[docArr.length-1],
                        docExt = docName.substr(docName.lastIndexOf(".")),
                        metadata;
                    docArr = doc.split( "." );

                    //build our metadata
                    var mediaType = function(){
                        var code;
                        switch(docExt){
                            case ".pdf":
                                code = "6";
                                break;
                            case ".jpg":
                            case ".jpeg":
                                code = "12";
                                break;
                            case ".gif":
                                code = "13";
                                break;
                            case ".tiff":
                            case ".tif":
                                code = "14";
                                break;
                            case ".bmp":
                                code = "15";
                                break;
                            case ".png":
                                code = "16";
                                break;
                        }
                        return code;
                    };

                    metadata = {
                            "contentType":"D:ee:content",
                            "metadataReference":{
                                "metadataProperties":[
                                    {
                                        "key":"ee:sourceFileIdentifier",
                                        "value":"defaultFolder"
                                    },{
                                        "key":"ee:physicalDocumentTypeCode",
                                        "value":$(form).find('select option:selected').val()
                                    },{
                                        "key":"ee:mediaTypeCode",
                                        "value": mediaType()
                                    },{
                                        "key":"ee:languageTypeCode",
                                        "value": locale
                                    },{
                                        "key":"ee:sourceCreationDate",
                                        "value": new Date()
                                    },{
                                        "key":"ee:exchangeUserName",
                                        "value": $.trim(ffeUserName)
                                    },{
                                        "key":"ffex:tenantId",
                                        "value": tenantId
                                    },{
                                        "key":"feps:originalFileName",
                                        "value": docName
                                    },{
                                        "key":"feps:savedByUserName",
                                        "value": $.trim(ffeUserName)
                                    },{
                                        "key":"feps:defaultFolderName",
                                        "value": 'Inconsis'
                                    },{
                                        "key":"feps:docType",
                                        "value": docExt
                                    },{
                                        "key":"feps:subject",
                                        "value": 'Inconsis'
                                    },{
                                        "key":"cmis:name",
                                        "value": docName
                                    },{
                                        "key":"ee:AppId",
                                        "value": myAccountAppID
                                    }
                                ]
                            }
                        };


                    return JSON.stringify(metadata);
                };

                var form = $('#fileupload' + task.taskId).fileupload({
                    url: '/ee-rest/auth/'+tenantId+'/'+locale+'/DocumentManagementEE/saveDocumentToECM',
                    autoUpload: true
	                })
	                .bind('fileuploadchange', function(e, data) {
                        // check for file ext
                        var allowedTypes = ['pdf', 'jpg', 'jpeg', 'gif', 'tiff', 'bmp', 'png'];
                        var validType = false;
                        for (var i = 0; i < allowedTypes.length; i++) {
                            if ((data.fileInput.val().length - data.fileInput.val().lastIndexOf(allowedTypes[i])) === allowedTypes[i].length) {
                                validType = true;
                                break;
                            }
                        }
                        if (!validType) {
                            $('#fileuploadtypeerror').show();
                            return false;
                        }
                        else {
                            $('#fileuploadtypeerror').hide();
                        }
	                })
//	                .fileupload('option', 'forceIframeTransport', true)
	                .bind('fileuploadsubmit', function (e, data) {
						data.formData = { documentvo: getMetaData(form, data.fileInput) };
					})
					.bind('fileuploaddone', function (e, data) 
					{
                        blockUIForSave();
						$this.physicalDocumentModel.initUrl();
						$this.physicalDocumentModel.url += myAccountAppID;
                        var docUri = data.result;     
                        $this.physicalDocumentModel.set({'physicalDocumentToAppend' : 
                        [{
       							physicalDocumentRepositoryURI: docUri
       					}]});
   						
                        $this.physicalDocumentModel.set({'verificationIdToUpdate' : task.inconsistencyId});
   						$this.physicalDocumentModel.set({'applicationIdToUpdate' : myAccountAppID});
                        
                        
                        $this.physicalDocumentModel.save(null, {
                            success : function(model, response) {
                                // update task collection
                                if(!isEmpty($this.collection) && !isEmpty($this.collection.models))
                                {
                                    if(!isEmpty($this.collection.models[0]))
                                    {
                                        if(!isEmpty($this.collection.models[0].attributes) && !isEmpty($this.collection.models[0].attributes.taskList))
                                        {
                                            $.each($this.collection.models[0].attributes.taskList, function(i, oldTask)
                                            {
                                                if (oldTask.taskId == task.taskId) { //verificationIdToUpdate}
                                                    oldTask.statusCodeContent = $this.resources['ffe.ee.myAccount.applicationDetails.eligibility.done'];
                                                }
                                            });
                                        }
                                    }
                                }
                                $.unblockUI();
                            },
                            error : function(model, response) {
                                $.unblockUI();
                                console.log(response);
                            }
                        });
						// check iframe content for error
						var uploadSize = data.loaded;
						var uploadName = data.originalFiles[0].name;

						form.find('.table').append(
							// TODO Use a template file?
							_.template("<tr><td><%= name %></td><td><%= type %></td></tr>", {	
								type: filetype.find('option:selected').text(),
								name: uploadName
							})
						);

						data.result = { files: [ { name: data.fileInput.val() } ]};
					})
					.bind('fileuploadfail', function (e, data) {
						$.unblockUI();
						$('#fileuploaderror').show();
					});
                form.find('input').attr('disabled', true);
                form.find('.btn').addClass('disabled');
		    });
        }
	}
});

var myAccountApplicationsDetailBBView  = new MyAccount_ApplicationsDetailsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_EmployerSponsoredBenefitsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#employerSponsoredBenefitsPage"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	//Employer Sponsored Benefits Templates
	employerSponsoredBenefitsTemplate : _.template($('#employerSponsoredBenefitsTemplate').html()),
	employerSponsoredBenefitsHealthPlanTemplate : _.template($('#employerSponsoredBenefitsHealthPlanTemplate').html()),
	employerSponsoredBenefitsDentalPlanTemplate : _.template($('#employerSponsoredBenefitsDentalPlanTemplate').html()),
	paymentsAndInvoicesTemplate : _.template($('#paymentsAndInvoicesTemplate').html()),
	applicationCoverageEmployerTemplate : _.template($('#applicationCoverageTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'cancel', 'save', 'appendPaymentsAndInvoicesTemplate',
					'appendApplicationsForCoverage', 'terminateEmployerShopEnrollment');
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #terminateSHOPEnrollment" : "terminateEmployerShopEnrollment",
		"click #cancel" : "cancel",
		"click #save" : "save"
	},
	
	render : function() {
		this.refreshTemplate();	
		//Backbone.ModelBinding.bind(this);
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.employerSponsoredBenefitsTemplate());
		$('#employerSponsoredBenefitsContent').append(this.employerSponsoredBenefitsHealthPlanTemplate());
		$('#employerSponsoredBenefitsContent').append(this.employerSponsoredBenefitsDentalPlanTemplate());
	},
	
	appendPaymentsAndInvoicesTemplate : function() {
		this.$el.empty();
		this.$el.append(this.paymentsAndInvoicesTemplate());
	},
		
	appendApplicationsForCoverage : function() {
		this.$el.empty();
		this.$el.append(this.applicationCoverageEmployerTemplate());
	},
		
	terminateEmployerShopEnrollment : function() {
		this.model.trigger("initTerminateEmployerShopEnrollment");
	},
		
	cancel : function() {
		window.location.href = "/"+eePath+"";
	},

	save : function() {
		if (this.model.isValid()) {
			this.model.save(null, {
				success : function(model, response) {
					console.log("successful save");
				},
				error : function(model, response) {
					console.log("error in save");
				}
			});
		}
	}
	
});
var myAccountEmployerSponsoredBenefitsBBView = new MyAccount_EmployerSponsoredBenefitsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_ManageEmployeesBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#manageEmployeePage"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	manageEmployeesTemplate : _.template($('#manageEmployeesTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'cancel', 'save', 'openAddEmployeeModal', 'openRemoveEmployeeModal');
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #addEmployee" : "openAddEmployeeModal",
		"click .modalBtnremove" : "openRemoveEmployeeModal",
		"click #cancel" : "cancel",
		"click #save" : "save"
	},
	
	render : function() {
		this.refreshTemplate();	
		//Backbone.ModelBinding.bind(this);
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.manageEmployeesTemplate());
		
		$('.collapsible').collapsible({"text": true, "icon": false, "closeAll": false});
		
		$('#example').dataTable({
			"sDom": 't<pi><"clear">',
			"aaSorting": [[1, 'asc']],
			"sImgDirPath" : "/"+eePath+"/images/",
			"iDisplayLength": 50 //setting high number per page default is only 10 per page
        });
	},
	
	openAddEmployeeModal : function() {
		this.model.trigger('openAddEmployeeModal');
	},
	
	openRemoveEmployeeModal : function(){
		this.model.trigger("initializeRemoveEmployeeModal");
	},
	
	cancel : function() {
		window.location.href = "/"+eePath+"";
	},

	save : function() {
		if (this.model.isValid()) {
			this.model.save(null, {
				success : function(model, response) {
					console.log("successful save");
				},
				error : function(model, response) {
					console.log("error in save");
				}
			});
		}
	}
	
});
var myAccountManageEmployeesBBView = new MyAccount_ManageEmployeesBBView();

//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var myAccount_CoverageTerminateModalBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#coverageTerminateModal"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,
	terminatePlansModel : myAccountTerminatePlansBBModel,
	accountEnrolledPlansCollection : myAccountEnrolledPlansBBCollection,
	
	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	monthDropDownUSTemplate : _.template($('#monthDropDownUSTemplate').html()),
	terminateCoverageTemplate : _.template($('#terminateCoverageModalTemplate').html()),
	terminatePlansModalListTemplate : _.template($('#terminatePlansModalListTemplate').html()),
	//terminateCoverageEmployerTemplate : _.template($('#terminateCoverageEmployerTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,
	terminateDate : '',

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'renderTerminateCoverage', 'closeModalterminate', 'initTerminateEmployerShopEnrollment',
					'cancelModalterminate','terminatePlans','setTerminatePlansInfo','concatNamesTogether','getMonthName' /*'terminateEmployerShopEnrollment'*/,
					'changeTerminationDate', 'lastDayOfMonth', 'enableTerminate', 'close', 'terminateCoverageValidation');
		
		this.model.bind('renderTerminateCoverage', this.renderTerminateCoverage);
		//this.model.bind('initTerminateEmployerShopEnrollment', this.initTerminateEmployerShopEnrollment);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .cancelTerminateButton" : "closeModalterminate",
		"click .confirmTerminateButton" : "confirmModalterminate",
		//"click .terminateEmployerCoverageShop" : "terminateEmployerShopEnrollment",
		"click .cancelEmployerCoverageShop" : "cancelModalterminate",
		"change #terminateMonth" : "changeTerminationDate",
		"change #terminateAcknowledgement" : "enableTerminate",
		"change #terminateYear" : "changeTerminationDate"
	},
	
	render : function() {
		this.refreshTemplate();	
		//;
		return this;
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
	},
	
	closeModalterminate : function() {
		this.$el.empty();
		$('#coverageTerminateModal').dialog('close');
		$('#coverageTerminateModal').dialog('destroy');
	},

	confirmModalterminate : function() {
		//add call to service function for this
		this.terminatePlans();
		$('#coverageTerminateModal').dialog('close');
		this.$el.empty();
		$('#coverageTerminateModal').dialog('destroy');
	},
	
	renderTerminateCoverage : function() {
		var myDate = new Date(),
			$this = this;
			
		myDate.setDate(myDate.getDate()+14);
		var month = myDate.getMonth()+1;
		var monthName = this.getMonthName(month);
		var year = myDate.getFullYear();
		var day = myDate.getDate();
		var endDate = monthName + " " + day + ", " + year;
		var strEndCoverage = (!isEmpty(this.resources['ffe.ee.myAccount.terminate.endCoverage']) ? this.resources['ffe.ee.myAccount.terminate.endCoverage'] : '');
		strEndCoverage = strEndCoverage.replace(/\[END_DATE\]/g, endDate);
		$('#coverageTerminateModal').empty();
		$('#coverageTerminateModal').append(this.terminateCoverageTemplate({
			'endDate' : endDate,
			'endCoverageText': strEndCoverage
		}));
		this.$el.dialog({
			autoOpen: false,
			resizable: false,
			width: 780,
			height: 525,
			modal: true,
			descriptionId: this.resources['ffe.ee.myAccount.dynamicallyLoadedPage'],
			title: this.resources['ffe.ee.myAccount.terminate.chose']
		});
		
		$('#authorize-confirm').customInput();
		this.$el.dialog('open');
		
		this.$el.parent().find('.icon-circle_remove').on('click', function() {
			$this.$el.dialog('destroy');
		});
		$('.terminatePlan').empty();
		var enrolledPlanList = this.accountEnrolledPlansCollection,
			enrolledPlans = '';
		var memberFirstNameList = [];
		if(enrolledPlanList.models.length > 0) {
			for(var i = 0; i < enrolledPlanList.models.length; i++) {
				var members = enrolledPlanList.models[i].attributes.enrolledMemberList;
				for(var x =0; x< members.length; x++){
					memberFirstNameList.push(members[x].firstName + " " + members[x].lastName );
				}
				
				var displayNames = this.concatNamesTogether(memberFirstNameList);
				enrolledPlans += this.terminatePlansModalListTemplate({
					'issuerName' : enrolledPlanList.models[i].attributes.issuerName,
					'planName' : enrolledPlanList.models[i].attributes.planName,
					'members' : displayNames
				});
				
				memberFirstNameList = [];
			}	
		}
		$('.terminatePlan').append(enrolledPlans);
				
		$('input').customInput();
		this.close();
		//this.terminateCoverageValidation();
		$('h2[tabindex=-1]').removeAttr('tabindex');
		this.$el.parent().find('h2').eq(0).attr('tabindex', '-1').focus();
	},
	
	terminateCoverageValidation : function() {
		var idProofingContactInfo,
			eventTrigger = $("#confirmTerminateButton", '#coverageTerminateModal'),
			formContainer = $('.activeModalStep', '#coverageTerminateModal');
			
		if(formContainer.length > 0) {
			//FFM.FormValidator.currentLocale = locale;
			idProofingContactInfo = new FFM.FormValidator(formContainer, eventTrigger);
			idProofingContactInfo.setRule("notBlank", ["^(?!\\s*$).+", this.resources['ffe.ee.shared.validations.notBlank']]);
		}
	},
	
	changeTerminationDate : function() {
		var endDate = '',
			monthName = '',
			month = $('#terminateMonth').val(),
			year = $('#terminateYear').val(),
			//strEndCoverage = (!isEmpty(this.resources['ffe.ee.myAccount.terminate.endCoverage']) ? this.resources['ffe.ee.myAccount.terminate.endCoverage'] : '');
			strEndCoverage = '';
		
		if(!isEmpty(month) && !isEmpty(year)) {
			var lastDay = this.lastDayOfMonth(year, month);
			monthName = this.getMonthName(month);
			
			endDate = monthName+' '+lastDay.getDate()+' '+year;
			this.terminateDate = year+'-'+month+'-'+lastDay.getDate();
			//strEndCoverage = strEndCoverage.replace(/\[END_DATE\]/g, endDate);
			console.log(endDate);
			console.log(strEndCoverage);
			
			$('#endCoverageText').text(strEndCoverage);
		}
	},
	
	lastDayOfMonth : function( year, month ) {
		return new Date((new Date(year, month, 1))-1);
	},
	
	getMonthName : function(month) {
		var monthNames = [
			this.resources["ffe.ee.shared.dropdown.relation.january"],
			this.resources["ffe.ee.shared.dropdown.relation.february"],
			this.resources["ffe.ee.shared.dropdown.relation.march"],
			this.resources["ffe.ee.shared.dropdown.relation.april"],
			this.resources["ffe.ee.shared.dropdown.relation.may"],
			this.resources["ffe.ee.shared.dropdown.relation.june"], 
			this.resources["ffe.ee.shared.dropdown.relation.july"],
			this.resources["ffe.ee.shared.dropdown.relation.august"],
			this.resources["ffe.ee.shared.dropdown.relation.september"],
			this.resources["ffe.ee.shared.dropdown.relation.october"],
			this.resources["ffe.ee.shared.dropdown.relation.november"],
			this.resources["ffe.ee.shared.dropdown.relation.december"]
		];
		
		var monthNumber = month;
		return monthNames[parseInt(monthNumber,10)-1];
	},
	
	concatNamesTogether : function( members ) {
		var label = "";
		
		for(var x = 0; x < members.length; x++) {
			label += members[x];
			if(members.length > 1) {
				if(members.length > 2) {
					if(x === members.length - 2) {
						label += " and ";
					}
					else if(x !== members.length - 1) {
						label += ", ";
					}
				}
				else if(x === 0) {
					label += " and ";
				}
			}
		}
		return label;
	},
	
	terminatePlans : function() {
		blockUIForProfile();
		this.setTerminatePlansInfo();
		//this.terminatePlansModel.set({'applicationID' : myAccountAppID});
		this.terminatePlansModel.save(null,{
			success : function(model, response) {
				$.unblockUI();
				console.log(response);
				console.log("successful terminatPlans");
			},
			error : function(model, response) {
				$.unblockUI();
				console.log(response);
				console.log("error in terminatPlans");
			}
		});
	},
	
	setTerminatePlansInfo : function () {
		var applicationID = myAccountAppID,
			terminatePlanInfo = [],
			enrolledPlanList = this.accountEnrolledPlansCollection;
		
		if(enrolledPlanList.models.length > 0) {
			for(var i = 0; i < enrolledPlanList.models.length; i++) {
				var terminatePlanModel = {
						"applicationID" : "",
						"planID" : "",
						"terminationDate" : "",
						"reason" : "",
						"policyCreationDate" : "",
						"policyStartDate" : ""
				};
				terminatePlanModel.applicationID = applicationID;
				terminatePlanModel.terminationDate = this.terminateDate;
				terminatePlanModel.planID = enrolledPlanList.models[i].planId;
				terminatePlanModel.policyStartDate = enrolledPlanList.models[i].policyStartDate;
				terminatePlanModel.policyCreationDate = enrolledPlanList.models[i].policyCreationDate;
				terminatePlanModel.reason = '14';
				
				terminatePlanInfo.push(terminatePlanModel);
			}
			this.terminatePlansModel.set({"terminatePlans" : terminatePlanInfo});
		}
	},
	
	initTerminateEmployerShopEnrollment : function() {
		this.$el.empty();
		this.$el.append(this.terminateCoverageEmployerTemplate());

		this.$el.dialog({
			autoOpen: false,
			resizable: false,
			width: 780,
			height: 525,
			modal: true,
			descriptionId: this.resources['ffe.ee.myAccount.dynamicallyLoadedPage'],
			title: this.resources['ffe.ee.myAccount.coverage.terminate.modal.title']
		});
		
		$('input', '#accountCoverageTerminateModal').customInput();
		this.$el.dialog("open");
		this.close();
	},
	
	//terminateEmployerShopEnrollment : function() {
	//	this.$el.dialog("close");
	//},
	
	cancelModalterminate : function() {
		this.$el.dialog("close");
		this.$el.dialog('destroy');
	},
	
	enableTerminate : function() {
		var acknowledgement = $('#terminateAcknowledgement');
		
		if(acknowledgement.is(':checked')) {
			$('#confirmTerminateButton', '#coverageTerminateModal').attr('disabled', false);
			$('#confirmTerminateButton', '#coverageTerminateModal').addClass('btn-warning');
		}
		else {
			$('#confirmTerminateButton', '#coverageTerminateModal').attr('disabled', true);
			$('#confirmTerminateButton', '#coverageTerminateModal').removeClass('btn-warning');
		}
	},
	
	close : function() {
		var $this = this;
		
		this.$el.parent().find('.icon-circle_remove').on('click', function() {
			$this.$el.dialog('destroy');
		});
	}
});
var myAccountCoverageTerminateModalBBView = new myAccount_CoverageTerminateModalBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_AddSecondaryContactModalBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#addSecondaryContactModalContainer"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	secondaryContactModalTemplate : _.template($('#addSecondaryContactModalTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'cancel', 'save','initializeSecondaryContactModal',
				'toNextStep','toPreviousStep','showAddAddress','hideAddAddress');
		
		this.model.bind('initializeSecondaryContactModal', this.initializeSecondaryContactModal);

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click #cancel" : "cancel",
		"click #save" : "save",
		"click .modal-next" : "toNextStep",
		"click .modal-previous" : "toPreviousStep",
		"click #addAddressSecContact" : "showAddAddress",
		"click #secContactAddress" : "hideAddAddress"
	},
	
	render : function() {
		this.refreshTemplate();	
		//Backbone.ModelBinding.bind(this);
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		$('#addSecondaryContactModalContainer').empty();
		
	},
	initializeSecondaryContactModal : function() {
		//append all necessary templates
		$('#addSecondaryContactModalContainer').empty();
		$('#addSecondaryContactModalContainer').append(this.secondaryContactModalTemplate({
			"authorizedName" : "Jane Smith " 
		}));
		
		//call common modal initialize method
      initializeDialog('addSecondaryContactModalContainer', this.resources['ffe.ee.myAccount.dynamicallyLoadedPage'], this.resources['ffe.ee.myAccount.accountSettings.addSecContact']);
		
		$('#addSecondaryContactModalContainer').dialog("open");
	
	},
	toNextStep : function () {
		var modalSteps = $('.modalStep').length;
				
		if (currentStep === modalSteps){
			currentStep = 1;
		} 
		else {
			currentStep++;
		}
		setmodalNav("modalStep" + (currentStep));
		$('.activeModalStep').removeClass('activeModalStep');
		$('#secContactStep' + currentStep).addClass('activeModalStep');
	},
	toPreviousStep : function () {
		currentStep--;
		$('.activeModalStep').removeClass('activeModalStep');
		$('#secContactStep' + currentStep).addClass('activeModalStep');
		setmodalNav("modalStep" + (currentStep));
	},
	
	showAddAddress : function(){
		
		$('#addNewAddress').show();
	},
	
	hideAddAddress : function(){
		
		$('#addNewAddress').hide();
	},
	
	cancel : function(event){
		window.location.href = "/"+eePath+"";
	},	

	save : function() {
		if (this.model.isValid()) {
			this.model.save(null, {
				success : function(model, response) {
					console.log("successful save");
				},
				error : function(model, response) {
					console.log("error in save");
				}
			});
		}
	}
	
});
var myAccountAddSecondaryContactModalBBView = new MyAccount_AddSecondaryContactModalBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_AddEmployeeModalBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#addEmployeeModal"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	template : _.template($('#addEmployeeModalTemplate').html()),
	addEmployeeInfoTemplate : _.template($('#addEmployeeInfoTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,
	
	numberOfEmployees : 0,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'cancel', 'save', 'addEmployeeUpload', 'addEmployeeManually',
					'incrementEmployees', 'decrementEmployees', 'closeEmployeeModal', 'secondStepAddEmployee',
					'incertAddEmployeeTemplate');
		
		this.model.bind('openAddEmployeeModal', this.refreshTemplate);
		
		// Custom validation handlers could be added here
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .goToStepTwo" : "secondStepAddEmployee",
		"click .closeEmployeeModal" : "closeEmployeeModal",
		"click .icon-circle_plus" : "incrementEmployees",
		"click .icon-circle_minus" : "decrementEmployees",
		"click .manualAddEmployee" : "incertAddEmployeeTemplate",
		"click #cancel" : "cancel",
		"click #save" : "save"
	},
	
	render : function() {
		this.refreshTemplate();	
		//Backbone.ModelBinding.bind(this);
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.template());
		
		this.$el.dialog({
			autoOpen: false,
			resizable: false,
			width: 780,
			height: 525,
			modal: true,
			descriptionId: this.resources['ffe.ee.myAccount.dynamicallyLoadedPage'],
			title: ""
		});
		//$('#authorize-confirm').customInput();
		this.$el.dialog('open');
	},
	
	closeEmployeeModal : function() {
		employerAddEmployeeState.resetTotalEmployees();
		this.$el.dialog('close');
	},
	
	secondStepAddEmployee : function() {
		if($('#addEmployeeUpload').is(':checked')) {
			this.addEmployeeUpload();
		}
		else if($('#addEmployeeManually').is(':checked')) {
			this.addEmployeeManually();
		}
	},
	
	addEmployeeUpload : function() {
		$('#uploadOrManually').hide();
		$('#addEmployeeUploadArea').show();
	},
	
	addEmployeeManually : function() {
		$('#addEmployeeManualArea').show();
		$('.goToStepTwo', '#addEmployeeModal').hide();
		
		$('.manualAddEmployee', '#addEmployeeModal').show();
	},
	
	incrementEmployees : function() {
		var input = $('#employeeCounter');
		input = input.val((parseInt(input.val(),10)+1));
	},
	
	decrementEmployees : function() {
		var input = $('#employeeCounter');
		if(input.val() > 0) {
			input = input.val((parseInt(input.val(),10)-1));
		}
	},
	
	incertAddEmployeeTemplate : function() {
		var index = parseInt($('#employeeCounter').val(), 10);
		employerAddEmployeeState.setTotalEmployees(index);
		$('#uploadOrManually').parent().hide();
		$('#addEmployeeManualArea').hide();
		$('#addEmployeeInfoArea').show();
		$('#addEmployeeInfoArea').empty();
		
		if(!employerAddEmployeeState.atEnd()) {
			$('#addEmployeeInfoArea').append(this.addEmployeeInfoTemplate({
				'index' : employerAddEmployeeState.getIndex()
			}));
			employerAddEmployeeState.incrementIndex();
		}
		else {
			$('#confirmEmployeesAdded').show();
		}
	},
	
	cancel : function() {
		window.location.href = "/"+eePath+"";
	},

	save : function() {
		if (this.model.isValid()) {
			this.model.save(null, {
				success : function(model, response) {
					console.log("successful save");
				},
				error : function(model, response) {
					console.log("error in save");
				}
			});
		}
	}
	
});
var myAccountAddEmployeeModalBBView = new MyAccount_AddEmployeeModalBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_RemoveEmployeeModalBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#removeEmployeeModalContainer"),

	// The "model" attribute is the one that the model binding library uses
	model : myAccountAccountBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	removeEmployeeModalTemplate : _.template($('#removeEmployeeModalTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'closeModal', 'save','initializeRemoveEmployeeModal',
				'removeEmployee');
		
		this.model.bind('initializeRemoveEmployeeModal', this.initializeRemoveEmployeeModal);

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .modal-close" : "closeModal",
		"click .modal-next" : "removeEmployee",
		"click #save" : "save"
	},
	
	render : function() {
		this.refreshTemplate();	
		//Backbone.ModelBinding.bind(this);
	},
	
	refreshTemplate : function() {
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
	},
	initializeRemoveEmployeeModal : function() {
		//append all necessary templates
		$('#removeEmployeeModalContainer').empty();
		$('#removeEmployeeModalContainer').append(this.removeEmployeeModalTemplate({
			"employeeName" : "John Alex Johnson"
		}));
		
		//call common modal initialize method
      initializeDialog('removeEmployeeModalContainer', this.resources['ffe.ee.myAccount.dynamicallyLoadedPage'], this.resources['ffe.ee.myAccount.employee.removeEmployee']);
		
		$('#removeEmployeeModalContainer').dialog("open");
	
	},
	
	removeEmployee : function(){
		//TODO: add functionality to remove employee
	},
	
	closeModal : function() {
		$('#removeEmployeeModalContainer').empty();
		$('#removeEmployeeModalContainer').dialog("close");
	},

	save : function() {
		if (this.model.isValid()) {
			this.model.save(null, {
				success : function(model, response) {
					console.log("successful save");
				},
				error : function(model, response) {
					console.log("error in save");
				}
			});
		}
	}
	
});
var myAccountRemoveEmployeeModalBBView = new MyAccount_RemoveEmployeeModalBBView();

//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_IDProofContactInfoBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#idProofingContactInfo"),

	// The "model" attribute is the one that the model binding library uses
	//model : myAccountIDProofContactInfoBBModel,
	model : myAccountAccountBBModel,
	questions : myAccountIDProofQuestionsBBModel,
	userInfoModel : myAccountFetchUserInfoBBModel,
	getSystemUserModel :myAccountGetSystemUserBBModel,
	personEventModel : myAccountUpdatePersonEventBBModel,
	updateSystemInfo : myAccountUpdateSystemUserDetailsBBModel,
	liteAccountUpgradeModel : myAccountLiteAccountUpgradeBBModel,
	manualIDProofingModel : myAccountVerifyManualIDProofingBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	iDProofingContactInfoTemplate : _.template($('#iDProofingContactInfoTemplate').html()),
	iDProofingIdentityQuestionsOrganizationNameTemplate : _.template($('#iDProofingIdentityQuestionsOrganizationNameTemplate').html()),
	iDProofingContactInfoExperianTemplate : _.template($('#iDProofingContactInfoExperianTemplate').html()),
	iDProofingContactInfoFirstAttemptFailTemplate : _.template($('#iDProofingContactInfoFirstAttemptFailTemplate').html()),
	iDProofingContactInfoSpecMessageTemplate : _.template($('#iDProofingContactInfoSpecMessageTemplate').html()),
	suffixDropDownUSTemplate : _.template($('#suffixDropDownUSTemplate').html()),
	stateFullNameDropDownUSTemplateTemplate : _.template($('#stateFullNameDropDownUSTemplateTemplate').html()),
	phoneTypeDropDownTemplate : _.template($('#phoneTypeDropDownTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'iDProofStateField', 'iDProofSuffixField', 'iDProofPhoneTypeField',
			'maskFields', 'goToIDProofIdentityQuestions', 'handleEIDMResponse', 'initValidations', 'setliteAccountUpgradeModel',
			'code200', 'countIDProofingEIDMEventError', 'updateSystemUserIDProofingEventTwo', 'setPersonEventModel', 'appendExperianInfo',
			'callEIDMIDProofing', 'callManualIDProofing', 'setcallManualIDProofingModel', 'savePersonEvent', 
			'updateSystemUserIDProofingEventThree', 'countIDProofingFARSEventError', 'addEvent', 'setupdateSystemInfoModel',
			'saveUpdateSystemInfoModel', 'returnEventObject', 'updateSystemUserIDProofingEventTwoSuccess',
			'updateSystemUserIDProofingEventThreeSuccess', 'callGenerateNotice');
		
		this.model.bind('renderContactInfo', this.refreshTemplate);
		this.model.bind('renderContactInfoExp', this.appendExperianInfo);
		this.model.bind('saveUpdateSystemInfoModel', this.saveUpdateSystemInfoModel);
		this.model.bind('updateSystemUserIDProofingEventTwo', this.updateSystemUserIDProofingEventTwo);
		this.model.bind('updateSystemUserIDProofingEventTwoSuccess', this.updateSystemUserIDProofingEventTwoSuccess);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .goToIDProofIdentityQuestions" : "goToIDProofIdentityQuestions"
	},
	
	render : function() {
		
	},
	
	refreshTemplate : function() {
		var numberofAttempts = this.getSystemUserModel.get('systemUser'),
			isAuthRep = false,
			eidmAttemps,
			farsAttempts,
			length;
		
		var dob = $.trim(numberofAttempts.dateOfBirth);
		if(!isEmpty(dob)) {
			dob = dob.split('-');
			dob = dob[0]+'/'+dob[1]+'/'+dob[2];
		}
		
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.iDProofingContactInfoTemplate({
			'firstName' : $.trim(this.userInfoModel.get('firstName')),
			'middleName' : $.trim(this.userInfoModel.get('middleName')),
			'lastName' : $.trim(this.userInfoModel.get('lastName')),
			'DOB' : $.trim(dob),
			'SSN' : $.trim(this.userInfoModel.get('ssn')),
			'email' : $.trim(this.userInfoModel.get('email')),
			'addressLine1' : $.trim(this.userInfoModel.get('addressLine1')),
			'addressLine2' : $.trim(this.userInfoModel.get('addressLine2')),
			'city' : $.trim(this.userInfoModel.get('city')),
			'zipCode' : $.trim(this.userInfoModel.get('zipCode')),
			'phone' : $.trim(this.userInfoModel.get('phoneNumber')),
			'phoneExt' : $.trim(this.userInfoModel.get('phoneNumberExt'))
		}));
		
		this.iDProofStateField();
		this.iDProofSuffixField();
		this.iDProofPhoneTypeField();
		this.maskFields();
		this.initValidations();
		
		if(isAuthRep) {
			$('#authorizedRepOrganizationName').append(this.iDProofingIdentityQuestionsOrganizationNameTemplate());
		}
		
		if(numberofAttempts.personIDProofingEvent.length > 0) {
			length = numberofAttempts.personIDProofingEvent.length-1;
			
			eidmAttemps = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '2', 'proofingEventSuccessIndicator');
			farsAttempts = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '3', 'proofingEventSuccessIndicator');
			
			//last event should be the newest event
			numberofAttempts.personIDProofingEvent = numberofAttempts.personIDProofingEvent.sort(function() {
				return numberofAttempts.personIDProofingEvent[0].proofingEventDate-numberofAttempts.personIDProofingEvent[length].proofingEventDate;
			});
			
			if(eidmAttemps === 1 && farsAttempts === 0) {
				$('.pg-idproofing', '#idProofingContactInfo').eq(0)
					.prepend(this.iDProofingContactInfoFirstAttemptFailTemplate());
			}
			else if(eidmAttemps === 2 && farsAttempts === 0) {
				$('.pg-idproofing', '#idProofingContactInfo').eq(0)
					.prepend(this.iDProofingContactInfoExperianTemplate());
			}
			else if (eidmAttemps === 2 && farsAttempts === 1) {
				$('.pg-idproofing', '#idProofingContactInfo').eq(0)
					.prepend(this.iDProofingContactInfoExperianTemplate());
			}else if(eidmAttemps === 2 && farsAttempts === 2) {
				$('.pg-idproofing', '#idProofingContactInfo').eq(0)
					.prepend(this.iDProofingContactInfoExperianTemplate());
			}
		}
	},
	
	iDProofStateField : function() {
		var stateLiveIn = this.userInfoModel.get('state');
		
		$('#iDProofStateArea').append(this.stateFullNameDropDownUSTemplateTemplate({
			"idToUse" : "iDProofState",
			"forToUse" : "iDProofState",
			"labelToUse" : this.resources['ffe.ee.shared.label.state'] ,
			"nameToUse" : null,
			"isRequired" : false
		}));
		
		if(!isEmpty(stateLiveIn)) {
			$('#iDProofState').val($.trim(stateLiveIn));
		}
		$('#iDProofState').attr('data-validate', 'notBlank');
	},
	
	iDProofSuffixField : function() {
		var suffix = this.userInfoModel.get('suffix');
		$('#iDProofSuffixArea').append(this.suffixDropDownUSTemplate({
			'idToUse' : 'iDProofSuffix',
			'labelToUse' : this.resources['ffe.ee.myAccount.label.suffix']+" "+'<span class="instructionalText">'+ this.resources['ffe.ee.myAccount.label.optional']+'</span>',
			'forToUse' : 'iDProofSuffix',
			'isRequired' : false,
			'nameToUse' : null
		}));
		
		if(!isEmpty(suffix)) {
			$('#iDProofSuffix').val($.trim(suffix));
		}
	},
	
	iDProofPhoneTypeField : function() {
		$('#iDProofPhoneTypeArea').append(this.phoneTypeDropDownTemplate({
			'idToUse' : 'iDProofPhoneType',
			'labelToUse': this.resources['ffe.ee.myAccount.idProofing.contact.label.phoneType']+" "+'<span class="instructionalText">'+ this.resources['ffe.ee.myAccount.label.optional']+'</span>',
			'forToUse' : 'iDProofPhoneType',
			'isRequired' : false,			
			'nameToUse' : null,
			'hideColon' : true
		}));
	},
	
	maskFields : function() {
		datePickerController.createDatePicker({
			// Associate the text input to a MM/DD/YYYY date format
			formElements: { "iDProofDOB": "%m/%d/%Y" }
        });
		$('#iDProofDOB').mask("99/99/9999");
		$('#iDProofSSN').mask("999-99-9999");
		$('#iDProofZipCode').mask("99999-9999");
		$('#iDProofPhone').mask("9999999999");
	},
	
	goToIDProofIdentityQuestions : function() {
		var $this = this,
			numberofAttempts = this.getSystemUserModel.get('systemUser');
		var eidmAttemps = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '2', 'proofingEventSuccessIndicator'),
			farsAttempts = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '3', 'proofingEventSuccessIndicator');
		
		blockUIForProfile();
		if(eidmAttemps === 2 && farsAttempts < 2) {
			this.callManualIDProofing();
		}
		else if (eidmAttemps < 2 && farsAttempts === 0) {
			this.callEIDMIDProofing();
		}
	},
	
	callEIDMIDProofing : function() {
		var theResponse,
			$this = this;
		
		this.setupdateSystemInfoModel();
		this.setliteAccountUpgradeModel();
		this.liteAccountUpgradeModel.save(null, {
			success : function(model, response) {
				$.unblockUI();
				if(response.errors[0].errorType === '200') {
					$this.code200(response);
				}
				else {
					$this.handleEIDMResponse(response);
				}
			},
			error : function(model, response) {
				$.unblockUI();
				try {
					theResponse = $.parseJSON(response.responseText);
					$this.handleEIDMResponse(theResponse); //will handle T100 timeout
				}
				catch(e) {
					$this.countIDProofingEIDMEventError();
				}
			}
		});
	},
	
	callManualIDProofing : function() {
		var name,
			firstName,
			theResponse,
			$this = this;
		
		this.setupdateSystemInfoModel();
		this.setcallManualIDProofingModel();
		
		name = $.trim(this.manualIDProofingModel.get('firstName')+' '+this.manualIDProofingModel.get('lastName'));
		firstName = $.trim(this.manualIDProofingModel.get('firstName'));
		this.manualIDProofingModel.save(null, {
			success : function(model, response) {
				$.unblockUI();
				if(response.errors[0].errorType === '200') {
					if(!isEmpty(name)) {
						$('#usersName').eq(0).text(name);
					}
					if(!isEmpty(firstName)) {
						$('#headerUserName').eq(0).text(firstName);
					}
					$this.model.trigger('updateSystemUserIDProofingEventThreeSuccess');
					$this.model.trigger('renderIDProofVerifiedResults');
					$this.model.trigger('savePersonFromEIDM');
				}
				else {
					$this.handleFARSResponse(response);
				}
			},
			error : function(model, response) {
				console.log(response);
				$.unblockUI();
				try {
					theResponse = $.parseJSON(response.responseText);
					$this.handleFARSResponse(theResponse); //will handle T100 timeout
				}
				catch(e) {
					$this.countIDProofingFARSEventError();
				}
			}
		});
	},
	
	handleEIDMResponse : function( response ) {
		var code,
			regex = new RegExp('^[Ee][0-9]{3}');
		
		if(regex.test(response.errors[0].errorType)) {
			code = response.errors[0].errorType;
		}
		else if(regex.test(response.errors[0].errorMessage)) {
			code = response.errors[0].errorMessage;
		}
		
		$.unblockUI();
		console.log(code);
		switch(code) {
			case '200':
				this.questions.attributes = response;
				router.navigate("IDProofingIdentityQuestions", {trigger: true});
				this.model.trigger('renderIDProofIdentityQuestions');
				this.updateSystemUserIDProofingEventTwoSuccess();
				break;
			case 'E103': //failed Experian
				this.countIDProofingEIDMEventError();
				break;
			case 'E100': //failed Experian
				this.countIDProofingEIDMEventError();
				break;
			case 'E101': //failed Experian
				this.countIDProofingEIDMEventError();
				break;
			/* case 'E124': //SSN Exists //There is a problem in verifiying your identity.  Please contact the Help Desk at XXX-XXX-XXXX
				this.countIDProofingEIDMEventError();
				break;
			case 'E537': //Email is not unique
				this.countIDProofingEIDMEventError();
				break;
			case 'E239': //exceeded allowed id proofing attempts
				this.countIDProofingEIDMEventError();
				break; */
			default://genericError/specificError has occured
				//this.countIDProofingEIDMEventError();
				specificUpgradeError(code, this.resources);
				break;
		}
	},
	
	handleFARSResponse : function( response ) {
		var code,
			regex = new RegExp('^[Ee][0-9]{3}');
		
		if(regex.test(response.errors[0].errorType)) {
			code = response.errors[0].errorType;
		}
		else if(regex.test(response.errors[0].errorMessage)) {
			code = response.errors[0].errorMessage;
		}
		
		console.log(code);
		switch(code) {
			case 'E547': //user data mismatch
				this.countIDProofingFARSEventError();
				break;
			case 'E586': //user data from FARS incomplete
				this.countIDProofingFARSEventError();
				break;
			case 'E543': //User failed the manual ID proofing with FARS 
				this.countIDProofingFARSEventError();
				break;
			case 'E544': //User response contained Precise ID tags 9001, 9002, 9013, RF1, or RF4
				this.countIDProofingFARSEventError();
				break;
			case 'E545': //unexpected error
				this.countIDProofingFARSEventError();
				break;
			case 'E546': //the reference id is not found in Experian
				this.countIDProofingFARSEventError();
				break;
			/* case 'E542'://reference id does not exist
				this.countIDProofingFARSEventError();
				break; */
			default://genericError/specificError has occured
				//this.countIDProofingFARSEventError();
				specificUpgradeError(code, this.resources);
				break;
		}
	},
	
	initValidations : function() {
		var idProofingContactInfo,
			eventTrigger = $(".goToIDProofIdentityQuestions", '#idProofingContactInfo'),
			formContainer = $('.pg-idproofing', '#idProofingContactInfo');
			
		if(formContainer.length > 0) {
			//FFM.FormValidator.currentLocale = locale;
			idProofingContactInfo = new FFM.FormValidator(formContainer, eventTrigger);
			idProofingContactInfo.setRule("notBlank", ["^(?!\\s*$).+", this.resources['ffe.ee.shared.validations.notBlank']]);
		}
	},
	
	setliteAccountUpgradeModel : function() {
		var zipExt = '',
			zipCode = '',
			language = '',
			dob =  $.trim($('#iDProofDOB').val()),
			zip = $.trim($('#iDProofZipCode').val());
			
		if(!isEmpty(zip)) {
			zip = zip.split('-');
			zipCode = $.trim(zip[0]);
			zipExt = $.trim(zip[1]);
		}
		if(!isEmpty(dob)) {
			dob = dob.split('/');
			dob = dob[2]+'-'+dob[0]+'-'+dob[1];
		}
		if(locale === 'en_US') {
			language = 'en';
		}
		else if(locale === 'es_MX') {
			language = 'es';
		}
		
		this.liteAccountUpgradeModel.set({'firstName' : $.trim($('#iDProofFirstName').val())});
		this.liteAccountUpgradeModel.set({'lastName' : $.trim($('#iDProofLastName').val())});
		this.liteAccountUpgradeModel.set({'middleName' : $.trim($('#iDProofMiddleName').val())});
		this.liteAccountUpgradeModel.set({'suffix' : $.trim($('#iDProofSuffix').val())});
		this.liteAccountUpgradeModel.set({'email' : $.trim(this.userInfoModel.get('email'))});
		this.liteAccountUpgradeModel.set({'userName' : $.trim(ffeUserName)});
		this.liteAccountUpgradeModel.set({'dateOfBirth' : dob});
		this.liteAccountUpgradeModel.set({'addressLine1' : $.trim($('#iDProofAddressLine1').val())});
		this.liteAccountUpgradeModel.set({'addressLine2' : $.trim($('#iDProofAddressLine2').val())});
		this.liteAccountUpgradeModel.set({'city' : $.trim($('#iDProofCity').val())});
		this.liteAccountUpgradeModel.set({'state' : $.trim($('#iDProofState').val())});
		this.liteAccountUpgradeModel.set({'zipCode' : zipCode});
		this.liteAccountUpgradeModel.set({'zipcodeExtension' : zipExt});
		this.liteAccountUpgradeModel.set({'phoneNumber' : $.trim($('#iDProofPhone').val())});
		this.liteAccountUpgradeModel.set({'phoneNumberExt' : $.trim($('#iDProofPhoneExt').val())});
		this.liteAccountUpgradeModel.set({'ssn' : $.trim($('#iDProofSSN').val().replace(/-/g, ""))});
		this.liteAccountUpgradeModel.set({'userRole' : $.trim('FFM_Consumer')});
		this.liteAccountUpgradeModel.set({'applicationID' : $.trim('FFM_Webservice')});
		this.liteAccountUpgradeModel.set({'language' : $.trim(language)});
		
		if(this.liteAccountUpgradeModel.attributes.hasOwnProperty('errors')) {
			delete this.liteAccountUpgradeModel.attributes.errors;
		}
		if(this.liteAccountUpgradeModel.attributes.hasOwnProperty('outOfWalletQuestionsAndAnswers')) {
			delete this.liteAccountUpgradeModel.attributes.outOfWalletQuestionsAndAnswers;
		}
		if(this.liteAccountUpgradeModel.attributes.hasOwnProperty('eidmSessionId')) {
			delete this.liteAccountUpgradeModel.attributes.eidmSessionId;
		}
		if(this.liteAccountUpgradeModel.attributes.hasOwnProperty('referenceId')) {
			delete this.liteAccountUpgradeModel.attributes.referenceId;
		}
	},
	
	setcallManualIDProofingModel : function() {
		var zipExt = '',
			zipCode = '',
			language = '',
			dob =  $.trim($('#iDProofDOB').val()),
			zip = $.trim($('#iDProofZipCode').val());
			
		if(!isEmpty(zip)) {
			zip = zip.split('-');
			zipCode = $.trim(zip[0]);
			zipExt = $.trim(zip[1]);
		}
		if(!isEmpty(dob)) {
			dob = dob.split('/');
			dob = dob[2]+'-'+dob[0]+'-'+dob[1];
		}
		if(locale === 'en_US') {
			language = 'en';
		}
		else if(locale === 'es_MX') {
			language = 'es';
		}
		
		this.manualIDProofingModel.set({'firstName' : $.trim($('#iDProofFirstName').val())});
		this.manualIDProofingModel.set({'lastName' : $.trim($('#iDProofLastName').val())});
		this.manualIDProofingModel.set({'middleName' : $.trim($('#iDProofMiddleName').val())});
		this.manualIDProofingModel.set({'suffix' : $.trim($('#iDProofSuffix').val().replace(/-/g, ""))});
		this.manualIDProofingModel.set({'email' : $.trim(this.userInfoModel.get('email'))});
		this.manualIDProofingModel.set({'userName' : $.trim(ffeUserName)});
		this.manualIDProofingModel.set({'dateOfBirth' : dob});
		this.manualIDProofingModel.set({'addressLine1' : $.trim($('#iDProofAddressLine1').val())});
		this.manualIDProofingModel.set({'addressLine2' : $.trim($('#iDProofAddressLine2').val())});
		this.manualIDProofingModel.set({'city' : $.trim($('#iDProofCity').val())});
		this.manualIDProofingModel.set({'state' : $.trim($('#iDProofState').val())});
		this.manualIDProofingModel.set({'zipCode' : zipCode});
		this.manualIDProofingModel.set({'zipcodeExtension' : zipExt});
		this.manualIDProofingModel.set({'phoneNumber' : $.trim($('#iDProofPhone').val())});
		this.manualIDProofingModel.set({'phoneNumberExt' : $.trim($('#iDProofPhoneExt').val())});
		this.manualIDProofingModel.set({'ssn' : $.trim($('#iDProofSSN').val().replace(/-/g, ""))});
		this.manualIDProofingModel.set({'userRole' : $.trim('FFM_Consumer')});
		this.manualIDProofingModel.set({'applicationId' : $.trim('FFM_Webservice')});
		this.manualIDProofingModel.set({'language' : $.trim(language)});
		
		if(this.manualIDProofingModel.attributes.hasOwnProperty('errors')) {
			delete this.manualIDProofingModel.attributes.errors;
		}
		if(this.manualIDProofingModel.attributes.hasOwnProperty('outOfWalletQuestionsAndAnswers')) {
			delete this.manualIDProofingModel.attributes.outOfWalletQuestionsAndAnswers;
		}
		if(this.manualIDProofingModel.attributes.hasOwnProperty('eidmSessionId')) {
			delete this.manualIDProofingModel.attributes.eidmSessionId;
		}
		if(this.manualIDProofingModel.attributes.hasOwnProperty('referenceId')) {
			delete this.manualIDProofingModel.attributes.referenceId;
		}
	},
		
	code200 : function( response ) {
		router.navigate("IDProofingIdentityQuestions", {trigger: true});
		$.unblockUI();
		this.questions.attributes = response;
		this.model.trigger('renderIDProofIdentityQuestions');
	},
	
	appendExperianInfo : function() {
		$('.pg-idproofing', '#idProofingContactInfo').eq(0).find('.alert').remove();
		$('.pg-idproofing', '#idProofingContactInfo').eq(0)
			.prepend(this.iDProofingContactInfoExperianTemplate());
	},
	
	countIDProofingEIDMEventError : function() {
		this.updateSystemUserIDProofingEventTwo();
		var numberofAttempts = this.getSystemUserModel.get('systemUser');
		var farsAttempts = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '3', 'proofingEventSuccessIndicator');
		var eidmAttemps = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '2', 'proofingEventSuccessIndicator');
		
		if(eidmAttemps === 1) {
			$('.pg-idproofing', '#idProofingContactInfo').eq(0)
				.prepend(this.iDProofingContactInfoFirstAttemptFailTemplate());
			$('#idProofingContactInfo h1').focus();
		}
		else if(eidmAttemps === 2) {
			this.model.trigger('renderIDProofNotVerifiedResults');
		}
	},
	
	countIDProofingFARSEventError : function() {
		this.updateSystemUserIDProofingEventThree();
		var numberofAttempts = this.getSystemUserModel.get('systemUser');
		var farsAttempts = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '3', 'proofingEventSuccessIndicator');
		var eidmAttemps = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '2', 'proofingEventSuccessIndicator');
		
		if(farsAttempts === 1) {
			this.model.trigger('renderIDProofNotVerifiedResubmitResults');
			$.unblockUI();
		}
		else if(farsAttempts === 2) {
			this.model.trigger('renderIDProofNotVerifiedUploadDocsResults');
			$.unblockUI();
		}
	},
	
	callGenerateNotice : function() {
		$.ajax({
			type: "POST",
			url : environment+"/ee-rest/auth/global/"+locale+"/NoticeManagement/GenerateRIDPFailureNotice",
			success : function() {
				$.unblockUI();
			},
			error : function() {
				$.unblockUI();
			}
		});
	},
	
	updateSystemUserIDProofingEventTwo : function() {
		var obj = this.returnEventObject('2', false, false);
		this.addEvent(obj);
		this.setPersonEventModel(obj);
		this.savePersonEvent();
	},
	
	updateSystemUserIDProofingEventTwoSuccess : function() {
		var obj = this.returnEventObject('2', true, false);
		this.addEvent(obj);
		this.setPersonEventModel(obj);
		this.savePersonEvent();
	},

	updateSystemUserIDProofingEventThree : function() {
		var obj = this.returnEventObject('3', false, false);
		this.addEvent(obj);
		this.setPersonEventModel(obj);
		this.savePersonEvent();
	},
	
	updateSystemUserIDProofingEventThreeSuccess : function() {
		var obj = this.returnEventObject('3', true, false);
		this.addEvent(obj);
		this.setPersonEventModel(obj);
		this.savePersonEvent();
	},
	
	returnEventObject : function( sourceType, successIndicator, esdEngagedIndicator ) {
		var object = {
			'sourceType':sourceType,
			'referenceId' : this.liteAccountUpgradeModel.get('referenceId'),
			'successIndicator' : successIndicator,
			'esdEngagedIndicator' : esdEngagedIndicator
		};
		return object;
	},
	
	savePersonEvent : function() {
		var $this = this,
			numberofAttempts = this.getSystemUserModel.get('systemUser');
		var farsAttempts = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '3', 'proofingEventSuccessIndicator'),
			eidmAttemps = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '2', 'proofingEventSuccessIndicator');
		
		blockUIForProfile();
		this.personEventModel.save(null, {
			success : function() {
				if(eidmAttemps === 2 && farsAttempts === 2) {
					$this.callGenerateNotice();
				}
				else {
					$.unblockUI();
				}
			}
		});
	},
	
	setPersonEventModel : function( eventType ) {
		var barcode= '',
			applicantInfo,
			date = new Date(),
			farsAttempts = '',
			dob = $.trim($('#iDProofDOB').val()),
			systemUser = this.getSystemUserModel.get('systemUser');
		
		farsAttempts = countIDProofingAttempts(systemUser.personIDProofingEvent, '3', 'proofingEventSuccessIndicator');
		if(!isEmpty(dob)) {
			dob = dob.split('/');
			dob = dob[2]+'-'+dob[0]+'-'+dob[1];
		}
		if(farsAttempts >= 2) {
			barcode = 'true';
		}
		else {
			barcode = '';
		}
		
		applicantInfo = idProofApplicantInfo();
		applicantInfo.applFirstName = $.trim($('#iDProofFirstName').val());
		applicantInfo.applMiddleName = $.trim($('#iDProofMiddleName').val());
		applicantInfo.applLastName = $.trim($('#iDProofLastName').val());
		applicantInfo.applSuffix = $.trim($('#iDProofSuffix').val());
		applicantInfo.applBirthDate = $.trim(dob);
		applicantInfo.applEmailAddress = $.trim(systemUser.emailAddress);
		applicantInfo.applFullNumberCode = $.trim($('#iDProofPhone').val());
		applicantInfo.applStreetName1 = $.trim($('#iDProofAddressLine1').val());
		applicantInfo.applStreetName2 = $.trim($('#iDProofAddressLine2').val());
		applicantInfo.applCityName = $.trim($('#iDProofCity').val());
		applicantInfo.applStateCode = $.trim($('#iDProofState').val());
		applicantInfo.applZipPlus4Code = $.trim($('#iDProofZipCode').val());
		applicantInfo.applSsnNumber = $.trim($('#iDProofSSN').val().replace(/-/g, ""));
		applicantInfo.applPersonIdentifier = $.trim(systemUser.personIdentifier);
		
		this.personEventModel.set({'proofingEventRidpSessionIdentifier' : $.trim(eventType.referenceId)});
		this.personEventModel.set({'proofingEventSuccessIndicator' : $.trim(eventType.successIndicator)});
		this.personEventModel.set({'proofingEsdEngagedIndicator' : $.trim(eventType.esdEngagedIndicator)});
		this.personEventModel.set({'personIdentityProofingEventSourceTypeCode' : $.trim(eventType.sourceType)});
		this.personEventModel.set({'proofingEventBarcodeIdentifier' : barcode});
		this.personEventModel.set({'proofingEventDate' : date});
		this.personEventModel.set({'personIdentifier' : $.trim(systemUser.personIdentifier)});
		this.personEventModel.set({'systemUserIdentifier' : $.trim(systemUser.systemUserIdentifier)});
		this.personEventModel.set({'systemUserLoginName' : $.trim(ffeUserName)});
		this.personEventModel.set({'applicantPersonInfo' : applicantInfo});
	},
	
	addEvent : function( eventType ) {
		var idEvent = updatePersonIDProofingEvent();
		
		idEvent.personIdentityProofingEventSourceTypeCode = eventType.sourceType;
		idEvent.proofingEventRidpSessionIdentifier = eventType.referenceId;
		idEvent.proofingEventSuccessIndicator = eventType.successIndicator;
		idEvent.proofingEsdEngagedIndicator = eventType.esdEngagedIndicator;
		this.getSystemUserModel.get('systemUser').personIDProofingEvent.push(idEvent);
	},
	
	setupdateSystemInfoModel : function() {
		this.updateSystemInfo.set({'systemUserLoginName' : $.trim(ffeUserName)});
	},
	
	saveUpdateSystemInfoModel : function() {
		var $this = this;
		blockUIForProfile();
		this.updateSystemInfo.save(null, {
			success : function(model, response) {
				$this.getSystemUserModel.fetch({
					success : function(model, response) {
						$.unblockUI();
					},
					error : function(model, response) {
						$.unblockUI();
					}
				});
			},
			error : function(model, response) {
				$.unblockUI();
			}
		});
	}
});
var myAccountIDProofContactInfoBBView = new MyAccount_IDProofContactInfoBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_IDProofGetStartedBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#idProofingGetStarted"),

	// The "model" attribute is the one that the model binding library uses
	//model : myAccountIDProofGetStartedBBModel,
	model : myAccountAccountBBModel,
	userInfoModel : myAccountFetchUserInfoBBModel,
	getSystemUserModel :myAccountGetSystemUserBBModel,
	liteAccountUpgradeModel : myAccountLiteAccountUpgradeBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	iDProofingGetStartedTemplate : _.template($('#iDProofingGetStartedTemplate').html()),
	iDProofingGetStartedAttemptsLeftTemplate : _.template($('#iDProofingGetStartedAttemptsLeftTemplate').html()),
	iDProofingGetStartedNoAttemptsTemplate : _.template($('#iDProofingGetStartedNoAttemptsTemplate').html()),
	iDProofingGetStartedAuthorizedRepTemplate : _.template($('#iDProofingGetStartedAuthorizedRepTemplate').html()),
	iDProofingToLandingPageTemplate : _.template($('#iDProofingToLandingPageTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'goToIDProofContactInfo', 'fetchUserInfoModel', 'gotToApp',
			'goToUpload', 'displayHeaderItems', 'validations', 'englishValidations');
		
		this.model.bind('renderIDProofGetStarted', this.refreshTemplate);
		this.model.bind('displayHeaderItems', this.displayHeaderItems);
		this.validations();
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .goToIDProofContactInfo" : "goToIDProofContactInfo",
		"click .goToUpload" : "goToUpload",
		"click .gotToApp" : "gotToApp"
	},
	
	render : function() {
		var location = window.location.href.slice(window.location.href.lastIndexOf('#')+1);
		if(location.indexOf('IDProofing')!== -1) 
		{
			//hide the nav bar and state (would be global otherwise)
			$('#myAccountRegularNav').hide();
			$('.stateName').hide();
			this.fetchUserInfoModel();
			this.displayHeaderItems();
		}
	},
	
	refreshTemplate : function() {
		var length,
			isAuthUser = false,
			applications = this.getSystemUserModel.get('systemUser'),
			numberofAttempts = this.getSystemUserModel.get('systemUser'),
			location = window.location.href.slice(window.location.href.lastIndexOf('#')+1);
		//isAuthUser = this.getSystemUserModel.get('systemUser').isAuthorizedRep;
		var isUserIDProofed = isIDProofed(numberofAttempts, $.trim(ffeLOAUserLvl));
			
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		if(location === 'IDProofingGetStarted' ||
			location === 'IDProofingContactInfo' ||
			location === 'IDProofingIdentityQuestions') {
			
			length = numberofAttempts.personIDProofingEvent.length-1;
			applications = applications.exchangeUserInsuranceApp;
			
			eidmAttemps = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '2', 'proofingEventSuccessIndicator');
			farsAttempts = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '3', 'proofingEventSuccessIndicator');
						
			if(isUserIDProofed) {
				window.location.href = "/"+eePath+"/auth/global/"+locale+"/myProfile?to=settings";
			}
			else if(eidmAttemps === 0 && farsAttempts === 0) {
				router.navigate("IDProofingGetStarted", {trigger: true});
				this.$el.append(this.iDProofingGetStartedTemplate());
			}
			else if(eidmAttemps >= 2 && farsAttempts < 2) {
				if(applications.length > 0) {
					if(!isEmpty(applications[0].insuranceAppId)) {
						router.navigate("IDProofingGetStarted", {trigger: true});
						this.$el.append(this.iDProofingGetStartedAttemptsLeftTemplate());
					}
					else {
						this.model.trigger('renderIDProofNotVerifiedResults');
					}
				}
				else {
					this.model.trigger('renderIDProofNotVerifiedResults');
				}
			}
			else if(eidmAttemps < 2 && farsAttempts === 0) {
				if(applications.length > 0) {
					if(!isEmpty(applications[0].insuranceAppId)) {
						router.navigate("IDProofingGetStarted", {trigger: true});
						this.$el.append(this.iDProofingGetStartedAttemptsLeftTemplate());
					}
					else {
						router.navigate("IDProofingContactInfo", {trigger: true});
						this.model.trigger('renderContactInfo');
					}
				}
				else {
					router.navigate("IDProofingContactInfo", {trigger: true});
					this.model.trigger('renderContactInfo');
				}
			}
			else if(eidmAttemps >= 2 && farsAttempts >= 2) {
				if(applications.length > 0) {
					if(!isEmpty(applications[0].insuranceAppId)) {
						router.navigate("IDProofingGetStarted", {trigger: true});
						this.$el.append(this.iDProofingGetStartedNoAttemptsTemplate());
					}
					else {
						this.model.trigger('renderIDProofNotVerifiedUploadDocsResults');
					}
				}
				else {
					this.model.trigger('renderIDProofNotVerifiedUploadDocsResults');
				}
			}
			
			$('#usersName').eq(0).text(this.getSystemUserModel.get('systemUser').firstName+' '+this.getSystemUserModel.get('systemUser').lastName);
		}
		else if(location.indexOf('IDProofingResults')!== -1) {
			this.model.trigger('renderResults');
			$('#usersName').eq(0).text(this.getSystemUserModel.get('systemUser').firstName+' '+this.getSystemUserModel.get('systemUser').lastName);
		}
	},
	
	displayHeaderItems : function() {
		var usersName= '';
		usersName = this.getSystemUserModel.get('systemUser').firstName+' '+this.getSystemUserModel.get('systemUser').lastName;
		
		$('.stateBar').hide();
		$('#fixedElementSubNav').parent().hide();
		$('#fixedElementSubNav .subNavigationSection').eq(0).empty();
		$('#fixedElementSubNav .subNavigationSection').eq(1).empty();
		$('.stateBar').after(this.iDProofingToLandingPageTemplate());
		$('#profileBackButton').css('top', 'auto');
	},
	
	goToIDProofContactInfo : function() {
		router.navigate("IDProofingContactInfo", {trigger: true});
		this.model.trigger('renderContactInfo');
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('h1[tabindex=-1]').removeAttr('tabindex');
		$('#idProofingContactInfo h1').attr('tabindex', '-1').focus();
	},

	fetchUserInfoModel : function() {
		var $this = this;
		this.userInfoModel.fetch({
			success : function(model, response) {
				$this.model.trigger('renderContactInfo');
			},
			error : function(model, response) {
				console.log("error in save");
			}
		});
	},
		
	gotToApp : function() {
		var registeredState = this.getSystemUserModel.get('systemUser').registeredStateCode;
		window.location.href = "/"+eePath+"/auth/"+registeredState+"/"+locale+"/individualApplication";
	},
	
	goToUpload : function() {
		this.model.trigger('renderIDProofNotVerifiedUploadDocsResults');
	},
	
	validations : function() {
		this.englishValidations();
	},
	
	
	
	englishValidations : function() {
		var regularExpression = '',
			validationMessage = '',
			validationPrefix = this.resources['ffe.ee.myAccount.notValidError'];
			
		regularExpression = "^[a-zA-Z'\\-\\s]{1,20}$";
		validationMessage = validationPrefix+' '+this.resources['ffe.ee.myAccount.registration.firstName'];
		FFM.defaultValidatorRules.EIDMFirstName = [regularExpression, validationMessage];
		
		regularExpression = "^[a-zA-Z'\\-\\s]{1,25}$";
		validationMessage = validationPrefix+' '+this.resources['ffe.ee.myAccount.registration.middleName'];
		FFM.defaultValidatorRules.EIDMMiddleName = [regularExpression, validationMessage];

		regularExpression = "^[a-zA-Z'\\-\\s]{1,25}$";
		validationMessage = validationPrefix+' '+this.resources['ffe.ee.myAccount.registration.lastName'];
		FFM.defaultValidatorRules.EIDMLastName = [regularExpression, validationMessage];
		
		regularExpression = "^[a-zA-Z0-9._\\-,'\\s]*$";
		validationMessage = validationPrefix+' '+this.resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.line1'];
		FFM.defaultValidatorRules.EIDMAddressLine1 = [regularExpression, validationMessage];
		regularExpression = "^((?!(_|,|'|�)).)*$";
		FFM.defaultValidatorRules.noCommasAndOther1 = [regularExpression, validationMessage];

		regularExpression = "^[a-zA-Z0-9._\\-,'\\s]*$";
		validationMessage = validationPrefix+' '+this.resources['ffe.ee.myAccount.profile.profileLevel1US.homeAddress.line2'];
		FFM.defaultValidatorRules.EIDMAddressLine2 = [regularExpression, validationMessage];
		regularExpression = "^((?!(_|,|'|�)).)*$";
		FFM.defaultValidatorRules.noCommasAndOther2 = [regularExpression, validationMessage];

		regularExpression = "^[a-zA-Z \\-'\\s]{1,20}$";
		validationMessage = validationPrefix+' '+this.resources['ffe.ee.myAccount.label.city'];
		FFM.defaultValidatorRules.EIDMCity = [regularExpression, validationMessage];
		
		validationMessage = validationPrefix+' '+this.resources['ffe.ee.myAccount.label.zipCode'];
		FFM.defaultValidatorRules.zipCodeIDP[1] = validationMessage;
		
		FFM.defaultValidatorRules.notBlank = ["^(?!\\s*$).+", this.resources['ffe.ee.shared.validation.notBlank']];
	}
});
var myAccountIDProofGetStartedBBView = new MyAccount_IDProofGetStartedBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_IDProofIdentityQuestionsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#idProofingIdentityQuestions"),

	// The "model" attribute is the one that the model binding library uses
	//model : myAccountIDProofIdentityQuestionsBBModel,
	model : myAccountAccountBBModel,
	questions : myAccountIDProofQuestionsBBModel,
	userInfoModel : myAccountFetchUserInfoBBModel,
	getSystemUserModel :myAccountGetSystemUserBBModel,
	liteAccountUpgradeModel : myAccountLiteAccountUpgradeBBModel,
	submitQuestionsModel : myAccountSubmitOutofWalletAnswersBBModel,
	updatePersonFromEIDMModel : myAccountUpdatePersonFromEIDMBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	identityQuestionsTemplate : _.template($('#identityQuestionsTemplate').html()),
	iDProofingIdentityQuestionAreaTemplate : _.template($('#iDProofingIdentityQuestionAreaTemplate').html()),
	iDProofingIdentityQuestionsAnswerTemplate : _.template($('#iDProofingIdentityQuestionsAnswerTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'identityQuestions', 'identityQuestionsSecond', 'setSubmitQuestionsModel',
			'handleResponse', 'addEvent', 'countIDProofingEventError', 'idProofQuestionsSuccess', 'savePersonFromEIDM',
			'setPersonFromEIDM');
		
		this.model.bind('renderIDProofIdentityQuestions', this.refreshTemplate);
		this.model.bind('savePersonFromEIDM', this.savePersonFromEIDM);
		
		// Custom validation handlers could be added here

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .goToIDProofContactInfo" : "goToIDProofContactInfo",
		"click .goToIDProofResults" : "goToIDProofResults"
	},
	
	render : function() {
		this.refreshTemplate();	
	},
	
	refreshTemplate : function() {
		var $this = this;
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		setTimeout(function() {
			$this.$el.empty();
			if(true) {
				$this.identityQuestions();
			}
			else {
				$this.identityQuestionsSecond();
			}
		},250);
	},
	
	identityQuestions : function() {
		var questions = this.questions.get('outOfWalletQuestionsAndAnswers');
		this.$el.append(this.identityQuestionsTemplate({
			'h2Text': this.resources['ffe.ee.myAccount.idProofing.questions.description']
		}));
		
		
		$('#idquestionsSection').empty();
		//loop through questions
		if(!isEmpty(questions)) {
			for(var i = 0; i < questions.length; i++) {
				$('#idquestionsSection').append(this.iDProofingIdentityQuestionAreaTemplate({
					'index' : i,
					'question' : questions[i].question
				}));
				
				//loop through questions answers
				for(var j = 0; j < questions[i].answer.length; j++) {
					$('#questionsAnswerSection'+i).append(this.iDProofingIdentityQuestionsAnswerTemplate({
						'questionIndex' : i+'_'+j,
						'name' : i,
						'value' : (j+1),
						'valueToShow' : questions[i].answer[j]
					}));
				}
			}
		}
		$('input', '#idProofingIdentityQuestions').customInput();
		this.initValidations();
	},

	identityQuestionsSecond : function() {
		this.$el.append(this.identityQuestionsTemplate({
			'h2Text': this.resources['ffe.ee.myAccount.idProofing.questions.description']
		}));
		
		$('input', '#idProofingIdentityQuestions').customInput();
	},
	
	initValidations : function() {
		var idProofingIdentityQuestions,
			eventTrigger = $(".goToIDProofResults", '#idProofingIdentityQuestions'),
			formContainer = $('.page-content', '#idProofingIdentityQuestions');
			
		if(formContainer.length > 0) {
			//FFM.FormValidator.currentLocale = locale;
			idProofingIdentityQuestions = new FFM.FormValidator(formContainer, eventTrigger);
			idProofingIdentityQuestions.setRule("notBlank", ["^(?!\\s*$).+", this.resources['ffe.ee.shared.validations.notBlank']]);
		}
	},
	
	goToIDProofResults : function() {
		var theResponse,
			$this = this;
			
		blockUIForProfile();
		this.setSubmitQuestionsModel();
		this.submitQuestionsModel.save(null, {
			success : function(model, response) {
				$.unblockUI();
				$this.handleResponse(response);
			},
			error : function(model, response) {
				$.unblockUI();
				try{
					theResponse = $.parseJSON(response.responseText);
					$this.handleResponse(theResponse);
				}
				catch(e) {
					$this.countIDProofingEventError();
				}
			}
		});
	},
	
	handleResponse : function( response ) {
		var code,
			regex = new RegExp('^[Ee][0-9]{3}');
		
		if(regex.test(response.errors[0].errorType)) {
			code = response.errors[0].errorType;
		}
		else if(regex.test(response.errors[0].errorMessage)) {
			code = response.errors[0].errorMessage;
		}
		else if(response.errors[0].errorType === '200') {
			code = response.errors[0].errorType;
		}
		
		$.unblockUI();
		console.log(code);
		switch(code) {
			case '200':
				this.idProofQuestionsSuccess();
				break;
			case 'E101': //failed Experian
				this.countIDProofingEventError();
				break;
			default:
				router.navigate("IDProofingContactInfo", {trigger: true});
				specificUpgradeError(code, this.resources); //will handle T100 timeout
				break;
		}
	},
	
	idProofQuestionsSuccess : function() {
		var name = this.liteAccountUpgradeModel.get('firstName')+' '+this.liteAccountUpgradeModel.get('lastName'),
			firstName = this.liteAccountUpgradeModel.get('firstName');
		
		if(!isEmpty(name)) {
			$('#usersName').eq(0).text(name);
		}
		if(!isEmpty(name)) {
			$('#headerUserName').eq(0).text(firstName);
		}
		this.model.trigger('updateSystemUserIDProofingEventTwoSuccess');
		this.model.trigger('renderIDProofVerifiedResults');
		this.savePersonFromEIDM();
	},
	
	countIDProofingEventError : function() {
		this.model.trigger('updateSystemUserIDProofingEventTwo');
		var numberofAttempts = this.getSystemUserModel.get('systemUser');
		var eidmAttemps = countIDProofingAttempts(numberofAttempts.personIDProofingEvent, '2', 'proofingEventSuccessIndicator');
		$.unblockUI();
		
		if(eidmAttemps === 1) {
			router.navigate("IDProofingContactInfo", {trigger: true});
			this.model.trigger('renderContactInfo');
			$('h2[tabindex=-1]').removeAttr('tabindex');
			$('h1[tabindex=-1]').removeAttr('tabindex');
			$('#idProofingContactInfo h1').attr('tabindex', '-1').focus();
		}
		else if(eidmAttemps === 2) {
			this.model.trigger('renderIDProofNotVerifiedResults');
			$('h2[tabindex=-1]').removeAttr('tabindex');
			$('h1[tabindex=-1]').removeAttr('tabindex');
			$('#idProofingContactInfo h1').attr('tabindex', '-1').focus();
		}
	},
	
	addEvent : function( eventType ) {
		var idEvent = verifyManualIDProofingModel();
		idEvent.personIdentityProofingEventSourceTypeCode = eventType;
		this.getSystemUserModel.get('systemUser').personIDProofingEvent.push(idEvent);
	},
	
	setSubmitQuestionsModel : function() {
		var questions = [];
		
		for(var i = 0; i < 4; i++) {
			questions.push({'oowAnswer': ''});
			questions[i].oowAnswer = $.trim($('#questionsAnswerSection'+i+' input:checked').val());
		}
		
		this.submitQuestionsModel.set({'userID' : $.trim(ffeUserName)});
		this.submitQuestionsModel.set({'eidmSessionID' : this.questions.get('eidmSessionId')});
		this.submitQuestionsModel.set({'referenceID' : this.questions.get('referenceId')});
		this.submitQuestionsModel.set({'outOfWalletAnswersList' : questions});
	},
	
	goToIDProofContactInfo : function() {
		router.navigate("IDProofingContactInfo", {trigger: true});
		this.model.trigger('renderContactInfo');
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('h1[tabindex=-1]').removeAttr('tabindex');
		$('#idProofingContactInfo h1').attr('tabindex', '-1').focus();
	},
	
	savePersonFromEIDM : function() {
		var $this = this;
		this.setPersonFromEIDM();
		this.updatePersonFromEIDMModel.save(null, {
			success : function(model, response) {
				$this.model.trigger('saveUpdateSystemInfoModel');
			},
			error : function(model, response) {
				$.unblockUI();
			}
		});
	},
	
	setPersonFromEIDM : function() {
		this.updatePersonFromEIDMModel.set({'systemUserLoginName' : $.trim(ffeUserName)});
	}
});
var myAccountIDProofIdentityQuestionsBBView = new MyAccount_IDProofIdentityQuestionsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_IDProofResultsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#idProofingResults"),

	// The "model" attribute is the one that the model binding library uses
	//model : myAccountIDProofResultsBBModel,
	model : myAccountAccountBBModel,
	questions : myAccountIDProofQuestionsBBModel,
	getSystemUserModel : myAccountGetSystemUserBBModel,
	liteAccountUpgradeModel : myAccountLiteAccountUpgradeBBModel,
	findPersonRequestModel: myAccountFindPersonRequestBBModel,
	fetchAgentBrokerQuestionsModel: myAccountFetchAgentBrokerQuestionsBBModel,

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	iDProofingVerifiedTemplate : _.template($('#iDProofingVerifiedTemplate').html()),
	iDProofingNotVerifiedTemplate : _.template($('#iDProofingNotVerifiedTemplate').html()),
	iDProofingNotVerifiedResubmitTemplate : _.template($('#iDProofingNotVerifiedResubmitTemplate').html()),
	iDProofingNotVerifiedNoReferenceIdTemplate : _.template($('#iDProofingNotVerifiedNoReferenceIdTemplate').html()),
	iDProofingNotVerifiedUploadDocumentsTemplate : _.template($('#iDProofingNotVerifiedUploadDocumentsTemplate').html()),
	iDProofingNotVerifiedStillUnderReviewTemplate : _.template($('#iDProofingNotVerifiedStillUnderReviewTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
   applicationTenant: 'global',

	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'renderResults', 'iDProofVerified', 'uploadDocument', 'iDProofNotVerified', 'iDProofNotVerifiedResubmit',
			'iDProofNotVerifiedUploadDocs', 'iDProofNotVerifiedUnderReview', 'idProofGotoContactInfo', 'goToProfile', 'goToIndApp', 'checkForCCRApplication',
			'goToSource', 'buttonsToDisplay', 'iDProofNotVerifiedUploadDocsModal');
		
		this.model.bind('renderResults', this.renderResults);
		this.model.bind('renderIDProofVerifiedResults', this.iDProofVerified);
		this.model.bind('renderIDProofNotVerifiedResults', this.iDProofNotVerified);
		this.model.bind('renderIDProofNotVerifiedResubmitResults', this.iDProofNotVerifiedResubmit);
		this.model.bind('renderIDProofNotVerifiedUploadDocsResults', this.iDProofNotVerifiedUploadDocs);
		this.model.bind('renderIDProofNotVerifiedUnderReviewResults', this.iDProofNotVerifiedUnderReview);
		this.model.bind('iDProofGoToSource', this.goToSource);
		
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .idProofGotoContactInfo" : "idProofGotoContactInfo",
		"click .uploadDocument" : "uploadDocument",
		"click .goToProfile" : "goToProfile",
		"click .goToIndApp" : "goToIndApp",
		"click .goToSource" : "goToSource",
		"click .checkForCCRApplication": "checkForCCRApplication"
	},
	
	render : function() {
		this.renderResults();
	},
	
	renderResults : function() {
		var urls,
			$this = this;
			
		urls = getUrlVarsFromRout();
		setTimeout(function() {
			if(urls[0] === 'IDProofingResults') {
				switch (urls[1]) {
					case '200':
						$this.iDProofVerified();
						break;
					case 'E100':
						$this.iDProofNotVerified();
						break;
					case 'E101':
						$this.iDProofNotVerifiedResubmit();
						break;
					case 'E102':
						$this.iDProofNotVerifiedUploadDocs();
						break;
					case 'E103':
						$this.iDProofNotVerifiedUnderReview();
						break;
					case 'ESD100':
						$this.iDProofNotVerifiedUploadDocsModal();
						break;
				}
				idProofSideNave();
			}
		}, 500);
	},
		
	iDProofVerified : function() {
		router.navigate("IDProofingResults:200", {trigger: true});
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.iDProofingVerifiedTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('h1[tabindex=-1]').removeAttr('tabindex');
		$('#idProofingResults h2').attr('tabindex', '-1').focus();
		setTitleFromResource(this.resources['ffe.ee.myAccount.idProofing.verified.pageTitle']);
},

	iDProofNotVerified : function() {
		var cam = getUrlVars();
		
		router.navigate("IDProofingResults:E100", {trigger: true});
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		
		var referenceId = this.liteAccountUpgradeModel.get('referenceId'),
			systemUser;
		if(isEmpty(referenceId)) {
			systemUser = this.getSystemUserModel.get('systemUser').personIDProofingEvent;
			for(var i = (systemUser.length - 1); i > 0; i--) {
				if(systemUser[i].personIdentityProofingEventSourceTypeCode === '2') {
					if(!isEmpty(systemUser[i].proofingEventRidpSessionIdentifier)) {
						referenceId = systemUser[i].proofingEventRidpSessionIdentifier;
						break;
					}
				}
			}
		}
		
		if(!isEmpty(referenceId)) {
			this.$el.append(this.iDProofingNotVerifiedTemplate({
				'referenceId' : referenceId
			}));
		}
		else {
			this.$el.append(this.iDProofingNotVerifiedTemplate({
				'referenceId' : ''
			}));
			$('#idProofReferenceId').empty();
			$('#idProofReferenceId').append(this.iDProofingNotVerifiedNoReferenceIdTemplate());
		}
		
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('h1[tabindex=-1]').removeAttr('tabindex');
		$('#idProofingResults h2').attr('tabindex', '-1').focus();
		setTitleFromResource(this.resources['ffe.ee.myAccount.idProofing.notVerified.pageTitle']);
		this.buttonsToDisplay();
	},

	iDProofNotVerifiedResubmit : function() {
		router.navigate("IDProofingResults:E101", {trigger: true});
		var systemUser = this.getSystemUserModel.get('systemUser');
		var farsAttempts = countIDProofingAttempts(systemUser.personIDProofingEvent, '3', 'proofingEventSuccessIndicator');
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.iDProofingNotVerifiedResubmitTemplate());
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('h1[tabindex=-1]').removeAttr('tabindex');
		$('#idProofingResults h2').attr('tabindex', '-1').focus();
		setTitleFromResource(this.resources['ffe.ee.myAccount.idProofing.resubmit.pageTitle']);
		this.buttonsToDisplay();
		
		if(farsAttempts <= 1) {
			$('.uploadDocument', '#idProofingResults').closest('.subSectionSimple').hide();
		}
		else {
			$('.uploadDocument', '#idProofingResults').closest('.subSectionSimple').show();
		}
	},

	iDProofNotVerifiedUploadDocs : function() {
		router.navigate("IDProofingResults:E102", {trigger: true});
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(
			this.iDProofingNotVerifiedUploadDocumentsTemplate()
				.replace('[email address]', this.getSystemUserModel.get('systemUser').emailAddress)
		);
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('h1[tabindex=-1]').removeAttr('tabindex');
		$('#idProofingResults h2').attr('tabindex', '-1').focus();
		setTitleFromResource(this.resources['ffe.ee.myAccount.idProofing.upload.pageTitle']);
		this.buttonsToDisplay();
	},
	
	iDProofNotVerifiedUploadDocsModal : function() {
		router.navigate("IDProofingResults:ESD100", {trigger: true});
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(
			this.iDProofingNotVerifiedUploadDocumentsTemplate()
				.replace('[email address]', this.getSystemUserModel.get('systemUser').emailAddress)
		);
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('h1[tabindex=-1]').removeAttr('tabindex');
		$('#idProofingResults h2').attr('tabindex', '-1').focus();
		setTitleFromResource(this.resources['ffe.ee.myAccount.idProofing.upload.pageTitle']);
		this.buttonsToDisplay();
		this.model.trigger('renderUploadModal');
	},

	iDProofNotVerifiedUnderReview : function() {
		router.navigate("IDProofingResults:E103", {trigger: true});
		// Empties a jQuery element and refills it with the populated
		// Underscore.js template
		this.$el.empty();
		this.$el.append(this.iDProofingNotVerifiedStillUnderReviewTemplate()
			.replace('[email address]', this.getSystemUserModel.get('systemUser').emailAddress)
		);
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('h1[tabindex=-1]').removeAttr('tabindex');
		$('#idProofingResults h2').attr('tabindex', '-1').focus();
		setTitleFromResource(this.resources['ffe.ee.myAccount.idProofing.underReview.pageTitle']);
		this.buttonsToDisplay();
	},
	
	uploadDocument : function() {
		this.model.trigger('renderUploadModal');
	},
	
	idProofGotoContactInfo : function() {
		router.navigate("IDProofingContactInfo", {trigger: true});
		this.model.trigger('renderContactInfo');
		$('h2[tabindex=-1]').removeAttr('tabindex');
		$('h1[tabindex=-1]').removeAttr('tabindex');
		$('#idProofingContactInfo h1').attr('tabindex', '-1').focus();
		setTitleFromResource(this.resources['ffe.ee.myAccount.idProofing.contactInfo.pageTitle']);
	},
	
	goToProfile : function() {
		window.location.href = "/"+eePath+"/auth/global/"+locale+"/myProfile?to=settings";
	},

	goToIndApp : function() {
		var state = this.getSystemUserModel.get('systemUser').registeredStateCode;
		window.location.href = "/"+eePath+"/auth/"+state+"/"+locale+"/individualApplication";
	},
	
	goToSource : function() {
		//document.referrer
		var cam = getUrlVars();
		var state = this.getSystemUserModel.get('systemUser').registeredStateCode;
		
		if(cam.hasOwnProperty('from')) {
			if(cam.from.indexOf('myProfile')!== -1) {
				window.location.href = "/"+eePath+"/auth/global/"+locale+"/myProfile?to=settings";
			}
			if(cam.from.indexOf('individualApplication')!== -1) {
				window.location.href = "/"+eePath+"/auth/"+state+"/"+locale+"/individualApplication";
			}
		}
		else {
			window.location.href = "/"+eePath+"/auth/global/"+locale+"/myProfile?to=settings";
		}
	},
	
   checkForCCRApplication: function () {
        var bShouldCheckForCCRApplications = false;
        var systemUser = this.getSystemUserModel.get('systemUser');
        if(systemUser != null){
            var currentApplications = systemUser.exchangeUserInsuranceApp;
            bShouldCheckForCCRApplications = (currentApplications == null || currentApplications.length == 0);
            if (!bShouldCheckForCCRApplications && currentApplications != null && currentApplications.length > 0) {
                // check for apps in the registered tenant
					 for(var i = 0; i < currentApplications.length; i++){
						  if(systemUser.registeredStateCode === currentApplications[i].state && isEmpty(currentApplications[i].insuranceAppId)){
								bShouldCheckForCCRApplications = true;
						  }
					 }
            }
        }
        if (bShouldCheckForCCRApplications) {
            // call find person
            // if find app
            // fetchquestions
            // if we found an app and have questions
            // then display the page to let them decide if they want to try to associate this application
            this.searchForPerson();
        } else {
            this.goToSource();
        }
    },

    searchForPerson: function () {
        this.findPersonRequestModel.clear({ silent: true });
        this.findPersonRequestModel.set(findPersonRequest());
        this.setFindPersonInfo();
        var criteria = this.findPersonRequestModel.get('findPersonCriteria');
        var $this = this;
        this.findPersonRequestModel.save(null, {
            success: function (model, response) {
                console.log("successful fetch user info");
                var forceQuestions = false;
                var bFoundApplication = false;
                if (response.personFindResults.length > 0 || forceQuestions) {
                    var applicationID = $this.findApplicationId(response, criteria);
                    if (!isEmpty(applicationID)) {
                        bFoundApplication = true;
                        $this.fetchAgentBrokerQuestions(applicationID);
                    }
                }
                if(!bFoundApplication) {
                    $this.goToSource();
                }
            },
            error: function (model, response) {
                console.log("error in fetch user info");
                $this.goToSource();
            }
        });
    },

    setFindPersonInfo: function () {
        var criteria = this.findPersonRequestModel.get('findPersonCriteria');
        var systemUser = this.getSystemUserModel.get('systemUser');
        if(systemUser != null){
            criteria.personGivenName = systemUser.firstName;
            criteria.personMiddleName = systemUser.middleName;
            criteria.personSurName = systemUser.lastName;
            criteria.personNameSuffixText = systemUser.suffix;
            criteria.personSSNID = systemUser.ssn;
            criteria.personBirthDate = systemUser.dateOfBirth;
            criteria.locationCityName = systemUser.city;
            criteria.locationPostalCode = systemUser.zipCode;
            criteria.locationStateUSPostalServiceCode = systemUser.state;
            criteria.informationExchangeSystemStateCode = systemUser.registeredStateCode;

        }

        this.findPersonRequestModel.set({ 'findPersonCriteria': criteria });

    },

    fetchAgentBrokerQuestions: function (id) {
        var applicationId = id;
        var $this = this;
        var routes = router;
        this.fetchAgentBrokerQuestionsModel.set({ "applicationId": applicationId });
        this.fetchAgentBrokerQuestionsModel.applicationTenant = this.applicationTenant;
        this.fetchAgentBrokerQuestionsModel.urlRoot = this.fetchAgentBrokerQuestionsModel.urlRootPart1 + this.applicationTenant + this.fetchAgentBrokerQuestionsModel.urlRootPart2;
        this.fetchAgentBrokerQuestionsModel.fetch({
            success: function (model, response) {
                // app id doesn't come back from this service ???
                console.log("successful fetch agent/broker questions");
                $this.fetchAgentBrokerQuestionsModel.set({ "applicationId": applicationId });

                if (!isEmpty(response.agentBrokerQuestionList) && response.agentBrokerQuestionList.length > 0){
                    $this.model.trigger('refreshIDProofingCCRApplicationFoundTemplates');
                    routes.navigate("IDProofingCCRApplication", { trigger: true });
                } else { // no questions on the app
                    $this.goToSource();
                }
            },
            error: function (model, response) {
                console.log("error in fetch agent/broker questions");
                $this.goToSource();
            }
        });

    },

    findApplicationId: function (response, criteria) {

        var strApplicationId = '';
        var matchingApplications = [];
        var applicationToStateMap = {};
        if (!isEmpty(response) && !isEmpty(response.personFindResults) && response.personFindResults.length > 0) {
            for (var i = 0; i < response.personFindResults.length; i++) {
                if (!isEmpty(response.personFindResults[i].personSupplementalInformation)) {
                    if (!isEmpty(response.personFindResults[i].personSupplementalInformation.personApplicationInformation) &&
                            response.personFindResults[i].personSupplementalInformation.personApplicationInformation.length > 0) {
                        for (var j = 0; j < response.personFindResults[i].personSupplementalInformation.personApplicationInformation.length; j++) {
                            // the applicationId to the list if it is not already there
                            if ($.inArray(response.personFindResults[i].personSupplementalInformation.personApplicationInformation[j].insuranceApplicationID, matchingApplications) === -1) {
                                matchingApplications.push(response.personFindResults[i].personSupplementalInformation.personApplicationInformation[j].insuranceApplicationID);
                                applicationToStateMap[response.personFindResults[i].personSupplementalInformation.personApplicationInformation[j].insuranceApplicationID] = response.personFindResults[i].personSupplementalInformation.personApplicationInformation[j].informationExchangeSystemStateCode;
                            }
                        }
                    }
                }
            }
        }

        if (matchingApplications.length === 1) {
            strApplicationId = matchingApplications[0];
            this.applicationTenant = (!isEmpty(applicationToStateMap[matchingApplications[0]]) ? applicationToStateMap[matchingApplications[0]] : 'global');
        }
        return strApplicationId;
    },

    buttonsToDisplay: function () {
		var cam = getUrlVars();
		if(cam.hasOwnProperty('from')) {
			if(cam.from.indexOf('myProfile')!== -1) {
				$('p.fromMyIndApp').remove();
			}
			if(cam.from.indexOf('individualApplication')!== -1) {
				$('p.fromMyProfile').remove();
			}
		}
	}
});
var myAccountIDProofResultsBBView = new MyAccount_IDProofResultsBBView();
//
// Attention: This file is generated once and can be modified by hand
// Generated by: pageBBview.js.vsl in andromda-backbone-js-ui cartridge.
// myAccount
// gov.hhs.cms.ffe.ee.web.myAccount
// web
//
var MyAccount_IDProofUploadDocumentsBBView = FFEView.extend({
	// The el property is the root element of the view.
	// You can only bind to events fired in this element or its children.
	el : $("#idProofingDocumentUpload"),

	// The "model" attribute is the one that the model binding library uses
	//model : myAccountIDProofUploadDocumentsBBModel,
	model : myAccountAccountBBModel,
	liteAccountUpgradeModel : myAccountLiteAccountUpgradeBBModel,
	getSystemUserModel :myAccountGetSystemUserBBModel,
	personEventModel : myAccountUpdatePersonEventBBModel,
    docUris :[],

	// Underscore.js template variables points to the template in the XHTML
	// file. There can be more than one template.
	iDProofingDocumentUploadUSTemplateTemplate : _.template($('#iDProofingDocumentUploadUSTemplateTemplate').html()),

	// Namespace is used for looking up keys in the resource bundle
	namespace : "ffe.ee",
	
	// Page name is used for looking up keys in the resource bundle
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,

	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'renderUploadModal', 'cancel', 'next', 'updateSystemUserIDProofingEventFour', 'addEvent', 'setPersonEventModel', 'panelfileShow', 
			'panelfileShow', 'setApplicantInfo');
		
		this.model.bind('renderUploadModal', this.renderUploadModal);
		
		// Custom validation handlers could be added here
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
		"click .cancel" : "cancel",
		"click .next" : "next",
		"change select" : "panelfileShow"
	},
	
	
	renderUploadModal : function() {
		var $this = this;

		this.$el.html(this.iDProofingDocumentUploadUSTemplateTemplate(_.extend(this.model.toJSON())).replace(/\[email address\]/g, this.getSystemUserModel.get('systemUser').emailAddress));
		this.$el.dialog({
			autoOpen: false,
			resizable: false,
			width: 780,
			height: 525,
			modal: true,
			descriptionId: this.resources['ffe.ee.myAccount.dynamicallyLoadedPage'],
			title: this.resources['ffe.ee.myAccount.idProofing.modal.title']
		});
		this.$el.dialog('open');
		$('h2[tabindex=-1], h1[tabindex=-1]', this.$el).removeAttr('tabindex');

		this.$el.parent().find('.ui-dialog-title').attr('tabindex', '-1').focus();
		this.$el.parent().find('.icon-circle_remove').on('click', function() {
			$this.$el.dialog('destroy');
			$('.uploadDocument', '#idProofingResults').focus();
		});
		// jquery.fileupload
		var form = $('#fileupload').fileupload({
			url: '/ee-rest/auth/'+tenantId+'/'+locale+'/DocumentManagementEE/saveDocumentToECM',
			autoUpload: true
		}).bind('fileuploadchange', function(e, data) {
				// check for file ext
				var allowedTypes = ['pdf', 'jpg', 'jpeg', 'gif', 'tiff', 'bmp', 'png'];
                var docExt = data.fileInput.val().substr(data.fileInput.val().lastIndexOf(".") + 1);
                if (docExt) {docExt = docExt.toLowerCase();}
                var validType = false;
                for (var i = 0; i < allowedTypes.length; i++) {
                    if (docExt == allowedTypes[i]) {
                        validType = true;
                        break;
                    }
                }
				if (!validType) {
					$('#fileuploadtypeerror').show();
					return false;
				}
				else {
					$('#fileuploadtypeerror').hide();
					/*if (data.autoUpload || (data.autoUpload !== false && $(this).fileupload('option', 'autoUpload'))) {
						data.process().done(function () {
							data.submit();
						});
					}*/
				}
		});
        var getMetaData= function(form, input)
        {
            var
                doc = input.val(),
                docArr = doc.split( "\\" ),
                docName = docArr[docArr.length-1],
                docExt = docName.substr(docName.lastIndexOf(".")),
                metadata;
            if (docExt) docExt = docExt.toLowerCase();
            docArr = doc.split( "." );

            //build our metadata
            var mediaType = function(){
                var code;
                switch(docExt){
                    case ".pdf":
                        code = "6";
                        break;
                    case ".jpg":
                    case ".jpeg":
                        code = "12";
                        break;
                    case ".gif":
                        code = "13";
                        break;
                    case ".tiff":
                    case ".tif":
                        code = "14";
                        break;
                    case ".bmp":
                        code = "15";
                        break;
                    case ".png":
                        code = "16";
                        break;
                }
                return code;
            };

            metadata = {
                "contentType":"D:ee:content",
                "metadataReference":{
                    "metadataProperties":[
                        {
                            "key":"ee:sourceFileIdentifier",
                            "value":"defaultFolder"
                        },{
                            "key":"ee:physicalDocumentTypeCode",
                            "value":$("#filetype option:selected").val()
                        },{
                            "key":"ee:mediaTypeCode",
                            "value": mediaType()
                        },{
                            "key":"ee:languageTypeCode",
                            "value": locale
                        },{
                            "key":"ee:sourceCreationDate",
                            "value": new Date()
                        },{
                            "key":"ee:exchangeUserName",
                            "value": $.trim(ffeUserName)
                        },{
                            "key":"ffex:tenantId",
                            "value": $this.getSystemUserModel.attributes.systemUser.registeredStateCode
                        },{
                            "key":"feps:originalFileName",
                            "value": docName
                        },{
                            "key":"feps:savedByUserName",
                            "value": $.trim(ffeUserName)
                        },{
                            "key":"feps:defaultFolderName",
                            "value": 'IDProof'
                        },{
                            "key":"feps:docType",
                            "value": docExt
                        },{
                            "key":"feps:subject",
                            "value": 'IDProof'
                        },{
                            "key":"cmis:name",
                            "value": docName
                        }
                    ]
                }
            };

            return JSON.stringify(metadata);
        };
        form.fileupload('option', 'forceIframeTransport', false);
        form.bind('fileuploadsubmit', function (e, data) {
			data.formData = { documentvo: getMetaData(form, data.fileInput) };
				blockUIForSave();
			})
			.bind('fileuploaddone', function (e, data) {
				$.unblockUI();
				// check content for error
				if (data.result === 'false' || data.result === false || isEmpty(data.result)) {
					$('#fileuploaderror').show();
				}
				else {
					$('#fileuploadtypeerror').hide();
					$('#fileuploaderror').hide();
					var uploadSize = data.loaded;
					var uploadName = data.originalFiles[0].name;
                    $this.docUris.push(data.result);
					// call create task service with return file uri
							// if in second upload require list then display message
							if (($('#filetype').find(':selected').attr("data-two")) && !$('#fileuploadlist2').is(":visible") ) {
								$('#fileuploadlist2').show();
								$('#filetype2').text($('#filetype').find(':selected').text());
								$('#filename2').text(uploadName);
								$('#filesize2').text(uploadSize);
								$('#fileuploadadditional').show();
								$('#panelDropdown').show();
								$('#panelfile').show();
							}
							else {
								// done final or second
								$('#fileuploadlist').show();
								$('#fileuploadadditional').hide();
								$('#panelDropdown').hide();
								$('#panelfile').hide();
								$('#filetype1').text($('#filetype').find(':selected').text());
								$('#filename1').text(uploadName);
								$('#filesize1').text(uploadSize);
								$('#fileuploadsuccess').show();
								$('#btnfileuploadnext').prop('disabled', false);
								$this.updateSystemUserIDProofingEventFour();
							}
				}
                data.result = { files: [ { name: data.fileInput.val() } ]};
			})
			.bind('fileuploadfail', function (e, data) {
				$.unblockUI();
				$('#fileuploaderror').show();
			});
	},
	
		
	updateSystemUserIDProofingEventFour : function() {
		//our expectation is that in the ESD code, once the ESW makes a decisions
		//(i.e., accept or insufficeint documents), then the proofingEsdEngagedIndicator will be set to true
		this.addEvent('4');
		this.setPersonEventModel('4');
		this.personEventModel.save();
	},
	
	setPersonEventModel : function( eventType ) {
		var applicantInfo,
			date = new Date(),
			systemUser = this.getSystemUserModel.get('systemUser');
		
		applicantInfo = this.setApplicantInfo();
		this.personEventModel.set({'proofingEsdEngagedIndicator' : false});
		this.personEventModel.set({'proofingEventSuccessIndicator' : false});
		this.personEventModel.set({'personIdentityProofingEventSourceTypeCode' : $.trim(eventType)});
		this.personEventModel.set({'proofingEventBarcodeIdentifier' : ''});
		this.personEventModel.set({'proofingEventDate' : date});
		this.personEventModel.set({'personIdentifier' : $.trim(systemUser.personIdentifier)});
		this.personEventModel.set({'systemUserIdentifier' : $.trim(systemUser.systemUserIdentifier)});
		this.personEventModel.set({'systemUserLoginName' : $.trim(ffeUserName)});
		this.personEventModel.set({'applicantPersonInfo' : applicantInfo});
        var forwardingPhysicalDocument = [];
        for (var i = 0; i < this.docUris.length; i++) {
            forwardingPhysicalDocument.push({physicalDocumentRepositoryURI : this.docUris[i]});
        }
        this.personEventModel.set({'forwardingPhysicalDocument' : forwardingPhysicalDocument});
	},
	
	setApplicantInfo : function() {
		var dob = $.trim($('#iDProofDOB').val()),
			applicantInfo = idProofApplicantInfo(),
			systemUser = this.getSystemUserModel.get('systemUser');
		
		if(!isEmpty(dob)) {
			dob = dob.split('/');
			dob = dob[2]+'-'+dob[1]+'-'+dob[0];
		}
		
		if(!isEmpty($.trim($('#iDProofFirstName').val()))) {
			applicantInfo.applFirstName = $.trim($('#iDProofFirstName').val());
			applicantInfo.applMiddleName = $.trim($('#iDProofMiddleName').val());
			applicantInfo.applLastName = $.trim($('#iDProofLastName').val());
			applicantInfo.applSuffix = $.trim($('#iDProofSuffix').val());
			applicantInfo.applBirthDate = $.trim(dob);
			applicantInfo.applEmailAddress = $.trim(systemUser.emailAddress);
			applicantInfo.applFullNumberCode = $.trim($('#iDProofPhone').val());
			applicantInfo.applStreetName1 = $.trim($('#iDProofAddressLine1').val());
			applicantInfo.applStreetName2 = $.trim($('#iDProofAddressLine2').val());
			applicantInfo.applCityName = $.trim($('#iDProofCity').val());
			applicantInfo.applStateCode = $.trim($('#iDProofState').val());
			applicantInfo.applZipPlus4Code = $.trim($('#iDProofZipCode').val());
			applicantInfo.applSsnNumber = $.trim($('#iDProofSSN').val().replace(/-/g, ""));
			applicantInfo.applPersonIdentifier = $.trim(systemUser.personIdentifier);
		}
		else {
			applicantInfo.applFirstName = $.trim(systemUser.firstName);
			applicantInfo.applMiddleName = $.trim(systemUser.middleName);
			applicantInfo.applLastName = $.trim(systemUser.lastName);
			applicantInfo.applSuffix = $.trim(systemUser.suffix);
			applicantInfo.applBirthDate = $.trim(systemUser.dateOfBirth);
			applicantInfo.applEmailAddress = $.trim(systemUser.emailAddress);
			applicantInfo.applFullNumberCode = $.trim(systemUser.phoneNumber);
			applicantInfo.applStreetName1 = $.trim(systemUser.addressLine1);
			applicantInfo.applStreetName2 = $.trim(systemUser.addressLine2);
			applicantInfo.applCityName = $.trim(systemUser.city);
			applicantInfo.applStateCode = $.trim(systemUser.state);
			applicantInfo.applZipPlus4Code = $.trim(systemUser.zipCode);
			applicantInfo.applSsnNumber = $.trim(systemUser.ssn);
			applicantInfo.applPersonIdentifier = $.trim(systemUser.personIdentifier);
		}
		return applicantInfo;
	},
	
	addEvent : function( eventType ) {
		var idEvent = updatePersonIDProofingEvent();
		idEvent.personIdentityProofingEventSourceTypeCode = eventType;
		this.getSystemUserModel.get('systemUser').personIDProofingEvent.push(idEvent);
	},
	
	cancel : function() {
		this.$el.empty();
		this.$el.dialog('close');
		this.$el.dialog('destroy');
		$('.uploadDocument', '#idProofingResults').focus();
	},
	
	next : function( e ) {
		this.$el.empty();
		this.$el.dialog('close');
		this.$el.dialog('destroy');
		this.model.trigger('renderIDProofNotVerifiedUnderReviewResults');
	},
	
	panelfileShow : function( e ) {
		var target = $(e.target);
		
		if(!isEmpty(target.val())) {
			$('#panelfile').show();
		}
		else if(isEmpty(target.val())) {
			$('#panelfile').hide();
		}
	}
	
});
var myAccountIDProofUploadDocumentsBBView = new MyAccount_IDProofUploadDocumentsBBView();
//This BBView is for agent broker flow
var MyAccount_IDProofCCRApplicationFoundBBView = FFEView.extend({

    el: $("#iDProofingCCRApplicationFoundPage"),

	// The "model" attribute is the one that the model binding library uses
   model: myAccountAccountBBModel,

   ccrApplicationFoundPageTemplate: _.template($('#iDProofingCCRApplicationFoundPageTemplate').html()),
	 
	namespace : "ffe.ee",
	 
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,
	
	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'answerQuestions', 'ignoreApplication');

		this.model.bind('refreshIDProofingCCRApplicationFoundTemplates', this.refreshTemplate);

		// Initialize generally completes by calling this.render
		this.render();
	},
	events :
	{
	    "click #answerQuestions": "answerQuestions",
	    "click #ignoreApplication": "ignoreApplication"
	},
	render : function()  
	{
		this.refreshTemplate();	
	},
		
	refreshTemplate : function() 
	{
	    $("#iDProofingCCRApplicationFoundPage").empty();
	    $("#iDProofingCCRApplicationFoundPage").append(this.ccrApplicationFoundPageTemplate());	
	},

   answerQuestions: function () {
	   this.model.trigger('refreshIDProofingCCRQuestionsTemplates');
	   router.navigate("IDProofingCCRQuestions", { trigger: true });
	},

   ignoreApplication: function () {
      this.model.trigger('iDProofGoToSource');
	}
	
});
var myAccountIDProofCCRApplicationFoundBBView = new MyAccount_IDProofCCRApplicationFoundBBView();	
    //This BBView is for ccr flow
var MyAccount_IDProofCCRQuestionsBBView = FFEView.extend({

   el: $("#iDProofingCCRQuestionsPage"),

	// The "model" attribute is the one that the model binding library uses
   model: myAccountAccountBBModel,
   verifyCCRQuestionsModel: myAccountVerifyCCRQuestionsBBModel,
	fetchAgentBrokerQuestionsModel : myAccountFetchAgentBrokerQuestionsBBModel,

	ccrQuestionsPageTemplate: _.template($('#iDProofingCCRQuestionsPageTemplate').html()),
	 
	namespace : "ffe.ee",
	 
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources: resources,

   applicationTenant: 'global',
	
	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'verifyCCRQuestions', 'gobackApplicationFound',
				'setCCRQuestions', 'ignoreApplication');
		
		this.model.bind('refreshIDProofingCCRQuestionsTemplates', this.refreshTemplate);

		// Initialize generally completes by calling this.render
		this.render();
	},

	// The events object links all UI events in this view with their event
	// handlers
	events : {
	    "click #gobackApplicationFoundPage": "gobackApplicationFound",
	    "click #ignoreApplication": "ignoreApplication",
	    "click #submitQuestions": "verifyCCRQuestions" //this is the submit button
	},
	
	render : function()  {
		//this.refreshTemplate();	
	},
		
	
	refreshTemplate : function() {
		var agentQuestions = this.fetchAgentBrokerQuestionsModel.get('agentBrokerQuestionList');

		$("#iDProofingCCRQuestionsPage").empty();
		if(!isEmpty(agentQuestions)) {
		    $("#iDProofingCCRQuestionsPage").append(this.ccrQuestionsPageTemplate({
				    "agentQuestions": agentQuestions,
                "resources": this.resources
				}));
		}
	
	},
		
	verifyCCRQuestions : function(){
	   this.setCCRQuestions();
	   var routes = router;
	   var $this = this;
	   this.applicationTenant = (!isEmpty(this.fetchAgentBrokerQuestionsModel.applicationTenant) ? this.fetchAgentBrokerQuestionsModel.applicationTenant : 'global');
		var applicationId = this.fetchAgentBrokerQuestionsModel.get('applicationId');
		this.verifyCCRQuestionsModel.set({ "applicationId": applicationId });
		this.verifyCCRQuestionsModel.urlRoot = this.verifyCCRQuestionsModel.urlPart1 + this.applicationTenant + this.verifyCCRQuestionsModel.urlPart2;
		this.verifyCCRQuestionsModel.save(null, {
			success : function(model, response) 
			{
				console.log("successful invocation of verify CCR questions");
            if (response === true || response ==='true')
            {
                // go to the application
                window.location.href = "/" + eePath + "/auth/" + $this.applicationTenant + "/" + locale + "/myAccount?appId=" + applicationId;
            } else { //if unmatched answers
                $this.model.trigger('refreshIDProofingCCRQuestionsIncorrectTemplates');
                routes.navigate("IDProofingCCRQuestionsIncorrect", { trigger: true });
            }
			},
			error : function(model, response) {
			    console.log("error in invocation of verify CCR questions");
			    $this.model.trigger('refreshIDProofingCCRQuestionsIncorrectTemplates');
			    routes.navigate("IDProofingCCRQuestionsIncorrect", { trigger: true });
			}
		});
		
	},
	
	setCCRQuestions : function (){
	   this.verifyCCRQuestionsModel.set({ 'agentBrokerQuestionList': [] });
		var questions = this.verifyCCRQuestionsModel.get('agentBrokerQuestionList');
		var agentQuestions = this.fetchAgentBrokerQuestionsModel.get('agentBrokerQuestionList');
		for (var i = 0; i < agentQuestions.length; i++) {
			questions.push(newAgentBrokerQuestions());

			questions[i].question = agentQuestions[i].question;
			questions[i].answer = $('#agentBrokerAnswer'+i).val();
			questions[i].index = i;
		}
		
	},
	
   ignoreApplication: function () {
      this.model.trigger('iDProofGoToSource');
	},
	
	gobackApplicationFound : function(){
	    this.model.trigger('refreshIDProofingCCRApplicationFoundTemplates');
	    router.navigate("IDProofingCCRApplication", { trigger: true });
	}
	
	
	
	
});
var myAccountIDProofCCRQuestionsBBView = new MyAccount_IDProofCCRQuestionsBBView();	
    //This BBView is for agent broker flow
var MyAccount_IDProofCCRQuestionsIncorrectBBView = FFEView.extend({

    el: $("#iDProofingCCRQuestionsIncorrectPage"),

	// The "model" attribute is the one that the model binding library uses
   model: myAccountAccountBBModel,

   ccrQuestionsIncorrectPageTemplate: _.template($('#iDProofingCCRQuestionsIncorrectPageTemplate').html()),
	 
	namespace : "ffe.ee",
	 
	pageName : "myAccount",
	
	// Variable through which the view can access the resource bundle. 
	resources : resources,
	
	// Initialize is always called first when the prototype constructor ("new")
	// is called
	initialize : function() {
		FFEView.prototype.initialize.call(this);
		
		// Generally all methods in the view will require a reference to the
		// "this" context. The Underscore.js bindAll method fixes loss of 
		// context in the bound methods
		_.bindAll(this, 'render', 'refreshTemplate', 'gobackQuestions', 'ignoreApplication');

		this.model.bind('refreshIDProofingCCRQuestionsIncorrectTemplates', this.refreshTemplate);

		// Initialize generally completes by calling this.render
		this.render();
	},
	events :
	{
	    "click #ignoreApplication": "ignoreApplication",
	    "click #gobackQuestionsPage": "gobackQuestions"
	},
	render : function()  
	{
		this.refreshTemplate();	
	},
		
	refreshTemplate : function() 
	{
	   $("#iDProofingCCRQuestionsIncorrectPage").empty();
	   $("#iDProofingCCRQuestionsIncorrectPage").append(this.ccrQuestionsIncorrectPageTemplate());	
	},

   ignoreApplication: function () {
      this.model.trigger('iDProofGoToSource');
   },

   gobackQuestions: function () {
	   this.model.trigger('refreshIDProofingCCRQuestionsTemplates');
	   router.navigate("IDProofingCCRQuestions", { trigger: true });
	}
	
});
var myAccountIDProofCCRQuestionsIncorrectBBView = new MyAccount_IDProofCCRQuestionsIncorrectBBView();	
    
var MasterBBView = Backbone.View.extend({
	el : $("body"),
	
	homepageView : myAccountAccountHomepageBBView,
	//editPreferencesView : myAccountNotificationSettingsBBView,
	securitySettingsView : myAccountSecuritySettingsBBView,
	//eligibilityView : myAccountEligibilityBBView,
	coverageDocumentsView : myAccountCoverageDocumentsBBView,
	coverageTerminateModalView : myAccountCoverageTerminateModalBBView,
	//coverageView : myAccountCoverageApplicationsAndEligibilityBBView,
	accountModel : myAccountAccountBBModel,
	indAppModel : myAccount_IndAppBBModel,
	getSystemUserModel :myAccountGetSystemUserBBModel,
	getIndAppContactInfoModel :myAccountGetIndAppContactInfoBBModel,
	createLiteModel : myAccountEIDMIntegrationCreateLiteEIDMAccountBBModel,
	fetchSecurityQuestionsModel : myAccountEIDMIntegrationFetchSecurityQuestionsEIDMAccountBBModel,
	updateSecurityQuestionsModel : myAccountEIDMIntegrationUpdateSecurityQuestionsEIDMAccountBBModel,
	updatePasswordModel : myAccountEIDMIntegrationUpdatePasswordBBModel,
	updateExpiredPasswordModel : myAccountEIDMIntegrationUpdateExpiredPasswordBBModel,
	updateForgotPasswordModel : myAccountEIDMIntegrationUpdateForgotPasswordBBModel,
	updateForgotUserNameModel : myAccountEIDMIntegrationUpdateForgottenUserNameBBModel,
	updatePhoneNumberModel : myAccountEIDMIntegrationUpdatePhoneNumberBBModel,
	updateEmailModel : myAccountEIDMIntegrationUpdateEmailEIDMAccountBBModel,
	retrieveExchangeUserRequestModel:myAccountRetrieveExchangeUserRequestBBModel,
	retrieveExchangeUserResponseModel:myAccountRetrieveExchangeUserResponseBBModel,
	retrievePlanCompareEnrollmentRequestModel:myAccountRetrievePlanCompareEnrollmentRequestBBModel,
	retrievePlanCompareEnrollmentResponseModel:myAccountRetrievePlanCompareEnrollmentResponseBBModel,
	
	updateSpokenLanguageModel: myAccountUpdateSpokenLanguageBBModel,
	updateWrittenLanguageModel :myAccountUpdateWrittenLanguageBBModel,
	updatePrimaryNumberBBModel : myAccountUpdatePrimaryNumberBBModel,
	updateSecondaryNumberBBModel : myAccountUpdateSecondaryNumberBBModel,
	terminatePlansBBModel :myAccountTerminatePlansBBModel,
	fetchMyAccountAPTCModel : myAccountFetchAPTCInfoModel,
	
	
	accountNotificationsCollection : myAccountAccountNotificationsBBCollection,
	accountSavedPlansBBCollection : myAccountSavedPlansBBCollection,
	accountEnrolledPlansBBCollection : myAccountEnrolledPlansBBCollection,
	accountEnrolledProgramsBBCollection : myAccountEnrolledProgramsBBCollection,
	AccountTaxHouseholdAPTCBBCollection : myAccountTaxHouseholdAPTCBBCollection,
	applicationDetailsBBCollection: myApplicationDetailsBBCollection,

	manageEmployeeView : myAccountManageEmployeesBBView,
	employerSponsoredBenefitsView : myAccountEmployerSponsoredBenefitsBBView,
	addSecondaryContactModalView : myAccountAddSecondaryContactModalBBView,
	addEmployeeModalView : myAccountAddEmployeeModalBBView,
	removeEmployeeModalView : myAccountRemoveEmployeeModalBBView,
	
	communicationsView : myAccountCommunicationsBBView,
	lifeChangesView : myAccountReportLifeChangesBBView,
	removePersonModalBBView:myAccountRemovePersonModalBBView,
	//accountSettingsView : myAccountAccountSettingsBBView,
	//messageCenterOverviewView : myAccountMessageCenterOverviewBBView,
	//messageCenterReadMessageView : myAccountMessageCenterReadMessageBBView
	appDetailsView: myAccountApplicationsDetailBBView, 
	
	iDProofCCRQuestionsBBView: myAccountIDProofCCRQuestionsBBView,
	iDProofCCRQuestionsIncorrectBBView: myAccountIDProofCCRQuestionsIncorrectBBView,
	verifyCCRQuestionsBBModel: myAccountVerifyCCRQuestionsBBModel,
	fetchAgentBrokerQuestionsBBModel: myAccountFetchAgentBrokerQuestionsBBModel,
	findPersonRequestBBModel: myAccountFindPersonRequestBBModel 
});
var masterBBView = new MasterBBView();


var myAccountRouter = Backbone.Router.extend({
	getSystemUserModel :myAccountGetSystemUserBBModel,
	routes:
	{
		"home" : "home",
		"communications" : "communications",
		//"notifications": "notifications",
		"security" : "security",
		"authorizations" : "authorizations",
		//"myCoverage" : "myCoverage",
		
		"messages" : "messages",
		"inbox" : "inbox",
		"trash" : "trash",
		
		"myPlansAndPrograms" : "myPlansAndPrograms",
		"premiumDiscountUsage" : "premiumDiscountUsage",
		"applications" : "applications",
		"eligibility" : "eligibility",
		"reportLifeChanges" : "reportLifeChanges",
		"documents" : "documents",
		
		"coverageAndBenefits" : "coverageAndBenefits",
		"planAndEmployerSponsoredBenefits" : "planAndEmployerSponsoredBenefits",
		"manageEmployees" : "manageEmployees",
		"applicationsForCoverage" : "applicationsForCoverage",
		"paymentsAndInvoices" : "paymentsAndInvoices",
		
		"IDProofingGetStarted" : "IDProofingGetStarted",
		"IDProofingContactInfo" : "IDProofingContactInfo",
		"IDProofingIdentityQuestions" : "IDProofingIdentityQuestions",
		"IDProofingResults:param" : "IDProofingResults",
		"IDProofingCCRApplication" : "IDProofingCCRApplication",
		"IDProofingCCRQuestions": "IDProofingCCRQuestions",
		"IDProofingCCRQuestionsIncorrect": "IDProofingCCRQuestionsIncorrect"
	},
	home : function()
	{
		//go to my account from Sprint 9 login
		this.hideAll();
		$('#fixedElementNavContainer').hide();
		//$('#fixedElementSubNav > div > div').removeClass('subNavLinkActive');
		$('#one').addClass('subNavLinkActive');
		$("#myAccountHomePage").show();
		$('#myAccountBackButton').hide(); //hide the back
		//this.resetSubNavigationSection('homeSubNav');
	},
	communications : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		//$('#fixedElementSubNav > div > div').removeClass('subNavLinkActive');
		//$('#two').addClass('subNavLinkActive');
		$('#communicationsPage').show();
		$('#myAccountBackButton').show();
		this.resetSideNav();
		//this.resetSubNavigationSection('accountSettingsSubNav');
		this.setSideNavActiveById('sideNavCommunication');
		setTitleFromResource(resources['ffe.ee.myAccount.communicationPreferences.pagetitle']);
	},
	/*notifications : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#accountNotificationsPage').show();
		
		//update nav
		//this.resetAccountSettingsSideNav(); 
		this.setSideNavActiveById('sideNavNotifications');
		
	},*/
	security : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#accountSecurityPage').show();
		$('#myAccountBackButton').show();
		//this.resetAccountSettingsSideNav(); 
		this.setSideNavActiveById('sideNavSecurity');
	},
	authorizations : function()
	{
		this.hideAll();
        var collection = new myAccount_AuthorizationRepsBBCollection();
        collection.url += myAccountAppID;
        var view = new myAccount_AuthorizationSettingsBBView({ collection: collection });
		$('#fixedElementNavContainer').show();
        $('#accountAuthorizationsPage').show(); // show view above
		$('#myAccountBackButton').show();
		this.resetSideNav();
		this.setSideNavActiveById('sideNavAuthorizedUser');
		setTitleFromResource(resources['ffe.ee.myAccount.authorizedUsers.pagetitle']);
	},
	/*myCoverage : function()
	{
		this.hideAll();
		//$('#fixedElementNavContainer').show();
		$('#accountCoveragePage').show();
		//$('#fixedElementSubNav > div > div').removeClass('subNavLinkActive');
		$('#three').addClass('subNavLinkActive');
		myAccountCoverageApplicationsAndEligibilityBBView.appendMyPlansAndPrograms();
		this.resetCovaerageSideNav();
		//this.resetSubNavigationSection('coverageSubNav');
		
		//this.setSideNavActiveById('sideNavCovaerage');
	},*/
	messages : function()
	{
		this.hideAll();
		$('#accountMessagesPage').show();
		$('#fixedElementNavContainer').show();
		//$('#fixedElementSubNav > div > div').removeClass('subNavLinkActive');
		$('#four').addClass('subNavLinkActive');
		$('#myAccountBackButton').show();
		this.resetMessagesSideNav();
		//this.resetSubNavigationSection('messageSubNav');
		//this.setSideNavActiveById('sideNavMessages');
	},
	inbox: function()
	{
		this.hideAll();
		$('#accountMessagesPage').show();
		$('#fixedElementNavContainer').show();
		//this.resetMessagesSideNav();
		$('#myAccountBackButton').show();
		this.setSideNavActiveById('sideNavInbox');
	},
	trash : function()
	{
		this.hideAll();
		$('#accountMessagesPage').show();
		$('#fixedElementNavContainer').show();
		//this.resetMessagesSideNav();
		$('#myAccountBackButton').show();
		this.setSideNavActiveById('sideNavTrash');
		this.setSideNavActiveById('sideNavPlansAndPrograms');
	},
	myPlansAndPrograms : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#planAndProgramPage').show();
		$('#myAccountBackButton').show();
		this.resetSideNav();
		this.setSideNavActiveById('sideNavPlansAndPrograms');
		setTitleFromResource(resources['ffe.ee.myAccount.plansPrograms.pagetitle']);
	},
	premiumDiscountUsage : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#accountCoveragePage').show();
		$('#myAccountBackButton').show();
		//myAccountCoverageApplicationsAndEligibilityBBView.appendPremiumDiscountAndUsage();
		this.resetSideNav();
		this.setSideNavActiveById('sideNavPremiumDiscountUsage');
	},
	
	applications : function()
	{
		var collection = new myAccount_ApplicationDetailsBBCollection();
		collection.url += myAccountAppID;
		this.hideAll();
		console.log('applications routing');
		$('#myAccountBackButton').show();
		$('#fixedElementNavContainer').show();
		$('#applicationsDetailsPage').show(); 
		this.resetSideNav();
		this.setSideNavActiveById('sideNavApplicationDetails');
		setTitleFromResource(resources['ffe.ee.myAccount.applicationDetails.pagetitle']);
	},
	
	eligibility: function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#myAccountBackButton').show();
		$('#eligibilityPage').show();
		this.resetSideNav();
		this.setSideNavActiveById('sideNavEligibility');
		setTitleFromResource(resources['ffe.ee.myAccount.eligiblityResults.pagetitle']);
	},
	
	reportLifeChanges : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#reportLifeChangesPage').show();
		$('#myAccountBackButton').show();
		this.resetSideNav();
		this.setSideNavActiveById('sideNavReportLifeChanges');
		setTitleFromResource(resources['ffe.ee.myAccount.reportLifeChange.pagetitle']);
	},
	
	documents : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#accountCoveragePage').show();
		$('#myAccountBackButton').show();
		myAccountCoverageDocumentsBBView.appendCoverageDocuments();
		this.resetSideNav();
		this.setSideNavActiveById('sideNavDocuments');
		setTitleFromResource(resources['ffe.ee.myAccount.documents.pagetitle']);
		
	},
	coverageAndBenefits : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#employerSponsoredBenefitsPage').show();
		$('#myAccountBackButton').show();
		//$('#fixedElementSubNav > div > div').removeClass('subNavLinkActive');
		$('#three').addClass('subNavLinkActive');
		this.resetEmployerSponsoredBenefitsSideNav();
		//this.resetSubNavigationSection('coverageSubNav');
		setTitleFromResource(resources['ffe.ee.myAccount.coverageAndBenefits.pageTitle']);
   },
	planAndEmployerSponsoredBenefits : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#employerSponsoredBenefitsPage').show();
		$('#myAccountBackButton').show();
		//$('#fixedElementSubNav > div > div').removeClass('subNavLinkActive');
		$('#three').addClass('subNavLinkActive');
		myAccountEmployerSponsoredBenefitsBBView.refreshTemplate();
		//this.resetEmployerSponsoredBenefitsSideNav();
		this.setSideNavActiveById('sideNavCoverageAndBenefits');
	},
	manageEmployees : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#manageEmployeePage').show();
		$('#myAccountBackButton').show();
		//$('#fixedElementSubNav > div > div').removeClass('subNavLinkActive');
		$('#three').addClass('subNavLinkActive');
		//this.resetEmployerSponsoredBenefitsSideNav();
		this.setSideNavActiveById('sideNavManageEmployees');
	},
	applicationsForCoverage : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#employerSponsoredBenefitsPage').show();
		$('#myAccountBackButton').show();
		//$('#fixedElementSubNav > div > div').removeClass('subNavLinkActive');
		$('#three').addClass('subNavLinkActive');
		myAccountEmployerSponsoredBenefitsBBView.appendApplicationsForCoverage();
		//this.resetEmployerSponsoredBenefitsSideNav();
		this.setSideNavActiveById('sideNavApplicationsForCoverage');
		setTitleFromResource(resources['ffe.ee.myAccount.applicationsForCoverage.pageTitle']);
},
	paymentsAndInvoices : function()
	{
		this.hideAll();
		$('#fixedElementNavContainer').show();
		$('#employerSponsoredBenefitsPage').show();
		$('#myAccountBackButton').show();
		//$('#fixedElementSubNav > div > div').removeClass('subNavLinkActive');
		$('#three').addClass('subNavLinkActive');
		myAccountEmployerSponsoredBenefitsBBView.appendPaymentsAndInvoicesTemplate();
		//this.resetEmployerSponsoredBenefitsSideNav();
		this.setSideNavActiveById('sideNavPaymentsAndInvoices');
	},
		
	IDProofingGetStarted : function() {
		var numberofAttempts = this.getSystemUserModel.get('systemUser');
		var isUserIDProofed = isIDProofed(numberofAttempts, $.trim(ffeLOAUserLvl));
		
		this.hideAll();
		if(isUserIDProofed) {
			window.location.href = "/"+eePath+"/auth/global/"+locale+"/myProfile?to=settings";
		}
		else {
			$('#fixedElementNavContainer').empty();
			$('.innerContainer').addClass('guidingSection');
			$('#idProofingGetStarted').show();
			setTitleFromResource(resources['ffe.ee.myAccount.idProofing.getStarted.pageTitle']);
		}
   },
	
	IDProofingContactInfo : function() {
		var numberofAttempts = this.getSystemUserModel.get('systemUser');
		var isUserIDProofed = isIDProofed(numberofAttempts, $.trim(ffeLOAUserLvl));
		
		idProofSideNave('1');
		$('.innerContainer').removeClass('guidingSection');
		this.hideAll();
		
		if(isUserIDProofed) {
			window.location.href = "/"+eePath+"/auth/global/"+locale+"/myProfile?to=settings";
		}
		else {
			$('#idProofingContactInfo').show();
			setTitleFromResource(resources['ffe.ee.myAccount.idProofing.contactInfo.pageTitle']);
		}
   },
	
	IDProofingIdentityQuestions : function() {
		var numberofAttempts = this.getSystemUserModel.get('systemUser');
		var isUserIDProofed = isIDProofed(numberofAttempts, $.trim(ffeLOAUserLvl));
		
		idProofSideNave('2');
		this.hideAll();
		$('.innerContainer').removeClass('guidingSection');
		
		if(isUserIDProofed) {
			window.location.href = "/"+eePath+"/auth/global/"+locale+"/myProfile?to=settings";
		}
		else {
			$('#idProofingIdentityQuestions').show();
			setTitleFromResource(resources['ffe.ee.myAccount.idProofing.questions.pageTitle']);
		}
   },

	IDProofingResults : function() {
		idProofSideNave();
		this.hideAll();
		$('.innerContainer').removeClass('guidingSection');
		$('#idProofingResults').show();
   },
		
    IDProofingCCRApplication: function () {
        this.hideAll();
        $('#fixedElementNavContainer').hide();
        $('.innerContainer').addClass('guidingSection');
        $('#iDProofingCCRApplicationFoundPage').show();
        setTitleFromResource(resources['ffe.ee.myAccount.idProofing.ccrApplication.pageTitle']);
    },

    IDProofingCCRQuestions: function () {
        this.hideAll();
        $('#fixedElementNavContainer').hide();
        $('.innerContainer').removeClass('guidingSection');
        $('#iDProofingCCRQuestionsPage').show();
        setTitleFromResource(resources['ffe.ee.myAccount.idProofing.ccrQuestions.pageTitle']);
    },

    IDProofingCCRQuestionsIncorrect: function () {
        this.hideAll();
        $('#fixedElementNavContainer').hide();
        $('.innerContainer').removeClass('guidingSection');
        $('#iDProofingCCRQuestionsIncorrectPage').show();
        setTitleFromResource(resources['ffe.ee.myAccount.idProofing.ccrQuestionsIncorrect.pageTitle']);
    },

	hideAll : function()
	{
		$('#myAccountHomePage').hide();
		$('#communicationsPage').hide();
		//$('#accountNotificationsPage').hide();
		$('#accountSecurityPage').hide();
		$('#applicationsDetailsPage').hide(); 
		$('#accountAuthorizationsPage').hide();
		$('#accountCoveragePage').hide();
		$('#eligibilityPage').hide();
		$('#accountMessagesPage').hide();
		$('#employerSponsoredBenefitsPage').hide();
		$('#manageEmployeePage').hide();
		$('#reportLifeChangesPage').hide();
		$('#planAndProgramPage').hide();
		$('#idProofingGetStarted').hide();
		$('#idProofingContactInfo').hide();
		$('#idProofingIdentityQuestions').hide();
		$('#idProofingResults').hide();
		$('#iDProofingCCRApplicationFoundPage').hide();
		$('#iDProofingCCRQuestionsPage').hide();
		$('#iDProofingCCRQuestionsIncorrectPage').hide();
		$('#applicationsDetailsPage').hide();
		
		//hide commonErrorMessage content
		$('#commonErrorMessageBlock').hide();		
	},
	resetSubNavigationSection : function( id )
	{
		$('.subLink', '.subNavigationSection').removeClass('subNavLinkActive');
		$('#'+id, '.subNavigationContainer').addClass('subNavLinkActive');
	},
	resetSideNav : function()
	{
		this.resetSideNavsByClass('sideNav');
	},
	//resetCovaerageSideNav : function()
	//{
	//	this.resetSideNavsByClass('sideNavCovaerage');
	//},
	resetMessagesSideNav : function()
	{
		this.resetSideNavsByClass('sideNavMessages');
	},
	resetEmployerSponsoredBenefitsSideNav : function()
	{
		this.resetSideNavsByClass('sideNavCoverageAndBenefits');
	},
	resetSideNavsByClass : function(className)
	{
		$('.'+className).removeClass('active').addClass('ln-completed');
	},
	setSideNavActiveById: function(sideNavId)
	{
		$('#'+sideNavId).addClass('active').removeClass('ln-completed');
	}
});

var router = new myAccountRouter();
Backbone.history.start({root : "/"+eePath+"/auth/"+tenantId+"/"+locale+"/myAccount/"});

});