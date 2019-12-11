---
EventForAction: ..\4 Events\linkClick.md
default: null
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A function that is executed when a sankey link is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.event): event
The event that caused the function's execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

##### field(e.target): dxSankeyLink
The [Link](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/7%20Link '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Link/') object.

---
#####See Also#####
- [link](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/link '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/')