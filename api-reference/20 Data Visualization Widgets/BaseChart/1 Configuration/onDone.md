---
id: BaseChart.Options.onDone
type: function(e)
default: null
EventForAction: BaseChart.done
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when all series are ready.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
#####See Also#####
- [getAllSeries()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getAllSeries().md '{basewidgetpath}/Methods/#getAllSeries')
- [getSeriesByName(seriesName)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getSeriesByName(seriesName).md '{basewidgetpath}/Methods/#getSeriesByNameseriesName')
- [getSeriesByPos(seriesIndex)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getSeriesByPos(seriesIndex).md '{basewidgetpath}/Methods/#getSeriesByPosseriesIndex')