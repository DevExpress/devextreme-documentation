---
type: eventType
---
---
##### shortDescription
Fires after an appointment has been clicked.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.appointmentData): object
The initial appointment.

##### field(e.targetedAppointmentData): object
The clicked appointment.

##### field(e.appointmentElement): dxElement
The clicked appointment's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.cancel): Boolean
Allows you to cancel execution of the default appointment click handler.

---
Instead, you can use the [onAppointmentClick](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentClick.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentClick') option to handle the event.

In case of recurring appointments or appointments with multiple resources, you may want to obtain information about the currently selected appointment, not the initial appointment. For this purpose, use the **targetedAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

#####See Also#####
#include common-link-handleevents