---
id: dxScheduler.appointmentDeleted
type: eventType
---
---
##### shortDescription
Raised after an appointment is deleted from the data source.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The deleted appointment's data.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.error): Error
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object that defines the occurred error.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onAppointmentDeleted](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentDeleted.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentDeleted')

#####See Also#####
#include common-link-handleevents