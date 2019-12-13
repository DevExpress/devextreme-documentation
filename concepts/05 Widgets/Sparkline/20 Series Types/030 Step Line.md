A *step line* series type sparkline presents data as a line that connects a set of invisible points by using horizontal and vertical lines. This resulting sparkline resembles a series of steps.

![DevExtreme ChartJS Sparkline](/images/ChartJS/SparklineStepLine.png)

To specify the *step line* series type, assign *'stepline'* to the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type') option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'stepline',
		// ...
	};

You can use the [lineColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/lineColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor') and [lineWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/lineWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth') options to customize the appearance of a *step line* series.

Regular points cannot be displayed in a *step line* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/concepts/05%20Widgets/Sparkline/10%20Visual%20Elements/20%20Series%20Points.md '/Documentation/Guide/Widgets/Sparkline/Visual_Elements/#Series_Points') topic.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleSparklines/"
}
