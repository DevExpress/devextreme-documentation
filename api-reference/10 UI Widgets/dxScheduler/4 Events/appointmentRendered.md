---
type: eventType
---
---
##### shortDescription
Fires after an appointment is rendered.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.appointmentData): object
The initial appointment's data.

##### field(e.targetedAppointmentData): object
The current appointment's data.

##### field(e.appointmentElement): dxElement
The appointment's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

---
Instead, you can use the [onAppointmentRendered](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentRendered.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentRendered') option to handle the event.

In case of recurring appointments or appointments with multiple resources, you may want to obtain information about the appointment to be rendered, not the initial appointment. For this purpose, use the **targetedAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

#####See Also#####
#include common-link-handleevents