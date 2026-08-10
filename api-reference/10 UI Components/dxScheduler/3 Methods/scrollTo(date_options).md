---
id: dxScheduler.scrollTo(date, options)
---
---
##### shortDescription
Scrolls the current view to a specified position. Available for all views except *"agenda"*. To use this method, specify the [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#height') property.

##### param(date): Date
The date and time to which to scroll.

##### param(options): Object
An object that specifies additional options.

##### field(options.alignInView): Enums.SchedulerScrollToAlign
Specifies the alignment of the date in the view.

##### field(options.allDay): Boolean
Specifies whether to scroll to the all-day panel. Applies only if the all-day panel is [visible](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/showAllDayPanel.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#showAllDayPanel').

##### field(options.group): Object
Specifies a group ID if appointments are [grouped by resources](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GroupOrientation/).

---
Use this method as follows:

    // Scroll to current date and time. The date is aligned with the center of the view.
    scheduler.scrollTo(new Date());

    // Scroll to current date and time. The date is aligned with the start of the view.
    scheduler.scrollTo(new Date(), { alignInView: 'start' });

    // Scroll to the all-day panel of the second group.
    scheduler.scrollTo(new Date(), { group: 2, allDay: true });
