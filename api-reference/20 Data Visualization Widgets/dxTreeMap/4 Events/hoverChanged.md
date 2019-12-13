---
id: dxTreeMap.hoverChanged
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised after the pointer enters or leaves a node.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
The node whose hover state has been changed; described in the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') section.

---
Main article: [onHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/onHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onHoverChanged')

#####See Also#####
#include common-link-handleevents