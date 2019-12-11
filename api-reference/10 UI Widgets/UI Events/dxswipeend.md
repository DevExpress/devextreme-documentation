---
module: events/swipe
type: eventType
---
---
##### shortDescription
Raised when the swipe gesture is finished.

##### param(event): jQuery.event
The standard jQuery event argument. The following fields are added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="/Documentation/ApiReference/UI_Widgets/UI_Events/">UI Events introduction</a>.

##### field(event.offset): number
Indicates which distance has been passed during the swipe gesture, measured as a ratio to the target element's width.

##### field(event.targetOffset): number
Indicates which distance will be passed to completely finish the motion, measured as a ratio to the target element's width.

---
The event supports the **direction** option, which specifies whether the event is raised for horizontal or vertical scrolling. The option can take on the "vertical" and "horizontal" values. The default option value is "horizontal".