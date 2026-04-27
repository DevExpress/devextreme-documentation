---
id: dxScheduler.Options.hiddenWeekDays
type: Array<Enums.DayOfWeek>
default: undefined
---
---
##### shortDescription
Hides specific days of the week in all Scheduler views.

---
Use this property to hide days of the week globally.

Specify an array of day numbers from `0` (Sunday) to `6` (Saturday). Scheduler filters out invalid values, removes duplicates, and sorts the remaining values.

This property applies to all views. To override it for a specific view, set the [same property](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#hiddenWeekDays) in the [view's configuration object](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/).

If you specify all seven days, Scheduler logs the `W1029` warning (`'hiddenWeekDays' must leave at least one day visible.`) and ignores this setting.