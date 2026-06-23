You can group DataGrid records by single or multiple columns. To group records in the UI, you can right-click column headers if **grouping**.[contextMenuEnabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/#contextMenuEnabled) is `true` (default). You can also drag and drop column headers onto the group panel if **groupPanel**.[visible](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/groupPanel/visible.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/groupPanel/#visible') is `true`.

To group data in code, define **columns[]**.[groupIndex](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupIndex') property. This tutorial specifies **groupIndex** for the `Country` column:

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGrid").dxDataGrid({
        groupPanel: { visible: true },
        columns: [{
            dataField: "Country",
            groupIndex: 0,
        }, /* ... */ ],
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .GroupPanel(p => p.Visible(true))
        .Columns(columns => {
            columns.AddFor(m => m.Country)
                .GroupIndex(0);
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxo-data-grid-group-panel [visible]="true"></dxo-data-grid-group-panel>
        <dxi-data-grid-column
            dataField="Country"
            [groupIndex]="0"
        ></dxi-data-grid-column>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <DxGroupPanel :visible="true" />
            <DxColumn
                data-field="Country"
                :group-index="0"
            />
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxGroupPanel, DxColumn } from 'devextreme-vue/data-grid';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, GroupPanel, Column } from 'devextreme-react/data-grid';

    function App() {
        return (
            <DataGrid>
                <GroupPanel visible={true} />
                <Column
                    dataField="Country"
                    groupIndex={0}
                />
                {/* ... */}
            </DataGrid>
        );
    }

---

<a href="/Documentation/Guide/UI_Components/DataGrid/Grouping/" class="button" style="margin-right: 5px;" target="_blank"><b>Read Tutorial</b>: DataGrid - Grouping</a>
