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
[note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), this function is executed for each row individually if several rows should be updated.

The following code shows how to use the function parameter's **cancel** field to prevent or continue row updating. In this code, a Promise is assigned to this field. Row updating continues if a user confirms updating and row data validation on the server succeeds (the Promise is resolved); otherwise, row updating is prevented (the Promise is rejected).

#include datagrid-ref-rowupdateconfirmandvalidate
