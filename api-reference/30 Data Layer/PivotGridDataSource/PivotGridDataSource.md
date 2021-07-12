---
id: PivotGridDataSource
module: ui/pivot_grid/data_source
export: default
---
---
##### shortDescription
The **PivotGridDataSource** is an object that provides an API for processing data from an underlying [store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/'). This object is used in the [PivotGrid](/api-reference/10%20UI%20Components/dxPivotGrid '/Documentation/ApiReference/UI_Components/dxPivotGrid/') UI component.

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

[note] If you create a **PivotGridDataSource** instance outside the UI component (as shown above), make sure to [dispose](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/dispose().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#dispose') of it when it is no longer used. If the instance is created inside the UI component, it will be disposed of automatically.

#include datalayer-store-note-immutable with { name: "PivotGridDataSource" }

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/Overview/"
}
