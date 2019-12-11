Many item collections can be configured using strongly-typed helpers. This approach automatically adds [client-side validation](/concepts/35%20ASP.NET%20MVC%20Controls/35%20Client-Side%20Data%20Validation/01%20Overview.md '/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Overview/') based on Data Annotations, ensures compile-time type safety, and enables IntelliSense. In the following code, the **DataGrid** is strongly-typed to the type `Order`, and the columns are configured using the `AddFor()` method. Note that this and the previous codes are equivalent.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid<Order>()
        .Columns(columns => {
            columns.AddFor(m => m.CustomerID);
            columns.AddFor(m => m.OrderDate);
        })
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid(Of Order)() _
        .Columns(Sub(columns)
            columns.AddFor(Function(m) m.CustomerID)
            columns.AddFor(Function(m) m.OrderDate)
        End Sub)
    )

Strongly-typed helpers can also be used for configuring standalone editors. Methods that create the editors end with `For`. For example, the `DateBoxFor()` method creates the **DateBox** control. Browse IntelliSense suggestions for a full list of available strongly-typed helpers.

    <!--Razor C#-->
    @model ApplicationName.Models.Order

    @(Html.DevExtreme().DateBoxFor(m => m.OrderDate))

    <!--Razor VB-->
    @ModelType ApplicationName.Models.Order

    @(Html.DevExtreme().DateBoxFor(Function(m) m.OrderDate))

More examples are available in our [technical demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Mvc/Light) and [sample applications](/concepts/35%20ASP.NET%20MVC%20Controls/10%20Prerequisites%20and%20Installation/20%20Sample%20Applications/00%20Sample%20Applications.md '/Documentation/Guide/ASP.NET_MVC_Controls/Prerequisites_and_Installation/#Sample_Applications').