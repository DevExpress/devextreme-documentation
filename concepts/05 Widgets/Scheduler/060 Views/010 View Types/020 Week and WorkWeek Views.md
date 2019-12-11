The **week** and **workWeek** views display appointments for a week. The **workWeek** view does not include weekends. The **Scheduler** widget arranges appointments from top to bottom. If their time intervals overlap, their width is decreased and they are placed next to each other.

![Week View](/images/UiWidgets/Scheduler_Week_View.png)

All-day appointments are displayed on the all-day panel. You can set an appointment limit on this panel using the [maxApointmentsPerCell](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/maxAppointmentsPerCell.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#maxAppointmentsPerCell') option. Appointments are sent to an appointment collector when this limit is exceeded. If appointments in the collector are associated with the same resource, the collector is colored like this resource. Otherwise, the collector has a default color.

![Appointment Collector](/images/UiWidgets/Scheduler_Week_Appointment_Collector.png)

A user can click the appointment collector to view the removed appointments.

![Drop-down List of Appointments](/images/UiWidgets/Scheduler_Week_DropDown_List.png)

Resource headers are above the day scale when you [group appointments by resources](/concepts/05%20Widgets/Scheduler/040%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/').

![Resource Headers](/images/UiWidgets/Scheduler_Week_Resource_Headers.png)
