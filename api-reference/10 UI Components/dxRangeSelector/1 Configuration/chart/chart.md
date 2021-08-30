---
id: dxRangeSelector.Options.chart
type: Object
---
---
##### shortDescription
Specifies the properties required to display a chart as the range selector's background.

---
The RangeSelector UI component can be created with a chart as the background. In this instance, the range selector can be used for selecting the required range on the chart. At the same time, the Chart UI component can be displayed near the range selector and zoomed or scrolled according to the range selected in the range selector. For details on how to synchronize these two UI components, refer to the following help topic: [Zooming and Panning Using the RangeSelector Component](/concepts/05%20UI%20Components/Chart/95%20Zooming%20and%20Panning/10%20Using%20the%20RangeSelector%20Component.md '/Documentation/Guide/UI_Components/Chart/Zooming_and_Panning/#Using_the_RangeSelector_Component').

To provide a data source for the chart located in the background, set the **dataSource** property of the [rangeSelectorOptions](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#dataSource') root configuration object and define the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') within the [chart](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/chart '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/chart/') configuration object. Set the chart series' **argumentField** and **valueField** properties to the corresponding data source fields. The argument field will also be used to create the range selector's scale.

[note] You may need to use the **rangeValue1Field** and **rangeValue2Field** properties instead of the **valueField** property if you define range-like series. For the candleStick and stock series types, specific properties should also be specified instead of the **valueField** property.

The color specified for the range selector's background will also be visible in the chart's background by default. You can change it using the **color** property of the [background](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/background/color.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/background/#color') configuration object. To prohibit the display of the background color, set the background's **visible** property to **false**.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/ChartOnBackground/",
    name: "Chart on Background"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Range_Selector/CustomizedChartOnBackground/",
    name: "Customized Chart on Background"
}

