Users can add, update, and delete records. To allow these operations, enable the [allowAdding](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/allowAdding.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowAdding'), [allowUpdating](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/allowUpdating.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowUpdating'), and [allowDeleting](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowDeleting') properties in the [editing](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/') object. Multiple [edit modes](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode') are available. This tutorial uses the pop-up edit mode.

DevExtreme includes a validation engine that checks edited values before they are saved. This engine supports different validation rule types, such as [Email](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/EmailRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/EmailRule/'), [Compare](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/CompareRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/CompareRule/'), [Range](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/RangeRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RangeRule/'), and more. Validation rules are specified per column; one column can use multiple rules. The code below assigns the [Required](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/') rule to several columns.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
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
                // ...
                validationRules: [{ type: "required" }]
            }, {
                dataField: "HireDate", 
                // ...
                validationRules: [{ type: "required" }]
            },
            // ...
            {
                dataField: "Country",
                // ...
                validationRules: [{ type: "required" }]
            },
            // ...
            ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxi-column dataField="FullName">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column dataField="Position">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column ...
            dataField="BirthDate">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column ...
            dataField="HireDate">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column ...
            dataField="Country">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxo-editing
            mode="popup"
            [allowUpdating]="true"
            [allowDeleting]="true"
            [allowAdding]="true">
        </dxo-editing>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ... >
                <!-- ... -->
                <DxColumn data-field="FullName">
                    <DxRequiredRule />
                </DxColumn>
                <DxColumn data-field="Position">
                    <DxRequiredRule />
                </DxColumn>
                <DxColumn ...
                    data-field="BirthDate">
                    <DxRequiredRule />
                </DxColumn>
                <DxColumn ...
                    data-field="HireDate">
                    <DxRequiredRule />
                </DxColumn>
                <!-- ... -->
                <DxColumn ...
                    data-field="Country">
                    <DxRequiredRule />
                </DxColumn>
                <DxEditing
                    mode="popup"
                    :allow-updating="true"
                    :allow-adding="true"
                    :allow-deleting="true"
                />
            </DxDataGrid>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        DxColumn,
        // ...
        DxRequiredRule,
        DxEditing
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            // ...
            DxRequiredRule,
            DxEditing
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DataGrid,
        Column,
        // ...
        RequiredRule,
        Editing
    } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid ... >
                    {/* ... */}
                    <Column dataField="FullName">
                        <RequiredRule />
                    </Column>
                    <Column dataField="Position">
                        <RequiredRule />
                    </Column>
                    <Column ...
                        dataField="BirthDate">
                        <RequiredRule />
                    </Column>
                    <Column ...
                        dataField="HireDate">
                        <RequiredRule />
                    </Column>
                    {/* ... */}
                    <Column ...
                        dataField="Country">
                        <RequiredRule />
                    </Column>
                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true}
                    />
                </DataGrid>
            </div>
        );
    }

    export default App;

---

Run the code and click the Edit button in any row. This invokes a pop-up window that contains an edit form. When you clear the Full Name text box on this form, the following validation error is shown: *"Full Name is required"*.
