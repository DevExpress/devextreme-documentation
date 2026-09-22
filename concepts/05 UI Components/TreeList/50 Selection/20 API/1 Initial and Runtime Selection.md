Use the [selectedRowKeys](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selectedRowKeys.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#selectedRowKeys') property to select rows initially. With non-recursive selection, one key selects one row; with [recursive](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/selection/recursive.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#recursive') - a row with its nested rows. Note that you should specify row keys beforehand. You can do it in the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') field of the store that underlies the [dataSource](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataSource'). Alternatively, you can set the UI component's [keyExpr](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#keyExpr') property. With hierarchical data, keys can be generated automatically if the **key** and **keyExpr** are not set.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list
        [dataSource]="treeListDataSource"
        [selectedRowKeys]="[1, 5, 18]">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import "devextreme/data/array_store";
    // or
    // import "devextreme/data/odata/store";
    // import "devextreme/data/custom_store";
    // ...
    export class AppComponent {
        treeListDataSource = new DataSource({
            store: {
                // ...
                key: "id"
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            :data-source="treeListDataSource"
            :selected-row-keys="[1, 5, 18]">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';
    import DataSource from 'devextreme/data/data_source';
    import 'devextreme/data/array_store';
    // or
    // import 'devextreme/data/odata/store';
    // import 'devextreme/data/custom_store';

    const treeListDataSource = new DataSource({
        store: {
            // ...
            key: 'id'
        }
    });

    export default {
        components: {
            DxTreeList
        },
        data() {
            return {
                treeListDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import TreeList from 'devextreme-react/tree-list';
    import DataSource from 'devextreme/data/data_source';
    import 'devextreme/data/array_store';
    // or
    // import 'devextreme/data/odata/store';
    // import 'devextreme/data/custom_store';
    const treeListDataSource = new DataSource({
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
            <TreeList
                ...
                dataSource={treeListDataSource}
                defaultSelectedRowKeys={selectedRowKeys}
            ></TreeList>
        );
    }
    export default App;

---

You can select rows at runtime using the [selectRows(keys, preserve)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/selectRows(keys_preserve).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#selectRowskeys_preserve') method. Note that the **preserve** argument, which tells the UI component whether to keep or clear the previous selection, is **false** by default. Before selecting a row, you can call the [isRowSelected(key)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/isRowSelected(key).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#isRowSelectedkey') method to check if this row is already selected. If you need to select all rows at once, call the [selectAll()](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#selectAll') method.

---
##### jQuery

    <!--JavaScript-->var selectSingleRow = function (treeListInstance, key, preserve) {
        if (!treeListInstance.isRowSelected(key)) {
            treeListInstance.selectRows([key], preserve);
        }
    }

<!---->

    <!--JavaScript-->treeList.selectAll();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        selectSingleRow (key, preserve) {
            if (!this.treeList.instance.isRowSelected(key)) {
                this.treeList.instance.selectRows([key], preserve);
            }
        }
        selectAllRows () {
            this.treeList.instance.selectAll();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            v-model:selected-row-keys="selectedRowKeys"
            @content-ready="selectFirstRow">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
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
    import type { TreeListTypes } from 'devextreme-react/tree-list';
    import React, { useCallback, useState } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import TreeList from 'devextreme-react/tree-list';
    function App() {
        const [state, setState] = useState<{
            selectedRowKeys: Array<string | number>;
        }>({
            selectedRowKeys: [],
        });
        const selectFirstRow = useCallback((e: TreeListTypes.ContentReadyEvent) => {
            if (e.component.getVisibleRows().length === 0) return;
            const rowKey = e.component.getKeyByRowIndex(0);
            setState((prevState) =>
                prevState.selectedRowKeys.includes(rowKey)
                    ? prevState
                    : { ...prevState, selectedRowKeys: [...prevState.selectedRowKeys, rowKey] }
            );
        }, []);
        const handleOptionChange = useCallback((e: TreeListTypes.OptionChangedEvent) => {
            if (e.fullName === 'selectedRowKeys') {
                setState((prevState) => ({ ...prevState, selectedRowKeys: e.value }));
            }
        }, []);
        return (
            <TreeList
                ...
                selectedRowKeys={state.selectedRowKeys}
                onContentReady={selectFirstRow}
                onOptionChanged={handleOptionChange}
            ></TreeList>
        );
    }
    export default App;

---

Call the [getSelectedRowKeys(mode)](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/getSelectedRowKeys(mode).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#getSelectedRowKeysmode') or [getSelectedRowsData()](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#getSelectedRowsData') method to get the selected rows' keys or data.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    var selectedKeys = treeList.getSelectedRowKeys("all"); // or "excludeRecursive" | "leavesOnly"
    var selectedData = treeList.getSelectedRowsData();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        getSelectedRowKeys () {
            return this.treeList.instance.getSelectedRowKeys("all"); // or "excludeRecursive" | "leavesOnly"
        }
        getSelectedRowsData () {
            return this.treeList.instance.getSelectedRowsData();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            :ref="treeListRefKey">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    const treeListRefKey = 'my-tree-list';

    export default {
        components: {
            DxTreeList
        },
        data() {
            return {
                treeListRefKey
            }
        },
        methods: {
            getSelectedRowKeys() {
                return this.treeList.getSelectedRowKeys("all"); // or "excludeRecursive" | "leavesOnly"
            },
            getSelectedRowsData() {
                return this.treeList.getSelectedRowsData();
            }
        },
        computed: {
            treeList: function() {
                return this.$refs[treeListRefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import type { TreeListRef } from 'devextreme-react/tree-list';
    import React, { useCallback, useRef } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import TreeList from 'devextreme-react/tree-list';
    function App() {
        const treeListRef = useRef<TreeListRef>(null);
        const getSelectedRowKeys = useCallback(() => {
            const treeListRefInstance = treeListRef.current?.instance();
            if (!treeListRefInstance) return;
            return treeListRefInstance.getSelectedRowKeys('all'); // or "excludeRecursive" | "leavesOnly"
        }, []);
        const getSelectedRowsData = useCallback(() => {
            const treeListRefInstance = treeListRef.current?.instance();
            if (!treeListRefInstance) return;
            return treeListRefInstance.getSelectedRowsData();
        }, []);
        return <TreeList ... ref={treeListRef}></TreeList>;
    }
    export default App;

---
