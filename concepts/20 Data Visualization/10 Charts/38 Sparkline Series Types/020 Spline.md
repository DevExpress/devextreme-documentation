A *spline* series type sparkline presents data as a set of invisible points that are joined using a spline interpolation. This series type is suitable when you need to visualize a trend in data over intervals, but prefer joining lines to be smooth, in contrast to the [line](/concepts/20%20Data%20Visualization/10%20Charts/38%20Sparkline%20Series%20Types/010%20Line.md '/Documentation/Guide/Data_Visualization/Charts/Sparkline_Series_Types/#Line') series type.

![DevExtreme ChartJS Sparkline](/images/ChartJS/SparklineSpline.png)

To specify the *spline* series type, assign *'spline'* to the [type](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline/1%20Configuration/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type') option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'spline',
		// ...
	};

You can use the [lineColor](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline/1%20Configuration/lineColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor') and [lineWidth](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline/1%20Configuration/lineWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth') options to customize the appearance of a *spline* series.

Regular points cannot be displayed in a *spline* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/concepts/20%20Data%20Visualization/10%20Charts/37%20Sparkline%20Elements/20%20Series%20Points.md '/Documentation/Guide/Data_Visualization/Charts/Sparkline_Elements/#Series_Points') topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartssparklinessparklinesline/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>