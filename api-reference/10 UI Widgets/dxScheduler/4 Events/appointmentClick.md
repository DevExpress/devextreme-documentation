---
type: eventType
---
---
##### shortDescription
Fires after an appointment has been clicked.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): object
The object associated with the initial appointment.

##### field(e.targetedAppointmentData): object
The object associated with the clicked appointment.

##### field(e.appointmentElement): jQuery
An HTML element of the clicked appointment.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.cancel): Boolean
Indicates whether or not to cancel execution of the default appointment click handler.

---
Instead, you can use the [onAppointmentClick](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentClick.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentClick') option to handle the event.

In case of recurring appointments or appointments with multiple resources, you may want to obtain information about the currently selected appointment, not the initial appointment. For this purpose, use the **targetedAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

#####See Also#####
#include common-link-handleevents