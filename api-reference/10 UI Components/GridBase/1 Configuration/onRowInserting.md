---
id: GridBase.Options.onRowInserting
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a new row is inserted into the data source.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row insertion.       
**false** or a Promise resolved with **false** or **undefined** continues row insertion.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): Object
The data of the row that should be inserted.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

---

This function allows you to intercept row insertion and perform additional actions. The following code shows how to use the function parameter's **cancel** field to prevent or continue row insertion. In this code, a Promise is assigned to this field. Row insertion continues if a user confirms it and row data validation on the server succeeds (the Promise is resolved); otherwise, row insertion is prevented (the Promise is rejected):

#include datagrid-ref-confirm-action-and-validate-data with {
    apiMember: "onRowInserting",
    functionName: "insertRow",
    vueAttribute: "row-inserting"
}

[note]

- Do not use this function to insert data. If you need a custom insert logic, implement [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/)'s [insert](Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#update) function.

- In batch [editing mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), this function is executed for each row individually if several rows should be inserted.

[/note]