---
id: PivotGridDataSource
module: ui/pivot_grid/data_source
export: default
type: Object
---
---
##### shortDescription
The **PivotGridDataSource** is an object that provides an API for processing data from an underlying [store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/'). This object is used in the [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') widget.

##### lib
dx.web.js, dx.all.js

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid
            :data-source="pivotGridDataSource"
        />
    </template>
    
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-vue/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        store: {
            // ...
            // Underlying store is configured here
            // ...
        },
        fields: [{
            area: 'column',
            dataField: 'OrderDate',
            dataType: 'date'
        }, {
            area: 'row',
            dataField: 'ShipCity'
        }, {
            area: 'data',
            summaryType: 'count'
        }]
    });

    export default {
        components: {
            DxPivotGrid
        },
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-react/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        store: {
            // ...
            // Underlying store is configured here
            // ...
        },
        fields: [{
            area: 'column',
            dataField: 'OrderDate',
            dataType: 'date'
        }, {
            area: 'row',
            dataField: 'ShipCity'
        }, {
            area: 'data',
            summaryType: 'count'
        }]
    });

    class App extends React.Component {
        render() {
            return (
                <PivotGrid
                    dataSource={pivotGridDataSource}
                />
            );
        }
    }
    export default App;

---

[note] If you create a **PivotGridDataSource** instance outside the widget (as shown above), make sure to [dispose](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/dispose().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#dispose') of it when it is no longer used. If the instance is created inside the widget, it will be disposed of automatically.

When using a widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, configure the **PivotGridDataSource** using the syntax shown in the following example. This example configures the [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') widget.

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
- <a href="https://docs.devexpress.com/AspNetCore/400575/devextreme-based-controls/concepts/bind-controls-to-data" target="_blank">ASP.NET MVC Controls - Bind Controls to Data</a>