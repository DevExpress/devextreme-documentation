This type of Store is helpful when you use an HTML5 Web Storage (also known as **window.localStorage**) for storing your data. To provide a minimal configuration for a [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/'), specify its **type** and **name** options as demonstrated below.

	<!--JavaScript-->var pivotGridDataSource = {
		store: {
			type: 'local',
			name: 'myLocalStore'
		}
	};

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/030%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/UI_Widgets/Pivot_Grid/Data_Binding/#Bind_Data') section to learn how to do this.
