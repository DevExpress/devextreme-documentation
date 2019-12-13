The *stackedBar* series type is used when there are several series that represent values for discrete categories. With this series type, data is displayed as triangular bars with lengths proportional to the values that they represent. Bars of each subsequent series are stacked on top of the bars of the previous series. The height of the resulting bar shows the combined result of a category.

![PolarStackedBarSeriesType ChartJS](/images/ChartJS/PolarStackedBar.png)

To understand how polar charts are built, imagine how a chart in a rectangular coordinate system is transformed by rounding its argument axis.

![Transformation from Rectangular to Polar Coordinates PolarStackedBarSeriesType ChartJS](/images/ChartJS/PolarStackedBar_TransformationFromStandardChart.png)

To use the *stackedBar* series type, assign *'stackedbar'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var polarChartOptions = {
        // ...
        series: {
            type: 'stackedbar'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/10%20Provide%20Data '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/') topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Bar Color**  
    A color from the chart's [palette](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/10%20Palettes/00%20Palettes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/') property.
    
*   **Bar Border Options**  
    Make a border visible by setting the **visible** property of the series' [border](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/border/') object. When the border is visible, you can change its width, line style and color, using the **width**, **dashStyle** and **color** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. To do this, set the properties of the **border** object within the series' [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/StackedBarSeries/hoverStyle/') or [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/StackedBarSeries/selectionStyle/') configuration object.
    
*   **Corner Radius**  
    Set a corner radius for bars using the series' **cornerRadius** property. This is helpful if you need rounded corners in bars.
    
*   **Stack**  
    Series values can be located in more than one stack for each argument value. Set the appropriate stack for a series using the [stack](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/') property. This is helpful if you need to divide series between the required number of logical stacks (e.g., 'men' and 'women' stacks).
    
*   **Bar Label Options**  
    Make bar labels visible by setting the **visible** property of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/StackedBarSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/StackedBarSeries/label/') object. For details on other label options, refer to the [Series Point Labels](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Point_Labels') topic.

These and other options that can be set for a series of the *stackedBar* type are explained in the [StackedBarSeries](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/StackedBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/StackedBarSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/') object of the chart's configuration object.