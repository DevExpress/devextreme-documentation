---
id: dxDataGrid.Options.onCellPrepared
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after a grid cell is created.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cellElement): DxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.column): dxDataGridColumn
This column's [configuration]({basewidgetpath}/Configuration/columns/).

##### field(e.columnIndex): Number
The visible column index described in the following topic: [Column and Row Indexes](/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_and_Row_Indexes/).

##### field(e.component): dxDataGrid
The UI component's instance.

##### field(e.data): Object
The data of the row to which the cell belongs. Unavailable if [rowType]({basewidgetpath}/Row/#rowType) is *"header"*, *"filter"*, or *"totalFooter"*.

##### field(e.displayValue): any
The cell's displayed value. Available if the **rowType** is *"data"*.     
Differs from the **value** field only when the column to which the prepared cell belongs uses [lookup]({basewidgetpath}/Configuration/columns/lookup/).

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Unavailable if **rowType** is *"header"*, *"filter"*, or *"totalFooter"*.

##### field(e.isNewRow): Boolean
Indicates that the row is added, but not yet saved. Available if **rowType** is *"data"*.

##### field(e.isSelected): Boolean
Indicates whether the row is selected. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.key): any
The row's key. Unavailable if **rowType** is *"header"*, *"filter"*, or *"totalFooter"*.        
If a field providing keys is not specified in the [data source](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.oldValue): any
<!-- %field(cellInfo.oldValue)% -->

##### field(e.row): dxDataGridRowObject
The row [properties]({basewidgetpath}/Row/).

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_and_Row_Indexes/) for more information.

##### field(e.rowType): String
The row's [type]({basewidgetpath}/Row/#rowType).

##### field(e.text): String
The cell's [formatted]({basewidgetpath}/Configuration/columns/#format) value converted to a string. Available if the **rowType** is *"data"*.

##### field(e.value): any
The cell's raw value. Available if the **rowType** is *"data"*.

##### field(e.watch): function()
Allows you to track a variable and execute actions when it changes. Applies when [repaintChangesOnly]({basewidgetpath}/Configuration/#repaintChangesOnly) is **true**.       
This function has the following parameters:     

- **getter(data)**: Function        
A function that returns the variable that should be tracked.

- **handler(newValue)**: Function       
A function called when this variable changes.

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

#####See Also#####
- [Customize Cells](/Documentation/Guide/UI_Components/{WidgetName}/Columns/Customize_Cells/#Customize_the_Appearance)

<!-- import * from 'api-reference\_hidden\dxDataGridColumn\cellTemplate.md' -->