An *area* series type sparkline is helpful when you need to emphasize a change in values. Data in this series type is presented by a broken line joining invisible points and a shaded area under this line.

![DevExtreme ChartJS Sparkline](/images/ChartJS/SparklineArea.png)

To specify the *area* series type, assign *'area'* to the [type](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline/1%20Configuration/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type') option of the main configuration object.

	<!--JavaScript-->var sparklineOptions = {
		type: 'area',
		// ...
	};

To change the color of an *area* sparkline, set the [lineColor](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline/1%20Configuration/lineColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineColor') option. Note that both the line and the area under it will be painted in this color, but the area will be more transparent. In addition, you can specify the width of the line using the [lineWidth](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline/1%20Configuration/lineWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#lineWidth') option.

Regular points cannot be displayed in an *area* sparkline, but you can make extreme points visible. For further information, refer to the [Series Points](/concepts/20%20Data%20Visualization/10%20Charts/37%20Sparkline%20Elements/20%20Series%20Points.md '/Documentation/Guide/Data_Visualization/Charts/Sparkline_Elements/#Series_Points') topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartssparklinessparklinesarea/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>