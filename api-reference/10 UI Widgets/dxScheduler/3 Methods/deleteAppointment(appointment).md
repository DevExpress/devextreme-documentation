---
##### shortDescription
Deletes the appointment defined by the parameter from the the data associated with the widget.

##### param(appointment): Object
An appointment object to be deleted.

---
Pass an entire appointment object to this method so that it is deleted from the data source.

Consider handling the [appointmentDeleting](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentDeleting.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentDeleting') and [appointmentDeleted](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentDeleted.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentDeleted') events to perform custom actions before and after deleting an appointment from the widget's data source.