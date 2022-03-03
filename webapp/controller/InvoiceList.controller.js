sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../model/formatter"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter,
        onInit: function() {
            let oViewModel = new JSONModel({
                currency: "EUR"
            })

            // Pega a view que o Controller está controlando, no caso, "InvoiceList.view.xml",
            // e adiciona uma model a ela, dando um alias chamado "view". Esse model é incrementado posteriormente
            // com outra model, que vem do arquivo JSON "Invoices.json".
            this.getView().setModel(oViewModel, "view")
        },
        onFilterInvoices: function (oEvent) {
            //build filter array
            let aFilter = []
            let sQuery = oEvent.getParameter("query")
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery))
            }

            //filter binding
            let oList = this.byId("invoicesList")
            let oBinding = oList.getBinding("items")
            oBinding.filter(aFilter)
        }
    })
})