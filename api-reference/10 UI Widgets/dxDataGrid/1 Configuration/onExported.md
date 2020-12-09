---
id: dxDataGrid.Options.onExported
type: function(e)
default: null
deprecated: Since v20.1, we recommend [ExcelJS-based export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/') which does not use this option.
---
---
##### shortDescription
A function that is executed after data is exported.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): dxDataGrid
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### return: any
<!-- Description goes here -->

---
You can use this function with the [onExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting') function to adjust columns before exporting. See an example in the **onExporting** description.

#####See Also#####
- [customizeExportData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeExportData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeExportData')
- [onFileSaving](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving')