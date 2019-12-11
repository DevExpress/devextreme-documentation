---
module: ui/pivot_grid/xmla_store
export: default
type: Object
---
---
##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') that provides access to an OLAP cube using the XMLA standard.

---
To create an **XmlaStore** instance, specify the [URL](/api-reference/30%20Data%20Layer/XmlaStore/1%20Configuration/url.md '/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#url') of your OLAP server, the [database name](/api-reference/30%20Data%20Layer/XmlaStore/1%20Configuration/catalog.md '/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#catalog') and the [name of the cube](/api-reference/30%20Data%20Layer/XmlaStore/1%20Configuration/cube.md '/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#cube') whose data should be displayed by the [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') widget.

    <!--JavaScript-->var store = new DevExpress.data.XmlaStore({
		url: "http://my-web-srv01/OLAP/msmdpump.dll",
		catalog: "AdventureWorksDW2012",
		cube: "Adventure Works"
    });

For now, **XmlaStore** supports only Microsoft Analysis Services. The comprehensive information about Microsoft Analysis Services OLAP tool is presented in the [Multidimensional Modeling](https://msdn.microsoft.com/en-us/library/ms170208.aspx) MSDN tutorial. To learn how to configure HTTP access to analysis services on IIS, refer to the [Configure HTTP Access to Analysis Services on IIS 8.0](https://technet.microsoft.com/en-us/library/gg492140.aspx) article. 

When configuring a widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), declare the **XmlaStore** using the syntax shown in the following example. This example configures the [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') widget.

    <!--Razor C#-->@(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            .Store(s => s.Xmla()
                .Url("http://my-web-srv01/OLAP/msmdpump.dll")
                .Catalog("AdventureWorksDW2012")
                .Cube("Adventure Works")
            )
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().PivotGrid() _
        .DataSource(Function(ds)
            Return ds.Store(Function(s)
                    Return s.Xmla() _
                            .Url("http://my-web-srv01/OLAP/msmdpump.dll") _
                            .Catalog("AdventureWorksDW2012") _
                            .Cube("Adventure Works")
                    End Function)
        End Function)
    )