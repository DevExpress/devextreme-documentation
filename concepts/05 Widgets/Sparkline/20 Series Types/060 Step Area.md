A *step area* series type sparkline presents data as a line of joined horizontal and vertical lines that connects a set of invisible points. This line, which resembles staircase steps, is complemented with a shaded area beneath it.

![DevExtreme ChartJS Sparkline](/images/ChartJS/SparklineStepArea.png)

To specify the *step area* series type, assign *'steparea'* to the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type') option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'steparea',
		// ...
	};

To change the color of a *step area* sparkline, set the [lineColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/lineColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor') option. Note that both the line and the area under it will be painted in this color, but the area will be more transparent. In addition, you can specify the width of the line using the [lineWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/lineWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth') option.

Regular points cannot be displayed in a *step area* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/concepts/05%20Widgets/Sparkline/10%20Visual%20Elements/20%20Series%20Points.md '/Documentation/Guide/Widgets/Sparkline/Visual_Elements/#Series_Points') topic.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AreaSparklines/"
}
