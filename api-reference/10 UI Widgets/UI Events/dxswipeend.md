---
module: events/swipe
type: eventType
---
---
##### shortDescription
Raised when the swipe gesture is finished.

##### param(event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery. The following fields are added to existing fields of this argument object.

##### field(event.offset): number
The ratio between the swipe distance and the target element's width or height.

##### field(event.targetOffset): number
The ratio between the distance that should be passed to finish the motion and the target element's width or height.

---
The event supports the **direction** option, which specifies whether the event is raised for horizontal or vertical scrolling. The option can take on the "vertical" and "horizontal" values. The default option value is "horizontal".

#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')