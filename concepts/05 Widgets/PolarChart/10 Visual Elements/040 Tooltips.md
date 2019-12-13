A tooltip is a small pop-up rectangle that displays information about a [series point](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/020%20Series%20Points/10%20Series%20Points.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points') when a user hovers the cursor over it. By default, a tooltip indicates the point's value. However, it is possible to display other information. In addition, you can customize the appearance of a tooltip or its text.

![Tooltip](/images/ChartJS/PolarTooltip.png)

To set tooltip options, use the [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/') configuration object of your chart. If tooltips are disabled, enable them by setting the tooltip's [enabled](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/enabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#enabled') property to _true_.

	<!--JavaScript-->var polarChartOptions = {
        // ...
		tooltip: {
			enabled: true
		}
	};

You can specify the tooltip appearance by changing options listed below.

* **Color**		
By default, a tooltip has the color of the series that is currently hovered over. You can set a custom color for all tooltips in the chart. For this purpose, use the [color](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#color') property of the **tooltip** configuration object.

* **Size**		
The tooltip's size is determined based on the text size and text padding values (see below). However, the size of the tooltip's arrow can be changed directly, using the [arrowLength](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/arrowLength.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#arrowLength') property of the **tooltip** configuration object.

* **Text Positioning**		
Align text within tooltips as required using the [paddingLeftRight](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/paddingLeftRight.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#paddingLeftRight') and [paddingTopBottom](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/paddingTopBottom.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#paddingTopBottom') properties of the **tooltip** configuration object.

* **Text Customization and Formatting**		
By default, tooltips represent point values. You can change the way these values are shown. For this purpose, use [format](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#format') tooltip property. If required, you can set custom text to be displayed by tooltips. For this purpose, assign a function specifying the text to be shown to the [customizeTooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#customizeTooltip') option of the **tooltip** object. For details on formatting, refer to the [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/') help section.

* **Font Settings**		
Use the **tooltip** object's [font](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/font/') property to specify the required font for the tooltip text.

* **Tooltip API**		
You can show and hide tooltips in code using [showTooltip()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/showTooltip().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Point/Methods/#showTooltip') and [hideTooltip()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/hideTooltip().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#hideTooltip') methods.

In [multi-series charts](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/010%20Series.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series'), you can use a shared tooltip. See the [shared](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/tooltip/shared.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#shared') option description for more information.