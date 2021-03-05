In addition to the [axis ticks](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/060%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Axis_Ticks'), the PolarChart UI component provides the capability to draw minor ticks.  Minor ticks divide an axis segment that lies between two neighboring axis ticks. 

![Minor Ticks](/images/ChartJS/Polar_Minor_Ticks.png)

Argument axis' minor ticks are configured using the **argumentAxis**&nbsp;|&nbsp;[minorTick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/minorTick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/minorTick/') object, value axis' &#8212; the **valueAxis**&nbsp;|&nbsp;[minorTick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/minorTick/') object, and both are configured using the **commonAxisSettings**&nbsp;|&nbsp;[minorTick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/minorTick/') object.

You can display minor ticks by setting the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/minorTick/visible.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/minorTick/#visible') property to **true**. The minor ticks will be arranged automatically. You can affect the ticks arrangement using the [minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/minorTickInterval '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/minorTickInterval/') or [minorTickCount](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/minorTickCount.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/#minorTickCount') properties of corresponding axis.

	<!--JavaScript-->var polarChartOptions = {
		valueAxis: {
			minorTick: {
				// ...
			}
		},
		// ...
	};