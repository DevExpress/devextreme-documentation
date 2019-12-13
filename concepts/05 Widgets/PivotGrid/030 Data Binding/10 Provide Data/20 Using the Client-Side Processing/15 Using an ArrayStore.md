This type of store is great when you need a simple data source with the data lifetime equaling the lifetime of your application. An [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/') is created from an array of plain objects. The code snippet below illustrates the minimal configuration of an ArrayStore that can be used to provide data for the **PivotGrid** widget.

	<!--JavaScript-->var pivotGridDataSource = {
		store: {
			type: 'array',
			data: [
				{   "CustomerID": "WELLI",
					"OrderDate": "2010/07/15",
					"ShipAddress": "Rua do Mercado, 12",
					"ShipCity": "Resende",
					"ShipRegion": "SP",
					"ShipCountry": "Brazil",
					"Freight": 13.97
				},{
					"CustomerID": "TOMSP",
					"OrderDate": "2010/07/05",
					"ShipAddress": "Luisenstr, 48",
					"ShipCity": "Munster",
					"ShipRegion": null,
					"ShipCountry": "Germany",
					"Freight": 11.61
				},{
					"CustomerID": "HANAR",
					"OrderDate": "2010/07/08",
					"ShipAddress": "Rua do Paco, 67",
					"ShipCity": "Rio de Janeiro",
					"ShipRegion": "RJ",
					"ShipCountry": "Brazil",
					"Freight": 65.83
				}
			]
		}
	};

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/concepts/05%20Widgets/PivotGrid/030%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Bind_Data') section to learn how to do this.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/LocalDataSource/"
}
