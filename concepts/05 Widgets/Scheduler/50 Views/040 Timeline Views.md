Timeline views display appointments associated with a particular time period on a horizontal timeline.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Timelines/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The **Scheduler** widget supports the following timeline views.

- **timelineDay** 

![TimelineDay View](/images/UiWidgets/Scheduler_TimelineDay_View.png)

- **timelineWeek** and **timelineWorkWeek**

![TimelineWeek View](/images/UiWidgets/Scheduler_TimelineWeek_View.png)

- **timelineMonth**

![TimelineMonth View](/images/UiWidgets/Scheduler_TimelineMonth_View.png)

On timeline views, appointments are placed from left to right. The time scale is located at the top of the view. In the **timelineWeek** and **timelineWorkWeek** views the day scale is located at the top, above the time scale. 

If time intervals of appointments coincide or overlap, the width of appointments decreases and they are placed alongside or under each other.

If appointments are [grouped by resources](/concepts/05%20Widgets/Scheduler/40%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/Widgets/Scheduler/Resources/#Group_Appointments_by_Resources'), the [resource headers](/concepts/05%20Widgets/Scheduler/10%20Visual%20Elements/040%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Visual_Elements/#Resource_Headers') are located at the left side of the view.

![Resource Headers](/images/UiWidgets/Scheduler_Timeline_Resource_Headers.png)

In the **timelineMonth** view, the size of an appointment depends on its duration in days. Even if an appointment lasts only for several hours or minutes, it occupies the entire day cell.

![Appointment](/images/UiWidgets/Scheduler_TimelineMonth_Appointment.png)
