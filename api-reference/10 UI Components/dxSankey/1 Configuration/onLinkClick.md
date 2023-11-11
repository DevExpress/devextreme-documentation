---
id: dxSankey.Options.onLinkClick
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a sankey link is clicked or tapped.

##### param(e): viz/sankey:LinkClickEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.target): dxSankeyLink
The [Link](/api-reference/10%20UI%20Components/dxSankey/7%20Link '/Documentation/ApiReference/UI_Components/dxSankey/Link/') object.

---
#####See Also#####
- [link](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/link '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/link/')