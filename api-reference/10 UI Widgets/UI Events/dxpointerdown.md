---
module: events/pointer
type: eventType
---
---
##### shortDescription
Raised when the pointer takes on the active buttons state.

##### param(event): jQuery.event
The standard jQuery event argument. The following field is added to existing fields of this argument object. For the information on event handler arguments refer to the [UI Events introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/').

##### field(event.pointerType): string
Specifies the hardware agnostic pointer input type: a mouse, pen or touchscreen.

---
For a mouse pointer, this event is raised when the mouse state changes from no buttons pressed to at least one button pressed. For touch and pen pointers, the event is raised when physical contact is made with the digitizer.