[OData](https://www.odata.org) is a universal open protocol for consuming data APIs. The DevExtreme data library provides a special type of Store to access OData web services, called [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'). The following code is sufficient to provide data for **PivotGrid** using an ODataStore.

	<!--JavaScript-->var pivotGridDataSource = {
		store: {
			type: 'odata',
			url: 'http://url/to/the/source'
		}
	};


An ODataStore has many more options available for configuring. For the full list, refer to the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') reference section.

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/030%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/UI_Widgets/Pivot_Grid/Data_Binding/#Bind_Data') section to learn how to do this.
