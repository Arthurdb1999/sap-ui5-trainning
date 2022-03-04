sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
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
            //O evento chama o evento de callback que tem a property "query"
            let sQuery = oEvent.getParameter("query")
            if (sQuery) {
                // Poderíamos adicionar outros argumentos junto de "ProductName" para filtrar em mais de um campo
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery))
            }

            //filter binding
            // byId acessa a View controlada por este controller
            let oList = this.byId("invoiceList")
            let oBinding = oList.getBinding("items")
            // A linha abaixo garante que, se o input estiver vazio, todos os itens da lista serão mostrados em tela
            oBinding.filter(aFilter)
        },
        onPress: function (oEvent) {
            // getSource retorna o control que disparou o evento
            const oItem = oEvent.getSource()
            const oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("detail", {
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            })
        }
    })
})