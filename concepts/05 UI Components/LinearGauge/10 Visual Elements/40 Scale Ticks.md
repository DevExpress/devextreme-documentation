Values and subvalues are indicated on the gauge scale that is divided by scale ticks. These ticks can be major or minor.

<img src="/images/ChartJS/LinearGaugeScaleTicks.png" alt="DevExtreme HTML5 JavaScript Gauges LinearGaugeScaleTicks" style="display:block; margin:0 auto" />

To configure major and minor scale ticks, use the **scale**.[tick](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/scale/tick '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/tick/') and **scale**.[minorTick](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/scale/minorTick '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/minorTick/') configuration objects, respectively.

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

Major ticks are visible by default. To display minor ticks, you need to set the **minorTick**.**visible** property to **true**. You can change the visibility of the major ticks using the same property within the **tick** configuration object.

By default, scale ticks are generated automatically. If you are not satisfied with the automatically generated ticks, you can specify a custom interval for major and minor ticks. To do this, use the [tickInterval](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/scale/tickInterval.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/#tickInterval') and [minorTickInterval](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/scale/minorTickInterval.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/#minorTickInterval') properties, respectively.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/ScaleCustomTickInterval/"
}

If neither automatically generated ticks nor ticks with a custom interval fit your requirements, you can place major and minor ticks at specific scale values. Assign an array of required values to the [customTicks](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/scale/customTicks.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/#customTicks') or [customMinorTicks](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/scale/customMinorTicks.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/scale/#customMinorTicks') property.

	<!--JavaScript-->var gaugeOptions = {
		scale: {
			customTicks: [4, 42, 85, 36, 14],
			customMinorTicks: [24, 61, 9, 12, 95]
		}
    };

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/ScaleCustomTickValues/"
}

In addition, you can specify the color, length and width of major and minor ticks using the corresponding properties of the **tick** or **minorTick** configuration objects.