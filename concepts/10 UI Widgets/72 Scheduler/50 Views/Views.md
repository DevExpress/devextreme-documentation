The [Scheduler](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/') widget provides several views.

- day  
- week  
- workWeek  
- month  
- timelineDay  
- timelineWeek  
- timelineWorkWeek 
- timelineMonth  
- agenda  

To specify views available in the scheduler's [View Switcher](/concepts/10%20UI%20Widgets/72%20Scheduler/10%20Visual%20Elements/020%20View%20Switcher.md '/Documentation/Guide/UI_Widgets/Scheduler/Visual_Elements/#View_Switcher'), assign an array of the required views to the widget's [views](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#views') option. By default, it holds ['day', 'week'].

To specify the view used by default, set the [currentView](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/currentView.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentView') option. Its default value is 'day'. You can also change this option at runtime.

Use the [startDayHour](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/startDayHour.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#startDayHour') and the [endDayHour](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/endDayHour.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#endDayHour') options to set start and end hours of the time scale. The time scale is displayed in all views, except **month** and **timelinemonth**. 

The [cellDuration](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/cellDuration.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#cellDuration') option specifies the time cell duration in minutes. The time scale labels change depending on the specified value.

To specify the first day of a week, set the [firstDayOfWeek](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/firstDayOfWeek.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#firstDayOfWeek') option. It does not affect the appearance of the **day**, **timelineDay** and **timelineMonth** views.

In the following cases, appointments are marked with icons.

- If an appointment is a [recurrent appointment](/Documentation/Guide/UI_Widgets/Scheduler/Appointment_Types/#Recurrent_Appointments), it is marked with the recurrence icon.  

![Recurrence Icon](/images/UiWidgets/Scheduler_Recurrence_Icon.png)

- In all views except **agenda**, if an appointment lasts for several days and partially lays outside the current view, it is marked with the break icon. 

![Break Icon](/images/UiWidgets/Scheduler_Break_Icon.png)

The [crossScrollingEnabled](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/crossScrollingEnabled.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#crossScrollingEnabled') option enables scrolling in both directions at the same time. This option is useful when displaying [Scheduler](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/') on narrow screens. This option is not available in the **agenda** view.
