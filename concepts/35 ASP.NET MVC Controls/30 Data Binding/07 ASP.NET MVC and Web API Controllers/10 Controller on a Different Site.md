Previous examples show use-cases in which a control is on the same site as the data it accesses, and routing helps find the right controller and actions. If the data is on a different site, you can use the URL to access it via the `RemoteController()` method of the `DataSource()`'s lambda parameter. This method opens a chain whose members mirror the [client-side method fields](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) in the already familiar DevExtreme.AspNet.Data library.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .DataSource(ds => ds
            .RemoteController()
            .Key("OrderID")
            .LoadUrl("http://www.example.com/Orders/GetOrders")
            .InsertUrl("http://www.example.com/Orders/InsertOrder")
            .UpdateUrl("http://www.example.com/Orders/UpdateOrder")
            .DeleteUrl("http://www.example.com/Orders/DeleteOrder")
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .DataSource(Function(ds)
            Return ds.RemoteController() _
                     .Key("OrderID") _
                     .LoadUrl("http://www.example.com/Orders/GetAllOrders") _
                     .InsertUrl("http://www.example.com/Orders/InsertOrder") _
                     .UpdateUrl("http://www.example.com/Orders/UpdateOrder") _
                     .DeleteUrl("http://www.example.com/Orders/DeleteOrder")
        End Function)
    )