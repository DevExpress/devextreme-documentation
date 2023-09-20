To specify cell focus order when a user navigates through DataGrid, call the [onFocusedCellChanging](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onFocusedCellChanging) function. The code below uses `newColumnIndex` to set the column index of the next focused cell.

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGridContainer").dxDataGrid({
        // ...
        onFocusedCellChanging: function (e) {
            if (e.columns[e.newColumnIndex].dataField === "myField") { // Checks if the next focused cell is in the 'myField' column
                e.newColumnIndex++; // Navigates to the next column
            }
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        (onFocusedCellChanging)="onFocusedCellChanging($event)">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    
    export class AppComponent {
        onFocusedCellChanging(e) {
            if (e.columns[e.newColumnIndex].dataField === "myField") { // Checks if the next focused cell is in the 'myField' column
                e.newColumnIndex++; // Navigates to the next column
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @focused-cell-changing="onFocusedCellChanging">
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
            onFocusedCellChanging(e) {
                if (e.columns[e.newColumnIndex].dataField === "myField") { // Checks if the next focused cell is in the 'myField' column
                    e.newColumnIndex++; // Navigates to the next column
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

    const onFocusedCellChanging = (e) => {
        if (e.columns[e.newColumnIndex].dataField === "myField") { // Checks if the next focused cell is in the 'myField' column
            e.newColumnIndex++; // Navigates to the next column
        }
    }

    function App() {
        return (
            <DataGrid ...
                onFocusedCellChanging={onFocusedCellChanging}>
            </DataGrid>
        );
    }
    export default App;

---
