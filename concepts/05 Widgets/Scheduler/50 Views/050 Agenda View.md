The **agenda** view lists all available appointments grouped by date. This view provides a compact representation of appointments, which is useful when displaying the **Scheduler** on narrow screens.

![Agenda View](/images/UiWidgets/Scheduler_Agenda_View.png)

The **agenda** view can display appointments for seven dates at a time starting with the date specified using the [currentDate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/currentDate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentDate') option. You can customize the number of dates in the configuration object of the view, while specifying it in the [views](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#views') option.

    <!--JavaScript-->
    var schedulerOptions = {
        dataSource: schedulerData,
        views: [
            // . . .
            { type: "agenda", agendaDuration: 9}
        ]
    };

The all-day panel is not available in the **agenda** view. If an appointment lasts all day, it is placed above other appointments of that day. 

If you [group](/concepts/05%20Widgets/Scheduler/40%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/Widgets/Scheduler/Resources/#Group_Appointments_by_Resources') appointments by resources, the [resource headers](/concepts/05%20Widgets/Scheduler/10%20Visual%20Elements/040%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Visual_Elements/#Resource_Headers') are located to the left of the dates.

![Resource Headers](/images/UiWidgets/Scheduler_Agenda_Resouce_Headers.png)

If an appointment lasts for several days, it is displayed for every date it belongs to. The start and end dates of such appointments automatically change according to the current day time interval an appointment takes.

The **agenda** view does not support the adding and dragging of appointments.