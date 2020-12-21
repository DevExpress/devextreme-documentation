---
id: dxScheduler.Options.onAppointmentUpdated
type: function(e)
default: null
EventForAction: dxScheduler.appointmentUpdated
---
---
##### shortDescription
A function that is executed after an appointment is updated in the data source.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The updated appointment's data.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.error): Error
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object that defines the occurred error.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
