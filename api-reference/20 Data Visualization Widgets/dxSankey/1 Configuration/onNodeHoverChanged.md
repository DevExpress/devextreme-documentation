---
id: dxSankey.Options.onNodeHoverChanged
type: function(e)
default: null
EventForAction: dxSankey.nodeHoverChanged
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a sankey node.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): dxSankeyNode
The [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/') object.

---
#####See Also#####
- **node**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/node/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/hoverStyle/')