The **month** view displays appointments for a month. The **Scheduler** widget arranges appointments from left to right. An appointment's size depends on its duration in days. However, it occupies the entire day cell if an appointment lasts only for several hours or minutes. The time scale and all-day panel are not available in this view. 

![Month View](/images/UiWidgets/Scheduler_Month_View.png)

You can set an appointment limit for a day cell using the [maxApointmentsPerCell](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/maxAppointmentsPerCell.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#maxAppointmentsPerCell') option. Appointments are sent to an appointment collector when this limit is exceeded. If appointments in the collector are associated with the same resource, the collector is colored like this resource. Otherwise, the collector has a default color.

![Appointment collector](/images/UiWidgets/Scheduler_Month_Appointment_Collector.png)

A user can click the appointment collector to view the removed appointments. 

![Drop-down List of Appointments](/images/UiWidgets/Scheduler_Month_DropDown_List.png)

Resource headers are above the day scale when you [group appointments by resources](/concepts/05%20Widgets/Scheduler/040%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/').

![Resource Headers](/images/UiWidgets/Scheduler_Month_Resource_Headers.png)
