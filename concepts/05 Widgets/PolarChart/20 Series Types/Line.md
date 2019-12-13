With the *line* series type, data is displayed as points joined by a line. This series type is useful when you need to visualize a trend in data over intervals.

![PolarLineSeriesType ChartJS](/images/ChartJS/PolarLine.png)

To understand how polar charts are built, imagine how a chart in a rectangular coordinate system is transformed by rounding its argument axis.

![Transformation from Rectangular to Polar Coordinates PolarLineSeriesType ChartJS](/images/ChartJS/PolarLine_TransformationFromStandardChart.png)

To use the *'line'* series type, assign *'line'* to the [type](/api-reference/_hidden/PolarChartSeries/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#type') property of the **series** configuration object.

    <!--JavaScript-->var polarChartOptions = {
        // ...
        series: {
            type: 'line'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/10%20Provide%20Data '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/') topic. Note that, you can use DateTime and Numeric types for points in the data source, as well as the String type. By default, the data of the DateTime and Numeric types is displayed on continuous axes, while string values are displayed on discrete axes (you can manage the axes types using their **type** option). When continuous axes are used in the widget, the line chart is displayed using a smooth curve.

![Smooth PolarLineSeriesType ChartJS](/images/ChartJS/PolarLine_Smooth.png)

When either argument or value axis is discrete, the line chart joins data points by straight lines.

![Discrete PolarLineSeriesType ChartJS](/images/ChartJS/PolarLine_Discrete.png)

Note that you can use a spider web for polar charts displaying discrete data. For this purpose, set the widget's [useSpiderWeb](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/useSpiderWeb.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#useSpiderWeb') option to **true**.

![SpiderWeb PolarLineSeriesType ChartJS](/images/ChartJS/PolarLine_useSpiderWeb.png)

Line polar charts are appropriate for data whose values span cyclically repeating arguments. In this instance, set the [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/').[period](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/period.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#period') option.

![Cyclic PolarLineSeriesType ChartJS](/images/ChartJS/PolarLine_Smooth_Cyclic.png)

In some scenarios, you may need to close the line chart by joining the first point and the last point. For this purpose, set the series' [closed](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/closed.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/#closed') option.

![Closed Cyclic PolarLineSeriesType ChartJS](/images/ChartJS/PolarLine_Smooth_Cyclic_Closed.png)

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Line Width**  
    Change the line width using the series' **width** property. To set a line width when the line is hovered or selected, set the **width** property of the [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/hoverStyle/') or [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/selectionStyle/') object defined within the **series** configuration object.

*   **Line Color**  
    A color from the chart's [palette](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/10%20Palettes/00%20Palettes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/') property.

*   **Line Dash Style**  
    Set the line's style using the series' **dashStyle** property. To set a dash style when the line is hovered or selected, set the **dashStyle** property of the [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/hoverStyle/') or [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/selectionStyle/') object defined within the **series** configuration object.

*   **Line Point Options**  
    Set up the series' [point](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/point/') object (see the [Series Points](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/020%20Series%20Points/10%20Series%20Points.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points') topic).

*   **Point Label Options**  
    Make point labels visible by setting the **visible** property of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/label/') object. For details on other label options, refer to the [Series Point Labels](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Point_Labels') topic.

These and other options that can be set for series of the *line* type are explained in the [LineSeries](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/LineSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/') object of the chart's configuration object.