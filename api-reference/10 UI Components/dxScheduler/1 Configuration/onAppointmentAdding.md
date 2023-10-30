---
id: dxScheduler.Options.onAppointmentAdding
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an appointment is added to the data source.

##### param(e): ui/scheduler:AppointmentAddingEvent
Information about the event.

##### field(e.appointmentData): dxSchedulerAppointment
The data of the appointment to be added.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to cancel appointment adding.        
If you pass a Promise to this field, appointment adding is continued or canceled once the Promise has been resolved.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}