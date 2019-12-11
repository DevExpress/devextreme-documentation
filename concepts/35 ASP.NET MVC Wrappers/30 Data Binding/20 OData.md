Also, DevExtreme ASP.NET MVC Wrappers operate with an [OData](https://www.odata.org) service out of the box. To address an OData service, call the `DataSource()` method and pass a lambda expression to it. The lambda parameter exposes the `OData()` method that configures access to the OData service.

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

For an example of a widget getting data from an OData service, refer to our [sample application](/concepts/35%20ASP.NET%20MVC%20Wrappers/10%20Overview/20%20Sample%20Application.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Overview/#Sample_Application').