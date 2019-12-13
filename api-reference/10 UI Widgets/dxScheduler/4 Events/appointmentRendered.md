---
id: dxScheduler.appointmentRendered
type: eventType
---
---
##### shortDescription
Raised when an appointment is rendered.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The initial appointment's data.

##### field(e.appointmentElement): dxElement
#include common-ref-elementparam with { element: "appointment" }

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.targetedAppointmentData): Object
The appointment's data.

---
Main article: [onAppointmentRendered](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentRendered.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentRendered')

#####See Also#####
#include common-link-handleevents