---
id: ColumnProperties.calculateSortValue
type: String | function(cardData)
---
---
##### shortDescription
Calculates custom values used to sort this column.

##### param(cardData): Object
The data of the card to which the field belongs.

##### return: any
The value to be used in sorting.

##### context: Column
The `this` keyword refers to the column's configuration.

---
This property requires the name of the [data source field](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') used for sorting this column or a function to obtain those values. The following code snippet demonstrates the first approach:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "Position", // supplies column values 
                calculateSortValue: "isOnVacation" // supplies values used to sort the Position column
            }]
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-{widget-name}-column
            dataField="Position" <!-- supplies column values -->
            calculateSortValue="isOnVacation"> <!-- supplies values used to sort the Position column -->
        </dxi-{widget-name}-column>
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="Position" <!-- supplies column values -->
                calculate-sort-value="isOnVacation" <!-- supplies values used to sort the Position column -->
            />
        </DxDataGrid>
    </template>
    <script setup lang="ts">
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    function App() {
        // ...
        return (
            <DataGrid ...>
                <Column
                    dataField="Position" // supplies column values
                    calculateSortValue="isOnVacation" // supplies values used to sort the Position column
                />
            </DataGrid>
        );
    }

    export default App;

---

The following code snippet uses **calculateSortValue** to concatenate State and City values for sorting the Employee column:

---
##### jQuery

    <!--JavaScript-->$(function() {
        const {widgetName} = $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "Employee",
                sortOrder: "asc",
                calculateSortValue: function (cardData) {
                    return cardData.State + cardData.City;
                }
            }]
        }).dx{WidgetName}("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-{widget-name}-column
            dataField="Employee"
            sortOrder="asc"
            [calculateSortValue]="sortByLocation">
        </dxi-{widget-name}-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        sortByLocation (cardData) {
            return cardData.State + cardData.City;
        }
    }
    
##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="Employee"
                :calculate-sort-value="sortByLocation"
            />
        </DxDataGrid>
    </template>
    <script setup lang="ts">
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    const sortByLocation = (cardData) => {
        return cardData.State + cardData.City;
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    function sortByLocation(cardData){
        return cardData.State + cardData.City;
    }

    function App() {
        // ...
        return (
            <DataGrid ...>
                <Column
                    dataField="Employee"
                    calculateSortValue={sortByLocation}
                />
            </DataGrid>
        );
    }

    export default App;

---