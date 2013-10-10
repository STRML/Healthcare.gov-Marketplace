/* 
* High Contrast Mode Detection Script v 1.1.5
* 2013 Hans Hillen, TPG / CGI
*
* This script detects whether images, background images, and border colors are currently enabled
*/

/* Deliberaly wait for load, not for ready event, in order to make image checking more reliable */
$(window).load(function () {
    /* set defaults */
    $.support.images = true;
    $.support.backgroundImages = true;
    $.support.borderColors = true;
    $.support.highContrastMode = false;
    $.support.lightOnDark = false;

    if (!$.browser) {
        return;
    }

    /* Get URL for test image
    * (data URIs are not properly removed when images are disabled in Firefox) */

    /* Configure these if necessary: */
    /* Absolute path to clear.gif, if available. If not, set this to "" and use imgPathFromScript instead */
    var imgPath = "";
    /* Path to clear.gif, relative to the location of this script*/
    var imgPathFromScript = "../images/clear.gif";
    var dataSrc = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    /* End configurable values */

    var imgTestCompleted = false;

    var currentTime = (new Date()).getTime();
    if (imgPath === "") {
        var script = $("script[src$='jquery.hcmode-detection.js']");
        var scriptPath = script.prop( "src" );
        if (!scriptPath) {
            return;
        }
        var parts = scriptPath.split( "/" );
        parts.pop();
        scriptPath = parts.join( "/" ) + "/";
        imgPath = scriptPath + imgPathFromScript + "?t=" + currentTime;
    }
    else {
        imgPath += "?t=" + currentTime;
    }

    var getColorValue = function ( colorTxt ) {
        var values = [], colorValue = 0, match;
        if (colorTxt.indexOf( "rgb(") != -1 ) {
            values = colorTxt.replace( "rgb(", "" ).replace( ")", "" ).split( ", " );
        }
        else if (colorTxt.indexOf( "#" ) != -1) {
            match = colorTxt.match( colorTxt.length == 7 ? /^#(\S\S)(\S\S)(\S\S)$/ : /^#(\S)(\S)(\S)$/ );
            if ( match ) {
                values = ["0x" + match[1], "0x" + match[2], "0x" + match[3]];
            }
        }
        for ( var i = 0; i < values.length; i++ ) {
            colorValue += parseInt( values[i], 16);
        }
        return colorValue;
    };

    var div, bkImg, img;

    function setUpTestElement() {
        var bgImgSrc = !$.browser.mozilla ? dataSrc : imgPath;
        /* create div for testing if high contrast mode is on or images are turned off */
        div = document.createElement( "div" );
        div.style.borderWidth = "1px";
        div.style.borderStyle = "solid";
        div.style.borderTopColor = "#F00";
        div.style.borderRightColor = "#0FF";
        div.style.backgroundImage = "url(" + bgImgSrc + ")";
        div.style.backgroundColor = "#FFF";
        div.style.position = "absolute";
        div.style.left = "-9999px";
        div.style.width = div.style.height = "2px";
        document.body.appendChild( div );

        bkImg = $.css( div, "backgroundImage" );
        $.support.backgroundImages = !( bkImg !== null && (bkImg == "none" || bkImg == "url(invalid-url:)" ) );
        $.support.borderColors = $.css( div, "borderTopColor" ) != $.css(div, "borderRightColor" );
        $.support.lightOnDark = getColorValue( $.css(div, "color" ) ) - getColorValue( $.css( div, "backgroundColor" ) ) > 0;

        img = new Image();
        img.style.border = "none";
        img.style.padding = img.style.margin = 0;
        img.style.border = "none";
        img.alt = "";
        //img.id = "testMe";
        div.appendChild( img );
    }

    function handleImgLoad() {
        if (imgTestCompleted) {
            return;
        }

        /*
        console.log("loaded!");
        console.log(img);
        console.log("-complete: " + img.complete);
        console.log("-width:" + img.offsetWidth);
        //*/
        $.support.images = img.offsetWidth == 1;
        $.support.highContrastMode = $.support.highContrastMode || !$.support.images;
        if ( $.support.highContrastMode ) {
            $( "html" ).addClass( "ui-helper-highcontrast" );
        }
        if (!$.browser.msie) {
            document.body.removeChild( div );
        } else {
            div.outerHTML = "";
        }
        imgTestCompleted = true;
    }

    if (($.browser.msie && $.browser.version >= 7) || ($.browser.opera && $.browser.version > 9) || ($.browser.webkit)) {
        setUpTestElement();
        setTimeout(handleImgLoad, 3000);
        img.onload = handleImgLoad;
        img.src = ($.browser.msie && $.browser.version == 7) ? imgPath : dataSrc;
    }
    else if ($.browser.mozilla){
        setUpTestElement();
        // can't use data URI images because of https://bugzilla.mozilla.org/show_bug.cgi?id=331257
        img.src = imgPath;
        // If img doesn't load, complete property will immedately be true in FF. 
        //Using load event actually makes complete property false for a short delay so that's unreliable
        $.support.images = !img.complete;
        document.body.removeChild( div );
    }

    $.support.highContrastMode =
        !$.support.images ||
        !$.support.backgroundImages ||
        !$.support.borderColors;
    if ( $.support.highContrastMode ) {
        // timeout needed to reduce chances of other scripts resetting the class later
        setTimeout(function () { $( "html" ).addClass( "ui-helper-highcontrast" ); }, 0);
    }

    /*
    setTimeout( function () {
        console.log( "$.support.images = " + $.support.images );
        console.log( "$.support.backgroundImages = " + $.support.backgroundImages);
        console.log( "$.support.borderColors = " + $.support.borderColors );
        console.log( "$.support.highContrastMode = " + $.support.highContrastMode );
        console.log( "$.support.lightOnDark = " + $.support.lightOnDark );
    }, 100 );
    //*/
});