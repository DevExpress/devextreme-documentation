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

---
This property accepts the name of the [data source field](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') that provides values by which to sort this column...

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
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="Position" <!-- provides column values -->
            calculateSortValue="isOnVacation"> <!-- provides values used to sort the Position column -->
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })
    

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

... or a function that returns such values:

---
##### jQuery

    <!--JavaScript-->$(function() {
        var {widgetName} = $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "Position",
                sortOrder: "asc",
                calculateSortValue: function (rowData) {
                    const column = this;
                    if (rowData.Position == "CEO")
                        return column.sortOrder == "asc" ? "aaa" : "zzz"; // CEOs are always displayed at the top
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            }]
        }).dx{WidgetName}("instance");
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        customSortingFunction (rowData) {
            const column = this as any;
            if (rowData.Position == "CEO")
                return column.sortOrder == "asc" ? "aaa" : "zzz"; // CEOs are always displayed at the top
            else
                return rowData.Position; // Others are sorted as usual
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
    <dx-{widget-name} ... >
        <dxi-column
            dataField="Position"
            sortOrder="asc"
            [calculateSortValue]="customSortingFunction">
        </dxi-column>
    </dx-{widget-name}>
    
##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="Position"
                :calculate-sort-value="customSortingFunction"
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
                customSortingFunction(rowData) {
                    const column = this;
                    if (rowData.Position == "CEO")
                        return column.sortOrder == "asc" ? "aaa" : "zzz"; // CEOs are always displayed at the top
                    else 
                        return rowData.Position; // Others are sorted as usual
                },
            };
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    function customSortingFunction(rowData){
        const column = this;
        if (rowData.Position == "CEO")
            return column.sortOrder == "asc" ? "aaa" : "zzz"; // CEOs are always displayed at the top
        else 
            return rowData.Position; // Others are sorted as usual
    }

    function App() {
        // ...
        return (
            <DataGrid ...>
                <Column
                    dataField="Position"
                    calculateSortValue={customSortingFunction}
                />
            </DataGrid>
        );
    }

    export default App;

---

[note]

- The `this` keyword refers to the column's configuration.

- **calculateSortValue** does not affect group rows. To sort them, implement [calculateGroupValue](/api-reference/_hidden/dxDataGridColumn/calculateGroupValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateGroupValue') in addition to **calculateSortValue**. You should also define the [groupCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellTemplate) to apply a custom template for group rows. Refer to the following GitHub repository for an example: <a href="https://github.com/DevExpress-Examples/DataGrid---How-to-apply-custom-sorting-to-a-grouped-column" target="_blank">DataGrid - How to apply custom sorting to a grouped column</a>. 

[/note]

#####See Also#####
- [sortingMethod](/api-reference/_hidden/GridBaseColumn/sortingMethod.md '{basewidgetpath}/Configuration/columns/#sortingMethod')
- **columns[]**.[sortOrder]({basewidgetpath}/Configuration/columns/#sortOrder)
