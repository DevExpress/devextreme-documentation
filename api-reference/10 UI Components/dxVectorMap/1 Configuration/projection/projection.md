---
id: dxVectorMap.Options.projection
type: Enums.VectorMapProjection | VectorMapProjectionConfig | String | Object
default: 'mercator'
notUsedInTheme: 
inheritsType: VectorMapProjectionConfig
---
---
##### shortDescription
Specifies the map projection.

---
You can use one of the following out-of-the-box projections:

- <a href="https://en.wikipedia.org/wiki/Mercator_projection" target="_blank">Mercator projection</a>
- <a href="https://en.wikipedia.org/wiki/Equirectangular_projection" target="_blank">Equirectangular projection</a>
- <a href="https://en.wikipedia.org/wiki/Lambert_cylindrical_equal-area_projection" target="_blank">Lambert cylindrical projection</a>
- <a href="https://en.wikipedia.org/wiki/Miller_cylindrical_projection" target="_blank">Miller cylindrical projection</a>

To set a custom projection, implement two functions ([from](/api-reference/_hidden/VectorMapProjectionConfig/from.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/projection/#from') and [to](/api-reference/_hidden/VectorMapProjectionConfig/to.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/projection/#to')) that convert coordinates from geographical to UI component coordinate systems. The [to](/api-reference/_hidden/VectorMapProjectionConfig/to.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/projection/#to') callback is executed to render initial data in VectorMap. The [from](/api-reference/_hidden/VectorMapProjectionConfig/from.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/projection/#from') callback is called when a user executes the pan or move action. The [from](/api-reference/_hidden/VectorMapProjectionConfig/from.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/projection/#from') and [to](/api-reference/_hidden/VectorMapProjectionConfig/to.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/projection/#to') callbacks should have the same ratio:

    <!-- tab: JavaScript --> const projection = {
        from: ([x, y]) => [x * A, y * B],
        to: ([lon, lat]) => [lon / A, lat / B],
    };

In addition, specify the projection's [aspectRatio](/api-reference/_hidden/VectorMapProjectionConfig/aspectRatio.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/projection/#aspectRatio').




#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/CustomProjection/",
    name: "Custom Projection"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/FloorPlan/",
    name: "Floor Plan"
}