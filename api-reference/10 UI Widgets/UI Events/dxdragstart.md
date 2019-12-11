---
module: events/drag
type: event
---
---
##### shortDescription
Raised when the drag gesture has been started.

##### param(event): jQuery.event
The standard jQuery event argument. The following field is added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="#introduction">UI Events introduction</a>.

##### field(event.cancel): boolean
Indicates whether to prevent the drag gesture. Set this field to true to cancel the gesture.

---
