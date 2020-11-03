---
id: GridBaseEditing.changes
type: Array<any>
default: []
firedEvents: optionChanged
---
---
##### shortDescription
[tags] ctp

Pending row changes.

---

#include common-ctp-note-wo-devextreme 

Each change is an object that can have the following fields:

* `type`: String                 
Data change type: *"insert"*, *"update"*, or *"remove"*.

* `data`: Object             
An object with updated row fields.

* `key`: any                     
The key of the row being updated or removed.

The **changes** array can be changed from the UI, with native JavaScript methods, or with widget methods ([addRow]({basewidgetpath}/Methods/#addRow), [editRow]({basewidgetpath}/Methods/#editRowrowIndex), [editCell]({basewidgetpath}/Methods/#editCellrowIndex_dataField), [deleteRow]({basewidgetpath}/Methods/#deleteRowrowIndex)). However, objects with the *"insert"* type cannot be added with native JavaScript methods. We plan to add this functionality in future releases.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/EditStateManagement/"
}