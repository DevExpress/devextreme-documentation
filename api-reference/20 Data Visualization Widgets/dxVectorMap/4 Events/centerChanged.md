---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Raised each time the center coordinates are changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.center): Array<Number>
The updated geographical coordinates of the center.

---
Main article: [onCenterChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#nCenterChanged)

#####See Also#####
#include common-link-handleevents