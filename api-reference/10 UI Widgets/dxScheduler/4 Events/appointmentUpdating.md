---
id: dxScheduler.appointmentUpdating
type: eventType
---
---
##### shortDescription
Raised before an appointment is updated in the data source.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to prevent an appointment update.    
If you pass a Promise to this field, the appointment updating is continued or canceled once the Promise has been resolved.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.newData): Object
The appointment with new data.

##### field(e.oldData): Object
The data of the appointment to be updated.

---
Main article: [onAppointmentUpdating](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentUpdating.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentUpdating')

#####See Also#####
#include common-link-handleevents