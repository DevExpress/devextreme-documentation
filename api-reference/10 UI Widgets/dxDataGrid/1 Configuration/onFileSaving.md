---
EventForAction: ..\4 Events\fileSaving.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [fileSaving](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/fileSaving.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#fileSaving') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.fileName): string
The name of the file to be saved.

##### field(e.format): string
The format of the file to be saved. Equals to <i>'EXCEL'</i> for an Excel file.

##### field(e.data): blob
Exported data as a BLOB.

##### field(e.cancel): boolean
To cancel file saving, assign <i>true</i> to this parameter.

---
Assign a function to perform a custom action before an Excel file with exported data will be saved on the user's local storage.

#####See Also#####
- [onExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting') - allows you to request exporting details and prevent exporting.
- [onExported](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExported.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported') - allows you to notify an end user when exporting is completed.