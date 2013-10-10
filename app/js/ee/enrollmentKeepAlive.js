if($("#logInPage").length === 0) {
$.ajax(
  {
  url:"/ee-rest/global/en_US/DirectEnrollment/getSecureRedirectInfo", 
    type:"GET",
    contentType:"application/json",
    dataType:"json",
    success:function(response)
    {
      agentBrokerInfo = response;
      //fetch the url and go back to the portal
    if(!isEmpty(response ))
    {
      //modify the
      makeDirectEnrollmentUIChanges();
    
      var directEnrollmentKeepAliveURL= response["Keep Alive URL"]; 
      if(!isEmpty(directEnrollmentKeepAliveURL))
      {
          window.setInterval( function() { updateDirectEnrollmentKeepAliveUrl(directEnrollmentKeepAliveURL)} , 300000);
      }
     }
    },
    error:function(response)
    {
      return null;
    } 
  }); 
  }