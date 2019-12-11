---
type: eventType
---
---
##### shortDescription
Raised when a list item is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): Object
The item's container.

##### field(e.itemIndex): Number | Object
The clicked item's index. If the widget items are grouped, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

---
Main article: [onItemClick](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/onItemClick.md '{basewidgetpath}/Configuration/#onItemClick')

#####See Also#####
#include common-link-handleevents