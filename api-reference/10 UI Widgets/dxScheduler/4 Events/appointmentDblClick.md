---
id: dxScheduler.appointmentDblClick
type: eventType
---
---
##### shortDescription
Raised when an appointment is double-clicked or double-tapped.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The initial appointment.

##### field(e.appointmentElement): dxElement
#include common-ref-elementparam with { element: "clicked" }

##### field(e.cancel): Boolean
Allows you to cancel execution of the default appointment click handler.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.targetedAppointmentData): Object
The clicked appointment.

---
Main article: [onAppointmentDblClick](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentDblClick.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentDblClick')

#####See Also#####
#include common-link-handleevents