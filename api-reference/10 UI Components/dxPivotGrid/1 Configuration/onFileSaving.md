---
id: dxPivotGrid.Options.onFileSaving
type: function(e)
default: null
deprecated: Since v20.2, we recommend [ExcelJS-based export](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/export/') which does not use this property.
---
---
##### shortDescription
A function that is executed before a file with exported data is saved to the user's local storage.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel file saving.

##### field(e.component): dxPivotGrid
The UI component's instance.

##### field(e.data): Blob
Exported data as a BLOB.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.fileName): String
The name of the file to be saved.

##### field(e.format): String
The format of the file to be saved. Equals *'EXCEL'* for an Excel file.

---
