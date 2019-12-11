This type of store is helpful when you use an HTML5 Web Storage (also known as <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">window.localStorage</a>) for storing your data. To create a DataSource on the base of a LocalStore, specify the **type** and **name** options of the **store** object as demonstrated below.

	<!--JavaScript-->var dataSource = new DevExpress.data.DataSource({
		store: {
			type: 'local',
			name: 'MyLocalStore'
		},
		paginate: false
	});

[note]We recommend turning pagination off when using a DataSource. This action will prevent your data from partitioning.

In addition, you can specify the store's [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') option to have a read-write access to data. 

After that, populate the store (which lays under the DataSource) with data using its [insert(values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/insert(values).md '/Documentation/ApiReference/Data_Layer/LocalStore/Methods/#insertvalues') method.

	dataSource.store().insert({ year: 2005, value: 2450 });

A LocalStore has many more options available for configuring. For a full list, refer to the [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/') reference section.

After you have created a DataSource, you need to bind it to your widget. Refer to the [Bind Data](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Bind_Data/') section to learn how to do this.
