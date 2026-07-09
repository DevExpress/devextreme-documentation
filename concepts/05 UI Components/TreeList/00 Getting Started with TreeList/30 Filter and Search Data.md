#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/", name: "TreeList - Filtering and Searching" }

TreeList includes the following UI elements used to filter and search data:

- [filterRow](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/')
- [headerFilter](/api-reference/_hidden/GridBaseColumn/headerFilter '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/headerFilter/')
- [filterPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterPanel '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterPanel/') with [filterBuilder](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterBuilder.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#filterBuilder')
- [searchPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/searchPanel/')

This tutorial uses the [filterRow](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/') and [searchPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/searchPanel/'):

---
##### jQuery

    <!-- tab: index.js -->
    $("#treeList").dxTreeList({
        filterRow: { visible: true },
        searchPanel: { visible: true },
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
        .FilterRow(f => f.Visible(true))
        .SearchPanel(s => s.Visible(true))
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list>
        <dxo-tree-list-filter-row [visible]="true"></dxo-tree-list-filter-row>
        <dxo-tree-list-search-panel [visible]="true"></dxo-tree-list-search-panel>
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxFilterRow :visible="true" />
            <DxSearchPanel :visible="true" />
            <!-- ... -->
        </DxTreeList>
    </template>

    <script setup lang="ts">
    import { DxTreeList, DxFilterRow, DxSearchPanel } from 'devextreme-vue/tree-list';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList, FilterRow, SearchPanel } from 'devextreme-react/tree-list';

    function App() {
        return (
            <TreeList ... >
                <FilterRow visible={true} />
                <SearchPanel visible={true} />
                {/* ... */}
            </TreeList>
        );
    }

---
