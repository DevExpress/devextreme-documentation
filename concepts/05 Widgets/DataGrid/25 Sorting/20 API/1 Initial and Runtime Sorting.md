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
                data-field="City"
                :sort-index="1"
                sort-order="asc"
            />
            <DxColumn
                data-field="Country"
                :sort-index="0"
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
                        dataField="City"
                        defaultSortIndex={1}
                        defaultSortOrder="asc" />
                    <Column
                        dataField="Country"
                        defaultSortIndex={0}
                        defaultSortOrder="asc" />
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
        sortIndex: 2,
        sortOrder: "desc"
    });

##### Angular
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="Country"
            [(sortOrder)]="countrySortOrder">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    
    export class AppComponent {
        countrySortOrder: string = "asc";

        sortByCountries(order: string) {
            this.countrySortOrder = order;
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
                v-model:sort-order="countrySortOrder"
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
                countrySortOrder: "asc"
            }
        },
        methods: {
            sortByCountries(order) {
                this.countrySortOrder = order;
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
                countrySortOrder: "asc"
            };
        }

        render() {
            return (
                <DataGrid ...
                    onOptionChanged={this.onOptionChanged}>
                    <Column
                        dataField="Country"
                        sortOrder={this.state.countrySortOrder} />
                </DataGrid>
            );
        }

        sortByCountries = (order) => {
            this.setState({
                countrySortOrder: order
            });
        }

        onOptionChanged = (e) => {
            if (e.fullName === "columns[0].sortOrder") {
                this.sortByCountries(e.value);
            }
        }
    }
    export default App;

---
