---
EventForAction: ..\4 Events\fileSaving.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [fileSaving](/api-reference/10%20UI%20Widgets/dxPivotGrid/4%20Events/fileSaving.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Events/#fileSaving') event.

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
Assign a function to perform a custom action before an Excel file with [exported](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/export/') data will be saved on the user's local storage.