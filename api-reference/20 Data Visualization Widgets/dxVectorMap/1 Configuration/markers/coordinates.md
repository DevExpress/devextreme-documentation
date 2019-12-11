---
dep: 
default: undefined
type: Array
---
---
##### deprecated
Specify coordinates in the *"geometry.coordinates"* field of a [GeoJSON feature](https://geojson.org/geojson-spec.html#feature-objects). The GeoJSON object is passed to the **layers**.[dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource') option.

##### shortDescription
Specifies the location of a map marker in geographical coordinates.

---
This option accepts an array of two values: the first is the longitude, the second is the latitude of a map marker. You can obtain the coordinates of a map marker from code using the [coordinates()](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Marker/3%20Methods/coordinates().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/Methods/#coordinates') method.

[note] The **coordinates** option is mandatory for each object in a marker data source.