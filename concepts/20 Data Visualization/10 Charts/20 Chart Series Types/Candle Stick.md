The *candleStick* series type is used to show the variation in the price of stock over the course of a day. Each point consists of a rectangle (_body_), whose bottom and top values correspond to the _open_ and _close_ prices, and a vertical line (_shadow_, _wick_ or _tail_), whose bottom and top values correspond to the _low_ and _high_ prices. If the stock closes higher than its opening price, the _body_ is hollow. And if the stock closes lower than its opening price, the _body_ is filled.

![CandleStickSeriesType ChartJS](/images/ChartJS/CandleStick.png)

To use the *candleStick* series type, assign *'candlestick'* to the **type** property of the **series** configuration object.

	<!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'candlestick'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/concepts/20%20Data%20Visualization/10%20Charts/40%20Data%20Binding '/Documentation/Guide/Data_Visualization/Charts/Data_Binding/') topic.

You can change the default appearance using series options. For instance, you can change the following.

*   **Color**  
    A color from the chart's [palette](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color') property. You can also set the color to be used to fill in the body of points. For this purpose, use the series' **innerColor** property.
    
*   **Reduction Options**  
    You can choose the price level (low, high, open or close) for which to enable reduction options, meaning that in case the value of a particular point's price level is lower in comparison to the value in the previous point, the subsequent point is painted in a specific color. To set the price to be compared, use the **level** property of the series' [reduction](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/reduction '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/reduction/') object. To set a specific color for a subsequent price that is lower than the price in the previous point, use the **color** property of the series' **reduction** object.
    
*   **Line Width**  
    Change the line width using the series' **width** property. To set a line width when the line is hovered or selected, set the **width** property of the [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CandleStickSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/hoverStyle/') or [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CandleStickSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/selectionStyle/') object, defined within the **series** configuration object.
    
*   **Labels**  
    Make labels visible by setting the **visible** property of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CandleStickSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/label/') object. By default, labels show the value of the price that is specified as a reduction level (see above). You can also display other information. For details on label options, refer to the [Series Point Labels](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Point_Labels') topic.

These and other options that can be set for series of the *candleStick* type are explained in the [CandleStickSeries](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CandleStickSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsfinancialseriescandlestick/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>