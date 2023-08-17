---
id: dxCalendar.Options.disabledDates
type: Array<Date> | function(data)
default: null
---
---
##### shortDescription
Specifies dates that users cannot select.

##### param(data): DisabledDate
Information about the checked date.

##### return: Boolean
**true** if the date should be disabled; otherwise **false**.

---
<!-- %fullDescription% -->

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/"
}

In cases of *'multiple'* and *'range'* [selection modes](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#selectionMode), the behavior of disabled dates in Calendar is the following:

- If you specify the [values](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#values) property programmatically, disabled dates in the values array are selected.

- If you use UI to change selection (by clicks, Enter key, or [selecting a week on click](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#selectWeekOnClick)), you cannot select disabled dates in the *'multiple'* mode. In the *'range'* mode, disabled dates cannot be selected as the range start and range end, but can be included inside the range.

#####See Also#####
- [Specify the Value Range](/concepts/05%20UI%20Components/Calendar/12%20Specify%20the%20Value%20Range.md '/Documentation/Guide/UI_Components/Calendar/Specify_the_Value_Range/')

<!-- import * from 'api-reference\10 UI Components\dxDateBox\1 Configuration\disabledDates.md' -->