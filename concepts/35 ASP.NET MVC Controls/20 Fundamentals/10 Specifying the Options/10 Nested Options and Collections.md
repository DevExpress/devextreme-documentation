Nested options are configured using lambda expressions. The lambda parameter starts a new chain of methods that specify the nested options.

    <!--Razor C#-->
    @(Html.DevExtreme().Chart()
        .Legend(l => l // configures the chart legend (l - lambda parameter)
            .Visible(false) // hides the legend in the chart
        )
        .Tooltip(t => t // configures the tooltip (t - lambda parameter)
            .Enabled(true) // enables the tooltip
            .Font(f => f // configures the tooltip's text (f - lambda parameter)
                .Color("blue") // paints the tooltip's text in blue
            )
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Chart() _
        .Legend(Sub(l)
            l.Visible(False)
        End Sub) _
        .Tooltip(Sub(t)
            t.Enabled(True) _
             .Font(Sub(f)
                 f.Color("blue")
             End Sub)
        End Sub)
    )

Options that represent item collections are configured using lambda expressions as well, but in this case, the lambda parameter performs the role of an item factory. Its `Add()` method adds a new item to the collection.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .Columns(columns => { // specifies a collection of columns
            columns.Add() // adds the "CustomerID" column
                .DataField("CustomerID");
                
            columns.Add() // adds the "OrderDate" column
                .DataField("OrderDate")
                .DataType(GridColumnDataType.Date);
        })
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .Columns(Sub(columns)
            columns.Add() _
                .DataField("CustomerID")
                
            columns.Add() _
                .DataField("OrderDate") _
                .DataType(GridColumnDataType.Date)
        End Sub)
    )