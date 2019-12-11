Since a point is set up by two coordinates - an argument and a value - there should be two axes: one defining arguments and one defining values. This topic describes the axis for arguments, which is called the _argument axis_. To learn about the axis of values, refer to the [Value Axis](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/050%20Axes/20%20Value%20Axis.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Value_Axis') topic. To get common information on the **PolarChart** widget's axes, refer to the [Axes](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/050%20Axes/03%20Axes.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes') topic.

There are three types of argument axes.

* **Discrete**		
Contains a finite number of values, each of which represents an argument of a particular series point. These values are called _categories_ and arranged in a certain order.

* **Continuous**	
Contains an infinite number of values, some of which represent series point arguments.

* **Logarithmic**		
Contains an infinite number of values, each of which represents a number (logarithm base) raised to a power.

If arguments in the series' data source represent strings, a _discrete_ axis is created. The axis' categories are ordered as they are listed in the data source. The following example demonstrates this.

	<!--JavaScript-->var dataSource = [
		{ month: 'January', Glendale: 58, Kirkland: 42 },
		{ month: 'April', Glendale: 64, Kirkland: 51 },
		{ month: 'September', Glendale: 73, Kirkland: 62 },
		// ...
	];

![Discrete Argument Axis](/images/ChartJS/Polar_DiscreteArgumentAxis.png)

You can set a specific order for categories. For this purpose, use the [categories](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/categories.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#categories') property of the **argumentAxis** configuration object. For details, refer to the [Set a Category Order](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/050%20Axes/40%20Set%20a%20Category%20Order.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Set_a_Category_Order') topic.

If arguments in the series' data source are numeric or date-time values, a _continuous_ axis is created. The axis ticks/grid lines are arranged so that the axis labels do not overlap each other. The following example demonstrates this.

	<!--JavaScript-->var dataSource = [
		{ angle: 0, value: 85 },
		{ angle: 90, value: 115 },
		{ angle: 180, value: 225 },
		{ angle: 270, value: 192 },
		{ angle: 360, value: 85 },
	];

![Continuous Argument Axis](/images/ChartJS/Polar_ContinuousArgumentAxis.png)

In addition to discrete and continuous types, you can use the _logarithmic_ axis type. This type can be used with numeric data source values only. Each value on the logarithmic argument axis represents a number (logarithm base) raised to a power. This number is specified by the [logarithmBase](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#logarithmBase') option. The logarithmic axis is useful when you visualize a huge range of data.

![Logarithmic Argument Axis](/images/ChartJS/Polar_LogarithmicArgumentAxis.png)

You can change the default ticks/grid lines arrangement on a continuous or a logarithmic axis. There are two ways of arranging ticks/grid lines manually. They are described in the [Axis Ticks Arrangement](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/050%20Axes/30%20Axis%20Ticks%20Arrangement.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Axis_Ticks_Arrangement') topic.

If you need to create a _discrete_ axis for your numeric or date-time arguments, set the argument axis' [type](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#type') property to *'discrete'*, as shown below.

	<!--JavaScript-->var polarChartOptions = {
		argumentAxis: {
			type: 'discrete'
		},
		// ...
	};

In some scenarios, you may require the type of arguments specified in the data source to be treated as another type. For instance, the data source argument field may come with string values representing dates. In this instance, specify the desired type for the arguments using the argument axis' [argumentType](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#argumentType') property.

	<!--JavaScript-->var polarChartOptions = {
		argumentAxis: {
			argumentType: 'datetime'
		},
		// ...
	};

As you can see in the code above, the **argumentAxis** object is used to set custom values for argument axis options.

The following list gives an overview of the argument axis options.

* **Visibility**		
To make the argument axis visible/invisible, use the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#visible') property of the **argumentAxis** configuration object.

* **Appearance**		
You can change the axis color, width and opacity, using the [color](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#color'), [width](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/width.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#width') and [opacity](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/opacity.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#opacity') properties.

* **Discrete Axis Ticks Arrangement**		
Ticks and grid lines on a discrete axis can be displayed between series points (appropriate for bar series) or across them (appropriate for line series). To choose the mode that is more appropriate for your series type, use the [discreteAxisDivisionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/discreteAxisDivisionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#discreteAxisDivisionMode') property of the **argumentAxis** configuration object.

* **Logarithmic Axis Ticks Arrangement**		
You can specify the logarithm base to be used in tick calculation using the [logarithmBase](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#logarithmBase') option.

* **Rotate and Invert Axis**		
To rotate the chart, use the [startAngle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/startAngle.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#startAngle') property. With the [firstPointOnStartAngle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/firstPointOnStartAngle.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#firstPointOnStartAngle') option, the first category of a discrete series can be forced to be at the top.
You can invert axis coordinates by setting the [inverted](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/inverted.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#inverted') property to _true_.

Use the **argumentAxis** configuration object to define the following axis child elements: [title](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes_Titles), [ticks](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/060%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks'), [grid lines](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/090%20Grid/01%20Grid.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Grid'), [strips](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/100%20Strips.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Strips') and [labels](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/070%20Axis%20Labels.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Labels'). Their options are detailed in the corresponding topics.