---
id: dxCalendar.Options.zoomLevel
acceptValues: 'century' | 'decade' | 'month' | 'year'
type: String
default: 'month'
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the current calendar zoom level.

---
Zoom level determines the size of a date range displayed on a single calendar page.

#include common-ref-enum with {
    enum: "`CalendarZoomLevel`",
    values: "`Month`, `Year`, `Decade`, and `Century`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/"
}