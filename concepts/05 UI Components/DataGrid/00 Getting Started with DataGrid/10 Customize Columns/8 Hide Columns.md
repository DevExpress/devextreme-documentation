To hide a DataGrid column, set **columns[]**.[visible](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#visible') to `false`. Users can restore hidden columns if you enable the [columnChooser](/api-reference/40%20Common%20Types/15%20grids/ColumnChooser/enabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/#enabled'). To hide a column in the component and the column chooser, omit the corresponding [columns[]](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') item.

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGrid").dxDataGrid({
        columnChooser: { enabled: true },
        columns: [{
            dataField: "PostalCode",
            visible: false
        }, /* ... */ ],
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .ColumnChooser(c => c.Enabled(true))
        .Columns(columns => {
            columns.AddFor(m => m.PostalCode)
                .Visible(false);
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxo-data-grid-column-chooser [enabled]="true"></dxo-data-grid-column-chooser>
        <dxi-data-grid-column
            dataField="PostalCode"
            [visible]="false"
        ></dxi-data-grid-column>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumnChooser :enabled="true" />
            <DxColumn
                data-field="PostalCode"
                :visible="false"
            />
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxColumnChooser, DxColumn } from 'devextreme-vue/data-grid';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, ColumnChooser, Column } from 'devextreme-react/data-grid';

    function App() {
        return (
            <DataGrid ... >
                <ColumnChooser enabled={true} />
                <Column
                    dataField="PostalCode"
                    visible={false}
                />
                {/* ... */}
            </DataGrid>
        );
    }

---

<a href="/Documentation/Guide/UI_Components/DataGrid/Columns/Hide_a_Column_Using_the_API/" class="button" style="margin-right: 5px;" target="_blank"><b>Read Tutorial</b>: Hide a Column Using the API</a>

<a href="/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Chooser/" class="button" style="margin-right: 5px;" target="_blank"><b>Read Tutorial</b>: Column Chooser</a>
