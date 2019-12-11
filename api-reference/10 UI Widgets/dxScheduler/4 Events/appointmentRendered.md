---
type: eventType
---
---
##### shortDescription
Fires after an appointment is rendered.

##### param(e): object
Provides function parameters.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): object
The data that is bound to the initial appointment.

##### field(e.targetedAppointmentData): object
The data that is bound to the appointment to be rendered.

##### field(e.appointmentElement): jQuery
An HTML element of the appointment.

---
Instead, you can use the [onAppointmentRendered](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentRendered.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentRendered') option to handle the event.

In case of recurring appointments or appointments with multiple resources, you may want to obtain information about the appointment to be rendered, not the initial appointment. For this purpose, use the **targetedAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

#####See Also#####
#include common-link-handleevents