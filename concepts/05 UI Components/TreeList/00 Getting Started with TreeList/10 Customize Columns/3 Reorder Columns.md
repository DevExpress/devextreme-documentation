#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Columns/Column_Reordering/", name: "Column Reordering" }

To set the initial column order, arrange items in the [columns[]](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/') array as needed. Enable [allowColumnReordering](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnReordering') to allow users to reorder columns in the component UI.

The following code snippet also specifies [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataType') for `BirthDate` and `HireDate` columns to display string values as dates:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
            columns: [ "FullName", "Position", {
                dataField: "BirthDate", 
                dataType: "date",
            }, {
                dataField: "HireDate", 
                dataType: "date",
            }, "City", "State", "Email", "MobilePhone", "Skype"],
            allowColumnReordering: true,
            // ...
        });
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
        .Columns(columns => {
            columns.AddFor(m => m.FullName);
            columns.AddFor(m => m.Position);
            columns.AddFor(m => m.BirthDate)
                .DataType(GridColumnDataType.Date);
            columns.AddFor(m => m.HireDate)
                .DataType(GridColumnDataType.Date);
            columns.AddFor(m => m.City);
            columns.AddFor(m => m.State);
            columns.AddFor(m => m.Email);
            columns.AddFor(m => m.MobilePhone);
            columns.AddFor(m => m.Skype);
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list [allowColumnReordering]="true">
        <dxi-tree-list-column dataField="FullName"></dxi-tree-list-column>
        <dxi-tree-list-column dataField="Position"></dxi-tree-list-column>
        <dxi-tree-list-column
            dataField="BirthDate"
            dataType="date">
        </dxi-tree-list-column>
        <dxi-tree-list-column
            dataField="HireDate"
            dataType="date">
        </dxi-tree-list-column>
        <dxi-tree-list-column dataField="City"></dxi-tree-list-column>
        <dxi-tree-list-column dataField="State"></dxi-tree-list-column>
        <dxi-tree-list-column dataField="Email"></dxi-tree-list-column>
        <dxi-tree-list-column dataField="MobilePhone"></dxi-tree-list-column>
        <dxi-tree-list-column dataField="Skype"></dxi-tree-list-column>
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList :allow-column-reordering="true">
            <DxColumn data-field="FullName" />
            <DxColumn data-field="Position" />
            <DxColumn
                data-field="BirthDate"
                data-type="date">
            </DxColumn>
            <DxColumn
                data-field="HireDate"
                data-type="date">
            </DxColumn>
            <DxColumn data-field="City" />
            <DxColumn data-field="State" />
            <DxColumn data-field="Email" />
            <DxColumn data-field="MobilePhone" />
            <DxColumn data-field="Skype" />
        </DxTreeList>
    </template>

    <script setup lang="ts">
    import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList, Column } from 'devextreme-react/tree-list';

    function App() {
        return (
            <TreeList allowColumnReordering={true}>
                <Column dataField="FullName" />
                <Column dataField="Position" />
                <Column
                    dataField="BirthDate"
                    dataType="date">
                </Column>
                <Column
                    dataField="HireDate"
                    dataType="date">
                </Column>
                <Column dataField="City" />
                <Column dataField="State" />
                <Column dataField="Email" />
                <Column dataField="MobilePhone" />
                <Column dataField="Skype" />
            </TreeList>
        );
    }

---
