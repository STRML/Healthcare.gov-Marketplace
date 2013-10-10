//Enable-disable background Form input elements for a given ID for 508 reasons.
//The third parameter is optional and should be used only if we need to enable a container inside a disabled container. 

function toggleFormControls(id, disabled, mid) 
{
	if(disabled)
	{
        $('#'+id).find('input, textarea, button, select').attr('disabled','disabled');
        
        //Must physically remove hrefs from A tags to make them disabled.
        $('#'+id+' a').each(function(index) 
        {
          //Naga made a change here - as this code is making the calender icon to disappear
          //  $(this).attr('data-href', $(this).attr('href'));
          //  $(this).removeAttr("href");
        	$(this).addClass('date-picker-control-disabled');
        });   
	}
	else
	{
		$('#'+id).find('input, textarea, button, select').removeAttr("disabled");
        
        //Must physically add back hrefs from A tags to make them enabled.
        $('#'+id+' a').each(function(index) 
        {
            $(this).attr('href', $(this).attr('data-href'));
            $(this).removeAttr("data-href");
        });
    }
	
	//check if optional parameter is present to enable Modal controls	
	if (typeof mid !== 'undefined') 
	{
		toggleFormControls(mid, false);
	}
}

/* This function will change the href property of the skip navigation link to assist with pages that utilize a
 * Backbone Router instead of having multiple pages. This will allow the skip nav link to be dynamic even though
 * there is only one for the entire application. This version is for use when a Backbone Router is in place.
 */
 function setSkipNavLocation (newLocation) {
	if (isEmpty(newLocation) || typeof newLocation !== "string") {
		// This will be our default in case a bad argument is passed through.
		newLocation = "#main_content";
	}
	$("#skipNavLink").prop("href", "#" + newLocation);
}