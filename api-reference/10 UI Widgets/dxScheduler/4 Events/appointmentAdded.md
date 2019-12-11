---
type: eventType
---
---
##### shortDescription
Raised after an appointment is added to the data source.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.appointmentData): Object
The added appointment's data.

##### field(e.error): Error
The standard [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object that defines the occurred error.

---
Main article: [onAppointmentAdded](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentAdded.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentAdded')

#####See Also#####
#include common-link-handleevents