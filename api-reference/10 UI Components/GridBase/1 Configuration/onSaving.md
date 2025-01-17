---
id: GridBase.Options.onSaving
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before pending row changes are saved.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Set this field to **true** if the default saving logic should be disabled.

##### field(e.changes): Array<DataChange>
Pending row changes; a copy of the **editing**.[changes](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/changes.md '{basewidgetpath}/Configuration/editing/changes/') array. Includes only row changes, unlike [onSaved]({basewidgetpath}/Configuration/#onSaved), which contains all row data (including changes).

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---

A save operation can be initiated from the UI (with the Save button) or programatically (with the [saveEditData()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/saveEditData().md '{basewidgetpath}/Methods/#saveEditData') method).

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/EditStateManagement/"
}
