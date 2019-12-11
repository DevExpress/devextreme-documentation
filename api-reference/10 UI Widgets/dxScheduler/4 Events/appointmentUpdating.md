---
type: eventType
---
---
##### shortDescription
Fires before an appointment is updated in the data source.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.oldData): Object
The data of the appointment to be updated.

##### field(e.newData): Object
The appointment with new data.

##### field(e.cancel): Boolean|Promise<Boolean>
Allows you to prevent an appointment update.    
If you pass a Promise to this field, the appointment updating is continued or canceled once the Promise has been resolved.

---
Instead, you can use the [onAppointmentUpdating](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentUpdating.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentUpdating') option to handle the event.

#####See Also#####
#include common-link-handleevents