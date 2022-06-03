sap.ui.define(
    ["./BaseController", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sbt.IHKProject.controller.Login", {
            onInit: function () {
                // set data model on the view
                // var oData = {
                //     recipient: {
                //         email: "",
                //         password: "",
                //     },
                // };
                // var oModel = new JSONModel(oData);
                // this.getView().setModel(oModel);
            },
            //Show alert
            onLoginPress: function () {
                // //Read from View
                var email = this.getView().getModel().getProperty("/customer_dataSet/email");
                var password = this.getView().getModel().getProperty("/recipient/password");/*  */

                console.log(email, password);

                // //Proof if Variables are filled
                // if (isEmptyValue(email) == true || isEmptyValue(password) == true) {
                // //     //PopUp Message to User
                //     MessageBox.alert("Please enter an Emai-Adress and Password!");
                // } else {
                // //     //Proof Email and Password in Database than -> Nav Forward to Web-Shop
                //     // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //     this.getRouter(this).navTo("HomeView");
                // }

            //    var oModel = this.getOwnerComponent().getModel("default");
            //    var stest = oModel.read("customer_dataSet(email)");

                this.getRouter(this).navTo("HomeView");
            },
        });
    }
);
