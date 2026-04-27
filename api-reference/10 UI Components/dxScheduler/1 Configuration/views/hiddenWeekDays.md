---
id: dxScheduler.Options.views.hiddenWeekDays
type: Array<Enums.DayOfWeek>
default: undefined
---
---
##### shortDescription
Hides specific days of the week in this view.

---
Use this property to hide days of the week in an individual view configuration object.

Specify an array of day numbers from `0` (Sunday) to `6` (Saturday). Scheduler filters out invalid values, removes duplicates, and sorts the remaining values.

This per-view setting overrides the component-level [hiddenWeekDays](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/#hiddenWeekDays) value. If this property is not specified for a view, Scheduler uses the component-level value.

For `workWeek` and `timelineWorkWeek`, set this property to an empty array to display all days of the week in that view.

If you specify all seven days, Scheduler logs warning `W1029` and ignores this setting.