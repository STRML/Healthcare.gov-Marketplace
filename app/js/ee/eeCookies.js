//The Healthcare.gov cookie will contain a variety of fields
//there are (at least) 3 cookies: 
//quickAnswers, history, qa-complete 
var MARKETPLACE_URL_INDIVIDUAL = "/marketplace/individual";
var MARKETPLACE_URL_SHOP = "/marketplace/shop";

var COOKIE_QUICK_ANSWERS = "quickAnswers";
var COOKIE_QA_COMPLETE = "qa-complete";
var COOKIE_HISTORY = "history";
var COOKIE_LANGUAGE = "language";
var COOKIE_SESSION = "JSESSIONID";


//Parsing of the cookie
function parseCookie(cookieName)
{ 
   var cookies = document.cookie.split(';');
   var quickA;
   for(i=0;i<cookies.length;i++)
   {
		  var tempCookie = cookies[i].split('=')[0];
		  tempCookie = $.trim(tempCookie);

		  if( tempCookie === cookieName)
		  {
		  
				 quickA = cookies[i].split('=')[1];
				 var decoded = decodeURIComponent(quickA);
				 var cart = $.parseJSON(decoded);
				 return cart;
		  }

   }

   return null;
}

//Parsing of the cookie
function parseQuickAnswersCookie()
{

	var cookies = document.cookie.split(';');
	var quickA;
	for(i=0;i<cookies.length;i++)
	{
		var tempCookie = cookies[i].split('=')[0];
		tempCookie = tempCookie.trim();

		if( tempCookie === COOKIE_QUICK_ANSWERS)
		{
		
			quickA = cookies[i].split('=')[1];
			var decoded = decodeURIComponent(quickA);
			var cart = $.parseJSON(decoded);
			return cart;
		}

	}

	return null;
}

//Changes the language attribute, if the language 
//exists and if it is set to Spanish then change
//the parameter in the URL to change to Spanish
function toggleLanguageParameterURL()
{             
     if(parseCookie(COOKIE_LANGUAGE) === 'es_MX')
     {           
            window.location.pathname = window.location.pathname.replace("en_US","es_MX");      
     }
                   
     else if(parseCookie(COOKIE_LANGUAGE) === 'en_US')
     {
            window.location.pathname = window.location.pathname.replace("es_MX","en_US");
     }
}

//Parsing of the cookie
function removeJSessionCookie()
{
	$.removeCookie(COOKIE_SESSION);
}
