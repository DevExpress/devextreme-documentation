Use the JavaScript API to refresh server-side controls' data. Any data-bound control has the **getDataSource()** method. It returns the control's [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance. Call its [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') method to refresh the control's data, as shown in the following **DataGrid** example:

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .ID("targetDataGrid")
        .DataSource(ds => ds.Mvc()
            .Controller("GridData")
            .Key("OrderID")
            .LoadAction("GetOrders")
            .InsertAction("InsertOrder")
            .UpdateAction("UpdateOrder")
            .DeleteAction("DeleteOrder")
        )
    )

    @(Html.DevExtreme().Button()
        .Text("Refresh Grid")
        .OnClick("reloadData")
    )

    <script type="text/javascript">
        function reloadData() {
            $("#targetDataGrid").dxDataGrid("getDataSource").reload();
        }
    </script>

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .ID("targetDataGrid") _
        .DataSource(Function(ds)
            Return ds.Mvc() _
                     .Controller("GridData") _
                     .Key("OrderID") _
                     .LoadAction("GetOrders") _
                     .InsertAction("InsertOrder") _
                     .UpdateAction("UpdateOrder") _
                     .DeleteAction("DeleteOrder")
        End Function)
    )

    @(Html.DevExtreme().Button() _
        .Text("Refresh Grid") _
        .OnClick("reloadData")
    )

    <script type="text/javascript">
        function reloadData() {
            $("#targetDataGrid").dxDataGrid("getDataSource").reload();
        }
    </script>
