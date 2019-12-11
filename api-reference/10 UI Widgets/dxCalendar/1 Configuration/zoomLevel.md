---
default: 'month'
acceptValues: 'century' | 'decade' | 'month' | 'year'
type: String
---
---
##### shortDescription
Specifies the current calendar zoom level.

---
Zoom level determines the size of a date range displayed on a single calendar page.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `CalendarZoomLevel` enum. This enum accepts the following values: `Month`, `Year`, `Decade` and `Century`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/editorscalendarcalendarcalendar"
}