---
id: dxTreeList.Options.onRowUpdating
type: function(e)
---
---
##### shortDescription
A function that is executed before a row is updated in the data source.

##### param(e): ui/tree_list:RowUpdatingEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row updating.       
**false** or a Promise resolved with **false** or **undefined** continues row updating.

##### field(e.key): any
The row's key.

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

- You can use this function to change `e.newData` values, but do not use it to implement custom update logic. For this purpose, you can implement the [onSaving](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/onSaving.md '{basewidgetpath}/Configuration/#onSaving') or [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/')'s [update](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/update.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#update') function.

- In batch [editing mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), this function is executed for each row individually if several rows should be updated.

[/note]
