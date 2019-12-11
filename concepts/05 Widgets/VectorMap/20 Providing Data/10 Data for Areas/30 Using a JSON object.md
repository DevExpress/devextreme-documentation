If you have your data as a JSON object, assign its [URI](https://en.wikipedia.org/wiki/Uniform_resource_identifier) to the **layers** | **dataSource** option. This way, no other actions will be required.

	<!--JavaScript-->var vectorMapCfg = {
        // ...
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.json'
            // ...
        }, {
            // ...
        }]
    }

The JSON object used as a data source can be in the [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) format. In such a case, this object should be a [feature collection](https://geojson.org/geojson-spec.html#feature-collection-objects). Note that only the [*Polygon*](https://geojson.org/geojson-spec.html#id4) and [*MultiPolygon*](https://geojson.org/geojson-spec.html#id7) geometries are supported by the **VectorMap** widget. Properties of a GeoJSON object can be accessed using the area's [attributes(name)](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Area/3%20Methods/attribute(name).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/Methods/#attributename') method.
