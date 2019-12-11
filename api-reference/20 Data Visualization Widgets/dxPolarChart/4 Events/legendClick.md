---
id: dxPolarChart.legendClick
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised when a [legend item](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/120%20Legend.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Legend') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): polarChartSeriesObject
The series that corresponds to the clicked legend item; described in the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/') section.

---
Main article: [onLegendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onLegendClick')

#####See Also#####
#include common-link-handleevents