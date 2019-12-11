This type of store is great when you need a simple data source with the data lifetime equaling the lifetime of your application. An ArrayStore is created from an array of plain objects. Your widget creates it automatically when such an array is specified for it (see [Using an Array of Objects](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/10%20Provide%20Data/20%20Using%20an%20Array%20of%20Objects.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/#Using_an_Array_of_Objects')). However, you may need to create an ArrayStore explicitly if you need to handle the events of data loading, updating, etc., in a special way on the store level. The code snippet below illustrates the creating of a DataSource on the base of an ArrayStore. This DataSource can be used to provide data for the **Chart**, **PieChart** or **Sparkline** widget.

	<!--JavaScript-->var dataSource = new DevExpress.data.DataSource({
		store: {
			type: 'array',
			data: [
				{ year: 2005, value: 2450 },
				{ year: 2006, value: 2156 },
				// ...
				{ year: 2014, value: 3650 }
			]
		},
		paginate: false
	});

[note]We recommend turning pagination off when using a DataSource. This action will prevent your data from partitioning.

In addition, you can specify the store's [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') option to get a read-write access to data. An ArrayStore has many more options available for configuring. For the full list of them, refer to the [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/') reference section.

After you have created a DataSource, you need to bind it to your chart. Refer to the [Bind Data](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Bind_Data/') section to learn how to do this.
