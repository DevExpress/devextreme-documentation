---
id: dxScheduler.Options.views
acceptValues: 'day' | 'week' | 'workWeek' | 'month' | 'timelineDay' | 'timelineWeek' | 'timelineWorkWeek' | 'timelineMonth' | 'agenda'
type: Array<String, Object>
default: ['day', 'week']
---
---
##### shortDescription
Specifies and configures the [views](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/') to be available in the [view switcher](/concepts/05%20UI%20Components/Scheduler/070%20View%20Switcher.md '/Documentation/Guide/UI_Components/Scheduler/View_Switcher/').

---
This property accepts an array of strings and objects:

- **String**        
A view name. Use a string if the view does not need customization, but should be available in the view switcher.

- **Object**        
An individual view's configuration. Set the [type](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#type') property to specify the view to customize. Properties set for an individual view override their corresponding component configuration properties.

        <!-- tab: JavaScript-->views: [{
                type: 'workWeek',
                name: 'Vertical Grouping',
                groupOrientation: 'vertical',
                cellDuration: 60,
                intervalCount: 2,
            }, {
                type: 'workWeek',
                name: 'Horizontal Grouping',
                groupOrientation: 'horizontal',
                cellDuration: 30,
                intervalCount: 2,
            },
            'agenda'
        ]

    For more information about how to customize an individual view, refer to the following topic: [Customize Individual Views](/concepts/05%20UI%20Components/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/Customize_Individual_Views/').

To specify the current view, configure the [currentView](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/currentView.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentView') property.

[note]

- Be sure to include the **currentView** value in the **views** array.
- If the **views** array is empty or contains a single item, Scheduler hides the view switcher. 

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomizeIndividualViews/"
}
#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-scheduler-disable-dates-in-timelines-view"
}
