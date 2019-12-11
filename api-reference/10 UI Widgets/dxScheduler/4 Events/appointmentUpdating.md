---
type: eventType
---
---
##### shortDescription
Fires before an appointment is updated in the data source.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.oldData): Object
The appointment object to be updated in the data source.

##### field(e.newData): Object
The appointment object containing new values for the specified appointment.

##### field(e.cancel): Boolean|Promise
A flag allowing you to prevent the appointment from being updated in the data source.

---
Instead, you can use the [onAppointmentUpdating](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentUpdating.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentUpdating') option to handle the event.

#####See Also#####
#include common-link-handleevents