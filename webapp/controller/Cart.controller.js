sap.ui.define(["./BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("com.sbt.IHKProject.controller.Cart", {
        onInit: function () {
            // when the view is getting instantiated there is no access on the model (as it has not yet been binded/added to the view)
            // therefore access by the ownerComponent (Component.js, the base of the app) is required
            // when accessing the Model somewhere else i.e. on button click within the already rendered/loaded view, access via
            // this.getView().getModel ... is possible!
            console.log("hallo");
            const oModel = this.getOwnerComponent().getModel("CartModel");
            console.log("Einkaufswagen", oModel);

            // this.getView().setModel("CartModel");

        },
    });
});
