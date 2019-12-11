You can use HTML helpers in templates as usual if they render static content.

If the content is dynamic and you need to [access template parameters](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/20%20Implementing%20Templates/18%20Accessing%20Template%20Parameters.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Implementing_Templates/Accessing_Template_Parameters'), apply the following solution:

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .Columns(columns => {
            columns.Add().CellTemplate(@<text>
                @Html.Raw(
                    Html.ActionLink("Link Text", "ActionName", "ControllerName", new { id = "ID_PLACEHOLDER" }, null)
                        .ToString()
                        .Replace("ID_PLACEHOLDER", "<%= data.id %>")
                )
            </text>);
        })
    )

    <!--Razor VB-->
    @Code
        Html.DevExtreme().DataGrid() _
            .Columns(Sub(columns)
                columns.Add().CellTemplate(Sub()
                    @<text>
                        @Html.Raw(
                            Html.ActionLink("Link Text", "ActionName", "ControllerName", New With {.id = "ID_PLACEHOLDER"}, Nothing) _
                                .ToString() _
                                .Replace("ID_PLACEHOLDER", "<%= data.id %>")
                        )
                    </text>
                End Sub)
            End Sub) _
            .Render()
    End Code

In this code, the `ActionLink` has a dynamic route value (`id`) the `data.ID` template parameter should provide. However, you should use a placeholder because `data.ID` cannot be passed to `id` (the `ActionLink` is generated on the server and `data.ID` receives a value only on the client).

You can use HTML elements instead of helpers because HTML helpers only render HTML elements on the page:

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .Columns(columns => {
            columns.Add().CellTemplate(@<text>
                <a href="@Url.Action("ActionName", "ControllerName")/<%= data.id %>">Link Text</a>
            </text>);
        })
    )

    <!--Razor VB-->
    @Code
        Html.DevExtreme().DataGrid() _
            .Columns(Sub(columns)
                columns.Add().CellTemplate(Sub()
                    @<text>
                        <a href="@Url.Action("ActionName", "ControllerName")/<%= data.id %>">Link Text</a>
                    </text>
                End Sub)
            End Sub) _
            .Render()
    End Code
