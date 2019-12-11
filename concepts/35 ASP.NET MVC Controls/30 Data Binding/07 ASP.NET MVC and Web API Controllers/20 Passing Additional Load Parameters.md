DevExtreme ASP.NET MVC Controls [internally transform](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/') your Razor code into HTML and JavaScript. However, certain functionality, passing load parameters being an example, cannot be implemented using Razor without accessing JavaScript variables directly.

Consider the following code example that implements the [master-detail interface](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/') in the **DataGrid** control. This interface is a grid inside a grid, with the inner grid filtering its data source according to the master row key. The [API reference](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail/template.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#template') states that the master row key and data are available in the master-detail template through the `key` and `data` JavaScript variables. Only the `key`'s value is needed for the master-detail, and it is accessed using the `new JS()` construct. This construct inserts any JavaScript expression passed to it into the resulting JavaScript code verbatim.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .DataSource(d => d.WebApi().Controller("Employees").Key("ID"))
        .Columns(columns => {
            columns.Add().DataField("FirstName");
            columns.Add().DataField("LastName");
            // ...
        })
        .MasterDetail(md => md
            .Enabled(true)
            .Template(@<text>
                @(Html.DevExtreme().DataGrid()
                    .DataSource(d => d.WebApi()
                        .Controller("Employees")
                        .LoadAction("TasksDetails")
                        .LoadParams(new { id = new JS("key") })
                    )
                )
            </text>)
        )
    )

    <!--Razor VB-->
    @Code ' Wrap the widget in Code if you use @<text> inside
        Html.DevExtreme().DataGrid() _
            .DataSource(Function(d) d.WebApi().Controller("Employees").Key("ID")) _
            .Columns(Sub(columns)
                columns.Add().DataField("FirstName")
                columns.Add().DataField("LastName")
                ' ...
            End Sub) _
            .MasterDetail(Sub(md)
                md.Enabled(True) _
                .Template(Sub()
                        @<text>
                            @(Html.DevExtreme().DataGrid() _
                                .DataSource(Function(d)
                                    Return d.WebApi() _
                                            .Controller("Employees") _
                                            .LoadAction("TasksDetails") _
                                            .LoadParams(New With { .id = New JS("key") })
                                End Function)
                            )
                        </text>
                End Sub)
            End Sub) _
            .Render() ' End the configuration with Render() because it is inside Code
    End Code

If the control is not in a template and no variables are provided, you can get data for a load parameter using a JavaScript function accessed with the same `new JS()` construct. In the following code, the **DataGrid** control uses the `getDateBoxValue()` function to get a value for the `orderDate` load parameter from the **DateBox** control. The `refreshGrid()` function, which is called each time the **DateBox** value changes, calls the **DataGrid**'s [refresh()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/refresh().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#refresh') method that makes a new load query with the updated load parameter.

    <!--Razor C#-->
    @(Html.DevExtreme().DateBox()
        .ID("orderDate")
        .Type(DateBoxType.Date)
        .Value(DateTime.Now)
        .OnValueChanged("refreshGrid")
    )

    @(Html.DevExtreme().DataGrid()
        .ID("targetDataGrid")
        .DataSource(ds => ds.WebApi()
            .Controller("Orders")
            .LoadAction("GetOrdersByDate")
            .LoadParams(new { orderDate = new JS("getDateBoxValue") })
        )
        .Columns(cols => {
            cols.Add().DataField("OrderID");
            cols.Add().DataField("OrderDate");
            // ...
        })
    )

    <script type="text/javascript">
        function getDateBoxValue () {
            return $("#orderDate").dxDateBox("option", "text");
        }

        function refreshGrid() {
            $("#targetDataGrid").dxDataGrid("refresh");
        }
    </script>

    <!--Razor VB-->
    @(Html.DevExtreme().DateBox() _
        .ID("orderDate") _
        .Type(DateBoxType.Date) _
        .Value(DateTime.Now) _
        .OnValueChanged("refreshGrid")
    )

    @(Html.DevExtreme().DataGrid() _
        .ID("targetDataGrid") _
        .DataSource(Function(ds)
            Return ds.WebApi() _
                .Controller("Orders") _
                .LoadAction("GetOrdersByDate") _
                .LoadParams(New With { .orderDate = New JS("getDateBoxValue") })
            End Function
        ) _
        .Columns(Sub(cols)
            cols.Add().DataField("OrderID")
            cols.Add().DataField("OrderDate")
            ' ...
        End Sub)
    )

    <script type="text/javascript">
        function getDateBoxValue () {
            return $("#orderDate").dxDateBox("option", "text");
        }

        function refreshGrid() {
            $("#targetDataGrid").dxDataGrid("refresh");
        }
    </script>
