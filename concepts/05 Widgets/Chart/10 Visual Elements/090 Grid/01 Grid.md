A Grid is a set of vertical and horizontal lines that improves the readability of chart data. The grid lines are drawn from axis ticks through the entire chart. If you use grid lines on your chart, it is not necessary to make ticks visible.

![Grid](/images/ChartJS/Grids.png)

Grid lines are child elements of the argument and value axes. To change their settings, define the [grid](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/grid/') object within the **argumentAxis**, **valueAxis** or **commonAxisSettings** configuration object.

	<!--JavaScript-->var chartOptions = {
		commonAxisSettings: {
			grid: {
				//...
			}
		},
		//...
	};

The following list overviews grid options.

* **Visibility**		
To make a grid visible/invisible, use the **grid** object's **visible** property.

* **Appearance**		
You can change the grid's default color, width and opacity using the **color**, **width** and **opacity** properties of the **grid** object.
