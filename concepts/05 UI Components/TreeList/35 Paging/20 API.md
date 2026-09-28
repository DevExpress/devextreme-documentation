Call the [pageCount()](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/pageCount().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#pageCount') method to get the total page count.

---

#####jQuery

    <!--JavaScript-->
    var totalPageCount = $("#treeListContainer").dxTreeList("instance").pageCount();

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        getTotalPageCount () {
            this.treeList.instance.pageCount();
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
            ref="myTreeList">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        },
        methods: {
            getTotalPageCount() {
                return this.$refs['myTreeList'].instance.pageCount();
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
        const getTotalPageCount = useCallback(() => {
            const treeListRefInstance = treeListRef.current?.instance();
            if (!treeListRefInstance) return;
            return treeListRefInstance.pageCount();
        }, []);
        return <TreeList ... ref={treeListRef}></TreeList>;
    }
    export default App;

---

The TreeList also provides the [pageIndex(newIndex)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/pageIndex(newIndex).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#pageIndexnewIndex') and [pageSize(value)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/pageSize(value).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#pageSizevalue') methods that switch the UI component to a specific page and change the page size. They can also be called without arguments, in which case, they return the current page's index and size.

---

#####jQuery

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("instance").pageSize(8);

<!---->

    <!--JavaScript-->
    var goToLastPage = function (treeListInstance) {
        treeListInstance.pageIndex(treeListInstance.pageCount() - 1);
    }

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        changePageSize () {
            this.treeList.instance.pageSize(8);
        }
        goToLastPage () {
            this.treeList.instance.pageIndex(this.treeList.instance.pageCount() - 1);
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
            ref="myTreeList">
            <DxPaging
                v-model:page-size="pageSize"
                v-model:page-index="pageIndex"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxTreeList, {
        DxPaging
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxPaging
        },
        data() {
            return {
                pageSize: 20,
                pageIndex: 0
            }
        },
        methods: {
            changePageSize(value) {
                this.pageSize = value;
            },
            goToLastPage() {
                const pageCount = this.$refs['myTreeList'].instance.pageCount();
                this.pageIndex = pageCount - 1;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import type { TreeListTypes, TreeListRef } from 'devextreme-react/tree-list';
    import React, { useCallback, useRef, useState } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import TreeList, { Paging } from 'devextreme-react/tree-list';
    function App() {
        const treeListRef = useRef<TreeListRef>(null);
        const [state, setState] = useState<{
            pageSize: number;
            pageIndex: number;
        }>({
            pageSize: 20,
            pageIndex: 0,
        });
        const changePageSize = useCallback((value: number) => {
            setState((prevState) => ({ ...prevState, pageSize: value }));
        }, []);
        const goToLastPage = useCallback(() => {
            const treeListRefInstance = treeListRef.current?.instance();
            if (!treeListRefInstance) return;
            const pageCount = treeListRefInstance.pageCount();
            setState((prevState) => ({ ...prevState, pageIndex: pageCount - 1 }));
        }, []);
        const handleOptionChange = useCallback((e: TreeListTypes.OptionChangedEvent) => {
            if (e.fullName === 'paging.pageSize') {
                setState((prevState) => ({ ...prevState, pageSize: e.value }));
            }
            if (e.fullName === 'paging.pageIndex') {
                setState((prevState) => ({ ...prevState, pageIndex: e.value }));
            }
        }, []);
        return (
            <TreeList ... ref={treeListRef} onOptionChanged={handleOptionChange}>
                <Paging pageSize={state.pageSize} pageIndex={state.pageIndex} />
            </TreeList>
        );
    }
    export default App;

---

#####See Also#####
- [Scrolling](/concepts/05%20UI%20Components/TreeList/45%20Scrolling '/Documentation/Guide/UI_Components/TreeList/Scrolling/')
