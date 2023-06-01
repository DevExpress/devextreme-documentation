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

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

---
#####See Also#####
- [getAllSeries()](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/getAllSeries().md '{basewidgetpath}/Methods/#getAllSeries')
- [getSeriesByName(seriesName)](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/getSeriesByName(seriesName).md '{basewidgetpath}/Methods/#getSeriesByNameseriesName')
- [getSeriesByPos(seriesIndex)](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/getSeriesByPos(seriesIndex).md '{basewidgetpath}/Methods/#getSeriesByPosseriesIndex')