---
type: function(seriesInfo)
---
---
##### shortDescription
Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item.

##### param(seriesInfo): Object
Information on the series that corresponds to the legend item.

##### field(seriesInfo.seriesName): any
The [name](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series/name.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name') of the series. To get the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/') object by this name, call the [getSeriesByName(seriesName)](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/3%20Methods/getSeriesByName(seriesName).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByNameseriesName') method.

##### field(seriesInfo.seriesIndex): Number
The index of the series in the **series**. To get the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/') object by this index, call the [getSeriesByPos(seriesIndex)](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/3%20Methods/getSeriesByPos(seriesIndex).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByPosseriesIndex') method.

##### field(seriesInfo.seriesColor): String
The [color](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#color') of the series.

##### return: String
The text to be displayed in the hint.

---
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the information on the series that corresponds to the legend item.