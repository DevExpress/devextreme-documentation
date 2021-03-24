---
id: UI Events.dxpointerdown
module: events/pointer
type: eventType
---
---
##### shortDescription
Raised when the pointer takes on the active buttons state.

##### param(event): Object
#include common-ref-eventparam The following field is added to existing fields of this argument object.

##### field(event.pointerType): String
The type of the device that raised the event: mouse, pen or touch.

---
For a mouse pointer, this event is raised when the mouse state changes from no buttons pressed to at least one button pressed. For touch and pen pointers, the event is raised when physical contact is made with the digitizer.

#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Components/UI%20Events '/Documentation/ApiReference/UI_Components/UI_Events/')