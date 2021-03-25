Users can add, update, and delete records. To allow these operations, enable the [allowAdding](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowAdding), [allowUpdating](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowUpdating), and [allowDeleting](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowDeleting) properties in the [editing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/) object. Multiple [edit modes](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode) are available. This tutorial uses the pop-up edit mode.

DevExtreme includes a validation engine that checks edited values before they are saved. This engine supports different validation rule types, such as [Email](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/EmailRule/), [Compare](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/CompareRule/), [Range](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RangeRule/), and more. Validation rules are specified per column; one column can use multiple rules. The code below assigns the [Required](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/) rule to several columns.

[note] Editing does not work with hierarchical data sources out of the box, but you can use the code sample from the following knowledge base article to implement it: <a href="https://www.devexpress.com/Support/Center/Question/Details/T725094/treelist-how-to-perform-crud-operations-on-a-hierarchical-data-source" target="_blank">TreeList - How to perform CRUD operations on a hierarchical data source</a>.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
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
                dataField: "State",
                // ...
                validationRules: [{ type: "required" }],
            }
            // ...
        );
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ... >
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
            dataField="State">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxo-editing
            mode="popup"
            [allowUpdating]="true"
            [allowDeleting]="true"
            [allowAdding]="true">
        </dxo-editing>
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ... >
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
                    data-field="State">
                    <DxRequiredRule />
                </DxColumn>
                <DxEditing
                    mode="popup"
                    :allow-updating="true"
                    :allow-adding="true"
                    :allow-deleting="true"
                />
            </DxTreeList>
        </div>
    </template>

    <script>
    import {
        DxTreeList,
        DxColumn,
        // ...
        DxRequiredRule,
        DxEditing
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
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
        TreeList,
        Column,
        // ...
        RequiredRule,
        Editing
    } from 'devextreme-react/tree-list';

    function App() {
        return (
            <div className="App">
                <TreeList ... >
                    {/* ... */}
                    <Column dataField="FullName">
                        <RequiredRule />
                    </Column>
                    <Column dataField="Position">
                        <RequiredRule />
                    </Column>
                    {/* ... */}
                    <Column ...
                        dataField="HireDate">
                        <RequiredRule />
                    </Column>
                    {/* ... */}
                    <Column ...
                        dataField="State">
                        <RequiredRule />
                    </Column>
                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true}
                    />
                </TreeList>
            </div>
        );
    }

    export default App;

---

Run the code and click the Edit button in any row. This invokes a pop-up window that contains an edit form. When you clear the Full Name text box on this form, the following validation error is shown: *"Full Name is required"*.
