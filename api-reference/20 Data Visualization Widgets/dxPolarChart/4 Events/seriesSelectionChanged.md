---
id: dxPolarChart.seriesSelectionChanged
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

##### field(e.target): polarChartSeriesObject
The series whose selection state has been changed; described in the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/') section.

---
Main article: [onSeriesSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/onSeriesSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onSeriesSelectionChanged')

#####See Also#####
#include common-link-handleevents