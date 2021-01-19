---
id: dxPolarChart.Options.useSpiderWeb
type: Boolean
default: false
---
---
##### shortDescription
Indicates whether or not to display a "spider web".

---
In a polar coordinate system, the argument axis is a circle because it tracks a continuous angle change. When the argument in the chart's data source is discrete, you may want to display the argument axis as a discrete axis. For this purpose, set the **useSpiderWeb** option to **true**. In this instance, the argument axis, as well as the value axis' grid lines, will be displayed by straight lines between axis ticks/grid lines.

![UseSpiderWeb ChartJS](/images/ChartJS/UseSpiderWeb.png)

The spider web option is supported in the following series types.

- [line](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/LineSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/')
- [area](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/AreaSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/AreaSeries/')
- [scatter](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/ScatterSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/ScatterSeries/')

[note]A spider web demands that the [discreteAxisDivisionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/discreteAxisDivisionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/#discreteAxisDivisionMode') option is set to *'crossLabels'* and the [firstPointOnStartAngle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/firstPointOnStartAngle.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#firstPointOnStartAngle') option is set to **true**. Thus, do not change the values of these option so that the spider web saves its look.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SpiderWeb/"
}