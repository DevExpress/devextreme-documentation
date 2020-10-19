---
id: GridBase.Options.onSaving
type: function(e)
default: null
EventForAction: GridBase.saving
---
---
##### shortDescription
A callback function executed before edited data is saved when a user saves changes (or [saveEditData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#saveEditData) is called).
 
##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
If true, this flag disables the default saving logic.

##### field(e.changes): Array<any>
An array of objects with unsaved rows' changes; a copy of the editing.changes array.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an  <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="https://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---

Enable e.cancel to implement a custom saving logic. If you save data locally, use the applyChanges(data, changes, options) utility method or the push(changes) method. Once you apply changes to the data source, clear the editing.changes and editing.editRowKey options. For this, use the cancelEditData() method or clear them explicitly in code.

If the default saving logic is used (e.cancel is false), the widget will save data only when a promise is resolved.

Irrespective of the savig logic, an error message is shown when a promise is rejected. The default message is 'Error has occured'.  

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/BatchUpdateRequest/"
}
