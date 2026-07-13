#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Editing/", name: "TreeList - Editing" }

Users can add new records and update or delete existing records. To allow these operations, enable the following [editing](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/') options:

- [allowAdding](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing/allowAdding.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowAdding')
- [allowUpdating](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing/allowUpdating.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowUpdating')
- [allowDeleting](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowDeleting')

TreeList supports multiple [edit modes](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode'). This tutorial uses the pop-up edit mode.

This tutorial also implements [data validation](/concepts/05%20UI%20Components/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/UI_Components/Common/UI_Widgets/Data_Validation/') to check that edited data is valid before saving. [Required](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/') rules are configured to ensure certain column values are never empty:

---
##### jQuery

    <!-- tab: index.js -->
    $("#tree-list").dxTreeList({
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
            dataField: "State",
            validationRules: [{ type: "required" }]
        }, /* ... */ ],
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
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
            columns.AddFor(m => m.State)
                .ValidationRules(v => v.AddRequired());
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list>
        <dxo-tree-list-editing
            mode="popup"
            [allowUpdating]="true"
            [allowDeleting]="true"
            [allowAdding]="true"
        ></dxo-tree-list-editing>
        <dxi-tree-list-column dataField="FullName">
            <dxi-tree-list-validation-rule type="required"></dxi-tree-list-validation-rule>
        </dxi-tree-list-column>
        <dxi-tree-list-column dataField="Position">
            <dxi-tree-list-validation-rule type="required"></dxi-tree-list-validation-rule>
        </dxi-tree-list-column>
        <dxi-tree-list-column dataField="BirthDate">
            <dxi-tree-list-validation-rule type="required"></dxi-tree-list-validation-rule>
        </dxi-tree-list-column>
        <dxi-tree-list-column dataField="HireDate">
            <dxi-tree-list-validation-rule type="required"></dxi-tree-list-validation-rule>
        </dxi-tree-list-column>
        <dxi-tree-list-column dataField="State">
            <dxi-tree-list-validation-rule type="required"></dxi-tree-list-validation-rule>
        </dxi-tree-list-column>
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList>
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
            <DxColumn data-field="State">
                <DxRequiredRule />
            </DxColumn>
            <!-- ... -->
        </DxTreeList>
    </template>

    <script setup lang="ts">
    import { DxTreeList, DxEditing, DxColumn, DxRequiredRule } from 'devextreme-vue/tree-list';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList, Editing, Column, RequiredRule } from 'devextreme-react/tree-list';

    function App() {
        return (
            <TreeList>
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
                <Column dataField="State">
                    <RequiredRule />
                </Column>
                {/* ... */}
            </TreeList>
        );
    }

---

[note]

Hierarchical data sources do not support editing in the TreeList component out of the box. To configure editing operations in hierarchical data sources, refer to the following example:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-treelist-perform-crud-operations-on-hierarchical-data-source"
}

[/note]