Templates in DevExtreme ASP.NET MVC Wrappers support ERB-style syntax. The following constructions are available.

- `<% code %>` - executes the code.
- `<%= value %>` - prints the value.
- `<%- value %>` - prints the value escaping HTML.

There are four ways to declare templates in DevExtreme ASP.NET MVC Wrappers.

- **Short inline templates**         
These templates support HTML and ERB-style constructions.

        <!--Razor C#-->
        @(Html.DevExtreme().Popup()
            .TitleTemplate("<b>Title</b>")
        )

        <!--Razor VB-->
        @(Html.DevExtreme().Popup() _
            .TitleTemplate("<b>Title</b>")
        )

    <!---->

        <!--Razor C#-->
        @(Html.DevExtreme().List()
            .ItemTemplate("<div><%= ProductName %></div>")
        )

        <!--Razor VB-->
        @(Html.DevExtreme().List() _
            .ItemTemplate("<div><%= ProductName %></div>")
        )

- **Templates with Razor helpers**       
Apart from HTML and ERB-style constructions, these templates support Razor helpers. Frequently, such templates are used to nest one widget in another. For example, the following code nests the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/') widget in the [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/') widget. Note that for high-level nesting, you need to use an external template (see below).

        <!--Razor C#-->
        @* Configures the Popup widget *@
        @(Html.DevExtreme().Popup()
            // ...
            // Specifies the contents of the Popup widget
            .ContentTemplate(@<text>
                // Configures the DataGrid widget
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

        <!--Razor VB-->
        @Code
            @* Configures the Popup widget *@
            Html.DevExtreme().Popup() _
                .ContentTemplate(Sub()
                    @<text>
                        @* Configures the DataGrid widget *@
                        @(Html.DevExtreme().DataGrid() _
                            .DataSource(Function(d) d.WebApi().Controller("GridData")) _
                            .Columns(Sub(columns)
                                columns.Add().DataField("DataField1")
                                columns.Add().DataField("DataField2")
                                columns.Add().DataField("DataField3")
                                columns.Add().DataField("DataField4")
                            End Sub)
                        )
                    </text>
                End Sub).Render()
        End Code

- **External templates**         
External templates can be declared in a partial view or a `@helper` block (MVC 3, 4, 5 only). Commonly, you need to declare an external template for high-level nesting or if you want to reuse it. For example, you have the [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/') widget with the [List](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/') widget nested in it using a template. The **List**, in turn, nests another template for its items. The following examples show how you can declare the **List** widget in this case.

    - **Partial view**

        - *InnerList.cshtml / InnerList.vbhtml*

                <!--Razor C#-->
                @(Html.DevExtreme().List()
                    .ItemTemplate(@<text>
                        <div><%= ProductName %></div>
                        <div><%= UnitPrice %></div>
                    </text>)
                )

                <!--Razor VB-->
                @Code
                    Html.DevExtreme().List() _
                        .ItemTemplate(Sub()
                            @<text>
                                <div><%= ProductName %></div>
                                <div><%= UnitPrice %></div>
                            </text>
                        End Sub).Render()
                End Code

        - *Popup.cshtml / Popup.vbhtml*

                <!--Razor C#-->
                @(Html.DevExtreme().Popup()
                    .ContentTemplate(@<text>
                        @(Html.Partial("InnerList"))
                    </text>)
                )

                <!--Razor VB-->
                @Code
                    Html.DevExtreme().Popup() _
                        .ContentTemplate(Sub()
                            @<text>
                                @(Html.Partial("InnerList"))
                            </text>
                        End Sub).Render()
                End Code

    - **@helper (MVC 3, 4, 5 only)**

            <!--Razor C#-->
            @(Html.DevExtreme().Popup()
                .ContentTemplate(@<text>
                    @InnerList()
                </text>)
            )  
            @helper InnerList() {
                @(Html.DevExtreme().List()
                    .ItemTemplate(@<text>
                        <div><%= ProductName %></div>
                        <div><%= UnitPrice %></div>
                    </text>)
                )
            }

            <!--Razor VB-->
            @Code
                Html.DevExtreme().Popup() _
                    .ContentTemplate(Sub()
                        @InnerList()
                    End Sub).Render()
            End Code
            @helper InnerList()
                @(Html.DevExtreme().List() _
                    .ItemTemplate(Sub()
                        Write(ListItem())
                    End Sub)
                )
            End Helper
            @helper ListItem()
                @<text>
                    <div><%= ProductName %></div>
                    <div><%= UnitPrice %></div>
                </text>
            End Helper

- **JavaScript functions as templates**         
Despite being a superstructure over JavaScript widgets, wrappers get the best from Razor syntax, but still, in some cases, Razor appears to be short of certain capabilities. In these cases, we recommend you utilize pure JavaScript backed with jQuery. Regarding templates, prefer the JavaScript function over the Razor block when you need to access JavaScript variables or implement sophisticated logic inside the template.

    Short JavaScript functions can be declared inline with the method's name using the `new JS()` expression.

        <!--Razor C#-->
        @(Html.DevExtreme().DataGrid()
            .Columns(columns => {
                columns.Add()
                    .CellTemplate(new JS("function (element, cellInfo) { element.addClass('data-grid-custom-cell') }"))
                    // ...
            })
        )

        <!--Razor VB-->
        @(Html.DevExtreme().DataGrid() _
            .Columns(Sub(columns)
                columns.Add() _
                    .CellTemplate(New JS("function (element, cellInfo) { element.addClass('data-grid-custom-cell') }")) _
                    ' ...
            End Sub)
        )

    Multi-line JavaScript functions should be declared in an external script and then referred to from the method's name using the same `new JS()` expression.

        <!--Razor C#-->
        @(Html.DevExtreme().List()
            .ItemTemplate(new JS("list_itemTemplate"))
            // ...
        )

        <!--Razor VB-->
        @(Html.DevExtreme().List() _
            .ItemTemplate(New JS("list_itemTemplate"))
            ' ...
        )

    <!---->

        <script>
            function list_itemTemplate(data, index, element) {
                element.append(
                    $("<img />").attr("src", data.imgSrc)
                );
            }
        </script>


A common use case of templates is the detail section of the [master-detail UI](/concepts/05%20Widgets/DataGrid/080%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/') in the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/') widget. Consider the following code, in which the detail section nests another **DataGrid** whose controller gets the `data.OrderID` free variable as a loading parameter.
    
    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .DataSource(d => d.WebApi().Controller("DataGridMasterDetailView").Key("ID"))
        .Columns(columns => {
            columns.Add().DataField("FirstName");
            columns.Add().DataField("LastName");
            // ...
        })
        // Configures the master-detail UI
        .MasterDetail(md => md
            .Enabled(true)
            // Specifies the contents of the detail section
            .Template(@<text>
                @(Html.DevExtreme().DataGrid()
                    .DataSource(d => d.WebApi()
                        .Controller("DataGridMasterDetailView")
                        .LoadAction("TasksDetails")
                        // Passes "ID" as a parameter to "DataGridMasterDetailViewController"
                        .LoadParams(new { id = new JS("data.ID") })
                    )
                )
            </text>)
        )
    )

    <!--Razor VB-->
    @Code
        Html.DevExtreme().DataGrid() _
            .DataSource(Function(d) d.WebApi().Controller("DataGridMasterDetailView").Key("ID")) _
            .Columns(Sub(columns)
                columns.Add().DataField("FirstName")
                columns.Add().DataField("LastName")
                ' ...
            End Sub) _
            .MasterDetail(Sub(md)
                ' Configures the master-detail UI
                md.Enabled(True) _
                .Template(Sub()
                        @<text>
                            @(Html.DevExtreme().DataGrid() _
                                .DataSource(Function(d)
                                    Return d.WebApi() _
                                            .Controller("DataGridMasterDetailView") _
                                            .LoadAction("TasksDetails") _
                                            .LoadParams(New With { .id = New JS("data.ID") }) ' Passes "ID" as a parameter
                                                                                            ' to "DataGridMasterDetailViewController"
                                End Function)
                            )
                        </text>
                End Sub)
            End Sub)
    End Code

Note that the `data.ID` free variable is wrapped in the `new JS()` construction. This construction allows you to embed JavaScript statements in the resulting widget configuration. In particular, the data source configuration of the nested **DataGrid** from the preceding code yields the following output.

    "dataSource": {
        "store": DevExpress.data.AspNet.createStore({
            "loadParams": {
                "orderID": data.ID
            },
            "loadUrl": "/api/DataGridMasterDetailView/TasksDetails",
            "insertUrl": "/api/DataGridMasterDetailView/Post",
            "updateUrl": "/api/DataGridMasterDetailView/Put",
            "deleteUrl": "/api/DataGridMasterDetailView/Delete"
        })
    }

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/MasterDetailView/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

You can find more examples of templates in our [technical demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/WebApi/Mvc/Light) and [sample applications](/concepts/35%20ASP.NET%20MVC%20Wrappers/10%20Prerequisites%20and%20Installation/20%20Sample%20Applications/00%20Sample%20Applications.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Prerequisites_and_Installation/#Sample_Applications').