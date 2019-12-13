---
id: UI Events.dxtransformend
module: events/transform
type: eventType
---
---
##### shortDescription
Raised when the transform gesture has been completed.

##### param(event): event
#include common-ref-eventparam The following fields are added to existing fields of this argument object.

##### field(event.cancel): boolean
Allows you to cancel the gesture processing.

##### field(event.deltaRotation): number
The rotation angle between the initial and previous position.

##### field(event.deltaScale): number
The ratio between the current and previous scales.

##### field(event.deltaTranslation): object
The distance between the previous and current position.

##### field(event.rotation): number
The rotation angle between the initial and current position.

##### field(event.scale): number
The ratio between the current and initial scales.

##### field(event.translation): object
The distance between the initial and current position.

---
#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')