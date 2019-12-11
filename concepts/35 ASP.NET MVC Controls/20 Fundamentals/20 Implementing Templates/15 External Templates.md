External templates can be declared as a named template, a partial view, or a `@helper` block (MVC 3, 4, 5 only). Controls placed in such a template use a special rendering mechanism. Usually, you should declare an external template for high-level nesting or if you want to reuse it. In the following example, a template containing list items is nested in the [List](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/') control, and a template with the **List** control is nested in the [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/') control:

- **Named template**    

        <!--Razor C#-->
        @(Html.DevExtreme().Popup()
            .ContentTemplate(new TemplateName("list"))
        )
        @using (Html.DevExtreme().NamedTemplate("list")) {
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
                .ContentTemplate(New TemplateName("list")).Render()
        End Code
        @Using (Html.DevExtreme().NamedTemplate("list"))
            @Code
                Html.DevExtreme().List() _
                    .ItemTemplate(Sub()
                        @<text>
                            <div><%= ProductName %></div>
                            <div><%= UnitPrice %></div>
                        </text>
                    End Sub).Render()
            End Code
        End Using

    [note] A named template cannot be defined inside any template.

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
