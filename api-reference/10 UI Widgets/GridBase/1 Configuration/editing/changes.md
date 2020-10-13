---
id: GridBase.Options.editing.changes
type: Array<any>
default: []
firedEvents: optionChanged
---
---
##### shortDescription
An array of objects with edited rows' data.

---

#include common-ctp-note with {
    component: "HtmlEditor"
}

Since the changes option is currently marked as CTP, the only way to add an object of type *"insert"* is thru the interface and with the [addRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#addRow) method.

Each object consists of the following fields:

* **type**         
The type of operation: "insert", "update", or "remove".

* **data**          
The row's inserted or updated data fields. This field is used when the operation type is "insert" or "update".

* **key**              
The value of row's key as specified in the keyExpr option.
