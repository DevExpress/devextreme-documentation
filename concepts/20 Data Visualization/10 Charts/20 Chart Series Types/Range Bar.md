The *rangeBar* series type is used to display value ranges corresponding to the specified arguments. With this series type, data is displayed as sets of rectangular bars beginning at the specified start value and ending at the specified end value. When there are several *rangeBar* series, bars for each argument are displayed side-by-side.

![RangeBarSeriesType ChartJS](/images/ChartJS/RangeBar.png)

To use this series type, assign *'rangebar'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'rangebar'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/concepts/20%20Data%20Visualization/10%20Charts/40%20Data%20Binding '/Documentation/Guide/Data_Visualization/Charts/Data_Binding/') topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Bar Color**  
    A color from the chart's [palette](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color') property.
    
*   **Bar Border Options**  
    Make a border visible by setting the **visible** property of the series' [border](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/border/') object. When the border is visible, you can change its width, style and color using the **width**, **dashStyle** and **color** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. To do this, set the properties of the **border** object within the series' [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/hoverStyle/') or [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/selectionStyle/') configuration object.
    
*   **Corner Radius**  
    Set a corner radius for bars using the series' **cornerRadius** property. This is helpful if you need rounded corners in bars.
    
*   **Bar Label Options**  
    To make bar labels visible, set the **visible** property of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/RangeBarSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/label/') object. Bar labels are shown for both the beginning and end values by default. You can allow other information to be shown. For details on label options, refer to the [Series Point Labels](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Point_Labels') topic.

These and other options that can be set for series of the *rangeBar* type are explained in the [RangeBarSeries](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsrangeseriesbar/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>