---
id: dxChart.seriesSelectionChanged
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised when a series is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): chartSeriesObject
The series whose selection state has been changed.

---
Main article: [onSeriesSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onSeriesSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesSelectionChanged')

#####See Also#####
#include common-link-handleevents