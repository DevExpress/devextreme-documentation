---
dep: ..\1 Configuration\onClick.md
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Raised when an [area](/concepts/05%20Widgets/VectorMap/10%20Visual%20Elements/10%20Areas.md '/Documentation/Guide/Widgets/VectorMap/Visual_Elements/#Areas') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.target): areaObjects
The [Area](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Area '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/') object.

---
Main article: [onAreaClick](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/onAreaClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onAreaClick')

#####See Also#####
#include common-link-handleevents