[OData](https://www.odata.org) is a universal open protocol for consuming data APIs. The DevExtreme data layer provides a special type of store to access OData web services, called ODataStore. The following code is sufficient to provide data for **DataGrid** using an ODataStore.

	<!--JavaScript-->var gridDataSource = {
		store: {
			type: 'odata',
			url: 'http://url/to/the/source'
		}
	};

In addition, you can specify the store's [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key') option to have a read-write access to data. In some cases, this configuration is not enough for a ODataStore to support proper operation. This may occur due to the same-origin policy restrictions. For more information, read the [Note on Same-Origin Policy](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/9%20Note%20On%20Same-Origin%20Policy.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Note_On_Same-Origin_Policy') topic.

An ODataStore has many more options available for configuring. For the full list of them, refer to the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') reference section.

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/concepts/10%20UI%20Widgets/70%20Data%20Grid/010%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Bind_Data') section to learn how to do this.
