For charting, the rectangular coordinate system is used to determine each point uniquely on a plane through two numbers, the argument and the value of a point. To define the coordinates, two perpendicular directed lines - the _axes_ - are specified: the axis of arguments and the axis of values.

![Axes](/images/ChartJS/Axes.png)

Depending on the specified data, the axes can be discrete, continuous or logarithmic. For details, refer to the [Argument Axis](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/050%20Axes/10%20Argument%20Axis.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes/Argument_Axis') and [Value Axis](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/050%20Axes/20%20Value%20Axis.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes/Value_Axis') topics.

Axis ticks/grid lines are arranged automatically by default based on chart data source values. However, you can rearrange them the way you like. For details, refer to the [Set a Category Order](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/050%20Axes/40%20Set%20a%20Category%20Order.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes/Set_a_Category_Order') and [Axis Ticks Arrangement](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/050%20Axes/30%20Axis%20Ticks%20Arrangement.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes/Axis_Ticks_Arrangement') topics.

Axis options can be set using the chart's [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/') and [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/') configuration objects. If you need to set the same values for all axes, use the [commonAxisSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/') configuration object.

	<!--JavaScript-->var chartOptions = {
        // ...
		commonAxisSettings: {
			//...
		},
		valueAxis: {
			//...
		},
		argumentAxis: {
			//...
		}
	};

[note]If you have set an option within the **valueAxis** or **argumentAxis** configuration object, it will override the common value that is set using the **commonAxisSettings** object.

If you use several [panes](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/110%20Panes.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Panes') to display series or use multiple value axes on one pane, you should define several value axes. In this instance, **valueAxis** should be an array of objects defining value axes. In addition, you can specify different argument axes for each pane. In this instance, **argumentAxis** should be an array of objects defining argument axis for each pane. The following code demonstrates this.

	<!--JavaScript-->var chartOptions = {
        // ...
		commonAxisSettings: {
			//...
		},
		valueAxis: [
			{ pane: 'bottomPane', name: 'firstAxis' },
			{ pane: 'bottomPane', name: 'secondAxis' },
			{ pane: 'topPane' }
		],
		argumentAxis:  [
			{ pane: 'bottomPane' },
			{ pane: 'topPane' }
		]
	};

In the code above, the **commonAxisSettings** object defines common settings of all axes in all panes.

The following list overviews the common axis options.

* **Visibility**		
To make axes visible/invisible, use the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/#visible') property of the **commonAxisSettings** object.

* **Position**		
It is possible to swap the axes positions. To display the argument axis vertically, and the value axis horizontally, assign *true* to the chart's [rotated](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated') property.

* **Appearance**		
You can change the color, width and opacity for the axes, using the [color](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/#color'), [width](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/width.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/#width') and [opacity](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/opacity.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/#opacity') properties.

The value and argument axes can be drawn with or without [titles](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/060%20Axes%20Titles.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes_Titles'), [ticks](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/080%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axis_Ticks'), [grid lines](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/090%20Grid/01%20Grid.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Grid'), [strips](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/100%20Strips.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Strips') and [labels](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/070%20Axis%20Labels.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axis_Labels').

![Axis Elements](/images/ChartJS/AxisElements.png)

To change the visibility of these elements and set their options, define the [title](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/title '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/title/'), [ticks](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/tick/'), [grid](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/grid/'), [strips](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/strips '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/') and [label](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/label/') objects within the **commonAxisSettings**, **valueAxis** and/or **argumentAxis** configuration objects. For a detailed description of each element, refer to the corresponding document.