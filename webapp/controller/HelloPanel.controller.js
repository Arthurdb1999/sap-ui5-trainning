sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], function (Controller, MessageToast) {
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            // ler uma mensagem do model i18n
            // o arquivo i18n me parece com o arquivo strings.xml que existe na criação de projetos Android Kotlin
            let oBundle = this.getView().getModel("i18n").getResourceBundle()
            let sRecipient = this.getView().getModel().getProperty("/recipient/name")
            let sMsg = oBundle.getText("helloMsg", [sRecipient])

            // mostrar a mensagem
            MessageToast.show(sMsg)
        },

        onOpenDialog: function() {
            // create dialog lazily
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "sap.ui.demo.walkthrough.view.HelloDialog"
                })
            }
            this.pDialog.then(oDialog => {
                oDialog.open()
            })
        },

        onCloseDialog: function () {
            // note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
            this.byId("helloDialog").close()
        }
    })
})