---
default: 'century'
acceptValues: 'century' | 'decade' | 'month' | 'year'
type: String
---
---
##### shortDescription
Specifies the [minimal zoom level](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/minZoomLevel.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#minZoomLevel') of a [calendar](/api-reference/10%20UI%20Widgets/dxCalendar '/Documentation/ApiReference/UI_Widgets/dxCalendar/'), which is used to pick the date.

---
The zoom level ascends from 'month' to 'century' ('month'->'year'->'decade'->'century').

The option makes sense only if the [pickerType](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType') option is set to 'calendar'.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `CalendarZoomLevel` enum. This enum accepts the following values: `Month`, `Year`, `Decade` and `Century`.