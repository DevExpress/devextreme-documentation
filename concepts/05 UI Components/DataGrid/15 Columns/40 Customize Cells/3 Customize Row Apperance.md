### Change Style Based on Row State (Selected, Focused, Hovered)

To change row selection color, use the following CSS rules:

    <!-- tab: Selected -->
    .dx-datagrid-rowsview .dx-selection.dx-row:not(.dx-row-focused):not(.dx-row-removed) > td {
        background-color: red;
        color: unset;
    }

Set the [focusedRowEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#focusedRowEnabled') and/or [hoverStateEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/hoverStateEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#hoverStateEnabled') properties to `true` to enable focused row and hover features. Specify the following CSS rules to change row color:

    <!-- tab: Focused -->
    .dx-datagrid-rowsview .dx-row-focused.dx-data-row .dx-command-edit:not(.dx-focused) .dx-link,
    .dx-datagrid-rowsview .dx-row-focused.dx-data-row > td:not(.dx-focused),
    .dx-datagrid-rowsview .dx-row-focused.dx-data-row > tr > td:not(.dx-focused) {
        background-color: red !important;
        color: #fff !important; 
    }

    <!-- tab: Hovered -->
    .dx-data-row.dx-state-hover:not(.dx-selection):not(.dx-row-inserted):not(.dx-row-removed):not(.dx-edit-row) > td:not(.dx-focused) {  
        background-color: orange !important;  
        color: unset !important;  
    }  

### Change Style Based on Row Data (Conditional Formatting)

To customize the existing row appearance, implement the [onRowPrepared](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowPrepared.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowPrepared') event handler. This handler allows you to customize the existing row layout after it is generated. If a customization is not immediately applied, use the [repaintRows(rowIndexes)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/repaintRows(rowIndexes).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#repaintRowsrowIndexes') method to repaint DataGrid rows.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowTemplate/"
}

The following example demonstrates how to use the [onRowPrepared](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowPrepared.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowPrepared') function to conditionally change the cell color. As a result, the DataGrid component paints the rows red where the speed exceeds the speed limit.

![Change Color Conditionally with onRowPrepared](/images/DataGrid/customize-appearance/onRowPrepared.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onRowPrepared: function(e) {
                if (e.rowType === "data") {
                    if (e.data.Speed > e.data.SpeedLimit) {
                        e.rowElement.css({"color":"white", "background-color":"red"});
                        // or
                        e.rowElement.addClass("my-class");
                        // To override alternation color
                        e.rowElement.removeClass("dx-row-alt");
                    }
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        (onRowPrepared)="onRowPrepared($event)">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        onRowPrepared(e) {
            if (e.rowType === "data") {
                if (e.data.Speed > e.data.SpeedLimit) {
                    e.cellElement.style.cssText = "color: white; background-color: red";
                    // or
                    e.rowElement.classList.add("my-class");
                    // To override alternation color
                    e.rowElement.className = e.rowElement.className.replace("dx-row-alt", "");
                }
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @row-prepared="onRowPrepared">
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
            onRowPrepared(e) {
                if (e.rowType === "data") {
                    if (e.data.Speed > e.data.SpeedLimit) {
                        e.cellElement.style.cssText = "color: white; background-color: red";
                        // or
                        e.rowElement.classList.add("my-class");
                        // To override alternation color
                        e.rowElement.className = e.rowElement.className.replace("dx-row-alt", "");
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

    const rowPrepared = (e) => {
        if (e.rowType === "data") {
            if (e.data.Speed > e.data.SpeedLimit) {
                e.cellElement.style.cssText = "color: white; background-color: red";
                // or
                e.rowElement.classList.add("my-class");
                // To override alternation color
                e.rowElement.className = e.rowElement.className.replace("dx-row-alt", "");
            }
        }
    }

    function App() {
        return (
            <DataGrid ...
                onRowPrepared={rowPrepared}>
            </DataGrid>
        );
    }

    export default App;
    
---

You can also use the [dataRowTemplate](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/dataRowTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataRowTemplate') property to customize row appearance.