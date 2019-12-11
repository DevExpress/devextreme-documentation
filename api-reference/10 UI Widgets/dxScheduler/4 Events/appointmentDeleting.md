---
type: eventType
---
---
##### shortDescription
Raised before an appointment is deleted from the data source.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.appointmentData): Object
The data of the appointment to be deleted.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to prevent the appointment from being deleted.       
If you pass a Promise to this field, appointment deleting is continued or canceled once the Promise has been resolved.

---
Main article: [onAppointmentDeleting](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentDeleting.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentDeleting')

#####See Also#####
#include common-link-handleevents