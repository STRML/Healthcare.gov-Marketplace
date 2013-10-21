var currentStep=1;
var myAccountRoleType=null;
var myAccountAppID=null;
var validationEnabled=true;
var viewEligibilityResults=null;
function determineApplicationName(){var a="individualApplication";
if(myAccountRoleType==="employer"){a="employerSHOPApplication"
}else{if(myAccountRoleType==="employee"){a="employeeSHOPApplication"
}}return a
}function isMemberQHPEligible(b){var a=getLatestEligibilityEvent(b,"QHP");
if(!isEmpty(a)){if(!isEmpty(a.memberEligibility)){if(a.memberEligibility.eligibilityIndicator==="Y"||a.memberEligibility.eligibilityIndicator==="true"){return true
}}}return false
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
}function createEEAccount(a){a.set({action:"2"},{silent:true});
saveEEAccountHelper(a)
}function saveEEAccount(a){a.set({action:"1"},{silent:true});
saveEEAccountHelper(a)
}function saveEEAccountHelper(a){var b=a.get("exchangeUserIdentifier");
if(isEmpty(b)){console.log("doSave: saving new Account ")
}else{console.log("doSave: updating account, exchangeUserIdentifier= "+b)
}blockUIForSave();
pingAuthentication();
a.save(null,{success:function(c,d){console.log("SAVE OK, exchangeUserIdentifier="+a.get("exchangeUserIdentifier"));
a.trigger("refreshOnSave");
$.unblockUI()
},error:function(c,d){console.log("SAVE FAILED");
$.unblockUI()
}})
}function saveEmployeeRoster(a){var b=a.get("identifier");
blockUIForSave();
pingAuthentication();
a.save(null,{success:function(c,d){a.trigger("refreshOnUpload");
$.unblockUI()
},error:function(c,d){console.log("SAVE FAILED");
$.unblockUI()
}})
}function setAuthorizedRepToModel(c){var d=c.get("myApplications");
var e=c.get("myPendingAuthorizedUsers");
addAuthorizedRep(e);
var b=e.length;
var a=b-1;
e[a].exchangeResourceTypeCode="500";
e[a].exchangeResourceTypeName="Authorized Representative";
e[a].authorizedSystemUserName=$("#authRepUsername").val();
e[a].myRoleAccess[0].applicationId=d[0].identifier;
e[a].myRoleAccess[0].exchangeResourceAccessTypeCode="1";
e[a].myRoleAccess[0].exchangeResourceAccessTypeName="Full";
c.set({myPendingAuthorizedUsers:e})
}function loginEEAccount(a){console.log("calling LOGIN for user="+a.get("userName"));
console.log("url="+a.urlRoot);
var c="/ee-rest/"+tenantId+"/"+locale+"/EeAccount/loginEEAccount/";
var b=a.urlRoot;
a.set({exchangeUserIdentifier:"1"});
a.urlRoot=c;
printEEAccountModel(a);
a.save(null,{success:function(e,d){console.log("SAVE OK ");
$("#loginUsername").val("");
$("#loginPassword").val("");
e.set({isValidUser:true});
router.navigate("#home",{trigger:true})
},error:function(e,d){console.log("SAVE FAILED , valid User="+e.get("isValidUser"));
$("#loginUsername").val("");
$("#loginPassword").val("");
router.navigate("#home",{trigger:true})
}});
a.urlRoot=b
}function fetchQuestions(e,a,b,c,f){var d=e.fetchSecurityQuestionsModel.url;
e.fetchSecurityQuestionsModel.url=b;
e.fetchSecurityQuestionsModel.set({userName:f});
e.fetchSecurityQuestionsModel.fetch(null,{success:function(h,g){if(!isEmpty(a)){e.model.trigger(a)
}if(!isEmpty(c)){c.navigate("forgotPasswordQuestions",{trigger:true})
}e.fetchSecurityQuestionsModel.url=d;
console.log(g)
},error:function(h,g){console.log(g)
}})
}function linkExchangeUser(a){console.log("linking");
var c=a.loginUrl;
var b=a.urlRoot;
a.urlRoot=c;
printEEAccountModel(a);
pingAuthentication();
a.save(null,{success:function(e,d){console.log("LINK OK ")
},error:function(e,d){console.log("LINK FAILED ")
}});
a.urlRoot=b
}function restoreRow(c,f){var d=c.fnGetData(f);
var b=$(">td",f);
for(var e=0,a=b.length;
e<a;
e++){c.fnUpdate(d[e],f,e,false)
}c.fnDraw()
}function editRow(b,d){var c=b.fnGetData(d);
var a=$(">td",d);
a[0].innerHTML='<input type="text" value="'+c[0]+'">';
a[1].innerHTML='<input type="text" value="'+c[1]+'">';
a[2].innerHTML='<input type="text" value="'+c[2]+'">';
a[3].innerHTML='<input type="text" value="'+c[3]+'">';
a[4].innerHTML='<input type="text" value="'+c[4]+'">';
a[5].innerHTML='<a class="edit" href="">Save</a>'
}function saveRow(a,c){var b=$("input",c);
a.fnUpdate(b[0].value,c,0,false);
a.fnUpdate(b[1].value,c,1,false);
a.fnUpdate(b[2].value,c,2,false);
a.fnUpdate(b[3].value,c,3,false);
a.fnUpdate(b[4].value,c,4,false);
a.fnUpdate('<a class="edit" href="">Edit</a>',c,5,false);
a.fnDraw()
}function displayMessageCenterData(){console.log("Display Message Center Data");
if($("#tempMessageCenterTab").html()!==""){$("#messageCenterTab").empty();
$("#messageCenterTab").append($("#tempMessageCenterTab"))
}$("#divSearchFolderList").hide();
console.log("Displayed Message Center Data")
}function getEmployeeName(a){var b=a.firstName+" "+a.middleName+" "+a.lastName;
return b
}function addNewEmployee(a){a.push({firstName:"",middleName:"",lastName:"",suffixName:"",ssn:"",birthDate:"",genderTypeCode:"",employeeType:"",emailAddressName:"",workAddress1:"",workAddress2:"",workCity:"",workState:"",workZip:"",concurrencyHash:"",applicationStatus:"",specialEnrollmentIndicator:null,specialEnrollmentStartDate:"",specialEnrollmentEndDate:"",specialEnrollmentReason:"",employmentStatusTypeCode:"",employmentStatusName:""})
}function rewriteAccountSettingsNav(){rewriteNavBar("accountSettingsNavBarTemplate")
}function rewriteMessagesNav(){$("#fixedElementNavContainer").empty();
rewriteNavBar("messagesNavBarTemplate")
}function rewriteSponsoredBenefitsNav(){rewriteNavBar("sponsoredBenefitsSideMenuTemplate")
}function rewriteEmployerAccountSettingsNav(){rewriteNavBar("employerAccountSettingsSideMenuTemplate")
}function rewriteCoverageNav(){rewriteNavBar("coverageSideMenuTemplate")
}function rewriteNavBar(b){var a=_.template($("#"+b).html());
$("#fixedElementNavContainer").show();
$("#fixedElementNavContainer").empty();
$("#fixedElementNavContainer").append(a({}))
}function generateMulitBar(b){var h='<div class="progress-multi-table">';
h+='<div class="tableCell-middle"><span class="percentAmount"></span></div>';
h+='<div class="tableCell-middle">Your current<br />'+b.participation[0]+" level</div>";
h+='<div class="progress-feedback"></div>';
h+="</div>";
h+='<div class="progress progress-multi" role="presentation">';
h+='<div class="bar"></div>';
h+='<div class="bar bar-warning"></div>';
h+='<div class="bar bar-danger"></div>';
h+='<div class="participation pTextLeft"><div class="pText"></div></div>';
h+="</div>";
h+='<ul class="progress-multi-key unstyled multi-key-inline-'+b.inlineKey+'"></ul>';
$("#"+b.containerID).append(h);
var f=b.participation[1]+"% "+b.participation[0]+"<br />(<span class='totalpeople'></span>  people)";
var g="<li id='participation' class='HiddenText'>"+f+"</li>";
$("#"+b.containerID+" .participation .pText").append(f);
$("#"+b.containerID+" ul.progress-multi-key").append(g);
if(b.participation[1]>50){$("#"+b.containerID+" .participation").addClass("pTextRight").removeClass("pTextLeft")
}$("#"+b.containerID+" .participation").css("right",(100-b.participation[1])+"%");
var a=b.Enrolled[1]+b.Undecided[1]+b.Waived[1];
var c=Math.round((b.participation[1]*0.01)*a);
$("#"+b.containerID+" .totalpeople").text(c);
if(typeof b.feedback!=="undefined"){$("#"+b.containerID+" .progress-feedback").html(b.feedback)
}var e=[b.Enrolled,b.Undecided,b.Waived];
var d="";
$.each(e,function(i,k){var l=0;
if(a!==0){l=(e[i][1]/a*100)
}if(i===0){$(".percentAmount").html(Math.round(l)+"%")
}$(".bar:eq("+i+")").css("width",l+"%");
var j=b.inlineKey==="true"?"<br />":"";
if(b.textOption===1||typeof b.textOption==="undefined"){d="<li class='key key"+i+"'><span><i class='"+e[i][2]+"'></i></span><span>"+e[i][1]+" "+e[i][0]+" ("+Math.round(l)+"%)</span></li>"
}else{if(b.textOption===2){d="<li class='key key"+i+"'><span><i class='"+e[i][2]+"'></i></span><span><strong>"+Math.round(l)+"% "+e[i][0]+"</strong> "+j+e[i][1]+" employees </span></li>"
}}$("#"+b.containerID+" ul.progress-multi-key").append(d)
})
}function curencyNumberWithCommas(a){if(!isEmpty(a)){a=a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")
}return a
}function phoneNumberWithCommas(a){if(!isEmpty(a)){a=a.replace(/(\d)(\d\d\d)(\d\d\d)(\d\d\d\d)/,"$1-$2-$3-$4")
}return a
}function EmployerAddEmployeeState(){this.index=0;
this.totalEmployees=0;
this.getIndex=function(){return this.index
};
this.incrementIndex=function(){this.index++
};
this.decrementIndex=function(){this.index--
};
this.setIndex=function(a){this.index=a
};
this.resetIndex=function(){this.index=0
};
this.setTotalEmployees=function(a){this.totalEmployees=a
};
this.getTotalEmployees=function(){return this.totalEmployees
};
this.resetTotalEmployees=function(){this.totalEmployees=0
};
this.atStart=function(){if(this.totalEmployees===0){return true
}else{return false
}};
this.atEnd=function(){if(this.index===this.totalEmployees){return true
}else{return false
}}
}var employerAddEmployeeState=new EmployerAddEmployeeState();
function setmodalNav(e){var c=$("#modalNav li");
var d=c.length;
for(var a=0;
a<d+1;
a++){if(c.eq(a).attr("id")===e){$(c[a]).children("i").prop("class","iconCustom-circle-filled circleCurrent");
for(var b=a-1;
b>=0;
b--){$(c[b]).children("i").prop("class","iconCustom-circle-filled circleComplete")
}}else{$(c[a]).children("i").prop("class","iconCustom-circle-filled")
}}}function idProofSideNave(d){var b,a,e=$("#fixedElementNavContainer"),c=_.template($("#iDProofingSideNavTemplate").html());
if(typeof d==="string"){d=parseInt(d,10)
}e.empty();
e.append(c);
e.show();
a=$("#fixedElementNavContainer .nav-pills ul li");
a.removeClass("active");
for(b=0;
b<a.length;
b++){if(isEmpty(d)){a.find("a").eq(b).find("span.HiddenText").text("")
}if(b<(d-1)){a.find("i").eq(b).removeClass("icon-number").addClass("icon-ok_2 complete").text("");
a.find("a").eq(b).find(".HiddenText").text(", previous section")
}if(b===(d-1)){a.find("a").eq(b).find("span.HiddenText").text(", current section");
a.eq(b).addClass("active")
}if(b>(d-1)){a.find("a").eq(b).find("span.HiddenText").text(", upcoming step");
a.find("i").eq(b).text((b+1));
a.eq(b).addClass("disabledItem")
}}}function countIDProofingAttempts(c,d,e){var b=0;
for(var a=0;
a<c.length;
a++){if(c[a].personIdentityProofingEventSourceTypeCode===d){if(c[a].hasOwnProperty(e)){if(c[a][e]===false){b++
}}}}return b
}function getQueryParams(){var e={},d;
var a;
var c=window.location.href.indexOf("#");
if(c>-1){a=window.location.href.slice(window.location.href.indexOf("?")+1,c).split("&")
}else{a=window.location.href.slice(window.location.href.indexOf("?")+1).split("&")
}for(var b=0;
b<a.length;
b++){d=a[b].split("=");
e[d[0]]=d[1]
}return e
}function specificUpgradeError(e,c){e=e.toLowerCase();
var a=$(".pg-idproofing","#idProofingContactInfo").eq(0),d=c["ffe.ee.myAccount.upgradeLite.error."+e],b=_.template($("#iDProofingContactInfoSpecMessageTemplate").html());
if(isEmpty(d)){d=c["ffe.ee.myAccount.upgradeLite.error.genericError"]
}setTimeout(function(){a.find(".alert").remove();
a.eq(0).prepend(b({message:d}));
$("h2[tabindex=-1]").removeAttr("tabindex");
$("h1[tabindex=-1]").removeAttr("tabindex");
$("#idProofingContactInfo h1").attr("tabindex","-1").focus()
},250)
}function goToMyAccountLanding(c,a){var b=myAccountAppID;
window.location.href=determinePath()+"/auth/"+c+"/"+a+"/myAccount?appId="+b
}function goToMyProfile(a){window.location.href=determinePath()+"/auth/global/"+a+"/myProfile"
}function goToMyProfileSettigns(a){window.location.href=determinePath()+"/auth/global/"+a+"/myProfile?to=settings"
};