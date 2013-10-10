
//Contains Common JS used for Registration

//fetch security questions and if toTrigger is not null execute that function with the url provided
function fetchQuestions( $this, toTrigger, url, navigateTo, username ) {
	var oldUrl = $this.fetchSecurityQuestionsModel.url;
		
	$this.fetchSecurityQuestionsModel.url = url;
	$this.fetchSecurityQuestionsModel.set({"userName" : username});
	$this.fetchSecurityQuestionsModel.fetch({
		success : function(model, response) {
			if(!isEmpty(toTrigger)) {
				$this.model.trigger(toTrigger);
			}
			if(!isEmpty(navigateTo)) {
				navigateTo.navigate("forgotPasswordQuestions", {trigger: true});
			}
			$this.fetchSecurityQuestionsModel.url = oldUrl;
			console.log(response);
		},
		error : function(model, response) {
			console.log(response);
		}
	});
}

//filters security questions
function filterSecurityQuestions( model, fromElement, resourceText ) {
	var securityQs = model.get('securityQuestions'),
			targets = $('.securityQuestions', '#'+fromElement),
			targetVals = [
				targets.eq(0).val(),
				targets.eq(1).val(),
				targets.eq(2).val()
			];
	$(".securityQuestions option", '#'+fromElement).remove();
		
	//loop through the three inputs
	for(var j = 0; j < 3; j++) {
		targets.eq(j).append('<option selected value="">'+resourceText+'</option>');
		//loop through all the security questions 
		for(var i = 0; i < securityQs.length; i++) {
			//appending option as long as it is not selected in any other input
			switch(j) {
				case 0:
					appendSecurityQuestion({'appendTo' : targets.eq(j), 'question' : securityQs[i].question, 'compareOne' : targetVals[1], 'compareTwo' : targetVals[2], 'index' : j});
					break;
				case 1:
					appendSecurityQuestion({'appendTo' : targets.eq(j), 'question' : securityQs[i].question, 'compareOne' : targetVals[0], 'compareTwo' : targetVals[2], 'index' : j});
					break;
				case 2:
					appendSecurityQuestion({'appendTo' : targets.eq(j), 'question' : securityQs[i].question, 'compareOne' : targetVals[0], 'compareTwo' : targetVals[1], 'index' : j});
					break;
			}
		}
		targets.eq(j).val(targetVals[j]);
	}
}

//appends filtered security questions
function appendSecurityQuestion( args ) {
	if(args.question !== args.compareOne && args.question !== args.compareTwo) {
		args.appendTo.append('<option value="'+args.question+'">'+args.question+'</option>');
	}
}
