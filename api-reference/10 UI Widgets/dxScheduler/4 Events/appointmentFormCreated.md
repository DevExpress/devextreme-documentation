---
type: eventType
---
---
##### shortDescription
Raised before an appointment's details form is opened.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.appointmentData): Object
The data of the appointment for which a form is opened.

##### field(e.form): dxForm
The form's instance.

---
Main article: [onAppointmentFormCreated](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentFormCreated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentFormCreated')

#####See Also#####
#include common-link-handleevents