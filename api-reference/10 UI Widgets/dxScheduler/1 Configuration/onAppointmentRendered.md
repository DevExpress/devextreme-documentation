---
id: dxScheduler.Options.onAppointmentRendered
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when an appointment is rendered.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The initial appointment's data.

##### field(e.appointmentElement): dxElement
#include common-ref-elementparam with { element: "appointment" }

##### field(e.component): dxScheduler
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.targetedAppointmentData): Object | undefined
<!-- %field(model.targetedAppointmentData)% -->

##### return: any
<!-- Description goes here -->

---

<!-- import * from 'api-reference\10 UI Widgets\dxScheduler\1 Configuration\appointmentTemplate.md' -->