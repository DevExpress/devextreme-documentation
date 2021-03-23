---
id: dxDateBox.Options.minZoomLevel
acceptValues: 'century' | 'decade' | 'month' | 'year'
type: String
default: 'century'
dep: dxDateBox.Options.calendarOptions
---
---
##### shortDescription
Specifies the [minimal zoom level](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/minZoomLevel.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#minZoomLevel') of a [calendar](/api-reference/10%20UI%20Components/dxCalendar '/Documentation/ApiReference/UI_Components/dxCalendar/'), which is used to pick the date.

---
The zoom level ascends from "month" to "century" ("month"->"year"->"decade"->"century").

The property makes sense only if the [pickerType](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#pickerType') property is set to "calendar".

#include common-ref-enum with {
    enum: "`CalendarZoomLevel`",
    values: "`Month`, `Year`, `Decade`, and `Century`"
}