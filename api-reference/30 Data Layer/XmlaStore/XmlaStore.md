---
id: XmlaStore
module: ui/pivot_grid/xmla_store
export: default
type: Object
---
---
##### shortDescription
The **XmlaStore** is a store that provides an interface for accessing an OLAP cube according to the XMLA standard.

##### lib
dx.web.js, dx.all.js

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

##### Vue

    <!-- tab: App.vue -->
    <script>
    import XmlaStore from 'devextreme/ui/pivot_grid/xmla_store';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const store = new XmlaStore({
        url: 'http://my-web-srv01/OLAP/msmdpump.dll',
        catalog: 'AdventureWorksDW2012',
        cube: 'Adventure Works'
    });

    // ===== or inside the PivotGridDataSource =====
    const pivotGridDataSource = new PivotGridDataSource({
        store: {
            type: 'xmla',
            url: 'http://my-web-srv01/OLAP/msmdpump.dll',
            catalog: 'AdventureWorksDW2012',
            cube: 'Adventure Works'
        },
        // Other PivotGridDataSource options go here
    });

    export default {
        // ...
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import XmlaStore from 'devextreme/ui/pivot_grid/xmla_store';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const store = new XmlaStore({
        url: 'http://my-web-srv01/OLAP/msmdpump.dll',
        catalog: 'AdventureWorksDW2012',
        cube: 'Adventure Works'
    });

    // ===== or inside the PivotGridDataSource =====
    const pivotGridDataSource = new PivotGridDataSource({
        store: {
            type: 'xmla',
            url: 'http://my-web-srv01/OLAP/msmdpump.dll',
            catalog: 'AdventureWorksDW2012',
            cube: 'Adventure Works'
        },
        // Other PivotGridDataSource options go here
    });

    class App extends React.Component {
        // ...
    }
    export default App;

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

The **XmlaStore** currently supports only the Microsoft Analysis Services OLAP tool. Refer to the <a href="https://docs.microsoft.com/en-us/sql/analysis-services/multidimensional-modeling-adventure-works-tutorial?view=sql-analysis-services-2017" target="_blank">Multidimensional Modeling</a> tutorial for more information on it. To learn how to configure HTTP access to Analysis Services on IIS, see <a href="https://docs.microsoft.com/en-us/sql/analysis-services/instances/configure-http-access-to-analysis-services-on-iis-8-0?view=sql-analysis-services-2017" target="_blank">this article</a>.

#include datalayer-store-note-immutable with { name: "XmlaStore" }

#####See Also#####
- <a href="https://docs.devexpress.com/AspNetCore/400575/devextreme-based-controls/concepts/bind-controls-to-data" target="_blank">ASP.NET MVC Controls - Bind Controls to Data</a>