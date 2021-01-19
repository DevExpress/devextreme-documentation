---
id: dxDateBox.Options.maxZoomLevel
acceptValues: 'century' | 'decade' | 'month' | 'year'
type: String
default: 'month'
dep: dxDateBox.Options.calendarOptions
---
---
##### shortDescription
Specifies the [maximum zoom level](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/maxZoomLevel.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#maxZoomLevel') of a [calendar](/api-reference/10%20UI%20Widgets/dxCalendar '/Documentation/ApiReference/UI_Widgets/dxCalendar/'), which is used to pick the date.

---
The zoom level ascends from "month" to "century" ("month"->"year"->"decade"->"century").

The option makes sense only if the [pickerType](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType') option is set to "calendar".

#include common-ref-enum with {
    enum: "`CalendarZoomLevel`",
    values: "`Month`, `Year`, `Decade`, and `Century`"
}