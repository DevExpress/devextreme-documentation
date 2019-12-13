---
id: dxScheduler.Options.onAppointmentDeleting
type: function(e)
default: null
EventForAction: dxScheduler.appointmentDeleting
---
---
##### shortDescription
A function that is executed before an appointment is deleted from the data source.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The data of the appointment to be deleted.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to prevent the appointment from being deleted.       
If you pass a Promise to this field, appointment deleting is continued or canceled once the Promise has been resolved.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
