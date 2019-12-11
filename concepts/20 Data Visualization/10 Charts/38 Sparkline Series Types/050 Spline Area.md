Similarly to [area](/concepts/20%20Data%20Visualization/10%20Charts/38%20Sparkline%20Series%20Types/040%20Area.md '/Documentation/Guide/Data_Visualization/Charts/Sparkline_Series_Types/#Area'), the *spline area* series type presents data in the form of a line and a shaded area under it. But unlike in the *area* series, in a *spline area* series, this line is much smoother.

![DevExtreme ChartJS Sparkline](/images/ChartJS/SparklineSplineArea.png)

To specify the *spline area* series type, assign *'splinearea'* to the [type](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline/1%20Configuration/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type') option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'splinearea',
		// ...
	};

To change the color of a *spline area* sparkline, set the [lineColor](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline/1%20Configuration/lineColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor') option. Note that the line and the area under it will be painted in this color, with the part under the line in a more transparent fashion. In addition, you can specify the width of the line using the [lineWidth](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline/1%20Configuration/lineWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth') option.

Regular points cannot be displayed in a *spline area* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/concepts/20%20Data%20Visualization/10%20Charts/37%20Sparkline%20Elements/20%20Series%20Points.md '/Documentation/Guide/Data_Visualization/Charts/Sparkline_Elements/#Series_Points') topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartssparklinessparklinesarea/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>