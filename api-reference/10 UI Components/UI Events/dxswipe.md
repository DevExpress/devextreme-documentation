---
id: UI Events.dxswipe
module: events/swipe
type: eventType
---
---
##### shortDescription
Raised when the swipe gesture has been performed.

##### param(event): event
#include common-ref-eventparam The following fields are added to existing fields of this argument object.

##### field(event.cancel): boolean
Allows you to cancel the gesture processing.

##### field(event.offset): number
The ratio between the swipe distance and the target element's width or height.

---
The event supports the **direction** option that specifies whether the event is raised for horizontal or vertical scrolling. The option can take on the "vertical" and "horizontal" values. The default option value is "horizontal".

#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')