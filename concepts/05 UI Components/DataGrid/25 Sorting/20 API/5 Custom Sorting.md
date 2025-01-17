Use the [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateSortValue') option for custom sorting if standard methods do not meet your requirements. This option can be a field name from the [data source](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource') or a function that returns sorting values.

The following code snippet shows how to supply sorting values with a field name:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                dataField: "Position", // sets values for the column
                calculateSortValue: "isOnVacation" // sets values for sorting
            }]
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column
            dataField="Position" <!--sets values for the column -->
            calculateSortValue="isOnVacation"> <!-- sets values for sorting -->
        </dxi-column>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <!-- data-field sets values for the column -->
            <!-- calculate-sort-value sets values for sorting -->
            <DxColumn
                data-field="Position"
                calculate-sort-value="isOnVacation"
            />
        </DxDataGrid>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Column } from 'devextreme-react/data-grid';

    function App() {
        return (
            <DataGrid>
                {/* dataField sets values for the column */}
                {/* calculateSortValue sets values for sorting */}
                <Column
                    dataField="Position"
                    calculateSortValue="isOnVacation" />
            </DataGrid>
        );
    }

    export default App;

---

The following code snippet shows how to use a function:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const dataGrid = $("#dataGridContainer").dxDataGrid({
            columns: [{
                dataField: "Position",
                sortOrder: "asc",
                calculateSortValue: function (rowData) {
                    if (rowData.Position == "CEO")
                        return dataGrid.columnOption('Position', 'sortOrder') == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top  
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            }]
        }).dxDataGrid("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column
            dataField="Position"
            sortOrder="asc"
            [calculateSortValue]="calculateSortValue">
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        calculateSortValue(rowData) {
            if (rowData.Position == "CEO")
                return this.sortOrder == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
            else
                return rowData.Position; // Others are sorted as usual
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...>
            <DxColumn
                data-field="Position"
                sort-order="asc"
                :calculate-sort-value="calculateSortValue"
            />
        </DxDataGrid>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    const calculateSortValue  = (rowData) => {
        if (rowData.Position == "CEO")
            return this.sortOrder == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
        else
            return rowData.Position; // Others are sorted as usual
    }

    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Column } from 'devextreme-react/data-grid';

    const calculateSortValue = (rowData) => {
        if (rowData.Position == "CEO")
            return this.sortOrder == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top    
        else
            return rowData.Position; // Others are sorted as usual
    }

    function App() {
        return (
            <DataGrid ...>
                <Column
                    dataField="Position"
                    defaultSortOrder="asc"
                    calculateSortValue={calculateSortValue} />
            </DataGrid>
        );
    }
    export default App;

---

Alternatively, adjust sorting with [sortingMethod](/api-reference/_hidden/GridBaseColumn/sortingMethod.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#sortingMethod'). The following code snippet sorts the column by word length:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const dataGrid = $("#dataGridContainer").dxDataGrid({
            columns: [{
                dataField: 'State',
                sortingMethod: function (value1, value2) {
                    return value1.length - value2.length;
                }
            }]
        }).dxDataGrid("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column
            dataField="State"
            [sortingMethod]="sortingMethod">
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        sortingMethod(value1, value2) {
            return value1.length - value2.length;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...>
            <DxColumn
                data-field="State"
                :sorting-method="sortingMethod"
            />
        </DxDataGrid>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    const sortingMethod = (value1, value2) => {
        return value1.length - value2.length;
    }

    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Column } from 'devextreme-react/data-grid';

    const sortingMethod = (value1, value2) => {
        return value1.length - value2.length;
    }

    function App() {
        return (
            <DataGrid ...>
                <Column
                    dataField="State"
                    sortingMethod={sortingMethod} />
            </DataGrid>
        );
    }
    export default App;

---