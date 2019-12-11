---
##### shortDescription
Scrolls the current view to a specific day and time.

##### param(hours): Number
An hour component.

##### param(minutes): Number
A minute component.

##### param(date): Date|undefined
A date component.

---
If the specified date is outside the current date range, the method scrolls the view to the specified time.

[note] This method requires the markup to be already rendered. If you want to scroll the **Scheduler** at launch, call this method in the [onContentReady](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onContentReady') function.

#####See Also#####
#include common-link-callmethods