---
type: eventType
---
---
##### shortDescription
Fires after an edit form has been created for an appointment.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): object
The object associated with the appointment for which a form is created.

##### field(e.form): Object
An instance of the [Form](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm') widget used to edit the appointment details.

---
Instead, you can use the [onAppointmentFormCreated](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentFormCreated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentFormCreated') option to handle the event.

#####See Also#####
#include common-link-handleevents