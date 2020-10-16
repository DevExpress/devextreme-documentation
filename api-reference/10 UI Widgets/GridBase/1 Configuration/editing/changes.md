---
id: GridBase.Options.editing.changes
type: Array<any>
default: []
firedEvents: optionChanged
---
---
##### shortDescription
An array of objects with unsaved rows' changes.

---

Each object consists of the following fields:

* **type**                
The type of operation: "insert", "update", or "remove".

* **data**             
The inserted or updated row's data.

* **key**                     
The key value(s) of a data source.

#include common-ctp-note with {
    component: "editing.changes"
}

Due to CTP, objects of type *"insert"* can only be added thru the interface or with the [addRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#addRow) method.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/EditStateManagement/"
}