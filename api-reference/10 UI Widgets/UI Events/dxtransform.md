---
module: events/transform
type: event
---
---
##### shortDescription
Raised when the transform gesture has been performed.

##### param(event): jQuery.event
The standard jQuery event argument. The following fields are added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="#introduction">UI Events introduction</a>.

##### field(event.scale): number
Indicates a scale transformation against the initial scale.

##### field(event.deltaScale): number
Indicates a scale transformation against the last gesture update.

##### field(event.rotation): number
Indicates the rotation angle against the initial position.

##### field(event.deltaRotation): number
Indicates the rotation angle against the last gesture update.

##### field(event.translation): object
Indicates the translation distance against the initial position.

##### field(event.deltaTranslation): object
Indicates the translation distance against the last gesture update.

##### field(event.cancel): boolean
Specifies whether or not to cancel gesture processing.

---
