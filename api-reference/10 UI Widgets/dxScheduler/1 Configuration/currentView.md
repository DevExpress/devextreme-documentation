---
default: 'day'
acceptValues: 'agenda' | 'day' | 'month' | 'timelineDay' | 'timelineMonth' | 'timelineWeek' | 'timelineWorkWeek' | 'week' | 'workWeek'
type: String
---
---
##### shortDescription
Specifies the currently displayed view. Accepts the view's [name](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/name.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#name') or [type](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#type').

---
In all situations when more than one view meets the **currentView** condition, the first matching view from the [views](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/') array takes precedence.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `SchedulerViewType` enum. This enum accepts the following values: `Day`, `Week`, `WorkWeek`, `Month`, `TimelineDay`, `TimelineWeek`, `TimelineWorkWeek`, `TimelineMonth` and `Agenda`.

#####See Also#####
- [Views](/concepts/05%20Widgets/Scheduler/060%20Views '/Documentation/Guide/Widgets/Scheduler/Views/')
- [View Switcher](/concepts/05%20Widgets/Scheduler/070%20View%20Switcher.md '/Documentation/Guide/Widgets/Scheduler/View_Switcher/')