---
##### shortDescription
Gets the default or custom projection from the projection storage.

##### param(name): string
The projection name.

##### return: object
The projection.

---
By default, you can get the following projections by their names.

- *"mercator"* &#8212; [Mercator projection](https://en.wikipedia.org/wiki/Mercator_projection).
- *"equirectangular"* &#8212; [Equirectangular projection](https://en.wikipedia.org/wiki/Equirectangular_projection).
- *"lambert"* &#8212; [Lambert cylindrical projection](https://en.wikipedia.org/wiki/Lambert_cylindrical_equal-area_projection).
- *"miller"* &#8212; [Miller cylindrical projection](https://en.wikipedia.org/wiki/Miller_cylindrical_projection).

You can also [implement your own projection](/api-reference/50%20Common/utils/viz/map/projection(data).md '/Documentation/ApiReference/Common/utils/viz/map/#projectiondata') and [add it to the projections storage](/api-reference/50%20Common/utils/viz/map/projection/add(name_projection).md '/Documentation/ApiReference/Common/utils/viz/map/projection/#addname_projection'). After that, you can get the added projection using the **get(name)** method.

To apply the projection, assign the returning object to the [projection](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/projection.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#projection') option of the **VectorMap** widget.