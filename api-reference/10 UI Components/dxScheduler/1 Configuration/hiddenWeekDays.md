---
id: dxScheduler.Options.hiddenWeekDays
type: Array<Enums.DayOfWeek> | undefined
default: undefined
---
---
##### shortDescription
Hides specific days of the week in all Scheduler views.

---
Use this property to hide specific days of the week regardless of the current view.

Specify an array of day numbers from `0` (Sunday) to `6` (Saturday). Scheduler filters out invalid values and removes duplicates.

This property applies to all views. To override it for a specific view, set the [same property](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/hiddenWeekDays.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#hiddenWeekDays') in the [view's configuration object](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/').

If you specify all seven days, Scheduler logs the `W1029` warning (`'hiddenWeekDays' must leave at least one day visible.`) and ignores this setting.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/HiddenDays/"
}
