sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (Controller, MessageBox) {
    "use strict";

    const DEFAULT_QUANTITY = 1;

    return Controller.extend("com.sbt.IHKProject.controller.Overview", {
        onInit: function () {
        },

        onCart: function () {
            this.getRouter().navTo("CartView");
        },

        onAddToCart: function (oEvent) {
            //todo, use resource bundle to use translatable text here
            MessageBox.confirm("Do you want to add this Product to your cart?");

            const oTableLine = oEvent.getSource().getBindingContext().getObject();
            const oRelevantArticleData = {
                ArticleID: oTableLine.ArticleId,
                ArticleName: oTableLine.ArticleName,
                Description: oTableLine.Description,
                Quantity: DEFAULT_QUANTITY,
                Price: oTableLine.Price,
                Currency: oTableLine.Currency,
                Unit: oTableLine.Unit,
            };

            const oModel = this.getModel("CartModel");
            const oData = Object.assign({}, oModel.getData()["Cart"]);

            let oCartEntry = oData[oTableLine.ArticleId];

            if (oCartEntry === undefined) {
                oCartEntry = Object.assign({}, oRelevantArticleData);
                oData[oRelevantArticleData.ArticleID] = oRelevantArticleData;
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
