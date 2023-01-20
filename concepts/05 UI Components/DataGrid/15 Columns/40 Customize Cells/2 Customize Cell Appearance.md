### Apply a Style to All Cells in a Column

You can use CSS rules and assign a class to the [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/).[cssClass](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cssClass) property to apply styles to all cells in a column. 

### Apply a Style to Individual Cells or Rows (Conditional Formatting)

Implement the [onCellPrepared](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onCellPrepared') function. It allows you to customize the entire cell's markup after the layout has been generated.

The following example demonstrates how to use the [onCellPrepared](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onCellPrepared') function to change cell color conditionally. As a result, the DataGrid component paints the cells where speed is higher than speed limit red.

Remove the `e.column.dataField === "Speed"` condition to apply the appearance to all cells in a row.

![Change Color Conditionally with onCellPrepared](/images/DataGrid/customize-appearance/onCellPrepared.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onCellPrepared: function(e) {
                if (e.rowType === "data") {
                    if (e.column.dataField === "Speed" && e.data.Speed > e.data.SpeedLimit) {
                        e.cellElement.css({"color":"white", "background-color":"red"});
                        // or
                        e.cellElement.addClass("my-class");
                    }
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        (onCellPrepared)="onCellPrepared($event)">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        onCellPrepared (e) {
            if (e.rowType === "data") {
                if (e.column.dataField === "Speed" && e.data.Speed > e.data.SpeedLimit) {
                    e.cellElement.style.cssText = "color: white; background-color: red";
                    // or
                    e.cellElement.classList.add("my-class");
                }
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @cell-prepared="onCellPrepared">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            onCellPrepared(e) {
                if (e.rowType === "data") {
                    if (e.column.dataField === "Speed" && e.data.Speed > e.data.SpeedLimit) {
                        e.cellElement.style.cssText = "color: white; background-color: red";
                        // or
                        e.cellElement.classList.add("my-class");
                    }
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    const cellPrepared = (e) => {
        if (e.rowType === "data") {
            if (e.column.dataField === "Speed" && e.data.Speed > e.data.SpeedLimit) {
                e.cellElement.style.cssText = "color: white; background-color: red";
                // or
                e.cellElement.classList.add("my-class");
            }
        }
    }

    function App() {
        return (
            <DataGrid ...
                onCellPrepared={cellPrepared}>
            </DataGrid>
        );
    }

    export default App;
    
---

You can also specify the [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/).[cellTemplate](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate') property. It allows you to replace cell content with custom markup, but does not give you access to the entire cell element.

The example below shows how to use the [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/).[cellTemplate](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate') property to implement the same task. 

![Change Color Conditionally with cellTemplate](/images/DataGrid/customize-appearance/column-cellTemplate.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: 'Speed',
                cellTemplate: function(container, cellInfo) {
                    const valueDiv = $("<div>").text(cellInfo.value);
                    if (cellInfo.data.Speed > cellInfo.data.SpeedLimit) {
                        valueDiv.css({"color":"white", "background-color":"red"});
                    }
                    return valueDiv;
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column
            dataField="Speed"
            cellTemplate="limitTemplate"
        ></dxi-column>
        <div *dxTemplate="let cellInfo of 'limitTemplate'">
            <div [ngClass]="{'my-class': cellInfo.data.Speed > cellInfo.data.SpeedLimit}">
                {{cellInfo.value}}
            </div>                                                 
        </div>
    </dx-data-grid>

    <!-- tab: app.component.css -->
    .my-class {
        background-color: red;
        color: white;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="Speed"
                cell-template="grid-cell"
            />
            <template #grid-cell="{ data }">
                <div
                    :class="{
                        'my-class': cellInfo.data.Speed > cellInfo.data.SpeedLimit,
                    }"
                >{{data.value}}</div>
            </template>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        // ...
    }
    </script>

    <style>
        .my-class {
            background-color: red;
            color: white;
        }
    </style>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    const renderGridCell = (data) => {
        let className = '';
        if (cellInfo.data.Speed > cellInfo.data.SpeedLimit) {
            className += 'my-class';
        }
        return <div className={className}>{cellInfo.value}</div>;
    }

    function App() {
        return (
            <DataGrid ... >
                <Column
                    dataField="Speed"
                    cellRender={renderGridCell}
                />
            </DataGrid>
        );
    }
    export default App;

    <!-- tab: index.css -->
    .my-class {
        background-color: red;
        color: white;
    }

---

If a customization is not immediately applied, use the [repaint()](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#repaint) method to repaint DataGrid or the [repaintRows(rowIndexes)](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#repaintRowsrowIndexes) method to repaint specific rows only.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnTemplate/"
}

#####See Also#####
- [Customize Column Headers](/concepts/05%20UI%20Components/DataGrid/15%20Columns/15%20Customize%20Column%20Headers.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Customize_Column_Headers/')
