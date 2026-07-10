#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Sorting/", name: "TreeList - Sorting" }

The **sorting**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/sorting/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/sorting/#mode') property specifies whether users can sort grid records against single or multiple columns.

You can also set a column's [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortOrder') and [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortIndex') properties to specify initial sorting settings. [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortIndex') applies only in multi-column sort mode.

To sort data and change sort orders in the UI, click column headers. Hold **Shift** and click to sort data against multiple columns.

---
##### jQuery

    <!-- tab: index.js -->
    $("#treeList").dxTreeList({
        sorting: { mode: "multiple" },
        columns: [{
            dataField: "State",
            sortOrder: "asc",
        }, /* ... */ ],
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
        .Sorting(s => s.Mode(GridSortingMode.Multiple))
        .Columns(columns => {
            columns.AddFor(m => m.State)
                .SortOrder(SortOrder.Asc);
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list>
        <dxo-tree-list-sorting mode="multiple"></dxo-tree-list-sorting>
        <dxi-tree-list-column
            dataField="State"
            sortOrder="asc"
        ></dxi-tree-list-column>
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxSorting mode="multiple" />
            <DxColumn
                data-field="State"
                sort-order="asc"
            />
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
                    <Column
                        dataField="State"
                        sortOrder="asc"
                    />
                    {/* ... */}
                </TreeList>
            </div>
        );
    }

---
