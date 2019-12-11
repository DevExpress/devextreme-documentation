---
type: eventType
---
---
##### shortDescription
Fires before an appointment is added to the data source.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.appointmentData): Object
The data of the appointment to be added.

##### field(e.cancel): Boolean|Promise<Boolean>
Allows you to cancel appointment adding.        
If you pass a Promise to this field, appointment adding is continued or canceled once the Promise has been resolved.

---
Instead, you can use the [onAppointmentAdding](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentAdding.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentAdding') option to handle the event.

#####See Also#####
#include common-link-handleevents