There are two types of templates in DevExtreme ASP.NET MVC Wrappers.

- **Simple templates**      
Simple templates are very common. They are used extensively in lists, menus, select boxes and other collections. For example, the following code specifies a template for items in the [List](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/') widget. 

        @(Html.DevExtreme().List()
            // ...
            .ItemTemplate(@<text>
                <div><%= ProductName %></div>
            </text>)
        )
        
    Note that this template is wrapped in the `@<text> ... </text>` Razor code construction and uses templating syntax provided by [Underscore.js](https://underscorejs.org). The same template can be declared as an outer script as well.

        @(Html.DevExtreme().List()
            // ...
            .ItemTemplate("#listItemTemplate")
        )

        <script id="listItemTemplate" type="text/html">
            <div><%= ProductName %></div>
        </script>
    
    Simple templates can also be used to nest one widget in another. For example, the following code nests the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/') widget in the [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/') widget.

        // Configures the "Popup" widget
        @(Html.DevExtreme().Popup()
            // ...
            // Specifies the contents of the "Popup" widget
            .ContentTemplate(@<text>
                // Configures the **DataGrid** widget
                @(Html.DevExtreme().DataGrid()
                    .DataSource(d => d.WebApi().Controller("GridData"))
                    .Columns(columns => {
                        columns.Add().DataField("DataField1");
                        columns.Add().DataField("DataField2");
                        columns.Add().DataField("DataField3");
                        columns.Add().DataField("DataField4");
                    })
                )
            </text>)
        )

- **Heavily nested templates**          
Heavily nested templates should be configured in a different manner. For example, consider that you have the [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/') widget with the [List](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/') widget nested in it using a template. **List**, in its turn, contains another template for its items. In this instance, you need to declare the nested widget (**List** in this example) in an external code block using the  `@helper` syntax.
    
        @(Html.DevExtreme().Popup()
            // ...
            .ContentTemplate(@<text>
                @InnerList()
            </text>)
        )
        
        @helper InnerList() {
            @(Html.DevExtreme().List()
                // ...
                .ItemTemplate(@<text>
                    <div><%= ProductName %></div>
                    <div><%= UnitPrice %></div>
                </text>)
            )
        }
        
Within any template, you can access template-specific free variables that provide supplementary data. For an exhaustive list of them, refer to the description of a specific template in the [Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') section.

Another common use case of templates is the detail section of the [master-detail UI](/concepts/10%20UI%20Widgets/70%20Data%20Grid/080%20Master-Detail%20Interface '/Documentation/Guide/UI_Widgets/Data_Grid/Master-Detail_Interface/') in the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/') widget. Consider the following code, in which the detail section nests another **DataGrid** whose controller gets the `data.OrderID` free variable as a loading parameter.
    
    @(Html.DevExtreme().DataGrid()
        .DataSource(d => d.WebApi().Controller("GridData").Key("OrderID"))
        .Columns(columns => {
            columns.Add().DataField("CustomerID");
            columns.Add().DataField("OrderDate");
            // ...
        })
        // Configures the master-detail UI
        .MasterDetail(md => md
            .Enabled(true)
            // Specifies the contents of the detail section
            .Template(@<text>
                @(Html.DevExtreme().DataGrid()
                    .DataSource(d => d.WebApi()
                        .Controller("GridData")
                        .LoadAction("OrderDetails")
                        // Passes "OrderID" as a parameter to "GridDataController"
                        .LoadParams(new { orderID = new JS("data.OrderID") })
                    )
                )
            </text>)
        )
    )

Note that the `data.OrderID` free variable is wrapped in the `new JS()` construction. This construction allows you to embed JavaScript statements in the resulting widget configuration. In particular, the data source configuration of the nested **DataGrid** from the preceding code yields the following output.

    "dataSource": {
        "store": DevExpress.data.AspNet.createStore({
            "loadParams": {
                "orderID": data.OrderID
            },
            "loadUrl": "/api/GridData/OrderDetails",
            "insertUrl": "/api/GridData/Post",
            "updateUrl": "/api/GridData/Put",
            "deleteUrl": "/api/GridData/Delete"
        })
    }

You can find more examples of templates in our [sample application](/concepts/35%20ASP.NET%20MVC%20Wrappers/10%20Overview/20%20Sample%20Application.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Overview/#Sample_Application').