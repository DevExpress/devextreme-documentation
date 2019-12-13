---
id: dxTreeMap.drill
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised when a user drills up or down.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
The [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

---
Main article: [onDrill](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/onDrill.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onDrill')

#####See Also#####
#include common-link-handleevents