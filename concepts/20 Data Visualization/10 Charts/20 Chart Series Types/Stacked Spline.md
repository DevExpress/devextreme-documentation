The *stackedSpline* series type is used when you have several series and it's necessary to compare how much each series adds to the total aggregate value for specific arguments. With this series type, series data is displayed as points joined using a spline interpolation. The lines do not overlap, because they are cumulative at each point.

![stackedSplineSeriesType ChartJS](/images/ChartJS/StackedSpline.png)

To use this series type, assign *'stackedspline'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'stackedspline'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/concepts/20%20Data%20Visualization/10%20Charts/40%20Data%20Binding '/Documentation/Guide/Data_Visualization/Charts/Data_Binding/') topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Line Width**  
    Change the line width using the series' **width** property. To set a line width when the line is hovered or selected, set the **width** property of the [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/hoverStyle/') or [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/selectionStyle/') object defined within the **series** configuration object.
    
*   **Line Color**  
    A color from the chart's [palette](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color') property.

*   **Line Dash Style**  
    Set the line's style using the series' **dashStyle** property. To set a dash style when the line is hovered or selected, set the **dashStyle** property of the [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/hoverStyle/') or [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/selectionStyle/') object defined within the **series** configuration object.

*   **Line Point Options**  
    Set up the series' [point](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/') object (see [Series Points](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/020%20Series%20Points/10%20Series%20Points.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Points') topic).

*   **Point Label Options**  
    Make point labels visible by setting the **visible** property of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/StackedSplineSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/label/') object. For details on other label options, refer to the [Series Point Labels](/concepts/20%20Data%20Visualization/10%20Charts/10%20Chart%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#Series_Point_Labels') topic.

These and other options that can be set for *stackedSpline* type series are explained in the [stackedSplineSeries](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/StackedSplineSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/stackedSplineSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartslineandpointseriesspline/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>