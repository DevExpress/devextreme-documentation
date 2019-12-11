---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Raised when a tooltip appears.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): basePointObject
The series point whose tooltip is shown; described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
Main article: [onTooltipShown](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onTooltipShown.md '{basewidgetpath}/Configuration/#onTooltipShown')

#####See Also#####
#include common-link-handleevents