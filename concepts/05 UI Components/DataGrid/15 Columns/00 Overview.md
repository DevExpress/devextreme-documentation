Columns represent sets of data values that have the same type. To configure columns, assign an array of objects to the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') property. Each object in it configures a single column. If a column does not need to be customized, this array may include the name of the field that provides data for this column.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({ 
            // ...
            columns: [
                { dataField: "Title", caption: "Position" },
                { dataField: "FullName", width: 300 }, 
                "CompanyName",
                "City"
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="Title" caption="Position"></dxi-column>
        <dxi-column dataField="FullName" [width]="300"></dxi-column>
        <dxi-column dataField="CompanyName"></dxi-column>
        <dxi-column dataField="City"></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
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
        <DxDataGrid ... >
            <DxColumn data-field="Title" caption="Position" />
            <DxColumn data-field="FullName" :width="300" />
            <DxColumn data-field="CompanyName" />
            <DxColumn data-field="City" />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column dataField="Title" caption="Position" />
                    <Column dataField="FullName" width={300} />
                    <Column dataField="CompanyName" />
                    <Column dataField="City" />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

The **DataGrid** generates a column per data field if you do not specify the **columns** array. You can make minor adjustments to these columns with the [customizeColumns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#customizeColumns') function. Use the function's parameter to access the column configurations.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({ 
            // ...
            customizeColumns: function (columns) {
                columns[0].width = 100;
                columns[1].width = 210;
            }
        })
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        constructor() {
            // Uncomment the line below if customizeColumns should be executed in the component's context
            // this.customizeColumns = this.customizeColumns.bind(this);
        }

        customizeColumns (columns) {
            columns[0].width = 100;
            columns[1].width = 210;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        [customizeColumns]="customizeColumns">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            :customize-columns="customizeColumns">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            customizeColumns(columns) {
                columns[0].width = 100;
                columns[1].width = 210;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor() {
            super(props);
            // Uncomment the line below if customizeColumns should be executed in the component's context
            // this.customizeColumns = this.customizeColumns.bind(this);
        }

        customizeColumns(columns) {
            columns[0].width = 100;
            columns[1].width = 210;
        }

        render() {
            return (
                <DataGrid ...
                    customizeColumns={this.customizeColumns}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

This topic has outlined the ways to configure columns in the **DataGrid** UI component. For a detailed overview of column features, refer to other topics in this section.

#####See Also#####
- **Column Types**: [Data Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Data_Columns/') | [Band Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/2%20Band%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Band_Columns/') | [Lookup Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/3%20Lookup%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Lookup_Columns/') | [Command Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/')
