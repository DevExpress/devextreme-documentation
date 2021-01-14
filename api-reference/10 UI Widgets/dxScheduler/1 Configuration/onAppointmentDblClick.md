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
If **true**, does not allow the user to open the appointment details form with double click.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.targetedAppointmentData): Object
<!-- %field(model.targetedAppointmentData)% -->

---

<!-- import * from 'api-reference\10 UI Widgets\dxScheduler\1 Configuration\appointmentTemplate.md' -->
