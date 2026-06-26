#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Fixing/", name: "Column Fixing" }

When the total column width exceeds the UI component width, a horizontal scroll bar appears. To keep specific columns visible, enable [columnFixing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnFixing/#enabled'). Set **columns[]**.[fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#fixed') to `true` to fix a column. Set [fixedPosition](/api-reference/_hidden/GridBaseColumn/fixedPosition.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#fixedPosition') to specify the fixed column position or create a sticky column. Users can also change column fixing options in the DataGrid [context menu](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onContextMenuPreparing).

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGrid").dxDataGrid({
        columnFixing: { enabled: true },
        columns: [{
            dataField: "FullName", 
            fixed: true
        }, /* ... */ ],
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .ColumnFixing(c => c.Enabled(true))
        .Columns(columns => {
            columns.AddFor(m => m.FullName)
                .Fixed(true);
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxo-data-grid-column-fixing [enabled]="true"></dxo-data-grid-column-fixing>
        <dxi-data-grid-column
            dataField="FullName"
            [fixed]="true"
        ></dxi-data-grid-column>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <DxColumnFixing :enabled="true" />
            <DxColumn
                data-field="FullName"
                :fixed="true"
            />
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxColumnFixing, DxColumn } from 'devextreme-vue/data-grid';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, ColumnFixing, Column } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid>
                    <ColumnFixing enabled={true} />
                    <Column
                        dataField="FullName"
                        fixed={true}
                    />
                    {/* ... */}
                </DataGrid>
            </div>
        );
    }

---
