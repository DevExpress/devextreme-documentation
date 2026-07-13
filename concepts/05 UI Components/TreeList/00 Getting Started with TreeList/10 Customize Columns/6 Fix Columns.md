#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Columns/Column_Fixing/", name: "Column Fixing" }

When the total column width exceeds the UI component width, a horizontal scroll bar appears. To keep specific columns visible, enable [columnFixing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing/enabled.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnFixing/#enabled'). Set **columns[]**.[fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#fixed') to `true` to fix a column. Set [fixedPosition](/api-reference/_hidden/GridBaseColumn/fixedPosition.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#fixedPosition') to specify the fixed column position or create a sticky column. Users can also change column fixing options in the TreeList [context menu](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/onContextMenuPreparing.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onContextMenuPreparing').

---
##### jQuery

    <!-- tab: index.js -->
    $("#tree-list").dxTreeList({
        columnFixing: { enabled: true },
        columns: [{
            dataField: "FullName", 
            fixed: true
        }, /* ... */ ],
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
        .ColumnFixing(c => c.Enabled(true))
        .Columns(columns => {
            columns.AddFor(m => m.FullName)
                .Fixed(true);
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list>
        <dxo-tree-list-column-fixing [enabled]="true"></dxo-tree-list-column-fixing>
        <dxi-tree-list-column
            dataField="FullName"
            [fixed]="true"
        ></dxi-tree-list-column>
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList>
            <DxColumnFixing :enabled="true" />
            <DxColumn
                data-field="FullName"
                :fixed="true"
            />
            <!-- ... -->
        </DxTreeList>
    </template>

    <script setup lang="ts">
    import { DxTreeList, DxColumnFixing, DxColumn } from 'devextreme-vue/tree-list';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList, ColumnFixing, Column } from 'devextreme-react/tree-list';

    function App() {
        return (
            <div className="App">
                <TreeList>
                    <ColumnFixing enabled={true} />
                    <Column
                        dataField="FullName"
                        fixed={true}
                    />
                    {/* ... */}
                </TreeList>
            </div>
        );
    }

---
