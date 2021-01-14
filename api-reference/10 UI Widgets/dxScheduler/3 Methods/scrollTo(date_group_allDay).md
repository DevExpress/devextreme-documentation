---
id: dxScheduler.scrollTo(date, group, allDay)
---
---
##### shortDescription
Scrolls the current view to a specified date, time, and optionally, appointment group.

##### param(date): Date
A date and time.

##### param(group): Object | undefined
Specifies the appointment group if any.

##### param(allDay): Boolean | undefined
If **true**, scrolls to the top of the view. Appliable for the *"day"* and *"week"* [views](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/) if [showAllDayPanel](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel) is enabled.

---

This method is available for all views except *"month"* and *"agenda"*.

[note] If you need to navigate to a date outside of the current view, use the [currentDate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentDate) property instead. 

#####See Also#####
#include common-link-callmethods
- [Group Appointments by Resources](/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/)
- [currentView](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentView)
- [startDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#startDayHour)
- [endDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#endDayHour)
