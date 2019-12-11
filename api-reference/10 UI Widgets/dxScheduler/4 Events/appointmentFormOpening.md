---
type: eventType
---
---
##### shortDescription
Raised before an appointment details form is opened.

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
The form's instance; created only once - when the function is executed for the first time.

---
Main article: [onAppointmentFormOpening](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentFormOpening.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentFormOpening')

#####See Also#####
#include common-link-handleevents