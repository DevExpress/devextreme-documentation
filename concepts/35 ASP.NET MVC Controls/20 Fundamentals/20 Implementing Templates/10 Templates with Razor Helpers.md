Apart from HTML and ERB-style constructions, these templates support Razor helpers. Frequently, such templates are used to nest one control in another. For example, the following code nests the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/') control in the [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/') control. Note that for high-level nesting, you need to use an external template (see below).

    <!--Razor C#-->
    @(Html.DevExtreme().Popup()
        // ...
        // Specifies the contents of the Popup control
        .ContentTemplate(@<text>
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
    @Code ' Wrap the widget in Code if you use @<text> inside
        Html.DevExtreme().Popup() _
            .ContentTemplate(Sub()
                @<text>
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
            End Sub) _
            .Render() ' End the configuration with Render() because it is inside Code
    End Code