With the *scatter* series type, data is displayed as a collection of points. This series type is often used when a variable exists under the control of the tester.

![ScatterSeriesType ChartJS](/images/ChartJS/Scatter.png)

To use this series type, assign *'scatter'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'scatter'
        }
    };

To learn how to specify data for a chart series, refer to the [Data Binding](/concepts/20%20Data%20Visualization/10%20Charts/40%20Data%20Binding '/Documentation/Guide/Data_Visualization/Charts/Data_Binding/') topic.

You can change the default appearance using series options. For instance, you can change the following.

*   **Point Color**  
    A color from the chart's [palette](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color') property.
    
*   **Point Options**  
    Set up the series' [point](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/') object (see the [Series Points](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/020%20Series%20Points/10%20Series%20Points.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Points') topic).
    
*   **Point Labels**  
    Make point labels visible by setting the **visible** property of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/ScatterSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/ScatterSeries/label/') object. For details on other label options, refer to the [Series Point Labels](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Point_Labels') topic.

These and other options that can be set for series of the *scatter* type are explained in the [ScatterSeries](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/ScatterSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/ScatterSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartslineandpointseriesscatter/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>