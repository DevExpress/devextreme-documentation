---
id: UI Events.dxswipeend
module: events/swipe
type: eventType
---
---
##### shortDescription
Raised when the swipe gesture is finished.

##### param(event): event | Object
#include common-ref-eventparam The following fields are added to existing fields of this argument object.

##### field(event.offset): Number
The ratio between the swipe distance and the target element's width or height.

##### field(event.targetOffset): Number
The ratio between the distance that should be passed to finish the motion and the target element's width or height.

---
The event supports the **direction** property, which specifies whether the event is raised for horizontal or vertical scrolling. The property can take on the "vertical" and "horizontal" values. The default property value is "horizontal".

#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Components/UI%20Events '/Documentation/ApiReference/UI_Components/UI_Events/')