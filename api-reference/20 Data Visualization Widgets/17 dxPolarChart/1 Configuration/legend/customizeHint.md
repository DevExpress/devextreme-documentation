---
type: function(seriesInfo)
---
---
##### shortDescription
Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item.

##### param(seriesInfo): object
Information on the series that corresponds to the legend item.

##### field(seriesInfo.seriesName): string
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#name">name</a> of the series. To get the <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/">Series</a> object by this name, call the <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#getSeriesByNameseriesName">getSeriesByName(seriesName)</a> method.

##### field(seriesInfo.seriesIndex): Number
The index of the series in the <b>series</b>. To get the <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/">Series</a> object by this index, call the <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#getSeriesByPosseriesIndex">getSeriesByPos(seriesIndex)</a> method.

##### field(seriesInfo.seriesColor): string
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#color">color</a> of the series.

##### return: string
The text to be displayed in the hint.

---
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the information on the series that corresponds to the legend item.