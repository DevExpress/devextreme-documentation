#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Paging/", name: "TreeList - Paging" }

TreeList can load data in pages. To configure pagination, set **paging**.[enabled](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/paging/enabled.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/#enabled') to `true` and configure the [pageSize](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/#pageSize') property:

---
##### jQuery

    <!-- tab: index.js -->
    $("#treeList").dxTreeList({
        paging: {
            enabled: true,
            pageSize: 12,
        },
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
        .Paging(p => p
            .Enabled(true)
            .PageSize(12)
        )
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list>
        <dxo-tree-list-paging 
            [enabled]="true"
            [pageSize]="12"
        ></dxo-tree-list-paging>
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList>
            <DxPaging
                :enabled="true"
                :page-size="12"
            />
            <!-- ... -->
        </DxTreeList>
    </template>

    <script setup lang="ts">
    import { DxTreeList, DxPaging } from 'devextreme-vue/tree-list';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList, Paging } from 'devextreme-react/tree-list';

    function App() {
        return (
            <TreeList>
                <Paging
                    enabled={true}
                    defaultPageSize={12} 
                />
                {/* ... */}
            </TreeList>
        );
    }

---

For further information on the TreeList component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview/)
* [API Reference](/api-reference/10%20UI%20Components/dxTreeList '/Documentation/ApiReference/UI_Components/dxTreeList/')