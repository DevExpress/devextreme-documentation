Assign a non-negative integer to the **columns**.[groupIndex](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupIndex') property to group data initially. In the following example, data is first grouped by the *"Continent"* field, then by the *"Country"* field.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [
                { dataField: 'Country', groupIndex: 1 },
                { dataField: 'Continent', groupIndex: 0 },
                // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxi-column 
            dataField="Country"
            [groupIndex]="1">
        </dxi-column>
        <dxi-column 
            dataField="Continent"
            [groupIndex]="0">
        </dxi-column>
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
            <DxColumn
                data-field="Country"
                :group-index="1"
            />
            <DxColumn
                data-field="Continent"
                :group-index="0"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxDataGrid,
        DxColumn
    } from 'devextreme-vue/data-grid';

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

    import DataGrid, {
        Column,
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column
                        dataField="Country"
                        groupIndex={1}
                    />
                    <Column
                        dataField="Continent"
                        groupIndex={0}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

---

You can change a column's **groupIndex** at runtime using the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#columnOptionid_optionName_optionValue') method. 

---

#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("columnOption", "City", "groupIndex", 0);


#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        groupByCity() () {
            this.dataGrid.instance.columnOption("City", "groupIndex", 0);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="City"
            [(groupIndex)]="cityGroupIndex">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    
    export class AppComponent {
        cityGroupIndex: number = 1;

        groupByCity(index: number) {
            this.cityGroupIndex = index;
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
                data-field="City"
                v-model:group-index="cityGroupIndex"
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
                cityGroupIndex: 0
            }
        },
        methods: {
            groupByCity(index) {
                this.cityGroupIndex = index;
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
                cityGroupIndex: 0
            };
        }

        render() {
            return (
                <DataGrid ...
                    onOptionChanged={this.onOptionChanged}>
                    <Column
                        dataField="City"
                        groupIndex={this.state.cityGroupIndex} />
                </DataGrid>
            );
        }

        groupByCity = (index) => {
            this.setState({
                cityGroupIndex: index
            });
        }

        onOptionChanged = (e) => {
            if (e.fullName === "columns[0].groupIndex") {
                this.groupByCity(e.value);
            }
        }
    }
    export default App;

---

#####See Also#####
- [User Interaction - Group Data](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/10%20User%20Interaction/10%20Group%20Data.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#User_Interaction/Group_Data')

