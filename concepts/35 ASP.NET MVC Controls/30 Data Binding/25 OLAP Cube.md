An OLAP cube is a multi-dimensional dataset that allows for data mining and analysis. For displaying data from an OLAP cube, DevExtreme provides the [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') widget. You can access the OLAP cube by calling the `DataSource()` method as shown in the following code. The lambda expression passed to this method configures the [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') data store.

    <!--Razor C#-->
    @(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            .Store(s => s.Xmla()
                .Url("http://my-web-srv01/OLAP/msmdpump.dll")
                .Catalog("AdventureWorksDW2012")
                .Cube("Adventure Works")
            )
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().PivotGrid() _
        .DataSource(Function(ds)
            Return ds.Store(Function(s)
                Return s.Xmla() _
                        .Url("http://my-web-srv01/OLAP/msmdpump.dll") _
                        .Catalog("AdventureWorksDW2012") _
                        .Cube("Adventure Works")
            End Function)
        End Function)
    )

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/OLAPDataSource/Mvc/Light/"
}
