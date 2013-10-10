referenceData = {}; // local cache of reference data for fast retrieval

// TODO: instead of returning true on err, hook into error framework
function preloadStateReferenceData(type) {
	tenant = "global";
	locale = "en_US";
	
	$.ajax({
		url: "/base-rest/" + tenant + "/" + locale + "/ReferenceCode/" + type, 
		success: function(data) {
			referenceData[type] = data;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			referenceData[type] = "true"; // TODO throw error
			console.warn("Error loading reference data for type: " + type + ": " + textStatus);
		}
	});
}

// currently called in BB router when FAH chapter is loaded
function preloadAllReferenceData(types) {
	for (var i = 0; i < types.length; i++) {
		preloadStateReferenceData(types[i]);
	}
}

/**
 * Synchronously returns reference data for a given type.
 * Strongly recommended for the type to be preloaded with preloadStateReferenceData beforehand
 * @param type
 */
// TODO: instead of returning true on err, hook into error framework
function getStateReferenceData(type, tenantId) {
	var state = tenantId || "VA";
	locale = "en_US";
	var result = false;
	if (referenceData[type]) {
		$.each(referenceData[type], function(i, response) {
			if (response.code.toLowerCase() === state.toLowerCase()) {
				result = response.value;
				return false; // break out of $.each loop
			}
		});
		if (!result) {
			console.log("Could not find reference data for " + type + " for the state of " + tenantId + ".");
		}
		if ((state.toLowerCase() === "va") && (!result)) {
			return true; // TODO throw error
		}
		return result || getStateReferenceData(type); // use default (VA) if no state data
	} else { // this should never need to happen if data is preloaded, but if we must, get data synchronously and block UI
		console.warn("Reference type: " + type + " not preloaded!  Loading synchronously... (preload for better performance)");
		$.ajax({
			async: false,
			url: "/base-rest/" + state + "/" + locale + "/ReferenceCode/" + type, 
			success: function(data) {
				referenceData[type] = data || true; // TODO throw error
			},
			error: function(jqXHR, textStatus, errorThrown) {
				referenceData[type] = true; // TODO throw error
				console.warn("Error loading reference data for type: " + type + ": " + textStatus);
			}
		});
		return getStateReferenceData(type, tenantId);
	}
}

function parseReferenceYesNoResult(result) {
	if ((result === "true") || (result === true) || (result.indexOf("Y") !== -1)) {
		return true;
	} else {
		return false;
	}
}