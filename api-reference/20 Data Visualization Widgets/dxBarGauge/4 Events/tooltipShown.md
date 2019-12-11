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

##### field(e.target): Object
Information on the bar being pressed or hovered over with the mouse pointer. Contains the **index** field.

---
Main article: [onTooltipShown](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge/1%20Configuration/onTooltipShown.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#onTooltipShown')

#####See Also#####
#include common-link-handleevents