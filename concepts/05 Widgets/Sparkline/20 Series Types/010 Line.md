A *line* series type sparkline presents data as a line that connects invisible points. This series type is useful when you need to visualize a data trend of specific intervals.

![DevExtreme ChartJS Sparkline](/images/ChartJS/SparklineLine.png)

In the **Sparkline** widget, the *line* series type is used by default.  There may be times, however, when you will need to specify this series type explicitly. To do so, assign *'line'* to the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type') option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'line',
		// ...
	};

You can use the [lineColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/lineColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor') and [lineWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/lineWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth') options to customize the appearance of a *line* series.

Regular points cannot be displayed in a *line* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/concepts/05%20Widgets/Sparkline/10%20Visual%20Elements/20%20Series%20Points.md '/Documentation/Guide/Widgets/Sparkline/Visual_Elements/#Series_Points') topic.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleSparklines/"
}
