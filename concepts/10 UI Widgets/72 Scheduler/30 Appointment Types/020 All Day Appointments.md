An all day appointment is a non-recurring appointment that lasts all day. To define an all day appointment, set the **allDay** field to *true* and specify the **startDate** field.

    <!--JavaScript-->var appointments = [
        {text: 'Fix bugs', startDate: new Date(2015, 4, 10), allDay: true},
        //...
    ]

![Scheduler All Day Appointment](/images/UiWidgets/Scheduler_AllDayAppointment.png)

In a UI, end users are provided with the **All day** field as well. When this field is set to *true*, it is not possible to set the start and end time of the appointment.

![Scheduler All Day Appointment Details](/images/UiWidgets/Scheduler_AllDayAppointment_Details.png)

All day appointments are displayed in the all day panel, which is always visible by default. If you do not intend to use all day appointments, you can hide the all day panel assigning *false* to the [showAllDayPanel](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/showAllDayPanel.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel') option.