This type of Store is helpful when you use an HTML5 Web Storage (also known as <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">window.localStorage</a>) for storing your data. To provide a minimal configuration for a [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/'), specify its **type** and **name** options as demonstrated below.

	<!--JavaScript-->var pivotGridDataSource = {
		store: {
			type: 'local',
			name: 'myLocalStore'
		}
	};

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/concepts/05%20Widgets/PivotGrid/030%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Bind_Data') section to learn how to do this.
