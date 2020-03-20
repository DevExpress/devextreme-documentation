OData defines some primitive data types which cannot be represented in JavaScript, for example **Int64**. To work with such values, use the [EdmLiteral](/api-reference/30%20Data%20Layer/EdmLiteral '/Documentation/ApiReference/Data_Layer/EdmLiteral/') class. For the information on primitive data types, refer to the <a href="http://www.odata.org/documentation" target="_blank">OData documentation</a>.

    <!--JavaScript-->
    dataSource.filter("Distance", "<", new DevExpress.data.EdmLiteral("100000L"));

The code snippet above shows a filter expression involving the Int64 **Distance** property.

The next example shows how to load an entity with the **Int64** key.

    <!--JavaScript-->
    store.byKey(new DevExpress.data.EdmLiteral("123L")).done(doneCallback);