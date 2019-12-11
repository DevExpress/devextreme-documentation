---
module: ui/pivot_grid/xmla_store
export: default
type: Object
---
---
##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **XmlaStore** is a store that provides an interface for accessing an OLAP cube according to the XMLA standard.

---
The **XmlaStore** is used in the [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/') which, in turn, is used in the [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') widget.

---
##### jQuery  

    <!--JavaScript-->
    var store = new DevExpress.data.XmlaStore({
        url: "http://my-web-srv01/OLAP/msmdpump.dll",
        catalog: "AdventureWorksDW2012",
        cube: "Adventure Works"
    });

    // ===== or inside the PivotGridDataSource =====
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        store: {
            type: "xmla",
            url: "http://my-web-srv01/OLAP/msmdpump.dll",
            catalog: "AdventureWorksDW2012",
            cube: "Adventure Works"
        },
        // Other PivotGridDataSource options go here
    });

##### Angular  

    <!--TypeScript-->
    import XmlaStore from "devextreme/ui/pivot_grid/xmla_store";
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        store: XmlaStore;
        pivotGridDataSource: PivotGridDataSource;
        constructor () {
            this.store = new XmlaStore({
                url: "http://my-web-srv01/OLAP/msmdpump.dll",
                catalog: "AdventureWorksDW2012",
                cube: "Adventure Works"
            });

            // ===== or inside the PivotGridDataSource =====
            this.pivotGridDataSource = new PivotGridDataSource({
                store: {
                    type: "xmla",
                    url: "http://my-web-srv01/OLAP/msmdpump.dll",
                    catalog: "AdventureWorksDW2012",
                    cube: "Adventure Works"
                },
                // Other PivotGridDataSource options go here
            });
        }
    }

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.store = new DevExpress.data.XmlaStore({
                url: "http://my-web-srv01/OLAP/msmdpump.dll",
                catalog: "AdventureWorksDW2012",
                cube: "Adventure Works"
            });

            // ===== or inside the PivotGridDataSource =====
            $scope.pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
                store: {
                    type: "xmla",
                    url: "http://my-web-srv01/OLAP/msmdpump.dll",
                    catalog: "AdventureWorksDW2012",
                    cube: "Adventure Works"
                },
                // Other PivotGridDataSource options go here
            });
        });

##### Knockout  

    <!--JavaScript-->
    var viewModel = {
        store: new DevExpress.data.XmlaStore({
            url: "http://my-web-srv01/OLAP/msmdpump.dll",
            catalog: "AdventureWorksDW2012",
            cube: "Adventure Works"
        })

        // ===== or inside the PivotGridDataSource =====
        pivotGridDataSource: new DevExpress.data.PivotGridDataSource({
            store: {
                type: "xmla",
                url: "http://my-web-srv01/OLAP/msmdpump.dll",
                catalog: "AdventureWorksDW2012",
                cube: "Adventure Works"
            },
            // Other PivotGridDataSource options go here
        })
    };

    ko.applyBindings(viewModel);

##### ASP.NET MVC Controls

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

---

The **XmlaStore** currently supports only the Microsoft Analysis Services OLAP tool. Refer to the [Multidimensional Modeling](https://docs.microsoft.com/en-us/sql/analysis-services/multidimensional-modeling-adventure-works-tutorial?view=sql-analysis-services-2017) tutorial for more information on it. To learn how to configure HTTP access to Analysis Services on IIS, see [this article](https://docs.microsoft.com/en-us/sql/analysis-services/instances/configure-http-access-to-analysis-services-on-iis-8-0?view=sql-analysis-services-2017).

#include datalayer-store-note-immutable with { name: "XmlaStore" }

#####See Also#####
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')