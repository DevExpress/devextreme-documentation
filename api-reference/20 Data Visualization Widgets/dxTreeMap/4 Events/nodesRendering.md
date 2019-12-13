---
id: dxTreeMap.nodesRendering
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised before the nodes are displayed and each time the collection of [active nodes](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/isActive().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isActive') is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
In most cases, the root node. When drilling down, the node of the highest displayed level.       
Described in the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') section.

---
Main article: [onNodesRendering](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/onNodesRendering.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onNodesRendering')

#####See Also#####
#include common-link-handleevents