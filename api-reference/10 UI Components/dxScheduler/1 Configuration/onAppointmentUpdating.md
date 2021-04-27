---
id: dxScheduler.Options.onAppointmentUpdating
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an appointment is updated in the data source.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to prevent an appointment update.    
If you pass a Promise to this field, the appointment updating is continued or canceled once the Promise has been resolved.

##### field(e.component): dxScheduler
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.newData): Object
The appointment with new data.

##### field(e.oldData): Object
The data of the appointment to be updated.

---
