---
id: viz.map.projection.get(name)
---
---
##### shortDescription
Gets the default or custom projection from the projection storage.

##### return: Object
The projection.

##### param(name): String
The projection's name.

---
By default, you can get the following projections by their names.

- *"mercator"* &#8212; <a href="https://en.wikipedia.org/wiki/Mercator_projection" target="_blank">Mercator projection</a>.
- *"equirectangular"* &#8212; <a href="https://en.wikipedia.org/wiki/Equirectangular_projection" target="_blank">Equirectangular projection</a>.
- *"lambert"* &#8212; <a href="https://en.wikipedia.org/wiki/Lambert_cylindrical_equal-area_projection" target="_blank">Lambert cylindrical projection</a>.
- *"miller"* &#8212; <a href="https://en.wikipedia.org/wiki/Miller_cylindrical_projection" target="_blank">Miller cylindrical projection</a>.

You can also [implement your own projection](/api-reference/50%20Common/utils/viz/map/projection(data).md '/Documentation/ApiReference/Common/utils/viz/map/#projectiondata') and [add it to the projections storage](/api-reference/50%20Common/utils/viz/map/projection/add(name_projection).md '/Documentation/ApiReference/Common/utils/viz/map/projection/#addname_projection'). After that, you can get the added projection using the **get(name)** method.

To apply the projection, assign the returning object to the [projection](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/projection.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#projection') option of the  widget.