All rows are collapsed by default. Assign an array of keys to the [expandedRowKeys](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/expandedRowKeys.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#expandedRowKeys') property to expand specific rows initially. If a to-be-expanded row lies deep in the hierarchy, make sure to include keys of all its parent rows as well. Set the [autoExpandAll](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/autoExpandAll.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#autoExpandAll') property to **true** if all rows should be expanded initially.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            expandedRowKeys: [1, 5, 18],
            // autoExpandAll: true
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [expandedRowKeys]="[1, 5, 18]">
        <!-- [autoExpandAll]="true" -->
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
            :expanded-row-keys="[1, 5, 18]">
            <!-- :auto-expand-all="true" -->
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';

    export default function App() {
        return (
            <TreeList ...
                defaultExpandedRowKeys={[1, 5, 18]}>
                <!-- autoExpandAll={true} -->
            </TreeList>
        );
    }
    
---

Call the [expandRow(key)](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/expandRow(key).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#expandRowkey') or [collapseRow(key)](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/collapseRow(key).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#collapseRowkey') method to respectively expand or collapse a row at runtime. You can check a row's current state by calling the [isRowExpanded(key)](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/isRowExpanded(key).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#isRowExpandedkey') method.

---
##### jQuery

    <!--JavaScript-->function toggleRow (key) {
        var treeList = $("#treeListContainer").dxTreeList("instance");
        if (treeList.isRowExpanded(key)) {
            treeList.collapseRow(key);
        } else {
            treeList.expandRow(key);
        }
    }

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        toggleRow (key) {
            if (this.treeList.instance.isRowExpanded(key)) {
                this.treeList.instance.collapseRow(key);
            } else {
                this.treeList.instance.expandRow(key);
            }
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
        <DxTreeList ref="treeListRefKey">
            <!-- ... -->
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        // ...
    } from 'devextreme-vue/tree-list';

    const treeListRefKey = "my-tree-list";

    export default {
        components: {
            DxTreeList,
            // ...
        },
        data: function() {
            return {
                treeListRefKey
            };
        },
        methods: {
            toggleRow (key) {
                if (this.treeList.isRowExpanded(key)) {
                    this.treeList.collapseRow(key);
                } else {
                    this.treeList.expandRow(key);
                }
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

    <!-- tab: App.js -->
    import React, { useRef, useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        // ...
    } from 'devextreme-react/tree-list';

    export default function App() {
        const treeList = useRef(null);
        const toggleRow = (key) => {
            if (treeList.current.instance().isRowExpanded(key)) {
                treeList.current.instance().collapseRow(key);
            } else {
                treeList.current.instance().expandRow(key);
            }
        };

        return (
            <TreeList ref="treeList">
                {/* ... */}
            </TreeList>
        );
    }
    
---

#####See Also#####
#include common-link-callmethods
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)
