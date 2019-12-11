---
default: 'month'
acceptValues: 'month' | 'year' | 'decade' | 'century'
type: String
---
---
##### shortDescription
Specifies the current calendar zoom level.

---
Zoom level determines the size of a date range displayed on a single calendar page.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `CalendarZoomLevel` enum. This enum accepts the following values: `Month`, `Year`, `Decade` and `Century`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorscalendarcalendarcalendar" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>