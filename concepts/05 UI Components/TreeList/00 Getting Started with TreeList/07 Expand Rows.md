#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Expand_and_Collapse_Rows/", name: "TreeList - Expand and Collapse Rows" }

You can define [expandedRowKeys](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/expandedRowKeys.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#expandedRowKeys') to expand specific rows. Enable [autoExpandAll](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/autoExpandAll.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#autoExpandAll') to initialize all rows in the expanded state:

---
##### jQuery

    <!-- tab: index.js -->
    $("#tree-list").dxTreeList({
        autoExpandAll: true,
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
        .AutoExpandAll(true)
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list
        [autoExpandAll]="true"
    >
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList
            :auto-expand-all="true"
        >
            <!-- ... -->
        </DxTreeList>
    </template>

    <script setup lang="ts">
    import { DxTreeList } from 'devextreme-vue/tree-list';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList } from 'devextreme-react/tree-list';

    function App() {
        return (
            <TreeList
                autoExpandAll={true}
            >
                {/* ... */}
            </TreeList>
        );
    }

---

