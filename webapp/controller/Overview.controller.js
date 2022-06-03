sap.ui.define([
    "./BaseController",
    "sap/m/MessageBox",
], function (Controller, MessageBox ) {
    "use strict";

    return Controller.extend("com.sbt.IHKProject.controller.Overview", {   

    onInit: function(){
        var oModel = this.getView().getModel("CartModel");
        // oModel.setProperty("/CartData/Data");
        console.log(this.getOwnerComponent().getModel("CartModel"));

        // console.log(this.)
        // console.log(this.getView().getModel("CartModel"));
    },

    onCart: function(){
        this.getRouter(this).navTo("CartView");
    },

    onHome: function(){
        // console.log(this.getView().getModel("CartModel"));
    },

    onAddtoCart: function(oEvent){
        MessageBox.confirm("Do you want to add this Product to your cart?");
        // var oButton = oEvent.getSource();
        // var oBindingContext = oButton.getBindingContext();
        // var oArticle = oBindingContext.getObject();
        let oTableLine = oEvent.getSource().getBindingContext().getObject();
        console.log(oTableLine); 
        const oArticle = {ArticleID: oTableLine.ArticleId, 
                          ArticleName: oTableLine.ArticleName, 
                          Description: oTableLine.Description, 
                          Price: oTableLine.Price, 
                          Unit: oTableLine.Unit};
        let oModel = this.getView().getModel("CartModel");
        var oData = oModel.getData();
        oModel.setProperty("/Cart", [oArticle]); 
        console.log(oModel.getData());
        
        oData.Cart.push(oArticle);
        console.log("GET", oData);
        // oModel.setData(oArticle, false);
        console.log("Test", oModel);
        

        // var aData = oModel.getProperty("/CartData");
        // aData.push.apply(aData, oArticle);
        // oModel.setProperty("/CartData", aData);  

        // console.log("Test", this.getView().getModel("CartModel"));


        // this.getView().getModel("CartModel").setData(oArticle, true);

        // console.log("Selected row Object:", oArticle);
        
        // console.log("Articles:", sArticles);

        // var oCartModel = new sap.ui.model.json.JSONModel("model/CartModel");
        // oCartModel = this.getView().setModel("CartModel");
        // // console.log("Test", this.getView().getModel());
        // oCartModel.setData(oArticle);
        
        
        }
	});
});