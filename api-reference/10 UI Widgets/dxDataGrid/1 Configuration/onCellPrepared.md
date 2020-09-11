---
id: dxDataGrid.Options.onCellPrepared
type: function(e)
default: null
EventForAction: dxDataGrid.cellPrepared
---
---
##### shortDescription
A function that is executed after a cell is created.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.column): dxDataGridColumn
This column's [configuration](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### field(e.columnIndex): Number
The index of the column to which the cell belongs. For details on indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row to which the cell belongs. Unavailable if **rowType** is *"header"*, *"filter"*, or *"totalFooter"*.

##### field(e.displayValue): any
The cell's displayed value. Differs from the **value** field only when the column to which the prepared cell belongs uses [lookup](/api-reference/_hidden/dxDataGridColumn/lookup '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/').

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Unavailable if **rowType** is *"header"*, *"filter"*, or *"totalFooter"*.

##### field(e.isNewRow): Boolean
Indicates that the row is added, but not yet saved. Available if **rowType** is *"data"*.

##### field(e.isSelected): Boolean
Indicates whether the row is selected.

##### field(e.key): any
The row's key. Unavailable if **rowType** is *"header"*, *"filter"*, or *"totalFooter"*.        
If a field providing keys is not specified in the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.oldValue): any
<!-- %field(cellInfo.oldValue)% -->

##### field(e.row): dxDataGridRowObject
The row [properties](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/').

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType').

##### field(e.text): String
The cell's [formatted](/api-reference/_hidden/dxDataGridColumn/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format') value converted to a string.

##### field(e.value): any
The cell's raw value.

##### field(e.watch): function()
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/repaintChangesOnly.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#repaintChangesOnly') is **true**.       
This function has the following parameters:     

- **getter(data)**: Function        
A function that returns the variable that should be tracked.

- **handler(newValue)**: Function       
A function called when this variable changes.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CellCustomization/"
}

In the following code, the **onCellPrepared** function is used to change a `ProductName`'s color depending on the `Amount` of sold products. You can paste this code in the [Real-Time Updates](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RealTimeUpdates) demo and see how it works.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
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
    import { DxDataGridModule } from "devextreme-angular";
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
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        [repaintChangesOnly]="true"
        (onCellPrepared)="onCellPrepared($event)">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}
            :repaint-changes-only="true"
            @cell-prepared="onCellPrepared"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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

    import 'devextreme/dist/css/dx.common.css';
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
    @(Html.DevExtreme().DataGrid()
        .ID("dataGridContainer")
        // ...
        .RepaintChangesOnly(true)
        .OnCellPrepared("dataGrid_cellPrepared_handler")
    )
    <script>
        function dataGrid_cellPrepared_handler(e) {
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

#####See Also#####
- [Customize Cells](/concepts/05%20Widgets/DataGrid/15%20Columns/40%20Customize%20Cells/2%20Customize%20the%20Appearance.md '/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/#Customize_the_Appearance')

<!-- import * from 'api-reference\_hidden\dxDataGridColumn\cellTemplate.md' -->