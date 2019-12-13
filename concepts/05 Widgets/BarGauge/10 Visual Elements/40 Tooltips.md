A tooltip is a small pop-up rectangle that displays information on a hovered bar in **BarGauge**. By default, the tooltip shows the value indicated by the hovered element. However, it is possible to display other information in the tooltip. You can customize the text of the tooltip and its appearance in the way you require.

<img src="/Content/images/doc/19_2/ChartJS/BarGaugeTooltip.png" alt="DevExtreme HTML5 JavaScript Gauges dxBarGauge BarGauge Tooltip" style="display:block; margin:0 auto" />

Tooltips are not enabled by default. To enable them, set the **enabled** option of the [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/tooltip/') object to **true**.

	<!--JavaScript-->var gaugeOptions = {
		tooltip: {
			enabled: true
		}
    };

You can change default tooltip settings by defining the options within the **tooltip** configuration object. Some of these options are categorized and listed below.

* **Text Customization and Formatting**    
By default, a tooltip displays the value of a hovered widget element without formatting. Set the [format](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/tooltip/#format') option to format this value. When text customization is required, assign a function specifying the text to be shown to the [customizeTooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/tooltip/#customizeTooltip') option. Learn more in the [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/') topic.

* **Font Settings**    
To customize the appearance of the tooltip text, define the font options within the [font](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/tooltip/font/') configuration object.