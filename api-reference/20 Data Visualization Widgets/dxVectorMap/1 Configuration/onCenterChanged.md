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

##### field(e.component): dxVectorMap
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### return: any
<!-- Description goes here -->

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/DynamicViewport/"
}