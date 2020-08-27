Users can add new records and update or delete existing records. To allow each of these operations, enable the [allowAdding](), [allowUpdating](), and [allowDeleting]() options in the [editing]() object. The **DataGrid** also supports multiple [edit modes](). This tutorial uses the popup edit mode.

DevExtreme includes a validation engine that validates edited values before they are saved. This engine supports different validation rule types, such as [Email](), [Compare](), [Range](), and more. Validation rules are specified per column; one column can have multiple rules. In this tutorial, select columns have the [Required]() rule.

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
                validationRules: [{
                    type: "required"
                }]
            }, {
                dataField: "Position",
                validationRules: [{
                    type: "required"
                }]
            }, {
                dataField: "BirthDate",
                // ...
                validationRules: [{
                    type: "required"
                }]
            }, {
                dataField: "HireDate", 
                // ...
                validationRules: [{
                    type: "required"
                }]
            },
            // ...
            {
                dataField: "Country",
                // ...
                validationRules: [{
                    type: "required"
                }]
            },
            // ...
            ],
        });
    });

---

Run the code and click the Edit button in any row. You will see a popup window that contains an edit form. Remove a value from the Full Name text box on this form. You should see the following validation error: *"First Name is required"*.

In the following step, we will configure record selection.