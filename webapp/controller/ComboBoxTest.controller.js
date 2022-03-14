sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.controller.ComboBoxTest", {
        onInit: function() {
            let oViewModel = new JSONModel({})
            this.getView().setModel(oViewModel, 'ui')

            const aConnections = []
            for (let i = 0; i < 110; i++) {
                aConnections.push({
                    key: String(i),
                    value: String(i)
                })                
            }
            oViewModel.setSizeLimit(aConnections.length)
            oViewModel.setProperty('/connections', aConnections);
            oViewModel.setProperty('/connections2', aConnections);
        },

        onConnectionChange(oEvent) {
            const sConnectionId = oEvent.mParameters.selectedItem.getKey();
            this.sConnectionId = sConnectionId;
            const oUIModel = this.getView().getModel('ui');
            oUIModel.setProperty('/selectedConnection', sConnectionId);
          },

        onConnectionChange2(oEvent) {
            const sConnectionId = oEvent.mParameters.selectedItem.getKey();
            this.sConnectionId = sConnectionId;
            const oUIModel = this.getView().getModel('ui');
            oUIModel.setProperty('/selectedConnection2', sConnectionId);
          }
    })
})