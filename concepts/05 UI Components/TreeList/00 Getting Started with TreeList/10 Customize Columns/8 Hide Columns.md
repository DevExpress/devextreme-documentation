#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Columns/Hide_a_Column_Using_the_API/", name: "Hide a Column Using the API" }
#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Columns/Column_Chooser/", name: "Column Chooser" }

To hide a TreeList column, set **columns[]**.[visible](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visible') to `false`. If the [columnChooser](/api-reference/40%20Common%20Types/15%20grids/ColumnChooser/enabled.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#enabled') is enabled, users can restore hidden columns. To hide a column in both the component and the column chooser, omit the corresponding [columns[]](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/') item.

---
##### jQuery

    <!-- tab: index.js -->
    $("#treeList").dxTreeList({
        columnChooser: { enabled: true },
        columns: [{
            dataField: "Email",
            visible: false
        }, /* ... */ ],
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
        .ColumnChooser(c => c.Enabled(true))
        .Columns(columns => {
            columns.AddFor(m => m.Email)
                .Visible(false);
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list>
        <dxo-tree-list-column-chooser [enabled]="true"></dxo-tree-list-column-chooser>
        <dxi-tree-list-column
            dataField="Email"
            [visible]="false"
        ></dxi-tree-list-column>
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxColumnChooser :enabled="true" />
            <DxColumn
                data-field="Email"
                :visible="false"
            />
            <!-- ... -->
        </DxTreeList>
    </template>

    <script setup lang="ts">
    import { DxTreeList, DxColumnChooser, DxColumn } from 'devextreme-vue/tree-list';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList, ColumnChooser, Column } from 'devextreme-react/tree-list';

    function App() {
        return (
            <TreeList ... >
                <ColumnChooser enabled={true} />
                <Column
                    dataField="Email"
                    visible={false}
                />
                {/* ... */}
            </TreeList>
        );
    }

---

