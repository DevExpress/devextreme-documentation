---
id: dxScheduler.Options.onAppointmentFormCreated
type: function(e)
default: null
dep: dxScheduler.Options.onAppointmentFormOpening
EventForAction: dxScheduler.appointmentFormCreated
---
---
##### shortDescription
A function that is executed before an appointment details form is opened.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The data of the appointment for which a form is opened.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.form): dxForm
The form's instance; created only once - when the function is executed for the first time.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
