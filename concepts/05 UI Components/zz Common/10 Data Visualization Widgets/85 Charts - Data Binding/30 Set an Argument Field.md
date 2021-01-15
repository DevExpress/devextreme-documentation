After you have bound data to your UI component, you need to specify which fields of a data source object must be used to provide arguments and values for chart points. To specify the argument field name, assign it to the **argumentField** property. This property can be specified differently depending on the UI component you use.

* **Chart**		
Usually, **Chart** contains several series that have the same argument field. You can specify the argument field for all these series at once within the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') object.

		<!--JavaScript-->var chartOptions = {
			//...
			commonSeriesSettings: {
				argumentField: 'year'
			}
		};

	Similarly, you can specify the **argumentField** property within the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') object in case you have only one series in your chart.

		<!--JavaScript-->var chartOptions = {
			//...
			series: {
				argumentField: 'year',
				// ...
			}
		};

	In rare cases, you may need different argument fields for different series. Then, assign an array to the **series** property and specify the **argumentField** property in each object of this array.

		<!--JavaScript-->var chartOptions = {
			//...
			series: [{
				argumentField: 'year1990',
				// ...
			}, {
				argumentField: 'year2000',
				// ...
			}]
		};

* **PieChart**		
To specify an argument field for a series in the **PieChart** UI component, set the [argumentField](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/argumentField.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#argumentField') property within the **series** object.

		<!--JavaScript-->$("#pieChartContainer").dxPieChart({
			//...
			series: {
				argumentField: 'year',
				// ...
			}
		};

* **Sparkline**		
The [argumentField](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/argumentField.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/#argumentField') property for the **Sparkline** UI component must be specified in the root configuration object.

		<!--JavaScript-->$("#sparklineContainer").dxSparkline({
			//...
			argumentField: 'year'
		};

To finish setting up the minimal configuration for you UI component, specify one or several value fields for your series. To learn how to do this, refer to the next topic.