sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        onInit: function() {
            let oViewModel = new JSONModel({
                currency: "EUR"
            })

            // Pega a view que o Controller está controlando, no caso, "InvoiceList.view.xml",
            // e adiciona uma model a ela, dando um alias chamado "view". Esse model é incrementado posteriormente
            // com outra model, que vem do arquivo JSON "Invoices.json".
            this.getView().setModel(oViewModel, "view")
        }
    })
})