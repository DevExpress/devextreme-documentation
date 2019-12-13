---
id: dxScheduler.appointmentContextMenu
type: eventType
---
---
##### shortDescription
Raised when a user attempts to open the browser's context menu for an appointment.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The initial appointment.

##### field(e.appointmentElement): dxElement
#include common-ref-elementparam with { element: "appointment" }

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler's execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.targetedAppointmentData): Object
The appointment on which the context menu is invoked.           
For details on the difference between this and the **appointmentData** fields, see the [onAppointmentClick](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentClick.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentClick') option description.

---
Main article: [onAppointmentContextMenu](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentContextMenu.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentContextMenu')

#####See Also#####
#include common-link-handleevents