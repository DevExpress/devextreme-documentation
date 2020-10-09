---
id: GridBase.Options.onEditCanceling
type: function(e)
default: null
EventForAction: GridBase.editCanceling
---
---
##### shortDescription
A callback function that is executed when a user clicks the Cancel button (or [cancelEditData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cancelEditData) is called) before editing data is discarded.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
If true, this flag requires you to implement a custom logic for data discarding.

##### field(e.changes): Array<any>
An array of objects with edited rows' data.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an  <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="https://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---

This function is 

Each editing mode has its distinctive way to cancel editing:

* Row - the Edit button in the current row +

* Batch - a button to discard all changes in the toolbar -

* Cell - ? +

* Form - the Cancel button in the current form +

* Popup - the Cancel button in the current popup window - 
