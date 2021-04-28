---
id: dxTreeMap.Options.onNodesRendering
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed before the nodes are displayed and each time the collection of [active nodes](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/isActive().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#isActive') is changed.

##### param(e): Object
Information about the event.

##### field(e.component): dxTreeMap
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
In most cases, the root node. When drilling down, the node of the highest displayed level.      
Described in the [Node](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/') section.

---
