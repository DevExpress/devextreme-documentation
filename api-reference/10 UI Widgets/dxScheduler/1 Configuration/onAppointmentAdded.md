---
id: dxScheduler.Options.onAppointmentAdded
type: function(e)
default: null
EventForAction: dxScheduler.appointmentAdded
---
---
##### shortDescription
A function that is executed after an appointment is added to the data source.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The added appointment's data.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.error): Error
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object that defines the occurred error.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
