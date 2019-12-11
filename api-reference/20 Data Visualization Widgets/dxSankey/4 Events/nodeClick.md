---
id: dxSankey.nodeClick
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised when a sankey node is clicked or tapped.

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

##### field(e.target): dxSankeyNode
The [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/') object.

---
Main article: [onNodeClick](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/onNodeClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onNodeClick')

#####See Also#####
#include common-link-handleevents
- [node](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/node '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/')