For the purpose of more intelligible data visualization, scale values can be combined into ranges, each of which can be colored differently. For example, you can indicate the ranges of warm and cold temperatures.

<img src="/Content/images/doc/19_2/ChartJS/CircularGaugeRangeContainer.png" alt="DevExtreme HTML5 JavaScript Gauges  CircularGaugeRangeContainer" style="display:block; margin:0 auto" />

 To specify the ranges, assign an array of objects defining these ranges to the [ranges](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/rangeContainer/ranges '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/ranges/') option of the **rangeContainer** configuration object.

	<!--JavaScript-->var gaugeOptions = {
        rangeContainer: {
            ranges: [
				{ startValue: -50, endValue: -30, color: 'midnightblue' },
				{ startValue: -30, endValue: -15, color: 'blue' }
				// ...
			]
        }
    };

As you can see from the code above, each range is defined by its start and end values and, additionally, a color.

Besides the options that apply to ranges, there are several options that apply to the range container itself. They can be configured within the **rangeContainer** object. A brief overview of them is explained below.

- **Appearance**		
If you do not need to specify a particular color for each range, you can apply one of the [predefined palettes](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/10%20Palettes/00%20Palettes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes') using the [palette](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/rangeContainer/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/#palette') option. However, when a specific color is assigned to a range, it overrides the color specified by the palette. If a range container does not have any ranges, or the ranges do not cover the whole range container, you can specify a color for the range container itself. For this purpose, use the [backgroundColor](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/rangeContainer/backgroundColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/#backgroundColor') option. In addition, you can change the [width](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/1%20Configuration/rangeContainer/width.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/#width') of the range container or its [offset](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/rangeContainer/offset.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/#offset') from a scale using the corresponding options.

- **Geometry**	
You can specify how to locate the range container relatively to the scale. To do this, specify the [orientation](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/1%20Configuration/rangeContainer/orientation.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/#orientation') option.
