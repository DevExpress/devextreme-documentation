---
id: dxScheduler.scrollToTime(hours, minutes, date)
---
---
##### shortDescription
Scrolls the current view to a specific day and time.

##### param(hours): Number
An hour component.

##### param(minutes): Number
A minute component.

##### param(date): Date | undefined
A date component.

---
If the specified date is outside the current date range, the method scrolls the view to the specified time.

[note] This method requires that the markup is already rendered. To scroll the **Scheduler** at launch, call this method in the [onContentReady](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onContentReady') function.

[note] This method does not work in the [month view](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types/030%20Month%20View.md '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Month_View').

#####See Also#####
#include common-link-callmethods