sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
    return Controller.extend("gonis.fiori-crud-test.controller.App", {
        onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
    });
 });