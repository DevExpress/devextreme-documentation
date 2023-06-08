---
id: dxScheduler.Options.onAppointmentAdded
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after an appointment is added to the data source.

##### param(e): ui/scheduler:AppointmentAddedEvent
Information about the event.

##### field(e.appointmentData): dxSchedulerAppointment
The added appointment's data.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.error): Error
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object that defines the occurred error.

##### field(e.model): any
Model data. Available only if Knockout is used.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Editing/"
}