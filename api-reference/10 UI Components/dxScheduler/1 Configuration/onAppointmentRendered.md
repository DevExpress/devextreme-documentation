---
id: dxScheduler.Options.onAppointmentRendered
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when an appointment is rendered.

##### param(e): ui/scheduler:AppointmentRenderedEvent
Information about the event.

##### field(e.appointmentElement): DxElement
#include common-ref-elementparam with { element: "appointment" }

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

---

<!-- import * from 'api-reference\10 UI Components\dxScheduler\1 Configuration\appointmentTemplate.md' -->