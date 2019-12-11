---
module: events/pointer
type: eventType
---
---
##### shortDescription
Raised when a pointer is moved from either the hit test area of an element or one of its descendants.

##### param(event): jQuery.event
The standard jQuery event argument. The following field is added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="/Documentation/ApiReference/UI_Widgets/UI_Events/">UI Events introduction</a>.

##### field(event.pointerType): string
Indicates the type of the device that caused the event. (Mouse, pen, or touch)

---
