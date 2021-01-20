---
id: dxVectorMap.Options.onCenterChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed each time the center coordinates are changed.

##### param(e): Object
Information about the event.

##### field(e.center): Array<Number>
The updated geographical coordinates of the center.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/DynamicViewport/"
}