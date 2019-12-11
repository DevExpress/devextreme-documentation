---
EventForAction: ..\4 Events\exporting.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [exporting](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/exporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#exporting') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.fileName): string
The name of the file to which grid data is about to be exported.

##### field(e.cancel): boolean
Indicates whether or not to cancel exporting.

---
Assign a function to perform a custom action before exporting grid data.

#####See Also#####
- [export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/') - configures client-side exporting.
- [customizeExportData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeExportData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeExportData') - customizes grid columns and data before exporting.
- [onExported](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExported.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported') - allows you to notify an end user when exporting is completed.
- [onFileSaving](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving') - allows you to access exported data and/or prevent it from being saved into a file on the user's local storage.