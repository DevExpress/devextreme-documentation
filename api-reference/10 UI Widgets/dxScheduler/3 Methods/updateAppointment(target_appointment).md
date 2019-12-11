---
##### shortDescription
Updates the appointment specified by the first method parameter by the appointment object specified by the second method parameter in the data associated with the widget.

##### param(target): Object
The appointment object to be updated.

##### param(appointment): Object
The appointment object containing new values for the specified target appointment.

---
Consider handling the [appointmentUpdating](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentUpdating.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentUpdating') and [appointmentUpdated](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentUpdated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentUpdated') events to perform custom actions before and after updating an appointment in the widget's data source.

#####See Also#####
#include common-link-callmethods