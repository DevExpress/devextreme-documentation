---
id: dxVectorMap.Options.onZoomFactorChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed each time the zoom factor is changed.

##### param(e): Object
Information about the event.

##### field(e.component): dxVectorMap
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.zoomFactor): Number
The updated zoom factor.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/DynamicViewport/"
}