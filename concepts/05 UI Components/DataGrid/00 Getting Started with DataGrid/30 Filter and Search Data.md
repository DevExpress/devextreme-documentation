#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/", name: "DataGrid - Filtering and Searching" }

DataGrid includes the following UI elements used to filter and search data:

- [filterRow](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/filterRow/')
- [headerFilter](/api-reference/_hidden/GridBaseColumn/headerFilter '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/')
- [filterPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterPanel '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/filterPanel/') with [filterBuilder](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterBuilder.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#filterBuilder')
- [searchPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/searchPanel/')

This tutorial uses the [filterRow](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/filterRow/') and [searchPanel](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/searchPanel/'):

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGrid").dxDataGrid({
        filterRow: { visible: true },
        searchPanel: { visible: true },
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .FilterRow(f => f.Visible(true))
        .SearchPanel(s => s.Visible(true))
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxo-data-grid-filter-row [visible]="true"></dxo-data-grid-filter-row>
        <dxo-data-grid-search-panel [visible]="true"></dxo-data-grid-search-panel>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxFilterRow :visible="true" />
            <DxSearchPanel :visible="true" />
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxFilterRow, DxSearchPanel } from 'devextreme-vue/data-grid';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, FilterRow, SearchPanel } from 'devextreme-react/data-grid';

    function App() {
        return (
            <DataGrid ... >
                <FilterRow visible={true} />
                <SearchPanel visible={true} />
                {/* ... */}
            </DataGrid>
        );
    }

---
