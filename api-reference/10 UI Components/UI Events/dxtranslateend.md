---
id: UI Events.dxtranslateend
module: events/transform
type: eventType
---
---
##### shortDescription
Raised when the translate gesture has been completed.

##### param(event): event
#include common-ref-eventparam The following fields are added to existing fields of this argument object.

##### field(event.cancel): boolean
Allows you to cancel the gesture processing.

##### field(event.deltaTranslation): object
The distance between the previous and current position.

##### field(event.translation): object
The distance between the initial and current position.

---
#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')