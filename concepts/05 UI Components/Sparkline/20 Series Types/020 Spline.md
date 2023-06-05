A *spline* series type sparkline presents data as a set of invisible points that are joined using a spline interpolation. This series type is suitable when you need to visualize a trend in data over intervals, but prefer joining lines to be smooth, in contrast to the [line](/concepts/05%20UI%20Components/Sparkline/20%20Series%20Types/010%20Line.md '/Documentation/Guide/UI_Components/Sparkline/Series_Types/#Line') series type.

![DevExtreme ChartJS Sparkline](/images/ChartJS/SparklineSpline.png)

To specify the *spline* series type, assign *'spline'* to the [type](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/#type') property of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'spline',
		// ...
	};

You can use the [lineColor](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/lineColor.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/#lineColor') and [lineWidth](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/lineWidth.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/#lineWidth') properties to customize the appearance of a *spline* series.

Regular points cannot be displayed in a *spline* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/concepts/05%20UI%20Components/Sparkline/10%20Visual%20Elements/20%20Series%20Points.md '/Documentation/Guide/UI_Components/Sparkline/Visual_Elements/#Series_Points') topic.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleSparklines/"
}
