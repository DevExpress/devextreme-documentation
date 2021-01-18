---
id: dxScheduler.scrollTo(date, group, allDay)
---
---
##### shortDescription
Scrolls the current view to a specified position. Available for all views except *"agenda"*. Requires the [height](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#height) property to be set.

##### param(date): Date
A date and time to scroll to.

##### param(group): Object | undefined
An appointment group (optional).

##### param(allDay): Boolean | undefined
If **true**, scrolls the view to the all-day panel of the specified group. Applies only if the all-day panel is [visible](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel).

---

[note] If you need to navigate to a date outside of the current view, use the [currentDate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentDate) property instead. 

#####See Also#####
#include common-link-callmethods
- [Group Appointments by Resources](/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/)
- [currentView](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentView)
- [scrolling](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/scrolling/)
- [crossScrollingEnabled](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#crossScrollingEnabled)
