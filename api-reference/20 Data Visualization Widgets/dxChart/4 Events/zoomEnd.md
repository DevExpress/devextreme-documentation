---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Raised when zooming or scrolling ends.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.rangeStart): Date | Number
The argument axis' start value after zooming or scrolling.

##### field(e.rangeEnd): Date | Number
The argument axis' end value after zooming or scrolling.

---
Main article: [onZoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd')

#####See Also#####
#include common-link-handleevents