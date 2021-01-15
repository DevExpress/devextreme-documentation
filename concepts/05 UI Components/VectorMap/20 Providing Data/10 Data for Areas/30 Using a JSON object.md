If you have your data as a JSON object, assign its <a href="http://en.wikipedia.org/wiki/Uniform_resource_identifier" target="_blank">URI</a> to the **layers**.**dataSource** property. This way, no other actions will be required.

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

The JSON object used as a data source can be in the <a href="http://en.wikipedia.org/wiki/GeoJSON" target="_blank">GeoJSON</a> format. In such a case, this object should be a <a href="http://geojson.org/geojson-spec.html#feature-collection-objects" target="_blank">feature collection</a>. Note that only the <a href="http://geojson.org/geojson-spec.html#id4" target="_blank">*Polygon*</a> and <a href="http://geojson.org/geojson-spec.html#id7" target="_blank">*MultiPolygon*</a> geometries are supported by the **VectorMap** UI component. Properties of a GeoJSON object can be accessed using the layer's [attributes(name)](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/attribute(name).md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/Methods/#attributename') method.
