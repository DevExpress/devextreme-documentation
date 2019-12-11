---
module: events/pointer
type: event
---
---
##### shortDescription
Raised when the pointer is no longer likely to produce events.

##### param(event): jQuery.event
The standard jQuery event argument. The following field is added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="#introduction">UI Events introduction</a>.

##### field(event.pointerType): string
Specifies the hardware agnostic pointer input type: a mouse, pen or touchscreen.

---
The event can be raised because of a hardware event; such as, if a device changes the screen orientation while the pointer is active or the number of simultaneous pointers exceeds the supported number, etc.