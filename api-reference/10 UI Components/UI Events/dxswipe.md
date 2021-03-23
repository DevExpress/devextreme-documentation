---
id: UI Events.dxswipe
module: events/swipe
type: eventType
---
---
##### shortDescription
Raised when the swipe gesture has been performed.

##### param(event): Object
#include common-ref-eventparam The following fields are added to existing fields of this argument object.

##### field(event.cancel): Boolean
Allows you to cancel the gesture processing.

##### field(event.offset): Number
The ratio between the swipe distance and the target element's width or height.

---
The event supports the **direction** property that specifies whether the event is raised for horizontal or vertical scrolling. The property can take on the "vertical" and "horizontal" values. The default property value is "horizontal".

#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Components/UI%20Events '/Documentation/ApiReference/UI_Components/UI_Events/')