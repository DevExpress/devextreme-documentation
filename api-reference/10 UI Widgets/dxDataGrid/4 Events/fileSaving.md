---
id: dxDataGrid.fileSaving
type: eventType
---
---
##### shortDescription
Raised before a file with exported data is saved to the user's local storage.

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
The format of this file. Equals *"EXCEL"* for an Excel file.

---
Main article: [onFileSaving](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving')

#####See Also#####
#include common-link-handleevents