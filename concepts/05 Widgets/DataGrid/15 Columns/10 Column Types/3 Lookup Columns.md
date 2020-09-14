A lookup column is a special type of [data columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Data_Columns'). It contains a restricted set of values that is useful when filtering and editing.

![DevExtreme HTML5 JavaScript DataGrid LookupColumns](/images/DataGrid/visual_elements/column-types_lookup.png)

Each lookup column has an individual [data source](/api-reference/_hidden/GridBaseColumn/lookup/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/#dataSource') - a collection of objects that map the column's actual values to display values...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: orders,
            columns: [{
                dataField: 'statusId', // provides actual values
                lookup: {
                    dataSource: {
                        store: {
                            type: 'array',
                            data: [
                                { id: 1, name: 'Not Started' },
                                { id: 2, name: 'Need Assistance' },
                                { id: 3, name: 'In Progress' },
                                // ...
                            ],
                            key: "id"
                        },
                        pageSize: 10,
                        paginate: true
                    },
                    valueExpr: 'id', // contains the same values as the "statusId" field provides
                    displayExpr: 'name' // provides display values
                }
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid [dataSource]="orders">
        <dxi-column
            dataField="statusId"> <!-- provides actual values -->
            <dxo-lookup
                [dataSource]="lookupData"
                valueExpr="id" <!-- contains the same values as the "statusId" field provides -->
                displayExpr="name"> <!-- provides display values -->
            </dxo-lookup>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    import "devextreme/data/array_store";
    // ...
    export class AppComponent {
        orders = [ ... ];
        lookupData = {
            store: {
                type: 'array',
                data: [
                    { id: 1, name: 'Not Started' },
                    { id: 2, name: 'Need Assistance' },
                    { id: 3, name: 'In Progress' },
                    // ...
                ],
                key: "id"
            },
            pageSize: 10,
            paginate: true
        };
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
        <DxDataGrid :data-source="orders">
            <DxColumn
                data-field="statusId"> <!-- provides actual values -->
                <DxLookup
                    :data-source="lookupDataSourceConfig"
                    value-expr="id" <!-- contains the same values as the "statusId" field provides -->
                    display-expr="name" <!-- provides display values -->
                />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn,
        DxLookup
    } from 'devextreme-vue/data-grid';

    import 'devextreme/data/array_store';

    const orders = [ /* ... */ ];

    const lookupDataSourceConfig = {
        store: {
            type: 'array',
            data: [
                { id: 1, name: 'Not Started' },
                { id: 2, name: 'Need Assistance' },
                { id: 3, name: 'In Progress' },
                // ...
            ],
            key: 'id'
        },
        pageSize: 10,
        paginate: true   
    }

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxLookup
        },
        data() {
            return {
                orders,
                lookupDataSourceConfig
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column,
        Lookup
    } from 'devextreme-react/data-grid';

    import 'devextreme/data/array_store';

    const orders = [ /* ... */ ];

    const lookupDataSourceConfig = {
        store: {
            type: 'array',
            data: [
                { id: 1, name: 'Not Started' },
                { id: 2, name: 'Need Assistance' },
                { id: 3, name: 'In Progress' },
                // ...
            ],
            key: 'id'
        },
        pageSize: 10,
        paginate: true   
    }

    class App extends React.Component {
        render() {
            return (
                <DataGrid dataSource={orders}>
                    <Column
                        dataField="statusId"> <!-- provides actual values -->
                        <Lookup
                            dataSource={lookupDataSourceConfig}
                            valueExpr="id" <!-- contains the same values as the "statusId" field provides -->
                            displayExpr="name" <!-- provides display values -->
                        />
                    </Column>
                </DataGrid>
            );
        }
    }
    export default App;

---

... or simply an array of column values if the actual and display values are the same.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: orders,
            columns: [{
                dataField: 'status', // provides column values
                lookup: {
                    dataSource: [ // contains the same values as the "status" field provides
                        'Not Started',
                        'Need Assistance',
                        'In Progress',
                        // ...
                    ]
                }
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid [dataSource]="orders">
        <dxi-column
            dataField="status"> <!-- provides column values -->
            <dxo-lookup
                [dataSource]="lookupData"> <!-- contains the same values as the "status" field provides -->
            </dxo-lookup>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        orders = [ ... ];
        lookupData = [
            'Not Started',
            'Need Assistance',
            'In Progress',
            // ...
        ];
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
        <DxDataGrid :data-source="orders">
            <DxColumn
                data-field="status"> <!-- provides column values -->
                <DxLookup
                    :data-source="lookupData"
                />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn,
        DxLookup
    } from 'devextreme-vue/data-grid';

    import 'devextreme/data/array_store';

    const orders = [ /* ... */ ];

    const lookupData = [
        'Not Started',
        'Need Assistance',
        'In Progress',
        // ...
    ];

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxLookup
        },
        data() {
            return {
                orders,
                lookupData
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column,
        Lookup
    } from 'devextreme-react/data-grid';

    import 'devextreme/data/array_store';

    const orders = [ /* ... */ ];

    const lookupData = [
        'Not Started',
        'Need Assistance',
        'In Progress',
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <DataGrid dataSource={orders}>
                    <Column
                        dataField="status"> <!-- provides column values -->
                        <Lookup
                            dataSource={lookupData}
                        />
                    </Column>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

If your data source accepts **null** values, set the [allowClearing](/api-reference/_hidden/GridBaseColumn/lookup/allowClearing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/#allowClearing') option to **true**. In editing state, each of the lookup column's cells will have a button that nullifies the value.

Each cell in the lookup column is based on the [SelectBox](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/') widget. Use [editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions') to customize it. See the [Customize Editors](/concepts/05%20Widgets/DataGrid/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors') topic for more details.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CascadingLookups/"
}

#####See Also#####
- [Bind a Lookup Column to a Custom Data Source](/concepts/05%20Widgets/DataGrid/99%20How%20To/Bind%20a%20Lookup%20Column%20to%20a%20Custom%20Data%20Source.md '/Documentation/Guide/Widgets/DataGrid/How_To/Bind_a_Lookup_Column_to_a_Custom_Data_Source/')
- [lookup](/api-reference/_hidden/dxDataGridColumn/lookup '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/')

[tags] dataGrid, data grid, column types, lookup columns
