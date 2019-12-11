---
dep: dxpinch.md
module: events/transform
type: eventType
---
---
##### shortDescription
Raised when the zoom gesture has been performed.

##### param(event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery. The following fields are added to existing fields of this argument object.

##### field(event.scale): number
The ratio between the current and initial scales.

##### field(event.deltaScale): number
The ratio between the current and previous scales.

##### field(event.cancel): boolean
Allows you to cancel the gesture processing.

---
#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')