sap.ui.define([
    "sap/ui/demo/walkthrough/model/formatter",
    "sap/ui/model/resource/ResourceModel"
], function (formatter, ResourceModel) {
    "use strict"

    QUnit.module("Formatting functions", {
        beforeEach: function () {
            this._oResourceModel = new ResourceModel({
                bundleUrl: sap.ui.require.toUrl("sap/ui/demo/walkthrough") + "/i18n/i18n.properties"
            })
        },
        afterEach: function () {
            this._oResourceModel.destroy()
        }
    })

    QUnit.test("Should return the translated texts", function (assert) {
        //.stub() é tipo um .mock(), mas vem da biblioteca SinonJS
        const oModel = this.stub()
        oModel.withArgs("i18n").returns(this._oResourceModel)
        const oViewStub = {
            getModel: oModel
        }
        const oControllerStub = {
            getView: this.stub().returns(oViewStub)
        }

        //System under test
        const fnInsolatedFormatter = formatter.statusText.bind(oControllerStub)

        //Assert
        assert.strictEqual(fnInsolatedFormatter("A"), "New", "The long text for status A is correct")
        assert.strictEqual(fnInsolatedFormatter("B"), "In Progress", "The long text for status B is correct")
        assert.strictEqual(fnInsolatedFormatter("C"), "Done", "The long text for status C is correct")
        assert.strictEqual(fnInsolatedFormatter("Foo"), "Foo", "The long text for status Foo is correct")
    })
})