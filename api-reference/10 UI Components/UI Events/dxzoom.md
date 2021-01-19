---
id: UI Events.dxzoom
module: events/transform
type: eventType
dep: UI Events.dxpinch
---
---
##### shortDescription
Raised when the zoom gesture has been performed.

##### param(event): event
#include common-ref-eventparam The following fields are added to existing fields of this argument object.

##### field(event.cancel): boolean
Allows you to cancel the gesture processing.

##### field(event.deltaScale): number
The ratio between the current and previous scales.

##### field(event.scale): number
The ratio between the current and initial scales.

---
#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')