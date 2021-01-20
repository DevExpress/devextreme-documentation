---
id: GridBase.Options.onSaving
type: function(e)
default: null
EventForAction: GridBase.saving
---
---
##### shortDescription
A function that is executed before pending row changes are saved.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Set this field to **true** if the default saving logic should be disabled.

##### field(e.changes): Array<any>
Pending row changes; a copy of the **editing**.[changes]({basewidgetpath}/Configuration/editing/#changes) array.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---

A save operation can be initiated from the UI (with the Save button) or programatically (with the [saveEditData()]({basewidgetpath}/Methods/#saveEditData) method).

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/EditStateManagement/"
}
