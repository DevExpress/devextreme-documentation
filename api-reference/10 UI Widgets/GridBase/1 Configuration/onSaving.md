---
id: GridBase.Options.onSaving
type: function(e)
default: null
EventForAction: GridBase.saving
---
---
##### shortDescription
A callback function that is executed when a user clicks the Save button (or [saveEditData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#saveEditData) is called) before edited data is saved.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
If true, this flag requires you to implement a custom saving logic.

##### field(e.changes): Array<any>
An array of objects with edited rows' data.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an  <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="https://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---

If the default saving logic is used (e.cancel is false), the widget will save data only when a promise is resolved. Irrespective of the e.cancel value, the 'Error has occured' message is shown when a promise is rejected.
