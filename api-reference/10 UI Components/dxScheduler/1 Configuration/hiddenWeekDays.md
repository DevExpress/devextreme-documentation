---
id: dxScheduler.Options.hiddenWeekDays
type: Array<Enums.DayOfWeek>
default: undefined
---
---
##### shortDescription
Hides specific days of the week in all Scheduler views.

---
Use this property to hide weekdays globally.

Specify an array of day numbers from `0` (Sunday) to `6` (Saturday). Scheduler filters out invalid values, removes duplicates, and sorts the remaining values.

This property applies to all views. To override it for a specific view, set the [same property](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#hiddenWeekDays) in the [view's configuration object](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/).

If you specify all seven days, Scheduler logs warning `W1029` (`'hiddenWeekDays' must leave at least one weekday visible.`), and ignores this setting.