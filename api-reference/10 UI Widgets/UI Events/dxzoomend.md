---
dep: 
module: events/transform
type: eventType
---
---
##### deprecated
Use the [dxpinchend](/api-reference/10%20UI%20Widgets/UI%20Events/dxpinchend.md '/Documentation/ApiReference/UI_Widgets/UI_Events/#dxpinchend') event instead.

##### shortDescription
Raised when the zoom gesture has been completed.

##### param(event): jQuery.event
The standard jQuery event argument. The following fields are added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="/Documentation/ApiReference/UI_Widgets/UI_Events/">UI Events introduction</a>.

##### field(event.scale): number
Indicates a scale transformation against the initial scale.

##### field(event.deltaScale): number
Indicates a scale transformation against the last gesture update.

##### field(event.cancel): boolean
Specifies whether or not to cancel gesture processing.

---
