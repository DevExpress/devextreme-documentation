---
id: dxScheduler.Options.currentView
acceptValues: 'agenda' | 'day' | 'month' | 'timelineDay' | 'timelineMonth' | 'timelineWeek' | 'timelineWorkWeek' | 'week' | 'workWeek'
type: String
default: 'day'
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the currently displayed view. Accepts the view's [name](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/name.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#name') or [type](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#type').

---

When more than one view matches the **currentView** value, the **Scheduler** displays the first matching view from the [views](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/) array.

To subscribe to changes of the current view, use the [onOptionChanged](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onOptionChanged) handler.

You can to scroll to a specified position in the current view. For this, use the [scrollTo(date, group, allDay)](/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#scrollTodate_group_allDay) method.

#include common-ref-enum with {
    enum: "`SchedulerViewType`",
    values: "`Day`, `Week`, `WorkWeek`, `Month`, `TimelineDay`, `TimelineWeek`, `TimelineWorkWeek`, `TimelineMonth`, and `Agenda`"
}

#####See Also#####
- [Views](/concepts/05%20Widgets/Scheduler/060%20Views '/Documentation/Guide/Widgets/Scheduler/Views/')
- [View Switcher](/concepts/05%20Widgets/Scheduler/070%20View%20Switcher.md '/Documentation/Guide/Widgets/Scheduler/View_Switcher/')
