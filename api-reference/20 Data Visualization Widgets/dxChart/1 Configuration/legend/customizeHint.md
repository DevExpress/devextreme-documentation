---
type: function(seriesInfo)
---
---
##### shortDescription
Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item.

##### param(seriesInfo): Object
Information on the series that corresponds to the legend item.

##### field(seriesInfo.seriesName): any
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name">name</a> of the series. To get the <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/">Series</a> object by this name, call the <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByNameseriesName">getSeriesByName(seriesName)</a> method.

##### field(seriesInfo.seriesIndex): Number
The index of the series in the <b>series</b>. To get the <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/">Series</a> object by this index, call the <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getSeriesByPosseriesIndex">getSeriesByPos(seriesIndex)</a> method.

##### field(seriesInfo.seriesColor): String
The <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#color">color</a> of the series.

##### return: String
The text to be displayed in the hint.

---
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the information on the series that corresponds to the legend item.