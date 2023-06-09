---
id: dxDataGrid.Options.onCellPrepared
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after a grid cell is created.

##### param(e): CellPreparedEvent
Information about the event that caused the function's execution.

---
In the following code, the **onCellPrepared** function is used to change a `ProductName`'s color depending on the `Amount` of sold products. You can paste this code in the [Real-Time Updates](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RealTimeUpdates) demo and see how it works.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            repaintChangesOnly: true,
            onCellPrepared: function(e) {
                if(e.rowType === "data" && e.column.dataField === "ProductName") {
                    e.cellElement.css("color", e.data.Amount >= 10000 ? "green" : "red");
                    // Tracks the `Amount` data field
                    e.watch(function() {
                        return e.data.Amount;
                    }, function() {
                        e.cellElement.css("color", e.data.Amount >= 10000 ? "green" : "red");
                    })
                }
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        onCellPrepared(e) {
            if(e.rowType === "data" && e.column.dataField === "ProductName") {
                e.cellElement.style.color = e.data.Amount >= 10000 ? "green" : "red";
                // Tracks the `Amount` data field
                e.watch(function() {
                    return e.data.Amount;
                }, function() {
                    e.cellElement.style.color = e.data.Amount >= 10000 ? "green" : "red";
                })
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ...
        [repaintChangesOnly]="true"
        (onCellPrepared)="onCellPrepared($event)">
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}
            :repaint-changes-only="true"
            @cell-prepared="onCellPrepared"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-vue/{widget-name}';
  
    export default {
        components: {
            Dx{WidgetName}
        },
        methods: {
           onCellPrepared(e) {
                if(e.rowType === "data" && e.column.dataField === "ProductName") {
                    e.cellElement.style.color = e.data.Amount >= 10000 ? "green" : "red";
                    // Tracks the `Amount` data field
                    e.watch(function() {
                        return e.data.Amount;
                    }, function() {
                        e.cellElement.style.color = e.data.Amount >= 10000 ? "green" : "red";
                    })
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        // ...
        render() {
            return (
                <{WidgetName}
                     repaintChangesOnly={true}
                     onCellPrepared={this.onCellPrepared}
                />
            );
        }
        onCellPrepared = (e) => {
            if(e.rowType === "data" && e.column.dataField === "ProductName") {
                e.cellElement.style.color = e.data.Amount >= 10000 ? "green" : "red";
                // Tracks the `Amount` data field
                e.watch(function() {
                    return e.data.Amount;
                }, function() {
                    e.cellElement.style.color = e.data.Amount >= 10000 ? "green" : "red";
                })
            }
        }
    }
    export default App;

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        .ID("{widgetName}Container")
        // ...
        .RepaintChangesOnly(true)
        .OnCellPrepared("{widgetName}_cellPrepared_handler")
    )
    <script>
        function {widgetName}_cellPrepared_handler(e) {
            if (e.rowType === "data" && e.column.dataField === "ProductName") {
                e.cellElement.css("color", e.data.Amount >= 10000 ? "green" : "red");
                // Tracks the `Amount` data field
                e.watch(function() {
                    return e.data.Amount;
                }, function() {
                    e.cellElement.css("color", e.data.Amount >= 10000 ? "green" : "red");
                })
            }
        }
    </script>

---

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-display-tooltip-for-data-cells"
}

#####See Also#####
- [Customize Cells](/concepts/05%20UI%20Components/DataGrid/15%20Columns/40%20Customize%20Cells/2%20Customize%20Cell%20Appearance.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Customize_Cells/#Customize_Cell_Appearance')

<!-- import { field(cellInfo.oldValue) } from 'api-reference\_hidden\dxDataGridColumn\cellTemplate.md' -->
<!-- import { field(e.isExpanded) } from 'api-reference\10 UI Components\dxDataGrid\1 Configuration\onRowClick.md' -->