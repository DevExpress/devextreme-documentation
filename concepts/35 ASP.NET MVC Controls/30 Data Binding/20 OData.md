Also, DevExtreme ASP.NET MVC Controls operate with an [OData](https://www.odata.org) service out of the box. To address an OData service, call the `DataSource()` method and pass a lambda expression to it. The lambda parameter exposes the `OData()` method that configures access to the OData service.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .DataSource(ds => ds
            .OData()
            .Version(4)
            .Url("http://services.odata.org/V4/Northwind/Northwind.svc/Products")
            .JSONP(true)
            .Key("ProductID")
            .Expand("Category")
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .DataSource(Function(ds)
            Return ds.OData() _
                     .Version(4) _
                     .Url("http://services.odata.org/V4/Northwind/Northwind.svc/Products") _
                     .JSONP(True) _
                     .Key("ProductID") _
                     .Expand("Category")
        End Function)
    )


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/OdataService/Mvc/Light/"
}
