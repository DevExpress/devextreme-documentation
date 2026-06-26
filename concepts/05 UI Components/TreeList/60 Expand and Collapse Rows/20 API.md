All TreeList rows are initially collapsed. If you enable [autoExpandAll](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/autoExpandAll.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#autoExpandAll'), all rows are initially expanded. Specify the [expandedRowKeys](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/expandedRowKeys.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#expandedRowKeys') array to expand specific rows. To expand a nested row, include all parent row keys (in addition to the nested row key) in **expandedRowKeys**. 

---
##### jQuery

    <!-- tab: index.js -->
    // Expand specific rows
    $("#tree-list").dxTreeList({
        expandedRowKeys: [1, 5, 18],
    });

    // Expand all rows
    $("#tree-list").dxTreeList({
        autoExpandAll: true
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <!-- Expand specific rows -->
    <dx-tree-list ...
        [expandedRowKeys]="[1, 5, 18]"
    >
        <!-- ... -->
    </dx-tree-list>

    <!-- Expand all rows -->
    <dx-tree-list ...
        [autoExpandAll]="true"
    >
        <!-- ... -->
    </dx-tree-list>

    <!-- tab: app.component.ts -->
    import { DxTreeListModule } from "devextreme-angular";
    
    // ...
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- Expand specific rows -->
        <DxTreeList ...
            :expanded-row-keys="[1, 5, 18]"
        />

        <!-- Expand all rows -->
        <DxTreeList ...
            :auto-expand-all="true"
        />
    </template>

    <script setup lang="ts">
    import { DxTreeList } from 'devextreme-vue/tree-list';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList } from 'devextreme-react/tree-list';

    function App() {
        return (
            {/* Expand specific rows */}
            <TreeList ...
                defaultExpandedRowKeys={[1, 5, 18]}
            />

            {/* Expand all rows */}
            <TreeList ...
                autoExpandAll={true}
            />
        );
    }
    
---

To expand/collapse rows at runtime, call [expandRow(key)](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/expandRow(key).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#expandRowkey')/[collapseRow(key)](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/collapseRow(key).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#collapseRowkey') or modify the **expandedRowKeys** array. To collapse all rows, set **expandedRowKeys** to an empty array (`[]`).

To toggle a row between expanded and collapsed states, you can implement the [isRowExpanded(key)](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/isRowExpanded(key).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#isRowExpandedkey') method as follows:

---
##### jQuery

    <!-- tab: index.js -->
    const treeList = $("#tree-list").dxTreeList("instance");

    function toggleRow(key) {
        if (treeList.isRowExpanded(key)) {
            treeList.collapseRow(key);
        } else {
            treeList.expandRow(key);
        }
    }

##### Angular

    <!-- tab: app.component.ts -->
    import { ViewChild } from "@angular/core";
    import { DxTreeListComponent } from "devextreme-angular/ui/tree-list";

    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList!: DxTreeListComponent;
        
        toggleRow(key) {
            if (this.treeList.instance.isRowExpanded(key)) {
                this.treeList.instance.collapseRow(key);
            } else {
                this.treeList.instance.expandRow(key);
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            ref="treeListRef"
        />
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxTreeList } from 'devextreme-vue/tree-list';

    const treeListRef = ref(null);

    function toggleRow(key) {
        if (treeList.value.instance.isRowExpanded(key)) {
            treeList.value.instance.collapseRow(key);
        } else {
            treeList.value.instance.expandRow(key);
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useRef } from 'react';
    import { TreeList } from 'devextreme-react/tree-list';

    function App() {
        const treeList = useRef(null);

        function toggleRow(key) {
            if (treeList.current.instance().isRowExpanded(key)) {
                treeList.current.instance().collapseRow(key);
            } else {
                treeList.current.instance().expandRow(key);
            }
        };

        return (
            <TreeList ...
                ref="treeList"
            />
        );
    }
    
---

#####See Also#####
#include common-link-callmethods
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview/)
