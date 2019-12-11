When you specify a data source for a chart series, argument and value axes are created automatically. Their ticks/grid lines are arranged so that their labels do not overlap each other. You can correct the default arrangements using axis options (see [Argument Axis](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/050%20Axes/10%20Argument%20Axis.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes/Argument_Axis') and [Value Axis](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/050%20Axes/20%20Value%20Axis.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes/Value_Axis') topics). You can also fully define how to generate them. This topic details how to do this for continuous and logarithmic value and argument axes. To learn how to do this for a discrete argument axis, refer to the [Set a Category Order](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/050%20Axes/40%20Set%20a%20Category%20Order.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes/Set_a_Category_Order') topic.

There are two ways of arranging ticks.

<h4>Set Ticks Explicitly</h4>

Use this approach if you know for certain the exact range of series point values. In this instance, you can set the minimum value, maximum value, a tick and minor tick intervals for the [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/') and/or [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/') configuration objects. For this purpose, use the [min](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/min.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#min'), [max](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/max.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#max'), [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/tickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tickInterval/') and [minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/minorTickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTickInterval/') properties respectively. The following example demonstrates this approach for a continuous argument axis.

	<!--JavaScript-->var chartOptions = {
        // ...
		argumentAxis: {
			min: new Date(2015, 2, 1),
			max: new Date(2015, 2, 31),
			tickInterval: { days: 2 }
			minorTickInterval: { days: 1 }
		}
	};

[note] As an alternative to [minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/minorTickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTickInterval/'), you can use the [minorTickCount](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/minorTickCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#minorTickCount') option.

<h4>Set Ticks Implicitly</h4>

Use this approach when you do not know the exact values of series points. In this instance, you can specify a relative value (factor) of how closely axis labels should be placed to each other. To do so, use the [axisDivisionFactor](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/axisDivisionFactor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#axisDivisionFactor') property. The following example demonstrates this approach for an argument axis.

	<!--JavaScript-->var chartOptions = {
        // ...
		argumentAxis: {
			axisDivisionFactor: 10
		}
	};