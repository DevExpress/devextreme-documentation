---
id: dxScheduler.appointmentFormOpening
type: eventType
---
---
##### shortDescription
Raised before an appointment details form is opened.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The data of the appointment for which a form is opened.

##### field(e.cancel): Boolean
Set this field to **true** to prevent the appointment details form from opening.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.form): dxForm
The form's instance; created only once - when the function is executed for the first time.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onAppointmentFormOpening](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentFormOpening.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentFormOpening')

#####See Also#####
#include common-link-handleevents
