---
module: events/swipe
type: eventType
---
---
##### shortDescription
Raised when the swipe gesture is started.

##### param(event): jQuery.event
The standard jQuery event argument. The following field is added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="/Documentation/ApiReference/UI_Widgets/UI_Events/">UI Events introduction</a>.

##### field(event.cancel): boolean
Indicates whether to prevent the swipe gesture. Set this field to true to cancel the gesture.

---
The event supports the **direction** option, which specifies whether the event is raised for horizontal or vertical scrolling. The option can take on the "vertical" and "horizontal" values. The default option value is "horizontal".