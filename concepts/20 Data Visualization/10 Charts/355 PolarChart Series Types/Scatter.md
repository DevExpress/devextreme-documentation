With the *scatter* series type, data is displayed as a collection of points. This series type is often used to display radar points.

![PolarScatterSeriesType ChartJS](/images/ChartJS/PolarScatter.png)

To understand how polar charts are built, imagine how a chart in a rectangular coordinate system is transformed by rounding its argument axis.

![Transformation from Rectangular to Polar Coordinates PolarScatterSeriesType ChartJS](/images/ChartJS/PolarScatter_TransformationFromStandardChart.png)

**PolarChart** uses the *scatter* series type by default. But in some cases, you may need to specify this series type explicitly. For this purpose, assign *'scatter'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var polarChartOptions = {
        // ...
        series: {
            type: 'scatter'
        }
    };

To learn how to specify data for a chart series, refer to the [Data Binding](/concepts/20%20Data%20Visualization/10%20Charts/40%20Data%20Binding '/Documentation/Guide/Data_Visualization/Charts/Data_Binding/') topic.

Note that you can use a spider web for polar charts displaying discrete data. For this purpose, set the widget's [useSpiderWeb](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/useSpiderWeb.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#useSpiderWeb') option to *true*.

![SpiderWeb PolarScatterSeriesType ChartJS](/images/ChartJS/PolarScatter_useSpiderWeb.png)

You can change the default appearance using series options. For instance, you can change the following.

*   **Point Color**  
    A color from the chart's [palette](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/') property.
    
*   **Point Options**  
    Set up the series' [point](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/point/') object (see the [Series Points](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#SeriesPoints) topic).
    
*   **Point Labels**  
    Make point labels visible by setting the **visible** property of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/ScatterSeries/label/') object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#SeriesPointLabels) topic.

These and other options that can be set for series of the *scatter* type are explained in the [ScatterSeries](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/ScatterSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/ScatterSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/') object of the chart's configuration object.