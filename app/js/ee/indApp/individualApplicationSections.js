function filterStudentMembers(a){var b=$.grep(a,function(d,e){var c=calculateAge(d.member.birthDate);
return(c>18&&c<21)
});
return b
}function filterFemaleMembers(b){var a=$.grep(b,function(c,d){return c.member.genderTypeCode==="Female"
});
return a
}function filterStateEmpChildMembers(b){var a=$.grep(b,function(c,d){return calculateAge(c.member.birthDate)<21
});
return a
}function getTypeOfInsuranceFromName(b){var a="11";
if(b==="Private"){a="5"
}return a
}function getTypeOfInsuranceFromCode(a){var b="Other";
if(a==="5"){b="Private"
}return b
}function getTypeOfESIInsuranceFromName(b){var a="";
if(b==="Employer Sponsored"){a="4"
}else{if(b==="Medicaid"){a="6"
}else{if(b==="Medicare"){a="2"
}else{if(b==="CHIP"){a="7"
}else{if(b==="TRICARE"){a="8"
}else{if(b==="Veteran Health Program"){a="9"
}else{if(b==="Peace Corps"){a="10"
}else{if(b==="BHP"){a="12"
}}}}}}}}return a
}function generateMemberIdMap(b){var a={};
_.each(b,function(c){a[c.applicationMemberIdentifier]=c
});
return a
}function generateTaxFilingStatusText(a,d){var c="";
if(a.applicationMemberTaxFiler.taxReturnFilingStatusTypeCode==="Yes"){if(a.applicationMemberTaxFilerTypeCode==="2"){c+="Filed Jointly, "
}else{c+="Filed Taxes, "
}}var e=isDependent(a);
if(e){c+="Claimed as Dependent, "
}if(a.applicationMemberTaxFiler.taxFilingStatusChangeIndicator===true){c+="Status will change in coverage year, "
}else{c+="No change in status in coverage year, "
}if(a.parentCaretakerIndicator===true){var b=generateChildrenNames(a,d);
c+="<br/> Children: "+b
}if(c!==""){c=c.substring(0,c.length-2)
}return c
}function isDependent(b){var a=false;
a=b.dependentIndicator;
return a
}function determineStudentEligibility(c,a,b,g){var f=getMemberAge(a[b]);
if(getStateOptionForStudentResidency(g)){if((f>17&&f<23)&&a[b].requestingCoverageIndicator===true){return true
}}else{if(f===18){if(a[b].requestingCoverageIndicator===true&&isEmpty(a[b].needsSeparateApplicationIndicator)){return true
}else{if(a[b].requestingCoverageIndicator===false&&a[b].needsSeparateApplicationIndicator===true){return true
}}}else{if(f>18&&f<21){if(getStateOptionForUnder21AndFTS(g)){if(a[b].requestingCoverageIndicator===true){return true
}else{if(a[b].requestingCoverageIndicator===false&&a[b].needsSeparateApplicationIndicator===false){return true
}else{if(a[b].requestingCoverageIndicator===false&&a[b].needsSeparateApplicationIndicator===true){var d=c.get("applicationMemberAssociation");
if(d!==undefined){for(var e=0;
e<d.length;
e++){if((d[e].memberAssociationRoleTypeCode==="4")&&(d[e].superordinateMember===a[b].applicationMemberIdentifier)&&(d[e].subordinateMember!==a[0].applicationMemberIdentifier)){return true
}}}}}}}}else{return false
}}}}function generateChildrenNames(b,f){var g="";
var c=f.get("applicationMember");
var k=generateMemberIdMap(c);
if(b.parentApplicationMember.length>0&&b.childApplicationMember.length>0&&b.parentApplicationMember.length===b.childApplicationMember.length){for(var d=0;
d<b.parentApplicationMember.length;
d++){var e=b.parentApplicationMember[d].applicationMemberIdentifier;
var a=b.childApplicationMember[d].applicationMemberIdentifier;
var j=b.childApplicationMember[d].applicationMemberAssociationReasonTypeCode;
if(b.applicationMemberIdentifier===e&&j==="3"){var h=k[a];
g+=h.member.personName.firstName+" "+h.member.personName.middleName+" "+h.member.personName.lastName+", "
}}return g
}}function generateAdditionalInfoText(d){var c="";
if(d.receiveITUIndicator===false||d.receiveITUIndicator===""){if(d.eligibleITUIndicator===true){c+="Eligible for I/T/U services, "
}else{c+="Not eligible for I/T/U services, "
}}if(d.receiveITUIndicator===true){c+="Receives for I/T/U services, "
}if(d.absentParentIndicator===true){var b=calculateAge(d.member.birthDate);
if(b<18){c+="Absent Parent = "+d.absentParentName+", "
}else{c+="Absent Spouse = "+d.absentParentName+", "
}}if(d.unpaidBillIndicator===true){c+="Unpaid Medical Bills, "
}var a=d.memberEmployer;
if(a!==undefined&&a!==""){if(a.employerSponsoredCoverageIndicator===true){c+="Eligible for Employer Sponsored Coverage, "
}if(a.employerLowestCostPlanName!==undefined&&a.employerLowestCostPlanName!==""&&a.periodCycleType.periodTypeName!==undefined&&a.periodCycleType.periodTypeName!==""){c+="Lowest Cost Plan is "+a.employerLowestCostPlanName+" paid "+a.periodCycleType.periodTypeName+", "
}if(a.employerCoverageFamilyMemberIndicator===true){c+="Offered to family members, "
}else{c+="Not offered to family members, "
}}if(c!==""){c=c.substring(0,c.length-2)
}return c
}function isEDSCalled(a,c){var b=a.get("applicationMember");
return b[c].edsCalled
}function isEDSAvailable(d,g){var b=true;
var f=d.get("applicationMember");
if(f[g].edsCalled){if(!f[g].hubResponded){b=false
}else{var c=getLatestSSNVerificationWithSSADsEvent(f[g]);
var a=getLatestCitizenshipVerificationWithSSADsEvent(f[g]);
var e=getLatestVLPVerificationWithDHSDsEvent(f[g]);
if((!isEmpty(c)&&!isEmpty(c.memberVerification)&&(isEmpty(c.memberVerification.dataExpectedIndicator)||c.memberVerification.dataExpectedIndicator===false))||(!isEmpty(a)&&!isEmpty(a.memberVerification)&&(isEmpty(a.memberVerification.dataExpectedIndicator)||a.memberVerification.dataExpectedIndicator===false))||(!isEmpty(e)&&!isEmpty(e.memberVerification)&&!isEmpty(e.memberVerification.memberImmigrationStatusVerification)&&(isEmpty(e.memberVerification.memberImmigrationStatusVerification.immigrationStep1DataExpectedIndicator)||e.memberVerification.memberImmigrationStatusVerification.immigrationStep1DataExpectedIndicator===false))){b=false
}}}return b
}function isIDSVerified(b,d){var a=true;
var c=b.get("applicationMember");
if(!isEmpty(c[d].statusIDSConfirmed)){if((c[d].ssnIDSConfirmed==="N"||c[d].statusIDSConfirmed==="N")&&c[d].idsCalledCounter<2){a=false
}}return a
}function getInconsistentSSNIndex(e,f){var g=e.get("applicationMember");
var b=f;
var h=[];
var i=getLatestSSNIndex(g[f]);
var c;
if(!isEmpty(i)){if(!isEmpty(g[f].member.personIdentification[i])&&!isEmpty(g[f].member.personIdentification[i].personIdentificationUpdateQuantity)){c=g[f].member.personIdentification[i].personIdentificationUpdateQuantity
}}var a=getLatestSSNVerificationEvent(g[f]);
var d=getLatestSSNVerificationWithSSADsEvent(g[f]);
if(!isEmpty(a)&&!isEmpty(d)&&!isEmpty(c)){if(d.memberVerification.dataFoundIndicator===false){h.push(b)
}else{if(a.memberVerification.indicator==="I"){if(c<=3){h.push(b)
}else{console.log("3rd failed attempt reached at index "+b)
}}else{if(g[f].deceasedIndicator===true){c=getFailedVerificationCount(b);
if(c<=3){h.push(b)
}else{console.log("3rd failed attempt reached at index "+b)
}}}}}return h
}function getLatestSSNVerificationEvent(a){return getLatestVerificationEventWithNoDS(a,"SSN")
}function getLatestSSNVerificationWithSSADsEvent(a){return getLatestVerificationEventWithDS(a,"SSN","SSA")
}function getLatestCitizenshipVerificationEvent(a){return getLatestVerificationEventWithNoDS(a,"Citizenship Status")
}function getLatestCitizenshipVerificationWithSSADsEvent(a){return getLatestVerificationEventWithDS(a,"Citizenship Status","SSA")
}function getInconsistentVLP(c,f){var a=true;
var e=c.get("applicationMember");
var b=getLatestVLPVerificationEvent(e[f]);
var d=getLatestVLPVerificationWithDHSDsEvent(e[f]);
if(!isEmpty(b)&&!isEmpty(d)&&!isEmpty(b.memberVerification)&&!isEmpty(d.memberVerification)){if(!isEmpty(d.memberVerification.memberImmigrationStatusVerification)&&d.memberVerification.memberImmigrationStatusVerification.immigrationStep1DataFoundIndicator===false){a=false;
console.log("Step 1 data found is false ")
}else{if(b.memberVerification.indicator!==null&&b.memberVerification.indicator!==""&&b.memberVerification.indicator==="I"&&(!isEmpty(d.memberVerification.memberImmigrationStatusVerification)&&!isEmpty(d.memberVerification.memberImmigrationStatusVerification.immigrationEligibilityTypeCode)&&(d.memberVerification.memberImmigrationStatusVerification.immigrationEligibilityTypeCode==="32"||d.memberVerification.memberImmigrationStatusVerification.immigrationEligibilityTypeCode==="37"))){a=false;
console.log("Step 1 indicator is inconsistent  ")
}}}return a
}function getLatestVLPVerificationEvent(a){return getLatestVerificationEventWithNoDS(a,"Immigration Status")
}function getLatestVLPVerificationWithDHSDsEvent(a){return getLatestVerificationEventWithDS(a,"Immigration Status","DHS")
}function getLatestVerificationEventWithNoDS(b,a){return getLatestVerificationEvent(b,a,null)
}function getLatestVerificationEventWithDS(c,b,a){return getLatestVerificationEvent(c,b,a)
}function hasUserInformationChanged(d,b){console.log("OldValues: "+d);
console.log("NewValues: "+b);
if(d.length!==b.length){console.log("Information Changed");
return true
}for(var c=0,a=d.length;
c<a;
c++){if(d[c]!==b[c]){console.log("Information Changed");
return true
}}console.log("Information did not change");
return false
}function setSSNFromVerificationToModel(h,a){var m=h.get("applicationMember");
var l="";
var k="";
var g="";
var d="";
var b=0;
for(var e=0;
e<a.length;
e++){b=a[e];
var f=m[b].member.personIdentification;
for(var c=0;
c<f.length;
c++){if(f[c].personIdentificationType.personIdentificationTypeCode==="SSN"){l=$("#ssnPart1Person"+b).val();
k=$("#ssnPart2Person"+b).val();
g=$("#ssnPart3Person"+b).val();
d=l+"-"+k+"-"+g;
f[c].personIdentificationValueText=d
}}}}function createTaxFilerAssociation(a,b,c){if(!associationExists(a,"18","5",b,c)){createTaxAssociation(a,"18","Tax Filer",b,c)
}}function createSpouseAssociation(c,b,a){if(!associationExists(c,"2","4",b,a)){createNuclearFamilyAssociation(c,"2","Spouse",b,a)
}if(!associationExists(c,"2","4",a,b)){createNuclearFamilyAssociation(c,"2","Spouse",a,b)
}}function createSpouseAssociation(c,b,a,d){if(!associationExists(c,"2","4",b,a)){createNuclearFamilyAssociation(c,"2","Spouse",b,a,d)
}if(!associationExists(c,"2","4",a,b)){createNuclearFamilyAssociation(c,"2","Spouse",a,b,d)
}}function createDependentAssociation(a,b,c){if(!associationExists(a,"19","5",b,c)){createTaxAssociation(a,"19","Tax Dependent",b,c)
}}function createMFJAssociation(a,b,c){if(!associationExists(a,"2","5",b,c)){createTaxAssociation(a,"2","Spouse",b,c)
}}function deleteSpouse(b,d){var a=b.get("applicationMember");
var e=getSpouseId(b,d);
deleteNuclearFamilyAssociation(b,a[0].applicationMemberIdentifier,e);
deleteTaxAssociation(b,a[0].applicationMemberIdentifier,e);
for(var c=0;
c<a.length;
c++){if(a[c].applicationMemberIdentifier===e){a.splice(c,1);
c--;
break
}}}function deleteDependents(b,e){var a=b.get("applicationMember");
var d=getDependents(b,e);
for(var c=0;
c<a.length;
c++){if($.inArray(a[c].applicationMemberIdentifier,d)!==-1){deleteTaxAssociation(b,e,a[c].applicationMemberIdentifier);
deleteNuclearFamilyAssociation(b,e,a[c].applicationMemberIdentifier);
a.splice(c,1);
c--
}}}function getDependents(a,e){var d=[];
var c=a.get("applicationMemberAssociation");
if(c!==undefined){for(var b=0;
b<c.length;
b++){if((c[b].memberAssociationRoleTypeCode==="5")&&(c[b].applicationMemberAssociationReasonTypeCode==="19")&&(c[b].superordinateMember===e)){d.push(c[b].subordinateMember)
}}}return d
}function checkDependentsHaveClaimingType(d,c,f){var b=false;
var a=-1;
for(var e=0;
e<f.length;
e++){a=getMemberIndex(f[e],d);
if(-1!==a){if(!isEmpty(d[a].claimingTaxFilerCategoryTypeCode)){if(c===d[a].claimingTaxFilerCategoryTypeCode){b=true;
break
}}}}return b
}function getTextForAssociation(b){var a="";
switch(b){case"1":a="Self";
break;
case"2":a="Spouse";
break;
case"3":a="Parent";
break;
case"4":a="Son/Daughter";
break;
case"5":a="Stepson/Stepdaughter";
break;
case"6":a="Grandchild";
break;
case"7":a="Sibling";
break;
case"8":a="Domestic Partner";
break;
case"9":a="Child of Domestic Partner";
break;
case"10":a="Unrelated";
break;
case"11":a="Other Relative";
break;
case"12":a="Step-parent";
break;
case"13":a="Aunt/Uncle";
break;
case"14":a="Nephew/Niece";
break;
case"15":a="Grandparent";
break;
case"16":a="First Cousin";
break;
case"17":a="Parent's Domestic Partner";
break;
case"18":a="Tax Filer";
break;
case"19":a="Tax Dependent";
break;
case"20":a="Other";
break;
case"21":a="Adopted Child";
break;
case"22":a="Annuitant";
break;
case"23":a="Brother-in-law/Sister-in-law";
break;
case"24":a="Collateral Dependent";
break;
case"25":a="Court-Appointed Guardian";
break;
case"26":a="Daughter-in-law/Son-in-law";
break;
case"27":a="Former Spouse";
break;
case"28":a="Foster Child";
break;
case"29":a="Guardian";
break;
case"30":a="Mother-in-law/Father-in-law";
break;
case"31":a="Trustee";
break;
case"32":a="Ward";
break;
case"33":a="Sponsored Dependent";
break;
case"34":a="Dependent of a Minor Dependent";
break;
default:a="N/A";
break
}return a
}function displayTextForAssociation(a,c){var b="";
switch(c){case"1":b=a["ffe.ee.indApp.shared.self"];
break;
case"2":b=a["ffe.ee.indApp.shared.husbandWife"];
break;
case"3":b=a["ffe.ee.indApp.shared.parent"];
break;
case"4":b=a["ffe.ee.indApp.shared.sonDaughter"];
break;
case"5":b=a["ffe.ee.indApp.shared.stepsonStepdaughter"];
break;
case"6":b=a["ffe.ee.indApp.shared.grandchild"];
break;
case"7":b=a["ffe.ee.indApp.shared.brotherSister"];
break;
case"8":b=a["ffe.ee.indApp.shared.domesticPartner"];
break;
case"9":b=a["ffe.ee.indApp.shared.childOfDomesticPartner"];
break;
case"10":b=a["ffe.ee.indApp.shared.otherUnrelated"];
break;
case"11":b=a["ffe.ee.indApp.shared.otherRelative"];
break;
case"12":b=a["ffe.ee.indApp.shared.stepparent"];
break;
case"13":b=a["ffe.ee.indApp.shared.uncleAunt"];
break;
case"14":b=a["ffe.ee.indApp.shared.nephewNiece"];
break;
case"15":b=a["ffe.ee.indApp.shared.grandparent"];
break;
case"16":b=a["ffe.ee.indApp.shared.firstCousin"];
break;
case"17":b=a["ffe.ee.indApp.shared.parentsDomesticPartner"];
break;
case"18":b=a["ffe.ee.indApp.shared.taxFiler"];
break;
case"19":b=a["ffe.ee.indApp.shared.taxDependent"];
break;
case"20":b=a["ffe.ee.indApp.shared.other"];
break;
case"21":b=a["ffe.ee.indApp.shared.adoptedChild"];
break;
case"22":b=a["ffe.ee.indApp.shared.annuitant"];
break;
case"23":b=a["ffe.ee.indApp.shared.brotherInLawSisterInLaw"];
break;
case"24":b=a["ffe.ee.indApp.shared.collateralDependent"];
break;
case"25":b=a["ffe.ee.indApp.shared.courtAppointedGuardian"];
break;
case"26":b=a["ffe.ee.indApp.shared.daughterInLawSonInLaw"];
break;
case"27":b=a["ffe.ee.indApp.shared.formerSpouse"];
break;
case"28":b=a["ffe.ee.indApp.shared.fosterChild"];
break;
case"29":b=a["ffe.ee.indApp.shared.guardian"];
break;
case"30":b=a["ffe.ee.indApp.shared.motherInLawFatherInLaw"];
break;
case"31":b=a["ffe.ee.indApp.shared.trustee"];
break;
case"32":b=a["ffe.ee.indApp.shared.ward"];
break;
case"33":b=a["ffe.ee.indApp.shared.sponsoredDependent"];
break;
case"34":b=a["ffe.ee.indApp.shared.dependentOfMinorDependent"];
break;
default:b=a["ffe.ee.indApp.shared.notApplicable"];
break
}return b
}function getMirrorAssociationCode(a){var b="0";
switch(a){case"3":b="4";
break;
case"12":b="5";
break;
case"2":b="2";
break;
case"8":b="8";
break;
case"17":b="9";
break;
case"4":b="3";
break;
case"5":b="12";
break;
case"9":b="17";
break;
case"7":b="7";
break;
case"15":b="6";
break;
case"6":b="15";
break;
case"13":b="14";
break;
case"14":b="13";
break;
case"16":b="16";
break;
case"11":b="11";
break;
case"10":b="10";
break;
default:break
}return b
}function createTaxAssociation(a,e,b,c,d){createAssociation(a,e,b,"5","Application Tax Role",c,d)
}function createNuclearFamilyAssociation(a,e,b,c,d){createAssociation(a,e,b,"4","NuclearFamilyHousehold",c,d)
}function createNuclearFamilyAssociation(a,f,b,c,e,d){createAssociation(a,f,b,"4","NuclearFamilyHousehold",c,e,d)
}function createCaretakerAssociation(a,e,b,c,d){createAssociation(a,e,b,"6","Caretaker Relative Role",c,d,true)
}function createLegalAssociation(a,e,b,c,d){createAssociation(a,e,b,"8","LegalRelationship",c,d)
}function createAssociation(b,h,e,d,a,f,g){var c=b.get("applicationMemberAssociation");
c.push({applicationMemberIdentifier:"",applicationMemberAssociationDate:"",applicationMemberAssociationReasonTypeCode:h,applicationMemberAssociationReasonTypeName:e,memberAssociationRoleTypeCode:d,memberAssociationRoleTypeName:a,superordinateMember:f,subordinateMember:g})
}function createAssociation(g,d,c,f,e,i,h,a){var b=g.get("applicationMemberAssociation");
b.push({applicationMemberIdentifier:"",applicationMemberAssociationDate:"",applicationMemberAssociationReasonTypeCode:d,applicationMemberAssociationReasonTypeName:c,memberAssociationRoleTypeCode:f,memberAssociationRoleTypeName:e,superordinateMember:i,subordinateMember:h,resideTogetherIndicator:a})
}function deleteTaxAssociation(a,b,c){deleteAssociation(a,"5",b,c)
}function deleteNuclearFamilyAssociation(a,b,c){deleteAssociation(a,"4",b,c)
}function deleteCaretakerAssociation(a,b,c){deleteAssociation(a,"6",b,c)
}function deleteLegalAssociation(a,b,c){deleteAssociation(a,"8",b,c)
}function deleteAssociation(a,d,e,f){var c=a.get("applicationMemberAssociation");
if(c!==undefined){for(var b=0;
b<c.length;
b++){if((c[b].memberAssociationRoleTypeCode===d)&&(c[b].superordinateMember===e)&&(c[b].subordinateMember===f)){c.splice(b,1);
b--
}}}}function associationExists(a,g,d,e,f){var c=a.get("applicationMemberAssociation");
if(c!==undefined){for(var b=0;
b<c.length;
b++){if((c[b].memberAssociationRoleTypeCode===d)&&(c[b].applicationMemberAssociationReasonTypeCode===g)&&(c[b].superordinateMember===e)&&(c[b].subordinateMember===f)){return true
}}}return false
}function doesDependentAssociationExist(c,f){var e=c.get("applicationMemberAssociation");
var b=f.applicationMemberIdentifier;
var a=false;
if(null!==e){for(var d=0;
d<e.length;
d++){if(e[d].memberAssociationRoleTypeCode==="5"&&e[d].applicationMemberAssociationReasonTypeCode==="19"&&e[d].subordinateMember===b){a=true;
break
}}}return a
}function doesClaimingAssociationExist(c,f){var e=c.get("applicationMemberAssociation");
var b=f.applicationMemberIdentifier;
var a=false;
if(null!==e){for(var d=0;
d<e.length;
d++){if(e[d].memberAssociationRoleTypeCode==="5"&&e[d].applicationMemberAssociationReasonTypeCode==="19"&&e[d].superordinateMember===b){a=true;
break
}}}return a
}function getClaimingTaxFilerMemberId(c,f){var e=c.get("applicationMemberAssociation");
var a=f.applicationMemberIdentifier;
var b="";
if(null!==e){for(var d=0;
d<e.length;
d++){if(e[d].memberAssociationRoleTypeCode==="5"&&e[d].subordinateMember===a&&e[d].applicationMemberAssociationReasonTypeCode==="19"){b=e[d].superordinateMember;
break
}}}return b
}function getDomesticPartnerId(a,b){return getSubordinateId(a,"8","4",b)
}function getSpouseId(a,b){return getSubordinateId(a,"2","4",b)
}function getSubordinateId(b,g,e,f){var a="";
var d=b.get("applicationMemberAssociation");
if(d!==undefined){for(var c=0;
c<d.length;
c++){if((d[c].memberAssociationRoleTypeCode===e)&&(d[c].applicationMemberAssociationReasonTypeCode===g)&&(d[c].superordinateMember===f)){a=(d[c].subordinateMember);
break
}}}return a
}function getTaxFilerRelationship(b,c,d){if(b!==undefined){for(var a=0;
a<b.length;
a++){if((b[a].memberAssociationRoleTypeCode==="5")&&(b[a].superordinateMember===c)&&(b[a].subordinateMember===d)){return(b[a].applicationMemberAssociationReasonTypeCode)
}}}return null
}function getRelationshipToTaxFiler(b,c,d){if(b!==undefined){for(var a=0;
a<b.length;
a++){if((b[a].memberAssociationRoleTypeCode==="4")&&(b[a].superordinateMember===c)&&(b[a].subordinateMember===d)){return(b[a].applicationMemberAssociationReasonTypeCode)
}}}return null
}function getResidesTogetherStatus(b,c,d){if(b!==undefined){for(var a=0;
a<b.length;
a++){if((b[a].memberAssociationRoleTypeCode==="4")&&(b[a].superordinateMember===c)&&(b[a].subordinateMember===d)){return(b[a].resideTogetherIndicator)
}}}return null
}function getRelationshipToCaretaker(b,c,d){if(b!==undefined){for(var a=0;
a<b.length;
a++){if((b[a].memberAssociationRoleTypeCode==="6")&&(b[a].superordinateMember===c)&&(b[a].subordinateMember===d)){return(b[a].applicationMemberAssociationReasonTypeCode)
}}}return null
}function setRelationshipToCaretaker(b,h,e,f,g){var d=b.get("applicationMemberAssociation");
var a=false;
if(d!==undefined){for(var c=0;
c<d.length;
c++){if((d[c].memberAssociationRoleTypeCode==="6")&&(d[c].superordinateMember===f)&&(d[c].subordinateMember===g)){d[c].applicationMemberAssociationReasonTypeCode=h;
d[c].applicationMemberAssociationReasonTypeName=e;
a=true
}}}if(!a){createCaretakerAssociation(b,h,e,f,g)
}}function getMembersTakenCareOf(b,e){var a=[];
var d=b.get("applicationMemberAssociation");
if(d!==undefined){for(var c=0;
c<d.length;
c++){if(d[c].memberAssociationRoleTypeCode==="6"&&d[c].superordinateMember===e){a.push(d[c].subordinateMember)
}}}return a
}function setRelationshipToTaxFiler(b,h,e,f,g){var d=b.get("applicationMemberAssociation");
var a=false;
if(d!==undefined){for(var c=0;
c<d.length;
c++){if((d[c].memberAssociationRoleTypeCode==="4")&&(d[c].superordinateMember===f)&&(d[c].subordinateMember===g)){d[c].applicationMemberAssociationReasonTypeCode=h;
d[c].applicationMemberAssociationReasonTypeName=e;
a=true
}}}if(!a){createNuclearFamilyAssociation(b,h,e,f,g)
}}function setRelationshipToTaxFiler(f,d,c,j,g,a){var b=f.get("applicationMemberAssociation");
var h=false;
if(b!==undefined){for(var e=0;
e<b.length;
e++){if((b[e].memberAssociationRoleTypeCode==="4")&&(b[e].superordinateMember===j)&&(b[e].subordinateMember===g)){b[e].applicationMemberAssociationReasonTypeCode=d;
b[e].applicationMemberAssociationReasonTypeName=c;
b[e].resideTogetherIndicator=a;
h=true
}}}if(!h){createNuclearFamilyAssociation(f,d,c,j,g,a)
}}function getRelationshipToLegal(b,c,d){if(b!==undefined){for(var a=0;
a<b.length;
a++){if((b[a].memberAssociationRoleTypeCode==="8")&&(b[a].superordinateMember===c)&&(b[a].subordinateMember===d)){return(b[a].applicationMemberAssociationReasonTypeCode)
}}}return null
}function setRelationshipToLegal(b,h,e,f,g){var d=b.get("applicationMemberAssociation");
var a=false;
if(d!==undefined){for(var c=0;
c<d.length;
c++){if((d[c].memberAssociationRoleTypeCode==="8")&&(d[c].superordinateMember===f)&&(d[c].subordinateMember===g)){d[c].applicationMemberAssociationReasonTypeCode=h;
d[c].applicationMemberAssociationReasonTypeName=e;
a=true
}}}if(!a){createLegalAssociation(b,h,e,f,g)
}}function updateAssociationLivesWith(a,e,f,d){var c=a.get("applicationMemberAssociation");
if(null!==c){for(var b=0;
b<c.length;
b++){if((c[b].memberAssociationRoleTypeCode==="4")&&(c[b].superordinateMember===e)&&(c[b].subordinateMember===f)){c[b].resideTogetherIndicator=d;
break
}}}}function isMemberPotentialAPTC(b){var a=getLatestVerificationEvent(b,"PreliminaryAPTCIncome");
if(!isEmpty(a)){if(!isEmpty(a.memberVerification)){if(a.memberVerification.indicator==="Y"){return true
}}}return false
}function isMemberPotentialQHP(c){var a=getLatestVerificationEvent(c,"Citizenship Status");
var b=getLatestVerificationEvent(c,"CitizenshipLawfulPresence Status");
if((c.citizenshipStatusIndicator==="Yes"||c.lawfulPresenceStatusIndicator==="Yes")&&!isMemberMedicaidEligible(c)&&!isMemberCHIPEligible(c)&&!isMemberEligibleForRefugeeMedicalAssistance(c)){return true
}return false
}function isMemberPotentialMedicaid(b){var a=getLatestEligibilityEvent(b,"PreliminaryMAGIMedicaid");
if(!isEmpty(a)){if(!isEmpty(a.memberEligibility)){if("Y"===a.memberEligibility.eligibilityIndicator||"P"===a.memberEligibility.eligibilityIndicator||"I"===a.memberEligibility.eligibilityIndicator){return true
}}}return false
}function isMemberMedicaidEligible(d){if(isMemberPotentialMedicaid(d)){var b=getLatestEligibilityEvent(d,"ExchangeMedicaidMagi");
if(!isEmpty(b)){if(!isEmpty(b.memberEligibility)){if("Y"===b.memberEligibility.eligibilityIndicator||"I"===b.memberEligibility.eligibilityIndicator||"P"===b.memberEligibility.eligibilityIndicator){return true
}}}var c=getLatestEligibilityEvent(d,"EmergencyMedicaid");
if(!isEmpty(c)){if(!isEmpty(c.memberEligibility)){if("Y"===c.memberEligibility.eligibilityIndicator||"I"===c.memberEligibility.eligibilityIndicator||"P"===c.memberEligibility.eligibilityIndicator){return true
}}}var a=getLatestEligibilityEvent(d,"RefugeeMedicalAssistance");
if(!isEmpty(a)){if(!isEmpty(a.memberEligibility)){if("Y"===a.memberEligibility.eligibilityIndicator||"I"===a.memberEligibility.eligibilityIndicator||"P"===a.memberEligibility.eligibilityIndicator){return true
}}}}return false
}function isMemberEligibleForRefugeeMedicalAssistance(b){var a=getLatestEligibilityEvent(b,"RefugeeMedicalAssistance");
if(!isEmpty(a)){if(!isEmpty(a.memberEligibility)){if(a.memberEligibility.eligibilityIndicator==="Y"){return true
}}}return false
}function isMemberEligibleForEmergencyMedicaid(b){var a=getLatestEligibilityEvent(b,"EmergencyMedicaid");
if(!isEmpty(a)){if(!isEmpty(a.memberEligibility)){if(a.memberEligibility.eligibilityIndicator==="Y"){return true
}}}return false
}function isMemberEmergencyMedicaidAndAbsentParent(d,h){var f=h.get("applicationMemberAssociation");
var c=h.get("applicationMember");
var b=generateMemberIdMap(c);
var a=d.applicationMemberIdentifier;
var g=null;
if(f!==undefined){for(var e=0;
e<f.length;
e++){if((f[e].applicationMemberAssociationReasonTypeCode==="3")&&(f[e].memberAssociationRoleTypeCode==="4")&&(f[e].superordinateMember===a)&&b[a].requestingCoverageIndicator){g=f[e].subordinateMember;
if(b[g].requestingCoverageIndicator&&b[g].absentParentIndicator&&isMemberEmergencyMedicaid(b[a])&&isMemberEmergencyMedicaid(b[g])){return true
}}}}return false
}function isMemberPotentialCHIP(b){var a=getLatestEligibilityEvent(b,"PreliminaryMAGICHIP");
if(!isEmpty(a)){if(!isEmpty(a.memberEligibility)){if("Y"===a.memberEligibility.eligibilityIndicator||"P"===a.memberEligibility.eligibilityIndicator){return true
}}}return false
}function isMemberCHIPEligible(b){var a=getLatestEligibilityEvent(b,"ExchangeCHIP");
if(!isEmpty(a)){if(!isEmpty(a.memberEligibility)){if(a.memberEligibility.eligibilityIndicator==="Y"){return true
}}}return false
}function isMemberQHPEligible(b){var a=getLatestEligibilityEvent(b,"QHP");
if(!isEmpty(a)){if(!isEmpty(a.memberEligibility)){if(a.memberEligibility.eligibilityIndicator==="Y"||a.memberEligibility.eligibilityIndicator==="true"){return true
}}}return false
}function getMemberSSN(a){var c=0;
for(var b=0;
b<a.member.personIdentification.length;
b++){if(a.member.personIdentification[b].personIdentificationType.personIdentificationTypeCode==="SSN"){if(a.member.personIdentification[b].personIdentificationEffectiveDate>=a.member.personIdentification[c].personIdentificationEffectiveDate||isEmpty(a.member.personIdentification[c].personIdentificationEffectiveDate)){c=b
}}}if(!isEmpty(a.member.personIdentification[c])){return a.member.personIdentification[c].personIdentificationValueText
}else{return null
}}function getLatestSSNIndex(a){var c=0;
for(var b=0;
b<a.member.personIdentification.length;
b++){if(a.member.personIdentification[b].personIdentificationType.personIdentificationTypeCode==="SSN"){if(a.member.personIdentification[b].personIdentificationEffectiveDate>=a.member.personIdentification[c].personIdentificationEffectiveDate||isEmpty(a.member.personIdentification[c].personIdentificationEffectiveDate)){c=b
}}}return c
}function determineFilerPreference(b){var c="";
var a=b.get("applicationMember");
if(a.length===1){if(a[0].requestingCoverageIndicator){c="self"
}}else{if(a[0].requestingCoverageIndicator&&a[1].requestingCoverageIndicator){c="selfAndFamily"
}else{if(!a[0].requestingCoverageIndicator&&a[1].requestingCoverageIndicator){c="family"
}}}return c
}function getMemberUpdateQuantity(a){return null
}function getLatestEligibilityEvent(b,d){var h=b.memberEvent;
var f=false;
var a=null;
var g=null;
var k=0;
for(var e=0;
e<h.length;
e++){if(h[e]!==null&&h[e].memberEventType!==null&&h[e].memberEventType==="Eligibility"&&!isEmpty(h[e].memberEligibility)&&!isEmpty(h[e].memberEligibility.memberEligibilityType)&&h[e].memberEligibility.memberEligibilityType===d&&!isEmpty(h[e].memberEligibility.eligibilityDeterminationDate)){a=e;
k++;
for(var c=e+1;
c<h.length;
c++){if(h[c]!==null&&h[c].memberEventType!==null&&h[c].memberEventType==="Eligibility"&&!isEmpty(h[c].memberEligibility)&&!isEmpty(h[c].memberEligibility.memberEligibilityType)&&h[c].memberEligibility.memberEligibilityType===d&&!isEmpty(h[c].memberEligibility.eligibilityDeterminationDate)){if((h[c].memberEligibility.eligibilityDeterminationDate)>(h[a].memberEligibility.eligibilityDeterminationDate)){a=c;
f=true
}}}break
}}if(f===true||k===1){g=h[a]
}return g
}function getLatestVerificationEvent(b,a){return getLatestVerificationEvent(b,a,null)
}function getLatestVerificationEvent(d,l,g){var h=d.memberEvent;
var e=false;
var a=null;
var f=null;
var k=0;
for(var c=0;
c<h.length;
c++){if(h[c]!==null&&h[c].memberEventType!==null&&h[c].memberEventType==="Verification"&&!isEmpty(h[c].memberVerification)&&!isEmpty(h[c].memberVerification.memberVerificationType)&&h[c].memberVerification.memberVerificationType===l&&!isEmpty(h[c].memberVerification.verificationDeterminationDateTime)){if(isEmpty(g)){if((!isEmpty(h[c].memberVerification.dataSourceType)&&h[c].memberVerification.dataSourceType.dataSourceTypeName===null)||isEmpty(h[c].memberVerification.dataSourceType)){a=c;
k++
}else{continue
}}else{if(!isEmpty(h[c].memberVerification.dataSourceType)&&h[c].memberVerification.dataSourceType.dataSourceTypeName!==null&&h[c].memberVerification.dataSourceType.dataSourceTypeName===g){a=c;
k++
}else{continue
}}for(var b=c+1;
b<h.length;
b++){if(h[b]!==null&&h[b].memberEventType!==null&&h[b].memberEventType==="Verification"&&!isEmpty(h[b].memberVerification)&&!isEmpty(h[b].memberVerification.memberVerificationType)&&h[b].memberVerification.memberVerificationType===l&&!isEmpty(h[b].memberVerification.verificationDeterminationDateTime)){if(isEmpty(g)){if((!isEmpty(h[b].memberVerification.dataSourceType)&&h[b].memberVerification.dataSourceType.dataSourceTypeName===null)||isEmpty(h[b].memberVerification.dataSourceType)){if((h[b].memberVerification.verificationDeterminationDateTime)>(h[a].memberVerification.verificationDeterminationDateTime)){a=b;
e=true
}}else{continue
}}else{if(!isEmpty(h[b].memberVerification.dataSourceType)&&h[b].memberVerification.dataSourceType.dataSourceTypeName!==null&&h[b].memberVerification.dataSourceType.dataSourceTypeName===g){if((h[b].memberVerification.verificationDeterminationDateTime)>(h[a].memberVerification.verificationDeterminationDateTime)){a=b;
e=true
}}else{continue
}}}}break
}}if(e===true||k===1){f=h[a]
}return f
}function getLatestCalculationEvent(c,b){var h=c.memberEvent;
var f=false;
var a=null;
var g=null;
var k=0;
for(var e=0;
e<h.length;
e++){if(h[e]!==null&&h[e].memberEventType!==null&&h[e].memberEventType==="Calculation"&&!isEmpty(h[e].memberCalculation)&&!isEmpty(h[e].memberCalculation.memberCalculationType)&&h[e].memberCalculation.memberCalculationType===b&&!isEmpty(h[e].memberCalculation.resultReceivedDate)){a=e;
k++;
for(var d=e+1;
d<h.length;
d++){if(h[d]!==null&&h[d].memberEventType!==null&&h[d].memberEventType==="Calculation"&&!isEmpty(h[d].memberCalculation)&&!isEmpty(h[d].memberCalculation.memberCalculationType)&&h[d].memberCalculation.memberCalculationType===b&&!isEmpty(h[d].memberCalculation.resultReceivedDate)){if((h[d].memberCalculation.resultReceivedDate)>(h[a].memberCalculation.resultReceivedDate)){a=d;
f=true
}}}break
}}if(f===true||k===1){g=h[a]
}return g
}function isHouseholdFilingJointly(a){if(!isEmpty(a)){if(!isEmpty(a.applicationMemberCurrentYearTaxFiler)){if(a.applicationMemberCurrentYearTaxFiler.taxReturnFilingStatusTypeCode==="2"){return true
}}}return false
}function getNextAnnualIncomeDiv(a){return $("#"+a).parent().parent().prev().prop("id")
}function getMemberRelationships(a,e,d){var b=generateMemberIdMap(a);
var c=$.grep(d,function(f,g){return(f.superordinateMember===a[e].applicationMemberIdentifier)&&((isMemberPotentialAPTC(b[f.superordinateMember])||(isMemberPotentialQHP(b[f.superordinateMember])))&&((isMemberPotentialAPTC(b[f.subordinateMember]))||(isMemberPotentialQHP(b[f.subordinateMember]))))
});
return c
}function getPotentialLegalRelationshpsForMember(a,e,d){if(d===null||d.length===0){return null
}var b=generateMemberIdMap(a);
var c=$.grep(d,function(g,f){return((g.subordinateMember===a[e].applicationMemberIdentifier)&&((isMemberPotentialQHP(b[g.subordinateMember]))&&((isMemberPotentialAPTC(b[g.superordinateMember]))||(isMemberPotentialQHP(b[g.superordinateMember])))))&&((g.applicationMemberAssociationReasonTypeCode==="8"||g.applicationMemberAssociationReasonTypeCode==="17"||g.applicationMemberAssociationReasonTypeCode==="13"||g.applicationMemberAssociationReasonTypeCode==="15"||g.applicationMemberAssociationReasonTypeCode==="9"||g.applicationMemberAssociationReasonTypeCode==="7"||g.applicationMemberAssociationReasonTypeCode==="14"||g.applicationMemberAssociationReasonTypeCode==="16"||g.applicationMemberAssociationReasonTypeCode==="6"||g.applicationMemberAssociationReasonTypeCode==="11"||g.applicationMemberAssociationReasonTypeCode==="20"))
});
return c
}function getLegalGroupTypeFromType(b){var a=0;
if(b==="8"||b==="17"||b==="13"||b==="15"){a=1
}else{if(b==="9"||b==="7"||b==="14"||b==="16"||b==="6"){a=2
}else{if(b==="11"||b==="20"){a=3
}else{a=0
}}}return a
}function getQhpNativeAmericanMembers(a){if(null===a||a.length===0){return null
}var c=[];
for(var b=0;
b<a.length;
b++){if(a[b].personAmericanIndianAlaskanNativeIndicator!==false&&isMemberPotentialQHP(a[b])){c.push(b)
}}return c
}function createTribeMatrix(b){var a={};
for(var c=0;
c<b.length;
c++){if(!isEmpty(b[c].tribeName)){if(b[c].tribeName in a){a[b[c].tribeName].memberList.push(c)
}else{a[b[c].tribeName]={tribeName:b[c].tribeName,stateCode:b[c].tribeStateCode,memberList:[]};
a[b[c].tribeName].memberList.push(c)
}}}var d=[];
$.each(a,function(){d.push(this)
});
return d
}function createNewPersonEmail(c,a){var b={personEmailStartDate:"",personEmailEndDate:"",placeRelationshipRoleCode:"",messagePlace:{emailAddressName:c,emailAddressIdentifier:""},receiveNotificationIndicator:a};
return b
}function anyMemberWithoutSSN(a){var b=0;
if(!isEmpty(a)){for(b=0;
b<a.length;
b++){if(isEmpty(getMemberSSN(a[b]))){return true
}}return false
}}function addSSNToMember(c,e){var a=getMemberSSN(c);
var d=null;
var b=null;
if(e!==a){addPersonID(c.member.personIdentification);
d=c.member.personIdentification.length-1;
b=getLatestSSNIndex(c);
c.member.personIdentification[d].personIdentificationValueText=e;
c.member.personIdentification[d].personIdentificationType.personIdentificationTypeCode="SSN";
c.member.personIdentification[d].personIdentificationType.personIdentificationTypeName="Social Security Number";
c.member.personIdentification[d].personIdentificationEffectiveDate=getTodaysDate();
c.member.personIdentification[d].personIdentificationUpdateQuantity=c.member.personIdentification[b].personIdentificationUpdateQuantity;
return true
}return false
}function getSpouseName(c,a,b){return getAppMemberFullName(getSpouseForMember(c,a,b))
}function getSpouseForMember(d,b,c){var g="";
var f="";
var a=null;
var e=null;
g=getSpouseId(d,b[c].applicationMemberIdentifier);
if(!isEmpty(g)){a=generateMemberIdMap(b);
e=a[g]
}return e
}function getSpouseIndexForMember(c,a,b){var d=getSpouseId(c,a[b].applicationMemberIdentifier);
return getMemberIndex(d,a)
}function getClaimingTaxFilerIndex(d,c){var b=d.get("applicationMember");
var e=b[c];
var a=getClaimingTaxFilerMemberId(d,e);
return getMemberIndex(a,b)
}function getInsuranceTypeNameFromTypeCode(a){var b="";
switch(a){case"1":b="Commercial";
break;
case"2":b="Medicare";
break;
case"4":b="Employer Sponsored";
break;
case"5":b="Private";
break;
case"6":b="Medicaid";
break;
case"7":b="CHIP";
break;
case"8":b="TRICARE";
break;
case"9":b="Veteran Health Program";
break;
case"10":b="Peace Corps";
break;
default:b="N/A";
break
}return b
}function getReasonCoverageEndedTypeNameFromTypeCode(a){var b="";
switch(a){case"1":b="Parent no longer works for the Company";
break;
case"2":b="Company stopped offering insurance";
break;
case"3":b="Company stopped offering insurance to dependents";
break;
case"4":b="Insurance too expensive";
break;
case"5":b="Medical needs not covered";
break;
case"6":b="Other";
break;
default:b="N/A";
break
}return b
}function getLanuageTextFromTypeCode(a,b){var c="";
switch(a){case"1":c=b["ffe.ee.shared.dropdown.language.english"];
break;
case"2":c=b["ffe.ee.shared.dropdown.language.spanish"];
break;
case"3":c=b["ffe.ee.shared.dropdown.language.vietnamese"];
break;
case"4":c=b["ffe.ee.shared.dropdown.language.tagalog"];
break;
case"5":c=b["ffe.ee.shared.dropdown.language.russian"];
break;
case"6":c=b["ffe.ee.shared.dropdown.language.portuguese"];
break;
case"7":c=b["ffe.ee.shared.dropdown.language.arabic"];
break;
case"8":c=b["ffe.ee.shared.dropdown.language.chinese"];
break;
case"9":c=b["ffe.ee.shared.dropdown.language.french"];
break;
case"10":c=b["ffe.ee.shared.dropdown.language.frenchCreole"];
break;
case"11":c=b["ffe.ee.shared.dropdown.language.german"];
break;
case"12":c=b["ffe.ee.shared.dropdown.language.gujarati"];
break;
case"13":c=b["ffe.ee.shared.dropdown.language.hindi"];
break;
case"14":c=b["ffe.ee.shared.dropdown.language.korean"];
break;
case"15":c=b["ffe.ee.shared.dropdown.language.polish"];
break;
case"16":c=b["ffe.ee.shared.dropdown.language.urdu"];
break;
case"17":c=b["ffe.ee.shared.dropdown.language.other"];
break
}return c
}function getRaceTypeCodeFromName(a){var b="";
switch(a){case"American Indian or Alaskan Native":b="1";
break;
case"Asian Indian":b="2";
break;
case"Black or African American":b="3";
break;
case"Chinese":b="4";
break;
case"Filipino":b="5";
break;
case"Guamanian or Chamorro":b="6";
break;
case"Japanese":b="7";
break;
case"Korean":b="8";
break;
case"Native Hawaiian":b="9";
break;
case"Other Asian":b="10";
break;
case"Other Pacific Islander":b="11";
break;
case"Samoan":b="12";
break;
case"Vietnamese":b="13";
break;
case"White":b="14";
break;
default:b="15";
break
}return b
};