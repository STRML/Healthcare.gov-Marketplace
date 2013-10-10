// utilities.js
// This file contains functions to support the FFE Marketplace
//Initially implemented by Marzia and the Architecture Team.
//Updated by E&E team, including S. Wass


$(document).ready(function () 
{	
	var browserName;

    // Apply a class to the HTML element for IE, Firefox, Chrome, Safari, Other
    var BrowserClass = {
        init: function () {
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            browserName = navigator.appName;
            var fullVersion = '' + parseFloat(nVer);
            var majorVersion = parseInt(nVer, 10);
            var nameOffset, verOffset, browserClass;
            var platform = navigator.platform;

            // Platform
            if (platform.indexOf("Win") !== -1)
			{			
				platform = "WIN";
			}
            if (platform.indexOf("Mac") !== -1)
			{			
				platform = "MAC";
			}

            // Opera
            if ((verOffset = nAgt.indexOf("Opera")) !== -1) 
			{
                browserName = "Opera";
                fullVersion = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf("Version")) !== -1)
				{
                    fullVersion = nAgt.substring(verOffset + 8);
				}
                browserClass = "OPR";
            }

            // IE
            else if ((verOffset = nAgt.indexOf("MSIE")) !== -1) 
			{
                browserName = "IE";
                fullVersion = nAgt.substring(verOffset + 5);
                browserClass = "IE";
            }

            // Chrome
            else if ((verOffset = nAgt.indexOf("Chrome")) !== -1) 
			{
                browserName = "Chrome";
                fullVersion = nAgt.substring(verOffset + 7);
                browserClass = "CHRM";
            }

            // Safari
            else if ((verOffset = nAgt.indexOf("Safari")) !== -1) 
			{
                browserName = "Safari";
                fullVersion = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf("Version")) !== -1)
				{
                    fullVersion = nAgt.substring(verOffset + 8);
				}
                browserClass = "SAF";
            }

            // Firefox
            else if ((verOffset = nAgt.indexOf("Firefox")) !== -1) 
			{
                browserName = "Firefox";
                fullVersion = nAgt.substring(verOffset + 8);
                browserClass = "FFX";
            }

            // Other
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) 
			{
                browserName = nAgt.substring(nameOffset, verOffset);
                fullVersion = nAgt.substring(verOffset + 1);
                if (browserName.toLowerCase() === browserName.toUpperCase()) 
				{
                    browserName = navigator.appName;
                }
                browserClass = "OTHR";
            }

            // trim the fullVersion string at semicolon/space if present
            var temp = fullVersion.indexOf(";");
            if ( temp !== -1)
			{
                fullVersion = fullVersion.substring(0, temp);
			}
            temp = fullVersion.indexOf(" ");
            if (temp !== -1)
			{
                fullVersion = fullVersion.substring(0, temp);
			}
            majorVersion = parseInt('' + fullVersion, 10);

            if (isNaN(majorVersion)) 
			{
                fullVersion = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }

            if (browserClass === "IE") 
			{
				browserClass = browserClass + majorVersion;
			}
            // Ignore compatibility view
            if (browserClass === "IE7") 
            {
            	//TODO: refactor, as there are extraneous if/elses here 
				if (nAgt.indexOf("Trident/6.0") > -1) 
				{
                    if (nAgt.indexOf("MSIE 7.0") > -1)
					{
                        browserClass = "IE10";
					}
                    else
					{
                        browserClass = "IE10";
					}
                }
                else if (nAgt.indexOf("Trident/5.0") > -1) 
                {
                    if (nAgt.indexOf("MSIE 7.0") > -1)
					{
                        browserClass = "IE9";
					}
                    else
					{
                        browserClass = "IE9";
					}
                }
                else if (nAgt.indexOf("Trident/4.0") > -1) 
                {
                    if (nAgt.indexOf("MSIE 7.0") > -1)
					{
                        browserClass = "IE8";
					}
                    else
					{
                        browserClass = "IE8";
					}
                }
            }
            document.getElementsByTagName("html")[0].className = browserClass;
            document.getElementsByTagName("body")[0].className = platform;
        }
    };

    try 
    { 
    	BrowserClass.init(); 
    } 
    catch (e) 
    { 
    	//TODO: add some exception handling here?
    }

});//end browser class


/**
 * Alerts user to use browser save command for non-IE browsers,
 * or brings up save dialog in IE.
 */
function savePage() {
	if ($("body").hasClass("WIN")) {
		alert("To save this document, select File > Save in your browser or type ctrl-S.");
	} else if ($("body").hasClass("MAC")) {
		alert("To save this document, select File > Save in your browser or type cmd-S.");
	} else {
		alert("To save this document, select File > Save in your browser.");
	}
}
	
/** 
 * Trigger browser print dialog
 */
function printPage() 
{
	window.print();
}