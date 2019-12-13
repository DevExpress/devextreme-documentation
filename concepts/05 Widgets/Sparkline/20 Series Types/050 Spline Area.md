Similarly to [area](/concepts/05%20Widgets/Sparkline/20%20Series%20Types/040%20Area.md '/Documentation/Guide/Widgets/Sparkline/Series_Types/#Area'), the *spline area* series type presents data in the form of a line and a shaded area under it. But unlike in the *area* series, in a *spline area* series, this line is much smoother.

![DevExtreme ChartJS Sparkline](/images/ChartJS/SparklineSplineArea.png)

To specify the *spline area* series type, assign *'splinearea'* to the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type') option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'splinearea',
		// ...
	};

To change the color of a *spline area* sparkline, set the [lineColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/lineColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor') option. Note that the line and the area under it will be painted in this color, with the part under the line in a more transparent fashion. In addition, you can specify the width of the line using the [lineWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/lineWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth') option.

Regular points cannot be displayed in a *spline area* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/concepts/05%20Widgets/Sparkline/10%20Visual%20Elements/20%20Series%20Points.md '/Documentation/Guide/Widgets/Sparkline/Visual_Elements/#Series_Points') topic.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AreaSparklines/"
}
