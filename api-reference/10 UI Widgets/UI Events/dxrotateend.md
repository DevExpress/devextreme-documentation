---
module: events/transform
type: eventType
---
---
##### shortDescription
Raised when the rotate gesture has been completed.

##### param(event): jQuery.event
The standard jQuery event argument. The following fields are added to existing fields of this argument object. For the information on event handler arguments, refer to the [UI Events introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/').

##### field(event.rotation): number
Indicates the rotation angle against the initial position.

##### field(event.deltaRotation): number
Indicates the rotation angle against the last gesture update.

##### field(event.cancel): boolean
Specifies whether or not to cancel gesture processing.

---
