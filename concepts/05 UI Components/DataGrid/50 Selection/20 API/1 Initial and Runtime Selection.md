Use the [selectedRowKeys](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selectedRowKeys.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#selectedRowKeys') property to select rows initially. Note that to access a row by its key, you should specify the DataGrid's [keyExpr](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr') or the Store's [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            dataSource: {
                store: {
                    // ...
                    key: "id"
                }
            },
            selectedRowKeys: [1, 5, 18]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid
        [dataSource]="dataGridDataSource"
        [selectedRowKeys]="[1, 5, 18]">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import "devextreme/data/array_store";
    // or
    // import "devextreme/data/odata/store";
    // import "devextreme/data/custom_store";
    // ...
    export class AppComponent {
        dataGridDataSource = new DataSource({
            store: {
                // ...
                key: "id"
            }
        });
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
            :data-source="dataGridDataSource"
            :selected-row-keys="[1, 5, 18]">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';
    import DataSource from 'devextreme/data/data_source';
    import 'devextreme/data/array_store';
    // or
    // import 'devextreme/data/odata/store';
    // import 'devextreme/data/custom_store';

    const dataGridDataSource = new DataSource({
        store: {
            // ...
            key: 'id'
        }
    });

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                dataGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid from 'devextreme-react/data-grid';
    import DataSource from 'devextreme/data/data_source';
    import 'devextreme/data/array_store';
    // or
    // import 'devextreme/data/odata/store';
    // import 'devextreme/data/custom_store';
    const dataGridDataSource = new DataSource({
        store: {
            // ...
            type: 'array',
            data: [],
            key: 'id',
        },
    });
    const selectedRowKeys = [1, 5, 18];
    function App() {
        return (
            <DataGrid
                ...
                dataSource={dataGridDataSource}
                defaultSelectedRowKeys={selectedRowKeys}
            ></DataGrid>
        );
    }
    export default App;

---

The DataGrid provides two methods that select rows at runtime: [selectRows(keys, preserve)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/selectRows(keys_preserve).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#selectRowskeys_preserve') and [selectRowsByIndexes(indexes)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/selectRowsByIndexes(indexes).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#selectRowsByIndexesindexes'). They both clear the previous selection by default, although with the **selectRows(keys, preserve)** method you can keep it if you pass **true** as the **preserve** parameter. Before selecting a row, you can call the [isRowSelected(key)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/isRowSelected(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#isRowSelectedkey') method to check if this row is not already selected.

---
##### jQuery

    <!--JavaScript-->
    var selectSingleRow = function (dataGridInstance, key, preserve) {
        if (!dataGridInstance.isRowSelected(key)) {
            dataGridInstance.selectRows([key], preserve);
        }
    }

<!---->

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid({
        // ...
        onContentReady: function (e) {
            // Selects the first visible row
            e.component.selectRowsByIndexes([0]);
        }
    }).dxDataGrid("instance");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        selectSingleRow (key, preserve) {
            if (!this.dataGrid.instance.isRowSelected(key)) {
                this.dataGrid.instance.selectRows([key], preserve);
            }
        }
        onContentReadyHandler (e) {
            // Selects the first visible row
            e.component.selectRowsByIndexes([0]);
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
        (onContentReady)="onContentReadyHandler($event)">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            v-model:selected-row-keys="selectedRowKeys"
            @content-ready="selectFirstRow">
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
            selectFirstRow(e) {
                const rowKey = e.component.getKeyByRowIndex(0);
                this.selectedRowKeys = [...this.selectedRowKeys, rowKey];
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
        const selectFirstRow = useCallback((e: DataGridTypes.ContentReadyEvent) => {
            if (e.component.getVisibleRows().length === 0) return;
            const rowKey = e.component.getKeyByRowIndex(0);
            setState((prevState) =>
                prevState.selectedRowKeys.includes(rowKey)
                    ? prevState
                    : { ...prevState, selectedRowKeys: [...prevState.selectedRowKeys, rowKey] }
            );
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
                onContentReady={selectFirstRow}
                onOptionChanged={handleOptionChange}
            ></DataGrid>
        );
    }
    export default App;

---

To select all rows at once, call the [selectAll()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#selectAll') method.

---

#####jQuery

    <!--JavaScript-->dataGrid.selectAll();

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        selectAllRows () {
            this.dataGrid.instance.selectAll();
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
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    const dataGridRefKey = 'my-data-grid';

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                dataGridRefKey
            }
        },
        methods: {
            selectAllRows() {
                this.dataGrid.selectAll();
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

    <!-- tab: App.tsx -->
    import type { DataGridRef } from 'devextreme-react/data-grid';
    import React, { useCallback, useRef } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid from 'devextreme-react/data-grid';
    function App() {
        const dataGridRef = useRef<DataGridRef>(null);
        const selectAllRows = useCallback(() => {
            const dataGridRefInstance = dataGridRef.current?.instance();
            if (!dataGridRefInstance) return;
            dataGridRefInstance.selectAll();
        }, []);
        return <DataGrid ... ref={dataGridRef}></DataGrid>;
    }
    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionAPI/"
} 

Call the [getSelectedRowKeys()](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#getSelectedRowKeys') or [getSelectedRowsData()](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#getSelectedRowsData') method to get the selected row's keys or data.

---
##### jQuery

    <!--JavaScript-->var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    var selectedKeys = dataGrid.getSelectedRowKeys();
    var selectedData = dataGrid.getSelectedRowsData();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        getSelectedRowKeys () {
            return this.dataGrid.instance.getSelectedRowKeys();
        }
        getSelectedRowsData () {
            return this.dataGrid.instance.getSelectedRowsData();
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
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    const dataGridRefKey = 'my-data-grid';

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                dataGridRefKey
            }
        },
        methods: {
            getSelectedRowKeys() {
                return this.dataGrid.getSelectedRowKeys();
            },
            getSelectedRowsData() {
                return this.dataGrid.getSelectedRowsData();
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

    <!-- tab: App.tsx -->
    import type { DataGridRef } from 'devextreme-react/data-grid';
    import React, { useCallback, useRef } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid from 'devextreme-react/data-grid';
    function App() {
        const dataGridRef = useRef<DataGridRef>(null);
        const getSelectedRowKeys = useCallback(() => {
            const dataGridRefInstance = dataGridRef.current?.instance();
            if (!dataGridRefInstance) return;
            return dataGridRefInstance.getSelectedRowKeys();
        }, []);
        const getSelectedRowsData = useCallback(() => {
            const dataGridRefInstance = dataGridRef.current?.instance();
            if (!dataGridRefInstance) return;
            return dataGridRefInstance.getSelectedRowsData();
        }, []);
        return <DataGrid ... ref={dataGridRef}></DataGrid>;
    }
    export default App;

---

#####See Also#####
- [Deferred Selection](/concepts/05%20UI%20Components/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/015%20Deferred%20Selection.md '/Documentation/Guide/UI_Components/DataGrid/Enhance_Performance_on_Large_Datasets/#Deferred_Selection')
