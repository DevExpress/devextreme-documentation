#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/DataGrid/Editing/", name: "DataGrid - Editing" }

Users can add new records and update or delete existing records. To allow these operations, enable the following [editing](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/') options:

- [allowAdding](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/allowAdding.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowAdding')
- [allowUpdating](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/allowUpdating.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowUpdating')
- [allowDeleting](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowDeleting')

DataGrid supports multiple [edit modes](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode'). This tutorial uses the pop-up edit mode.

This tutorial also implements [data validation](/Documentation/Guide/UI_Components/Common/UI_Widgets/Data_Validation/) to check that edited data is valid before saving. [Required](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/') rules are configured to ensure certain column values are never empty:

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGrid").dxDataGrid({
        editing: {
            mode: "popup",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },
        columns: [{
            dataField: "FullName",
            validationRules: [{ type: "required" }]
        }, {
            dataField: "Position",
            validationRules: [{ type: "required" }]
        }, {
            dataField: "BirthDate",
            validationRules: [{ type: "required" }]
        }, {
            dataField: "HireDate", 
            validationRules: [{ type: "required" }]
        }, {
            dataField: "Country",
            validationRules: [{ type: "required" }]
        }, /* ... */ ],
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .Editing(e => e
            .Mode(GridEditMode.Popup)
            .AllowAdding(true)
            .AllowDeleting(true)
            .AllowUpdating(true)
        )
        .Columns(columns => {
            columns.AddFor(m => m.FullName)
                .ValidationRules(v => v.AddRequired());
            columns.AddFor(m => m.Position)
                .ValidationRules(v => v.AddRequired());
            columns.AddFor(m => m.BirthDate)
                .ValidationRules(v => v.AddRequired());
            columns.AddFor(m => m.HireDate)
                .ValidationRules(v => v.AddRequired());
            columns.AddFor(m => m.Country)
                .ValidationRules(v => v.AddRequired());
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxo-data-grid-editing
            mode="popup"
            [allowUpdating]="true"
            [allowDeleting]="true"
            [allowAdding]="true"
        ></dxo-data-grid-editing>
        <dxi-data-grid-column dataField="FullName">
            <dxi-data-grid-validation-rule type="required"></dxi-data-grid-validation-rule>
        </dxi-data-grid-column>
        <dxi-data-grid-column dataField="Position">
            <dxi-data-grid-validation-rule type="required"></dxi-data-grid-validation-rule>
        </dxi-data-grid-column>
        <dxi-data-grid-column dataField="BirthDate">
            <dxi-data-grid-validation-rule type="required"></dxi-data-grid-validation-rule>
        </dxi-data-grid-column>
        <dxi-data-grid-column dataField="HireDate">
            <dxi-data-grid-validation-rule type="required"></dxi-data-grid-validation-rule>
        </dxi-data-grid-column>
        <dxi-data-grid-column dataField="Country">
            <dxi-data-grid-validation-rule type="required"></dxi-data-grid-validation-rule>
        </dxi-data-grid-column>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <DxEditing
                mode="popup"
                :allow-updating="true"
                :allow-adding="true"
                :allow-deleting="true"
            />
            <DxColumn data-field="FullName">
                <DxRequiredRule />
            </DxColumn>
            <DxColumn data-field="Position">
                <DxRequiredRule />
            </DxColumn>
            <DxColumn data-field="BirthDate">
                <DxRequiredRule />
            </DxColumn>
            <DxColumn data-field="HireDate">
                <DxRequiredRule />
            </DxColumn>
            <DxColumn data-field="Country">
                <DxRequiredRule />
            </DxColumn>
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxEditing, DxColumn, DxRequiredRule } from 'devextreme-vue/data-grid';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Editing, Column, RequiredRule } from 'devextreme-react/data-grid';

    function App() {
        return (
            <DataGrid>
                <Editing
                    mode="popup"
                    allowUpdating={true}
                    allowDeleting={true}
                    allowAdding={true}
                />
                <Column dataField="FullName">
                    <RequiredRule />
                </Column>
                <Column dataField="Position">
                    <RequiredRule />
                </Column>
                <Column dataField="BirthDate">
                    <RequiredRule />
                </Column>
                <Column dataField="HireDate">
                    <RequiredRule />
                </Column>
                <Column dataField="Country">
                    <RequiredRule />
                </Column>
                {/* ... */}
            </DataGrid>
        );
    }

---

To implement validation for unchanged cells using a custom toolbar button, refer to the following example:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-data-grid-validate-unchanged-cells"
}