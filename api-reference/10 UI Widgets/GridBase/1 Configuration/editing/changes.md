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
Each object consists of the following fields:

* **type** 
The type of operation: "insert", "update", or "remove".

* **data** 
The row's inserted or updated data fields. This field is used when the operation type is "insert" or "update".

* **key** 
The value of row's key as specified in the keyExpr option.

#include common-ctp-note with {
    component: "HtmlEditor"
}

