---
default: {}
type: Object
---
---
##### shortDescription
Specifies the types of data fields. Accepts the following types: *"String"*, *"Int32"*, *"Int64"*, *"Boolean"*, *"Single"*, "*Decimal"* and *"[Guid](/api-reference/30%20Data%20Layer/Guid '/Documentation/ApiReference/Data_Layer/Guid/')"*.

---
Set this option if you are going to [filter data](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering'). An object assigned to it should list data fields and their types as field-value pairs. You can also use this option instead of [keyType](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/keyType.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType') to specify the type of the key property.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "/url/to/the/service",
        key: "ProductID",
        fieldTypes: {
            ProductID: "Guid",
            ProductName: "String",
            ProductPrice: "Int32"
        }
    });

You can configure this option in an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/') as follows:

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .DataSource(d => d.OData()
            .Url("/url/to/the/service")
            .Key("ProductID")
            .FieldTypes(new Dictionary<string, EdmType> {
                { "ProductID", EdmType.Guid },
                { "ProductName", EdmType.String },
                { "ProductPrice", EdmType.Int32 }
            })
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .DataSource(Function(ds)
            Return ds.OData() _
                     .Url("/url/to/the/service")
                     .Key("ProductID") _
                     .FieldTypes(New Dictionary(Of String, EdmType) From {
                         { "ProductID", EdmType.Guid },
                         { "ProductName", EdmType.String },
                         { "ProductPrice", EdmType.Int32 }
                     })
        End Function)
    )