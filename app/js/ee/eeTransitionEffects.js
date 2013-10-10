//This JS library contains methods to accomplish the generic transition effect/

// smooth scrolling variables
var headerHeight = $('header').height() + 140;


function genericSaveAndContinueTransition(currentPanelId, nextPanelId)
{

	
	//animation for Save
	if(typeof currentPanelId !== 'undefined'){
		var currentSaveId = $('#'+currentPanelId).find('.btn.btn-primary.btn-large.saveButton').attr('id');
		var currentEditId = $('#'+currentPanelId).find('.btn.btn-inverse.btn-large.priorCardButton').attr('id');
		var currentSectionID = $('#'+currentPanelId).find('.section').attr('id');
		
		//If container had a form section disable it
		if(typeof currentSectionID !== 'undefined'){
			toggleFormControls(currentSectionID, true);
			$('#'+currentSectionID).addClass('transparent');
		}
		//If container has a save button hide it
		if(typeof currentSaveId !== 'undefined'){
			$('#'+currentSaveId).hide();
		}
		//If container has a edit button show it
		if(typeof currentEditId !== 'undefined'){
			$('#'+currentEditId).show();
		}
	
	}
	
	if(typeof nextPanelId !== 'undefined'){
		var nextSection = $('#'+nextPanelId).find('.section');
		
		if(nextSection.hasClass('transparent')){
			//remove previous transition
			genericPreviousTransition(nextPanelId);
		}else{
			//Default next panel transition
			var scrollToPosition = $('#'+nextPanelId).offset().top - headerHeight;
			$('html, body').animate({ scrollTop: scrollToPosition }, 500);
		}
	}

}

function genericPreviousTransition(currentPanelId)
{
	//animation for Edit
	if(typeof currentPanelId !== 'undefined'){
		var scrollToPosition = $('#'+currentPanelId).offset().top - headerHeight;
		$('html, body').animate({ scrollTop: scrollToPosition }, 500);
		$('#'+currentPanelId + ' > div > .transparent').removeClass('transparent');
		var currentSaveId = $('#'+currentPanelId).find('.btn.btn-primary.btn-large.saveButton').attr('id');
		var currentEditId = $('#'+currentPanelId).find('.btn.btn-inverse.btn-large.priorCardButton').attr('id');		
		var currentSectionID = $('#'+currentPanelId).find('.section').attr('id');

		//If container had a form section enable it
		if(typeof currentSectionID !== 'undefined'){
			toggleFormControls(currentSectionID, false);
		}
		//If container has a save button hide it
		if(typeof currentSaveId !== 'undefined'){
			$('#'+currentSaveId).show();
		}
		//If container has a edit button hide it
		if(typeof currentEditId !== 'undefined'){
			$('#'+currentEditId).hide();
		}
	}
}

/**
 * Utility function currently utilized for backwards navigation transitions in the income section.  Should be usable by other sections.
 *
 * @param evt the click event
 * @param BBview a reference to the backbone view handling the click event
 * @param router a reference to the backbone router object
 * @param cardName the name of the card to navigate to in the router
 * @param transitionId the id of the page to transition to, visually
 *
 */
function rewindToCard(evt, BBview, router, cardName, transitionId) {
	var target = evt.target || evt.srcElement; // some browsers use target, others use srcElement
	var indexMatch = target.id.match(/\d+$/);
	if (indexMatch) {
	    index = indexMatch[0];
	} else {
		index = "";
	}
	indAppState.setIndex(parseInt(index, 10));
	if(isEmpty(index)){
		indAppState.setIndex(0);
		index = "";
	}
	genericPreviousTransition(transitionId + index);
	$("#" + transitionId + index).nextAll(".cardContainer").hide();
	router.navigate(cardName, {trigger: true});
	BBview.refreshTemplate();
}


/**
 * Set the designated top-level section as the active section of the application
 * 
 * @param sectionId the section to make the active section
 * @param subsectionHtml optional HTML to use for subsections. If nothing is passed here the function will check for hidden subsection <li>s pre-added by a template
 * 
 */
function updateAppProgress(sectionId, subsectionHtml) {
	jqEle = $("#" + sectionId);
	
	// set classes and HiddenText for current section
	jqEle
		.addClass("complete")
		
		.children("i")
		.removeClass("icon-circle_ok iconCustom-circle-blank")
		.addClass("icon-circle_arrow_down")
		
		.siblings("a")
		.removeClass("disabledItem").attr("href","#")
		
		.siblings("span.HiddenText")
		.text(", current section");
		
	// set classes for previous sections	
	jqEle
		.prevAll(".nav-header")
		.addClass("complete")
		
		.children("i")
		.removeClass("icon-circle_arrow_down iconCustom-circle-blank")
		.addClass("icon-circle_ok")
		
		.siblings("a")
		.removeClass("disabledItem").attr("href","#")
		
		.siblings("span.HiddenText")
		.text(", completed section");

	// set classes for upcoming sections
	jqEle
		.nextAll(".nav-header")
		.removeClass("active")
		
		.children("i")
		.removeClass("icon-ok_2 complete")
		
		.siblings("a")
		.addClass("disabledItem").removeAttr("href")
		
		.siblings("span.HiddenText")
		.text(", upcoming section");
	
	// hide subsection HTML for all sections
	$(".nav-subsection").hide();
	// add back subsection HTML for this section
	if (typeof subsectionHtml !== "undefined") {
		$('<ul class="nav nav-pills nav-stacked nav-subsection"></ul>').appendTo("#" + sectionId).append(subsectionHtml);
	} else {
		$("#" + sectionId + " .nav-subsection").show();
	}
	
	// number subsections
	if ($("#" + sectionId + " .nav-subsection li").length > 0) {
		$("#" + sectionId + " .nav-subsection li i.icon-number").each(function(i,ele){
			$(this).text(i+1).data("displayindex", i+1);
		});
	}
}

/**
 * Gives the specified progress substep the "active" class and removes active class from all other substeps
 * 
 * @param id the id of the substep to designate as active
 * @return void
 */
function updateAppSubsectionProgress(id) {
	jqEle = $("#" + id);
	
	// set this subsection to active subsection
	jqEle
		.addClass("active")
		.children("i")
		.attr("class", "icon-number")
		.each(function(){
			$(this).text($(this).data("displayindex"));
		})
		.siblings("span.HiddenText")
		.text(", current step");

	// set stuff for previous subsections	
	jqEle
		.prevAll("li[id*='subSection']")
		.removeClass("active")
		.children("i")
		.attr("class", "icon-ok_2 complete")
		.text("")
		.siblings("span.HiddenText")
		.text(", completed step");

	// set classes for upcoming sections
	jqEle
		.nextAll("li[id*='subSection']")
		.removeClass("active")
		.children("i")
		.attr("class", "icon-number")
		.each(function(){
			$(this).text($(this).data("displayindex"));
		})
		.siblings("span.HiddenText")
		.text(", upcoming step");
}

/**
 * Converts an application members object to HTML for use as subsections in the application progress area.
 * Resulting markup can be fed into updateAppProgress()
 * 
 * @param members Array of application members
 * @param target id of the nav element representing the current top-level section (Income, FAH, etc.)
 * @return HTML string
 */
function convertMembersToSubsectionHtml(members, target) {
	if ((typeof members !== "undefined") && (typeof target !== "undefined") && (!isEmpty(members))) {
		var listHtml = '';
		for (var i = 0; i < members.length; i++) {
            if (members[i] !== null) {
                memberName = getAppMemberFullName(members[i]);
                
                var liStr = '<li id="' + target + 'subSection' + i + '"' +
                    '><i class="icon-number"></i>' + '<a href="#" class="wordWrap">' +
                    memberName +
                    '</a></li>';
                
                listHtml += liStr;
            }
		}
		return listHtml;
	}
}

function createSubsectionHtml(displayName, identifier, target) {
	var html = '<li id="' + target + 'subSection' + identifier + '"><i class="icon-number"></i><a href="#">' + displayName + '</a></li>';
	return html;
}

/**
 * Toggles the display of the income substep
 * 
 * @param boolean value, true indicates show the substep, false indicates hide
 * @return void
 */
function toggleIncomeSubstepDisplay(toggle) {
	if (toggle)
	{
		$('#indAppStep2').show();
	}
	else
	{
		$('#indAppStep2').hide();
	}
}

// DEPRECATED
//////////////////////////Update Left Nav/////////////////////////
//takes in a string and a collection of elements and and index to set the progressBar
//userSection - section or subsection user is on
//elementCollection - collection of elements
//index - used for income update
//// NOTE -- these functions are deprecated in favor of updateAppSubsectionProgress and updateAppProgress above.
// these functions can be erased when all references to them are removed
function setAppProgress(userSection, elementCollection, index){
	var i, num, previousSelect, innerElement, listNum, innerLink, innerSpan;
	// users current section gotten either from userSecttion or index
	// index for when the user is in the income section
	if(!isEmpty(userSection)){
		// passing 10 as radix 
		userSection = parseInt(userSection.replace(/[^0-9]+/gi, ''), 10);
	}else if(!isEmpty(index)){
		userSection = index;
	}
	
	for(i = 0; i < elementCollection.length; i++){
		
		// item from progress bar
		// passing 10 as radix
		num = parseInt(elementCollection.eq(i).attr('id').replace(/[^0-9]+/gi, ''), 10);
		listNum = num +1;
		previousSelect = userSection - num;
		innerElement = elementCollection.eq(i).children().eq(0);
		innerLink = elementCollection.eq(i).children().eq(1);
		innerSpan = elementCollection.eq(i).children().eq(2);
		
		
		// users current progress
		if(userSection > num){
			// This means user has gone past this section
			
			elementCollection.eq(i).removeClass('active');
			innerElement.removeClass('icon-number');
			if (innerSpan.is("span")) {
				innerSpan.text(', completed step');
			}			
			
			innerElement.addClass('icon-ok_2');
			innerElement.addClass('complete');
			innerElement.text('');
			//Navigate back based on navigation item count
			innerLink.attr("href", "javascript:window.history.go(-"+ previousSelect +");");
			
			
		}else if(userSection === num){
			// This means user is on this section
			
			// remove un-needed classes
			innerElement.removeClass('icon-ok_2');
			innerElement.removeClass('complete');
			if (innerSpan.is("span")) {
				innerSpan.remove();
			}		

			elementCollection.eq(i).addClass('active');
			elementCollection.eq(i).append('<span class="HiddenText">, current step</span>');

			//Accounts for backwards re-selection of nav item
			if(innerElement.text() === ''){
				innerElement.text(''+listNum+'');
				innerElement.addClass('icon-number');
			}
			
		}else if(userSection < num){
			// This means user has yet to complete this section

			// remove un-needed classes
			innerElement.removeClass('icon-ok_2');
			innerElement.removeClass('complete');
			innerElement.addClass('icon-number');
			if (innerSpan.is("span")) {
				innerSpan.text(', upcoming step');
			}		

			innerElement.text(i+1);
			elementCollection.eq(i).removeClass('active');
		}
	}
}

// this function is deprecated, see above
function setAppSectionProgress(userSection, elementCollection, index){
	var i, num, innerElement, innerSpan, nextElement;
	// users current section gotten either from userSecttion or index
	// index for when the user is in the income section
	if(!isEmpty(userSection)){
		// passing 10 as radix 
		userSection = parseInt(userSection.replace(/[^0-9]+/gi, ''), 10);
	}else if(!isEmpty(index)){
		userSection = index;
	}
	
	for(i = 0; i < elementCollection.length; i++){
		
		// item from progress bar
		// passing 10 as radix
		num = parseInt(elementCollection.eq(i).attr('id').replace(/[^0-9]+/gi, ''), 10);
		innerElement = elementCollection.eq(i).children().eq(0);
		innerSpan = elementCollection.eq(i).children().eq(2);
		// users current progress
		
		//<i class="icon-ok_2 complete" aria-hidden="true"></i>
		
		if(userSection > num){
			// user has gone past this section

			// remove un-needed classes
			innerElement.removeClass('icon-circle_arrow_down');
			innerElement.removeClass('iconCustom-circle-blank');
			if (innerSpan.is("span")) {
				innerSpan.text(', completed section');
			}		
			
			// add necessary classes
			innerElement.addClass('icon-circle_ok');
			elementCollection.eq(i).addClass('complete');
			
			//hide subsections
			nextElement = elementCollection.eq(i).next();
			while (!nextElement.hasClass('divider') && nextElement.length !== 0)
			{
				nextElement.hide();
				nextElement = nextElement.next();
			}
			
		}else if(userSection === num){
			// user is on this section
			
			// remove un-needed classes
			innerElement.removeClass('icon-circle_ok');
			innerElement.removeClass('iconCustom-circle-blank');
			if (innerSpan.is("span")) {
				innerSpan.text(', current section');
			}		

			// add necessary classes
			innerElement.addClass('icon-circle_arrow_down');
			elementCollection.eq(i).addClass('complete');
			
			//$(".nav-header").removeClass("divider") // remove divider from all indApp progress sections
			//	.not(elementCollection.eq(i), " :last").addClass("divider"); // then add it back to all except target and final sections
			
			//show all subsections
			nextElement = elementCollection.eq(i).next();
			while (!nextElement.hasClass('divider') && nextElement.length !== 0)
			{
				nextElement.show();
				nextElement = nextElement.next();
			}
			
		}else if(userSection < num){
			// user has yet to complete this section

			// remove un-needed classes
			innerElement.removeClass('icon-circle_ok');
			innerElement.removeClass('icon-circle_arrow_down');
			elementCollection.eq(i).removeClass('complete');

			// add necessary classes
			innerElement.addClass('iconCustom-circle-blank');
			
			//hide all subsections
			nextElement = elementCollection.eq(i).next();
			while (!nextElement.hasClass('divider') && nextElement.length !== 0)
			{
				nextElement.hide();
				nextElement = nextElement.next();
			}
		}
	}
}


    