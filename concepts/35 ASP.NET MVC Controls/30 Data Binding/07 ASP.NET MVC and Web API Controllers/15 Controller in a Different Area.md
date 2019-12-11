In an app organized into [areas](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/areas), a control from a view belonging to one area may need to access a data controller belonging to another. Use the `Area()` method to specify the data controller's area in this case. 

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .DataSource(ds => ds
            .Mvc()
            .Area("DifferentArea")
            // ...
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .DataSource(Function(ds)
            Return ds.Mvc() _
                     .Area("DifferentArea") _
                     ' ...
        End Function)
    )