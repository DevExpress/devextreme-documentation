DataGrid columns have equal widths in the default configuration ([width](/api-reference/_hidden/GridBaseColumn/width.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width') is set to *"auto"*). To change the column layout, you can define each column's **width** property or enable [columnAutoWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnAutoWidth.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnAutoWidth') to adjust all columns to fit cell values. To allow users to change the column layout, enable [allowColumnResizing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnResizing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#allowColumnResizing').

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGrid").dxDataGrid({
        allowColumnResizing: true,
        columnAutoWidth: true,
        columns: [{
            dataField: "BirthDate", 
            dataType: "date",
            width: 100,
        }, {
            dataField: "HireDate", 
            dataType: "date",
            width: 100,
        }, /* ... */ ],
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .AllowColumnResizing(true)
        .ColumnAutoWidth(true)
        .Columns(columns => {
            columns.AddFor(m => m.BirthDate)
                .DataType(GridColumnDataType.Date)
                .Width(100);
            columns.AddFor(m => m.HireDate)
                .DataType(GridColumnDataType.Date)
                .Width(100);
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        [allowColumnResizing]="true"
        [columnAutoWidth]="true"
    >
        <dxi-data-grid-column
            dataField="BirthDate"
            dataType="date"
            [width]="100"
        ></dxi-data-grid-column>
        <dxi-data-grid-column
            dataField="HireDate"
            dataType="date"
            [width]="100"
        ></dxi-data-grid-column>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid
            :allow-column-resizing="true"
            :column-auto-width="true"
        >
            <DxColumn
                data-field="BirthDate"
                data-type="date"
                :width="100"
            />
            <DxColumn
                data-field="HireDate"
                data-type="date"
                :width="100"
            />
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Column } from 'devextreme-react/data-grid';

    function App() {
        return (
            <DataGrid
                columnAutoWidth={true}
                allowColumnResizing={true}
            >
                <Column
                    dataField="BirthDate"
                    dataType="date"
                    width={100}
                />
                <Column
                    dataField="HireDate"
                    dataType="date"
                    width={100}
                />
                {/* ... */}
            </DataGrid>
        );
    }

---

<a href="/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Sizing/" class="button" style="margin-right: 5px;" target="_blank"><b>Read Tutorial</b>: Column Sizing</a>
