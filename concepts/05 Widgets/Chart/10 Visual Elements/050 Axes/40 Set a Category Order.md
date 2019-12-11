When specifying [data for a series](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/10%20Provide%20Data '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/') in a chart with a [discrete axis](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/050%20Axes/10%20Argument%20Axis.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes/Argument_Axis'), the order of categories on this axis is determined by the order in the series defined first. You can set a specific order of the categories. For this purpose, use the axis' [categories](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/categories.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#categories') property.

	<!--JavaScript-->var chartOptions = {
		argumentAxis: {
			categories: ['January', 'February', 'March']
		},
		//...
	};

The example below demonstrates the use of the **categories** property. Take a note of the following.

* Categories are ordered differently in the example data source. However, you can see that the specifically set order is used in the resulting chart.		
* The *"June"* category is not included in the **categories** array, but there is a value specified for this category in the first series. However, you can see that the *"June"* category is added in the resulting chart. That is because the "missed" categories are added to the end of the specified **categories** array.