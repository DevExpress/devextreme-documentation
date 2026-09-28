Call the [deselectRows(keys)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/deselectRows(keys).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#deselectRowskeys') method to clear the selection of specific rows.

---
##### jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("deselectRows", [1, 4, 10]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        deselectRows (keys) {
            this.dataGrid.instance.deselectRows(keys);
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
            v-model:selected-row-keys="selectedRowKeys">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                selectedRowKeys: []
            }
        },
        methods: {
            deselectRows(keys) {
                let selectedRowKeys = this.selectedRowKeys;
                keys.forEach(function(item) {
                    const index = selectedRowKeys.indexOf(item);
                    if (index !== -1) {
                        const newRowKeys = [...this.selectedRowKeys];
                        newRowKeys.splice(index, 1);
                        this.selectedRowKeys = newRowKeys;
                    }
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import type { DataGridTypes } from 'devextreme-react/data-grid';
    import React, { useCallback, useState } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid from 'devextreme-react/data-grid';
    function App() {
        const [state, setState] = useState<{
            selectedRowKeys: Array<string | number>;
        }>({
            selectedRowKeys: [],
        });
        const deselectRows = useCallback((keys: Array<string | number>) => {
            setState((prevState) => ({
                ...prevState,
                selectedRowKeys: prevState.selectedRowKeys.filter((key) => !keys.includes(key)),
            }));
        }, []);
        const handleOptionChange = useCallback((e: DataGridTypes.OptionChangedEvent) => {
            if (e.fullName === 'selectedRowKeys') {
                setState((prevState) => ({ ...prevState, selectedRowKeys: e.value }));
            }
        }, []);
        return (
            <DataGrid
                ...
                selectedRowKeys={state.selectedRowKeys}
                onOptionChanged={handleOptionChange}
            ></DataGrid>
        );
    }
    export default App;

---

Call the [clearSelection()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#clearSelection') method to clear selection of all rows. If you apply a [filter](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/') and want to keep the selection of invisible rows that do not meet the filtering conditions, use the [deselectAll()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/deselectAll().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#deselectAll') method. Also call this method to clear selection depending on the [selectAllMode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection/selectAllMode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#selectAllMode').

---
##### jQuery

    <!--JavaScript-->var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.deselectAll();
    dataGrid.clearSelection();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        deselectVisibleRows () {
            this.dataGrid.instance.deselectAll();
        }
        deselectAllRows () {
            this.dataGrid.instance.clearSelection();
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
            ref="dataGrid"
            v-model:selected-row-keys="selectedRowKeys">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                selectedRowKeys: []
            }
        },
        methods: {
            deselectAllRows() {
                this.selectedRowKeys = [];
            },
            deselectVisibleRows() {
                this.$refs['dataGrid'].instance.deselectAll();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import type { DataGridTypes, DataGridRef } from 'devextreme-react/data-grid';
    import React, { useCallback, useRef, useState } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid from 'devextreme-react/data-grid';
    function App() {
        const dataGridRef = useRef<DataGridRef>(null);
        const [state, setState] = useState<{
            selectedRowKeys: Array<string | number>;
        }>({
            selectedRowKeys: [],
        });
        const deselectAllRows = useCallback(() => {
            setState((prevState) => ({ ...prevState, selectedRowKeys: [] }));
        }, []);
        const deselectVisibleRows = useCallback(() => {
            const dataGridRefInstance = dataGridRef.current?.instance();
            if (!dataGridRefInstance) return;
            dataGridRefInstance.deselectAll();
        }, []);
        const handleOptionChange = useCallback((e: DataGridTypes.OptionChangedEvent) => {
            if (e.fullName === 'selectedRowKeys') {
                setState((prevState) => ({ ...prevState, selectedRowKeys: e.value }));
            }
        }, []);
        return (
            <DataGrid
                ...
                ref={dataGridRef}
                selectedRowKeys={state.selectedRowKeys}
                onOptionChanged={handleOptionChange}
            ></DataGrid>
        );
    }
    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionAPI/"
} 

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/')
#include common-link-callmethods
