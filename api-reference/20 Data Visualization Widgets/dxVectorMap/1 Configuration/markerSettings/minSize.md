---
dep: ..\layers\minSize.md
default: 20
type: Number
---
---
##### shortDescription
Specifies the pixel-measured diameter of the marker that represents the smallest value. Setting this option makes sense only if you use markers of the *bubble* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/markerSettings/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/markerSettings/#type').

---
When you use bubble markers on your map, their sizes depend on their values. The biggest value will be represented by the largest bubble. Similarly, the smallest value will be represented by the smallest bubble. Bubbles that represent values in between will have sizes proportional to the represented values. To specify the sizes of the largest and smallest bubbles, use the **maxSize** and **minSize** properties of the **markerSettings** object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/mapsvectormapvectormapbubblemarkers/"
}