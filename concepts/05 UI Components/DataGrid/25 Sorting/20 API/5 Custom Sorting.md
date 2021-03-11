Implement a custom sorting routine using the [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateSortValue') property if standard sorting does not meet your requirements. It accepts the name of the [data source field](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource') that provides values to be used in sorting...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                dataField: "Position", // provides values for the column
                calculateSortValue: "isOnVacation" // provides values to be used in sorting 
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="Position" <!--provides values for the column -->
            calculateSortValue="isOnVacation"> <!-- provides values to be used in sorting -->
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";

    export class AppComponent {
        // ...
    }

    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <!-- data-field provides values for the column -->
            <!-- calculate-sort-value provides values to be used in sorting -->
            <DxColumn
                data-field="Position"
                calculate-sort-value="isOnVacation"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Column } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid>
                    {/* dataField provides values for the column */}
                    {/* calculateSortValue provides values to be used in sorting */}
                    <Column
                        dataField="Position"
                        calculateSortValue="isOnVacation" />
                </DataGrid>
            );
        }
    }
    export default App;

---

...or a function that returns such a value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var dataGrid = $("#dataGridContainer").dxDataGrid({
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

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="Position"
            sortOrder="asc"
            [calculateSortValue]="calculateSortValue">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";

    export class AppComponent {
        calculateSortValue(rowData) {
            if (rowData.Position == "CEO")
                return this.sortOrder == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
            else
                return rowData.Position; // Others are sorted as usual
        }
    }

    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

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

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        data() {
            return {
                calculateSortValue(rowData) {
                    if (rowData.Position == "CEO")
                        return this.sortOrder == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Column } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...>
                    <Column
                        dataField="Position"
                        defaultSortOrder="asc"
                        calculateSortValue={this.calculateSortValue} />
                </DataGrid>
            );
        }

        calculateSortValue(rowData) {
            if (rowData.Position == "CEO")
                return this.sortOrder == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top    
            else
                return rowData.Position; // Others are sorted as usual
        }
    }
    export default App;

---
