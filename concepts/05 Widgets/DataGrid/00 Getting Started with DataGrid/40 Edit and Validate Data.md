Users can add new records and update or delete existing records. To allow each of these operations, enable the [allowAdding](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowAdding), [allowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowUpdating), and [allowDeleting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowDeleting) options in the [editing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/) object. The **DataGrid** also supports multiple [edit modes](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode). This tutorial uses the popup edit mode.

DevExtreme includes a validation engine that validates edited values before they are saved. This engine supports different validation rule types, such as [Email](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/EmailRule/), [Compare](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CompareRule/), [Range](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RangeRule/), and more. Validation rules are specified per column; one column can have multiple rules. In this tutorial, select columns have the [Required](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/) rule.

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

---

Run the code and click the Edit button in any row. You will see a popup window that contains an edit form. Remove a value from the Full Name text box on this form. You should see the following validation error: *"First Name is required"*.

In the following step, we will configure record selection.