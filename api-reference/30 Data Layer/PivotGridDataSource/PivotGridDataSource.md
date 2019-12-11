---
module: ui/pivot_grid/data_source
export: default
type: Object
inherits: ..\..\10 UI Widgets\EventsMixin\EventsMixin.md
---
---
##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **PivotGridDataSource** is an object that provides an API for processing data from an underlying [store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/'). This object is used in the [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') widget.

---
---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            store: {
                // ...
                // Underlying store is configured here
                // ...
            },
            fields: [{
                area: "column",
                dataField: "OrderDate",
                dataType: "date"
            }, {
                area: "row",
                dataField: "ShipCity"
            }, {
                area: "data",
                summaryType: "count"
            }]
        });
        
        $("#pivotGridContainer").dxPivotGrid({
            dataSource: pivotGridDataSource
        });
    });

##### Angular  

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import { DxPivotGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor () {
            this.pivotGridDataSource = new PivotGridDataSource({
                store: {
                    // ...
                    // Underlying store is configured here
                    // ...
                },
                fields: [{
                    area: "column",
                    dataField: "OrderDate",
                    dataType: "date"
                }, {
                    area: "row",
                    dataField: "ShipCity"
                }, {
                    area: "data",
                    summaryType: "count"
                }]
            });
        }
    }

    @NgModule({
        imports: [
            // ...
            DxPivotGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-pivot-grid
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>

##### AngularJS  

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
                store: {
                    // ...
                    // Underlying store is configured here
                    // ...
                },
                fields: [{
                    area: "column",
                    dataField: "OrderDate",
                    dataType: "date"
                }, {
                    area: "row",
                    dataField: "ShipCity"
                }, {
                    area: "data",
                    summaryType: "count"
                }]
            });
        });

    <!--HTML-->
    <div dx-pivot-grid="{
        dataSource: pivotGridDataSource
    }"></div>

##### Knockout  

    <!--JavaScript-->
    var viewModel = {
        pivotGridDataSource: new DevExpress.data.PivotGridDataSource({
            store: {
                // ...
                // Underlying store is configured here
                // ...
            },
            fields: [{
                area: "column",
                dataField: "OrderDate",
                dataType: "date"
            }, {
                area: "row",
                dataField: "ShipCity"
            }, {
                area: "data",
                summaryType: "count"
            }]
        })
    };

    ko.applyBindings(viewModel);

    <!--HTML-->
    <div data-bind="dxPivotGrid: {
        dataSource: pivotGridDataSource
    }"></div>

---

[note] If you create a **PivotGridDataSource** instance outside the widget (as shown above), make sure to [dispose](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/dispose().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#dispose') of it when it is no longer used. If the instance is created inside the widget, it will be disposed of automatically.

When using a widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), configure the **PivotGridDataSource** using the syntax shown in the following example. This example configures the [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') widget.

    <!--Razor C#-->@(Html.DevExtreme().PivotGrid()
        .ID("pivotGrid")
        .DataSource(ds => ds
            .Store(store => store
                // ...
                // Underlying store is configured here
            )
            .Fields(fields => {
                fields.Add().Area(PivotGridArea.Column)
                    .DataField("OrderDate")
                    .DataType(PivotGridDataType.Date);
                fields.Add().Area(PivotGridArea.Row).DataField("ShipCity");
                fields.Add().Area(PivotGridArea.Data).SummaryType(SummaryType.Count);
            })
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().PivotGrid() _
        .ID("pivotGrid") _
        .DataSource(Function(ds)
            Return ds.Store(Function(store)
                            Return store.
                                @* Underlying store is configured here *@
                        End Function) _
                        .Fields(Sub(fields)
                            fields.Add().Area(PivotGridArea.Column) _
                                .DataField("OrderDate") _
                                .DataType(PivotGridDataType.Date)
                            fields.Add().Area(PivotGridArea.Row).DataField("ShipCity")
                            fields.Add().Area(PivotGridArea.Data).SummaryType(SummaryType.Count)
                        End Sub)
        End Function)
    )

#include datalayer-store-note-immutable with { name: "PivotGridDataSource" }

#####See Also#####
- [ASP.NET MVC Controls - Data Binding](/concepts/35%20ASP.NET%20MVC%20Controls/30%20Data%20Binding '/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/')