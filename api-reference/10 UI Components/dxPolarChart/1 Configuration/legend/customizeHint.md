---
id: dxPolarChart.Options.legend.customizeHint
---
---
##### shortDescription
Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item.

##### param(seriesInfo): Object
Information on the series.

##### field(seriesInfo.seriesColor): String
The series' [color](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/color.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/series/#color').

##### field(seriesInfo.seriesIndex): Number
The index of the series in the [series](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/series/') array. To get the [Series](/api-reference/10%20UI%20Components/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/UI_Components/dxPolarChart/Chart_Elements/Series/') object by this index, call the [getSeriesByPos(seriesIndex)](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/getSeriesByPos(seriesIndex).md '/Documentation/ApiReference/UI_Components/dxPolarChart/Methods/#getSeriesByPosseriesIndex') method.

##### field(seriesInfo.seriesName): any
The series' [name](/api-reference/_hidden/PolarChartSeries/name.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/series/#name'). To get the [Series](/api-reference/10%20UI%20Components/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/UI_Components/dxPolarChart/Chart_Elements/Series/') object by this name, call the [getSeriesByName(seriesName)](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/getSeriesByName(seriesName).md '/Documentation/ApiReference/UI_Components/dxPolarChart/Methods/#getSeriesByNameseriesName') method.

##### return: String
The text for the hint to display.

---
#include dataviz-ref-functioncontext