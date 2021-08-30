In the *bar* series type, data is displayed as sets of rectangular bars with lengths proportional to the values that they represent. Often, *bar* series are used to compare values in different discrete categories such as months, countries, age, etc. When there are several bar series, bars for each argument are displayed side-by-side. If you need to show bars for each series stacked on each other, use the *stackedBar* series type (see [Stacked Bar](/concepts/05%20UI%20Components/PolarChart/20%20Series%20Types/Stacked%20Bar.md '/Documentation/Guide/UI_Components/PolarChart/Series_Types/#Stacked_Bar')).

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

To learn how to specify data for a series, refer to the [Data Binding](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/10%20Local%20Array.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/') topic.

To change the series default appearance, set the properties of the **series** configuration object. For instance, you can change the following.

*   **Bar Color**  
    A color from the chart's [palette](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Components%20Customization/10%20Palettes/00%20Palettes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonSeriesSettings/') property.
    
*   **Bar Border Properties**  
    Make a border visible by setting the **visible** property of the series' [border](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/border '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonSeriesSettings/border/') object. When the border is visible, you can change its width, style and color using the **width**, **dashStyle** and **color** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. To do this, set the properties of the **border** object within the series' [hoverStyle](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/hoverStyle '/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/BarSeries/hoverStyle/') or [selectionStyle](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/selectionStyle '/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/BarSeries/selectionStyle/') configuration object.
    
*   **Corner Radius**  
    Set a corner radius for bars using the series' **cornerRadius** property. This is helpful if you need rounded corners in bars.
    
*   **Bar Label Properties**  
    Make bar labels visible by setting the **visible** property of the series' [label](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label '/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/BarSeries/label/') object. For details on other label properties, refer to the [Series Point Labels](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Series_Point_Labels') topic.

These and other properties that can be set for *bar* series are explained in the [BarSeries](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/BarSeries/') Reference section. Set the required series properties within the [series](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/series/') object of the chart's configuration object.