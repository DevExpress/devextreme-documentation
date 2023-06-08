---
id: dxScheduler.Options.onAppointmentContextMenu
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a user attempts to open the browser's context menu for an appointment. Allows you to replace this context menu with a custom context menu.

##### param(e): ui/scheduler:AppointmentContextMenuEvent
Information about the event.

##### field(e.appointmentElement): DxElement
#include common-ref-elementparam with { element: "appointment" }

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if you use Knockout.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/ContextMenuIntegration/"
}

<!-- import * from 'api-reference\10 UI Components\dxScheduler\1 Configuration\appointmentTemplate.md' -->