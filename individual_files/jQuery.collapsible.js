/**
 * --------------------------------------------------------------------
 * jQuery collapsible plugin
 * Author: Scott Jehl, scott@filamentgroup.com
 * Copyright (c) 2009 Filament Group 
 * licensed under MIT (filamentgroup.com/examples/mit-license.txt)
 * --------------------------------------------------------------------
 */
$.fn.collapsible = function(options){
	return $(this).each(function(extendedOptions){
	
		//define content to expand collapse
	    var collapsibleHeading = $(this);
		var collapsibleContent = collapsibleHeading.next();
		var defaultExpandCollapseSettings = {
            text: false,
            icon: true,
			closeAll: false
		};
		var originalHeadingText = collapsibleHeading.text(); 

		var extendedOptions = $.extend({}, defaultExpandCollapseSettings, options);
		
		if(extendedOptions["text"]){
			var collapsibleLink = $("<a href='#' class='collapsible-heading' onclick='return false;'>" +
						"<span class='toggleIndicator'>Collapse <span aria-hidden='true'></span></span>" +
						"<span class='HiddenText'> &quot;"+ collapsibleHeading.text() +"&quot; section</span></a>");
			collapsibleHeading.append(collapsibleLink);
			collapsibleContent.addClass('collapsible-content');
		}

		//modify markup & attributes
		if(extendedOptions["icon"]){
			var collapsibleLink = $('<a href="#" class="collapsible-heading-toggle-icon"></a>');
			collapsibleHeading.addClass('collapsible-heading-icon')
				.prepend('<span class="collapsible-heading-status-icon"></span>')
				.wrapInner(collapsibleLink);
				
			collapsibleContent.addClass('collapsible-content-icon');
		}
		
				
		var openExpanded = collapsibleHeading.hasClass("openExpanded");

        var liveRegion = $("<div class='HiddenText' aria-live='polite'></div>").insertBefore(this);

		
		//events
			
		collapsibleLink	
			.bind('collapse', function(){
				if(extendedOptions["icon"]){
					collapsibleHeading
						.addClass('collapsible-heading-collapsed-icon')
						.find('.collapsible-heading-status-icon').text('Show ');
					collapsibleHeading
						.find('.toggleIndicator').html("Expand <span aria-hidden='true'></span>");
					$(this).addClass('collapsible-heading-toggle-icon');
				}else{
					$(this)
						.addClass('collapsible-heading-collapsed')
						.find(".toggleIndicator").html("Expand <span aria-hidden='true'>+</span>");
				}
				collapsibleContent.slideUp(function(){
					if(extendedOptions["icon"]){
						$(this).addClass('collapsible-content-collapsed-icon').removeAttr('style').attr('aria-hidden',true);
					}else{
						$(this).addClass('collapsible-content-collapsed').removeAttr('style').attr('aria-hidden', true);
					}
				});
			    liveRegion.text(originalHeadingText + " has collapsed" );	
			})
			.bind('expand', function(){

				if(extendedOptions["icon"]){	
					collapsibleHeading
						.removeClass('collapsible-heading-collapsed-icon')
						.find('.collapsible-heading-status-icon').text('Hide ');
					collapsibleHeading
						.find('.toggleIndicator').html("Close <span aria-hidden='true'></span>");
					$(this).removeClass('collapsible-heading-toggle-icon');
				}else{
					$(this)
						.removeClass('collapsible-heading-collapsed')
						.find(".toggleIndicator").html("Collapse <span aria-hidden='true'>-</span>");
				}
				
				collapsibleContent.slideDown(function(){
					if(extendedOptions["icon"]){		
						$(this).removeClass('collapsible-content-collapsed-icon').removeAttr('style').attr('aria-hidden',false);
					}else{
						$(this).removeClass('collapsible-content-collapsed').removeAttr('style').attr('aria-hidden', false);
					}
				});
			    liveRegion.text(originalHeadingText + " has expanded" );	
			})
			.click(function(){ 
				if ($(this).is('.collapsible-heading-collapsed')) {
				
					if(extendedOptions["closeAll"]){
						$(this.nodeName.toLowerCase() + '.collapsible-heading').trigger('collapse');
			        }
					$(this).trigger('expand');
			    }
				else if($(this).is('.collapsible-heading-toggle-icon') ){
					$(this).trigger('expand'); 
				}	
				else {
					$(this).trigger('collapse'); 
				}
				return false;
			});
		
		    collapsibleHeading.click(function(event) {
        		collapsibleLink.click();
        	});
		
		if ( !openExpanded ) {
			collapsibleLink.trigger('collapse'); //block is collapsed by default, unless the heading has the openExpanded class.
		}
		
			
	});	
};	