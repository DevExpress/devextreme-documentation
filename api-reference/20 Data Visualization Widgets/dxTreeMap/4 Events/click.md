---
id: dxTreeMap.click
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised when a node is clicked or tapped.

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

##### field(e.node): dxTreeMapNode
The clicked node; described in the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') section.

---
Main article: [onClick](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/onClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onClick')
    
#####See Also#####
#include common-link-handleevents