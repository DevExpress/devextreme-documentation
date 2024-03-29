The **month** view displays appointments for a month. The Scheduler UI component arranges appointments from left to right. An appointment's size depends on its duration in days. However, it occupies the entire day cell if an appointment lasts only for several hours or minutes. The time scale and All-day panel are not available in this view.

![Month View](/images/UiWidgets/Scheduler_Month_View.png)

In the month view, Scheduler renders appointments in ascending order of [startDateExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/startDateExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#startDateExpr'). If appointments have the same start date, they are rendered in the order defined in DataSource. You can use the DataSource's [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') property to reorder such appointments.

You can use the [maxAppointmentsPerCell](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/maxAppointmentsPerCell.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#maxAppointmentsPerCell') property to set a limit on the number of full-sized appointments displayed in a single cell. Appointments that exceed this limit are hidden, and a [cell overflow indicator](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/080%20Cell%20Overflow%20Indicator.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Cell_Overflow_Indicator/') is displayed instead. If hidden appointments are associated with the same resource, the indicator will have the same color as this resource. Otherwise, the indicator has a default color.

![Scheduler: Cell overflow indicator on a month view](/images/UiWidgets/scheduler-month-view-cell-overflow-indicator.png)

A user can click the cell overflow indicator to view the hidden appointments. 

![Drop-down List of Appointments](/images/UiWidgets/Scheduler_Month_DropDown_List.png)

Resource headers are above the day scale when you [group appointments by resources](/concepts/05%20UI%20Components/Scheduler/040%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/').

![Resource Headers](/images/UiWidgets/Scheduler_Month_Resource_Headers.png)
