---
module: events/pointer
type: event
---
---
##### shortDescription
Raised when any pointer parameter has been changed. (Position, tilt, pressure, button state, or contact geometry).

##### param(event): jQuery.event
The standard jQuery event argument. The following field is added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="#introduction">UI Events introduction</a>.

##### field(event.pointerType): string
Specifies the hardware agnostic pointer input type: a mouse, pen or touchscreen.

---
