Chart [axes](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/050%20Axes/03%20Axes.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Axes') can be displayed with titles, which you can utilize to provide explanatory text for axis value units.

![Axis Titles](/images/ChartJS/AxesTitles.png)

To specify the title text, use the [title](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/title '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/title/') property of the chart's **valueAxis** and **argumentAxis** configuration objects, as demonstrated in the code below.

	<!--JavaScript-->var chartOptions = {
		valueAxis: {
			title: 'Values',
			// ...
		}
	};

The **title** property may also be assigned an object that customizes default title options. In that case, the title text must be assigned to the **text** field of this object.

	<!--JavaScript-->var chartOptions = {
        // ...
		valueAxis: {
			title: {
				text: 'Values',
				// ...
			}
		}
	};

The following list provides an overview of title options.

* **Title Location**		
You can move a title closer to or farther from the axis. For this purpose, use the [margin](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/title/margin.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/title/#margin') property of the **title** configuration object.

* **Text Font**		
If you require a change in the title's font, specify the [font](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/title/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/title/font/') property of the **title** configuration object.		

If you need to set the same options for both the value and argument axes, use the **title** property of the [commonAxisSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/') configuration object.

	<!--JavaScript-->var chartOptions = {
		commonAxisSettings: {
			title: {
				text: 'Values',
				margin: 10
			},
			// ...
		}
	};