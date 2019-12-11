A tooltip is a small pop-up rectangle that displays information on a hovered value or subvalue indicator in **CircularGauge** and **LinearGauge**, or a hovered bar in **BarGauge**. By default, a tooltip shows the value indicated by the hovered element. However, it is possible to display other information in a tooltip. You can customize the text of a tooltip and its appearance in the way you require.

<img src="/Content/images/doc/16_1/ChartJS/GaugesTooltips.png" alt="ChartJS GaugesTooltips" style="display:block; margin:0 auto" />

Tooltips are not enabled by default. To enable them, set the **enabled** option of the **tooltip** object to *true*.

	<!--JavaScript-->var gaugeOptions = {
		tooltip: {
			enabled: true
		}
    };

You can change default tooltip settings by defining the options within the **tooltip** configuration object. Some of these options are categorized and listed below.

* **Text Customization and Formatting**    
By default, a tooltip displays the value of a hovered widget element without formatting. Set the **format** option to format this value. When text customization is required, assign a function specifying the text to be shown to the **customizeTooltip** option. Learn more in the [Data Formatting](/concepts/20%20Data%20Visualization/40%20Common/30%20Data%20Formatting '/Documentation/Guide/Data_Visualization/Common/Data_Formatting/') topic.

* **Font Settings**    
To customize the appearance of the tooltip text, define the font options within the **font** configuration object.