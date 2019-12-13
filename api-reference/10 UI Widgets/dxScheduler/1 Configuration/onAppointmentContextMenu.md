---
id: dxScheduler.Options.onAppointmentContextMenu
type: function(e) | String
default: null
EventForAction: dxScheduler.appointmentContextMenu
---
---
##### shortDescription
A function that is executed when a user attempts to open the browser's context menu for an appointment. Allows you to replace this context menu with a custom context menu.

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
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/ContextMenuIntegration/"
}