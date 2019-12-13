A series point is a visual representation of a data point. In the majority of series types, series points are invisible and used only internally to build a sparkline on them. However, in the *bar* and *win-loss* series types, series points represented by bars are, in fact, visible. This is so, because these bars are not only series points, but also a series itself. For more information about *bar* and *win-loss* series, refer to the [Bar](/concepts/05%20Widgets/Sparkline/20%20Series%20Types/070%20Bar.md '/Documentation/Guide/Widgets/Sparkline/Series_Types/#Bar') and [Win-Loss](/concepts/05%20Widgets/Sparkline/20%20Series%20Types/080%20Win-Loss.md '/Documentation/Guide/Widgets/Sparkline/Series_Types/#Win-Loss') topics.

Although regular series points cannot be indicated on a sparkline, certain series points can. These are points that represent extreme values, such as maximum and minimum, first and last.

[note]In *bar* and *win-loss* series, extreme points are represented by bars.

![DevExtreme ChartJS Sparkline](/images/ChartJS/SparklineExtremePoints.png)

To make the maximum and minimum series points indicated on a sparkline, set the [showMinMax](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/showMinMax.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#showMinMax') option to **true**.

	<!--JavaScript-->var sparklineOptions = {
		showMinMax: true,
		// ...
	};

Additionally, you can change the color of these points using the [minColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/minColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#minColor') and [maxColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/maxColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#maxColor') options. These options specify the color of a bar in *bar* and *win-loss* series, or the color of a series point border in other series.

The first and last points are indicated on a sparkline by default. However, if you need to change their visibility, use the [showFirstLast](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/showFirstLast.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#showFirstLast') option.

	<!--JavaScript-->var sparklineOptions = {
		showFirstLast: true,
		// ...
	};

Additionally, you can change the color of these points using the [firstLastColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/firstLastColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#firstLastColor') option. Similarly to the **minColor** and **maxColor** options, this option specifies the color of a bar in *bar* and *win-loss* series, or the color of a series point border in other series.

In line- and area-like series, extreme points have several additional settings. You can choose a symbol that will represent extreme points on a sparkline. For this purpose, use the [pointSymbol](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/pointSymbol.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#pointSymbol') option. Moreover, you can specify the size and color of extreme points using the [pointSize](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/pointSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#pointSize') and [pointColor](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/pointColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#pointColor') options.