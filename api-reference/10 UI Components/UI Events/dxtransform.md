---
id: UI Events.dxtransform
module: events/transform
type: eventType
---
---
##### shortDescription
Raised when the transform gesture has been performed.

##### param(event): event | Object
#include common-ref-eventparam The following fields are added to existing fields of this argument object.

##### field(event.cancel): Boolean
Allows you to cancel the gesture processing.

##### field(event.deltaRotation): Number
The rotation angle between the previous and current position.

##### field(event.deltaScale): Number
The ratio between the current and previous scales.

##### field(event.deltaTranslation): Object
The distance between the previous and current position.

##### field(event.rotation): Number
The rotation angle between the initial and current position.

##### field(event.scale): Number
The ratio between the current and initial scales.

##### field(event.translation): Object
The distance between the initial and current position.

---
#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Components/UI%20Events '/Documentation/ApiReference/UI_Components/UI_Events/')