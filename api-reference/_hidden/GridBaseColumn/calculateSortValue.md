---
id: GridBaseColumn.calculateSortValue
type: String | function(rowData)
---
---
##### shortDescription
Calculates custom values used to sort this column.

##### param(rowData): Object
The data of the row to which the cell belongs.

##### return: any
The value to be used in sorting.

##### context: GridBaseColumn
<!-- Description goes here -->

---
This property accepts the name of the [data source field](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') that provides values used to sort this column.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "Position", // provides column values 
                calculateSortValue: "isOnVacation" // provides values used to sort the Position column
            }]
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="Position" <!-- provides column values -->
            calculateSortValue="isOnVacation"> <!-- provides values used to sort the Position column -->
        </dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxDataGridModule } from 'devextreme-angular'; 
    
    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxDataGridModule 
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 
    
    export class AppModule { }
    

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="Position" <!-- provides column values -->
                calculate-sort-value="isOnVacation" <!-- provides values used to sort the Position column -->
            />
        </DxDataGrid>
    </template>
    <script>
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column } from 'devextreme-react/data-grid';


    function App() {
        // ...
        return (
            <DataGrid ...>
                <Column
                    dataField="Position" // provides column values
                    calculateSortValue="isOnVacation" // provides values used to sort the Position column
                />
            </DataGrid>
        );
    }

    export default App;

---

... or a function that returns such values. In the code below, **calculateSortValue** concatenates the State and City column values to sort the Employee column:

---
##### jQuery

    <!--JavaScript-->$(function() {
        var {widgetName} = $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "Employee",
                sortOrder: "asc",
                calculateSortValue: function (rowData) {
                    return rowData.State + rowData.City;
                }
            }]
        }).dx{WidgetName}("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="Employee"
            sortOrder="asc"
            [calculateSortValue]="sortByLocation">
        </dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        sortByLocation (rowData) {
            return rowData.State + rowData.City;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxDataGridModule } from 'devextreme-angular'; 
    
    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxDataGridModule 
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 
    
    export class AppModule { }
    
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
    <script>
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        data() {
            return {
                // ...
                sortByLocation(rowData) {
                    return rowData.State + rowData.City;
                },
            };
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    function sortByLocation(rowData){
        return rowData.State + rowData.City;
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

[note]

- The `this` keyword refers to the column's configuration.

- **calculateSortValue** does not affect group rows. To sort them, implement [calculateGroupValue](/api-reference/_hidden/dxDataGridColumn/calculateGroupValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateGroupValue') in addition to **calculateSortValue**. You should also define the [groupCellTemplate](/api-reference/_hidden/dxDataGridColumn/groupCellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellTemplate') to apply a custom template for group rows. Refer to the following GitHub repository for an example: <a href="https://github.com/DevExpress-Examples/DataGrid---How-to-apply-custom-sorting-to-a-grouped-column" target="_blank">DataGrid - How to apply custom sorting to a grouped column</a>. 

[/note]

#####See Also#####
- [sortingMethod](/api-reference/_hidden/GridBaseColumn/sortingMethod.md '{basewidgetpath}/Configuration/columns/#sortingMethod')
- **columns[]**.[sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '{basewidgetpath}/Configuration/columns/#sortOrder')
