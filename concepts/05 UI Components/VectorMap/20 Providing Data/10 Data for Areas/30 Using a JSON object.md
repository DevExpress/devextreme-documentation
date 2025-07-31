If your data source is a JSON object, assign its <a href="http://en.wikipedia.org/wiki/Uniform_resource_identifier" target="_blank">URI</a> to the [layers](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/').[dataSource](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#dataSource') property.

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

You can specify the JSON data object in the [GeoJSON](http://en.wikipedia.org/wiki/GeoJSON) [FeatureCollection](https://datatracker.ietf.org/doc/html/rfc7946#section-3.3) format. VectorMap supports the following GeoJSON geometries:

- [Polygon](https://datatracker.ietf.org/doc/html/rfc7946#appendix-A.3)
- [MultiPolygon](https://datatracker.ietf.org/doc/html/rfc7946#appendix-A.6)
- [LineStrings](https://datatracker.ietf.org/doc/html/rfc7946#page-22)

To access GeoJSON object properties, implement the [attributes(name)](/api-reference/10%20UI%20Components/dxVectorMap/6%20Map%20Elements/Layer%20Element/3%20Methods/attribute(name).md '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/Methods/#attributename') method.
