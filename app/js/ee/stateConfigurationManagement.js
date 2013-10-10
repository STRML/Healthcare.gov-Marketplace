// Fetches state configuration data
// Abstraction layer for eeReferenceData.js
// for best performance, preload this data by adding the necessary reference
// type to the preloadAllReferenceData() function call in the BB router

var 	referenceTypesForIndApp = 
	[
		"StateConfigFosterCareAgeStandard",
		"StateCHIPWaitingPeriodType", 
		"StudentResidencyStatus",
		"StateDeprivationRequirementRetainedType",
		"FamilyRelationshipDomesticPartnerType",
		"StateOptionPredictableIncomeType",
		'FFEMedicaidAgeFilerOption',
		'MedicaidHouseholdSizeAdjustment',
		"StateMedicaidNameType",
		"StateCHIPNameType",
		"StateHealthBenefitsEmployeesType",
		"MedicaidHouseholdUnder21AndFTS",
		"StateAcceptMedicaidType",
		"StateAcceptCHIPType"
	];

function getStateOptionForInStateFosterCareRecord(stateToCheck)
{	
	var response = getStateReferenceData("StateConfigFosterCareAgeStandard", stateToCheck);
	return parseReferenceYesNoResult(response);
}

//accesses reference codes to grab name of state medicaid program
function getStateOptionForNameOfMedicaidProgram(tenant)
{
	var response = getStateReferenceData("StateMedicaidNameType", tenant);
	return response.substring(0, response.indexOf('|'));
}

//accesses reference codes to grab name of state chip program
function getStateOptionForNameOfCHIPProgram(tenant)
{
	var response = getStateReferenceData("StateCHIPNameType", tenant);
	return response.substring(0, response.indexOf('|'));
}

//accesses reference codes to get state option for counting unborn
function getStateOptionForCountingUnborn(tenant)
{
	var response = getStateReferenceData("MedicaidHouseholdSizeAdjustment", tenant);
	
	if (response === '03')
	{
		return true;
	}
	else
	{
		return false;
	}
}

function getStateOptionForUnder21AndFTS(tenant)
{
	var response = getStateReferenceData("MedicaidHouseholdUnder21AndFTS", tenant);
	return parseReferenceYesNoResult(response);
}

function getStateOptionForStudentResidency(tenant)
{
	var response = getStateReferenceData("StudentResidencyStatus", tenant);
	return parseReferenceYesNoResult(response);
}


function getStateOptionForDeprivedChild(tenant)
{
	var response = getStateReferenceData("StateDeprivationRequirementRetainedType", tenant);
	return parseReferenceYesNoResult(response);
}

function getStateOptionForDomesticPartnership(tenant)
{
	var response = getStateReferenceData("FamilyRelationshipDomesticPartnerType", tenant);
	return parseReferenceYesNoResult(response);
}

function getStateOptionForCHIPWaitingPeriod(tenant) {
	var response = getStateReferenceData("StateCHIPWaitingPeriodType", tenant);
	return response;
}

function stateOptionPredictableIncomeIndicator(tenant)
{
	var response = getStateReferenceData("StateOptionPredictableIncomeType", tenant);
	var code = response.charAt(response.length - 1);
	return (code === '2');
}

function getFFEOptionForChildFiler()
{
	//TODO: develop a more comprehensive function to retrieve this option	
	if (referenceData.FFEMedicaidAgeFilerOption)
	{
		return parseReferenceYesNoResult(referenceData.FFEMedicaidAgeFilerOption[0].value);
	}
	else
	{
		return false;
	}
}

function getStateOptionForDenyingCHIPToStateEmployee(tenant)
{
	var response = getStateReferenceData("StateHealthBenefitsEmployeesType", tenant);
	response = response.substring(0, response.indexOf('|'));
	if (response === '01' || response === '03')
	{
		return true;
	}
	else
	{
		return false;
	}
}

function getStateOptionForAcceptingMedicaidFromFFM(tenant)
{
	var response = getStateReferenceData("StateAcceptMedicaidType", tenant);
	return parseReferenceYesNoResult(response);
}

function getStateOptionForAcceptingCHIPFromFFM(tenant)
{
	var response = getStateReferenceData("StateAcceptCHIPType", tenant);
	return parseReferenceYesNoResult(response);
}