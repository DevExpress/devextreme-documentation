---
type: eventType
---
---
##### shortDescription
Fires before the grid saves an Excel file with exported data on the user's local storage.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.fileName): string
The name of the file to be saved.

##### field(e.format): string
The format of the file to be saved. Equals *'EXCEL'* for an Excel file.

##### field(e.data): blob
Exported data as a BLOB.

##### field(e.cancel): boolean
To cancel file saving, assign **true** to this parameter.

---
Instead, you can use the [onFileSaving](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving') option to handle the event.

#####See Also#####
#include common-link-handleevents