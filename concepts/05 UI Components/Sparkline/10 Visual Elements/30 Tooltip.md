A tooltip is a small popup rectangle that contains information about values represented by a sparkline. The tooltip appears when a user hovers the mouse pointer over a sparkline.

![DevExtreme ChartJS Sparkline](/images/ChartJS/SparklineTooltip.png)

Tooltips are configured using fields of the [tooltip](/api-reference/10%20UI%20Components/BaseSparkline/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/tooltip/') object. By default, they are enabled. However, if your scenario requires you to change the visibility of the tooltip, use the [enabled](/api-reference/10%20UI%20Components/BaseSparkline/1%20Configuration/tooltip/enabled.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/tooltip/#enabled') field of the **tooltip** object.

	<!--JavaScript-->var sparklineOptions = {
		tooltip: {
			enabled: true // false
		},
		// ...
	};

Although by default the tooltip displays information about extreme sparkline values, you can configure it to present any information you may find useful. To customize the contents of a tooltip, implement the [customizeTooltip](/api-reference/10%20UI%20Components/dxSparkline/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/tooltip/#customizeTooltip') function. This function must return an object with the **text** field specified.

	<!--JavaScript-->var sparklineOptions = {
		tooltip: {
			customizeTooltip: function (info) {
				return {
					text: '...' // the required text is specified here
				}
			},
			// ...
		},
		// ...
	};

Furthermore, there is a number of additional properties specifying the appearance of the tooltip. All of them are set in the **tooltip** configuration object. A structured overview of these properties is given in the following list.

* **Color**			
You can specify the color of the tooltip using the [color](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/color.md '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/tooltip/#color') property.

* **Font Settings**			
To change the font of the text displayed by the tooltip, use fields of the [font](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/font '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/tooltip/font/') object.

* **Border Appearance**		
You can change the visibility, color, width and other settings of the tooltip border using fields of the [border](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/border '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/tooltip/border/') configuration object.

* **Shadow**		
The tooltip is displayed casting a small shadow. To specify its blurriness, opacity, color and other settings, use [shadow](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/shadow '/Documentation/ApiReference/UI_Components/dxSparkline/Configuration/tooltip/shadow/') object fields.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleSparklines/"
}
