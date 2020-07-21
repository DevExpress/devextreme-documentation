---
id: dxScheduler.Options.onAppointmentDblClick
type: function(e) | String
default: null
EventForAction: dxScheduler.appointmentDblClick
---
---
##### shortDescription
A function that is executed when an appointment is double-clicked or double-tapped.

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

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.targetedAppointmentData): Object
<!-- %field(model.targetedAppointmentData)% -->

---

<!-- import * from 'api-reference\10 UI Widgets\dxScheduler\1 Configuration\appointmentTemplate.md' -->