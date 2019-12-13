To display a chart in the **RangeSelector** background, provide data for it using the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#dataSource') option. Next, specify the fields to be used as the argument and value fields. To do this, use the **argumentField** and **valueField** options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/chart/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/#series') object. In case you have several chart series, their common settings can be specified within the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/chart/commonSeriesSettings.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/#commonSeriesSettings') object.

	<!--JavaScript-->
	var rangeSelectorOptions = {
		dataSource: [
			{ x: 10, y1: 0, y2: 10 },
			{ x: 15, y1: 6, y2: 12 },
			{ x: 20, y1: 8, y2: 15 },
			{ x: 30, y1: 10, y2: 10 },
			{ x: 50, y1: 16, y2: 5 }
		],
		chart: {
			commonSeriesSettings: {
				argumentField: 'x'
			},
			series: [
				{ valueField: 'y1' },
				{ valueField: 'y2' }
			]
		}
	};

Additionally, you can [set up a color](/concepts/05%20Widgets/RangeSelector/10%20Visual%20Elements/40%20Background/50%20Setting%20Up%20a%20Color.md '/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/#Background/Setting_Up_a_Color') for the range selector's background using the **background**.**color** option. In this case, a chart will be displayed on the background that will be painted in the specified color.

Besides displaying a chart in the background, the **RangeSelector** widget can be bound to the [Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/') widget in order to perform zooming and scrolling on the chart. Refer to the [End-User Interaction](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/') topic to learn more about these advanced features.

<a href="/Demos/WidgetsGallery/Demo/RangeSelector/ChartOnBackground/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Chart on Background Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Range_Selector/CustomizedChartOnBackground/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Customized Chart on Background Demo</a>


