---
id: dxScheduler.scrollTo(date, group, allDay)
---
---
##### shortDescription
Scrolls the current view to a specified position. Available for all views except *"agenda"*. You should specify the [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#height') property to use this method.

##### param(date): Date
A date and time to scroll to.

##### param(group): Object | undefined
An appointment group (optional).

##### param(allDay): Boolean | undefined
If **true**, scrolls the view to the all-day panel of the specified group. Applies only if the all-day panel is [visible](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/showAllDayPanel.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#showAllDayPanel').

---

The following example shows how to use this method:

    // Scroll to January 14, 2021
    scrollTo(new Date(2021, 0, 14));
    // Scroll to the second group at 5:30 p.m. on January 14, 2021
    scrollTo(new Date(2021, 0, 14, 17, 30), {groupId: 2})
    // Scroll to the all-day panel of the second group
    scrollTo(new Date(2021, 0, 14, 17, 30), {groupId: 2}, true);

[note] If you need to navigate to a date outside the current view, use the [currentDate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/currentDate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentDate') property instead. 

#####See Also#####
#include common-link-callmethods
- [Group Appointments by Resources](/concepts/05%20UI%20Components/Scheduler/040%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/')
- [currentView](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/currentView.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentView')
- [scrolling](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/scrolling.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/scrolling/')
- [crossScrollingEnabled](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/crossScrollingEnabled.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#crossScrollingEnabled')
