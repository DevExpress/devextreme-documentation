---
dep: onClick.md
EventForAction: ..\4 Events\areaClick.md
default: null
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [areaClick](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/4%20Events/areaClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#areaClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
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
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked area. An object that represents this area has fields and methods documented in the [Area](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Area '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/') class description.

Alternatively, you can navigate to a specific URL when the **areaClick** event fires. For this purpose, assign this URL to the **onAreaClick** option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapcolorscustomization/"
}