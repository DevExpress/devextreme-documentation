---
default: 'day'
acceptValues: 'day' | 'week' | 'workWeek' | 'month' | 'timelineDay' | 'timelineWeek' | 'timelineWorkWeek' | 'timelineMonth' | 'agenda'
type: String
---
---
##### shortDescription
Specifies the view used in the scheduler by default.

---
Specify the views to be available in the scheduler's [View Selector](/Documentation/Guide/Widgets/Scheduler/Visual_Elements/#View_Selector) for end users in the [views](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#views') array. The default view used by the widget when rendering the scheduler is specified by the **currentView** option.  
For more information on scheduler views, refer to the [Views](/concepts/05%20Widgets/Scheduler/50%20Views '/Documentation/Guide/Widgets/Scheduler/Views/') guide.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `SchedulerViewType` enum. This enum accepts the following values: `Day`, `Week`, `WorkWeek`, `Month`, `TimelineDay`, `TimelineWeek`, `TimelineWorkWeek`, `TimelineMonth` and `Agenda`.