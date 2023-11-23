---
id: dxScheduler.Options.onAppointmentDeleting
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an appointment is deleted from the data source.

##### param(e): ui/scheduler:AppointmentDeletingEvent
Information about the event.

##### field(e.appointmentData): dxSchedulerAppointment
The data of the appointment to be deleted.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to prevent the appointment from being deleted.       
If you pass a Promise to this field, appointment deleting is continued or canceled once the Promise has been resolved.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
