---
module: events/transform
type: eventType
---
---
##### shortDescription
Raised when the translate gesture has been performed.

##### param(event): jQuery.event
The standard jQuery event argument. The following fields are added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="/Documentation/ApiReference/UI_Widgets/UI_Events/">UI Events introduction</a>.

##### field(event.translation): object
Indicates the translation distance against the initial position.

##### field(event.deltaTranslation): object
Indicates the translation distance against the last gesture update.

##### field(event.cancel): boolean
Specifies whether or not to cancel gesture processing.

---
