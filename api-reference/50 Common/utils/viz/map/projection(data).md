---
module: viz/vector_map/projection
export: projection
---
---
##### shortDescription
Creates a new projection.

##### param(data): object
An object specifying the conversion functions.

##### field(data.to): function(coordinates)
The function that converts coordinates from a data space to [-1, 1] * [-1, 1] space.

##### field(data.from): function(coordinates)
The function that converts coordinates from the [-1, 1] * [-1, 1] space to the data space.

##### field(data.aspectRatio): number
The projection's aspect ratio.

##### return: object
The projection.

---
After creating the custom projection, you can [add it to the projections storage](/api-reference/50%20Common/utils/viz/map/projection/add(name_projection).md '/Documentation/ApiReference/Common/Utils/viz/map/projection/#addname_projection') or assign the returning object to the [projection](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/projection.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#projection') option of the **VectorMap** widget.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/maps-vector_map-custom_projection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>