---
id: BaseChart.Options.onDone
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when all series are ready.

##### param(e): Object
Information about the event.

##### field(e.component): BaseChart
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### return: any
<!-- Description goes here -->

---
#####See Also#####
- [getAllSeries()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getAllSeries().md '{basewidgetpath}/Methods/#getAllSeries')
- [getSeriesByName(seriesName)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getSeriesByName(seriesName).md '{basewidgetpath}/Methods/#getSeriesByNameseriesName')
- [getSeriesByPos(seriesIndex)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getSeriesByPos(seriesIndex).md '{basewidgetpath}/Methods/#getSeriesByPosseriesIndex')