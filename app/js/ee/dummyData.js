//Contains various methods that generate dummy data

// Global variables to simulate indicators go here.
var informaticaServiceStatus = 'C35123';

/*Creates a list of ApplicationMemberCurrentIncomeSourceVOs - may be removed**/
function getDummyIncomeInfo(person)
{
	var dummyIncome = [];
	
	//annual
	dummyIncome.push(createDummyAnnualIncomeVerification('IRS', 30000, person));
	
	//NOTE: need to have just one EDS event, but with 3 items under that
	//current
	dummyIncome.push(createDummyIncomeVerification('EDS', person));
	
	//now take that EDS event and add 3 income under there
	//list of ApplicationMemberCurrentIncomeSourceVerificationVO
	var currentIncomeList = dummyIncome[1].memberVerification.memberCurrentIncomeVerification.requestedCurrentIncomeSourceVerification;
	
	currentIncomeList.push(createDummyQuarterlyWages(400, person));
	currentIncomeList.push(createDummyUnemploymentIncome(200, person));
	//currentIncomeList.push(createDummyOtherIncome(100, person));
	
	return dummyIncome;
}

function createDummyQuarterlyWages(incomeAmount, person)
{
	createDummyCurrentIncome(incomeAmount, person, "Q", "2");
}

function createDummyUnemploymentIncome(incomeAmount, person)
{
	createDummyCurrentIncome(incomeAmount, person, "M", "1");
}


function createDummyCurrentIncome(incomeAmount, person, frequency, incomeType)
{
	var newIncome = createNewCurrentIncomeSourceVerificationVO(
			frequency,
			frequency,
			incomeType,
			incomeType,
			incomeAmount,
			getCurrentDate(),
			null,
			null,
			null,
			true,
			true,
			getCurrentDate(),
			null,
			null,
			null,
			null,
			null);
	return newIncome;
}


//creates some dummy data Event for either current or annual income.
function createDummyIncomeVerification(dataSource, person)
{
	//ApplicationMemberEventVO 
	var verification = 
	{
		"identifier":null,
		"datetime":null,
		"memberEligibility" : null, //ApplicationMemberEligibilityVO
		"memberVerification": createNewMemberVerification() , //ApplicationMemberVerificationVO
		"memberCalculation" : null, //ApplicationMemberCalculationVO
		"memberEventType" : 'Income'
	};
	
	//ApplicationMemberEligibilityVO
	var memberVerification = verification.memberVerification;
	
	//memberVerification.memberVerificationType = incomeType;
	memberVerification.dataSourceType.dataSourceType = dataSource;
	memberVerification.dataSourceType.dataSourceTypeName = dataSource;
	return verification;
}

function getDummyMetalLevelData(){
	var PlanResultsVO = {};
	//var catastrophic = {metalType:"catastrophic",planCount:(Math.ceil(Math.random()*100000)) %17,issuerCount:(Math.ceil(Math.random()*100000))%7,lowMonthlyPremium:(Math.ceil(Math.random()*100000)) %100,highMonthlyPremium:(Math.ceil(Math.random()*100000)) %470,copay:(Math.ceil(Math.random()*100000)) %120, deductible: (Math.ceil(Math.random()*100000)) %4000,outOfPocket: (Math.ceil(Math.random()*100000)) %7000};
	var bronze = {metalType:"bronze",planCount:(Math.ceil(Math.random()*100000)) %19,issuerCount:(Math.ceil(Math.random()*100000))%5,lowMonthlyPremium:(Math.ceil(Math.random()*100000)) %100,highMonthlyPremium:(Math.ceil(Math.random()*100000)) %470,copay:(Math.ceil(Math.random()*100000)) %120, deductible: (Math.ceil(Math.random()*100000)) %4000,outOfPocket: (Math.ceil(Math.random()*100000)) %7000};
	var silver = {metalType:"silver",planCount:(Math.ceil(Math.random()*100000)) %20,issuerCount:(Math.ceil(Math.random()*100000))%6,lowMonthlyPremium:(Math.ceil(Math.random()*100000)) %100,highMonthlyPremium:(Math.ceil(Math.random()*100000)) %470,copay:(Math.ceil(Math.random()*100000)) %120, deductible: (Math.ceil(Math.random()*100000)) %4000,outOfPocket: (Math.ceil(Math.random()*100000)) %7000};
	var gold = {metalType:"gold",planCount:(Math.ceil(Math.random()*100000)) %19,issuerCount:(Math.ceil(Math.random()*100000))%5,lowMonthlyPremium:(Math.ceil(Math.random()*100000)) %100,highMonthlyPremium:(Math.ceil(Math.random()*100000)) %470,copay:(Math.ceil(Math.random()*100000)) %120, deductible: (Math.ceil(Math.random()*100000)) %4000,outOfPocket: (Math.ceil(Math.random()*100000)) %7000};
	var platinum = {metalType:"platinum",planCount:(Math.ceil(Math.random()*100000)) %17,issuerCount:(Math.ceil(Math.random()*100000))%2,lowMonthlyPremium:(Math.ceil(Math.random()*100000)) %100,highMonthlyPremium:(Math.ceil(Math.random()*100000)) %470,copay:(Math.ceil(Math.random()*100000)) %120, deductible: (Math.ceil(Math.random()*100000)) %4000,outOfPocket: (Math.ceil(Math.random()*100000)) %7000};
	PlanResultsVO.aptcApplicable = false;
	PlanResultsVO.metalLevels = [bronze,silver,gold,platinum]; //[catastrophic,bronze,silver,gold,platinum];
	return PlanResultsVO;
}

function getDummyPlanSummaryResultsVO () {
	// Plan Names:
	var planName = [
		'Standard Plan',
		'Premium Plan',
		'Health Savings Account',
		'Total Care Plan',
		'Essentials Plan'
	];
	var issuer = [
		'Blue Cross',
		'United Health Care',
		'Iota Guardian',
		'Green Star'
	];
	// Metal Levels:
	var metalLevel = [
		'Bronze',
		'Silver',
		'Gold',
		'Platinum',
		'Catastrophic'
	];
	// For boolean values
	var booleanChoice = [
		true,
		false
	];
	var monthlyPremium = Math.ceil(Math.random() * 100);
	var getDummyPlanSummaryResults = {
		'applicationId' : Math.ceil(Math.random() * 10000),
		'planId' : Math.ceil(Math.random() * 10000),
		'enrollmentGrpId' : Math.ceil(Math.random() * 10000),
		'issuerId' : issuer[Math.ceil(Math.random() * 10) %4],
		'planName' : planName[Math.ceil(Math.random() * 10) % 5],
		'productType' : 'PPO', // Unsure of other values.  Leave as PPO for now
		'metalLevel' : metalLevel[Math.ceil(Math.random() * 10) % 5],
		'reducedCostIndicator' : booleanChoice[Math.ceil(Math.random() * 10) % 2],
		'nationalNetwork' : booleanChoice[Math.ceil(Math.random() * 10) % 2],
		'monthlyPremium' : monthlyPremium,
		'aptcAmount' : Math.ceil(Math.random() * 100),
		'deductible' : Math.ceil(Math.random() * 1000),
		'outOfPocketMaximum' : Math.ceil(Math.random() * 10000),
		'primaryDoctor' : Math.ceil(Math.random() * 10),
		'specialistDoctor' : Math.ceil(Math.random() * 10),
		'genericPerscription' : Math.ceil(Math.random() * 10),
		'urlProviderDirectory' : 'http://www.test.com/',
		'summaryOfBenefits' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'urlPlanBrochure' : 'http://www.test.com',
		'adultDental' : booleanChoice[Math.ceil(Math.random() * 10) % 2],
		'pediatricDental' : booleanChoice[Math.ceil(Math.random() * 10) % 2],
		'planActrialValue' : Math.ceil(Math.random() * 100),
		'annualPremium' : monthlyPremium * 12,
		'urlCoveredDrugs' : 'http://www.test.com/',
		'referalNeeded' : booleanChoice[Math.ceil(Math.random() * 10) % 2],
		'emergencyRoomServices' : 'Lorem ipsum dolor sit amet',
		'inPatientHospitalServices' : 'Lorem ipsum dolor sit amet',
		'inPatientPhysicianSurgicalServices' : 'Lorem ipsum dolor sit amet',
		'routineDentalService' : 'Lorem ipsum dolor sit amet',
		'routineEyeExam' : 'Lorem ipsum dolor sit amet',
		'XrayDiagnosticImaging' : 'Lorem ipsum dolor sit amet',
		'genericDrugs' : 'Lorem ipsum dolor sit amet',
		'PlanDetailsVO' : getPlanDetailsVO()
	};
	
	return getDummyPlanSummaryResults;
}

function getPlanDetailsVO () {
	// For boolean values
	var booleanChoice = [
		true,
		false
	];
	var getDummyPlanDetailsVO = {
		'healthSavingsAcountEligible' : booleanChoice[Math.ceil(Math.random() * 10) % 2],
		'medicalLossRatio' : Math.ceil(Math.random() * 100),
		'threeMonthMailOrderPharmacyBenefitOffered' : 'Lorem ipsum dolor sit amet',
		'urlListOfcoveredDrugs' : 'http://www.google.com/',
		'prescriptionDrugDeductible' : Math.ceil(Math.random() * 100),
		'prescriptionDrugOutOfPocket' : Math.ceil(Math.random() * 100),
		'ReferalNeededToSeeSpecialist' : booleanChoice[Math.ceil(Math.random() * 10) % 2],
		'urlProviderDirectory' : 'http://www.google.com/',
		'nationalProviderNetwork' : booleanChoice[Math.ceil(Math.random() * 10) % 2],
		'mutliStateNetwork' : booleanChoice[Math.ceil(Math.random() * 10) % 2]
	};
	return getDummyPlanDetailsVO;
}

function getDummyEmployerInfo()
{
	var employer =  // ApplicationMemberEmployerVO
	
			{
				"employerOrganization" :  
				{
					"officeSymbolText" :null,
					"businessStatusDate" :null,
					"organizationStructureType" :null,
					"issuerOrganization" :null,
					"organizationNomenclature" : //OrganizationNomenclatureVO
					[{
						"effectiveDate":"",
						"text": "Generic Company",
						"nomenclatureType" : //OrganizationNomenclatureTypeVO "Legal"
						{
							"organizationNomenclatureTypeCode":"Legal",
							"organizationNomenclatureTypeName":"Legal"
						}
					}],
					"externalOrganizationIdentifier" : //OrganizationIdentifierVO
					[{
						"text":"",
						"effectiveDate": "",
						"organizationIdentifierType" : //OrganizationIdentifierTypeVO "Federal EIN"
						{
							"identiferTypeName":"Federal EIN",
							"identifierTypeCode":"Federal EIN"
						}
					}],
					"issuerUser" :null,
					"organizationType" :null,
					"organizationAddress" : //List<OrganizationAddressVO>
					[{
						"organizationAddressEndDate":null,
						"addressPlace" : //AddressPlaceVO 
						{
							"zipPlus4Code": "22033",
							"streetName1" : "123 Main Street",
							"streetName2" : "",
							"cityName": "Fairfax",
							"stateCode" : "VA",
							"countryCode": "USA"
						},
						"organizationAddressCategoryCode":'E',
						"organizationAddressStartDate":null
					}],
					"organizationIdentifier" :null,
					"organizationEmail" :null,
					"organizationTelephone" : //List<OrganizationTelephoneVO>
					[{
						"organizationTelephoneCategoryCode":"",
						"organizationTelephoneStartDate":"",
						"organizationTelephoneEndDate":"",
						"telephonePlace": //TelephonePlaceVO
							{
								"areaNumber": "777",
								"switchNumber":"",
								"lineNumber":"123-456-7890",
								"extensionNumber":"",
								"number":"123-456-7890",
								"telephoneCountry":"USA"
							}
					}],
					"companyEmailDomainName" :null,
					"organizationBusinessStatus" :null,
					"organizationURL" :"http://www.yahoo.com/"
					
				}, // OrganizationVO TODO fill
												// stub?
				"employeeEmployerIdentifier" : "1234567890",
				"employeeSsnNumber" : "",
				"memberShareSelfOnlyPremiumAmount" : 0,//big int
				"employerSponsoredCoverageIndicator" : "",
				"employerCoverageFamilyMemberIndicator":"",
				"employerLowestCostPlanName":"",
				"employerLowestCostPlanCost":0.0,//double
				"periodCycleType":	//PeriodCycleTypeVO
				{
					"periodTypeCode":"",
					"periodTypeName":"",
					"concurrencyHash":""
				},
				"concurrencyHash":"",	
				"overThirtyHourWorkWeekIndicator":null,//Boolean
				"employerMinimumEssentialCoverageIndicator":null, //Boolean
				"employerSponsoredCoverageEligibilityStartDate":null,
				"definingESIEnrollmentStatusTypeCode":"",
				"definingESIEnrollmentStatusTypeName":""
			
				
			};
	
	return employer;
}



function createDummyExemptionEligibilites(model)
{
	//we are creating a list of ApplicationExemptionEligibilityVO
	
	var memberEligibilities = [];
	
	//go thru model, mark all eligible except for not lawfully present
	var members = model.get('members');
	
	for(var x=0;x<members.length;x++)
	{
		var memberEligibility = createNewApplicationExemptionEligibility();
		
		var eligibilities = [];
		//go thru each member
		//go thur their exemptions
		for(var exemptionIndex = 0;exemptionIndex< members[x].exemptions.length;exemptionIndex++)
		{
			var currExemption = members[x].exemptions[exemptionIndex];
			
			var newExemptionEligibility = createExemptionEligibility();
			newExemptionEligibility.exemptionType = currExemption.type;
			newExemptionEligibility.exemptionStartDate = "01/02/2012";
			newExemptionEligibility.exemptionEndDate= "10/12/2013";
			
			if(currExemption.type === 'incarceration' || 
					currExemption.type === 'notLawfullyPresent')
			{
				//we currently just mark these as FALSE
				newExemptionEligibility.qualifiedForExemptionIndicator = false;
			}
			else
			{
				newExemptionEligibility.qualifiedForExemptionIndicator = true;
			}
			
			eligibilities.push(newExemptionEligibility);
		}
		memberEligibility.applicantName = members[x].firstName +  "  " + members[x].lastName;
		memberEligibility.exemptions = eligibilities;
		
		memberEligibilities.push(memberEligibility);
	}
	
	model.set({eligibilities : memberEligibilities});
	//return eligibilities;
}

function createESDDummyData()
{
	var newModel = 
		{
			"personName" : "",
			"personDOB" : "",
			"personSex" : "",
			"personCitizenship" : "",
			"applicationFilerName" : "",
			"applicationFilerAddress" : "",
			"applicationFilerPreferredPhone" : "",
			"applicationFilerSecondaryPhone" : "",
			"applicationFilerPreferredContact" : "", 
			"applicationFilerEmailAddress" : "",
			"applicationLink" : "",
			"latestDeterminationDate" : "",
			"seekingCoverage" : "",
			"seekingFinancialAssistance" : "",
			"coverageEligibilityResults" : "",
			"pendingInconsistencies" : "",
			"pendingDataMatches" : "",
			"relatedPerson" : 
			[
				{
					"relatedPersonName" : "John Doe",
					"relationshipToFiler" : "Spouse",
					"relatedSeekingCoverage" : "false",
					"relatedTaxHousehold" : "Filer",
					"relatedMedicaidHousehold" : "true",
					"relatedSamePolicy" : "false",
					"relatedCurrentCoverage" : "QHP, APTC, CSR",
					"relatedPendingInconsistency" : "Residency"
				},
				{
					"relatedPersonName" : "John Doe Jr",
					"relationshipToFiler" : "Child",
					"relatedSeekingCoverage" : "true",
					"relatedTaxHousehold" : "Dependent",
					"relatedMedicaidHousehold" : "true",
					"relatedSamePolicy" : "true",
					"relatedCurrentCoverage" : "",
					"relatedPendingInconsistency" : "None"
				}
			],
			"inconsistencies" : 
			[	{
					"inconsistencyId" : "1",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "Citizenship",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "6/20/2012",
					"inconsistencyStatus" : "",
					"availableDocuments" : 
							[	{
								"receivedDate" : "6/22/2012",
								"documentType" : "Passport",
								"documentName" : "US Passport.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								},
								{
								"receivedDate" : "6/25/2012",
								"documentType" : "Birth Cerfiticate",
								"documentName" : "Birth_Certificate.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[
								{
									"dataheader" : "DOB",
									"attestedInfo" : "9/12/1968"
								},
								{
									"dataheader" : "SSN",
									"attestedInfo" : "555-55-5555"
								},
								{
									"dataheader" : "Citizenship",
									"attestedInfo" : "US Citizen"
								}
							],
						"inconsistencyClockEventTracker" : 
							[	{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				},
				{
					"inconsistencyId" : "2",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "Residency",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "6/20/2012",
					"inconsistencyStatus" : "",
						"availableDocuments" : 
							[	{
								"receivedDate" : "6/22/2012",
								"documentType" : "Utility Bill",
								"documentName" : "Utility_Bill.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								},
								{
								"receivedDate" : "6/27/2012",
								"documentType" : "Lease Agreement",
								"documentName" : "Lease_Agreement.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[
								{
									"dataheader" : "Address",
									"attestedInfo" : "124 Main St"
								},
								{
									"dataheader" : "City/State/ZIP",
									"attestedInfo" : "Fairfax, VA 22033"
								}
							],
						"inconsistencyClockEventTracker" : 
							[	{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				},
				{
					"inconsistencyId" : "3",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "Incarceration",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "6/30/2012",
					"inconsistencyStatus" : "",
						"availableDocuments" : 
							[
								{
								"receivedDate" : "7/1/2012",
								"documentType" : "Release Papers",
								"documentName" : "Release_Papers.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[ 
								{
									"dataheader" : "EDS Incarceration Information",
									"attestedInfo" : "435 Huy Ave"
								},
								{
									"dataheader" : "IDS History Flag",
									"attestedInfo" : "NO"
								},
								{
									"dataheader" : "IDS Address Flag",
									"attestedInfo" : "YES"
								}
							],
						"inconsistencyClockEventTracker" : 
							[	{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				},
				{
					"inconsistencyId" : "4",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "Indian Status",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "6/20/2012",
					"inconsistencyStatus" : "",
						"availableDocuments" : 
							[	{
								"receivedDate" : "6/22/2012",
								"documentType" : "Indian Card",
								"documentName" : "Indian_Card.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								},
								{
								"receivedDate" : "6/22/2012",
								"documentType" : "Tribal Membership Card",
								"documentName" : "Tribal_Membership_Card.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[
								{
									"dataheader" : "Tribe",
									"attestedInfo" : "Seminoles"
								}
							],
						"inconsistencyClockEventTracker" : 
							[
								{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				},
				{
					"inconsistencyId" : "5",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "Tax Household",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "3/20/2012",
					"inconsistencyStatus" : "",
						"availableDocuments" : 
							[
								{
								"receivedDate" : "6/22/2012",
								"documentType" : "W4",
								"documentName" : "W4_2012.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								},
								{
								"receivedDate" : "6/22/2012",
								"documentType" : "W4",
								"documentName" : "W4_2011.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[
								{
									"dataheader" : "Attested Tax Household Size",
									"attestedInfo" : "4 persons"
								},
								{
									"dataheader" : "IRS Tax Household Size",
									"attestedInfo" : "1 Person"
								}
							],
						"inconsistencyClockEventTracker" : 
							[
								{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				},
				{
					"inconsistencyId" : "6",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "ESI MEC",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "6/20/2012",
					"inconsistencyStatus" : "",
						"availableDocuments" : 
							[
								{
								"receivedDate" : "6/22/2012",
								"documentType" : "Employer Letter",
								"documentName" : "Employer_Letter.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[
								{
									"dataheader" : "Employer",
									"attestedInfo" : "Acme Company"
								},
								{
									"dataheader" : "Address",
									"attestedInfo" : "123 Fairfax Lane"
								},
								{
									"dataheader" : "EIN",
									"attestedInfo" : "8390428430"
								},
								{
									"dataheader" : "Health Plan Meets Minimum Value Standard",
									"attestedInfo" : "Don't Know"
								},
								{
									"dataheader" : "ESI MEC Enrollment Status",
									"attestedInfo" : "Do not plan to enroll"
								},
								{
									"dataheader" : "Lowest Cost Plan Available",
									"attestedInfo" : "Plan Name 1"
								},
								{
									"dataheader" : "Employee Contributions",
									"attestedInfo" : "$300"
								},
								{
									"dataheader" : "Employee Contribution Frequency",
									"attestedInfo" : "Monthly"
								},
								{
									"dataheader" : "Employee",
									"attestedInfo" : "John Doe"
								},
								{
									"dataheader" : "Works 30+ hours per week?",
									"attestedInfo" : "Yes"
								},
								{
									"dataheader" : "Household Members Eligible for Coverage",
									"attestedInfo" : "John Doe, Jane Doe, John Doe Jr."
								}
							],
						"inconsistencyClockEventTracker" : 
							[
								{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				},
				{
					"inconsistencyId" : "7",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "Non-ESI MEC",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "6/20/2012",
					"inconsistencyStatus" : "",
						"availableDocuments" : 
							[
								{
								"receivedDate" : "6/22/2012",
								"documentType" : "Employer Letter",
								"documentName" : "Employer_Letter.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[
								{
									"insuranceType" : "Peace Corps",
									"policyNumber" : "PC0123456-0001",
									"coverageEndDate" : "MM/DD/YYYY"
								},
								{
									"insuranceType" : "Veteran's Health Program",
									"policyNumber" : "VHP07298023-0001",
									"coverageEndDate" : "MM/DD/YYYY"
								},
								{
									"insuranceType" : "CHIP",
									"policyNumber" : "",
									"coverageEndDate" : "MM/DD/YYYY"
								}
							],
						"inconsistencyClockEventTracker" : 
							[	{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				},
				{
					"inconsistencyId" : "8",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "Wages",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "6/20/2012",
					"inconsistencyStatus" : "",
						"availableDocuments" : 
							[	{
								"receivedDate" : "6/22/2012",
								"documentType" : "Pay Stub",
								"documentName" : "Pay_Stub.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								},
								{
								"receivedDate" : "6/22/2012",
								"documentType" : "W4",
								"documentName" : "W4_2012.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[ 	{
									"dataheader" : "Wages(pre-taxes)",
									"attestedInfo" : "$500/month"
								}
							],
						"inconsistencyClockEventTracker" : 
							[	{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				},
				{
					"inconsistencyId" : "9",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "Unemployment",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "6/20/2012",
					"inconsistencyStatus" : "",
					"availableDocuments" : 
							[	{
								"receivedDate" : "6/22/2012",
								"documentType" : "Unemployment Check",
								"documentName" : "Unemployment_check.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[ 	{
									"dataheader" : "Unemployment (pre-taxes)",
									"attestedInfo" : "$500 per month"
								}
							],
						"inconsistencyClockEventTracker" : 
							[	{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				},
				{
					"inconsistencyId" : "10",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "SSA Benefits",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "6/20/2012",
					"inconsistencyStatus" : "",
					"availableDocuments" : 
							[	{
								"receivedDate" : "6/22/2012",
								"documentType" : "SSA Benefits Check",
								"documentName" : "SSA_Benefits_Check.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[ 	{
									"dataheader" : "SSA Benefits (pre-taxes)",
									"attestedInfo" : "$700 per month"
								}
							],
						"inconsistencyClockEventTracker" : 
							[	{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				},
				{
					"inconsistencyId" : "11",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "SSN",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "6/20/2012",
					"inconsistencyStatus" : "",
					"availableDocuments" : 
							[	{
								"receivedDate" : "6/22/2012",
								"documentType" : "SSN",
								"documentName" : "SSN_Card.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[ 	{
									"dataheader" : "DOB",
									"attestedInfo" : "05/15/1969"
								},
								{
									"dataheader" : "SSN",
									"attestedInfo" : "555-55-5555"
								},
								{
									"dataheader" : "Name",
									"attestedInfo" : "Jane Doe"
								}
							],
						"inconsistencyClockEventTracker" : 
							[	{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				},
				{
					"inconsistencyId" : "12",
					"inconsistencyPersonName" : "Jane Doe",
					"inconsistencyType" : "Projected Annual MAGI",
					"inconsistencyClockExpiration" : "9/18/2012",
					"inconsistencyStartDate" : "6/20/2012",
					"inconsistencyStatus" : "",
					"availableDocuments" : 
							[	{
								"receivedDate" : "6/22/2012",
								"documentType" : "W2",
								"documentName" : "W2.pdf",
								"documentLink" : "workspace://SpacesStore/27007c1e-d58e-40c7-8aac-ad581c11ad2a;1.0",
								"evidenceDocStatus" : "",
								"insuffReason" : "",
								"additionalInformation" : "",
								"noticeDate" : ""
								}
							],
						"attestedInformation" : 
							[ 	{
									"dataheader" : "Annual Income MAGI",
									"attestedInfo" : "$5000"
								}
							],
						"inconsistencyClockEventTracker" : 
							[	{
									"inconsistencyClockTrackerStatus" : "Clock In",
									"inconsistencyClockTrackerReason" : "Initial Clock",
									"inconsistencyClockTrackerDuration" : "90 Days",
									"inconsistencyClockTrackerActiondate" : "6/20/2012"
								}
							]
				}
			],
			"evidenceDocumentLog" : 
			[	{
					"documentName" : "",
					"evidenceDocumentStatus" : "",
					"insufficiencyReason" : "",
					"additionalInfo" : ""
				}
			],
			"evidenceDocumentNotes" : []
		};
	return newModel;
}

//Prepares dummy EE Account data, for testing
function getDummyPlan1()
{
	var newAccount = 
	{
			"group": "John Smith",
			"aptcEligible": "100",
			"aptcMax": "300",
			"aptcApplied": "100",
			"aptcAppliedHousehold": "100",
			"age": "49",
			"csrEligibleIndiv": "Yes",
			"estimatedOOP": "1,150",
			"csrEligiblePlan": "Yes",
			"nationalNetwork": "Yes at Out of Network rates",
			"childOnly": "",
			"hsaEligible": "Yes",
			"planYear": "2012",
			"hearing": "Yes",
			"hearingLink": "www.hearingLink.com",
			"dental": "Yes",
			"dentalLink": "www.dentalLink.com",
			"vision": "Yes",
			"visionLink": "www.visionLink.com",
			"habilitative": "Yes",
			"habilitativeLink": "www.habilitativeLink.com",
			"autism": "Yes",
			"autismLink": "www.autismLink.com",
			"acupuncture": "Yes",
			"acupunctureLink": "www.acupunctureLink.com",
			"chiropractic": "Yes",
			"chiropracticLink": "www.chiropracticLink.com",
			"bariatric": "Yes",
			"bariatricLink": "www.bariatricLink.com",
			"infertility": "Yes",
			"infertilityLink": "www.infertilityLink.com",
			"rehabilitative": "Yes",
			"rehabilitativeLink": "www.rehabilitativeLink.com",
			"mentalHealth": "",
			"metalLevel": "silver",
			"catastrophic": "No",
			"doctorChoice": "PPO",
			"issuer": "Green Star",
			"monthlyPremium": "210",
			"deductibleInNet": "2,000",
			"deductibleOutNet": "",
			"providerDirectoryLink": "www.greenstar.com",
			"netPremium": "189",
			"totalCost": "3,418",
			"comparisonList": "",
			"oopMaxInNet": "6,000",
			"oopMaxOutNet": "",
			"mailOrderDrugsBenefit": "Yes",
			"mailOrderDrugsText": "(90 day supply for two co-pays)",
			"weightLossBenefit": "Yes",
			"weightLossText": "",
			"diabetesBenefit": "Yes",
			"diabetesText": "",
			"babySBC": "1,200",
			"breastCancerSBC": "1,400",
			"diabetesSBC": "600",
			"prescriptionFormulary": "",
			"sbcLink": "",
			"planDocumentLink": "",
			"referralPolicy": "Self-refer",
			"priorAuthorizationPolicy": "Required for hospital admission",
			"medicalLossRatio": "84",
			"cahpsInfo": "Not available, plan too new",
			"pcpCopayInNet": "20",
			"pcpCopayOutNet": "20",
			"pcpCoinsInNet": "20",
			"pcpCoinsOutNet": "20",
			"pcpText": "",
			"specialistCopayInNet": "30",
			"specialistCopayOutNet": "30",
			"specialistCoinsInNet": "30",
			"specialistCoinsOutNet": "30",
			"specialistText": "",
			"rxGenericCopayInNet": "20",
			"rxGenericCopayOutNet": "20",
			"rxGenericCoinsInNet": "",
			"rxGenericCoinsOutNet": "",
			"rxGenericText": "",
			"rxBrandedCopayInNet": "40",
			"rxBrandedCopayOutNet": "40",
			"rxBrandedCoinsInNet": "",
			"rxBrandedCoinsOutNet": "",
			"rxBrandedText": "",
			"hearingCopayInNet": "",
			"hearingCopayOutNet": "",
			"hearingCoinsInNet": "",
			"hearingCoinsOutNet": "",
			"hearingText": "child hearing aid",
			"adultDentalCopayInNet": "",
			"adultDentalCopayOutNet": "",
			"adultDentalCoinsInNet": "",
			"adultDentalCoinsOutNet": "",
			"adultDentalText": "50% restorative, 0% preventative, No out of network coverage",
			"childDentalCopayInNet": "",
			"childDentalCopayOutNet": "",
			"childDentalCoinsInNet": "",
			"childDentalCoinsOutNet": "",
			"childDentalText": "50% restorative, 50% preventative",
			"visionCopayInNet": "",
			"visionCopayOutNet": "",
			"visionCoinsInNet": "",
			"visionCoinsOutNet": "",
			"visionText": "$25 exam, 50% lenses",
			"emergencyRoomVisitCopayInNet": "125",
			"emergencyRoomVisitCopayOutNet": "125",
			"emergencyRoomVisitCoinsInNet": "",
			"emergencyRoomVisitCoinsOutNet": "",
			"emergencyRoomVisitText": "",
			"outpatientSurgeryCopayInNet": "",
			"outpatientSurgeryCopayOutNet": "",
			"outpatientSurgeryCoinsInNet": "",
			"outpatientSurgeryCoinsOutNet": "",
			"outpatientSurgeryText": "No charge after deductible",
			"labsXraysServicesCopayInNet": "",
			"labsXraysServicesCopayOutNet": "",
			"labsXraysServicesCoinsInNet": "",
			"labsXraysServicesCoinsOutNet": "",
			"labsXraysServicesText": "No charge if part of office visit, otherwise $25",
			"hospitalInpatientCopayInNet": "",
			"hospitalInpatientCopayOutNet": "",
			"hospitalInpatientCoinsInNet": "",
			"hospitalInpatientCoinsOutNet": "",
			"hospitalInpatientText": "20% after deductible",
			"acupunctureCopayInNet": "30",
			"acupunctureCopayOutNet": "30",
			"acupunctureCoinsInNet": "",
			"acupunctureCoinsOutNet": "",
			"acupunctureText": "20 visits/year",
			"chiropracticCopayInNet": "30",
			"chiropracticCopayOutNet": "30",
			"chiropracticCoinsInNet": "",
			"chiropracticCoinsOutNet": "",
			"chiropracticText": "20 visits/year",
			"infertilityServicesCopayInNet": "",
			"infertilityServicesCopayOutNet": "",
			"infertilityServicesCoinsInNet": "",
			"infertilityServicesCoinsOutNet": "",
			"infertilityServicesText": "Assistive Reproductive Technologies (ART) not covered",
			"mentalHealthOutpatientCopayInNet": "20",
			"mentalHealthOutpatientCopayOutNet": "20",
			"mentalHealthOutpatientCoinsInNet": "20",
			"mentalHealthOutpatientCoinsOutNet": "20",
			"mentalHealthOutpatientText": "",
			"habilitativeServicesCopayInNet": "",
			"habilitativeServicesCopayOutNet": "",
			"habilitativeServicesCoinsInNet": "",
			"habilitativeServicesCoinsOutNet": "",
			"habilitativeServicesText": "",
			"autismServicesCopayInNet": "",
			"autismServicesCopayOutNet": "",
			"autismServicesCoinsInNet": "",
			"autismServicesCoinsOutNet": "",
			"autismServicesText": "No",
			"bariatricSurgeryCopayInNet": "",
			"bariatricSurgeryCopayOutNet": "",
			"bariatricSurgeryCoinsInNet": "",
			"bariatricSurgeryCoinsOutNet": "",
			"bariatricSurgeryText": "Yes. After other therapies exhausted",
			"rehabServicesCopayInNet": "",
			"rehabServicesCopayOutNet": "",
			"rehabServicesCoinsInNet": "",
			"rehabServicesCoinsOutNet": "",
			"rehabServicesText": "No",
			"skilledNursingDayLimitCopayInNet": "",
			"skilledNursingDayLimitCopayOutNet": "",
			"skilledNursingDayLimitCoinsInNet": "",
			"skilledNursingDayLimitCoinsOutNet": "",
			"skilledNursingDayLimitText": "100 days",
			"planName": "PPO High",
			"planCategory": "Silver",
			"proposedEffectiveDate": "01/01/14",
			"selectionEndDate": "01/01/15",
			"policyHolder": "John Doe",
			"enrollee": "Jane Doe",
			"csrIndicator": "",
			"netMonthlyPremium": "189",
			"netYearlyPremium" : "2268",
			"employerContribution": "150",
			"selectionStatus": "Enrolled",
			"selectionStatusDate": "01/01/14",
			"paymentDueDate": "01/15/14",
			"planPaymentURL": "www.abc.com",
			"planPaymentPhone": "123-456-7890",
			"planPaymentAddress": "123 Easy Street",
			"planQualityRating" : "plan too new",
			"Asthma" : "Yes",
			"coronaryDiseases" : "No"
	};
	return newAccount;
}

//Prepares dummy EE Account data, for testing
function getDummyPlan2()
{
	var newAccount = 
	{
			"group": "John Smith",
			"aptcEligible": "100",
			"aptcMax": "300",
			"aptcApplied": "100",
			"aptcAppliedHousehold": "100",
			"age": "49",
			"csrEligibleIndiv": "Yes",
			"estimatedOOP": "1,650",
			"csrEligiblePlan": "Yes",
			"nationalNetwork": "No",
			"childOnly": "",
			"hsaEligible": "Yes",
			"planYear": "2012",
			"hearing": "No",
			"hearingLink": "",
			"dental": "Yes",
			"dentalLink": "www.dentalLink.com",
			"vision": "No",
			"visionLink": "",
			"habilitative": "Yes",
			"habilitativeLink": "www.habilitativeLink.com",
			"autism": "Yes",
			"autismLink": "www.autismLink.com",
			"acupuncture": "No",
			"acupunctureLink": "",
			"chiropractic": "Yes",
			"chiropracticLink": "www.chiropracticLink.com",
			"bariatric": "No",
			"bariatricLink": "",
			"infertility": "No",
			"infertilityLink": "",
			"rehabilitative": "Yes",
			"rehabilitativeLink": "www.rehabilitativeLink.com",
			"mentalHealth": "",
			"metalLevel": "bronze",
			"catastrophic": "No",
			"doctorChoice": "PPO",
			"issuer": "Green Star",
			"monthlyPremium": "250",
			"deductibleInNet": "4,000",
			"deductibleOutNet": "",
			"providerDirectoryLink": "www.greenstar.com",
			"netPremium": "149",
			"totalCost": "3,438",
			"comparisonList": "",
			"oopMaxInNet": "6,000",
			"oopMaxOutNet": "",
			"mailOrderDrugsBenefit": "Yes",
			"mailOrderDrugsText": "",
			"weightLossBenefit": "No",
			"weightLossText": "",
			"diabetesBenefit": "No",
			"diabetesText": "",
			"babySBC": "1,800",
			"breastCancerSBC": "2,500",
			"diabetesSBC": "900",
			"prescriptionFormulary": "",
			"sbcLink": "",
			"planDocumentLink": "",
			"referralPolicy": "Self-refer",
			"priorAuthorizationPolicy": "Required for hospital admission",
			"medicalLossRatio": "89",
			"cahpsInfo": "****",
			"pcpCopayInNet": "30",
			"pcpCopayOutNet": "30",
			"pcpCoinsInNet": "30",
			"pcpCoinsOutNet": "30",
			"pcpText": "",
			"specialistCopayInNet": "",
			"specialistCopayOutNet": "",
			"specialistCoinsInNet": "",
			"specialistCoinsOutNet": "",
			"specialistText": "No charge after deductible",
			"rxGenericCopayInNet": "25",
			"rxGenericCopayOutNet": "25",
			"rxGenericCoinsInNet": "",
			"rxGenericCoinsOutNet": "",
			"rxGenericText": "",
			"rxBrandedCopayInNet": "45",
			"rxBrandedCopayOutNet": "45",
			"rxBrandedCoinsInNet": "",
			"rxBrandedCoinsOutNet": "",
			"rxBrandedText": "",
			"hearingCopayInNet": "",
			"hearingCopayOutNet": "",
			"hearingCoinsInNet": "",
			"hearingCoinsOutNet": "",
			"hearingText": "child hearing aid",
			"adultDentalCopayInNet": "",
			"adultDentalCopayOutNet": "",
			"adultDentalCoinsInNet": "",
			"adultDentalCoinsOutNet": "",
			"adultDentalText": "",
			"childDentalCopayInNet": "",
			"childDentalCopayOutNet": "",
			"childDentalCoinsInNet": "",
			"childDentalCoinsOutNet": "",
			"childDentalText": "50% restorative, 50% preventative",
			"visionCopayInNet": "",
			"visionCopayOutNet": "",
			"visionCoinsInNet": "",
			"visionCoinsOutNet": "",
			"visionText": "$25 exam, 50% lenses",
			"emergencyRoomVisitCopayInNet": "150",
			"emergencyRoomVisitCopayOutNet": "150",
			"emergencyRoomVisitCoinsInNet": "",
			"emergencyRoomVisitCoinsOutNet": "",
			"emergencyRoomVisitText": "",
			"outpatientSurgeryCopayInNet": "",
			"outpatientSurgeryCopayOutNet": "",
			"outpatientSurgeryCoinsInNet": "",
			"outpatientSurgeryCoinsOutNet": "",
			"outpatientSurgeryText": "20% after deductible",
			"labsXraysServicesCopayInNet": "",
			"labsXraysServicesCopayOutNet": "",
			"labsXraysServicesCoinsInNet": "",
			"labsXraysServicesCoinsOutNet": "",
			"labsXraysServicesText": "No charge if part of office visit, otherwise $35",
			"hospitalInpatientCopayInNet": "",
			"hospitalInpatientCopayOutNet": "",
			"hospitalInpatientCoinsInNet": "",
			"hospitalInpatientCoinsOutNet": "",
			"hospitalInpatientText": "20% after deductible",
			"acupunctureCopayInNet": "",
			"acupunctureCopayOutNet": "",
			"acupunctureCoinsInNet": "",
			"acupunctureCoinsOutNet": "",
			"acupunctureText": "",
			"chiropracticCopayInNet": "30",
			"chiropracticCopayOutNet": "30",
			"chiropracticCoinsInNet": "",
			"chiropracticCoinsOutNet": "",
			"chiropracticText": "10 visits/year",
			"infertilityServicesCopayInNet": "",
			"infertilityServicesCopayOutNet": "",
			"infertilityServicesCoinsInNet": "",
			"infertilityServicesCoinsOutNet": "",
			"infertilityServicesText": "",
			"mentalHealthOutpatientCopayInNet": "30",
			"mentalHealthOutpatientCopayOutNet": "30",
			"mentalHealthOutpatientCoinsInNet": "30",
			"mentalHealthOutpatientCoinsOutNet": "30",
			"mentalHealthOutpatientText": "",
			"habilitativeServicesCopayInNet": "",
			"habilitativeServicesCopayOutNet": "",
			"habilitativeServicesCoinsInNet": "",
			"habilitativeServicesCoinsOutNet": "",
			"habilitativeServicesText": "",
			"autismServicesCopayInNet": "",
			"autismServicesCopayOutNet": "",
			"autismServicesCoinsInNet": "",
			"autismServicesCoinsOutNet": "",
			"autismServicesText": "Yes. Applied Behavioral Therapy excluded",
			"bariatricSurgeryCopayInNet": "",
			"bariatricSurgeryCopayOutNet": "",
			"bariatricSurgeryCoinsInNet": "",
			"bariatricSurgeryCoinsOutNet": "",
			"bariatricSurgeryText": "No",
			"rehabServicesCopayInNet": "",
			"rehabServicesCopayOutNet": "",
			"rehabServicesCoinsInNet": "",
			"rehabServicesCoinsOutNet": "",
			"rehabServicesText": "No",
			"skilledNursingDayLimitCopayInNet": "",
			"skilledNursingDayLimitCopayOutNet": "",
			"skilledNursingDayLimitCoinsInNet": "",
			"skilledNursingDayLimitCoinsOutNet": "",
			"skilledNursingDayLimitText": "60 days",
			"planName": "PPO Std",
			"planCategory": "Bronze",
			"proposedEffectiveDate": "01/01/14",
			"selectionEndDate": "01/01/15",
			"policyHolder": "John Doe",
			"enrollee": "Jane Doe",
			"csrIndicator": "",
			"netMonthlyPremium": "149",
			"netYearlyPremium" : "1788",
			"employerContribution": "150",
			"selectionStatus": "Enrolled",
			"selectionStatusDate": "01/01/14",
			"paymentDueDate": "01/15/14",
			"planPaymentURL": "www.abc.com",
			"planPaymentPhone": "123-456-7890",
			"planPaymentAddress": "123 Easy Street",
			"planQualityRating" : "Four stars",
			"Asthma" : "No",
			"coronaryDiseases" : "No"
	};
	return newAccount;
}

//Prepares dummy EE Account data, for testing
function getDummyPlan3()
{
	var newAccount = 
	{
			"group": "John Smith",
			"aptcEligible": "100",
			"aptcMax": "300",
			"aptcApplied": "100",
			"aptcAppliedHousehold": "100",
			"age": "49",
			"csrEligibleIndiv": "Yes",
			"estimatedOOP": "875",
			"csrEligiblePlan": "Yes",
			"nationalNetwork": "Yes at Out of Network rates",
			"childOnly": "",
			"hsaEligible": "No",
			"planYear": "2013",
			"hearing": "Yes",
			"hearingLink": "www.hearingLink.com",
			"dental": "Yes",
			"dentalLink": "www.dentalLink.com",
			"vision": "Yes",
			"visionLink": "www.visionLink.com",
			"habilitative": "Yes",
			"habilitativeLink": "www.habilitativeLink.com",
			"autism": "Yes",
			"autismLink": "www.autismLink.com",
			"acupuncture": "Yes",
			"acupunctureLink": "www.acupunctureLink.com",
			"chiropractic": "Yes",
			"chiropracticLink": "www.chiropracticLink.com",
			"bariatric": "Yes",
			"bariatricLink": "www.bariatricLink.com",
			"infertility": "Yes",
			"infertilityLink": "www.infertilityLink.com",
			"rehabilitative": "Yes",
			"rehabilitativeLink": "www.rehabilitativeLink.com",
			"mentalHealth": "",
			"metalLevel": "gold",
			"catastrophic": "No",
			"doctorChoice": "HMO",
			"issuer": "Iota Guardian",
			"monthlyPremium": "300",
			"deductibleInNet": "750",
			"deductibleOutNet": "",
			"providerDirectoryLink": "www.iotaguardian.com",
			"netPremium": "239",
			"totalCost": "3,743",
			"comparisonList": "",
			"oopMaxInNet": "6,000",
			"oopMaxOutNet": "",
			"mailOrderDrugsBenefit": "Yes",
			"mailOrderDrugsText": "",
			"weightLossBenefit": "Yes",
			"weightLossText": "",
			"diabetesBenefit": "Yes",
			"diabetesText": "",
			"babySBC": "600",
			"breastCancerSBC": "700",
			"diabetesSBC": "300",
			"prescriptionFormulary": "",
			"sbcLink": "",
			"planDocumentLink": "",
			"referralPolicy": "Referral required except to in-network gynecologists & mental health providers",
			"priorAuthorizationPolicy": "Required for hospital admission",
			"medicalLossRatio": "82",
			"cahpsInfo": "****",
			"pcpCopayInNet": "20",
			"pcpCopayOutNet": "20",
			"pcpCoinsInNet": "",
			"pcpCoinsOutNet": "",
			"pcpText": "",
			"specialistCopayInNet": "20",
			"specialistCopayOutNet": "20",
			"specialistCoinsInNet": "",
			"specialistCoinsOutNet": "",
			"specialistText": "",
			"rxGenericCopayInNet": "12",
			"rxGenericCopayOutNet": "12",
			"rxGenericCoinsInNet": "",
			"rxGenericCoinsOutNet": "",
			"rxGenericText": "",
			"rxBrandedCopayInNet": "24",
			"rxBrandedCopayOutNet": "24",
			"rxBrandedCoinsInNet": "",
			"rxBrandedCoinsOutNet": "",
			"rxBrandedText": "",
			"hearingCopayInNet": "",
			"hearingCopayOutNet": "",
			"hearingCoinsInNet": "",
			"hearingCoinsOutNet": "",
			"hearingText": "child & adult hearing aid",
			"adultDentalCopayInNet": "",
			"adultDentalCopayOutNet": "",
			"adultDentalCoinsInNet": "",
			"adultDentalCoinsOutNet": "",
			"adultDentalText": "60% restorative, 40% preventative, No out of network coverage",
			"childDentalCopayInNet": "",
			"childDentalCopayOutNet": "",
			"childDentalCoinsInNet": "",
			"childDentalCoinsOutNet": "",
			"childDentalText": "50% restorative, 50% preventative, Some orthodontic",
			"visionCopayInNet": "",
			"visionCopayOutNet": "",
			"visionCoinsInNet": "",
			"visionCoinsOutNet": "",
			"visionText": "$20 exam, $130 frame allowance",
			"emergencyRoomVisitCopayInNet": "100",
			"emergencyRoomVisitCopayOutNet": "100",
			"emergencyRoomVisitCoinsInNet": "",
			"emergencyRoomVisitCoinsOutNet": "",
			"emergencyRoomVisitText": "",
			"outpatientSurgeryCopayInNet": "",
			"outpatientSurgeryCopayOutNet": "",
			"outpatientSurgeryCoinsInNet": "",
			"outpatientSurgeryCoinsOutNet": "",
			"outpatientSurgeryText": "No charge after deductible",
			"labsXraysServicesCopayInNet": "",
			"labsXraysServicesCopayOutNet": "",
			"labsXraysServicesCoinsInNet": "",
			"labsXraysServicesCoinsOutNet": "",
			"labsXraysServicesText": "No charge if part of office visit, otherwise $25",
			"hospitalInpatientCopayInNet": "",
			"hospitalInpatientCopayOutNet": "",
			"hospitalInpatientCoinsInNet": "",
			"hospitalInpatientCoinsOutNet": "",
			"hospitalInpatientText": "10% after deductible",
			"acupunctureCopayInNet": "20",
			"acupunctureCopayOutNet": "20",
			"acupunctureCoinsInNet": "",
			"acupunctureCoinsOutNet": "",
			"acupunctureText": "20 visits/year",
			"chiropracticCopayInNet": "20",
			"chiropracticCopayOutNet": "20",
			"chiropracticCoinsInNet": "",
			"chiropracticCoinsOutNet": "",
			"chiropracticText": "30 visits/year",
			"infertilityServicesCopayInNet": "",
			"infertilityServicesCopayOutNet": "",
			"infertilityServicesCoinsInNet": "",
			"infertilityServicesCoinsOutNet": "",
			"infertilityServicesText": "Artificial insemination is limited to (6) cycles per lifetime",
			"mentalHealthOutpatientCopayInNet": "20",
			"mentalHealthOutpatientCopayOutNet": "20",
			"mentalHealthOutpatientCoinsInNet": "",
			"mentalHealthOutpatientCoinsOutNet": "",
			"mentalHealthOutpatientText": "no out of network",
			"habilitativeServicesCopayInNet": "",
			"habilitativeServicesCopayOutNet": "",
			"habilitativeServicesCoinsInNet": "",
			"habilitativeServicesCoinsOutNet": "",
			"habilitativeServicesText": "",
			"autismServicesCopayInNet": "",
			"autismServicesCopayOutNet": "",
			"autismServicesCoinsInNet": "",
			"autismServicesCoinsOutNet": "",
			"autismServicesText": "No",
			"bariatricSurgeryCopayInNet": "",
			"bariatricSurgeryCopayOutNet": "",
			"bariatricSurgeryCoinsInNet": "",
			"bariatricSurgeryCoinsOutNet": "",
			"bariatricSurgeryText": "No",
			"rehabServicesCopayInNet": "",
			"rehabServicesCopayOutNet": "",
			"rehabServicesCoinsInNet": "",
			"rehabServicesCoinsOutNet": "",
			"rehabServicesText": "No",
			"skilledNursingDayLimitCopayInNet": "",
			"skilledNursingDayLimitCopayOutNet": "",
			"skilledNursingDayLimitCoinsInNet": "",
			"skilledNursingDayLimitCoinsOutNet": "",
			"skilledNursingDayLimitText": "unlimited",
			"planName": "HMO",
			"planCategory": "Gold",
			"proposedEffectiveDate": "01/01/14",
			"selectionEndDate": "01/01/15",
			"policyHolder": "John Doe",
			"enrollee": "Jane Doe",
			"csrIndicator": "",
			"netMonthlyPremium": "239",
			"netYearlyPremium" : "2868",
			"employerContribution": "150",
			"selectionStatus": "Enrolled",
			"selectionStatusDate": "01/01/14",
			"paymentDueDate": "01/15/14",
			"planPaymentURL": "www.abc.com",
			"planPaymentPhone": "123-456-7890",
			"planPaymentAddress": "123 Easy Street",
			"planQualityRating" : "Five stars",
			"Asthma" : "Yes",
			"coronaryDiseases" : "Yes"
	};
	return newAccount;
}

//Prepares dummy EE Account data, for testing
function getDummyPlan4()
{
	var newAccount = 
	{
			"group": "John Smith",
			"aptcEligible": "100",
			"aptcMax": "300",
			"aptcApplied": "100",
			"aptcAppliedHousehold": "100",
			"age": "49",
			"csrEligibleIndiv": "No",
			"estimatedOOP": "400",
			"csrEligiblePlan": "Yes",
			"nationalNetwork": "Yes at Out of Network rates",
			"childOnly": "",
			"hsaEligible": "No",
			"planYear": "2012",
			"hearing": "",
			"hearingLink": "",
			"dental": "",
			"dentalLink": "",
			"vision": "",
			"visionLink": "",
			"habilitative": "",
			"habilitativeLink": "",
			"autism": "",
			"autismLink": "",
			"acupuncture": "",
			"acupunctureLink": "",
			"chiropractic": "",
			"chiropracticLink": "",
			"bariatric": "",
			"bariatricLink": "",
			"infertility": "",
			"infertilityLink": "",
			"rehabilitative": "",
			"rehabilitativeLink": "",
			"mentalHealth": "",
			"metalLevel": "gold",
			"catastrophic": "NO",
			"doctorChoice": "PPO",
			"issuer": "Iota Guardian",
			"monthlyPremium": "299",
			"deductibleInNet": "250",
			"deductibleOutNet": "",
			"providerDirectoryLink": "www.iotaguardian.com",
			"netPremium": "289",
			"totalCost": "3,868",
			"comparisonList": "",
			"oopMaxInNet": "6000",
			"oopMaxOutNet": "",
			"mailOrderDrugsBenefit": "Yes",
			"mailOrderDrugsText": "",
			"weightLossBenefit": "Yes",
			"weightLossText": "",
			"diabetesBenefit": "Yes",
			"diabetesText": "",
			"babySBC": "600",
			"breastCancerSBC": "700",
			"diabetesSBC": "300",
			"prescriptionFormulary": "",
			"sbcLink": "",
			"planDocumentLink": "",
			"referralPolicy": "Referral required except to in-network gynecologists & mental health providers",
			"priorAuthorizationPolicy": "Required for hospital admission",
			"medicalLossRatio": "82",
			"cahpsInfo": "****",
			"pcpCopayInNet": "10",
			"pcpCopayOutNet": "10",
			"pcpCoinsInNet": "",
			"pcpCoinsOutNet": "",
			"pcpText": "",
			"specialistCopayInNet": "15",
			"specialistCopayOutNet": "15",
			"specialistCoinsInNet": "",
			"specialistCoinsOutNet": "",
			"specialistText": "",
			"rxGenericCopayInNet": "5",
			"rxGenericCopayOutNet": "5",
			"rxGenericCoinsInNet": "",
			"rxGenericCoinsOutNet": "",
			"rxGenericText": "",
			"rxBrandedCopayInNet": "15",
			"rxBrandedCopayOutNet": "15",
			"rxBrandedCoinsInNet": "",
			"rxBrandedCoinsOutNet": "",
			"rxBrandedText": "",
			"hearingCopayInNet": "",
			"hearingCopayOutNet": "",
			"hearingCoinsInNet": "",
			"hearingCoinsOutNet": "",
			"hearingText": "child & adult hearing aid",
			"adultDentalCopayInNet": "",
			"adultDentalCopayOutNet": "",
			"adultDentalCoinsInNet": "",
			"adultDentalCoinsOutNet": "",
			"adultDentalText": "60% restorative, 40% preventative, No out of network coverage",
			"childDentalCopayInNet": "",
			"childDentalCopayOutNet": "",
			"childDentalCoinsInNet": "",
			"childDentalCoinsOutNet": "",
			"childDentalText": "50% restorative, 50% preventative, Some orthodontic",
			"visionCopayInNet": "",
			"visionCopayOutNet": "",
			"visionCoinsInNet": "",
			"visionCoinsOutNet": "",
			"visionText": "$20 exam, $130 frame allowance",
			"emergencyRoomVisitCopayInNet": "75",
			"emergencyRoomVisitCopayOutNet": "75",
			"emergencyRoomVisitCoinsInNet": "",
			"emergencyRoomVisitCoinsOutNet": "",
			"emergencyRoomVisitText": "",
			"outpatientSurgeryCopayInNet": "",
			"outpatientSurgeryCopayOutNet": "",
			"outpatientSurgeryCoinsInNet": "",
			"outpatientSurgeryCoinsOutNet": "",
			"outpatientSurgeryText": "No charge after deductible",
			"labsXraysServicesCopayInNet": "",
			"labsXraysServicesCopayOutNet": "",
			"labsXraysServicesCoinsInNet": "",
			"labsXraysServicesCoinsOutNet": "",
			"labsXraysServicesText": "No charge if part of office visit, otherwise $25",
			"hospitalInpatientCopayInNet": "",
			"hospitalInpatientCopayOutNet": "",
			"hospitalInpatientCoinsInNet": "",
			"hospitalInpatientCoinsOutNet": "",
			"hospitalInpatientText": "10% after deductible",
			"acupunctureCopayInNet": "20",
			"acupunctureCopayOutNet": "20",
			"acupunctureCoinsInNet": "",
			"acupunctureCoinsOutNet": "",
			"acupunctureText": "20 visits/year",
			"chiropracticCopayInNet": "20",
			"chiropracticCopayOutNet": "20",
			"chiropracticCoinsInNet": "",
			"chiropracticCoinsOutNet": "",
			"chiropracticText": "30 visits/year",
			"infertilityServicesCopayInNet": "",
			"infertilityServicesCopayOutNet": "",
			"infertilityServicesCoinsInNet": "",
			"infertilityServicesCoinsOutNet": "",
			"infertilityServicesText": "Artificial insemination is limited to (6) cycles per lifetime",
			"mentalHealthOutpatientCopayInNet": "20",
			"mentalHealthOutpatientCopayOutNet": "20",
			"mentalHealthOutpatientCoinsInNet": "",
			"mentalHealthOutpatientCoinsOutNet": "",
			"mentalHealthOutpatientText": "No out of network",
			"habilitativeServicesCopayInNet": "",
			"habilitativeServicesCopayOutNet": "",
			"habilitativeServicesCoinsInNet": "",
			"habilitativeServicesCoinsOutNet": "",
			"habilitativeServicesText": "",
			"autismServicesCopayInNet": "",
			"autismServicesCopayOutNet": "",
			"autismServicesCoinsInNet": "",
			"autismServicesCoinsOutNet": "",
			"autismServicesText": "No",
			"bariatricSurgeryCopayInNet": "",
			"bariatricSurgeryCopayOutNet": "",
			"bariatricSurgeryCoinsInNet": "",
			"bariatricSurgeryCoinsOutNet": "",
			"bariatricSurgeryText": "No",
			"rehabServicesCopayInNet": "",
			"rehabServicesCopayOutNet": "",
			"rehabServicesCoinsInNet": "",
			"rehabServicesCoinsOutNet": "",
			"rehabServicesText": "Yes",
			"skilledNursingDayLimitCopayInNet": "",
			"skilledNursingDayLimitCopayOutNet": "",
			"skilledNursingDayLimitCoinsInNet": "",
			"skilledNursingDayLimitCoinsOutNet": "",
			"skilledNursingDayLimitText": "unlimited",
			"planName": "PPO",
			"planCategory": "Platinum",
			"proposedEffectiveDate": "01/01/14",
			"selectionEndDate": "01/01/15",
			"policyHolder": "John Doe",
			"enrollee": "Jane Doe",
			"csrIndicator": "",
			"netMonthlyPremium": "289",
			"netYearlyPremium" : "3468",
			"employerContribution": "150",
			"selectionStatus": "Enrolled",
			"selectionStatusDate": "01/01/14",
			"paymentDueDate": "01/15/14",
			"planPaymentURL": "www.abc.com",
			"planPaymentPhone": "123-456-7890",
			"planPaymentAddress": "123 Easy Street"
	};
	return newAccount;
}

//Prepares dummy EE Account data, for testing
function getDummyPerson()
{
	var newPerson = 
	{
			"group": "Joan Jett",
			"aptcEligible": "150",
			"aptcMax": "200",
			"aptcApplied": "150",
			"aptcAppliedHousehold": "100",
			"age": "57",
			"csrEligibleIndiv": "Yes",
			"aptcEligibleIndicator": "Yes"
	};
	return newPerson;
}

//awd test
function getDummyAppeal() 
{
	var newAppeal = 
	{
		"appealNumber" : "App0123",
		"appealAlert" : "N/A",
		"contracterAssigned" : "Grant Web",
		"federalAssigned" : "Coulton John",
		"appealType" : "Individual Market",
		"appealStatus" : "Open",
		"deadlineDate" : "8/11/2012",
		"appellantName" : "John Doe",
		"appealLevel" : "Level 1",
		"relevantDetermination" : "Requestor Name",
		"appealRequestor" : "Requestor Name",
		"appealPriority" : 0,
		"serviceArea" : "Virginia",
		"requestedDate" : "08/09/2012",
		"hearingDate" : "---",
		"completionDate" : "---",
		"lastModifiedDate" : "---",
		"creationDate" : "08/01/2012",
		"assignedToDate" : "08/11/2012",
		"appealValidity" : "Yes",
		"appealsRequestDeadline" : "08/31/2012",
		"timelyRequest" : 0,
		"goodCause" : 0,
		"goodCauseReason" : 2,
		"appelantAppealReason" : 0,
		"appealReasonInScope" : 0,
		"authorizedRequestor" : 1,
		"validityNotes" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
		"appealDocuments" : [],
		"appealNotes" : []
	};
	var documents = getDummyAppealDocuments();
	for (var i = 0; i < documents.length; i++)
	{
		newAppeal.appealDocuments.push(documents[i]);
	}
	return newAppeal;
}

//awd test
function getDummyAppealDocuments()
{
	var listOfDocuments= [];
	for (var i = 0; i < 3; i++) 
	{
		var newDocument = 
		{
			"personName" : "John Doe",
			"documentName" : "Ind. Paper Application.pdf",
			"documentType" : "Ind. Paper App Intake",
			"serviceArea" : "Virginia",
			"dateReceived" : "08/09/2012"
		};
		listOfDocuments.push(newDocument);
	}
	return listOfDocuments;
}

//awd test
function getDummyAppeal2() 
{
	var newAppeal = 
	{
		"appealNumber" : "App0124",
		"appealAlert" : "N/A",
		"contracterAssigned" : "Grant Web",
		"federalAssigned" : "Coulton John",
		"appealType" : "Shop Employee",
		"appealStatus" : "Open",
		"deadlineDate" : "8/11/2012",
		"appellantName" : "John Doe",
		"appealLevel" : "Level 2",
		"relevantDetermination" : "Requestor Name",
		"appealRequestor" : "Requestor Name",
		"appealPriority" : 0,
		"serviceArea" : "Virginia",
		"requestedDate" : "08/09/2012",
		"hearingDate" : "---",
		"completionDate" : "---",
		"lastModifiedDate" : "---",
		"creationDate" : "08/01/2012",
		"assignedToDate" : "08/11/2012",
		"appealValidity" : "Yes",
		"appealsRequestDeadline" : "08/31/2012",
		"timelyRequest" : 0,
		"goodCause" : 0,
		"goodCauseReason" : 2,
		"appelantAppealReason" : 0,
		"appealReasonInScope" : 0,
		"authorizedRequestor" : 1,
		"validityNotes" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
		"appealDocuments" : [],
		"appealNotes" : []
	};
	var documents = getDummyAppealDocuments();
	for (var i = 0; i < documents.length; i++)
	{
		newAppeal.appealDocuments.push(documents[i]);
	}
	return newAppeal;
}

//for testing integration with MY ACCOUNT and IND APP
function createDummyUserPrincipalContact()
{
	var contact = 
	{
		firstName : "Hank",
		lastName : "Sherman",
		address1:"123 Street",
		address2:"Apt 1",
		city: "CityTown",
		state: "MD",
		zip:"22033",
		ssn:"111-11-111",
		dob:"1970/01/09",
		email:"test@cgifederal.com"
			
	};
	return contact;
}




//for my account sprint 9 testing
function createDummyValidationInfo()
{
	var members = [];
	
	var eligibilityStatus = [];
	eligibilityStatus.push(createThinEligibility('01/02/2001', 'CHIP'));
	var member1 = createThinAppMember('One', null, 'Person', '', '', eligibilityStatus);
	members.push(member1);
	
	eligibilityStatus = [];
	eligibilityStatus.push(createThinEligibility('01/02/2002', 'Medicaid'));
	var member2 = createThinAppMember('Two', null, 'Person', '', '', eligibilityStatus);
	members.push(member2);
	
	//NONE
	eligibilityStatus = [];
	//eligibilityStatus.push(createThinEligibility('01/02/2002', 'Medicaid'));
	var member3 = createThinAppMember('Third', null, 'Person', '', '', eligibilityStatus);
	members.push(member3);
	
	
	eligibilityStatus = [];
	eligibilityStatus.push(createThinEligibility('11/02/2012', 'QHP'));
	var member4 = createThinAppMember('Fourth', null, 'Person', '', '', eligibilityStatus);
	members.push(member4);
	//InsuranceApplicationInfoVO (list)
	//has list of ApplicationMemberInfoVO
	//  each of which have list of MemberEligibilityStatusVO
	//which consist of  "eligibilityStatusDeterminationDate",
	// "eligibilityStatus"
	//create eligibilities for 
	
	return members;
}

//provides a set of 4 application members for testing
//once grabbed, set equal to <whatev>.applicationMember
//ex. this.dummyMembers = createDummyMembers();
//this.dummyMembers = this.dummyMembers.applicationMember;
function createDummyMembers()
{
	var members = 
	{
		"applicationMember": [{
			"csrf": null,
			"member": {
				"csrf": null,
				"birthDate": "Tue, 01 Jan 1980 00:00:00 CST",
				"identifier": "",
				"personName": {
					"csrf": null,
					"effectiveDate": null,
					"firstName": "Han",
					"middleName": "",
					"lastName": "Solo",
					"salutationName": "",
					"suffixName": ""
				},
				"telephonePlace": [{
					"csrf": null,
					"personTelephoneStartDate": null,
					"personTelephoneEndDate": null,
					"personTelephoneCategoryCode": "Cell",
					"telephonePlace": {
						"csrf": null,
						"areaNumber": null,
						"switchNumber": null,
						"lineNumber": null,
						"extensionNumber": null,
						"number": "123-123-1234",
						"telephoneCountry": {
							"csrf": null,
							"telephoneCountryCode": null,
							"elephoneCountryName": ""
						}
					},
					"personTelephoneRelationshipRoleCode": null,
					"receiveNotificationIndicator": null
				}],
				"personAddress": [{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Home",
					"personAddressStartDate": "Mon, 17 Dec 2012 16:31:41 CST",
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Delivery",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "76504",
						"streetName1": "123 Main Street",
						"streetName2": "",
						"cityName": "Belton",
						"stateCode": "TX",
						"countryCode": ""
					}
				},
				{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Mail",
					"personAddressStartDate": "Mon, 17 Dec 2012 16:31:41 CST",
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Mailing",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "76504",
						"streetName1": "123 Main Street",
						"streetName2": "",
						"cityName": "Belton",
						"stateCode": "TX",
						"countryCode": ""
					}
				},
				{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Residential",
					"personAddressStartDate": null,
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Residential",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "76504",
						"streetName1": "123 Main Street",
						"streetName2": "",
						"cityName": "Belton",
						"stateCode": "TX",
						"countryCode": ""
					}
				}],
				"personEmail": [{
					"csrf": null,
					"personEmailStartDate": null,
					"personEmailEndDate": null,
					"placeRelationshipRoleCode": "",
					"messagePlace": {
						"csrf": null,
						"emailAddressName": "han.solo@gmail.com",
						"emailAddressIdentifier": ""
					},
					"personEmailVerifiedIndicator": null,
					"personEmailVerifiedDateTime": null,
					"receiveNotificationIndicator": null
				}],
				"personTrackingNumber": "",
				"personIdentification": [{
					"csrf": null,
					"personIdentificationValueText": "",
					"personIdentificationEffectiveDate": null,
					"personIdentificationUpdateQuantity": 0,
					"personIdentificationType": {
						"csrf": null,
						"personIdentificationTypeCode": "",
						"personIdentificationTypeName": ""
					},
					"personIdentificationOtherTypeText": null,
					"personIdentificationEndDate": null,
					"physicalDocumentTypeCode": null,
					"physicalDocumentTypeName": null
				},
				{
					"csrf": null,
					"personIdentificationValueText": "",
					"personIdentificationEffectiveDate": null,
					"personIdentificationUpdateQuantity": 0,
					"personIdentificationType": {
						"csrf": null,
						"personIdentificationTypeCode": "",
						"personIdentificationTypeName": ""
					},
					"personIdentificationOtherTypeText": null,
					"personIdentificationEndDate": null,
					"physicalDocumentTypeCode": null,
					"physicalDocumentTypeName": null
				}],
				"genderTypeCode": "",
				"personTypeCode": "",
				"ethnicityTypeCode": "",
				"personRace": [{
					"csrf": null,
					"personRaceName": "",
					"personOriginalCountryCode": "",
					"raceSubCode": "",
					"raceTypeCode": ""
				}],
				"personCitizenshipStatus": [{
					"csrf": null,
					"personCitizenshipStatusDate": null,
					"citizenshipStatusType": {
						"csrf": null,
						"personCitizenshipStatusCode": "",
						"personCitizenshipStatusName": ""
					}
				}],
				"knownPersonWorkType": []
			},
			"incarcerationStartDate": null,
			"incarcerationEndDate": null,
			"incarcerationStatusIndicator": "",
			"residencyStartDate": null,
			"residencyEndDate": null,
			"residencyStatusIndicator": "",
			"lawfulPresenceStartDate": null,
			"lawfulPresenceEndDate": null,
			"lawfulPresenceStatusIndicator": "",
			"coverageStartDate": null,
			"coverageEndDate": null,
			"pregnancyIndicator": "",
			"expectedDeliveryDate": null,
			"fixedAddressIndicator": "true",
			"financialAssistanceIndicator": "Not Applicable",
			"incarcerationType": "",
			"otherRaceText": "",
			"otherEthnicityText": "",
			"taxFilingStatusTypeCode": "",
			"spokenLanguage": "",
			"writtenLanguage": "",
			"memberSchoolStatus": [{
				"csrf": null,
				"applicationMemberSchoolStatusDate": null,
				"schoolStatusType": "",
				"id": null
			}],
			"memberEmploymentStatus": [{
				"csrf": null,
				"applicationMemberEmploymentStatusDate": null,
				"employmentStatus": "",
				"id": null
			}],
			"memberEvent": [{
				"csrf": null,
				"identifier": "",
				"datetime": null,
				"memberEligibility": {
					"csrf": null,
					"eligibilityResultText": "",
					"eligibilityIndicator": "",
					"eligibilityDeterminationDate": null,
					"eligibilityStartDate": null,
					"eligibilityEndDate": null,
					"eligibilityReasonText": "",
					"memberEligibilityType": "",
					"eligibilityStartDateType": "",
					"eligibilityEndDateType": "",
					"eligibilityResultAmount": 0,
					"sepEffectiveDateRuleCode": null,
					"csrBenefitsIndicator": null,
					"eligibilityActiveIndicator": null
				},
				"memberVerification": {
					"csrf": null,
					"requestSentDate": null,
					"resultReceivedDate": null,
					"reasonText": "",
					"resultText": "",
					"indicator": "",
					"sourceName": "",
					"memberVerificationType": "",
					"incomeVerification": {
						"csrf": null,
						"modifiedAdjustedGrossIncomeAmount": 0,
						"aptcPrimaryFilingRequirementIndicator": "",
						"aptcSpouseFilingRequirementIndicator": "",
						"personIdentificationValueText": "",
						"personIdentificationTypeCode": "",
						"firstName": "",
						"middleName": "",
						"lastName": "",
						"taxFilingStatusTypeCode": "",
						"ssaNameControlText": "",
						"medicaidFPLPercentage": 0,
						"requestdentifier": null,
						"taxExemptionQuantity": null,
						"inconsistentIncomeAcceptedExplanationIndicator": null,
						"currentMonthlyIncomeAmount": null,
						"identifyingNonFilerSSN": [],
						"taxYear": null,
						"returnModifiedAdjustedGrossIncomeAmount": null,
						"returnAdjustedGrossIncomeAmount": null,
						"annualIncomeWithinThresholdIndicator": null,
						"attestedAnnualIncome": null,
						"annualizedEDSCurrentIncome": null,
						"percentDifference": null,
						"percentThreshholdAnnualIncome": null,
						"attestedTaxHouseholdAnnualIncome": null,
						"attestedMedicaidHouseholdAnnualIncome": null,
						"attestedHouseholdCurrentIncome": null,
						"useAnnualIncomeIndicator": null,
						"edsAnnualIncomePercent": null,
						"attestedAnnualIncomePercent": null,
						"edsHouseholdCurrentIncomePercent": null,
						"percentThreshholdLimit": null,
						"attestedHouseholdCurrentIncomePercent": null,
						"applicantApplicableMAGIStandard": null,
						"applicantApplicableMedicaidMagiStandard": null,
						"applicantApplicableCHIPMagiStandard": null,
						"ssaTitleIIMonthlyIncomeAmount": null,
						"ssaTitleIIYearlyIncomeAmount": null,
						"ssaTaxableBenefitIncomeAmount": null
					},
					"ssaNameControlText": "",
					"timer": null,
					"adjudicator": null,
					"verificationActiveIndicator": false,
					"memberVerificationTypeName": null,
					"memberIncarcerationVerification": null,
					"dataSourceType": {
						"csrf": null,
						"dataSourceTypeCode": "",
						"dataSourceTypeName": "",
						"dataSourceExternalIndicator": false
					},
					"dataFoundIndicator": false,
					"verificationDeterminationDateTime": null,
					"memberResidencyVerification": null,
					"addressServicedIndicator": false,
					"medicaidStateIndicator": false,
					"memberImmigrationStatusVerification": {
						"csrf": null,
						"immigrationStep1ResultReceivedDate": null,
						"immigrationStep1ReasonText": "",
						"immigrationStep1DataFoundIndicator": false,
						"immigrationStep1ResultText": "",
						"immigrationStep1Indicator": "",
						"immigrationStep1VerificationDeterminationDateTime": null,
						"immigrationStep1DataExpectedIndicator": null,
						"immigrationStep2ResultReceivedDate": null,
						"immigrationStep2ReasonText": "",
						"immigrationStep2ResultText": "",
						"immigrationStep2Indicator": "",
						"immigrationStep2DataFoundIndicator": false,
						"immigrationStep2VerificationDeterminationDateTime": null,
						"immigrationStep2DataExpectedIndicator": null,
						"immigrationStep3ResultReceivedDate": null,
						"immigrationStep3ReasonText": "",
						"immigrationStep3ResultText": "",
						"immigrationStep3Indicator": "",
						"immigrationStep3DataFoundIndicator": false,
						"immigrationStep3VerificationDeterminationDateTime": null,
						"immigrationStep3DataExpectedIndicator": null,
						"immigrationStep1DHSCaseNumber": null,
						"immigrationEligibilityTypeCode": null,
						"immigrationEligibilityTypeName": null,
						"step1NonCitGrantDate": null,
						"step2NonCitGrantDate": null,
						"step3NonCitGrantDate": null,
						"step1NonCitAdmToDate": null,
						"step2NonCitAdmToDate": null,
						"step3NonCitAdmToDate": null,
						"immigrationEADTypeCode": null,
						"immigrationEADTypeName": null,
						"receivedStep2MajorTypeCode": null,
						"receivedStep2MajorTypeName": null,
						"receivedStep3MajorTypeCode": null,
						"receivedStep3MajorTypeName": null,
						"receivedStep1COAType": [],
						"receivedStep2COAType": [],
						"receivedStep3COAType": [],
						"immigrationStep1LawfulPresenceVerifiedIndicator": null,
						"immigrationStep2LawfulPresenceVerifiedIndicator": null,
						"immigrationStep3LawfulPresenceVerifiedIndicator": null,
						"immigrationStep1QualifiednoncitizenIndicator": null,
						"immigrationStep2QualifiednoncitizenIndicator": null,
						"immigrationStep3QualifiednoncitizenIndicator": null,
						"immigrationStep1FiveYearBarAppliedIndicator": false,
						"immigrationStep2FiveYearBarAppliedIndicator": false,
						"immigrationStep3FiveYearBarAppliedIndicator": false,
						"immigrationStep1FiveYearBarMetIndicator": false,
						"immigrationStep2FiveYearBarMetIndicator": false,
						"immigrationStep3FiveYearBarMetIndicator": false,
						"immigrationStatusRedeterminationDate": null
					},
					"ssnVerified": false,
					"citizenshipVerified": false,
					"edsResponseExpected": false,
					"dhsResponseCode": "",
					"requestIdentifier": null,
					"dataExpectedIndicator": null,
					"reportedHubErrorTypeCode": null,
					"reportedHubErrorTypeName": null,
					"requestedApplicationMemberNonESIMecVerification": [],
					"mecOtherPublicNonEsiInconsistencyCount": null,
					"memberCurrentIncomeVerification": null,
					"reportedSourceSystemError": [],
					"taxHouseholdSizeDifference": null,
					"useAnnualIncome": null,
					"supportingPhysicalDocument": [],
					"applicantPregnancyCategoryIndicator": null,
					"applicantChildCategoryIndicator": null,
					"priorNumbersMatch": false,
					"notToBeCheckedStatus": false,
					"priorSSNCitizenshipDataMatch": false,
					"finalizingDataSourceType": null,
					"statusExpired": null,
					"chipOrMAGIEligibleStatus": null
				},
				"memberCalculation": {
					"csrf": null,
					"requestSentDate": null,
					"resultReceivedDate": null,
					"reasonText": "",
					"resultText": "",
					"indicator": "",
					"sourceName": "",
					"memberCalculationType": "",
					"maxAptcComputation": {
						"csrf": null,
						"benchmarkPolicyPremiumAmount": null,
						"adultApplicantQuantity": null,
						"childApplicantQuantity": null
					},
					"ratingEngineComputation": {
						"csrf": null,
						"maxAPTCAmount": null,
						"remanderBHCAmount": null,
						"requestdentifier": null,
						"aptcEligibilityIndicator": null,
						"ptcFPLPercentage": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"benefitYear": null
					},
					"ptcComputation": {
						"csrf": null,
						"ptcFPLPercentage": null,
						"taxHouseholdMemberQuantity": null,
						"taxHouseholdUnlawfullMemberQuantity": null,
						"ptcFPLAmount": null,
						"ptcFPLExcludeUnlawfullAmount": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"projectedTaxHouseholdIncomeAmount": null
					},
					"taxHousholdAdjustedMonthlyPremiumAmount": {
						"csrf": null,
						"benchmarkPolicyPremiumAmount": null,
						"ptcFPLPercentage": null,
						"taxHouseholdMemberQuantity": null,
						"taxHouseholdUnlawfullMemberQuantity": null,
						"ptcFPLAmount": null,
						"ptcFPLExcludeUnlawfullAmount": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"taxReturnFilingStatusTypeCode": null,
						"requestIdentifier": null,
						"coverageFamilyQuantity": null,
						"birthDate": [],
						"coverageCategoryTypeCode": []
					},
					"medicaidComputation": null,
					"chipComputation": null
				},
				"memberEventType": "",
				"id": null
			}],
			"memberEmployer": {
				"csrf": null,
				"employerOrganization": {
					"csrf": null,
					"officeSymbolText": null,
					"businessStatusDate": null,
					"organizationStructureType": null,
					"externalOrganizationIdentifier": [],
					"issuerOrganization": null,
					"organizationNomenclature": [],
					"issuerUser": [],
					"organizationType": null,
					"organizationAddress": [],
					"organizationIdentifier": null,
					"organizationEmail": [],
					"organizationTelephone": [],
					"companyEmailDomainName": null,
					"organizationBusinessStatus": null,
					"organizationURL": []
				},
				"employeeEmployerIdentifier": "",
				"employeeSsnNumber": "",
				"memberShareSelfOnlyPremiumAmount": 0,
				"employerCoverageFamilyMemberIndicator": null,
				"employerLowestCostPlanName": "",
				"employerLowestCostPlanCost": 0.0,
				"employerSponsoredCoverageIndicator": null,
				"periodCycleType": {
					"csrf": null,
					"periodTypeCode": "",
					"periodTypeName": "",
					"concurrencyHash": ""
				},
				"concurrencyHash": "",
				"overThirtyHourWorkWeekIndicator": null,
				"employerMinimumEssentialCoverageIndicator": null,
				"employerSponsoredCoverageEligibilityStartDate": null,
				"definingESIEnrollmentStatusTypeCode": "",
				"definingESIEnrollmentStatusTypeName": "",
				"employerStatus": null
			},
			//"incarcerationTypeName": "",
			"memberIndianStatus": [],
			"memberType": "",
			"relationshipNameText": "",
			"memberStatusType": "",
			"memberRoleType": "",
			"parentCaretakerIndicator": false,
			"priorInsuranceEndDate": null,
			"insuredIndicator": "",
			"disabilityIndicator": "",
			"blindnessIndicator": "",
			"applicationMemberFamilyTypeCode": "",
			"applicationMemberFamilyTypeName": "",
			"applicationMemberTaxFilerTypeCode": "",
			"applicationMemberTaxFilerTypeName": "",
			"parentApplicationMember": [{
				"csrf": null,
				"applicationMemberIdentifier": "",
				"applicationMemberAssociationDate": null,
				"applicationMemberAssociationReasonTypeCode": "",
				"applicationMemberAssociationReasonTypeName": null,
				"memberAssociationRoleTypeCode": null,
				"memberAssociationRoleTypeName": null,
				"superordinateMember": null,
				"subordinateMember": null,
				"id": null
			}],
			"applicationMemberTaxFiler": {
				"csrf": null,
				"concurrencyHash": "",
				"projectedTaxHouseholdIncomeAmount": null,
				"taxReturnFilingStatusTypeCode": "",
				"taxFilingStatusChangeIndicator": false,
				"enrollmentAPTCAmount": 0.0,
				"taxHouseholdIdentifier": null,
				"promptTaxReturnFilingStatusCount": null,
				"projectedTaxReturnFilingStatusTypeCode": null,
				"projectedTaxReturnFilingStatusTypeName": null,
				"csramount": 0.0,
				"csrtypeCode": ""
			},
			"applicationMemberEmployeeTypeCode": "",
			"applicationMemberEmployeeTypeName": "",
			"childApplicationMember": [{
				"csrf": null,
				"applicationMemberIdentifier": "",
				"applicationMemberAssociationDate": null,
				"applicationMemberAssociationReasonTypeCode": "",
				"applicationMemberAssociationReasonTypeName": null,
				"memberAssociationRoleTypeCode": null,
				"memberAssociationRoleTypeName": null,
				"superordinateMember": null,
				"subordinateMember": null,
				"id": null
			}],
			"applicationMemberSubscriberTypeCode": "",
			"applicationMemberSubscriberTypeName": "",
			"applicationFamilyGroupTypeCode": "",
			"applicationFamilyGroupTypeName": "",
			"applicationMemberEmployerIdentifier": "",
			"applicationMemberIndianStatusDate": null,
			"federalIndianStatusCode": "",
			"federalIndianStatusName": "",
			"indianStatusEvidenceDocument": [],
			"longTermCareIndicator": null,
			"unpaidBillIndicator": null,
			"absentParentIndicator": null,
			"absentParentName": "",
			"provideAbsentParentInfoIndicator": null,
			"goodCauseExemptionIndicator": null,
			"goodCauseExemptionText": "",
			"electronicNoticeIndicator": null,
			"personRecognizedTribeIndicator": null,
			"personAmericanIndianAlaskanNativeIndicator": null,
			"recentlyUnemployedIndicator": null,
			"recentlyUnemployedStartDate": null,
			"otherHealthInsuranceIndicator": true,
			"otherHealthInsuranceCoverageEndDate": null,
			"otherHealthInsuranceName": "",
			"otherHealthInsurancePolicyNumber": "",
			"concurrencyHash": "",
			"eligibleITUIndicator": null,
			"stateEmployeeChildIndicator": null,
			"nonEmployerSponsoredCoverageIndicator": false,
			"receiveITUIndicator": null,
			"requestingCoverageIndicator": true,
			"babyDueQuantity": null,
			"contactIndicator": true,
			"insuranceProductTypeCode": "",
			"insuranceProductTypeName": "",
			"applicationMemberIdentifier": "cb6d9a77-4f6a-45bd-a484-b64cc22d1b60",
			"nonCustodialParentName": "",
			"citizenshipStatusIndicator": "",
			"applicationMemberAnnualTaxIncome": [{
				"csrf": null,
				"taxYear": null,
				"annualIncomeAmount": null,
				"id": null
			}],
			"subscribedInsuranceProductTypeAttestation": [],
			"definingMemberMedicaidAnchorTypeCode": "",
			"definingMemberMedicaidAnchorTypeName": "",
			"medicaidHouseholdAnchor": {
				"csrf": null,
				"medicaidHouseholdIdentifier": null,
				"medicaidHouseholdMemberQuantity": null
			},
			"receivedCurrentIncomeSourceAttestation": [],
			"applicationMemberCurrentYearTaxFiler": {
				"csrf": null,
				"taxFilingStatusChangeIndicator": false,
				"currentYearTaxHouseholdIdentifier": "",
				"taxReturnFilingStatusTypeCode": "2",
				"taxReturnFilingStatusTypeName": "Married filing jointly",
				"promptSpouseAddressCount": 0
			},
			"nonCustodialParentIndicator": "",
			"spouseHouseholdMemberIndicator": null,
			"medicaidTaxRoleTypeCode": "",
			"dependentIndicator": null,
			"hasSpouseIndicator": null,
			"studentIndicator": null,
			"relationshipToTaxFilerTypeCode": "",
			"medicaidHousehold": {
				"csrf": null,
				"medicaidTaxRole": null,
				"currentYearTaxAnchor": null,
				"medicaidAnchor": null,
				"spouseCounter": null,
				"parentCounter": null,
				"parentsLivingWithCounter": null,
				"caretakerCounter": null,
				"householdMembersCounter": null,
				"pregnanciesCounter": null,
				"pregnancyInHouseholdIndicator": null,
				"claimingTaxFilerNotApplicationMemberIndicator": null,
				"medicaidChildAgeIndicator": null,
				"under21AndFTSOption": null,
				"addressSameAsClaimingFiler": null,
				"unableToDetermineMedicaidEligibilityDate": null,
				"unableToDetermineMedicaidEligibilityReason": null,
				"nonCustodialClaimerCustodialApplyingIndicator": null,
				"parentsFilingJointlyIndicator": null,
				"sameHouseholdParentsSeparateTaxIndicator": null,
				"nonCustodialClaimerBothParentsApplyingIndicator": null,
				"totalBabiesDue": null,
				"childLivesWithParentIndicator": false,
				"marriedFilingJointlyIndicator": false
			},
			"coverageYearTaxHousehold": {
				"csrf": null,
				"plannedReturnFilingStatus": null,
				"spouseCounter": null,
				"taxHouseholdSize": null,
				"dependentIndicator": null,
				"marriedFilingJointlyIndicator": null,
				"hasSpouseIndicator": null,
				"taxFilerIndicator": null
			},
			"applicationMemberCurrentYearTaxFilerTypeCode": "1",
			"applicationMemberCurrentYearTaxFilerTypeName": "Current Year Tax Filer Anchor",
			"medicaidEligibilityDeterminationDate": null,
			"medicaidEligibilityReasonText": "",
			"promptParentAddressCount": null,
			"livedInUS5YearIndicator": null,
			"largeAssetIndicator": null,
			"calculatedAnnualIncomeVerificationIndicator": null,
			"coverageYearAnnualIncomeExpectedToChangeIndicator": null,
			"qualifyPlanSelectIndicator": null,
			"spouseInHouseholdIndicator": null,
			"babyOrAdoptedInHouseholdIndicator": null,
			"serviceAreaChangeIndicator": null,
			"notChosenPlanIndicator": null,
			"definingCircumstanceChangeAttestation": [],
			"enrollmentPeriodReason": null,
			"planSelectButtonStatus": null,
			"definingApplicationMemberContactMethod": [{
				"csrf": null,
				"definingContactMethodTypeCode": "4",
				"definingContactMethodTypeName": "E-mail",
				"id": null
			}],
			"hubTransferAckRequestID": null,
			"hubTransferAckStatusCode": null,
			"hubTransferTimeStamp": null,
			"currentDate": null,
			"proposedCoverageStartDate": null,
			"maxProposedCoverageEffectiveDate": null,
			"healthcareSharingMinistryName": null,
			"healthcareSharingMinistryDistrict": null,
			"healthcareSharingMinistryCongregation": null,
			"healthcareSharingMinistryCounty": null,
			"healthcareSharingMinistryCity": null,
			"healthcareSharingMinistryState": null,
			"healthcareSharingMinistryZip": null,
			"durationOfMembershipHSM": null,
			"healthcareSharingMinistryExistIndicator": null,
			"healthcareSharingMinistryActiveStartDate": null,
			"healthcareSharingMinistryActiveEndDate": null,
			"memberExemptions": [],
			"id": null,
			"nonESInsurance": [],
			"marriedFilingJointlyIndicator": null,
			"reuseTaxDataPermissionIndicator": false,
			"isIncarcerated": null,
			"sevisIDIndicator": null,
			"doNotKnowIncomeIndicator": "",
			"greaterThanFPLIndicator": "",
			"incomeSubjectToFederalRestrictions": "",
			"receivedIndianHealthServicesIndicator": "",
			"tribalAmount": "",
			"eligibleESIRetirementCobraParentIndicator": "",
			"blindDisabledIndicator": null,
			"eligibleImmigrationStatusIndicator": null,
			"parentOfStudentLivingInStateIndicator": null,
			"priorTo1956Indicator": null,
			"taxFilerIndicator": "",
			"usMailIndicator": "true",
			"medicaidDeterminationIndicator": null,
			"withdrawApplicationIndicator": null,
			"registerToVoteIndicator": null,
			"caretakerRelativeIndicator": null,
			"avgHoursPerWeek": null,
			"preliminaryParentCaretakerRelative": null,
			"sameNameIndicator": "",
			"motherAvgHoursWeek": null,
			"fatherAvgHoursWeek": null,
			"preliminaryChildOfCaretakerRelative": null,
			"fosterCareIndicator": null,
			"fosterCareEndedBecauseOfAge": null,
			"studentParentInStateIndicator": "",
			"liveOutsideStateTemporarilyIndicator": "true",
			"coverageInDifferentStateIndicator": "",
			"privacyPolicyAgreementIndicator": null,
			"childOfCaretakerRelativeIsEnrolledIndicator": "",
			"amountIRSAnnualIncome": "",
			"amountSocialSecurityBenefitsIncome": "",
			"amountStateQuarterlyIncome": "",
			"amountStateUnemploymentIncome": "",
			"attestedAnnualIncome": "",
			"attestedIRSAnnualIncomeIndicator": null,
			"attestedMonthlyIncome": "",
			"attestedSocialSecurityBenefitsIncome": "",
			"attestedStateQuarterlyIncomeIndicator": null,
			"attestedStateUnemploymentIncome": "",
			"attestedIRSAnnualIncome": "",
			"ssnAlternateName": {
				"csrf": null,
				"effectiveDate": null,
				"firstName": "",
				"middleName": "",
				"lastName": "",
				"salutationName": "",
				"suffixName": ""
			},
			"employerInsurance": [{
				"csrf": null,
				"employerName": "",
				"employerSponsoredCoverageStartDate": null,
				"esiEnrollmentStatusType": "",
				"otherHealthInsurancePlanEndIndicator": null,
				"potentialMedicaidnonESIEnrolledIndicator": null,
				"primaryInsuredName": {
					"csrf": null,
					"effectiveDate": null,
					"firstName": "",
					"middleName": "",
					"lastName": "",
					"salutationName": "",
					"suffixName": ""
				}
			}],
			"deprivedChildIndicator": null,
			"fosterCareStateCode": "",
			"deceasedIndicator": false,
			"noticeDate": null,
			"ageLeftFosterCareCode": "",
			"hadMedicaidDuringFosterCareIndicator": null,
			"otherCoverageWithin6MonthsIndicator": null,
			"citizenshipDocumentAlternateName": {
				"csrf": null,
				"effectiveDate": null,
				"firstName": "",
				"middleName": "",
				"lastName": "",
				"salutationName": "",
				"suffixName": ""
			},
			"tribeName": "",
			"tribeStateCode": "",
			"tribeCode": "",
			"eligibleNewPlansIndicator": null,
			"losingCurrentPlanIndicator": null,
			"exchangeState": null,
			"noFixedAddressIndicator": false,
			"medicaidCorrectExchange": false,
			"qhpCorrectExchange": false,
			"optionStudentResidency": false,
			"studentResidencyAgeThreshold": null,
			"medicaidStudentResidencyRulesApplies": null,
			"onlyApplicantIndicator": false,
			"residencyState": null,
			"lastRecordIndicator": false,
			"specialRuleForTaxHouseholdApplies": false,
			"residencyStateList": [],
			"dependentFilerStateMatch": false,
			"aptcReferralIndicator": false,
			"attestedApplyingForCoverageIndicator": false,
			"attestedChildOfCaretakerIndicator": false,
			"attestedImmigrationStatusIndicator": false,
			"attestedCaretakerIndicator": false,
			"attestedCaretakerID": "",
			"dateOfAdoption": null,
			"dateGainedEligibleImmigrationStatus": null,
			"dateReleasedFromIncarceration": null,
			"dateMarried": null,
			"dateMoved": null,
			"monthlyIncomeGreaterThanFPLIndicator": "",
			"isMarriedIndicator": false,
			"livesWithIndcator": false,
			"livesWithAdultTaxClaimerIndicator": false,
			"livesWithMinorAgeDependentIndicator": false,
			"livesWithOtherParentNotClaimerIndicator": false,
			"movedFromCountyCode": "",
			"movedFromZipCode": "",
			"needsSeparateApplicationIndicator": false,
			"coverageYearDependentIndicator": false,
			"futureDependents": [],
			"veteranIndicator": false,
			"childOfVeteranIndicator": false,
			"spouseOfVeteranIndicator": false,
			"stateHealthBenefitAvaliableIndicator": false,
			"personForWorkQuarterExcludedIndicator": false,
			"applicantAge": null,
			"performVerificationIndicator": false
		},
		{
			"csrf": null,
			"member": {
				"csrf": null,
				"birthDate": "Sat, 10 Feb 1990 00:00:00 CST",
				"identifier": "",
				"personName": {
					"csrf": null,
					"effectiveDate": null,
					"firstName": "Mark",
					"middleName": "",
					"lastName": "Yates",
					"salutationName": "",
					"suffixName": ""
				},
				"telephonePlace": [{
					"csrf": null,
					"personTelephoneStartDate": null,
					"personTelephoneEndDate": null,
					"personTelephoneCategoryCode": "",
					"telephonePlace": {
						"csrf": null,
						"areaNumber": null,
						"switchNumber": null,
						"lineNumber": null,
						"extensionNumber": null,
						"number": "",
						"telephoneCountry": {
							"csrf": null,
							"telephoneCountryCode": null,
							"elephoneCountryName": ""
						}
					},
					"personTelephoneRelationshipRoleCode": null,
					"receiveNotificationIndicator": null
				},
				{
					"csrf": null,
					"personTelephoneStartDate": null,
					"personTelephoneEndDate": null,
					"personTelephoneCategoryCode": "",
					"telephonePlace": {
						"csrf": null,
						"areaNumber": null,
						"switchNumber": null,
						"lineNumber": null,
						"extensionNumber": null,
						"number": "",
						"telephoneCountry": {
							"csrf": null,
							"telephoneCountryCode": null,
							"elephoneCountryName": ""
						}
					},
					"personTelephoneRelationshipRoleCode": null,
					"receiveNotificationIndicator": null
				},
				{
					"csrf": null,
					"personTelephoneStartDate": null,
					"personTelephoneEndDate": null,
					"personTelephoneCategoryCode": "",
					"telephonePlace": {
						"csrf": null,
						"areaNumber": null,
						"switchNumber": null,
						"lineNumber": null,
						"extensionNumber": null,
						"number": "",
						"telephoneCountry": {
							"csrf": null,
							"telephoneCountryCode": null,
							"elephoneCountryName": ""
						}
					},
					"personTelephoneRelationshipRoleCode": null,
					"receiveNotificationIndicator": null
				}],
				"personAddress": [{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Home",
					"personAddressStartDate": null,
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Delivery",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "76504",
						"streetName1": "123 Main Street",
						"streetName2": "",
						"cityName": "Belton",
						"stateCode": "TX",
						"countryCode": ""
					}
				},
				{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Mail",
					"personAddressStartDate": null,
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Mailing",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "",
						"streetName1": "",
						"streetName2": "",
						"cityName": "",
						"stateCode": "",
						"countryCode": ""
					}
				},
				{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Residential",
					"personAddressStartDate": null,
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Residential",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "76504",
						"streetName1": "123 Main Street",
						"streetName2": "",
						"cityName": "Belton",
						"stateCode": "TX",
						"countryCode": ""
					}
				}],
				"personEmail": [{
					"csrf": null,
					"personEmailStartDate": null,
					"personEmailEndDate": null,
					"placeRelationshipRoleCode": "",
					"messagePlace": {
						"csrf": null,
						"emailAddressName": "",
						"emailAddressIdentifier": ""
					},
					"personEmailVerifiedIndicator": null,
					"personEmailVerifiedDateTime": null,
					"receiveNotificationIndicator": null
				}],
				"personTrackingNumber": "",
				"personIdentification": [{
					"csrf": null,
					"personIdentificationValueText": "",
					"personIdentificationEffectiveDate": null,
					"personIdentificationUpdateQuantity": 0,
					"personIdentificationType": {
						"csrf": null,
						"personIdentificationTypeCode": "",
						"personIdentificationTypeName": ""
					},
					"personIdentificationOtherTypeText": null,
					"personIdentificationEndDate": null,
					"physicalDocumentTypeCode": null,
					"physicalDocumentTypeName": null
				},
				{
					"csrf": null,
					"personIdentificationValueText": "",
					"personIdentificationEffectiveDate": null,
					"personIdentificationUpdateQuantity": 0,
					"personIdentificationType": {
						"csrf": null,
						"personIdentificationTypeCode": "",
						"personIdentificationTypeName": ""
					},
					"personIdentificationOtherTypeText": null,
					"personIdentificationEndDate": null,
					"physicalDocumentTypeCode": null,
					"physicalDocumentTypeName": null
				}],
				"genderTypeCode": "",
				"personTypeCode": "",
				"ethnicityTypeCode": "",
				"personRace": [{
					"csrf": null,
					"personRaceName": "",
					"personOriginalCountryCode": "",
					"raceSubCode": "",
					"raceTypeCode": ""
				}],
				"personCitizenshipStatus": [{
					"csrf": null,
					"personCitizenshipStatusDate": null,
					"citizenshipStatusType": {
						"csrf": null,
						"personCitizenshipStatusCode": "",
						"personCitizenshipStatusName": ""
					}
				}],
				"knownPersonWorkType": []
			},
			"incarcerationStartDate": null,
			"incarcerationEndDate": null,
			"incarcerationStatusIndicator": "",
			"residencyStartDate": null,
			"residencyEndDate": null,
			"residencyStatusIndicator": "",
			"lawfulPresenceStartDate": null,
			"lawfulPresenceEndDate": null,
			"lawfulPresenceStatusIndicator": "",
			"coverageStartDate": null,
			"coverageEndDate": null,
			"pregnancyIndicator": "",
			"expectedDeliveryDate": null,
			"fixedAddressIndicator": "true",
			"financialAssistanceIndicator": "Not Applicable",
			"incarcerationType": "",
			"otherRaceText": "",
			"otherEthnicityText": "",
			"taxFilingStatusTypeCode": "",
			"spokenLanguage": "",
			"writtenLanguage": "",
			"memberSchoolStatus": [{
				"csrf": null,
				"applicationMemberSchoolStatusDate": null,
				"schoolStatusType": "",
				"id": null
			}],
			"memberEmploymentStatus": [{
				"csrf": null,
				"applicationMemberEmploymentStatusDate": null,
				"employmentStatus": "",
				"id": null
			}],
			"memberEvent": [{
				"csrf": null,
				"identifier": "",
				"datetime": null,
				"memberEligibility": {
					"csrf": null,
					"eligibilityResultText": "",
					"eligibilityIndicator": "",
					"eligibilityDeterminationDate": null,
					"eligibilityStartDate": null,
					"eligibilityEndDate": null,
					"eligibilityReasonText": "",
					"memberEligibilityType": "",
					"eligibilityStartDateType": "",
					"eligibilityEndDateType": "",
					"eligibilityResultAmount": 0,
					"sepEffectiveDateRuleCode": null,
					"csrBenefitsIndicator": null,
					"eligibilityActiveIndicator": null
				},
				"memberVerification": {
					"csrf": null,
					"requestSentDate": null,
					"resultReceivedDate": null,
					"reasonText": "",
					"resultText": "",
					"indicator": "",
					"sourceName": "",
					"memberVerificationType": "",
					"incomeVerification": {
						"csrf": null,
						"modifiedAdjustedGrossIncomeAmount": 0,
						"aptcPrimaryFilingRequirementIndicator": "",
						"aptcSpouseFilingRequirementIndicator": "",
						"personIdentificationValueText": "",
						"personIdentificationTypeCode": "",
						"firstName": "",
						"middleName": "",
						"lastName": "",
						"taxFilingStatusTypeCode": "",
						"ssaNameControlText": "",
						"medicaidFPLPercentage": 0,
						"requestdentifier": null,
						"taxExemptionQuantity": null,
						"inconsistentIncomeAcceptedExplanationIndicator": null,
						"currentMonthlyIncomeAmount": null,
						"identifyingNonFilerSSN": [],
						"taxYear": null,
						"returnModifiedAdjustedGrossIncomeAmount": null,
						"returnAdjustedGrossIncomeAmount": null,
						"annualIncomeWithinThresholdIndicator": null,
						"attestedAnnualIncome": null,
						"annualizedEDSCurrentIncome": null,
						"percentDifference": null,
						"percentThreshholdAnnualIncome": null,
						"attestedTaxHouseholdAnnualIncome": null,
						"attestedMedicaidHouseholdAnnualIncome": null,
						"attestedHouseholdCurrentIncome": null,
						"useAnnualIncomeIndicator": null,
						"edsAnnualIncomePercent": null,
						"attestedAnnualIncomePercent": null,
						"edsHouseholdCurrentIncomePercent": null,
						"percentThreshholdLimit": null,
						"attestedHouseholdCurrentIncomePercent": null,
						"applicantApplicableMAGIStandard": null,
						"applicantApplicableMedicaidMagiStandard": null,
						"applicantApplicableCHIPMagiStandard": null,
						"ssaTitleIIMonthlyIncomeAmount": null,
						"ssaTitleIIYearlyIncomeAmount": null,
						"ssaTaxableBenefitIncomeAmount": null
					},
					"ssaNameControlText": "",
					"timer": null,
					"adjudicator": null,
					"verificationActiveIndicator": false,
					"memberVerificationTypeName": null,
					"memberIncarcerationVerification": null,
					"dataSourceType": {
						"csrf": null,
						"dataSourceTypeCode": "",
						"dataSourceTypeName": "",
						"dataSourceExternalIndicator": false
					},
					"dataFoundIndicator": false,
					"verificationDeterminationDateTime": null,
					"memberResidencyVerification": null,
					"addressServicedIndicator": false,
					"medicaidStateIndicator": false,
					"memberImmigrationStatusVerification": {
						"csrf": null,
						"immigrationStep1ResultReceivedDate": null,
						"immigrationStep1ReasonText": "",
						"immigrationStep1DataFoundIndicator": false,
						"immigrationStep1ResultText": "",
						"immigrationStep1Indicator": "",
						"immigrationStep1VerificationDeterminationDateTime": null,
						"immigrationStep1DataExpectedIndicator": null,
						"immigrationStep2ResultReceivedDate": null,
						"immigrationStep2ReasonText": "",
						"immigrationStep2ResultText": "",
						"immigrationStep2Indicator": "",
						"immigrationStep2DataFoundIndicator": false,
						"immigrationStep2VerificationDeterminationDateTime": null,
						"immigrationStep2DataExpectedIndicator": null,
						"immigrationStep3ResultReceivedDate": null,
						"immigrationStep3ReasonText": "",
						"immigrationStep3ResultText": "",
						"immigrationStep3Indicator": "",
						"immigrationStep3DataFoundIndicator": false,
						"immigrationStep3VerificationDeterminationDateTime": null,
						"immigrationStep3DataExpectedIndicator": null,
						"immigrationStep1DHSCaseNumber": null,
						"immigrationEligibilityTypeCode": null,
						"immigrationEligibilityTypeName": null,
						"step1NonCitGrantDate": null,
						"step2NonCitGrantDate": null,
						"step3NonCitGrantDate": null,
						"step1NonCitAdmToDate": null,
						"step2NonCitAdmToDate": null,
						"step3NonCitAdmToDate": null,
						"immigrationEADTypeCode": null,
						"immigrationEADTypeName": null,
						"receivedStep2MajorTypeCode": null,
						"receivedStep2MajorTypeName": null,
						"receivedStep3MajorTypeCode": null,
						"receivedStep3MajorTypeName": null,
						"receivedStep1COAType": [],
						"receivedStep2COAType": [],
						"receivedStep3COAType": [],
						"immigrationStep1LawfulPresenceVerifiedIndicator": null,
						"immigrationStep2LawfulPresenceVerifiedIndicator": null,
						"immigrationStep3LawfulPresenceVerifiedIndicator": null,
						"immigrationStep1QualifiednoncitizenIndicator": null,
						"immigrationStep2QualifiednoncitizenIndicator": null,
						"immigrationStep3QualifiednoncitizenIndicator": null,
						"immigrationStep1FiveYearBarAppliedIndicator": false,
						"immigrationStep2FiveYearBarAppliedIndicator": false,
						"immigrationStep3FiveYearBarAppliedIndicator": false,
						"immigrationStep1FiveYearBarMetIndicator": false,
						"immigrationStep2FiveYearBarMetIndicator": false,
						"immigrationStep3FiveYearBarMetIndicator": false,
						"immigrationStatusRedeterminationDate": null
					},
					"ssnVerified": false,
					"citizenshipVerified": false,
					"edsResponseExpected": false,
					"dhsResponseCode": "",
					"requestIdentifier": null,
					"dataExpectedIndicator": null,
					"reportedHubErrorTypeCode": null,
					"reportedHubErrorTypeName": null,
					"requestedApplicationMemberNonESIMecVerification": [],
					"mecOtherPublicNonEsiInconsistencyCount": null,
					"memberCurrentIncomeVerification": null,
					"reportedSourceSystemError": [],
					"taxHouseholdSizeDifference": null,
					"useAnnualIncome": null,
					"supportingPhysicalDocument": [],
					"applicantPregnancyCategoryIndicator": null,
					"applicantChildCategoryIndicator": null,
					"priorNumbersMatch": false,
					"notToBeCheckedStatus": false,
					"priorSSNCitizenshipDataMatch": false,
					"finalizingDataSourceType": null,
					"statusExpired": null,
					"chipOrMAGIEligibleStatus": null
				},
				"memberCalculation": {
					"csrf": null,
					"requestSentDate": null,
					"resultReceivedDate": null,
					"reasonText": "",
					"resultText": "",
					"indicator": "",
					"sourceName": "",
					"memberCalculationType": "",
					"maxAptcComputation": {
						"csrf": null,
						"benchmarkPolicyPremiumAmount": null,
						"adultApplicantQuantity": null,
						"childApplicantQuantity": null
					},
					"ratingEngineComputation": {
						"csrf": null,
						"maxAPTCAmount": null,
						"remanderBHCAmount": null,
						"requestdentifier": null,
						"aptcEligibilityIndicator": null,
						"ptcFPLPercentage": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"benefitYear": null
					},
					"ptcComputation": {
						"csrf": null,
						"ptcFPLPercentage": null,
						"taxHouseholdMemberQuantity": null,
						"taxHouseholdUnlawfullMemberQuantity": null,
						"ptcFPLAmount": null,
						"ptcFPLExcludeUnlawfullAmount": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"projectedTaxHouseholdIncomeAmount": null
					},
					"taxHousholdAdjustedMonthlyPremiumAmount": {
						"csrf": null,
						"benchmarkPolicyPremiumAmount": null,
						"ptcFPLPercentage": null,
						"taxHouseholdMemberQuantity": null,
						"taxHouseholdUnlawfullMemberQuantity": null,
						"ptcFPLAmount": null,
						"ptcFPLExcludeUnlawfullAmount": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"taxReturnFilingStatusTypeCode": null,
						"requestIdentifier": null,
						"coverageFamilyQuantity": null,
						"birthDate": [],
						"coverageCategoryTypeCode": []
					},
					"medicaidComputation": null,
					"chipComputation": null
				},
				"memberEventType": "",
				"id": null
			}],
			"memberEmployer": {
				"csrf": null,
				"employerOrganization": {
					"csrf": null,
					"officeSymbolText": null,
					"businessStatusDate": null,
					"organizationStructureType": null,
					"externalOrganizationIdentifier": [],
					"issuerOrganization": null,
					"organizationNomenclature": [],
					"issuerUser": [],
					"organizationType": null,
					"organizationAddress": [],
					"organizationIdentifier": null,
					"organizationEmail": [],
					"organizationTelephone": [],
					"companyEmailDomainName": null,
					"organizationBusinessStatus": null,
					"organizationURL": []
				},
				"employeeEmployerIdentifier": "",
				"employeeSsnNumber": "",
				"memberShareSelfOnlyPremiumAmount": 0,
				"employerCoverageFamilyMemberIndicator": null,
				"employerLowestCostPlanName": "",
				"employerLowestCostPlanCost": 0.0,
				"employerSponsoredCoverageIndicator": null,
				"periodCycleType": {
					"csrf": null,
					"periodTypeCode": "",
					"periodTypeName": "",
					"concurrencyHash": ""
				},
				"concurrencyHash": "",
				"overThirtyHourWorkWeekIndicator": null,
				"employerMinimumEssentialCoverageIndicator": null,
				"employerSponsoredCoverageEligibilityStartDate": null,
				"definingESIEnrollmentStatusTypeCode": "",
				"definingESIEnrollmentStatusTypeName": "",
				"employerStatus": null
			},
			//"incarcerationTypeName": "",
			"memberIndianStatus": [],
			"memberType": "",
			"relationshipNameText": "",
			"memberStatusType": "",
			"memberRoleType": "",
			"parentCaretakerIndicator": false,
			"priorInsuranceEndDate": null,
			"insuredIndicator": "",
			"disabilityIndicator": "",
			"blindnessIndicator": "",
			"applicationMemberFamilyTypeCode": "",
			"applicationMemberFamilyTypeName": "",
			"applicationMemberTaxFilerTypeCode": "",
			"applicationMemberTaxFilerTypeName": "",
			"parentApplicationMember": [{
				"csrf": null,
				"applicationMemberIdentifier": "",
				"applicationMemberAssociationDate": null,
				"applicationMemberAssociationReasonTypeCode": "",
				"applicationMemberAssociationReasonTypeName": null,
				"memberAssociationRoleTypeCode": null,
				"memberAssociationRoleTypeName": null,
				"superordinateMember": null,
				"subordinateMember": null,
				"id": null
			}],
			"applicationMemberTaxFiler": {
				"csrf": null,
				"concurrencyHash": "",
				"projectedTaxHouseholdIncomeAmount": null,
				"taxReturnFilingStatusTypeCode": "",
				"taxFilingStatusChangeIndicator": false,
				"enrollmentAPTCAmount": 0.0,
				"taxHouseholdIdentifier": null,
				"promptTaxReturnFilingStatusCount": null,
				"projectedTaxReturnFilingStatusTypeCode": null,
				"projectedTaxReturnFilingStatusTypeName": null,
				"csramount": 0.0,
				"csrtypeCode": ""
			},
			"applicationMemberEmployeeTypeCode": "",
			"applicationMemberEmployeeTypeName": "",
			"childApplicationMember": [{
				"csrf": null,
				"applicationMemberIdentifier": "",
				"applicationMemberAssociationDate": null,
				"applicationMemberAssociationReasonTypeCode": "",
				"applicationMemberAssociationReasonTypeName": null,
				"memberAssociationRoleTypeCode": null,
				"memberAssociationRoleTypeName": null,
				"superordinateMember": null,
				"subordinateMember": null,
				"id": null
			}],
			"applicationMemberSubscriberTypeCode": "",
			"applicationMemberSubscriberTypeName": "",
			"applicationFamilyGroupTypeCode": "",
			"applicationFamilyGroupTypeName": "",
			"applicationMemberEmployerIdentifier": "",
			"applicationMemberIndianStatusDate": null,
			"federalIndianStatusCode": "",
			"federalIndianStatusName": "",
			"indianStatusEvidenceDocument": [],
			"longTermCareIndicator": null,
			"unpaidBillIndicator": null,
			"absentParentIndicator": null,
			"absentParentName": "",
			"provideAbsentParentInfoIndicator": null,
			"goodCauseExemptionIndicator": null,
			"goodCauseExemptionText": "",
			"electronicNoticeIndicator": null,
			"personRecognizedTribeIndicator": null,
			"personAmericanIndianAlaskanNativeIndicator": null,
			"recentlyUnemployedIndicator": null,
			"recentlyUnemployedStartDate": null,
			"otherHealthInsuranceIndicator": true,
			"otherHealthInsuranceCoverageEndDate": null,
			"otherHealthInsuranceName": "",
			"otherHealthInsurancePolicyNumber": "",
			"concurrencyHash": "",
			"eligibleITUIndicator": null,
			"stateEmployeeChildIndicator": null,
			"nonEmployerSponsoredCoverageIndicator": false,
			"receiveITUIndicator": null,
			"requestingCoverageIndicator": true,
			"babyDueQuantity": null,
			"contactIndicator": false,
			"insuranceProductTypeCode": "",
			"insuranceProductTypeName": "",
			"applicationMemberIdentifier": "3d8914d2-2080-44f8-98ba-e16ffdadea27",
			"nonCustodialParentName": "",
			"citizenshipStatusIndicator": "",
			"applicationMemberAnnualTaxIncome": [{
				"csrf": null,
				"taxYear": null,
				"annualIncomeAmount": null,
				"id": null
			}],
			"subscribedInsuranceProductTypeAttestation": [],
			"definingMemberMedicaidAnchorTypeCode": "",
			"definingMemberMedicaidAnchorTypeName": "",
			"medicaidHouseholdAnchor": {
				"csrf": null,
				"medicaidHouseholdIdentifier": null,
				"medicaidHouseholdMemberQuantity": null
			},
			"receivedCurrentIncomeSourceAttestation": [],
			"applicationMemberCurrentYearTaxFiler": null,
			"nonCustodialParentIndicator": "",
			"spouseHouseholdMemberIndicator": null,
			"medicaidTaxRoleTypeCode": "",
			"dependentIndicator": null,
			"hasSpouseIndicator": null,
			"studentIndicator": null,
			"relationshipToTaxFilerTypeCode": "",
			"medicaidHousehold": {
				"csrf": null,
				"medicaidTaxRole": null,
				"currentYearTaxAnchor": null,
				"medicaidAnchor": null,
				"spouseCounter": null,
				"parentCounter": null,
				"parentsLivingWithCounter": null,
				"caretakerCounter": null,
				"householdMembersCounter": null,
				"pregnanciesCounter": null,
				"pregnancyInHouseholdIndicator": null,
				"claimingTaxFilerNotApplicationMemberIndicator": null,
				"medicaidChildAgeIndicator": null,
				"under21AndFTSOption": null,
				"addressSameAsClaimingFiler": null,
				"unableToDetermineMedicaidEligibilityDate": null,
				"unableToDetermineMedicaidEligibilityReason": null,
				"nonCustodialClaimerCustodialApplyingIndicator": null,
				"parentsFilingJointlyIndicator": null,
				"sameHouseholdParentsSeparateTaxIndicator": null,
				"nonCustodialClaimerBothParentsApplyingIndicator": null,
				"totalBabiesDue": null,
				"childLivesWithParentIndicator": false,
				"marriedFilingJointlyIndicator": false
			},
			"coverageYearTaxHousehold": {
				"csrf": null,
				"plannedReturnFilingStatus": null,
				"spouseCounter": null,
				"taxHouseholdSize": null,
				"dependentIndicator": null,
				"marriedFilingJointlyIndicator": null,
				"hasSpouseIndicator": null,
				"taxFilerIndicator": null
			},
			"applicationMemberCurrentYearTaxFilerTypeCode": "2",
			"applicationMemberCurrentYearTaxFilerTypeName": "Non-Current Year Tax Filer Anchor",
			"medicaidEligibilityDeterminationDate": null,
			"medicaidEligibilityReasonText": "",
			"promptParentAddressCount": null,
			"livedInUS5YearIndicator": null,
			"largeAssetIndicator": null,
			"calculatedAnnualIncomeVerificationIndicator": null,
			"coverageYearAnnualIncomeExpectedToChangeIndicator": null,
			"qualifyPlanSelectIndicator": null,
			"spouseInHouseholdIndicator": null,
			"babyOrAdoptedInHouseholdIndicator": null,
			"serviceAreaChangeIndicator": null,
			"notChosenPlanIndicator": null,
			"definingCircumstanceChangeAttestation": [],
			"enrollmentPeriodReason": null,
			"planSelectButtonStatus": null,
			"definingApplicationMemberContactMethod": [],
			"hubTransferAckRequestID": null,
			"hubTransferAckStatusCode": null,
			"hubTransferTimeStamp": null,
			"currentDate": null,
			"proposedCoverageStartDate": null,
			"maxProposedCoverageEffectiveDate": null,
			"healthcareSharingMinistryName": null,
			"healthcareSharingMinistryDistrict": null,
			"healthcareSharingMinistryCongregation": null,
			"healthcareSharingMinistryCounty": null,
			"healthcareSharingMinistryCity": null,
			"healthcareSharingMinistryState": null,
			"healthcareSharingMinistryZip": null,
			"durationOfMembershipHSM": null,
			"healthcareSharingMinistryExistIndicator": null,
			"healthcareSharingMinistryActiveStartDate": null,
			"healthcareSharingMinistryActiveEndDate": null,
			"memberExemptions": [],
			"id": null,
			"nonESInsurance": [],
			"marriedFilingJointlyIndicator": null,
			"reuseTaxDataPermissionIndicator": false,
			"isIncarcerated": null,
			"sevisIDIndicator": null,
			"doNotKnowIncomeIndicator": "",
			"greaterThanFPLIndicator": "",
			"incomeSubjectToFederalRestrictions": "",
			"receivedIndianHealthServicesIndicator": "",
			"tribalAmount": "",
			"eligibleESIRetirementCobraParentIndicator": "",
			"blindDisabledIndicator": null,
			"eligibleImmigrationStatusIndicator": null,
			"parentOfStudentLivingInStateIndicator": null,
			"priorTo1956Indicator": null,
			"taxFilerIndicator": "",
			"usMailIndicator": "",
			"medicaidDeterminationIndicator": null,
			"withdrawApplicationIndicator": null,
			"registerToVoteIndicator": null,
			"caretakerRelativeIndicator": null,
			"avgHoursPerWeek": null,
			"preliminaryParentCaretakerRelative": null,
			"sameNameIndicator": "",
			"motherAvgHoursWeek": null,
			"fatherAvgHoursWeek": null,
			"preliminaryChildOfCaretakerRelative": null,
			"fosterCareIndicator": null,
			"fosterCareEndedBecauseOfAge": null,
			"studentParentInStateIndicator": "",
			"liveOutsideStateTemporarilyIndicator": "true",
			"coverageInDifferentStateIndicator": "",
			"privacyPolicyAgreementIndicator": null,
			"childOfCaretakerRelativeIsEnrolledIndicator": "",
			"amountIRSAnnualIncome": "",
			"amountSocialSecurityBenefitsIncome": "",
			"amountStateQuarterlyIncome": "",
			"amountStateUnemploymentIncome": "",
			"attestedAnnualIncome": "",
			"attestedIRSAnnualIncomeIndicator": null,
			"attestedMonthlyIncome": "",
			"attestedSocialSecurityBenefitsIncome": "",
			"attestedStateQuarterlyIncomeIndicator": null,
			"attestedStateUnemploymentIncome": "",
			"attestedIRSAnnualIncome": "",
			"ssnAlternateName": {
				"csrf": null,
				"effectiveDate": null,
				"firstName": "",
				"middleName": "",
				"lastName": "",
				"salutationName": "",
				"suffixName": ""
			},
			"employerInsurance": [{
				"csrf": null,
				"employerName": "",
				"employerSponsoredCoverageStartDate": null,
				"esiEnrollmentStatusType": "",
				"otherHealthInsurancePlanEndIndicator": null,
				"potentialMedicaidnonESIEnrolledIndicator": null,
				"primaryInsuredName": {
					"csrf": null,
					"effectiveDate": null,
					"firstName": "",
					"middleName": "",
					"lastName": "",
					"salutationName": "",
					"suffixName": ""
				}
			}],
			"deprivedChildIndicator": null,
			"fosterCareStateCode": "",
			"deceasedIndicator": false,
			"noticeDate": null,
			"ageLeftFosterCareCode": "",
			"hadMedicaidDuringFosterCareIndicator": null,
			"otherCoverageWithin6MonthsIndicator": null,
			"citizenshipDocumentAlternateName": {
				"csrf": null,
				"effectiveDate": null,
				"firstName": "",
				"middleName": "",
				"lastName": "",
				"salutationName": "",
				"suffixName": ""
			},
			"tribeName": "",
			"tribeStateCode": "",
			"tribeCode": "",
			"eligibleNewPlansIndicator": null,
			"losingCurrentPlanIndicator": null,
			"exchangeState": null,
			"noFixedAddressIndicator": false,
			"medicaidCorrectExchange": false,
			"qhpCorrectExchange": false,
			"optionStudentResidency": false,
			"studentResidencyAgeThreshold": null,
			"medicaidStudentResidencyRulesApplies": null,
			"onlyApplicantIndicator": false,
			"residencyState": null,
			"lastRecordIndicator": false,
			"specialRuleForTaxHouseholdApplies": false,
			"residencyStateList": [],
			"dependentFilerStateMatch": false,
			"aptcReferralIndicator": false,
			"attestedApplyingForCoverageIndicator": false,
			"attestedChildOfCaretakerIndicator": false,
			"attestedImmigrationStatusIndicator": false,
			"attestedCaretakerIndicator": false,
			"attestedCaretakerID": "",
			"dateOfAdoption": null,
			"dateGainedEligibleImmigrationStatus": null,
			"dateReleasedFromIncarceration": null,
			"dateMarried": null,
			"dateMoved": null,
			"monthlyIncomeGreaterThanFPLIndicator": "",
			"isMarriedIndicator": false,
			"livesWithIndcator": false,
			"livesWithAdultTaxClaimerIndicator": false,
			"livesWithMinorAgeDependentIndicator": false,
			"livesWithOtherParentNotClaimerIndicator": false,
			"movedFromCountyCode": "",
			"movedFromZipCode": "",
			"needsSeparateApplicationIndicator": false,
			"coverageYearDependentIndicator": false,
			"futureDependents": [],
			"veteranIndicator": false,
			"childOfVeteranIndicator": false,
			"spouseOfVeteranIndicator": false,
			"stateHealthBenefitAvaliableIndicator": false,
			"personForWorkQuarterExcludedIndicator": false,
			"applicantAge": null,
			"performVerificationIndicator": false
		},
		{
			"csrf": null,
			"member": {
				"csrf": null,
				"birthDate": "Sun, 10 Aug 2003 00:00:00 CDT",
				"identifier": "",
				"personName": {
					"csrf": null,
					"effectiveDate": null,
					"firstName": "Heath",
					"middleName": "",
					"lastName": "Yates",
					"salutationName": "",
					"suffixName": ""
				},
				"telephonePlace": [{
					"csrf": null,
					"personTelephoneStartDate": null,
					"personTelephoneEndDate": null,
					"personTelephoneCategoryCode": "",
					"telephonePlace": {
						"csrf": null,
						"areaNumber": null,
						"switchNumber": null,
						"lineNumber": null,
						"extensionNumber": null,
						"number": "",
						"telephoneCountry": {
							"csrf": null,
							"telephoneCountryCode": null,
							"elephoneCountryName": ""
						}
					},
					"personTelephoneRelationshipRoleCode": null,
					"receiveNotificationIndicator": null
				},
				{
					"csrf": null,
					"personTelephoneStartDate": null,
					"personTelephoneEndDate": null,
					"personTelephoneCategoryCode": "",
					"telephonePlace": {
						"csrf": null,
						"areaNumber": null,
						"switchNumber": null,
						"lineNumber": null,
						"extensionNumber": null,
						"number": "",
						"telephoneCountry": {
							"csrf": null,
							"telephoneCountryCode": null,
							"elephoneCountryName": ""
						}
					},
					"personTelephoneRelationshipRoleCode": null,
					"receiveNotificationIndicator": null
				},
				{
					"csrf": null,
					"personTelephoneStartDate": null,
					"personTelephoneEndDate": null,
					"personTelephoneCategoryCode": "",
					"telephonePlace": {
						"csrf": null,
						"areaNumber": null,
						"switchNumber": null,
						"lineNumber": null,
						"extensionNumber": null,
						"number": "",
						"telephoneCountry": {
							"csrf": null,
							"telephoneCountryCode": null,
							"elephoneCountryName": ""
						}
					},
					"personTelephoneRelationshipRoleCode": null,
					"receiveNotificationIndicator": null
				}],
				"personAddress": [{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Home",
					"personAddressStartDate": null,
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Delivery",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "76504",
						"streetName1": "123 Main Street",
						"streetName2": "",
						"cityName": "Belton",
						"stateCode": "TX",
						"countryCode": ""
					}
				},
				{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Mail",
					"personAddressStartDate": null,
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Mailing",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "",
						"streetName1": "",
						"streetName2": "",
						"cityName": "",
						"stateCode": "",
						"countryCode": ""
					}
				},
				{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Residential",
					"personAddressStartDate": null,
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Residential",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "76504",
						"streetName1": "123 Main Street",
						"streetName2": "",
						"cityName": "Belton",
						"stateCode": "TX",
						"countryCode": ""
					}
				}],
				"personEmail": [{
					"csrf": null,
					"personEmailStartDate": null,
					"personEmailEndDate": null,
					"placeRelationshipRoleCode": "",
					"messagePlace": {
						"csrf": null,
						"emailAddressName": "",
						"emailAddressIdentifier": ""
					},
					"personEmailVerifiedIndicator": null,
					"personEmailVerifiedDateTime": null,
					"receiveNotificationIndicator": null
				}],
				"personTrackingNumber": "",
				"personIdentification": [{
					"csrf": null,
					"personIdentificationValueText": "",
					"personIdentificationEffectiveDate": null,
					"personIdentificationUpdateQuantity": 0,
					"personIdentificationType": {
						"csrf": null,
						"personIdentificationTypeCode": "",
						"personIdentificationTypeName": ""
					},
					"personIdentificationOtherTypeText": null,
					"personIdentificationEndDate": null,
					"physicalDocumentTypeCode": null,
					"physicalDocumentTypeName": null
				},
				{
					"csrf": null,
					"personIdentificationValueText": "",
					"personIdentificationEffectiveDate": null,
					"personIdentificationUpdateQuantity": 0,
					"personIdentificationType": {
						"csrf": null,
						"personIdentificationTypeCode": "",
						"personIdentificationTypeName": ""
					},
					"personIdentificationOtherTypeText": null,
					"personIdentificationEndDate": null,
					"physicalDocumentTypeCode": null,
					"physicalDocumentTypeName": null
				}],
				"genderTypeCode": "",
				"personTypeCode": "",
				"ethnicityTypeCode": "",
				"personRace": [{
					"csrf": null,
					"personRaceName": "",
					"personOriginalCountryCode": "",
					"raceSubCode": "",
					"raceTypeCode": ""
				}],
				"personCitizenshipStatus": [{
					"csrf": null,
					"personCitizenshipStatusDate": null,
					"citizenshipStatusType": {
						"csrf": null,
						"personCitizenshipStatusCode": "",
						"personCitizenshipStatusName": ""
					}
				}],
				"knownPersonWorkType": []
			},
			"incarcerationStartDate": null,
			"incarcerationEndDate": null,
			"incarcerationStatusIndicator": "",
			"residencyStartDate": null,
			"residencyEndDate": null,
			"residencyStatusIndicator": "",
			"lawfulPresenceStartDate": null,
			"lawfulPresenceEndDate": null,
			"lawfulPresenceStatusIndicator": "",
			"coverageStartDate": null,
			"coverageEndDate": null,
			"pregnancyIndicator": "",
			"expectedDeliveryDate": null,
			"fixedAddressIndicator": "true",
			"financialAssistanceIndicator": "Not Applicable",
			"incarcerationType": "",
			"otherRaceText": "",
			"otherEthnicityText": "",
			"taxFilingStatusTypeCode": "",
			"spokenLanguage": "",
			"writtenLanguage": "",
			"memberSchoolStatus": [{
				"csrf": null,
				"applicationMemberSchoolStatusDate": null,
				"schoolStatusType": "",
				"id": null
			}],
			"memberEmploymentStatus": [{
				"csrf": null,
				"applicationMemberEmploymentStatusDate": null,
				"employmentStatus": "",
				"id": null
			}],
			"memberEvent": [{
				"csrf": null,
				"identifier": "",
				"datetime": null,
				"memberEligibility": {
					"csrf": null,
					"eligibilityResultText": "",
					"eligibilityIndicator": "",
					"eligibilityDeterminationDate": null,
					"eligibilityStartDate": null,
					"eligibilityEndDate": null,
					"eligibilityReasonText": "",
					"memberEligibilityType": "",
					"eligibilityStartDateType": "",
					"eligibilityEndDateType": "",
					"eligibilityResultAmount": 0,
					"sepEffectiveDateRuleCode": null,
					"csrBenefitsIndicator": null,
					"eligibilityActiveIndicator": null
				},
				"memberVerification": {
					"csrf": null,
					"requestSentDate": null,
					"resultReceivedDate": null,
					"reasonText": "",
					"resultText": "",
					"indicator": "",
					"sourceName": "",
					"memberVerificationType": "",
					"incomeVerification": {
						"csrf": null,
						"modifiedAdjustedGrossIncomeAmount": 0,
						"aptcPrimaryFilingRequirementIndicator": "",
						"aptcSpouseFilingRequirementIndicator": "",
						"personIdentificationValueText": "",
						"personIdentificationTypeCode": "",
						"firstName": "",
						"middleName": "",
						"lastName": "",
						"taxFilingStatusTypeCode": "",
						"ssaNameControlText": "",
						"medicaidFPLPercentage": 0,
						"requestdentifier": null,
						"taxExemptionQuantity": null,
						"inconsistentIncomeAcceptedExplanationIndicator": null,
						"currentMonthlyIncomeAmount": null,
						"identifyingNonFilerSSN": [],
						"taxYear": null,
						"returnModifiedAdjustedGrossIncomeAmount": null,
						"returnAdjustedGrossIncomeAmount": null,
						"annualIncomeWithinThresholdIndicator": null,
						"attestedAnnualIncome": null,
						"annualizedEDSCurrentIncome": null,
						"percentDifference": null,
						"percentThreshholdAnnualIncome": null,
						"attestedTaxHouseholdAnnualIncome": null,
						"attestedMedicaidHouseholdAnnualIncome": null,
						"attestedHouseholdCurrentIncome": null,
						"useAnnualIncomeIndicator": null,
						"edsAnnualIncomePercent": null,
						"attestedAnnualIncomePercent": null,
						"edsHouseholdCurrentIncomePercent": null,
						"percentThreshholdLimit": null,
						"attestedHouseholdCurrentIncomePercent": null,
						"applicantApplicableMAGIStandard": null,
						"applicantApplicableMedicaidMagiStandard": null,
						"applicantApplicableCHIPMagiStandard": null,
						"ssaTitleIIMonthlyIncomeAmount": null,
						"ssaTitleIIYearlyIncomeAmount": null,
						"ssaTaxableBenefitIncomeAmount": null
					},
					"ssaNameControlText": "",
					"timer": null,
					"adjudicator": null,
					"verificationActiveIndicator": false,
					"memberVerificationTypeName": null,
					"memberIncarcerationVerification": null,
					"dataSourceType": {
						"csrf": null,
						"dataSourceTypeCode": "",
						"dataSourceTypeName": "",
						"dataSourceExternalIndicator": false
					},
					"dataFoundIndicator": false,
					"verificationDeterminationDateTime": null,
					"memberResidencyVerification": null,
					"addressServicedIndicator": false,
					"medicaidStateIndicator": false,
					"memberImmigrationStatusVerification": {
						"csrf": null,
						"immigrationStep1ResultReceivedDate": null,
						"immigrationStep1ReasonText": "",
						"immigrationStep1DataFoundIndicator": false,
						"immigrationStep1ResultText": "",
						"immigrationStep1Indicator": "",
						"immigrationStep1VerificationDeterminationDateTime": null,
						"immigrationStep1DataExpectedIndicator": null,
						"immigrationStep2ResultReceivedDate": null,
						"immigrationStep2ReasonText": "",
						"immigrationStep2ResultText": "",
						"immigrationStep2Indicator": "",
						"immigrationStep2DataFoundIndicator": false,
						"immigrationStep2VerificationDeterminationDateTime": null,
						"immigrationStep2DataExpectedIndicator": null,
						"immigrationStep3ResultReceivedDate": null,
						"immigrationStep3ReasonText": "",
						"immigrationStep3ResultText": "",
						"immigrationStep3Indicator": "",
						"immigrationStep3DataFoundIndicator": false,
						"immigrationStep3VerificationDeterminationDateTime": null,
						"immigrationStep3DataExpectedIndicator": null,
						"immigrationStep1DHSCaseNumber": null,
						"immigrationEligibilityTypeCode": null,
						"immigrationEligibilityTypeName": null,
						"step1NonCitGrantDate": null,
						"step2NonCitGrantDate": null,
						"step3NonCitGrantDate": null,
						"step1NonCitAdmToDate": null,
						"step2NonCitAdmToDate": null,
						"step3NonCitAdmToDate": null,
						"immigrationEADTypeCode": null,
						"immigrationEADTypeName": null,
						"receivedStep2MajorTypeCode": null,
						"receivedStep2MajorTypeName": null,
						"receivedStep3MajorTypeCode": null,
						"receivedStep3MajorTypeName": null,
						"receivedStep1COAType": [],
						"receivedStep2COAType": [],
						"receivedStep3COAType": [],
						"immigrationStep1LawfulPresenceVerifiedIndicator": null,
						"immigrationStep2LawfulPresenceVerifiedIndicator": null,
						"immigrationStep3LawfulPresenceVerifiedIndicator": null,
						"immigrationStep1QualifiednoncitizenIndicator": null,
						"immigrationStep2QualifiednoncitizenIndicator": null,
						"immigrationStep3QualifiednoncitizenIndicator": null,
						"immigrationStep1FiveYearBarAppliedIndicator": false,
						"immigrationStep2FiveYearBarAppliedIndicator": false,
						"immigrationStep3FiveYearBarAppliedIndicator": false,
						"immigrationStep1FiveYearBarMetIndicator": false,
						"immigrationStep2FiveYearBarMetIndicator": false,
						"immigrationStep3FiveYearBarMetIndicator": false,
						"immigrationStatusRedeterminationDate": null
					},
					"ssnVerified": false,
					"citizenshipVerified": false,
					"edsResponseExpected": false,
					"dhsResponseCode": "",
					"requestIdentifier": null,
					"dataExpectedIndicator": null,
					"reportedHubErrorTypeCode": null,
					"reportedHubErrorTypeName": null,
					"requestedApplicationMemberNonESIMecVerification": [],
					"mecOtherPublicNonEsiInconsistencyCount": null,
					"memberCurrentIncomeVerification": null,
					"reportedSourceSystemError": [],
					"taxHouseholdSizeDifference": null,
					"useAnnualIncome": null,
					"supportingPhysicalDocument": [],
					"applicantPregnancyCategoryIndicator": null,
					"applicantChildCategoryIndicator": null,
					"priorNumbersMatch": false,
					"notToBeCheckedStatus": false,
					"priorSSNCitizenshipDataMatch": false,
					"finalizingDataSourceType": null,
					"statusExpired": null,
					"chipOrMAGIEligibleStatus": null
				},
				"memberCalculation": {
					"csrf": null,
					"requestSentDate": null,
					"resultReceivedDate": null,
					"reasonText": "",
					"resultText": "",
					"indicator": "",
					"sourceName": "",
					"memberCalculationType": "",
					"maxAptcComputation": {
						"csrf": null,
						"benchmarkPolicyPremiumAmount": null,
						"adultApplicantQuantity": null,
						"childApplicantQuantity": null
					},
					"ratingEngineComputation": {
						"csrf": null,
						"maxAPTCAmount": null,
						"remanderBHCAmount": null,
						"requestdentifier": null,
						"aptcEligibilityIndicator": null,
						"ptcFPLPercentage": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"benefitYear": null
					},
					"ptcComputation": {
						"csrf": null,
						"ptcFPLPercentage": null,
						"taxHouseholdMemberQuantity": null,
						"taxHouseholdUnlawfullMemberQuantity": null,
						"ptcFPLAmount": null,
						"ptcFPLExcludeUnlawfullAmount": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"projectedTaxHouseholdIncomeAmount": null
					},
					"taxHousholdAdjustedMonthlyPremiumAmount": {
						"csrf": null,
						"benchmarkPolicyPremiumAmount": null,
						"ptcFPLPercentage": null,
						"taxHouseholdMemberQuantity": null,
						"taxHouseholdUnlawfullMemberQuantity": null,
						"ptcFPLAmount": null,
						"ptcFPLExcludeUnlawfullAmount": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"taxReturnFilingStatusTypeCode": null,
						"requestIdentifier": null,
						"coverageFamilyQuantity": null,
						"birthDate": [],
						"coverageCategoryTypeCode": []
					},
					"medicaidComputation": null,
					"chipComputation": null
				},
				"memberEventType": "",
				"id": null
			}],
			"memberEmployer": {
				"csrf": null,
				"employerOrganization": {
					"csrf": null,
					"officeSymbolText": null,
					"businessStatusDate": null,
					"organizationStructureType": null,
					"externalOrganizationIdentifier": [],
					"issuerOrganization": null,
					"organizationNomenclature": [],
					"issuerUser": [],
					"organizationType": null,
					"organizationAddress": [],
					"organizationIdentifier": null,
					"organizationEmail": [],
					"organizationTelephone": [],
					"companyEmailDomainName": null,
					"organizationBusinessStatus": null,
					"organizationURL": []
				},
				"employeeEmployerIdentifier": "",
				"employeeSsnNumber": "",
				"memberShareSelfOnlyPremiumAmount": 0,
				"employerCoverageFamilyMemberIndicator": null,
				"employerLowestCostPlanName": "",
				"employerLowestCostPlanCost": 0.0,
				"employerSponsoredCoverageIndicator": null,
				"periodCycleType": {
					"csrf": null,
					"periodTypeCode": "",
					"periodTypeName": "",
					"concurrencyHash": ""
				},
				"concurrencyHash": "",
				"overThirtyHourWorkWeekIndicator": null,
				"employerMinimumEssentialCoverageIndicator": null,
				"employerSponsoredCoverageEligibilityStartDate": null,
				"definingESIEnrollmentStatusTypeCode": "",
				"definingESIEnrollmentStatusTypeName": "",
				"employerStatus": null
			},
			//"incarcerationTypeName": "",
			"memberIndianStatus": [],
			"memberType": "",
			"relationshipNameText": "",
			"memberStatusType": "",
			"memberRoleType": "",
			"parentCaretakerIndicator": false,
			"priorInsuranceEndDate": null,
			"insuredIndicator": "",
			"disabilityIndicator": "",
			"blindnessIndicator": "",
			"applicationMemberFamilyTypeCode": "",
			"applicationMemberFamilyTypeName": "",
			"applicationMemberTaxFilerTypeCode": "",
			"applicationMemberTaxFilerTypeName": "",
			"parentApplicationMember": [{
				"csrf": null,
				"applicationMemberIdentifier": "",
				"applicationMemberAssociationDate": null,
				"applicationMemberAssociationReasonTypeCode": "",
				"applicationMemberAssociationReasonTypeName": null,
				"memberAssociationRoleTypeCode": null,
				"memberAssociationRoleTypeName": null,
				"superordinateMember": null,
				"subordinateMember": null,
				"id": null
			}],
			"applicationMemberTaxFiler": {
				"csrf": null,
				"concurrencyHash": "",
				"projectedTaxHouseholdIncomeAmount": null,
				"taxReturnFilingStatusTypeCode": "",
				"taxFilingStatusChangeIndicator": false,
				"enrollmentAPTCAmount": 0.0,
				"taxHouseholdIdentifier": null,
				"promptTaxReturnFilingStatusCount": null,
				"projectedTaxReturnFilingStatusTypeCode": null,
				"projectedTaxReturnFilingStatusTypeName": null,
				"csramount": 0.0,
				"csrtypeCode": ""
			},
			"applicationMemberEmployeeTypeCode": "",
			"applicationMemberEmployeeTypeName": "",
			"childApplicationMember": [{
				"csrf": null,
				"applicationMemberIdentifier": "",
				"applicationMemberAssociationDate": null,
				"applicationMemberAssociationReasonTypeCode": "",
				"applicationMemberAssociationReasonTypeName": null,
				"memberAssociationRoleTypeCode": null,
				"memberAssociationRoleTypeName": null,
				"superordinateMember": null,
				"subordinateMember": null,
				"id": null
			}],
			"applicationMemberSubscriberTypeCode": "",
			"applicationMemberSubscriberTypeName": "",
			"applicationFamilyGroupTypeCode": "",
			"applicationFamilyGroupTypeName": "",
			"applicationMemberEmployerIdentifier": "",
			"applicationMemberIndianStatusDate": null,
			"federalIndianStatusCode": "",
			"federalIndianStatusName": "",
			"indianStatusEvidenceDocument": [],
			"longTermCareIndicator": null,
			"unpaidBillIndicator": null,
			"absentParentIndicator": null,
			"absentParentName": "",
			"provideAbsentParentInfoIndicator": null,
			"goodCauseExemptionIndicator": null,
			"goodCauseExemptionText": "",
			"electronicNoticeIndicator": null,
			"personRecognizedTribeIndicator": null,
			"personAmericanIndianAlaskanNativeIndicator": null,
			"recentlyUnemployedIndicator": null,
			"recentlyUnemployedStartDate": null,
			"otherHealthInsuranceIndicator": true,
			"otherHealthInsuranceCoverageEndDate": null,
			"otherHealthInsuranceName": "",
			"otherHealthInsurancePolicyNumber": "",
			"concurrencyHash": "",
			"eligibleITUIndicator": null,
			"stateEmployeeChildIndicator": null,
			"nonEmployerSponsoredCoverageIndicator": false,
			"receiveITUIndicator": null,
			"requestingCoverageIndicator": true,
			"babyDueQuantity": null,
			"contactIndicator": false,
			"insuranceProductTypeCode": "",
			"insuranceProductTypeName": "",
			"applicationMemberIdentifier": "60d7bd68-eac8-4896-a423-eefbc5d087e4",
			"nonCustodialParentName": "",
			"citizenshipStatusIndicator": "",
			"applicationMemberAnnualTaxIncome": [{
				"csrf": null,
				"taxYear": null,
				"annualIncomeAmount": null,
				"id": null
			}],
			"subscribedInsuranceProductTypeAttestation": [],
			"definingMemberMedicaidAnchorTypeCode": "",
			"definingMemberMedicaidAnchorTypeName": "",
			"medicaidHouseholdAnchor": {
				"csrf": null,
				"medicaidHouseholdIdentifier": null,
				"medicaidHouseholdMemberQuantity": null
			},
			"receivedCurrentIncomeSourceAttestation": [],
			"applicationMemberCurrentYearTaxFiler": null,
			"nonCustodialParentIndicator": "",
			"spouseHouseholdMemberIndicator": null,
			"medicaidTaxRoleTypeCode": "",
			"dependentIndicator": true,
			"hasSpouseIndicator": null,
			"studentIndicator": null,
			"relationshipToTaxFilerTypeCode": "",
			"medicaidHousehold": {
				"csrf": null,
				"medicaidTaxRole": null,
				"currentYearTaxAnchor": null,
				"medicaidAnchor": null,
				"spouseCounter": null,
				"parentCounter": null,
				"parentsLivingWithCounter": null,
				"caretakerCounter": null,
				"householdMembersCounter": null,
				"pregnanciesCounter": null,
				"pregnancyInHouseholdIndicator": null,
				"claimingTaxFilerNotApplicationMemberIndicator": null,
				"medicaidChildAgeIndicator": null,
				"under21AndFTSOption": null,
				"addressSameAsClaimingFiler": null,
				"unableToDetermineMedicaidEligibilityDate": null,
				"unableToDetermineMedicaidEligibilityReason": null,
				"nonCustodialClaimerCustodialApplyingIndicator": null,
				"parentsFilingJointlyIndicator": null,
				"sameHouseholdParentsSeparateTaxIndicator": null,
				"nonCustodialClaimerBothParentsApplyingIndicator": null,
				"totalBabiesDue": null,
				"childLivesWithParentIndicator": false,
				"marriedFilingJointlyIndicator": false
			},
			"coverageYearTaxHousehold": {
				"csrf": null,
				"plannedReturnFilingStatus": null,
				"spouseCounter": null,
				"taxHouseholdSize": null,
				"dependentIndicator": null,
				"marriedFilingJointlyIndicator": null,
				"hasSpouseIndicator": null,
				"taxFilerIndicator": null
			},
			"applicationMemberCurrentYearTaxFilerTypeCode": "",
			"applicationMemberCurrentYearTaxFilerTypeName": "",
			"medicaidEligibilityDeterminationDate": null,
			"medicaidEligibilityReasonText": "",
			"promptParentAddressCount": null,
			"livedInUS5YearIndicator": null,
			"largeAssetIndicator": null,
			"calculatedAnnualIncomeVerificationIndicator": null,
			"coverageYearAnnualIncomeExpectedToChangeIndicator": null,
			"qualifyPlanSelectIndicator": null,
			"spouseInHouseholdIndicator": null,
			"babyOrAdoptedInHouseholdIndicator": null,
			"serviceAreaChangeIndicator": null,
			"notChosenPlanIndicator": null,
			"definingCircumstanceChangeAttestation": [],
			"enrollmentPeriodReason": null,
			"planSelectButtonStatus": null,
			"definingApplicationMemberContactMethod": [],
			"hubTransferAckRequestID": null,
			"hubTransferAckStatusCode": null,
			"hubTransferTimeStamp": null,
			"currentDate": null,
			"proposedCoverageStartDate": null,
			"maxProposedCoverageEffectiveDate": null,
			"healthcareSharingMinistryName": null,
			"healthcareSharingMinistryDistrict": null,
			"healthcareSharingMinistryCongregation": null,
			"healthcareSharingMinistryCounty": null,
			"healthcareSharingMinistryCity": null,
			"healthcareSharingMinistryState": null,
			"healthcareSharingMinistryZip": null,
			"durationOfMembershipHSM": null,
			"healthcareSharingMinistryExistIndicator": null,
			"healthcareSharingMinistryActiveStartDate": null,
			"healthcareSharingMinistryActiveEndDate": null,
			"memberExemptions": [],
			"id": null,
			"nonESInsurance": [],
			"marriedFilingJointlyIndicator": null,
			"reuseTaxDataPermissionIndicator": false,
			"isIncarcerated": null,
			"sevisIDIndicator": null,
			"doNotKnowIncomeIndicator": "",
			"greaterThanFPLIndicator": "",
			"incomeSubjectToFederalRestrictions": "",
			"receivedIndianHealthServicesIndicator": "",
			"tribalAmount": "",
			"eligibleESIRetirementCobraParentIndicator": "",
			"blindDisabledIndicator": null,
			"eligibleImmigrationStatusIndicator": null,
			"parentOfStudentLivingInStateIndicator": null,
			"priorTo1956Indicator": null,
			"taxFilerIndicator": "",
			"usMailIndicator": "",
			"medicaidDeterminationIndicator": null,
			"withdrawApplicationIndicator": null,
			"registerToVoteIndicator": null,
			"caretakerRelativeIndicator": null,
			"avgHoursPerWeek": null,
			"preliminaryParentCaretakerRelative": null,
			"sameNameIndicator": "",
			"motherAvgHoursWeek": null,
			"fatherAvgHoursWeek": null,
			"preliminaryChildOfCaretakerRelative": null,
			"fosterCareIndicator": null,
			"fosterCareEndedBecauseOfAge": null,
			"studentParentInStateIndicator": "",
			"liveOutsideStateTemporarilyIndicator": "true",
			"coverageInDifferentStateIndicator": "",
			"privacyPolicyAgreementIndicator": null,
			"childOfCaretakerRelativeIsEnrolledIndicator": "",
			"amountIRSAnnualIncome": "",
			"amountSocialSecurityBenefitsIncome": "",
			"amountStateQuarterlyIncome": "",
			"amountStateUnemploymentIncome": "",
			"attestedAnnualIncome": "",
			"attestedIRSAnnualIncomeIndicator": null,
			"attestedMonthlyIncome": "",
			"attestedSocialSecurityBenefitsIncome": "",
			"attestedStateQuarterlyIncomeIndicator": null,
			"attestedStateUnemploymentIncome": "",
			"attestedIRSAnnualIncome": "",
			"ssnAlternateName": {
				"csrf": null,
				"effectiveDate": null,
				"firstName": "",
				"middleName": "",
				"lastName": "",
				"salutationName": "",
				"suffixName": ""
			},
			"employerInsurance": [{
				"csrf": null,
				"employerName": "",
				"employerSponsoredCoverageStartDate": null,
				"esiEnrollmentStatusType": "",
				"otherHealthInsurancePlanEndIndicator": null,
				"potentialMedicaidnonESIEnrolledIndicator": null,
				"primaryInsuredName": {
					"csrf": null,
					"effectiveDate": null,
					"firstName": "",
					"middleName": "",
					"lastName": "",
					"salutationName": "",
					"suffixName": ""
				}
			}],
			"deprivedChildIndicator": null,
			"fosterCareStateCode": "",
			"deceasedIndicator": false,
			"noticeDate": null,
			"ageLeftFosterCareCode": "",
			"hadMedicaidDuringFosterCareIndicator": null,
			"otherCoverageWithin6MonthsIndicator": null,
			"citizenshipDocumentAlternateName": {
				"csrf": null,
				"effectiveDate": null,
				"firstName": "",
				"middleName": "",
				"lastName": "",
				"salutationName": "",
				"suffixName": ""
			},
			"tribeName": "",
			"tribeStateCode": "",
			"tribeCode": "",
			"eligibleNewPlansIndicator": null,
			"losingCurrentPlanIndicator": null,
			"exchangeState": null,
			"noFixedAddressIndicator": false,
			"medicaidCorrectExchange": false,
			"qhpCorrectExchange": false,
			"optionStudentResidency": false,
			"studentResidencyAgeThreshold": null,
			"medicaidStudentResidencyRulesApplies": null,
			"onlyApplicantIndicator": false,
			"residencyState": null,
			"lastRecordIndicator": false,
			"specialRuleForTaxHouseholdApplies": false,
			"residencyStateList": [],
			"dependentFilerStateMatch": false,
			"aptcReferralIndicator": false,
			"attestedApplyingForCoverageIndicator": false,
			"attestedChildOfCaretakerIndicator": false,
			"attestedImmigrationStatusIndicator": false,
			"attestedCaretakerIndicator": false,
			"attestedCaretakerID": "",
			"dateOfAdoption": null,
			"dateGainedEligibleImmigrationStatus": null,
			"dateReleasedFromIncarceration": null,
			"dateMarried": null,
			"dateMoved": null,
			"monthlyIncomeGreaterThanFPLIndicator": "",
			"isMarriedIndicator": false,
			"livesWithIndcator": false,
			"livesWithAdultTaxClaimerIndicator": false,
			"livesWithMinorAgeDependentIndicator": false,
			"livesWithOtherParentNotClaimerIndicator": false,
			"movedFromCountyCode": "",
			"movedFromZipCode": "",
			"needsSeparateApplicationIndicator": false,
			"coverageYearDependentIndicator": false,
			"futureDependents": [],
			"veteranIndicator": false,
			"childOfVeteranIndicator": false,
			"spouseOfVeteranIndicator": false,
			"stateHealthBenefitAvaliableIndicator": false,
			"personForWorkQuarterExcludedIndicator": false,
			"applicantAge": null,
			"performVerificationIndicator": false
		},
		{
			"csrf": null,
			"member": {
				"csrf": null,
				"birthDate": "Sun, 10 Aug 2003 00:00:00 CDT",
				"identifier": "",
				"personName": {
					"csrf": null,
					"effectiveDate": null,
					"firstName": "Leath",
					"middleName": "",
					"lastName": "Yates",
					"salutationName": "",
					"suffixName": ""
				},
				"telephonePlace": [{
					"csrf": null,
					"personTelephoneStartDate": null,
					"personTelephoneEndDate": null,
					"personTelephoneCategoryCode": "",
					"telephonePlace": {
						"csrf": null,
						"areaNumber": null,
						"switchNumber": null,
						"lineNumber": null,
						"extensionNumber": null,
						"number": "",
						"telephoneCountry": {
							"csrf": null,
							"telephoneCountryCode": null,
							"elephoneCountryName": ""
						}
					},
					"personTelephoneRelationshipRoleCode": null,
					"receiveNotificationIndicator": null
				},
				{
					"csrf": null,
					"personTelephoneStartDate": null,
					"personTelephoneEndDate": null,
					"personTelephoneCategoryCode": "",
					"telephonePlace": {
						"csrf": null,
						"areaNumber": null,
						"switchNumber": null,
						"lineNumber": null,
						"extensionNumber": null,
						"number": "",
						"telephoneCountry": {
							"csrf": null,
							"telephoneCountryCode": null,
							"elephoneCountryName": ""
						}
					},
					"personTelephoneRelationshipRoleCode": null,
					"receiveNotificationIndicator": null
				},
				{
					"csrf": null,
					"personTelephoneStartDate": null,
					"personTelephoneEndDate": null,
					"personTelephoneCategoryCode": "",
					"telephonePlace": {
						"csrf": null,
						"areaNumber": null,
						"switchNumber": null,
						"lineNumber": null,
						"extensionNumber": null,
						"number": "",
						"telephoneCountry": {
							"csrf": null,
							"telephoneCountryCode": null,
							"elephoneCountryName": ""
						}
					},
					"personTelephoneRelationshipRoleCode": null,
					"receiveNotificationIndicator": null
				}],
				"personAddress": [{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Home",
					"personAddressStartDate": null,
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Delivery",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "76504",
						"streetName1": "123 Main Street",
						"streetName2": "",
						"cityName": "Belton",
						"stateCode": "TX",
						"countryCode": ""
					}
				},
				{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Mail",
					"personAddressStartDate": null,
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Mailing",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "",
						"streetName1": "",
						"streetName2": "",
						"cityName": "",
						"stateCode": "",
						"countryCode": ""
					}
				},
				{
					"csrf": null,
					"personAddressRelationshipRoleCode": "Residential",
					"personAddressStartDate": null,
					"personAddressEndDate": null,
					"personAddressCategoryCode": "Residential",
					"addressPlace": {
						"csrf": null,
						"zipPlus4Code": "76504",
						"streetName1": "123 Main Street",
						"streetName2": "",
						"cityName": "Belton",
						"stateCode": "TX",
						"countryCode": ""
					}
				}],
				"personEmail": [{
					"csrf": null,
					"personEmailStartDate": null,
					"personEmailEndDate": null,
					"placeRelationshipRoleCode": "",
					"messagePlace": {
						"csrf": null,
						"emailAddressName": "",
						"emailAddressIdentifier": ""
					},
					"personEmailVerifiedIndicator": null,
					"personEmailVerifiedDateTime": null,
					"receiveNotificationIndicator": null
				}],
				"personTrackingNumber": "",
				"personIdentification": [{
					"csrf": null,
					"personIdentificationValueText": "",
					"personIdentificationEffectiveDate": null,
					"personIdentificationUpdateQuantity": 0,
					"personIdentificationType": {
						"csrf": null,
						"personIdentificationTypeCode": "",
						"personIdentificationTypeName": ""
					},
					"personIdentificationOtherTypeText": null,
					"personIdentificationEndDate": null,
					"physicalDocumentTypeCode": null,
					"physicalDocumentTypeName": null
				},
				{
					"csrf": null,
					"personIdentificationValueText": "",
					"personIdentificationEffectiveDate": null,
					"personIdentificationUpdateQuantity": 0,
					"personIdentificationType": {
						"csrf": null,
						"personIdentificationTypeCode": "",
						"personIdentificationTypeName": ""
					},
					"personIdentificationOtherTypeText": null,
					"personIdentificationEndDate": null,
					"physicalDocumentTypeCode": null,
					"physicalDocumentTypeName": null
				}],
				"genderTypeCode": "",
				"personTypeCode": "",
				"ethnicityTypeCode": "",
				"personRace": [{
					"csrf": null,
					"personRaceName": "",
					"personOriginalCountryCode": "",
					"raceSubCode": "",
					"raceTypeCode": ""
				}],
				"personCitizenshipStatus": [{
					"csrf": null,
					"personCitizenshipStatusDate": null,
					"citizenshipStatusType": {
						"csrf": null,
						"personCitizenshipStatusCode": "",
						"personCitizenshipStatusName": ""
					}
				}],
				"knownPersonWorkType": []
			},
			"incarcerationStartDate": null,
			"incarcerationEndDate": null,
			"incarcerationStatusIndicator": "",
			"residencyStartDate": null,
			"residencyEndDate": null,
			"residencyStatusIndicator": "",
			"lawfulPresenceStartDate": null,
			"lawfulPresenceEndDate": null,
			"lawfulPresenceStatusIndicator": "",
			"coverageStartDate": null,
			"coverageEndDate": null,
			"pregnancyIndicator": "",
			"expectedDeliveryDate": null,
			"fixedAddressIndicator": "true",
			"financialAssistanceIndicator": "Not Applicable",
			"incarcerationType": "",
			"otherRaceText": "",
			"otherEthnicityText": "",
			"taxFilingStatusTypeCode": "",
			"spokenLanguage": "",
			"writtenLanguage": "",
			"memberSchoolStatus": [{
				"csrf": null,
				"applicationMemberSchoolStatusDate": null,
				"schoolStatusType": "",
				"id": null
			}],
			"memberEmploymentStatus": [{
				"csrf": null,
				"applicationMemberEmploymentStatusDate": null,
				"employmentStatus": "",
				"id": null
			}],
			"memberEvent": [{
				"csrf": null,
				"identifier": "",
				"datetime": null,
				"memberEligibility": {
					"csrf": null,
					"eligibilityResultText": "",
					"eligibilityIndicator": "",
					"eligibilityDeterminationDate": null,
					"eligibilityStartDate": null,
					"eligibilityEndDate": null,
					"eligibilityReasonText": "",
					"memberEligibilityType": "",
					"eligibilityStartDateType": "",
					"eligibilityEndDateType": "",
					"eligibilityResultAmount": 0,
					"sepEffectiveDateRuleCode": null,
					"csrBenefitsIndicator": null,
					"eligibilityActiveIndicator": null
				},
				"memberVerification": {
					"csrf": null,
					"requestSentDate": null,
					"resultReceivedDate": null,
					"reasonText": "",
					"resultText": "",
					"indicator": "",
					"sourceName": "",
					"memberVerificationType": "",
					"incomeVerification": {
						"csrf": null,
						"modifiedAdjustedGrossIncomeAmount": 0,
						"aptcPrimaryFilingRequirementIndicator": "",
						"aptcSpouseFilingRequirementIndicator": "",
						"personIdentificationValueText": "",
						"personIdentificationTypeCode": "",
						"firstName": "",
						"middleName": "",
						"lastName": "",
						"taxFilingStatusTypeCode": "",
						"ssaNameControlText": "",
						"medicaidFPLPercentage": 0,
						"requestdentifier": null,
						"taxExemptionQuantity": null,
						"inconsistentIncomeAcceptedExplanationIndicator": null,
						"currentMonthlyIncomeAmount": null,
						"identifyingNonFilerSSN": [],
						"taxYear": null,
						"returnModifiedAdjustedGrossIncomeAmount": null,
						"returnAdjustedGrossIncomeAmount": null,
						"annualIncomeWithinThresholdIndicator": null,
						"attestedAnnualIncome": null,
						"annualizedEDSCurrentIncome": null,
						"percentDifference": null,
						"percentThreshholdAnnualIncome": null,
						"attestedTaxHouseholdAnnualIncome": null,
						"attestedMedicaidHouseholdAnnualIncome": null,
						"attestedHouseholdCurrentIncome": null,
						"useAnnualIncomeIndicator": null,
						"edsAnnualIncomePercent": null,
						"attestedAnnualIncomePercent": null,
						"edsHouseholdCurrentIncomePercent": null,
						"percentThreshholdLimit": null,
						"attestedHouseholdCurrentIncomePercent": null,
						"applicantApplicableMAGIStandard": null,
						"applicantApplicableMedicaidMagiStandard": null,
						"applicantApplicableCHIPMagiStandard": null,
						"ssaTitleIIMonthlyIncomeAmount": null,
						"ssaTitleIIYearlyIncomeAmount": null,
						"ssaTaxableBenefitIncomeAmount": null
					},
					"ssaNameControlText": "",
					"timer": null,
					"adjudicator": null,
					"verificationActiveIndicator": false,
					"memberVerificationTypeName": null,
					"memberIncarcerationVerification": null,
					"dataSourceType": {
						"csrf": null,
						"dataSourceTypeCode": "",
						"dataSourceTypeName": "",
						"dataSourceExternalIndicator": false
					},
					"dataFoundIndicator": false,
					"verificationDeterminationDateTime": null,
					"memberResidencyVerification": null,
					"addressServicedIndicator": false,
					"medicaidStateIndicator": false,
					"memberImmigrationStatusVerification": {
						"csrf": null,
						"immigrationStep1ResultReceivedDate": null,
						"immigrationStep1ReasonText": "",
						"immigrationStep1DataFoundIndicator": false,
						"immigrationStep1ResultText": "",
						"immigrationStep1Indicator": "",
						"immigrationStep1VerificationDeterminationDateTime": null,
						"immigrationStep1DataExpectedIndicator": null,
						"immigrationStep2ResultReceivedDate": null,
						"immigrationStep2ReasonText": "",
						"immigrationStep2ResultText": "",
						"immigrationStep2Indicator": "",
						"immigrationStep2DataFoundIndicator": false,
						"immigrationStep2VerificationDeterminationDateTime": null,
						"immigrationStep2DataExpectedIndicator": null,
						"immigrationStep3ResultReceivedDate": null,
						"immigrationStep3ReasonText": "",
						"immigrationStep3ResultText": "",
						"immigrationStep3Indicator": "",
						"immigrationStep3DataFoundIndicator": false,
						"immigrationStep3VerificationDeterminationDateTime": null,
						"immigrationStep3DataExpectedIndicator": null,
						"immigrationStep1DHSCaseNumber": null,
						"immigrationEligibilityTypeCode": null,
						"immigrationEligibilityTypeName": null,
						"step1NonCitGrantDate": null,
						"step2NonCitGrantDate": null,
						"step3NonCitGrantDate": null,
						"step1NonCitAdmToDate": null,
						"step2NonCitAdmToDate": null,
						"step3NonCitAdmToDate": null,
						"immigrationEADTypeCode": null,
						"immigrationEADTypeName": null,
						"receivedStep2MajorTypeCode": null,
						"receivedStep2MajorTypeName": null,
						"receivedStep3MajorTypeCode": null,
						"receivedStep3MajorTypeName": null,
						"receivedStep1COAType": [],
						"receivedStep2COAType": [],
						"receivedStep3COAType": [],
						"immigrationStep1LawfulPresenceVerifiedIndicator": null,
						"immigrationStep2LawfulPresenceVerifiedIndicator": null,
						"immigrationStep3LawfulPresenceVerifiedIndicator": null,
						"immigrationStep1QualifiednoncitizenIndicator": null,
						"immigrationStep2QualifiednoncitizenIndicator": null,
						"immigrationStep3QualifiednoncitizenIndicator": null,
						"immigrationStep1FiveYearBarAppliedIndicator": false,
						"immigrationStep2FiveYearBarAppliedIndicator": false,
						"immigrationStep3FiveYearBarAppliedIndicator": false,
						"immigrationStep1FiveYearBarMetIndicator": false,
						"immigrationStep2FiveYearBarMetIndicator": false,
						"immigrationStep3FiveYearBarMetIndicator": false,
						"immigrationStatusRedeterminationDate": null
					},
					"ssnVerified": false,
					"citizenshipVerified": false,
					"edsResponseExpected": false,
					"dhsResponseCode": "",
					"requestIdentifier": null,
					"dataExpectedIndicator": null,
					"reportedHubErrorTypeCode": null,
					"reportedHubErrorTypeName": null,
					"requestedApplicationMemberNonESIMecVerification": [],
					"mecOtherPublicNonEsiInconsistencyCount": null,
					"memberCurrentIncomeVerification": null,
					"reportedSourceSystemError": [],
					"taxHouseholdSizeDifference": null,
					"useAnnualIncome": null,
					"supportingPhysicalDocument": [],
					"applicantPregnancyCategoryIndicator": null,
					"applicantChildCategoryIndicator": null,
					"priorNumbersMatch": false,
					"notToBeCheckedStatus": false,
					"priorSSNCitizenshipDataMatch": false,
					"finalizingDataSourceType": null,
					"statusExpired": null,
					"chipOrMAGIEligibleStatus": null
				},
				"memberCalculation": {
					"csrf": null,
					"requestSentDate": null,
					"resultReceivedDate": null,
					"reasonText": "",
					"resultText": "",
					"indicator": "",
					"sourceName": "",
					"memberCalculationType": "",
					"maxAptcComputation": {
						"csrf": null,
						"benchmarkPolicyPremiumAmount": null,
						"adultApplicantQuantity": null,
						"childApplicantQuantity": null
					},
					"ratingEngineComputation": {
						"csrf": null,
						"maxAPTCAmount": null,
						"remanderBHCAmount": null,
						"requestdentifier": null,
						"aptcEligibilityIndicator": null,
						"ptcFPLPercentage": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"benefitYear": null
					},
					"ptcComputation": {
						"csrf": null,
						"ptcFPLPercentage": null,
						"taxHouseholdMemberQuantity": null,
						"taxHouseholdUnlawfullMemberQuantity": null,
						"ptcFPLAmount": null,
						"ptcFPLExcludeUnlawfullAmount": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"projectedTaxHouseholdIncomeAmount": null
					},
					"taxHousholdAdjustedMonthlyPremiumAmount": {
						"csrf": null,
						"benchmarkPolicyPremiumAmount": null,
						"ptcFPLPercentage": null,
						"taxHouseholdMemberQuantity": null,
						"taxHouseholdUnlawfullMemberQuantity": null,
						"ptcFPLAmount": null,
						"ptcFPLExcludeUnlawfullAmount": null,
						"ptcFPLTaxHouseholdIncomeAmount": null,
						"taxReturnFilingStatusTypeCode": null,
						"requestIdentifier": null,
						"coverageFamilyQuantity": null,
						"birthDate": [],
						"coverageCategoryTypeCode": []
					},
					"medicaidComputation": null,
					"chipComputation": null
				},
				"memberEventType": "",
				"id": null
			}],
			"memberEmployer": {
				"csrf": null,
				"employerOrganization": {
					"csrf": null,
					"officeSymbolText": null,
					"businessStatusDate": null,
					"organizationStructureType": null,
					"externalOrganizationIdentifier": [],
					"issuerOrganization": null,
					"organizationNomenclature": [],
					"issuerUser": [],
					"organizationType": null,
					"organizationAddress": [],
					"organizationIdentifier": null,
					"organizationEmail": [],
					"organizationTelephone": [],
					"companyEmailDomainName": null,
					"organizationBusinessStatus": null,
					"organizationURL": []
				},
				"employeeEmployerIdentifier": "",
				"employeeSsnNumber": "",
				"memberShareSelfOnlyPremiumAmount": 0,
				"employerCoverageFamilyMemberIndicator": null,
				"employerLowestCostPlanName": "",
				"employerLowestCostPlanCost": 0.0,
				"employerSponsoredCoverageIndicator": null,
				"periodCycleType": {
					"csrf": null,
					"periodTypeCode": "",
					"periodTypeName": "",
					"concurrencyHash": ""
				},
				"concurrencyHash": "",
				"overThirtyHourWorkWeekIndicator": null,
				"employerMinimumEssentialCoverageIndicator": null,
				"employerSponsoredCoverageEligibilityStartDate": null,
				"definingESIEnrollmentStatusTypeCode": "",
				"definingESIEnrollmentStatusTypeName": "",
				"employerStatus": null
			},
			//"incarcerationTypeName": "",
			"memberIndianStatus": [],
			"memberType": "",
			"relationshipNameText": "",
			"memberStatusType": "",
			"memberRoleType": "",
			"parentCaretakerIndicator": false,
			"priorInsuranceEndDate": null,
			"insuredIndicator": "",
			"disabilityIndicator": "",
			"blindnessIndicator": "",
			"applicationMemberFamilyTypeCode": "",
			"applicationMemberFamilyTypeName": "",
			"applicationMemberTaxFilerTypeCode": "",
			"applicationMemberTaxFilerTypeName": "",
			"parentApplicationMember": [{
				"csrf": null,
				"applicationMemberIdentifier": "",
				"applicationMemberAssociationDate": null,
				"applicationMemberAssociationReasonTypeCode": "",
				"applicationMemberAssociationReasonTypeName": null,
				"memberAssociationRoleTypeCode": null,
				"memberAssociationRoleTypeName": null,
				"superordinateMember": null,
				"subordinateMember": null,
				"id": null
			}],
			"applicationMemberTaxFiler": {
				"csrf": null,
				"concurrencyHash": "",
				"projectedTaxHouseholdIncomeAmount": null,
				"taxReturnFilingStatusTypeCode": "",
				"taxFilingStatusChangeIndicator": false,
				"enrollmentAPTCAmount": 0.0,
				"taxHouseholdIdentifier": null,
				"promptTaxReturnFilingStatusCount": null,
				"projectedTaxReturnFilingStatusTypeCode": null,
				"projectedTaxReturnFilingStatusTypeName": null,
				"csramount": 0.0,
				"csrtypeCode": ""
			},
			"applicationMemberEmployeeTypeCode": "",
			"applicationMemberEmployeeTypeName": "",
			"childApplicationMember": [{
				"csrf": null,
				"applicationMemberIdentifier": "",
				"applicationMemberAssociationDate": null,
				"applicationMemberAssociationReasonTypeCode": "",
				"applicationMemberAssociationReasonTypeName": null,
				"memberAssociationRoleTypeCode": null,
				"memberAssociationRoleTypeName": null,
				"superordinateMember": null,
				"subordinateMember": null,
				"id": null
			}],
			"applicationMemberSubscriberTypeCode": "",
			"applicationMemberSubscriberTypeName": "",
			"applicationFamilyGroupTypeCode": "",
			"applicationFamilyGroupTypeName": "",
			"applicationMemberEmployerIdentifier": "",
			"applicationMemberIndianStatusDate": null,
			"federalIndianStatusCode": "",
			"federalIndianStatusName": "",
			"indianStatusEvidenceDocument": [],
			"longTermCareIndicator": null,
			"unpaidBillIndicator": null,
			"absentParentIndicator": null,
			"absentParentName": "",
			"provideAbsentParentInfoIndicator": null,
			"goodCauseExemptionIndicator": null,
			"goodCauseExemptionText": "",
			"electronicNoticeIndicator": null,
			"personRecognizedTribeIndicator": null,
			"personAmericanIndianAlaskanNativeIndicator": null,
			"recentlyUnemployedIndicator": null,
			"recentlyUnemployedStartDate": null,
			"otherHealthInsuranceIndicator": true,
			"otherHealthInsuranceCoverageEndDate": null,
			"otherHealthInsuranceName": "",
			"otherHealthInsurancePolicyNumber": "",
			"concurrencyHash": "",
			"eligibleITUIndicator": null,
			"stateEmployeeChildIndicator": null,
			"nonEmployerSponsoredCoverageIndicator": false,
			"receiveITUIndicator": null,
			"requestingCoverageIndicator": true,
			"babyDueQuantity": null,
			"contactIndicator": false,
			"insuranceProductTypeCode": "",
			"insuranceProductTypeName": "",
			"applicationMemberIdentifier": "f08d4a2c-6b87-4b80-8257-27dd0c53f26b",
			"nonCustodialParentName": "",
			"citizenshipStatusIndicator": "",
			"applicationMemberAnnualTaxIncome": [{
				"csrf": null,
				"taxYear": null,
				"annualIncomeAmount": null,
				"id": null
			}],
			"subscribedInsuranceProductTypeAttestation": [],
			"definingMemberMedicaidAnchorTypeCode": "",
			"definingMemberMedicaidAnchorTypeName": "",
			"medicaidHouseholdAnchor": {
				"csrf": null,
				"medicaidHouseholdIdentifier": null,
				"medicaidHouseholdMemberQuantity": null
			},
			"receivedCurrentIncomeSourceAttestation": [],
			"applicationMemberCurrentYearTaxFiler": null,
			"nonCustodialParentIndicator": "",
			"spouseHouseholdMemberIndicator": null,
			"medicaidTaxRoleTypeCode": "",
			"dependentIndicator": true,
			"hasSpouseIndicator": null,
			"studentIndicator": null,
			"relationshipToTaxFilerTypeCode": "",
			"medicaidHousehold": {
				"csrf": null,
				"medicaidTaxRole": null,
				"currentYearTaxAnchor": null,
				"medicaidAnchor": null,
				"spouseCounter": null,
				"parentCounter": null,
				"parentsLivingWithCounter": null,
				"caretakerCounter": null,
				"householdMembersCounter": null,
				"pregnanciesCounter": null,
				"pregnancyInHouseholdIndicator": null,
				"claimingTaxFilerNotApplicationMemberIndicator": null,
				"medicaidChildAgeIndicator": null,
				"under21AndFTSOption": null,
				"addressSameAsClaimingFiler": null,
				"unableToDetermineMedicaidEligibilityDate": null,
				"unableToDetermineMedicaidEligibilityReason": null,
				"nonCustodialClaimerCustodialApplyingIndicator": null,
				"parentsFilingJointlyIndicator": null,
				"sameHouseholdParentsSeparateTaxIndicator": null,
				"nonCustodialClaimerBothParentsApplyingIndicator": null,
				"totalBabiesDue": null,
				"childLivesWithParentIndicator": false,
				"marriedFilingJointlyIndicator": false
			},
			"coverageYearTaxHousehold": {
				"csrf": null,
				"plannedReturnFilingStatus": null,
				"spouseCounter": null,
				"taxHouseholdSize": null,
				"dependentIndicator": null,
				"marriedFilingJointlyIndicator": null,
				"hasSpouseIndicator": null,
				"taxFilerIndicator": null
			},
			"applicationMemberCurrentYearTaxFilerTypeCode": "",
			"applicationMemberCurrentYearTaxFilerTypeName": "",
			"medicaidEligibilityDeterminationDate": null,
			"medicaidEligibilityReasonText": "",
			"promptParentAddressCount": null,
			"livedInUS5YearIndicator": null,
			"largeAssetIndicator": null,
			"calculatedAnnualIncomeVerificationIndicator": null,
			"coverageYearAnnualIncomeExpectedToChangeIndicator": null,
			"qualifyPlanSelectIndicator": null,
			"spouseInHouseholdIndicator": null,
			"babyOrAdoptedInHouseholdIndicator": null,
			"serviceAreaChangeIndicator": null,
			"notChosenPlanIndicator": null,
			"definingCircumstanceChangeAttestation": [],
			"enrollmentPeriodReason": null,
			"planSelectButtonStatus": null,
			"definingApplicationMemberContactMethod": [],
			"hubTransferAckRequestID": null,
			"hubTransferAckStatusCode": null,
			"hubTransferTimeStamp": null,
			"currentDate": null,
			"proposedCoverageStartDate": null,
			"maxProposedCoverageEffectiveDate": null,
			"healthcareSharingMinistryName": null,
			"healthcareSharingMinistryDistrict": null,
			"healthcareSharingMinistryCongregation": null,
			"healthcareSharingMinistryCounty": null,
			"healthcareSharingMinistryCity": null,
			"healthcareSharingMinistryState": null,
			"healthcareSharingMinistryZip": null,
			"durationOfMembershipHSM": null,
			"healthcareSharingMinistryExistIndicator": null,
			"healthcareSharingMinistryActiveStartDate": null,
			"healthcareSharingMinistryActiveEndDate": null,
			"memberExemptions": [],
			"id": null,
			"nonESInsurance": [],
			"marriedFilingJointlyIndicator": null,
			"reuseTaxDataPermissionIndicator": false,
			"isIncarcerated": null,
			"sevisIDIndicator": null,
			"doNotKnowIncomeIndicator": "",
			"greaterThanFPLIndicator": "",
			"incomeSubjectToFederalRestrictions": "",
			"receivedIndianHealthServicesIndicator": "",
			"tribalAmount": "",
			"eligibleESIRetirementCobraParentIndicator": "",
			"blindDisabledIndicator": null,
			"eligibleImmigrationStatusIndicator": null,
			"parentOfStudentLivingInStateIndicator": null,
			"priorTo1956Indicator": null,
			"taxFilerIndicator": "",
			"usMailIndicator": "",
			"medicaidDeterminationIndicator": null,
			"withdrawApplicationIndicator": null,
			"registerToVoteIndicator": null,
			"caretakerRelativeIndicator": null,
			"avgHoursPerWeek": null,
			"preliminaryParentCaretakerRelative": null,
			"sameNameIndicator": "",
			"motherAvgHoursWeek": null,
			"fatherAvgHoursWeek": null,
			"preliminaryChildOfCaretakerRelative": null,
			"fosterCareIndicator": null,
			"fosterCareEndedBecauseOfAge": null,
			"studentParentInStateIndicator": "",
			"liveOutsideStateTemporarilyIndicator": "true",
			"coverageInDifferentStateIndicator": "",
			"privacyPolicyAgreementIndicator": null,
			"childOfCaretakerRelativeIsEnrolledIndicator": "",
			"amountIRSAnnualIncome": "",
			"amountSocialSecurityBenefitsIncome": "",
			"amountStateQuarterlyIncome": "",
			"amountStateUnemploymentIncome": "",
			"attestedAnnualIncome": "",
			"attestedIRSAnnualIncomeIndicator": null,
			"attestedMonthlyIncome": "",
			"attestedSocialSecurityBenefitsIncome": "",
			"attestedStateQuarterlyIncomeIndicator": null,
			"attestedStateUnemploymentIncome": "",
			"attestedIRSAnnualIncome": "",
			"ssnAlternateName": {
				"csrf": null,
				"effectiveDate": null,
				"firstName": "",
				"middleName": "",
				"lastName": "",
				"salutationName": "",
				"suffixName": ""
			},
			"employerInsurance": [{
				"csrf": null,
				"employerName": "",
				"employerSponsoredCoverageStartDate": null,
				"esiEnrollmentStatusType": "",
				"otherHealthInsurancePlanEndIndicator": null,
				"potentialMedicaidnonESIEnrolledIndicator": null,
				"primaryInsuredName": {
					"csrf": null,
					"effectiveDate": null,
					"firstName": "",
					"middleName": "",
					"lastName": "",
					"salutationName": "",
					"suffixName": ""
				}
			}],
			"deprivedChildIndicator": null,
			"fosterCareStateCode": "",
			"deceasedIndicator": false,
			"noticeDate": null,
			"ageLeftFosterCareCode": "",
			"hadMedicaidDuringFosterCareIndicator": null,
			"otherCoverageWithin6MonthsIndicator": null,
			"citizenshipDocumentAlternateName": {
				"csrf": null,
				"effectiveDate": null,
				"firstName": "",
				"middleName": "",
				"lastName": "",
				"salutationName": "",
				"suffixName": ""
			},
			"tribeName": "",
			"tribeStateCode": "",
			"tribeCode": "",
			"eligibleNewPlansIndicator": null,
			"losingCurrentPlanIndicator": null,
			"exchangeState": null,
			"noFixedAddressIndicator": false,
			"medicaidCorrectExchange": false,
			"qhpCorrectExchange": false,
			"optionStudentResidency": false,
			"studentResidencyAgeThreshold": null,
			"medicaidStudentResidencyRulesApplies": null,
			"onlyApplicantIndicator": false,
			"residencyState": null,
			"lastRecordIndicator": false,
			"specialRuleForTaxHouseholdApplies": false,
			"residencyStateList": [],
			"dependentFilerStateMatch": false,
			"aptcReferralIndicator": false,
			"attestedApplyingForCoverageIndicator": false,
			"attestedChildOfCaretakerIndicator": false,
			"attestedImmigrationStatusIndicator": false,
			"attestedCaretakerIndicator": false,
			"attestedCaretakerID": "",
			"dateOfAdoption": null,
			"dateGainedEligibleImmigrationStatus": null,
			"dateReleasedFromIncarceration": null,
			"dateMarried": null,
			"dateMoved": null,
			"monthlyIncomeGreaterThanFPLIndicator": "",
			"isMarriedIndicator": false,
			"livesWithIndcator": false,
			"livesWithAdultTaxClaimerIndicator": false,
			"livesWithMinorAgeDependentIndicator": false,
			"livesWithOtherParentNotClaimerIndicator": false,
			"movedFromCountyCode": "",
			"movedFromZipCode": "",
			"needsSeparateApplicationIndicator": false,
			"coverageYearDependentIndicator": false,
			"futureDependents": [],
			"veteranIndicator": false,
			"childOfVeteranIndicator": false,
			"spouseOfVeteranIndicator": false,
			"stateHealthBenefitAvaliableIndicator": false,
			"personForWorkQuarterExcludedIndicator": false,
			"applicantAge": null,
			"performVerificationIndicator": false
		}]
	};
	return members;
}


//Sprint 14 dummy data for employer/hub
function getSprint13HubEmployerData()
{
	var employers = [];
	
	employers.push(
	{
		employerName: "Toys R Us",
		income : 400,
		frequency: "Monthly"
	});	
	employers.push(
	{
		employerName: "Megolomania Entertainment",
		income : 1400,
		frequency: "Monthly"
	});			
	return employers;
}

function createNewDummyInconsistency(appId, names, inconsistencyType, date)
{
	var inconsistency = 
	{
		applicationId :appId,
		names : names,  //list of names
		inconsistencyTypeCode : inconsistencyType,
		inconsistencyTypeName : inconsistencyType,
		clockExpirationDate : date
	};
	
	return inconsistency;
}

//Sprint 14 dummy data for inconsistency
function getDummyInconsistencyDocuments()
{
	var docs = [];
	
	docs.push(createNewDummyInconsistency('1','John Doe', 'Current Income', '12/15/' + getCurrentEnrollmentYear()));
	docs.push(createNewDummyInconsistency('2222','Steve Rogers', 'MAGI', '12/16/' + getCurrentEnrollmentYear()));
	
	return docs;

}
//sprint 14
function getDummyClockTrackerInfo()
{
	var clockTrackStatus =
	{
		statusCode : 'ClockStart',
		statusName : 'Clock Start',
		reasonsCode : '1',
		reasonsName : 'Running',
		durationCode : '90Days',
		durationName : '90 Days',
		actionDate : '2012-06-20'
		
	};
	return clockTrackStatus;
}
//sprint 14
function createNewDummyEvidenceDocument(id, documentName, documentTypeCode, documentTypeName, noticeDate, receivedDate)
{
	var evidence = 
	{
		id: id,
		documentName: documentName,
		documentTypeCode : documentTypeCode,
		documentTypeName: documentTypeName,
		noticeDate :  noticeDate,
		receivedDate	: receivedDate
	};
	return evidence;
}
//sprint 14
//get pool of available documents
function getDummyAvailableEvidenceData()
{
	var evidence=[];
	
	evidence.push(createNewDummyEvidenceDocument('1','I-551 Permenant Resident Card- Wanda Maximoff.pdf', 'PermenantResidentCard','Permenant Resident Card', null, '2012-01-07'));
	evidence.push(createNewDummyEvidenceDocument('2','BirthCertificate.pdf', 'BirthCertificate','Birth Certificate', null, '2012-01-03'));
	
	
	return evidence;
}
//sprint 14
function getDummyDocumentEvidenceLogData()
{
	//pre existing evidence
	var evidence=[];
	
	evidence.push(createNewDummyEvidenceDocument('1','I-551 Permenant Resident Card- Wanda Maximoff.pdf', 'PermenantResidentCard','Permenant Resident Card', '2012-06-20', '2012-01-07'));
	
	return evidence;
}

function getDummyUnidentifiableDocumentResults()
{
	//returns a set of dummy data records
	var resultObj = 
	[
		{
			'firstName' : 'Han',
			'middleName' : '',
			'lastName' : 'Solo',
			'documentType' : 'Pay Stub',
			'serviceArea' : 'TX',
			'dateReceived' : '01/01/2013'
		},
		{
			'firstName' : 'Leia',
			'middleName' : '',
			'lastName' : 'Organa',
			'documentType' : '1099',
			'serviceArea' : 'VA',
			'dateReceived' : '01/02/2013'
		},
		{
			'firstName' : 'Chewbacca',
			'middleName' : '',
			'lastName' : 'Wookie',
			'documentType' : 'W-2',
			'serviceArea' : 'NY',
			'dateReceived' : '01/03/2013'
		}
	];
	
	return resultObj;
}

function getDummyInformaticaData() {
	// Returns fake data to simulate the informatica service.
	var partialValidation = 
	[
		// This is the home address.
		{
			'zipPlus4Code' : '76548-1983',
			'streetName1' : '520 PAN AMERICAN DR',
			'streetName2' : '',
			'cityName' : 'HARKER HEIGHTS',
			'stateCode' : 'TX',
			'countryCode' : 'USA'
		},
		
		// This is the mailing address
		{
			'zipPlus4Code' : '76548-1983',
			'streetName1' : '201 E CENTRAL TEXAS EXPY STE',
			'streetName2' : '100',
			'cityName' : 'HARKER HEIGHTS',
			'stateCode' : 'TX',
			'countryCode' : 'USA'
		}
	];
	return partialValidation;
}

function getDummyDentalChoiceVO() {
	var dentalChoiceVO = {
		plans: [
			{
				planName: "Alpha Omega",
				planDescriptor: "Premier Plus",
				adultDentalCoverage: true,
				pediatricDentalCoverage: true,
				enrollees: [
					{
						firstName: "John",
						lastName: "Smith"
					},
					{
						firstName: "Helen",
						lastName: "Smith"
					}
				]
			},
			{
				planName: "Green Star",
				planDescriptor: "Choice",
				adultDentalCoverage: false,
				pediatricDentalCoverage: false,
				enrollees: [
					{
						firstName: "Sue",
						lastName: "Smith"
					}
				]
			},
			{
				planName: "Omega",
				planDescriptor: "Premier Plus",
				adultDentalCoverage: false,
				pediatricDentalCoverage: true,
				enrollees: [
					{
						firstName: "Tom",
						lastName: "Smith"
					},
					{
						firstName: "Kimberly",
						lastName: "Smith"
					}
				]
			},
			{
				planName: "Sigma Zeta",
				planDescriptor: "Premier Plus",
				adultDentalCoverage: true,
				pediatricDentalCoverage: false,
				enrollees: [
					{
						firstName: "Jim",
						lastName: "Smith"
					},
					{
						firstName: "Jacob",
						lastName: "Smith"
					}
				]
			},
			{
				planName: "Omicron Zeta",
				planDescriptor: "Premier Plus",
				adultDentalCoverage: true,
				pediatricDentalCoverage: false,
				enrollees: [
					{
						firstName: "Xachariah",
						lastName: "Smith"
					},
					{
						firstName: "Mahershalalhashbaz",
						lastName: "Smith"
					},
					{
						firstName: "Optimus",
						lastName: "Smith"
					},
					{
						firstName: "Prime",
						lastName: "Smith"
					}
				]
			}
		]
	};
	
	return dentalChoiceVO;
}

function getDummyDentalSideBySideData()
{
	return [
		{
			planId: 5,
			issuerName: "Bob Insurance",
			planName: "Good Plan",
			monthlyPremium: 500,
			aptcAmount: 100,
			planPriceGuaranteed: false,
			deductible: 100,
			adultDental: true,
			pediatricDental: true,
			summaryOfBenefits: "#",
			urlPlanBrochure: "#",
			urlProviderDirectory: "#",
			coverageClass: "High",
			coveragePercent: 60,
			adultRestorativePercent: 50,
			adultPreventativePercent: 90,
			adultOutOfNetwork: "Yes",
			childRestorativePercent: 99,
			childPreventativePercent: 99,
			childOutOfNetwork: "Yes",
			outOfPocketMaximum: 5000,
			adultBenefitMaximum: 9001,
			childBenefitMaximum: 9002,
			adultOutOfPocketMaximum: 2,
			childOutOfPocketMaximum: 2,
			findAdultDentistsUrl: "#",
			findChildDentistsUrl: "#",
			services: [
				{
					name: "Routine Services",
					value: "No"
				},
				{
					name: "Basic Restorative",
					value: "50%"
				},
				{
					name: "Major Restorative",
					value: "No"
				},
				{
					name: "Orthodontia",
					value: "No"
				}
			],
			productType:"PPO",
			isSelected: false,
			reducedCostIndicator: true,
			anonymous: false
		},
		{
			planId: 6,
			issuerName: "JimBob Insurance",
			planName: "Bad Plan",
			monthlyPremium: 900,
			aptcAmount: 100,
			planPriceGuaranteed: true,
			deductible: 500,
			adultDental: true,
			pediatricDental: false,
			summaryOfBenefits: null,
			urlPlanBrochure: "#",
			urlProviderDirectory: "",
			coverageClass: "Low",
			coveragePercent: 40,
			adultRestorativePercent: 0,
			adultPreventativePercent: 1,
			adultOutOfNetwork: "No",
			childRestorativePercent: 0,
			childPreventativePercent: 1,
			childOutOfNetwork: "No",
			adultBenefitMaximum: 2,
			childBenefitMaximum: 1,
			outOfPocketMaximum: 5000,
			adultOutOfPocketMaximum: 2000,
			childOutOfPocketMaximum: 2000,
			findAdultDentistsUrl: "#",
			findChildDentistsUrl: "#",
			services: [
				{
					name: "Generic Drug",
					value: "$20"
				},
				{
					name: "Preferred Brand Drug",
					value: "$40"
				},
				{
					name: "Specialty Drugs",
					value: "$75"
				},
				{
					name: "Non-preferred Brand",
					value: "$50"
				}
			],
			productType:"PPO",
			reducedCostIndicator: false,
			isSelected: true,
			anonymous: false
		},
		{
			planId: 7,
			issuerName: "Maleficent Insurance",
			planName: "ReallyBad Plan",
			monthlyPremium: 1200,
			aptcAmount: 100,
			planPriceGuaranteed: false,
			deductible: 900,
			adultDental: true,
			pediatricDental: false,
			summaryOfBenefits: null,
			urlProviderDirectory: "",
			urlPlanBrochure: "#",
			coverageClass: "Low",
			coveragePercent: 40,
			adultRestorativePercent: 0,
			adultPreventativePercent: 1,
			adultOutOfNetwork: "No",
			adultBenefitMaximum: 2,
			adultOutOfPocketMaximum: 3000,
			outOfPocketMaximum: 5000,
			findAdultDentistsUrl: "#",
			findChildDentistsUrl: "#",
			productType:"PPO",
			isSelected: false,
			reducedCostIndicator: false,
			anonymous: true
		}
	];
}
