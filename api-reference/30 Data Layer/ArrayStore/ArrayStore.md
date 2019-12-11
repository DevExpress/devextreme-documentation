---
module: data/array_store
export: default
type: Object
inherits: ..\Store\Store.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
A [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') accessing an in-memory array.

---
To associate an array with the **ArrayStore**, pass this array to the `ArrayStore` constructor.

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore(array);

If you need to specify configuration options of the **ArrayStore** other than data, pass an object to the `ArrayStore` constructor.

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore({
        data: array,
        key: "id",
        onModified: function() {
            // 'modified' event handler
        },
        errorHandler: function(error) {
            // Error handler
        }
    });

Note, that the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') option is required if you are going to use the **ArrayStore** for read-write access to data.

#####See Also#####
- [DataSource Examples - In-memory Data](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data')

When configuring a widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), declare the **ArrayStore** using the syntax shown in the following example. This example configures the [SelectBox](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/') widget.

    <!--Razor C#-->@(Html.DevExtreme().SelectBox()
        .ID("selectBox")
        .DataSource(ds => ds.Array()
            .Key("id")
            .Data(new [] {
                new { id = 1, state = "Alabama", capital = "Montgomery" },
                new { id = 2, state = "Alaska", capital = "Juneau" },
                new { id = 3, state = "Arizona", capital = "Phoenix" },
                // ...
            })
        )
        .DisplayExpr("state")
        .ValueExpr("id")
    )
    @* ===== or a simplified version ===== *@
    @(Html.DevExtreme().SelectBox()
        .ID("selectBox")
        .DataSource(new[] {
            new { id = 1, state = "Alabama", capital = "Montgomery" },
            new { id = 2, state = "Alaska", capital = "Juneau" },
            new { id = 3, state = "Arizona", capital = "Phoenix" },
            // ...
        }, "id")
        .DisplayExpr("state")
        .ValueExpr("id")
    )

    <!--Razor VB-->@(Html.DevExtreme().SelectBox() _
        .ID("selectBox") _
        .DataSource(Function(ds)
            Return ds.Array() _
                     .Key("id") _
                     .Data({
                         New With { .id = 1, .state = "Alabama", .capital = "Montgomery" },
                         New With { .id = 2, .state = "Alaska", .capital = "Juneau" },
                         New With { .id = 3, .state = "Arizona", .capital = "Phoenix" }
                     })
        End Function) _
        .DisplayExpr("state") _
        .ValueExpr("id")
    )
    @* ===== or a simplified version ===== *@
    @(Html.DevExtreme().SelectBox() _
        .ID("selectBox") _
        .DataSource({
            New With { .id = 1, .state = "Alabama", .capital = "Montgomery" },
            New With { .id = 2, .state = "Alaska", .capital = "Juneau" },
            New With { .id = 3, .state = "Arizona", .capital = "Phoenix" }
        }, "id") _
        .DisplayExpr("state") _
        .ValueExpr("id")
    )