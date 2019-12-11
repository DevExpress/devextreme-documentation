---
##### shortDescription
Add the appointment defined by the object passed as a parameter to the data associated with the widget.

##### param(appointment): Object
An appointment object to be added.

---
The structure of the added appointment should the same as it is used in the widget's [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource') array or as it comes from the source connected to the widget by the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object.

Consider handling the [appointmentAdding](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentAdding.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdding') and [appointmentAdded](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentAdded.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdded') events to perform custom actions before and after adding an appointment to the widget's data source.

#####See Also#####
#include common-link-callmethods