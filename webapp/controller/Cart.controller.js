sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.sbt.IHKProject.controller.Cart", {
        onInit() {
        },
        onEditQuantity(oEvent) {
            // let oTableLine = oEvent.getSource().getBindingContext().getObject();
            // var oModel = this.getView().getModel("CartModel");
            // var oData = Object.assign({}, oModel.getData()["Cart"]);

            // oData[oTableLine.ArticleId].Quantity += 1;

            // oModel.setProperty("/Cart", oData);
        },
        onRemoveItem(oEvent) {
            MessageBox.confirm("Do you want to remove your Product from the cart?");

            const oTableLine = oEvent.getSource().getBindingContext();
            // console.log("oTableLine", oTableLine); 
            // const oCartModel = this.getModel("CartModel");
            // console.log("oCartModelbefore", oCartModel); 
            // const oEntries = Object.assign({}, oCartModel.getData()["Cart"]);
            // console.log("Entries", oEntries); 
            // delete oEntries[oTableLine.ArticleId];
            // console.log("oCartModelafter", oEntries); 
            // oCartModel.setProperty(oCartModel.setProperty("/Cart", Object.assign({}, oEntries)));
            // console.log("oCartModelafter", oCartModel); 

        },
        onNavToHome()  {
            this.navTo("HomeView");
        }
    });
});
