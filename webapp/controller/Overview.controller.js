sap.ui.define([
    "./BaseController",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
], function (Controller, MessageBox, JSONModel ) {
    "use strict";

    return Controller.extend("com.sbt.IHKProject.controller.Overview", {

    onInit: function(){
        // console.log(this.getOwnerComponent());
        // var oCart = new JSONModel("Cart.json");
        // this.getView().setModel(oCart);
        // console.log("Model", oCart);
        console.log(this.getView().getModel("CartModel"));
    },

    onCart: function(){
        var oRouter = this.getRouter(this);
        oRouter.navTo("CartView");
    },

    onHome: function(){
        console.log(this.getView().getModel("CartModel"));
    },

    onAddtoCart: function(oEvent){
        MessageBox.confirm("Do you want to add this Product to your cart?");
        // var oButton = oEvent.getSource();
        // var oBindingContext = oButton.getBindingContext();
        // var oData = oBindingContext.getObject();
        // console.log("Selected row Object:", oData);
        
        // console.log("Articles:", sArticles);

        // var oCartModel = new sap.ui.model.json.JSONModel("model/CartModel");
        // oCartModel = this.getView().setModel("CartModel");
        // console.log("Test", this.getView().getModel());
        // oCartModel.setData(oData);
        
        // console.log("Test", this.getView().getModel());
        }
	});
});