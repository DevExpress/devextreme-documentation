#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/DataGrid/Sorting/", name: "DataGrid - Sorting" }

The **sorting**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/sorting/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sorting/#mode') property specifies whether users can sort grid records against single or multiple columns.

You can also set a column's [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#sortOrder') and [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#sortIndex') properties to specify initial sorting settings. [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#sortIndex') applies only in multi-column sort mode.

To sort data and change sort orders in the UI, click column headers. Hold **Shift** and click to sort data against multiple columns.

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
                .SortOrder(SortOrder.Asc);
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
