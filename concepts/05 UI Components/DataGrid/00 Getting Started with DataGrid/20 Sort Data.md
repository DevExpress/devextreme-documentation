The **sorting**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/sorting/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sorting/#mode') property specifies whether users can sort grid records by single or multiple columns.

You can also set a column's [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#sortOrder') and [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#sortIndex') properties to specify initial sorting settings. [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#sortIndex') applies only in multiple sorting mode.

To sort data and change sort orders in the UI, click column headers. Hold **shift** and click to add sorting by other columns in multiple sorting mode.

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGrid").dxDataGrid({
        sorting: { mode: "multiple" },
        columns: [{
            dataField: "Country",
            sortOrder: "asc",
        }, /* ... */ ],
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .Sorting(s => s.Mode(GridSortingMode.Multiple))
        .Columns(columns => {
            columns.AddFor(m => m.Country)
                .SortOrder(SortOrder.Asc)
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxo-sorting mode="multiple"></dxo-sorting>
        <dxi-data-grid-column
            dataField="Country"
            sortOrder="asc"
        ></dxi-data-grid-column>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxSorting mode="multiple" />
            <DxColumn
                data-field="Country"
                sort-order="asc"
            />
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxSorting, DxColumn } from 'devextreme-vue/data-grid';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Sorting, Column } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid ... >
                    <Sorting mode="multiple" />
                    <Column
                        dataField="Country"
                        sortOrder="asc"
                    />
                    {/* ... */}
                </DataGrid>
            </div>
        );
    }

---

<a href="/Documentation/Guide/UI_Components/DataGrid/Sorting/" class="button" style="margin-right: 5px;" target="_blank"><b>Read Tutorial</b>: DataGrid - Sorting</a>
