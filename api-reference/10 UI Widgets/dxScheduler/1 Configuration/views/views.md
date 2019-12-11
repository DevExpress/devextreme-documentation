---
id: dxScheduler.Options.views
acceptValues: 'day' | 'week' | 'workWeek' | 'month' | 'timelineDay' | 'timelineWeek' | 'timelineWorkWeek' | 'timelineMonth' | 'agenda'
type: Array<String, Object>
default: ['day', 'week']
---
---
##### shortDescription
Specifies and configures the [views](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/') to be available in the [view switcher](/concepts/05%20Widgets/Scheduler/070%20View%20Switcher.md '/Documentation/Guide/Widgets/Scheduler/View_Switcher/').

---
This option accepts an array of strings and objects:

- **String**        
A view name. Use a string if the view does not need customization, but should be available in the view switcher.

- **Object**        
An individual view's configuration. Set the [type](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#type') option to specify the view to which the configuration should apply. This documentation section describes available options. The options set for an individual view have a higher priority than the same options set on the root level for all views.

To specify the default view, use the [currentView](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/currentView.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentView') option.

#include common-ref-enum with {
    enum: "`SchedulerViewType`",
    values: "`Day`, `Week`, `WorkWeek`, `Month`, `TimelineDay`, `TimelineWeek`, `TimelineWorkWeek`, `TimelineMonth`, and `Agenda`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomizeIndividualViews/"
}