A series is a group of related data points. The most important characteristic of a series is its type, which determines a specific visual presentation of data. In this topic, you will learn how to set a series type and configure series settings.

![DevExtreme ChartJS Sparkline](/images/ChartJS/SparklineAllTypesWithCaptions.png)

To set the series type that best suits your needs, specify the [type](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/#type') property of the main configuration object. By default, the [line](/concepts/05%20UI%20Components/Sparkline/20%20Series%20Types/010%20Line.md '/Documentation/Guide/UI_Components/Sparkline/Series_Types/#Line') series type is set.

	<!--JavaScript-->var sparklineOptions = {
		type: 'line',
		// ...
	};

Since sparklines are simple in nature, sparkline series offer few configuration properties. The majority of series types, except [bar](/concepts/05%20UI%20Components/Sparkline/20%20Series%20Types/070%20Bar.md '/Documentation/Guide/UI_Components/Sparkline/Series_Types/#Bar') and [win-loss](/concepts/05%20UI%20Components/Sparkline/20%20Series%20Types/080%20Win-Loss.md '/Documentation/Guide/UI_Components/Sparkline/Series_Types/#Win-Loss'), have the [lineColor](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/lineColor.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/#lineColor') and [lineWidth](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/lineWidth.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/#lineWidth') properties to customize series' appearance. In turn, *bar* series have the [barPositiveColor](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/barPositiveColor.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/#barPositiveColor') and [barNegativeColor](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/barNegativeColor.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/#barNegativeColor') properties, and *win-loss* series have [winColor](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/winColor.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/#winColor') and [lossColor](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/lossColor.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/#lossColor') properties for the same purpose.

To learn more about series types featured in the Sparkline UI component, refer to the [Sparkline Series Types](/concepts/05%20UI%20Components/Sparkline/20%20Series%20Types '/Documentation/Guide/UI_Components/Sparkline/Series_Types/') guide.
