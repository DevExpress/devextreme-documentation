---
id: UI Events.dxpointercancel
module: events/pointer
type: eventType
---
---
##### shortDescription
Raised when the browser decides that the pointer is unlikely to produce any more events.

##### param(event): Object
#include common-ref-eventparam The following field is added to existing fields of this argument object.

##### field(event.pointerType): String
The type of the device that raised the event: mouse, pen or touch.

---
The event can be raised because of a hardware event; such as, if a device changes the screen orientation while the pointer is active or the number of simultaneous pointers exceeds the supported number, etc.

#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Components/UI%20Events '/Documentation/ApiReference/UI_Components/UI_Events/')