The **day** view displays appointments assigned to the specified date.

![Day View](/images/UiWidgets/Scheduler_Day_View.png)

The time scale is located at the left side of the view. Appointments are placed from top to bottom.

If time intervals of appointments overlap each other, the width of appointments decreases and they are placed alongside.

By default, the all-day panel is available in the **day** view. If there are no appointments in the all-day panel, it is narrow. After adding appointments, it becomes wide. The all-day panel can show three appointments, if there are more, they are shown collapsed. 

![Collapsed appointments](/images/UiWidgets/Scheduler_Day_Collapsed_Appointments.png)

If collapsed appointments occupy more than 75% of the time cell width, they are displayed as a single appointment collector. 

![Appointment Collector](/images/UiWidgets/Scheduler_Day_Appointment_Collector.png)

Click the appointment collector to view associated appointments in a drop-down list. 

![Drop-down List of Appointments](/images/UiWidgets/Scheduler_Day_DropDown_List.png)

To make the all-day panel invisible, set the [showAllDayPanel](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/showAllDayPanel.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel') option to *false*. 

If you [group appointments by resources](/concepts/05%20Widgets/Scheduler/40%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/Widgets/Scheduler/Resources/#Group_Appointments_by_Resources'), the [resource headers](/concepts/05%20Widgets/Scheduler/10%20Visual%20Elements/040%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Visual_Elements/#Resource_Headers') are displayed above the all-day panel.

![Resource headers](/images/UiWidgets/Scheduler_Day_Resource_Headers.png)
