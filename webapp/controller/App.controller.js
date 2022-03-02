sap.ui.define([
    // Bibliotecas utilizadas
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], function (Controller, MessageToast) {
    "use strict"

    // Definição do controller
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

        onShowHello: function () {
            // ler uma mensagem do model i18n
            // o arquivo i18n me parece com o arquivo strings.xml que existe na criação de projetos Android Kotlin
            let oBundle = this.getView().getModel("i18n").getResourceBundle()
            let sRecipient = this.getView().getModel().getProperty("/recipient/name")
            let sMsg = oBundle.getText("helloMsg", [sRecipient])

            // mostrar a mensagem
            MessageToast.show(sMsg)
        },
        
    })
})