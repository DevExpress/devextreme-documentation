#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Sorting/", name: "TreeList - Sorting" }

The **sorting**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/sorting/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/sorting/#mode') property specifies whether users can sort TreeList records against single or multiple columns.

You can also set a column's [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortOrder') and [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortIndex') properties to specify initial sorting settings. [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortIndex') applies only in multi-column sort mode.

To sort data and change sort orders in the UI, click column headers. Hold **Shift** and click to sort data against multiple columns.

---
##### jQuery

    <!-- tab: index.js -->
    $("#tree-list").dxTreeList({
        sorting: { mode: "multiple" },
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
        .Sorting(s => s.Mode(GridSortingMode.Multiple))
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list>
        <dxo-tree-list-sorting mode="multiple"></dxo-tree-list-sorting>
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxSorting mode="multiple" />
            <!-- ... -->
        </DxTreeList>
    </template>

    <script setup lang="ts">
    import { DxTreeList, DxSorting, DxColumn } from 'devextreme-vue/tree-list';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList, Sorting, Column } from 'devextreme-react/tree-list';

    function App() {
        return (
            <div className="App">
                <TreeList ... >
                    <Sorting mode="multiple" />
                    {/* ... */}
                </TreeList>
            </div>
        );
    }

---

[note] Sorting overrides row order changes applied using [drag and drop](/concepts/05%20UI%20Components/TreeList/00%20Getting%20Started%20with%20TreeList/60%20Enable%20Row%20Drag%20&%20Drop.md '/Documentation/Guide/UI_Components/TreeList/Getting_Started_with_TreeList/#Enable_Row_Drag_&_Drop'). Do not specify initial sort orders (**columns[]**.[sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortOrder')) to ensure row drag and drop works correctly.
