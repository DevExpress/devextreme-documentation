---
id: dxDataGridColumn.headerCellTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for column headers.

##### param(columnHeader): DxElement
#include common-ref-elementparam with { element: "current header" }

##### param(headerInfo): Object
The header's properties.

##### field(headerInfo.column): dxDataGridColumn
The settings of the column to which the header belongs.

##### field(headerInfo.columnIndex): Number
The index of the column to which the header belongs.

##### field(headerInfo.component): dxDataGrid
The UI component's instance.

##### return: any
<!-- Description goes here -->

---
When the DataGrid is [exported](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/'), it omits customizations made in this template. However, you can recreate them in the exported file using the ExcelJS API. To do so, use the [customizeCell](/api-reference/50%20Common/Object%20Structures/ExcelExportDataGridProps/customizeCell.md '/Documentation/ApiReference/Common/Object_Structures/ExcelExportDataGridProps/#customizeCell') function.

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')
