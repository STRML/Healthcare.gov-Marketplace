//Override Backbone.sync with a dialog box that alerts the user when
//a REST call has failed
Backbone._sync = function(method, model, options) {
	var error = options.error;
	
	options.error = function(xhr, text_status, error_thrown){
		//call the existing error function to run the error callback on model save
		error(xhr, text_status, error_thrown);		

		model.trigger("showCommonErrorMessage", model, xhr);
	};
	return Backbone.sync.call(this, method, this, options);
};

indAppSync = function(method, model, options) {
	var error = options.error;

	options.error = function(xhr, text_status, error_thrown){
		//call the existing error function to run the error callback on model save
		error(xhr, text_status, error_thrown);

		if (!showDataDownError(model, xhr)) {
			model.trigger("showCommonErrorMessage", model, xhr);
		}
		
		checkForUnauthorizedAccess(xhr);
	};
	return Backbone.sync.call(this, method, this, options);
};
