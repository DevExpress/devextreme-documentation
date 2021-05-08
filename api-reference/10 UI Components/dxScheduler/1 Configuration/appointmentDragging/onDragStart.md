---
id: dxScheduler.Options.appointmentDragging.onDragStart
type: function(e)
---
---
##### shortDescription
A function that is called when the drag gesture is initialized.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel the gesture.

##### field(e.component): dxScheduler
The UI component's instance.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/appointmentDragging/data.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/appointmentDragging/#data') associated with the source UI component.

##### field(e.itemData): any
The data object of the appointment being dragged.

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

---
<!-- Description goes here -->