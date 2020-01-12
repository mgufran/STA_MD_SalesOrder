jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"mg/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"mg/test/integration/pages/App",
	"mg/test/integration/pages/Browser",
	"mg/test/integration/pages/Master",
	"mg/test/integration/pages/Detail",
	"mg/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "mg.view."
	});

	sap.ui.require([
		"mg/test/integration/NavigationJourneyPhone",
		"mg/test/integration/NotFoundJourneyPhone",
		"mg/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});