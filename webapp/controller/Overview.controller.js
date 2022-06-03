sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.sbt.IHKProject.controller.Overview", {
        onInit: function () {
            var oModel = this.getView().getModel("CartModel");
            // oModel.setProperty("/CartData/Data");
            console.log(this.getOwnerComponent().getModel("CartModel"));

            // console.log(this.)
            // console.log(this.getView().getModel("CartModel"));
        },

        onCart: function () {
            this.getRouter(this).navTo("CartView");
        },

        onHome: function () {
            // console.log(this.getView().getModel("CartModel"));
        },

        onAddToCart: function (oEvent) {
            MessageBox.confirm("Do you want to add this Product to your cart?");
            let oTableLine = oEvent.getSource().getBindingContext().getObject();
            const oArticle = {
                ArticleID: oTableLine.ArticleId,
                ArticleName: oTableLine.ArticleName,
                Description: oTableLine.Description,
                Quantity: 1,
                Price: oTableLine.Price,
                Currency: oTableLine.Currency,
                Unit: oTableLine.Unit,
            };

            const oModel = this.getView().getModel("CartModel");
            const oData = Object.assign({}, oModel.getData()["Cart"]);

            const oCartEntry = oData[oTableLine.ArticleId];
            if (oCartEntry === undefined) {
                oCartEntry = Object.assign({}, oArticle);
                oData[oArticle.ArticleID] = oArticle;
            }
            else {
                // add 1 to quantity
                console.log("wir sind im else zweig");
                oData[oTableLine.ArticleId].Quantity += 1;
                console.log("oData", oData);
            }
            oModel.setProperty("/Cart", oData);
        },
    });
});
