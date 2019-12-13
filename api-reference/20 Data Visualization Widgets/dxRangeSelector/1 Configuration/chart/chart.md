---
id: dxRangeSelector.Options.chart
type: Object
---
---
##### shortDescription
Specifies the options required to display a chart as the range selector's background.

---
The **RangeSelector** widget can be created with a chart as the background. In this instance, the range selector can be used for selecting the required range on the chart. At the same time, the **Chart** widget can be displayed near the range selector and zoomed or scrolled according to the range selected in the range selector. For details on how to synchronize these two widgets, refer to the [Zooming and Scrolling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/6%20Zooming%20and%20Scrolling '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Zooming_and_Scrolling') topic.

To provide a data source for the chart located in the background, set the **dataSource** property of the [rangeSelectorOptions](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#dataSource') root configuration object and define the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') within the [chart](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/chart '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/') configuration object. Set the chart series' **argumentField** and **valueField** properties to the corresponding data source fields. The argument field will also be used to create the range selector's scale.

[note] You may need to use the **rangeValue1Field** and **rangeValue2Field** properties instead of the **valueField** property if you define range-like series. For the candleStick and stock series types, specific properties should also be specified instead of the **valueField** property.

The color specified for the range selector's background will also be visible in the chart's background by default. You can change it using the **color** property of the [background](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/background/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/background/#color') configuration object. To prohibit the display of the background color, set the background's **visible** property to **false**.

<a href="/Demos/WidgetsGallery/Demo/RangeSelector/ChartOnBackground/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Chart on Background Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Range_Selector/CustomizedChartOnBackground/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Customized Chart on Background Demo</a>

