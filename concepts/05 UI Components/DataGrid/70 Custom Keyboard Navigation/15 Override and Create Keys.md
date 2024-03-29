The [onKeyDown](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onKeyDown.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onKeyDown') event handler allows you to track pressed keystrokes while the UI component has focus. You can use the event handler to override the default keyboard shortcuts, implement custom keystrokes, or extend existing ones.

The following example shows how to override the **Space Bar** keystroke so it switches a cell in cell/batch mode to the edit state instead of a current row select operation:

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGridContainer").dxDataGrid({
        // ...
        onKeyDown: function (e) {
            if (e.event.keyCode === 32) { // Checks if the space bar key is pressed
                e.event.preventDefault(); // Prevents the default behavior
                const focusedRowIndex = e.component.option("focusedRowIndex");
                const focusedColumnIndex = e.component.option("focusedColumnIndex");
                e.component.editCell(focusedRowIndex, focusedColumnIndex);
            }
        }
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onKeyDown)="onKeyDown($event)">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        onKeyDown(e) {
            if (e.event.keyCode === 32) { // Checks if the space bar key is pressed
                e.event.preventDefault(); // Prevents the default behavior
                const focusedRowIndex = e.component.option("focusedRowIndex");
                const focusedColumnIndex = e.component.option("focusedColumnIndex");
                e.component.editCell(focusedRowIndex, focusedColumnIndex);
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @key-down="onKeyDown">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        // ...
        methods: {
            onKeyDown(e) {
                if (e.event.keyCode === 32) { // Checks if the space bar key is pressed
                    e.event.preventDefault(); // Prevents the default behavior
                    const focusedRowIndex = e.component.option("focusedRowIndex");
                    const focusedColumnIndex = e.component.option("focusedColumnIndex");
                    e.component.editCell(focusedRowIndex, focusedColumnIndex);
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

    const onKeyDown = (e) => {
        if (e.event.keyCode === 32) { // Specifies if the space bar key is pressed
            e.event.preventDefault(); // Prevents the default behavior
            const focusedRowIndex = e.component.option("focusedRowIndex");
            const focusedColumnIndex = e.component.option("focusedColumnIndex");
            e.component.editCell(focusedRowIndex, focusedColumnIndex);
        }
    }

    function App() {
        return (
            <DataGrid ...
                onKeyDown={onKeyDown}>
            </DataGrid>
        );
    }

    export default App;

---