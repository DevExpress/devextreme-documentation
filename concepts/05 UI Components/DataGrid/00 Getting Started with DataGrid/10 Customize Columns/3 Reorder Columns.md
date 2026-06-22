To specify an initial column order, reorder [columns[]](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') items. Enable [allowColumnReordering](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#allowColumnReordering') to allow column reordering in the component's UI.

The following code snippet also specifies [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType') for `BirthDate` and `HireDate` columns to display string values as dates:

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGrid").dxDataGrid({
        columns: [{
            dataField: "FullName"
        }, {
            dataField: "Position"
        }, {
            dataField: "BirthDate", 
            dataType: "date",
        }, {
            dataField: "HireDate", 
            dataType: "date",
        },"City", {
            dataField: "Country"
        },
        "Address",
        "HomePhone",
        {
            dataField: "PostalCode",
        }],
        allowColumnReordering: true,
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .Columns(columns => {
            columns.AddFor(m => m.FullName)
            columns.AddFor(m => m.Position)
            columns.AddFor(m => m.BirthDate)
                .DataType(GridColumnDataType.Date)
            columns.AddFor(m => m.HireDate)
                .DataType(GridColumnDataType.Date)
            columns.AddFor(m => m.Country)
            columns.AddFor(m => m.Address);
            columns.AddFor(m => m.HomePhone);
            columns.AddFor(m => m.PostalCode).Visible(false);
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid [allowColumnReordering]="true">
        <dxi-data-grid-column dataField="FullName"></dxi-data-grid-column>
        <dxi-data-grid-column dataField="Position"></dxi-data-grid-column>
        <dxi-data-grid-column
            dataField="BirthDate"
            dataType="date">
        </dxi-data-grid-column>
        <dxi-data-grid-column
            dataField="HireDate"
            dataType="date">
        </dxi-data-grid-column>
        <dxi-data-grid-column dataField="City"></dxi-data-grid-column>
        <dxi-data-grid-column dataField="Country"></dxi-data-grid-column>
        <dxi-data-grid-column dataField="Address"></dxi-data-grid-column>
        <dxi-data-grid-column dataField="HomePhone"></dxi-data-grid-column>
        <dxi-data-grid-column dataField="PostalCode"></dxi-data-grid-column>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid :allow-column-reordering="true">
            <DxColumn data-field="FullName"></DxColumn>
            <DxColumn data-field="Position"></DxColumn>
            <DxColumn
                data-field="BirthDate"
                data-type="date">
            </DxColumn>
            <DxColumn
                data-field="HireDate"
                data-type="date">
            </DxColumn>
            <DxColumn data-field="City" />
            <DxColumn data-field="Country"></DxColumn>
            <DxColumn data-field="Address" />
            <DxColumn data-field="HomePhone" />
            <DxColumn data-field="PostalCode" />
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
            <DataGrid allowColumnReordering={true}>
                <Column dataField="FullName"></Column>
                <Column dataField="Position"></Column>
                <Column
                    dataField="BirthDate"
                    dataType="date">
                </Column>
                <Column
                    dataField="HireDate"
                    dataType="date">
                </Column>
                <Column dataField="City" />
                <Column dataField="Country"></Column>
                <Column dataField="Address" />
                <Column dataField="HomePhone" />
                <Column dataField="PostalCode" />
            </DataGrid>
        );
    }

---

<a href="/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Reordering/" class="button" style="margin-right: 5px;" target="_blank"><b>Read Tutorial</b>: Column Reordering</a>
