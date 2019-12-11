---
EventForAction: ..\4 Events\exported.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [exported](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/exported.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#exported') event.

##### param(e): Object
Information about the event.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

---
Assign a function to perform a custom action after the exporting of the grid data is completed.

#####See Also#####
- [Client-Side Exporting - Events](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting/10%20Events.md '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/#Events')
- [customizeExportData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeExportData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeExportData') - customizes grid columns and data before exporting.
- [onExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting') - allows you to request exporting details and prevent exporting.
- [onFileSaving](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving') - allows you to access exported data and/or prevent it from being saved into a file on the user's local storage.