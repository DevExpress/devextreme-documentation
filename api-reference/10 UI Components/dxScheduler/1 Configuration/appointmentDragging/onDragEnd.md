---
id: dxScheduler.Options.appointmentDragging.onDragEnd
type: function(e)
---
---
##### shortDescription
A function that is called when the dragged appointment's position is changed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel the gesture.

##### field(e.component): dxScheduler
The UI component's instance.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): dxSortable | dxDraggable
The instance of the appointment's source UI component. Works only for element drag and drop between components.

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/appointmentDragging/data.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/appointmentDragging/#data') associated with the source UI component. Works only for element drag and drop between components.

##### field(e.itemData): any
The appointment's data before the drag operation

##### field(e.itemElement): DxElement
#include draganddrop-ref-itemelementparam

##### field(e.toComponent): dxSortable | dxDraggable
The instance of the appointment's target UI component. Works only for element drag and drop between components.

##### field(e.toData): any
Custom [data](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/appointmentDragging/data.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/appointmentDragging/#data') associated with the target UI component. Works only for element drag and drop between components.

##### field(e.toItemData): any
The appointment's data after dragging.

---
<!-- Description goes here -->