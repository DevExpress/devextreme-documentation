---
id: dxSankey.Options.onLinkClick
type: function(e) | String
default: null
EventForAction: dxSankey.linkClick
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a sankey link is clicked or tapped.

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

##### field(e.target): dxSankeyLink
The [Link](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/7%20Link '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Link/') object.

---
#####See Also#####
- [link](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/link '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/')