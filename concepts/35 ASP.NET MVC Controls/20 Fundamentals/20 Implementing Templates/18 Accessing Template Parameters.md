Templates have parameters that provide access to related data. They correspond to the `*Data` or `*Info` object's fields that are listed in the template's API reference description. For example, the [Calendar](/concepts/05%20Widgets/Calendar/00%20Overview.md '/Documentation/Guide/Widgets/Calendar/Overview/')'s [СellTemplate](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#cellTemplate') provides the `itemData` object. It contains three fields: `date`, `view`, and `text`, that can be used in the template:

    <!--Razor C#-->
    @(Html.DevExtreme().Calendar()
        .CellTemplate(@<text>
            <% if (view !== "month") { %>
                <b><%= text %></b>
            <% } else { %>
                <%= text %>
            <% } %>
        </text>)
    )

    <!--Razor VB-->
    @Code
        Html.DevExtreme().Calendar() _
            .CellTemplate(Sub()
                @<text>
                    <% if (view !== "month") { %>
                        <b><%= text %></b>
                    <% } else { %>
                        <%= text %>
                    <% } %>
                </text>
            End Sub).Render()
    End Code

Template parameters can be passed to an external JavaScript function like the `data` parameter in the following code. This parameter belongs to the `cellInfo` object described in the [DataGrid](/concepts/05%20Widgets/DataGrid/00%20Overview.md '/Documentation/Guide/Widgets/DataGrid/Overview/') column's [CellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate') article:

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Columns(cols => {
            // ...
            cols.Add().CellTemplate(@<text>
                @(Html.DevExtreme().Button()
                    .Text("Log Data")
                    .OnClick("function () { log(data); }")
                )
            </text>);
        })
    )

    <script type="text/javascript">
        function log(value) {
            console.log(value);
        }
    </script>

    <!--Razor VB-->
    @Code
        Html.DevExtreme().DataGrid() _
            // ...
            .Columns(Sub(cols)
                // ...
                cols.Add().CellTemplate(Sub()
                    @<text>
                        @(Html.DevExtreme().Button() _
                            .Text("Log Data") _
                            .OnClick("function () { log(data); }")
                        )
                    </text>
                End Sub)
            End Sub).Render()
    End Code

    <script type="text/javascript">
        function log(value) {
            console.log(value);
        }
    </script>

In the previous examples, the control passes parameters to the template. The following example shows how you can pass a custom parameter:

    <!--Razor C#-->
    @(Html.DevExtreme().TabPanel()
        .Items(items => {
            items.Add()
                .Title("Tab 1")
                .Option("customParams", new { param1 = "value1" })
                .Template(new TemplateName("tab1Content"));
        })
    )

    @using (Html.DevExtreme().NamedTemplate("tab1Content")) {
        <div><%= customParams.param1 %></div>
    }

    <!--Razor VB-->
    @Code
        Html.DevExtreme().TabPanel() _
            .Items(Sub(items)
                items.Add() _
                    .Title("Tab 1") _
                    .Option("customParams", New With { .param1 = "value1" }) _
                    .Template(New TemplateName("tab1Content"))
            End Sub).Render()
    End Code

    @Using (Html.DevExtreme().NamedTemplate("tab1Content"))
        @<text>
            <div><%= customParams.param1 %></div>
        </text>
    End Using
