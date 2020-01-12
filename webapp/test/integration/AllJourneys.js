jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderSet in the list
// * All 3 SalesOrderSet have at least one ToLineItems

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
		"mg/test/integration/MasterJourney",
		"mg/test/integration/NavigationJourney",
		"mg/test/integration/NotFoundJourney",
		"mg/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});