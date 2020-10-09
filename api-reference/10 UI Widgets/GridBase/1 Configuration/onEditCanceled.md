---
id: GridBase.Options.onEditCanceled
type: function(e)
default: null
EventForAction: GridBase.editCanceled
---
---
##### shortDescription
A callback function that is executed after a user canceled editing.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.changes): Array<any>
An array of objects with edited rows' data.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an  <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="https://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Use this function in row, form, or popup edit [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode) only.