Ticks divide an axis into sections by a step that is determined automatically, or by the [tickInterval](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/argumentAxis/tickInterval '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/tickInterval/') and [axisDivisionFactor](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/argumentAxis/axisDivisionFactor.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/#axisDivisionFactor') properties of an axis. Ticks improve the comprehension of chart data. 

![Axis Ticks](/images/ChartJS/Polar_Ticks.png)

Ticks are child elements of the argument and value axes. To change their settings, define the [tick](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/tick/''') object within the **argumentAxis**, **valueAxis** or **commonAxisSettings** configuration object.

	<!--JavaScript-->var polarChartOptions = {
		commonAxisSettings: {
			tick: {
				visible: true,
			    color: 'black'
			}
		},
		// ...
	};


The following list provides an overview of tick properties.

* **Visibility**		
To make ticks visible/invisible, use the [tick](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/tick/''') object's [visible](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/tick/'''#visible) property.

* **Appearance**		
You can change the ticks' default dimensions, color and opacity using the [width](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/tick/'''#width), [length](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/tick/'''#length), [color](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/tick/'''#color) and [opacity](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/tick/'''#opacity) properties of the [tick](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/tick/''') object.
