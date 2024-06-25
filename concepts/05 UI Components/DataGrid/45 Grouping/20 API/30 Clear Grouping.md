Set a column's [groupIndex](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupIndex') to **undefined** using the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#columnOptionid_optionName_optionValue') method to ungroup data by this column.

---

##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("columnOption", "City", "groupIndex", undefined);


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

        ungroupCity() {
            this.cityGroupIndex = undefined;
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
            ungroupCity() {
                this.cityGroupIndex = undefined;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

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

        ungroupCity = () => {
            this.setState({
                cityGroupIndex: undefined
            });
        }

        onOptionChanged = (e) => {
            if (e.fullName === "columns[0].groupIndex") {
                this.setState({
                    cityGroupIndex: e.value
                });
            }
        }
    }
    export default App;

---

You can ungroup data by all columns at once using the [clearGrouping()](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/clearGrouping().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#clearGrouping') method.

---

#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("clearGrouping");


#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        clearGrouping() () {
            this.dataGrid.instance.clearGrouping();
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
        <DxDataGrid ...
            :ref="dataGridRefKey">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxDataGrid,
        // ...
    } from 'devextreme-vue/data-grid';

    const dataGridRefKey = 'my-data-grid';

    export default {
        components: {
            DxDataGrid,
            // ...
        },
        data() {
            return {
                dataGridRefKey
            };
        },
        methods: {
            clearGrouping() {
                this.dataGrid.clearGrouping();
            }
        },
        computed: {
            dataGrid: function() {
                return this.$refs[dataGridRefKey].instance;
            }
        }
    }
    </script>

##### React
    
    <!-- tab: App.js -->
    import React, { useRef } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        // ...
    } from 'devextreme-react/data-grid';

    export default function App() {
        const dataGrid = useRef(null);
        const clearGrouping = () => {
            dataGrid.current.instance().clearGrouping();
        };

        return (
            <DataGrid ...
                ref={dataGrid}>
            </DataGrid>
        );
    }

---

#####See Also#####
#include common-link-callmethods
- [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/')
- [User Interaction - Clear Grouping](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/10%20User%20Interaction/30%20Clear%20Grouping.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#User_Interaction/Clear_Grouping')