Values and subvalues are indicated on the gauge scale that is divided by scale ticks. These ticks can be major or minor.

<img src="/Content/images/doc/16_2/ChartJS/CircularGaugeScaleTicks.png" alt="DevExtreme HTML5 JavaScript Gauges  CircularGaugeScaleTicks" style="display:block; margin:0 auto" />

To configure major and minor scale ticks, use the **scale** | [tick](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/tick/') and **scale** | [minorTick](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/minorTick/') configuration objects, respectively.

	<!--JavaScript-->var gaugeOptions = {
		scale: {
			tick: {
				// ...
			},
			minorTick: {
				// ...
			}
		}
    };

Major ticks are visible by default. To display minor ticks, you need to set the **minorTick** | **visible** option to *true*. You can change the visibility of the major ticks using the same option within the **tick** configuration object.

By default, scale ticks are generated automatically. Since ticks are accompanied by [scale labels](/concepts/05%20Widgets/CircularGauge/10%20Visual%20Elements/50%20Scale%20Labels.md '/Documentation/Guide/Widgets/CircularGauge/Visual_Elements/#Scale_Labels'), an optimum tick interval is selected so that the labels do not overlap each other. To turn off automatic tick arrangement, set the **scale** | **label** | **overlappingBehavior** | [useAutoArrangement](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/label/overlappingBehavior/useAutoArrangement.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/label/overlappingBehavior/#useAutoArrangement') option to *false*. 

If you are not satisfied with the automatically generated ticks, you can specify a custom interval for major and minor ticks. To do this, use the [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/tickInterval.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/#tickInterval') and [minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/minorTickInterval.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/#minorTickInterval') options, respectively.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/ScaleMinorTicks/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>

[note] To arrange ticks precisely with a specified tick interval, set the **useAutoArrangement** option to *false*. Otherwise, the specified tick interval will be ignored, but only if arranging ticks with this interval leads to label overlap.

	<!--JavaScript-->var gaugeOptions = {
		scale: {
			tickInterval: 10,
			minorTickInterval: 2,
			label: {
				overlappingBehavior: {
					useAutoArrangement: false
				}
			}
		}
    };

If neither automatically generated ticks nor ticks with a custom interval fit your requirements, you can place major and minor ticks at specific scale values. Assign an array of required values to the [customTicks](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/customTicks.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/#customTicks') or [customMinorTicks](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/customMinorTicks.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/#customMinorTicks') option.

	<!--JavaScript-->var gaugeOptions = {
		scale: {
			customTicks: [4, 42, 85, 36, 14],
			customMinorTicks: [24, 61, 9, 12, 95]
		}
    };

In addition, you can specify the color, length and width of major and minor ticks using the corresponding options of the **tick** or **minorTick** configuration objects.