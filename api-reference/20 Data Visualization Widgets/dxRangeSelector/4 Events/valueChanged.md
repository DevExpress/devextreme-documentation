---
id: dxRangeSelector.valueChanged
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised after the widget's [value](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/value '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value') is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.previousValue): Array<Number, String, Date>
Two values that represent old start and end values.

##### field(e.value): Array<Number, String, Date>
Two values that represent new start and end values.

---
Main article: [onValueChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#onValueChanged')

#####See Also#####
#include common-link-handleevents