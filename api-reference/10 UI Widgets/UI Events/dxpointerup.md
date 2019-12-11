---
module: events/pointer
type: eventType
---
---
##### shortDescription
Raised when the pointer loses the active buttons state.

##### param(event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery. The following field is added to existing fields of this argument object.

##### field(event.pointerType): string
The type of the device that raised the event: mouse, pen or touch.

---
For a mouse pointer, this event is raised when the mouse state changes from at least one button pressed to no buttons pressed. For touch and pen pointers, the event is raised when physical contact is removed from the digitizer.

#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')