$(document).ready(function(){$("#src_txt").live("blur",function(){var a=$(this).attr("rel");
if($(this).val()===""){$(this).val(a)
}}).live("focus",function(){var a=$(this).attr("rel");
if($(this).val()===a){$(this).val("")
}});
$(".select_date").each(function(){$(this).addDatePicker()
})
});
var myAccountContactInformationLoaded=false;
var insuranceApplicationLoaded=false;
var myAccountInformationLoadedSuccessful=false;
var idProofed=null;
var contactInfoEditable=false;
var showIncomeDiscrepancyPages=false;
var listOfEmployers=[];
var doNotKnowIncome=[];
var greaterThanFPL=[];
var useOldHouseholdPage=false;
var useStubDataPage=false;
var taxHouseholdStreamlinedPath=true;
var fplState="";
var failedVerificationCount=[];
var initializeCount=0;
var failedSSNVerification=false;
var failedVLPVerification=false;
var COVERAGE_YEAR=2012;
var ignoreVerificationErrors=false;
function initializeFailedVerificationCount(a){initializeCount++;
if(initializeCount<3){failedVerificationCount=[];
initializeFailedVerificationCountHelper(a)
}}function initializeFailedVerificationCountHelper(b){var a;
for(a=0;
a<b;
a++){failedVerificationCount.push(0)
}}function incrementFailedVerificationCount(a){var b=failedVerificationCount[a];
failedVerificationCount[a]=b+1
}function getFailedVerificationCount(a){return failedVerificationCount[a]
}function saveIndividualApplicationHelper(a){var c=a.get("identifier");
if(!isEmpty(c)){console.log("doSave: saving new application ")
}else{console.log("doSave: updating, id= "+c)
}pingAuthentication();
blockUIForSave();
var b=a.save(null,{success:function(d,e){$.unblockUI();
console.log("SAVE OK, id="+a.get("identifier"));
showApplicationId(a.get("identifier"));
saveIndividualApplicationCompleteHelper(a)
},error:function(d,e){$.unblockUI();
console.log("Save FAILED");
if(d.get("action")==="2"){saveIndividualApplication(d)
}else{saveIndividualApplicationCompleteHelper(a)
}}})
}function saveIndividualApplicationCompleteHelper(a){if(typeof myAccountRedirectOnSave!="undefined"){if(myAccountRedirectOnSave){window.location=determinePath()+"/auth/global/"+locale+"/myProfile"
}}var b=a.get("action");
switch(b){case"2":a.trigger("refreshEligibilityResultsTemplates");
a.trigger("submitApplicationComplete");
break;
case"13":a.trigger("personMatchingComplete");
break;
case"11":a.trigger("validateSystemUser");
break;
case"14":a.trigger("magiPart3Complete");
break;
case"15":submitIndividualApplication(a);
break
}}function submitIndividualApplication(a){a.set({action:"2",insuranceApplicationTypeCode:"1",submissionDatetime:getTodaysDate()},{silent:true});
saveIndividualApplicationHelper(a)
}function fetchIncomeAndSaveIndividualApplication(a){a.set({action:"4",insuranceApplicationTypeCode:"1"},{silent:true});
saveIndividualApplicationHelper(a)
}function callMedicaidResidencyAndMAGIPart2AndSaveIndividualApplication(a){a.set({action:"5",insuranceApplicationTypeCode:"1"},{silent:true});
saveIndividualApplicationHelper(a)
}function verifyCorrectExchangeResidency(a){a.set({action:"11",insuranceApplicationTypeCode:"1",submissionDatetime:getTodaysDate()},{silent:true});
saveIndividualApplicationHelper(a)
}function callPersonMatching(a){a.set({action:"13",insuranceApplicationTypeCode:"1",submissionDatetime:getTodaysDate()},{silent:true});
saveIndividualApplicationHelper(a)
}function callMAGIPart3(a){a.set({action:"14",insuranceApplicationTypeCode:"1",submissionDatetime:getTodaysDate()},{silent:true});
saveIndividualApplicationHelper(a)
}function callProcessAttestation(a){a.set({action:"15",insuranceApplicationTypeCode:"1",submissionDatetime:getTodaysDate()},{silent:true});
saveIndividualApplicationHelper(a)
}function callPredetermination(a){a.set({action:"16",insuranceApplicationTypeCode:"1",submissionDatetime:getTodaysDate()},{silent:true});
saveIndividualApplicationHelper(a)
}function saveIndividualApplication(a){a.set({action:"1"},{silent:true});
if(isEmpty(a.get("identifier"))){a.set({creationDatetime:getTodaysDate()},{silent:true})
}saveIndividualApplicationHelper(a)
}function showApplicationId(a){if(isEmpty(a)){$("#applicationIDBox").hide()
}else{$("#applicationIdSpan").text(a);
$("#applicationIDBox").show();
window.myAccountAppID=a
}}function determineIfCheckBoxEnabled(b,c,d,a){if(c===b){$("#"+d+a).prop("checked",true)
}}function isAddressEmpty(a){return((a.addressPlace.streetName1==="")&&(a.addressPlace.streetName2==="")&&(a.addressPlace.cityName==="")&&(a.addressPlace.stateCode==="")&&(a.addressPlace.zipPlus4Code===""))
}function addressesEqual(b,a){var c=false;
if((b!==null&&b!==undefined)&&(a!==null&&a!==undefined)){if(b.addressPlace.zipPlus4Code===a.addressPlace.zipPlus4Code&&b.addressPlace.streetName1===a.addressPlace.streetName1&&b.addressPlace.streetName2===a.addressPlace.streetName2&&b.addressPlace.cityName===a.addressPlace.cityName&&b.addressPlace.stateCode===a.addressPlace.stateCode){c=true
}}return c
}function setAddressesEqual(b,a){setAddressesEqual(b,a,false)
}function setAddressesEqual(b,a,c){if((a!==null&&a!==undefined)){b.addressPlace.zipPlus4Code=a.addressPlace.zipPlus4Code;
b.addressPlace.streetName1=a.addressPlace.streetName1;
b.addressPlace.streetName2=a.addressPlace.streetName2;
b.addressPlace.cityName=a.addressPlace.cityName;
b.addressPlace.stateCode=a.addressPlace.stateCode;
if(!c){b.personAddressRelationshipRoleCode=a.personAddressRelationshipRoleCode;
b.personAddressCategoryCode=a.personAddressCategoryCode
}}}function setAddressDate(a){a.personAddressStartDate=getTodaysDate()
}function phoneNumbersEqual(a,c){var b=false;
if(a===c){b=true
}return b
}function setDocumentID(a,c,f,b,e,d){addPersonID(a);
a[a.length-1].physicalDocumentTypeCode=c;
a[a.length-1].physicalDocumentTypeName=f;
a[a.length-1].personIdentificationType.personIdentificationTypeCode=b;
a[a.length-1].personIdentificationType.personIdentificationTypeName=e;
a[a.length-1].personIdentificationValueText=d
}function updateDocumentID(b,d,c,h){var g=b.length;
var f;
var e,a;
for(f=0;
f<g;
f++){a=b[f].personIdentificationType.personIdentificationTypeCode;
e=b[f].physicalDocumentTypeCode;
if((a===c)&&(e===d)){b[f].personIdentificationValueText=h;
break
}}}function getIndexFromTargetForPerson(b){var c=b.target.id;
var a=c.indexOf("Person");
a=c.substring(a+6);
return a
}function addNewEmployer(a){a.push(getEmptyEmployerInfo());
return a
}function setIndAppHeader(a,b){$("#individualApplicationHeader").html(b["ffe.ee.indApp.header."+a]);
document.title=b["ffe.ee.indApp.header.individualApp"]+" - "+b["ffe.ee.indApp.header."+a]
}function isMemberEmpty(a){if(a===null||a===undefined||a===""){return true
}if((a.member!==null&&a.member!==undefined)&&(a.member.personName!==null&&a.member.personName!==undefined)){if(isEmpty(a.member.personName.firstName)){return true
}return false
}return true
}function setFinancialAssistenceForMembers(a,b){if(a==="Yes"){b.financialAssistanceIndicator="true"
}else{if(a==="No"){b.financialAssistanceIndicator="false"
}}}function setFinancialAssistanceForAllMembers(a,c){var b=0;
for(b=0;
b<c.length;
b++){if(!isEmpty(c[b])){setFinancialAssistenceForMembers(a,c[b])
}}}function createCustomExemptionsLabel(b,a,c,d){return createCustomLabel("indApp",b,a,c,d)
}function memberTransferredToHub(b){var a=false;
if(!isEmpty(b.hubTransferAckRequestID)&&!isEmpty(b.hubTransferAckStatusCode)&&!isEmpty(b.hubTransferTimeStamp)){a=true
}console.log("transferred?"+a);
return a
}function getMemberAge(c){if(!isMemberEmpty(c)){var b=new Date();
var e=new Date(simpleDateToUIDate(c.member.birthDate));
var d=b.getFullYear()-e.getFullYear();
var a=b.getMonth()-e.getMonth();
if(a<0||(a===0&&b.getDate()<e.getDate())){d--
}return d
}}function isEligibleForCHIP(a){return false
}function isEligibleForMedicaid(a){return false
}function isEligibleForATPC(a){return true
}function getMemberIndex(c,b){for(var a=0;
a<b.length;
a++){if(c===b[a].applicationMemberIdentifier){return a
}}return null
}function unformatCurrency(b){if(!isEmpty(b)){var c=b.toString();
var a;
c=c.replace("$","");
c=c.replace(",","");
a=parseFloat(c);
return a
}return null
}function formatCurrency(a){if(!isEmpty(a)){a=a.toString();
a=addCommas(a);
if(a.indexOf(".")===-1){a="$"+a+".00"
}else{a="$"+a
}return a
}return null
}function getIdProofingStatus(){return idProofed
}function determineIfHisOrHer(b){var a="";
if(b.member.genderTypeCode==="Male"){a="his"
}else{a="her"
}if(isEmpty(a)){return"his"
}return a
}function determineIfHeOrShe(b){var a="";
if(b.member.genderTypeCode==="Male"){a="he"
}else{a="she"
}if(isEmpty(a)){return"he"
}return a
}function setPerformVerificationIndicatorForMember(a,b){var c=0;
for(c=0;
c<a.length;
c++){a[c].performVerificationIndicator=false
}a[b].performVerificationIndicator=true
}function checkForUnauthorizedAccess(f){var e="";
var h=false;
if(!isEmpty(f)){var a=f.getResponseHeader("sysmessages");
e="Correlation Id: "+f.getResponseHeader("correlationid");
if(!isEmpty(a)){a=a.substring(14,a.length);
a=a.substring(0,(a.length-2));
a=a.replace(/"/g,"");
var d="";
var g=a.split(",");
if(!isEmpty(g)&&g.length>0){for(var b=0;
b<g.length;
b++){var c=g[b];
if(c.indexOf("FORBIDDEN_403")!==-1){h=true;
break
}}}}}if(h){$(".utilitySection").hide();
$("#individualApplicationPage").hide();
$(".overlayBox").hide();
$("#UnauthorizedAccess_403").show();
$("html, body").animate({scrollTop:$("#UnauthorizedAccess_403").offset().top},0)
}}function isVerificationError(d){if((d===null)||(!d)){return false
}var l=false;
for(var e=0;
e<d.length;
e++){var g=getLatestVerificationEventWithNoDS(d[e],"SSN");
var j=getLatestVerificationEventWithNoDS(d[e],"Immigration Status");
var c=getLatestVerificationEventWithNoDS(d[e],"Income");
var f=getLatestVerificationEventWithNoDS(d[e],"TaxHouseholdSize");
var k=(g===null)?null:g.memberVerification.indicator;
var h=(j===null)?null:j.memberVerification.indicator;
var a=(c===null)?null:c.memberVerification.indicator;
var b=(f===null)?null:f.memberVerification.indicator;
if((k==="D")||(k==="E")||(h==="D")||(h==="E")||(a==="D")||(a==="E")||(b==="D")||(b==="E")){l=true
}}return l
}function showDataDownError(a,b){if(ignoreVerificationErrors){return false
}if(isEmpty(b)||(!b)){return false
}if(isEmpty($.parseJSON(b.responseText))){return false
}if(isEmpty($.parseJSON(b.responseText)["applicationMember"])){return false
}if(isVerificationError($.parseJSON(b.responseText)["applicationMember"])){a.trigger("showVerificationSystemDownBBView");
return true
}return false
}function sendUserToSection(b,a){arrGettingStarted=["ContactInformation","AuthorizedRepresentative","AddAuthorizedRepresentative","FinancialAssistance","NavigatorAssistor","NavigatorAssistorQuestions","FilerPreferences","WhoNeedsInsurance","WhoNeedsInsurancePerson","DelayedResponse","FailedIDProofing"];
arrFAH=["GetStartedSummary","FAHChapter","FAHSex","FAHSocialSecurity","FAHImmigration","FAHNaturalizedCitizen","FAHVeteranStatus","FAHHomeAddress","FAHOutOfStateResidency","FAHGetTaxStatus","FAHDependent","FAHDependentClaimedByPriorApplicant","FAHDependentCustodialClaimer","FAHClaimingTaxFilerByPriotApplicant","FAHParentCaretaker","FAHParentCaretakerSomeoneElse","FAHApplicantRelationships","FAHRace","FAHTransition","FAHDisability","FAHAmericanIndian","FAHPregnant","FAHFosterCare","FAHStudent"];
arrIncome=["FAHSummary","AddDeductions","AdditionalMonthlyIncome","AnnualIncomeDiscrepancy","AnnualIncomeInformation","ExpeditedIncome","ExpeditedFPL","HoursDecreased","IncomeChapter","MonthlyIncome","PersonalIncomeSummary","StoppedWorking","TaxAmountDiscrepancy","TribalIncome","VariableIncomeDiscrepancy"];
arrAdditionalInfo=["IncomeSummary","AdditionalInformationChapter","ApplicantRelationships","ESIDetails","EmployerContactInformation","EnrolledEmployerDetails","EnrolledWithOtherInsurance","FutureESIDetails","LegalRelationships","MedicaidCHIP","SEPAdopted","SEPImmigration","SEPLostInsurance","SEPMarried","SEPMoved","SEPProspectiveLostInsurance","SecondChanceFileJointly","SecondChanceSSN","SelectEmployer","Tribe","TribeMember"];
arrReviewSign=["SEPIncarcerated","ReviewChapter","ReviewApplication","ReviewAttestations"];
arrEligibilityResults=["ReviewSignAndSubmit","ResultsDetails"];
var c=b.get("cardName");
if($.inArray(c,arrFAH)!==-1){b.trigger("refreshFAHChapterCardTemplates");
a.navigate("FAHChapter",{trigger:true})
}else{if($.inArray(c,arrIncome)!==-1){if(("FAHSummary"===c)&&(b.get("requestingFinancialAssistanceIndicator")==="No")){b.trigger("refreshAdditionalInfoChapterTemplate");
a.navigate("additionalInformationChapter",{trigger:true})
}else{b.trigger("refreshIncomeWarningTemplate");
a.navigate("incomeWarning",{trigger:true})
}}else{if($.inArray(c,arrAdditionalInfo)!==-1){b.trigger("refreshAdditionalInfoChapterTemplate");
a.navigate("additionalInformationChapter",{trigger:true})
}else{if($.inArray(c,arrReviewSign)!==-1){b.trigger("refreshchapterPageTemplates");
a.navigate("reviewChapter",{trigger:true})
}else{if($.inArray(c,arrEligibilityResults)!==-1){b.trigger("refreshEligibilityResultsTemplates");
a.navigate("eligibilityResults",{trigger:true});
scrollTo($("#resultsSection").scrollLeft(),$("#resultsSection").scrollTop())
}else{b.trigger("refreshHouseholdContactTemplates");
a.navigate("contactInformation",{trigger:true})
}}}}}}function initializeDataTableWithDefaultOptions(a){return initializeCommonDataTable(a,getDefaultDataTableOptions())
}function initializeDataTableWithIncomeOptions(a){return initializeCommonDataTable(a,getIncomeDataTableOptions())
}function getDefaultDataTableOptions(){var a={bPaginate:false,bLengthChange:false,bFilter:false,bSort:false,bInfo:false,bAutoWidth:false};
return a
}function getIncomeDataTableOptions(){var a={bPaginate:false,bLengthChange:false,bFilter:false,bSort:false,bInfo:false,bAutoWidth:false,aoColumnDefs:[{sWidth:"150px",aTargets:[0]},{sWidth:"90px",aTargets:[3]}]};
return a
}function initializeCommonDataTable(b,a){return $("#"+b).dataTable(a)
}function displaySEPPages(){var a=new Date();
var b=new Date(2013,10,1);
if(a<b){return false
}else{return true
}}function createAdditionalInfoMemberSublist(a){var c=[];
for(var b=0;
b<a.length;
b++){if((a[b].requestingCoverageIndicator===true)&&(!((a[b].changeFilingStatusPrompt==="No"||a[b].changeFilingStatusPrompt===null)&&(isMemberPotentialCHIP(a[b])===false)&&(isMemberPotentialMedicaid(a[b])===false)&&(isMemberPotentialAPTC(a[b])===false)))){c.push(a[b])
}else{c.push(null)
}}return c
};