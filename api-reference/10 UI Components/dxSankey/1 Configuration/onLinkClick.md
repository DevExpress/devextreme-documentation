---
id: dxSankey.Options.onLinkClick
type: function(e) | String
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a sankey link is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): dxSankey
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): dxSankeyLink
The [Link](/api-reference/10%20UI%20Components/dxSankey/7%20Link '/Documentation/ApiReference/UI_Components/dxSankey/Link/') object.

---
#####See Also#####
- [link](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/link '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/link/')