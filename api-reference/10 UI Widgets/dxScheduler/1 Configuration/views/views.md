---
default: ['day', 'week']
acceptValues: 'day' | 'week' | 'workWeek' | 'month' | 'timelineDay' | 'timelineWeek' | 'timelineWorkWeek' | 'timelineMonth' | 'agenda'
type: Array
---
---
##### shortDescription
Configures individual views.

---
The option accepts an array of views to be available within the scheduler [View Selector](/Documentation/Guide/Widgets/Scheduler/Visual_Elements/#View_Selector). If you need to customize a view, add a configuration object for it to the array. The configuration options that you can specify are listed further in this documentation section. If a view does not need individual customization, just add its type to the array.

<!---->

    <!--JavaScript-->
    var schedulerOptions = {
        // . . .
        dataSource: schedulerData,
        startDayHour: 9,
        endDayHour: 18,
        views: [
            { type: "day", startDayHour: 7, endDayHour: 22 },
            { type: "workWeek", cellDuration: 60 },
            "week",
            "agenda"
        ]
    };

Set a default view by using the [currentView](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/currentView.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentView') option.  
For more information on scheduler views, refer to the [Views](/concepts/05%20Widgets/Scheduler/50%20Views '/Documentation/Guide/Widgets/Scheduler/Views/') guide.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `SchedulerViewType` enum. This enum accepts the following values: `Day`, `Week`, `WorkWeek`, `Month`, `TimelineDay`, `TimelineWeek`, `TimelineWorkWeek`, `TimelineMonth` and `Agenda`.

<a href=" https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scheduler-customize_individual_views" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a> 
<a href="https://www.youtube.com/watch?v=JHUSz3S0cWw&index=2&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>