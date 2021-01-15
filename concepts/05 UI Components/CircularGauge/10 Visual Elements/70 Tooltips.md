A tooltip is a small pop-up rectangle that displays information on a hovered value or subvalue indicator. By default, the tooltip shows the value indicated by the hovered element. However, it is possible to display other information in the tooltip. You can customize the text of the tooltip and its appearance in the way you require.

<img src="/images/ChartJS/CircularGaugeTooltip.png" alt="DevExtreme HTML5 JavaScript Gauges  CircularGaugeTooltip" style="display:block; margin:0 auto" />

Tooltips are not enabled by default. To enable them, set the **enabled** property of the [tooltip](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/tooltip/') object to **true**.

	<!--JavaScript-->var gaugeOptions = {
		tooltip: {
			enabled: true
		}
    };

You can change default tooltip settings by defining the properties within the **tooltip** configuration object. Some of these properties are categorized and listed below.

* **Text Customization and Formatting**    
By default, a tooltip displays the value of a hovered UI component element without formatting. Set the [format](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/tooltip/'#format) property to format this value. When text customization is required, assign a function specifying the text to be shown to the [customizeTooltip](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/tooltip/'#customizeTooltip) property. Learn more in the [Data Formatting](/concepts/05%20UI%20Components/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/UI_Components/Common/Data_Visualization_Widgets/Data_Formatting/') topic.

* **Font Settings**    
To customize the appearance of the tooltip text, define the font properties within the [font](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/tooltip/'font/) configuration object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/GaugeTooltip/"
}
