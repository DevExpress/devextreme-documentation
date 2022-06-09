If your data source is a JSON object, assign its <a href="http://en.wikipedia.org/wiki/Uniform_resource_identifier" target="_blank">URI</a> to the [layers](/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/).[dataSource](/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#dataSource) property.

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

The JSON object used as a data source can be in the <a href="http://en.wikipedia.org/wiki/GeoJSON" target="_blank">GeoJSON</a> format. In such a case, this object should be a <a href="https://datatracker.ietf.org/doc/html/rfc7946#section-3.3" target="_blank">feature collection</a>. Note that the VectorMap UI component supports only the <a href="https://datatracker.ietf.org/doc/html/rfc7946#appendix-A.3" target="_blank">*Polygon*</a> and <a href="https://datatracker.ietf.org/doc/html/rfc7946#appendix-A.6" target="_blank">*MultiPolygon*</a> geometries. Use the layer's [attributes(name)](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element/3%20Methods/attribute(name).md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/Methods/#attributename') method to access properties of a GeoJSON object.
