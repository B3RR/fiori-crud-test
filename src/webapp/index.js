sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "gonis.fiori-crud-test",
		settings : {
			id : "fiori-crud-test"
		},
		async: true
	}).placeAt("content");
});