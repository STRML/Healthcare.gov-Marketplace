/* This method is used to print the error */
    function print_error(error_msg) 
    {
		var log = '<span style="color:red;">' + error_msg + '</span><br/>';
		$('#loginError').empty();
		$('#loginError').append(log);
		$('#loginError').show();
	}

	//NOTE: creates tokens for authentication. UNBLOCK of UI happens in the myAccoutn_ShopEmployeeHomepageBBView, in forceLogin.
    //having it here will create some disjointed views
	function function_Authenticate_user() 
	{
		

		$('#loginError').hide();
		blockUIForLogin();	
    	var pathArray = window.location.pathname.split( '/' );
    	var eefolderPath = pathArray[1];
		var url = '/' + eefolderPath + '/CreateSaml2';			
		jQuery.post(url, $('#form-CreateSaml2').serialize(), function(data) { })
		.error(function() 
		{
			$.unblockUI();
		})
		.success(function(result) 
		{
			var returnData=result[0];
			var returnMessage = returnData.returnMessage;
			var returnCode = returnData.returnCode;
			if(returnCode === 200)
			{
				var successFlag=false;
				var url = $('#mgmt-ui-url').val() + 'CreateSaml2';
				jQuery.post(url, {ffe_auth_user:  $('#ffe_auth_user').val(),ffe_auth_passwd:  $('#ffe_auth_passwd').val(),actionId: "CreateUserSaml2" }, function(data) { })
				.error(function() 
				{
					successFlag = false;

					print_error('Failure In creating Tokens');
					console.log('MGMTUIflag = '+ successFlag);
					$.unblockUI();
				})
				.success(function() 
				{
					successFlag= true;
					var url = $('#mgmt-rest-url').val() + 'CreateSaml2';
					jQuery.post(url, {ffe_auth_user:  $('#ffe_auth_user').val(),ffe_auth_passwd:  $('#ffe_auth_passwd').val(),actionId: "CreateUserSaml2" }, function(data) { })
					.error(function() 
					{
						successFlag = false;

						print_error('Failure In creating Tokens');
						console.log('MGMTRESTflag = '+ successFlag);
						$.unblockUI();
					})
					.success(function() 
					{
				    	var pathArray = window.location.pathname.split( '/' );
				    	var eefolderPath = pathArray[1];
						var url = '/' + eefolderPath + '/CreateSaml2';	
						jQuery.post(url, {ffe_auth_user:  $('#ffe_auth_user').val(),ffe_auth_passwd:  $('#ffe_auth_passwd').val(),actionId: "CreateUserSaml2" }, function(data) { })
						.error(function() 
						{
							successFlag = false;
							console.log('UIflag = '+ successFlag);

							print_error('Failure In creating Tokens');
							$.unblockUI();
						})
						.success(function() 
						{
							
							var url = $('#rest-url').val() + 'CreateSaml2';				
							jQuery.post(url, {ffe_auth_user:  $('#ffe_auth_user').val(),ffe_auth_passwd:  $('#ffe_auth_passwd').val(),actionId: "CreateUserSaml2" }, function(data) { })
							.error(function() 
							{
								successFlag = false;
								console.log('RESTflag = '+ successFlag);

								print_error('Failure In creating Tokens');
								$.unblockUI();
							})
							.success(function() 
							{
								successFlag =true;
								console.log('RESTflag = '+ successFlag);
								navigate(returnMessage);
							});
							//console.log('UIflag = '+ successFlag);
							
						});
						
					});
					
				});
				
			}else if(returnCode === 300)
			{
				navigate(returnMessage);
				$.unblockUI();
			}else if (returnCode === 400)
			{
				print_error(returnMessage);
				$.unblockUI();
			}
			
		});
		
	}
	
	
	/* This method is used for navigate the URL*/
	function navigate(result){		
    	if(result){
                document.location = result;  
        }else{  
               print_error(result);
        }  
    }  
	
	//TODO: needs cleanup to remove these methods
	
	/* This method is used to create the SAML2 MGMT UI request*/

    function function_CreateSaml2_mgmtui() 
    {			
    	var successFlag= true;
		var url = $('#mgmt-ui-url').val() + 'CreateSaml2';
		jQuery.post(url, {ffe_auth_user:  $('#ffe_auth_user').val(),ffe_auth_passwd:  $('#ffe_auth_passwd').val(),actionId: "CreateUserSaml2" }, function(data) { })
		.error(function() 
		{
			successFlag = false;
			console.log('MGMTUIflag = '+ successFlag);
			return successFlag;
		})
		.success(function() 
		{
			return function_CreateSaml2_mgmtrest();
			//console.log('MGMTUIflag = '+ successFlag);
			
		});
		
      }
       

	/* This method is used to create the SAML2 MGMT Rest request*/
	function function_CreateSaml2_mgmtrest() 
	{
		var successFlag= true;

		var url = $('#mgmt-rest-url').val() + 'CreateSaml2';
		jQuery.post(url, {ffe_auth_user:  $('#ffe_auth_user').val(),ffe_auth_passwd:  $('#ffe_auth_passwd').val(),actionId: "CreateUserSaml2" }, function(data) { })
		.error(function() 
		{
			successFlag = false;
			console.log('MGMTRESTflag = '+ successFlag);
			return successFlag;
		})
		.success(function() 
		{
			return createSaml2_ui();
		});
	}
	/* This method is used to create the SAML2 UI request*/
	function createSaml2_ui() 
	{
		var successFlag = true;
    	var pathArray = window.location.pathname.split( '/' );
    	var eefolderPath = pathArray[1];
		var url = '/' + eefolderPath + '/CreateSaml2';
		jQuery.post(url, {ffe_auth_user:  $('#ffe_auth_user').val(),ffe_auth_passwd:  $('#ffe_auth_passwd').val(),actionId: "CreateUserSaml2" }, function(data) { })
		.error(function() 
		{
			successFlag = false;
			console.log('UIflag = '+ successFlag);
			return successFlag;
		})
		.success(function() 
		{
			return createSaml2_rest();
			//console.log('UIflag = '+ successFlag);
			
		});
    }	
	
	/* This method is used to create the SAML2 Rest request*/
	function createSaml2_rest(returnMessage) 
	{	  
		var successFlag =true;
		
		var url = $('#rest-url').val() + 'CreateSaml2';				
		jQuery.post(url, {ffe_auth_user:  $('#ffe_auth_user').val(),ffe_auth_passwd:  $('#ffe_auth_passwd').val(),actionId: "CreateUserSaml2" }, function(data) { })
		.error(function() 
		{
			successFlag = false;
			console.log('RESTflag = '+ successFlag);
			return successFlag;
		})
		.success(function() 
		{
			successFlag =true;
			console.log('RESTflag = '+ successFlag);
			return successFlag;
		});
	}
	
	//new layer 7 logout
	function logoutFFE(tenantId, locale)
	{
		
    	var pathArray = window.location.pathname.split( '/' );
    	var eefolderPath = pathArray[1];
		window.location  = "/"+eefolderPath +"/auth/logout";
		//Locally we need to delete cookies
	}
	function deleteEE_RESTAuthSession(env, url) 
	{
		console.log('deleting  REST AUTH');
		
		var authRestURL = env + "/ee-rest/CreateSaml2?actionId=DeleteSaml2";    
		return $.ajax({
			type: "POST",
			url: authRestURL,
			success: doOAMLogoutRedirect(url),
			async: false
		});
	}
	function deleteEE_UIAuthSession(theLocale, env, url) 
	{
		console.log('deleting UI Auth');
		//locally would be ee-ui
		var authUiURL = "/marketplace/CreateSaml2?actionId=DeleteSaml2";
		return $.ajax({
			type: "POST",
			url: authUiURL,
			success: deleteEE_RESTAuthSession(env, url),
			async: false
		});
	}
		
	function doOAMLogoutRedirect(url){
		window.location = url;
	}
	
	function deleteJSessionIDCookies(theLocale, env, url)
	{ 
        var cookieName = "JSESSIONID"; 
        	 $.removeCookie(cookieName, null);
        	 // Delete EE-AUTH-UI Session
            deleteEE_UIAuthSession(theLocale, env, url);
	}
	
	function getSecureRedirectInfoLoginPage(){
		$.ajax(
		{
		url:"/ee-rest/global/en_US/DirectEnrollment/getSecureRedirectInfo", 
		type:"GET",
		contentType:"application/json",
		dataType:"json",
		success:function(response)
		{
		  agentBrokerInfo = response;
		  registrationInitialSessionCallsComplete = true;
         	  //fetch the url and go back to the portal
		  if(!isEmpty(response ))
		  {
			  //modify the
			  makeDirectEnrollmentUIChanges();
			
			  var directEnrollmentKeepAliveURL= response["Keep Alive URL"]; 
			  if(!isEmpty(directEnrollmentKeepAliveURL))
			  {
					window.setInterval( function() 
					{
						updateDirectEnrollmentKeepAliveUrl(directEnrollmentKeepAliveURL);
					} , 300000);
			  }
		   }
		},
		error:function(response)
		{
		    registrationInitialSessionCallsComplete = true;
          return null;
		}	
	  }); 
	}

	// global !!!!
	var registrationInitialSessionCallsComplete = false;

	function directEnrollment() {
    try{
		//Direct enrollment stuff
	    if (agentBrokerSAMLToken && agentBrokerSAMLToken != null && agentBrokerSAMLToken != '') {

	        $.ajax(
	        {
	            url: "/ee-rest/global/en_US/DirectEnrollment/isDirectEnrollmentConsumer",
	            type: "POST",
               data: { "EE_SAML_ATTRIBUTES_STRING": agentBrokerSAMLToken },
	            success: function (response) {
	                getSecureRedirectInfoLoginPage();
	                // move this inside of getSecureRedirectInfoLoginPage
				     //registrationInitialSessionCallsComplete = true;
	            },
	            error: function (response) {
				     registrationInitialSessionCallsComplete = true;
	            }
	        });
	    } else if (agentEmailUUID && agentEmailUUID != null && agentEmailUUID != '') {
            $.ajax(
	        {
	            url: "/ee-rest/global/en_US/DirectEnrollment/setSAMLByEmailUUID",
	            type: "POST",
	            data: { "EE_EMAIL_UUID": agentEmailUUID },
	            success: function (response) {
	                getSecureRedirectInfoLoginPage();
	                // move this inside of getSecureRedirectInfoLoginPage
	                //registrationInitialSessionCallsComplete = true;
	            },
	            error: function (response) {
	                registrationInitialSessionCallsComplete = true;
	            }
	        });
	    } else { // 	        registrationInitialSessionCallsComplete is global that prevents other fetch calls from happening until smal is correctly posted
	             // this keeps us from creating multiple session cookies and losing the saml.  VERY IMPORTANT - make sure all return paths set this to true so that we
                // don't block those fecth calls indefinitely
 	        registrationInitialSessionCallsComplete = true;
	    }	
      } catch(e) {
	    registrationInitialSessionCallsComplete = true;
	   }
	}
	
	function checkDeleteSession(theLocale, env, url)
	{
		//locally would be ee-ui
		var authUiURL = "/marketplace/CreateSaml2?actionId=extendSessionTimeout";
		return $.ajax({
			type: "POST",
			url: authUiURL,
			success : function(data) {
				if(data === 'success: yes'){
					deleteJSessionIDCookies(theLocale, env, url);
				} else {
				   directEnrollment();
            }
			},
         error: function(response){
            directEnrollment();
         },
			async: false
		});
	}
	
	//force deletion of possible old sessions (as per Suresh)
    function deleteStaleEESessions() 
    {	
		var logoutURL = determinePath()+"/auth/logout";
		
        return $.ajax({
            type: "POST",
            url: logoutURL ,
            success: clearClientCookies(),
            async: false
        }); 
    }

   
    //place holder method to cascade after we destroy the stale sessions
    function clearClientCookies()
    {

    }

	
	/* This method is used to log out the user and forward to login page*/
	function logoutFFEOLD(tenantId, locale)
	{		
		var ui_url="/ee-ui/";
		var rest_url="/ee-rest/" ;
		var mgmt_ui_url="/mgmt-ui/";
		var mgmt_rest_url="/mgmt-rest/";
		
		$('#loginError').hide();
		blockUIForLogin();	
		var url = ui_url + 'CreateSaml2';			
		jQuery.post(url, $('#form-DeleteSaml2').serialize(), function(data) { })
		.error(function() 
		{
			$.unblockUI();
		})
		.success(function(result) 
		{
			
				var successFlag=false;
				var url = mgmt_ui_url + 'CreateSaml2';
				jQuery.post(url,$('#form-DeleteSaml2').serialize(),function(data) { })
				.error(function() 
				{
					successFlag = false;

					print_error('Failure In deleting Tokens');
					console.log('MGMTUIflag = '+ successFlag);
					$.unblockUI();
				})
				.success(function() 
				{
					successFlag= true;
					var url = mgmt_rest_url + 'CreateSaml2';
					jQuery.post(url, $('#form-DeleteSaml2').serialize(), function(data) { })
					.error(function() 
					{
						successFlag = false;

						print_error('Failure In deleting Tokens');
						console.log('MGMTRESTflag = '+ successFlag);
						$.unblockUI();
					})
					.success(function() 
					{
						var url = ui_url + 'CreateSaml2';
						jQuery.post(url,$('#form-DeleteSaml2').serialize(), function(data) { })
						.error(function() 
						{
							successFlag = false;
							console.log('UIflag = '+ successFlag);

							print_error('Failure In deleting Tokens');
							$.unblockUI();
						})
						.success(function() 
						{
							
							var url =rest_url + 'CreateSaml2';				
							jQuery.post(url, $('#form-DeleteSaml2').serialize(), function(data) { })
							.error(function() 
							{
								successFlag = false;
								console.log('RESTflag = '+ successFlag);

								print_error('Failure In deleting Tokens');
								$.unblockUI();
							})
							.success(function() 
							{
								successFlag =true;
								console.log('RESTflag = '+ successFlag);
								
								//navigate("/ee-ui/auth/" + tenantId + "/" + locale + "/myAccount");
								navigate("/ee-ui/" + tenantId + "/" + locale + "/login?fwd_url=/ee-ui/auth/"+tenantId+"/" + locale + "/landingPage");
							});
							
						});
						
					});
					
				});		
				
				$.unblockUI();			
			
		});
	
	}
	
  //used by the inpsectOAMErrors methodm for now
  function getQueryVariable(variable) 
   {    
        var query = window.location.search.substring(2);  
        var vars = query.split('&');    
        if(!isEmpty(vars))
		{
	    	for (var i = 0; i < vars.length; i++) 
	    	{
	            var pair = vars[i].split('=');
	            if (decodeURIComponent(pair[0]) === variable)
	            {
	                return decodeURIComponent(pair[1]);
	            }
	    	}
		}
    }  
  
  //Inspect the OAM errors from login/authentication process
  function inspectOAMErrors( resources )
  {
	  var p_error_code = getQueryVariable("p_error_code");
	  
	if(!isEmpty(p_error_code))
	{
		var errorMessage = "";
        if(p_error_code === "OAM-2" || p_error_code === "OAM-1")
        {
        	errorMessage = resources['ffe.ee.oam.error.oam2'];
        }
        else if(p_error_code === "OAM-3")
        {
        	errorMessage = resources['ffe.ee.oam.error.oam3'];
        }
        else if(p_error_code === "OAM-4")
        {
        	errorMessage = resources['ffe.ee.oam.error.oam4'];
        } 
        else if(p_error_code === "OAM-5")
        {
        	errorMessage = resources['ffe.ee.oam.error.oam5'];
        } 
        else if(p_error_code === "OAM-6")
        {
        	errorMessage = resources['ffe.ee.oam.error.oam6'];
        } 
        else if(p_error_code === "OAM-7")
        {
        	errorMessage = resources['ffe.ee.oam.error.oam7'];
        } 
    	else
    	{
    		errorMessage = "Error code: " + p_error_code; 
    	}
        
        if(!isEmpty(errorMessage))
        {
        	$('#loginErrorMessageContainer').html(errorMessage);
        }
	}
	else
	{
		$('#loginErrorMessageContainer').html('');
	}
  }
  
function goToLoginPage(theLocale)
{
	//go to the login page 
	window.location.href=determinePath() + "/global/"+theLocale+"/registration";
}

function goToLandingPage(theLocale)
{
	//go to the landing page 
	window.location.href=determinePath() + "/auth/global/"+theLocale+"/myProfile#landingPage";
} 


//added by Jeremy
//invalidate the Authentication
function invalidateAuthentication() 
{
	var pathArray = window.location.pathname.split( '/' );
	var eefolderPath = pathArray[1];
	var url = "/" + eefolderPath + "/CreateSaml2?actionId=DeleteSaml2";
	var url2 = "/ee-rest/CreateSaml2?actionId=DeleteSaml2";
	
	invalidateAuthenticationHelper(url, url2);
}

function invalidateAuthenticationHelper(url, url2)
{
	$.post(url, function(data, textStatus, returnData) {
		$.post(url2, function(data2, textStatus2, returnData2) {
			var returnMessage2 = returnData2.statusText;
			var returnCode2 = returnData2.status;
			if (returnCode2 === 200) 
			{
				//Successful delete
			} else 
			{
				console.log(returnMessage2);
			}
		}).fail(function()
		{
			console.log('Delete request failed');
		});
	}).fail(function(){
		console.log('Delete request failed');
	});	
}

