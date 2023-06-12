---
id: dxSankey.Options.onNodeHoverChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a sankey node.

##### param(e): Object
Information about the event.

##### field(e.component): dxSankey
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): dxSankeyNode
The [Node](/api-reference/10%20UI%20Components/dxSankey/6%20Node '/Documentation/ApiReference/UI_Components/dxSankey/Node/') object.

---
#####See Also#####
- **node**.[hoverStyle](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/node/hoverStyle '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/node/hoverStyle/')