Since a point is set up by two coordinates - an argument and a value - there should be two axes: one defining arguments and one defining values. This topic describes the axis of values, which is called _value axis_. To learn about the axis of arguments, refer to the [Argument Axis](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/050%20Axes/10%20Argument%20Axis.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Argument_Axis') topic. To get common information on the **PolarChart** widget's axes, refer to the [Axes](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/050%20Axes/03%20Axes.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes') topic.

![Value Axis](/images/ChartJS/Polar_ValueAxis.png)

There are three types of value axes.

* **Discrete**		
Contains a finite number of values, each of which represents a value of a particular series point. These values are called _categories_ and arranged in a certain order.

* **Continuous**		
Contains an infinite number of values, some of which represent series point values.

* **Logarithmic**		
Contains an infinite number of values, each of which represents a number (logarithm base) raised to a power.

If values in the series' data source represent strings, a _discrete_ axis is created. The axis' categories are ordered as they are listed in the data source. You can set a specific order of categories. For this purpose, use the [categories](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/categories.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#categories') property of the **valueAxis** configuration object. For details, refer to the [Set a Category Order](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/050%20Axes/40%20Set%20a%20Category%20Order.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Set_a_Category_Order') topic.

	<!--JavaScript-->var dataSource = [
		{ angle: 0  , value: 'Sector A' },
		{ angle: 30 , value: 'Sector B' },
		{ angle: 60 , value: 'Sector B' },
		{ angle: 90 , value: 'Sector C' },
		{ angle: 120, value: 'Sector C' },
		{ angle: 150, value: 'Sector C' },
		{ angle: 180, value: 'Sector D' },
		{ angle: 210, value: 'Sector D' },
		{ angle: 240, value: 'Sector C' },
		{ angle: 270, value: 'Sector B' },
		{ angle: 300, value: 'Sector B' },
		{ angle: 330, value: 'Sector B' },
		{ angle: 360, value: 'Sector A' }
	];

![Discrete Value Axis](/images/ChartJS/Polar_DiscreteValueAxis.png)

If values in the series' data source are of numeric or date-time type, a _continuous_ axis is created. The axis ticks/grid lines are arranged so that the axis labels do not overlap each other. The following example demonstrates this.

	<!--JavaScript-->var dataSource = [
		{ angle: 0, value: 85 },
		{ angle: 90, value: 115 },
		{ angle: 180, value: 225 },
		{ angle: 270, value: 192 },
		{ angle: 360, value: 85 },
	];

![Continuous Value Axis](/images/ChartJS/Polar_ContinuousValueAxis.png)

In addition to discrete and continuous types, you can use the _logarithmic_ axis type. This type can be used with numeric data source values only. Each value on a logarithmic axis represents a number (logarithm base) raised to a power. This number is specified by the [logarithmBase](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#logarithmBase') option. The logarithmic axis is useful when you visualize a huge range of data.

You can change the default ticks/grid line arrangement on a continuous or a logarithmic axis. There are two ways of arranging ticks/grid lines manually. They are described in the [Axis Ticks Arrangement](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/050%20Axes/30%20Axis%20Ticks%20Arrangement.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Axis_Ticks_Arrangement') topic.

If you need to create a _discrete_ axis for numeric or date-time values, set the value axis' [type](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#type') property to *'discrete'*, as shown below.

	<!--JavaScript-->var polarChartOptions = {
		valueAxis: {
			type: 'discrete'
		},
		// ...
	};

In some scenarios, you may require the type of the values specified in the data source to be treated as another type. For instance, the data source's value field may come with string values representing dates. In this instance, specify the required type for the values using the value axis' [valueType](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#valueType') property.

	<!--JavaScript-->var polarChartOptions = {
		valueAxis: {
			valueType: 'datetime'
		},
		// ...
	};

The following list gives an overview of the value axis options.

* **Visibility**		
To make the value axis visible/invisible, use the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#visible') property of the **valueAxis** configuration object.

* **Appearance**		
You can change the axis color, width and opacity, using the [color](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#color'), [width](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/width.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#width') and [opacity](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/opacity.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#opacity') properties.

* **Discrete Axis Ticks Arrangement**		
Ticks and grid lines of a discrete axis can be displayed between series points or cross them. To choose the mode that is more appropriate for your series type, use the [discreteAxisDivisionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/discreteAxisDivisionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#discreteAxisDivisionMode') property of the **valueAxis** configuration object. In addition, you can set whether to insert an indent from the axes cross or start categories at the axes cross directly. To set an appropriate variant, use the [valueMarginsEnabled](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/valueMarginsEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#valueMarginsEnabled') property.

* **Continuous Axis Ticks Arrangement**		
You can set whether to display the series' minimum and maximum values with indents from the value axis boundaries or display them at the axis' boundaries. To set an appropriate variant, use the [valueMarginsEnabled](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/valueMarginsEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#valueMarginsEnabled') property. If you insert indents, set values for the [minValueMargin](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/minValueMargin.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#minValueMargin') and [maxValueMargin](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/maxValueMargin.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#maxValueMargin') properties. In addition, you can improve the ticks' arrangement for a date-time axis by setting them at the beginning of each unit interval (e.g., 09/01, 10/01, ... instead of 09/13, 10/13, ...). For this purpose, use the axis' [setTicksAtUnitBeginning](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#setTicksAtUnitBeginning) property.

* **Logarithmic Axis Ticks Arrangement**		
You can specify the logarithm base to use in tick calculation using the [logarithmBase](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#logarithmBase') option.

* **Invert Axis**		
You can invert axis coordinates by setting the [inverted](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/inverted.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#inverted') property to _true_.

Use the **valueAxis** configuration object to define the following axis child elements: [title](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes_Titles), [ticks](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/060%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks'), [grid lines](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/090%20Grid/01%20Grid.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Grid'), [strips](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/100%20Strips.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Strips') and [labels](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/070%20Axis%20Labels.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Labels'). Their options are detailed in the corresponding topics.