---
id: dxScheduler.Options.appointmentDragging.onDragMove
type: function(e)
---
---
##### shortDescription
A function that is called every time a draggable appointment is moved.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel the gesture.

##### field(e.component): dxScheduler
The UI component's instance.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): dxSortable | dxDraggable
The instance of the appointment's source UI component.

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/appointmentDragging/data.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/appointmentDragging/#data') associated with the source UI component.

##### field(e.itemData): any
The data object of the appointment being dragged.

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### field(e.toComponent): dxSortable | dxDraggable
The instance of the appointment's target UI component.

##### field(e.toData): any
Custom [data](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/appointmentDragging/data.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/appointmentDragging/#data') associated with the target UI component.

---
<!-- Description goes here -->