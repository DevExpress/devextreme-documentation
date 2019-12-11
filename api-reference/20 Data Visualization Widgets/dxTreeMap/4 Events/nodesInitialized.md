---
id: dxTreeMap.nodesInitialized
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised only once, after the nodes are initialized.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.root): dxTreeMapNode
The root node; described in the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') section.

---
Main article: [onNodesInitialized](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/onNodesInitialized.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onNodesInitialized')

#####See Also#####
#include common-link-handleevents