Use the *pie* series type when you need to compare the percentage values of different point arguments in the same series, and illustrate these values as easy-to-understand pie slices.

![PieSeriesType ChartJS](/images/ChartJS/Pie.png)

The pie series type is used by the **PieChart** widget by default. There may be scenarios, however, when it is appropriate to set this series type explicitly. To do this, assign *'pie'* to the **type** option of the **series** configuration object.

    <!--JavaScript-->var pieChartOptions = {
        // ...
        series: {
            type: 'pie'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/10%20Provide%20Data '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/') topic.

To change the default appearance of the series, set the options of the **series** configuration object. For example, you can change the following options.

*   **Slice Color**  
    Colors from the **PieChart**'s [palette](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/') are used by default. To set custom colors for pie slices, introduce a new palette and use it in your **PieChart**. To learn how to do this, refer to the [Palettes](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes') topic.

*   **Hover Style**  
    The color of a pie slice changes when it is hovered. To paint the hovered slice in another color, or apply 'left' or 'right' hatching, define the series' **hoverStyle** configuration object.

*   **Selection Style**  
    The color of a pie slice changes when it is selected. To paint the selected slice in another color, or apply 'left' or 'right' hatching, define the series' **hoverStyle** configuration object.

*   **Point Label Options**  
    Make point labels visible by setting the **visible** property of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/') object. For information on other label options, refer to the [Series Point Labels](/Documentation/Guide/Widgets/Chart/Visual_Elements/#SeriesPointLabels) topic.

These and other options that can be set for series of the *pie* type are listed in the [PieSeries](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/PieSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Series_Types/PieSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/') object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartspieseriespie/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>