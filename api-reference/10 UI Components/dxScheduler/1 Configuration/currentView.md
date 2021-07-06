---
id: dxScheduler.Options.currentView
acceptValues: 'agenda' | 'day' | 'month' | 'timelineDay' | 'timelineMonth' | 'timelineWeek' | 'timelineWorkWeek' | 'week' | 'workWeek'
type: String
default: 'day'
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the currently displayed view. Accepts the view's [name](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/name.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#name') or [type](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type').

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/BasicViews/"
}

When more than one view matches the **currentView** value, the Scheduler displays the first matching view from the [views](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/') array.

To subscribe to changes of the current view, use the [onOptionChanged](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/onOptionChanged.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onOptionChanged') handler.

#####See Also#####
- [Views](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/010%20Day%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/')
- [View Switcher](/concepts/05%20UI%20Components/Scheduler/070%20View%20Switcher.md '/Documentation/Guide/UI_Components/Scheduler/View_Switcher/')
