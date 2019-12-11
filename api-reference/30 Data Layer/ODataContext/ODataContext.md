---
module: data/odata/context
type: object
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
Provides access to the entire [OData](https://www.odata.org) service.

---
The ODataContext object creates several [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') instances inside. Each of these instances accesses a separate entity. To create an ODataContext instance, pass the configuration object to the ODataContext constructor. Specify the service URL and the list of entities you need to access.

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "http://www.example.com/Northwind.svc",
        entities: {
            Categories: {
                key: "CategoryID",
                keyType: "Int32"
            },
            MyCustomers: {
                name: "Customers",
                key: "CustomerID",
                keyType: "String"
            }
        }
    });

If you need to specify a composite key for an entity, assign an array of key expressions to the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key') option. In this case, the [keyType](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/keyType.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType') option takes on an object providing corresponding properties for each key expression, as demonstrated in the following example.

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "http://www.example.com/Northwind.svc",
        entities: {
            Products: {
                key: [ "ProductID", "ProductCode" ],
                keyType: {
                    ProductID: "Guid",
                    ProductCode: "Int32" 
                }
            }
        }
    });


The ODataContext object also includes the [get()](/api-reference/30%20Data%20Layer/ODataContext/3%20Methods/get(operationName_params).md '/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#getoperationName_params') and [invoke()](/api-reference/30%20Data%20Layer/ODataContext/3%20Methods/invoke(operationName_params_httpMethod).md '/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#invokeoperationName_params_httpMethod') methods used to invoke service operations, and the [objectLink()](/api-reference/30%20Data%20Layer/ODataContext/3%20Methods/objectLink(entityAlias_key).md '/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#objectLinkentityAlias_key') helper method to [link entities](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Data_Source_Examples_OData_Associations).

For more information on working with OData, refer to the [Data Source Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData') article.