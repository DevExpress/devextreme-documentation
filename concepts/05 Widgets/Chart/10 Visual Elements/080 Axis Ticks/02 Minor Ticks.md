In addition to the [axis ticks](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/080%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axis_Ticks'), the **Chart** widget provides the capability to draw minor ticks.  Minor ticks divide an axis segment that lies between two neighboring axis ticks. 

![Minor Ticks](/images/ChartJS/Chart_Minor_Ticks.png)

Vertical axis' minor ticks are configured using the **argumentAxis**&nbsp;|&nbsp;[minorTick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/') object, horizontal &#8212; the **valueAxis**&nbsp;|&nbsp;[minorTick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/') object and both are configured using the **commonAxisSettings**&nbsp;|&nbsp;[minorTick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/minorTick/') object.

You can display minor ticks by setting the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/minorTick/#visible') option to *true*. The minor ticks will be arranged automatically. You can affect the ticks arrangement using the [minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/minorTickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTickInterval/') or [minorTickCount](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/minorTickCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#minorTickCount') options of corresponding axis.

	<!--JavaScript-->var chartOptions = {
		valueAxis: {
			minorTick: {
				//...
			}
		},
		//...
	};