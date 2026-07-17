A tooltip is a small pop-up rectangle that displays information on a hovered value or subvalue indicator. By default, the tooltip shows the value indicated by the hovered element. However, it is possible to display other information in the tooltip. You can customize tooltip text and its appearance to suit your requirements.

<img src="/images/ChartJS/LinearGaugeTooltip.png" alt="DevExtreme HTML5 JavaScript Gauges LinearGaugeTooltip" style="display:block; margin:0 auto" />

Tooltips are not enabled by default. To enable them, set the **enabled** property of the [tooltip](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/tooltip/') object to **true**.

	<!--JavaScript-->var gaugeOptions = {
		tooltip: {
			enabled: true
		}
    };

You can change default tooltip settings by defining properties within the **tooltip** configuration object. Several of these properties are categorized and listed below.

* **Text Customization and Formatting**    
By default, a tooltip displays the value of a hovered UI component element without formatting. Set the [format](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/tooltip/#format') property to format this value. When text customization is required, assign a function that specifies the text to be shown to the [customizeTooltip](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/tooltip/#customizeTooltip') property. Learn more in the [Value Formatting](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting '/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/00%20Value%20Formatting.md') topic.

* **Font Settings**    
To customize tooltip text appearance, define font properties within the [font](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/font '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/tooltip/font/') configuration object.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/Tooltip/"
}

