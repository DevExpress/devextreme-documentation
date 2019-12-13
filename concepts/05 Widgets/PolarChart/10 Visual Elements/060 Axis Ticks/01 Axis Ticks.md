Ticks divide an axis into sections by a step that is determined automatically, or by the [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/tickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/tickInterval/') and [axisDivisionFactor](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/axisDivisionFactor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#axisDivisionFactor') options of an axis. Ticks improve the comprehension of chart data. 

![Axis Ticks](/images/ChartJS/Polar_Ticks.png)

Ticks are child elements of the argument and value axes. To change their settings, define the [tick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/') object within the **argumentAxis**, **valueAxis** or **commonAxisSettings** configuration object.

	<!--JavaScript-->var polarChartOptions = {
		commonAxisSettings: {
			tick: {
				visible: true,
			    color: 'black'
			}
		},
		// ...
	};


The following list provides an overview of tick options.

* **Visibility**		
To make ticks visible/invisible, use the [tick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/') object's [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/tick/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/#visible') property.

* **Appearance**		
You can change the ticks' default dimensions, color and opacity using the [width](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/tick/width.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/#width'), [length](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/tick/length.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/#length'), [color](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/tick/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/#color') and [opacity](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/tick/opacity.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/#opacity') properties of the [tick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/tick/') object.
