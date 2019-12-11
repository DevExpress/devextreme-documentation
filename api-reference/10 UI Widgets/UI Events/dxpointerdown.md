---
module: events/pointer
type: event
---
---
##### shortDescription
Raised when the pointer takes on the active buttons state.

##### param(event): jQuery.event
The standard jQuery event argument. The following field is added to existing fields of this argument object. For the information on event handler arguments refer to the <a href="#introduction">UI Events introduction</a>.

##### field(event.pointerType): string
Specifies the hardware agnostic pointer input type: a mouse, pen or touchscreen.

---
For a mouse pointer, this event is raised when the mouse state changes from no buttons pressed to at least one button pressed. For touch and pen pointers, the event is raised when physical contact is made with the digitizer.