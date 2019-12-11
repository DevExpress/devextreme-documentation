A grid is a set of lines that improves the readability of chart data. Grid lines are drawn from axis ticks through the entire chart at the tick's value or argument. If you use grid lines on your chart, it is not necessary to make ticks visible.

![Grid](/images/ChartJS/Polar_Grids.png)

Grid lines are child elements of the argument and value axes. To change their settings, define the [grid](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/grid/') object within the **argumentAxis**, **valueAxis** or **commonAxisSettings** configuration object.

	<!--JavaScript-->var polarChartOptions = {
		commonAxisSettings: {
			grid: {
				//...
			}
		},
		//...
	};

The following list overviews grid options.

* **Visibility**		
To make a grid visible/invisible, use the **grid** object's [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/grid/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/grid/#visible') property.

* **Appearance**		
You can change the grid's default color, width and opacity using the [color](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/grid/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/grid/#color'), [width](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/grid/width.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/grid/#width') and [opacity](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/grid/opacity.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/grid/#opacity') properties of the **grid** object.