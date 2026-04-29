---
id: dxScheduler.Options.views.hiddenWeekDays
type: Array<Enums.DayOfWeek>
default: undefined
---
---
##### shortDescription
Hides specific days of the week in this view.

---
Use this property to specify hidden days of the week in an individual view configuration object.

Specify an array of day numbers from `0` (Sunday) to `6` (Saturday). Values outside this range are ignored, and duplicates are removed.

This per-view setting overrides the component-level [hiddenWeekDays](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/#hiddenWeekDays) value. If this property is not specified for a view, Scheduler uses the component-level value.

In `workWeek` and `timelineWorkWeek` views, set this property to an empty array to display all days of the week.

If you specify all seven days, Scheduler logs the `W1029` warning and ignores this setting.