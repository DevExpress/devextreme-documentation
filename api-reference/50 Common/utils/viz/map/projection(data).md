---
id: viz.map.projection(data)
module: viz/vector_map/projection
export: projection
---
---
##### shortDescription
Creates a new projection.

##### return: Object
The projection.

##### param(data): Object
An object specifying the conversion functions.

##### field(data.aspectRatio): Number
The projection's aspect ratio.

##### field(data.from): function()
The function that converts coordinates from the [-1, 1] * [-1, 1] space to the data space.

##### field(data.to): function()
The function that converts coordinates from a data space to [-1, 1] * [-1, 1] space.

---
After creating the custom projection, you can [add it to the projections storage](/api-reference/50%20Common/utils/viz/map/projection/add(name_projection).md '/Documentation/ApiReference/Common/Utils/viz/map/projection/#addname_projection') or assign the returning object to the [projection](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/projection.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#projection') option of the  widget.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/maps-vector_map-custom_projection/"
}