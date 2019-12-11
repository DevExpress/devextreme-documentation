---
module: events/pointer
type: eventType
---
---
##### shortDescription
Raised when a pointer is moved to the hit test area of an element or one of its descendants.

##### param(event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery. The following field is added to existing fields of this argument object.

##### field(event.pointerType): string
The type of the device that raised the event: mouse, pen or touch.

---
#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')