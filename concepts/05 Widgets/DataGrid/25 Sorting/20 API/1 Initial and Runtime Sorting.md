Rows are sorted according to the data source by default. Set the [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortOrder') option to sort rows in the required order. Specify the [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortIndex') option as well to sort by multiple columns. Otherwise, each sorted column gets a sort index according to its position in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array. For example, the following code sorts rows first by the *"Country"*, then by the *"City"* column:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [
                { dataField: "City",    sortIndex: 1, sortOrder: "asc" },
                { dataField: "Country", sortIndex: 0, sortOrder: "asc" },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="City"
            [sortIndex]="1"
            sortOrder="asc">
        </dxi-column>
        <dxi-column
            dataField="Country"
            [sortIndex]="0"
            sortOrder="asc">
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
            <DxColumn
                :sort-index="1"
                data-field="City"
                sort-order="asc"
            />
            <DxColumn
                :sort-index="0"
                data-field="Country"
                sort-order="asc"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Column } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid>
                    <Column
                        sortIndex={1}
                        dataField="City"
                        sortOrder="asc" />
                    <Column
                        sortIndex={0}
                        dataField="Country"
                        sortOrder="asc" />
                </DataGrid>
            );
        }
    }
    export default App;

---

Change the **sortOrder** and **sortIndex** options using the [columnOption](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue') method to sort at runtime.

---
##### jQuery

    <!--JavaScript-->
    var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.columnOption("Country", {
        sortOrder: "desc",
        sortIndex: 2
    });

##### Angular
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="Country"
            [(sortIndex)]="sortIndex"
            [(sortOrder)]="sortOrder">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    
    export class AppComponent {
        sortIndex: number = 0;
        sortOrder: string = "asc";

        sortByCountries(index: number, order: string) {
            this.sortIndex = index;
            this.sortOrder = order;
        }
    }

    @NgModule({
        imports: [
            //...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...>
            <DxColumn
                data-field="Country"
                :sort-index.sync="sortIndex"
                :sort-order.sync="sortOrder"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        data() {
            return {
                sortIndex: 0,
                sortOrder: "asc"
            }
        },
        methods: {
            sortByCountries(index, order) {
                this.sortIndex = index;
                this.sortOrder = order;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Column } from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                sortIndex: 0,
                sortOrder: "asc"
            };
            this.sortByCountries = this.sortByCountries.bind(this);
        }

        render() {
            return (
                <DataGrid ...>
                    <Column
                        dataField="Country"
                        sortIndex={this.state.sortIndex}
                        sortOrder={this.state.sortOrder} />
                </DataGrid>
            );
        }

        sortByCountries(index, order) {
            this.setState({
                sortIndex: index,
                sortOrder: order
            });
        }
    }
    export default App;

---
