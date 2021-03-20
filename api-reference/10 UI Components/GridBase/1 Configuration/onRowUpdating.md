---
id: GridBase.Options.onRowUpdating
type: function(e)
default: null
EventForAction: GridBase.rowUpdating
---
---
##### shortDescription
A function that is executed before a row is updated in the data source.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row updating.       
**false** or a Promise resolved with **false** or **undefined** continues row updating.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The row's key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.newData): Object
The row's updated data.

##### field(e.oldData): Object
The row's old data.

---

This function allows you to intercept row update and perform additional actions. The following code shows how to use the function parameter's **cancel** field to prevent or continue row update. In this code, a Promise is assigned to this field. Row update continues if a user confirms it and row data validation on the server succeeds (the Promise is resolved); otherwise, row update is prevented (the Promise is rejected).

#include datagrid-ref-confirm-action-and-validate-data with {
    apiMember: "onRowUpdating",
    functionName: "updateRow",
    vueAttribute: "row-updating"
}

[note]

- Do not use this function to update data. If you need a custom update logic, implement [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/)'s [update](Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#update) function.

- In batch [editing mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), this function is executed for each row individually if several rows should be updated.

[/note]
