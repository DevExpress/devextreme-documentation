---
module: viz/vector_map/projection
export: projection
---
---
##### shortDescription
Creates a new projection.

##### param(data): Object
An object specifying the conversion functions.

##### field(data.to): function()
The function that converts coordinates from a data space to [-1, 1] * [-1, 1] space.

##### field(data.from): function()
The function that converts coordinates from the [-1, 1] * [-1, 1] space to the data space.

##### field(data.aspectRatio): Number
The projection's aspect ratio.

##### return: Object
The projection.

---
After creating the custom projection, you can [add it to the projections storage](/Documentation/ApiReference/Common/Utils/viz/map/Methods/#addname_projection) or assign the returning object to the [projection](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/projection.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#projection') option of the  widget.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/maps-vector_map-custom_projection/"
}