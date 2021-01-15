---
id: dxScheduler.Options.firstDayOfWeek
acceptValues: 0 | 1 | 2 | 3 | 4 | 5 | 6
type: Number
default: undefined
---
---
##### shortDescription
Specifies the first day of a week. Does not apply to the [agenda view](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types/050%20Agenda%20View.md '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Agenda_View').

---
This option can accept a value from 0 to 6:

- 0 - Sunday
- 1 - Monday
- 2 - Tuesday
- 3 - Wednesday
- 4 - Thursday
- 5 - Friday
- 6 - Saturday

The value provided by the culture settings is used by default.

#include common-ref-enum with {
    enum: "`FirstDayOfWeek`",
    values: "`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, and `Saturday`"
}