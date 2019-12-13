To set the value field name, assign it to the **valueField** option. Similarly to the [argumentField](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/30%20Set%20an%20Argument%20Field.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Set_an_Argument_Field/') option, **valueField** is set differently depending on the widget in use.

* **Chart**		
If you have only one series in your chart, specify the **valueField** option within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') object.

		<!--JavaScript-->var chartOptions = {
			//...
			series: {
				valueField: 'year',
				// ...
			}
		};

	If you have several series in your chart, assign an array of objects to the **series** option and specify an individual value field for each object of this array. 

		<!--JavaScript-->var chartOptions = {
			//...
			series: [{
				valueField: 'copper',
				// ...
			}, {
				valueField: 'nickel',
				// ...
			}]
		};

	Certain series types require several value fields to be specified for one series. In these instances, data source fields must be set using options particular to a specific series type. For example, the following code snippet shows how to specify value fields for a [range series](/concepts/05%20Widgets/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/').

		<!--JavaScript-->var rangeDataSource = [
			{ month: 'January', min1: 36, max1: 43.29, min2:  42.12, max2: 49.91 },
			//...
		];
		var chartOptions = {
			//...
			dataSource: rangeDataSource,
			commonSeriesSettings: {
				type: 'rangebar' // type: 'rangearea'
			},
			series: [
				{ rangeValue1Field: 'min1', rangeValue2Field: 'max1' },
				{ rangeValue1Field: 'min2', rangeValue2Field: 'max2' }
			]
		};

	The following code demonstrates how to set value fields for a [financial series](/concepts/05%20Widgets/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Financial_Series/').

		<!--JavaScript-->var stockDataSource = [
			{ date: new Date(1994,2,1), lowPrice: 24.00, highPrice: 25.00, openPrice: 25.00, closePrice: 24.875 },
			//...
		];
		var chartOptions = {
			//...
			dataSource: stockDataSource,
			commonSeriesSettings: {
				type: 'stock' // type: 'candlestick',
			},
			series: {         
				 openValueField: 'openPrice',
				 closeValueField: 'closePrice',
				 lowValueField: 'lowPrice',
				 highValueField: 'highPrice'
			}
		};

	Series of the [Bubble](/concepts/05%20Widgets/Chart/11%20Series%20Types/50%20Bubble%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Bubble_Series/') type slightly differ from other series. Along with the value field, they require the size field to be specified. The code below illustrates how to specify the value and size fields for the *bubble* series.

		<!--JavaScript-->var dataSource = [
			{ month: 'January', val1: 24, size1: 25, val2: 14, size2: 31  },
			//...
		];
		var chartOptions = {
			//...
			dataSource: dataSource,
			commonSeriesSettings: {
				type: 'bubble'
			},
			series: [
				{ valueField: 'val1', sizeField: 'size1' },
				{ valueField: 'val2', sizeField: 'size2' }
			]
		});

* **PieChart**		
To specify the value field for a series in the **PieChart** widget, set the [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#valueField') option within the **series** object.

		<!--JavaScript-->$("#pieChartContainer").dxPieChart({
			//...
			series: {
				valueField: 'copper',
				// ...
			}
		});

* **Sparkline**		
The [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#valueField') option for the **Sparkline** widget must be specified in the root configuration object.

		<!--JavaScript-->$("#sparklineContainer").dxSparkline({
			//...
			valueField: 'year'
		});

At this point, you have created a data source and configured data-binding settings of your widget. If your data source is supposed to be invariable, these actions are sufficient to support a correct operation of your widget. But you may have a scenario that requires a data source to be changed dynamically, and these changes must be reflected in your widget. Refer to the next topic to learn the approaches you can use for updating data in that case.