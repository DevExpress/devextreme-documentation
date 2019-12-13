---
id: dxPivotGrid.Options.onFileSaving
type: function(e)
default: null
EventForAction: dxPivotGrid.fileSaving
---
---
##### shortDescription
A function that is executed before a file with exported data is saved to the user's local storage.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel file saving.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Blob
Exported data as a BLOB.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.fileName): String
The name of the file to be saved.

##### field(e.format): String
The format of the file to be saved. Equals *'EXCEL'* for an Excel file.

---
