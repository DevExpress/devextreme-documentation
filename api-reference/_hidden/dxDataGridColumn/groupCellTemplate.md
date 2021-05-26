---
id: dxDataGridColumn.groupCellTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for group cells (group rows).

##### param(cellElement): DxElement
#include common-ref-elementparam with { element: "current group cell" }

##### param(cellInfo): Object
The current group cell's properties.

##### field(cellInfo.column): dxDataGridColumn
The settings of the column the cell belongs to.

##### field(cellInfo.columnIndex): Number
The index of the column the cell belongs to.        
Refer to the [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_and_Row_Indexes/') topic for more information on how this index is calculated.

##### field(cellInfo.component): dxDataGrid
The UI component's instance.

##### field(cellInfo.data): Object
An object of the following structure:

    {
        key: "Group 1", // The group's name
        items: [        // Data objects that fall into the group
            { ... }, 
            { ... },
            // ...
        ]
    }

##### field(cellInfo.displayValue): any
The value displayed in the group cell. Differs from the **value** field only when the column to which the cell belongs uses [lookup](/api-reference/_hidden/GridBaseColumn/lookup '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/').

##### field(cellInfo.groupContinuedMessage): String
Contains the **grouping**.[groupContinuedMessage](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/grouping/texts/groupContinuedMessage.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/texts/#groupContinuedMessage') if the current group is continued from the previous page. Otherwise, this field is **undefined**.

##### field(cellInfo.groupContinuesMessage): String
Contains the **grouping**.[groupContinuesMessage](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/grouping/texts/groupContinuesMessage.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/texts/#groupContinuesMessage') if the current group continues on the next page. Otherwise, this field is **undefined**.

##### field(cellInfo.row): dxDataGridRowObject
The cell's row.

##### field(cellInfo.rowIndex): Number
The index of the row the cell belongs to. Begins with 0 on each page. Group rows are included.      
Refer to the [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_and_Row_Indexes/') topic for more information on row indexes.

##### field(cellInfo.summaryItems): Array<any>
[Group summary items](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/') displayed in the group row. Objects in this array have the structure of the group summary items extended by the **value** (the summary item value) and **columnCaption** (usually used to present a summary value) fields.

##### field(cellInfo.text): String
The group cell's value with applied [format](/api-reference/_hidden/dxDataGridColumn/format.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#format').

##### field(cellInfo.value): any
The group cell's value as it is specified in a data source.

##### return: any
<!-- Description goes here -->

---
The following details should be taken into account when you use a **groupCellTemplate**:

- When the DataGrid is [exported](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/'), it omits customizations made in the template. However, you can recreate them in the exported file using the ExcelJS API. To do so, use the [customizeCell](/api-reference/50%20Common/Object%20Structures/ExcelExportDataGridProps/customizeCell.md '/Documentation/ApiReference/Common/Object_Structures/ExcelExportDataGridProps/#customizeCell') function.

- In [fixed columns](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/'), the template is initialized and rendered twice for each cell.

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')
