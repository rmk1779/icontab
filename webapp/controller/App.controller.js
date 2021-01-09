sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterType"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Filter, FilterType) {
		"use strict";

		return Controller.extend("icontab.controller.App", {
			onInit: function () {
                     var x = 20;
			},

			onFilterSelect: function(oEvent){
			
				let aFilters = [];
				let sKey = oEvent.getSource().getSelectedKey();
				let oTable = this.getView().byId("idProductsTable");
				let oBinding = oTable.getBinding("items");

				if(sKey === "Ok"){

					let stDate = oTable.getItems()[0].getBindingContext().getObject().StartDate;

					let oFilterDate = new Filter("StartDate", "LT", stDate);
					aFilters.push(oFilterDate);

				}
				else if(sKey === "Heavy"){

					let stDate = oTable.getItems()[0].getBindingContext().getObject().StartDate;

					let oFilterDate = new Filter("StartDate", "GT", stDate);
					aFilters.push(oFilterDate);

				}else if(sKey === "Overweight"){

					let stDate = oTable.getItems()[0].getBindingContext().getObject().StartDate;

					let oFilterDate = new Filter("StartDate", "EQ", stDate);
					aFilters.push(oFilterDate);

				}

				oBinding.filter(aFilters);

				// oTable.bindItems("/EmpDetailsSet", oTemplate, null, aFilters);

			}
		});
	});
