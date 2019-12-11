In the *bar* series type, data is displayed as sets of rectangular bars with lengths proportional to the values that they represent. Often, *bar* series are used to compare values in different discrete categories such as months, countries, age, etc. When there are several bar series, bars for each argument are displayed side-by-side. If you need to show bars for each series stacked on each other, use the *stackedBar* series type (see [Stacked Bar](/concepts/20%20Data%20Visualization/10%20Charts/20%20Chart%20Series%20Types/Stacked%20Bar.md '/Documentation/Guide/Data_Visualization/Charts/Chart_Series_Types/#Stacked_Bar')).

![PolarBarSeriesType ChartJS](/images/ChartJS/PolarBar.png)

To understand how polar charts are built, imagine how a chart in a rectangular coordinate system is transformed by rounding its argument axis.

![Transformation from Rectangular to Polar Coordinates PolarBarSeriesType ChartJS](/images/ChartJS/PolarBar_TransformationFromStandardChart.png)

To use the *bar* series type, assign *'bar'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var polarChartOptions = {
        // ...
        series: {
            type: 'bar'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/concepts/20%20Data%20Visualization/10%20Charts/40%20Data%20Binding '/Documentation/Guide/Data_Visualization/Charts/Data_Binding/') topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Bar Color**  
    A color from the chart's [palette](/concepts/20%20Data%20Visualization/40%20Common/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Data_Visualization/Common/Appearance_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/') property.
    
*   **Bar Border Options**  
    Make a border visible by setting the **visible** property of the series' [border](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/border/') object. When the border is visible, you can change its width, style and color using the **width**, **dashStyle** and **color** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. To do this, set the properties of the **border** object within the series' [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/BarSeries/hoverStyle/') or [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/BarSeries/selectionStyle/') configuration object.
    
*   **Corner Radius**  
    Set a corner radius for bars using the series' **cornerRadius** property. This is helpful if you need rounded corners in bars.
    
*   **Bar Label Options**  
    Make bar labels visible by setting the **visible** property of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/BarSeries/label/') object. For details on other label options, refer to the [Series Point Labels](/Documentation/Guide/Data_Visualization/Charts/Chart_Elements/#SeriesPointLabels) topic.

These and other options that can be set for *bar* series are explained in the [BarSeries](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/BarSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/') object of the chart's configuration object.