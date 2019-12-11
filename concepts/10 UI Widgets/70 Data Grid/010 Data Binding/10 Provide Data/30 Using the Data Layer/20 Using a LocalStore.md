This type of store is helpful when you use an HTML5 Web Storage (also known as **window.localStorage**) for storing your data. To provide a minimal configuration for a LocalStore, specify its **type** and **name** options as demonstrated below.

	<!--JavaScript-->var gridDataSource = {
		store: {
			type: 'local',
			name: 'myLocalStore'
		}
	};

In addition, you can specify the store's [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') option to gain read-write access to data. A LocalStore has many more options available for configuring. For a full list, refer to the [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/') reference section.

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/concepts/10%20UI%20Widgets/70%20Data%20Grid/010%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Bind_Data') section to learn how to do this.
