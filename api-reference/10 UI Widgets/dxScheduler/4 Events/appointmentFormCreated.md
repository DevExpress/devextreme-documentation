---
type: eventType
---
---
##### shortDescription
Fires after an edit form has been created for an appointment.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.appointmentData): object
The data of the appointment for which a form is created.

##### field(e.form): dxForm
The form's [configuration](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/').

---
Instead, you can use the [onAppointmentFormCreated](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentFormCreated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentFormCreated') option to handle the event.

#####See Also#####
#include common-link-handleevents