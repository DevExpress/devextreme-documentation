---
id: dxScheduler.appointmentAdded
type: eventType
---
---
##### shortDescription
Raised after an appointment is added to the data source.

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
Main article: [onAppointmentAdded](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentAdded.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentAdded')

#####See Also#####
#include common-link-handleevents