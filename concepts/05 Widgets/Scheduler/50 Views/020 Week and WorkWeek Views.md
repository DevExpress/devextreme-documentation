The **week** and **workWeek** views display appointments assigned to a week. However, the **workWeek** view does not include the weekend. 

![Week View](/images/UiWidgets/Scheduler_Week_View.png)

The time scale is located at the left side of the view. The day scale is at the top of the view. Appointments are placed from top to bottom.

If time intervals of appointments coincide or overlap, appointments are reduced in width and placed alongside.

The all-day panel is displayed above time cells. If there are no all-day appointments, the panel is narrow. After adding appointments, it becomes wide. The panel cell can display three appointments; if there are more, they are shown collapsed. 

![Collapsed appointments](/images/UiWidgets/Scheduler_Week_Collapsed_Appointments.png)

If collapsed appointments occupy more than 75% of the time cell width, they are displayed as a single appointment collector. 

![Appointment Collector](/images/UiWidgets/Scheduler_Week_Appointment_Collector.png)

Click the appointment collector to view associated appointments in a drop-down list. 

![Drop-down List of Appointments](/images/UiWidgets/Scheduler_Week_DropDown_List.png)

Assign *false* to the [showAllDayPanel](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/showAllDayPanel.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel') option to hide the all-day panel. 

If you use [grouping](/concepts/05%20Widgets/Scheduler/40%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/Widgets/Scheduler/Resources/#Group_Appointments_by_Resources') for appointments, the [resource headers](/concepts/05%20Widgets/Scheduler/10%20Visual%20Elements/040%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Visual_Elements/#Resource_Headers') are located above the day scale.

![Resource Headers](/images/UiWidgets/Scheduler_Week_Resource_Headers.png)
