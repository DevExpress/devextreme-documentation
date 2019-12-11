The *stackedBar* series type is used when there are several series that represent values for discrete categories. With this series type, data is displayed as rectangular bars with lengths proportional to the values that they represent. Bars of each subsequent series are stacked on top of the bars of the previous series. The height of the resulting bar shows the combined result of a category.

![StackedBarSeriesType ChartJS](/images/ChartJS/StackedBar.png)

To use this series type, assign *'stackedbar'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'stackedbar'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/concepts/20%20Data%20Visualization/10%20Charts/40%20Data%20Binding '/Documentation/Guide/Data_Visualization/Charts/Data_Binding/') topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Bar Color**  
    A color from the chart's [palette](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color') property.
    
*   **Bar Border Options**  
    Make a border visible by setting the **visible** property of the series' [border](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/border/') object. When the border is visible, you can change its width, line style and color, using the **width**, **dashStyle** and **color** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. To do this, set the properties of the **border** object within the series' [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/hoverStyle/') or [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/selectionStyle/') configuration object.
    
*   **Corner Radius**  
    Set a corner radius for bars using the series' **cornerRadius** property. This is helpful if you need rounded corners in bars.
    
*   **Stack**  
    Series values can be located in more than one stack for each argument value. Set the appropriate stack for a series using the [stack](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') property. This is helpful if you need to divide series between the required number of logical stacks (e.g., 'men' and 'women' stacks).
    
*   **Bar Label Options**  
    Make bar labels visible by setting the **visible** property of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/StackedBarSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/label/') object. For details on other label options, refer to the [Series Point Labels](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Point_Labels') topic.

These and other options that can be set for series of the *stackedBar* type are explained in the [StackedBarSeries](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/StackedBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsbarseriesstacked/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>