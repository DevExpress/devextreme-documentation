Call the [deselectRows(keys)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/deselectRows(keys).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#deselectRowskeys') method to clear the selection of specific rows. With the non-recursive selection, one key deselects one row; with [recursive](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/selection/recursive.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#recursive') - a row with its nested rows. 

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("deselectRows", [1, 4, 10]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        deselectRows (keys) {
            this.treeList.instance.deselectRows(keys);
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
            v-model:selected-row-keys="selectedRowKeys">
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
        const deselectRows = useCallback((keys: Array<string | number>) => {
            setState((prevState) => ({
                ...prevState,
                selectedRowKeys: prevState.selectedRowKeys.filter((key) => !keys.includes(key)),
            }));
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
                onOptionChanged={handleOptionChange}
            ></TreeList>
        );
    }
    export default App;

---

The [deselectAll()](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/deselectAll().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#deselectAll') method clears selection of all visible rows and can be used when you apply a [filter](/concepts/05%20UI%20Components/TreeList/40%20Filtering%20and%20Searching '/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/') and want to keep the selection of invisible rows that do not meet the filtering conditions. To clear the selection of all rows regardless of their visibility, call the [clearSelection()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#clearSelection') method.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.deselectAll();
    treeList.clearSelection();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        deselectVisibleRows () {
            this.treeList.instance.deselectAll();
        }
        deselectAllRows () {
            this.treeList.instance.clearSelection();
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
            ref="treeList"
            v-model:selected-row-keys="selectedRowKeys">
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
            deselectAllRows() {
                this.selectedRowKeys = [];
            },
            deselectVisibleRows() {
                this.$refs['treeList'].instance.deselectAll();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import type { TreeListTypes, TreeListRef } from 'devextreme-react/tree-list';
    import React, { useCallback, useRef, useState } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import TreeList from 'devextreme-react/tree-list';
    function App() {
        const treeListRef = useRef<TreeListRef>(null);
        const [state, setState] = useState<{
            selectedRowKeys: Array<string | number>;
        }>({
            selectedRowKeys: [],
        });
        const deselectAllRows = useCallback(() => {
            setState((prevState) => ({ ...prevState, selectedRowKeys: [] }));
        }, []);
        const deselectVisibleRows = useCallback(() => {
            const treeListRefInstance = treeListRef.current?.instance();
            if (!treeListRefInstance) return;
            treeListRefInstance.deselectAll();
        }, []);
        const handleOptionChange = useCallback((e: TreeListTypes.OptionChangedEvent) => {
            if (e.fullName === 'selectedRowKeys') {
                setState((prevState) => ({ ...prevState, selectedRowKeys: e.value }));
            }
        }, []);
        return (
            <TreeList
                ...
                ref={treeListRef}
                selectedRowKeys={state.selectedRowKeys}
                onOptionChanged={handleOptionChange}
            ></TreeList>
        );
    }
    export default App;

---

#####See Also#####
#include common-link-callmethods
