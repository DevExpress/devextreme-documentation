---
id: dxMap.Options.onClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when any location on the map is clicked or tapped.

##### param(e): ui/map:ClickEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
The event that triggered the function. It can be:

- An [EventObject](/api-reference/50%20Common/Object%20Structures/EventObject '/Documentation/ApiReference/Common/Object_Structures/EventObject/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> with the **'googleStatic'** provider.
- A native event with the **'google'** and **'azure'** providers.
- Unspecified with the **'bing'** provider.

##### field(e.location): MapLocation
The clicked location. Unspecified with the **'googleStatic'** provider.

---
