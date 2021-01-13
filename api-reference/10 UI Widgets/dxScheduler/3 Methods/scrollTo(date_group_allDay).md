---
id: dxScheduler.scrollTo(date, group, allDay)
---
---
##### shortDescription
Scrolls the current view to a specified date, time, and optionally, group.

##### param(date): Date
A date and time.

##### param(group): Object | undefined
Specifies the group if any.

##### param(allDay): Boolean | undefined
If **true**, scrolls to the top of the view. Appliable for the *"day"* and *"week"* [views](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/) if [showAllDayPanel](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel) is enabled.

---

If you need to display a date outside of the current view, set the currentDate property.

[note] This method is available for all views except *"month"* and *"agenda"*.

#####See Also#####
#include common-link-callmethods
- [startDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#startDayHour)
- [endDayHour](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#endDayHour)
- [Group Appointments by Resources](/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/)
