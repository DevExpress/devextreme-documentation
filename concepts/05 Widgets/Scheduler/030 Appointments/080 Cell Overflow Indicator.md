When the [limit of full-sized appointments per cell](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/maxAppointmentsPerCell.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#maxAppointmentsPerCell') is exceeded, cells display overflow indicators. Users can click these indicators to display remaining appointments in a tooltip.

Depending on the [view type](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/'), overflow indicators can be compact or full-size. Full-size indicators are used in [Month](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types/030%20Month%20View.md '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Month_View') and all [Timeline](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types/040%20Timeline%20Views.md '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Timeline_Views') view types. Compact indicators are used in [Day](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types/010%20Day%20View.md '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Day_View'), [Week, and WorkWeek](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types/020%20Week%20and%20WorkWeek%20Views.md '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Week_and_WorkWeek_Views') view types.

![DevExtreme Scheduler: Cell Overflow Indicator](/images/UiWidgets/scheduler-cell-overflow-indicator.png)
![DevExtreme Scheduler: Compact Cell Overflow Indicator](/images/UiWidgets/scheduler-cell-overflow-indicator-compact.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/LimitAppointmentCountPerCell/jQuery/Light/"
}

To customize overflow indicators, set the [appointmentCollectorTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/appointmentCollectorTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentCollectorTemplate'). Similarly, you can specify the [appointmentTooltipTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/appointmentTooltipTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentTooltipTemplate') to customize appointments displayed in the overflow indicator's tooltip.

#####See Also#####
- [Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Customize Appointment Details Form](/concepts/05%20Widgets/Scheduler/030%20Appointments/070%20Customize%20Appointment%20Details%20Form.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Details_Form/')
- [Customize Appointment Tooltip](/concepts/05%20Widgets/Scheduler/030%20Appointments/060%20Customize%20Appointment%20Tooltip.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/')

[tags]scheduler, appointment collector, overflow indicator, customize tooltip, hidden appointments 
