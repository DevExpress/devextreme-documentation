---
acceptValues: 'String' | 'Int32' | 'Int64' | 'Guid' | 'Boolean' | 'Single' | 'Decimal'
type: String | Object
---
---
##### shortDescription
Specifies the type of the ODataStore key property. The following key types are supported out of the box: **String**, **Int32**, **Int64**, **Boolean**, **Single**, **Decimal** and [Guid](/api-reference/30%20Data%20Layer/Guid '/Documentation/ApiReference/Data_Layer/Guid/').

---
If a key expression is a simple [getter](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters'), the **keyType** option takes on a string value.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "/url/to/service",
        key: "ProductID",
        keyType: "Guid"
    });

If you specified a composite key, the [keyType](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/keyType.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType') option should take on an object providing corresponding properties for each key expression, as demonstrated in the following example.

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

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), you can specify this option using the `EdmType` enum. This enum accepts the following values: `Int32`, `Int64`, `Guid` and `String`.