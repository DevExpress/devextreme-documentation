---
id: dxDataGridColumn.cellTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for data cells.

##### param(cellElement): DxElement
#include common-ref-elementparam with { element: "current cell" }

##### param(cellInfo): Object
The cell's properties.

##### field(cellInfo.column): dxDataGridColumn
The column's properties.

##### field(cellInfo.columnIndex): Number
The index of the cell's column.         
For more information on how this index is calculated, refer to the [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_and_Row_Indexes/') topic.

##### field(cellInfo.component): dxDataGrid
The UI component's instance.

##### field(cellInfo.data): Object
The data of the row to which the cell belongs.

##### field(cellInfo.displayValue): any
The cell's display value. Differs from the **value** field only when the column uses [lookup](/api-reference/_hidden/GridBaseColumn/lookup '{basewidgetpath}/Configuration/columns/lookup/') or [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '{basewidgetpath}/Configuration/columns/#calculateDisplayValue').

##### field(cellInfo.oldValue): any
The cell's previous raw value. Defined only if [repaintChangesOnly](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/repaintChangesOnly.md '{basewidgetpath}/Configuration/#repaintChangesOnly') is **true**.

##### field(cellInfo.row): dxDataGridRowObject
The cell's row.

##### field(cellInfo.rowIndex): Number
The index of the cell's row. Begins with 0 on each page. Group rows are included.       
For details on row indexes, see the [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_and_Row_Indexes/') topic.

##### field(cellInfo.rowType): String
The row's [type](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row/rowType.md '{basewidgetpath}/Row/#rowType').

##### field(cellInfo.text): String
**displayValue** after applying [format](/api-reference/_hidden/dxDataGridColumn/format.md '{basewidgetpath}/Configuration/columns/#format') and [customizeText](/api-reference/_hidden/GridBaseColumn/customizeText.md '{basewidgetpath}/Configuration/columns/#customizeText').

##### field(cellInfo.value): any
The cell's raw value.

##### field(cellInfo.watch): function()
Allows you to track a variable and respond to value changes. Applies when [repaintChangesOnly](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/repaintChangesOnly.md '{basewidgetpath}/Configuration/#repaintChangesOnly') is **true**.       
This function has the following parameters:     

- **getter(data)**: <font size="-1">Function</font>        
A function that returns the variable that should be tracked.

- **handler(newValue)**: <font size="-1">Function</font>        
A function called when this variable changes.

##### return: any
A template name or container.

---
The following details should be taken into account when you use a **cellTemplate**:

- When the DataGrid is [exported](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/'), it omits customizations made in the template. However, you can recreate them in the exported file using the ExcelJS API. Use the [customizeCell](/api-reference/50%20Common/Object%20Structures/ExcelExportDataGridProps/customizeCell.md '/Documentation/ApiReference/Common/Object_Structures/ExcelExportDataGridProps/#customizeCell') function to do this. [View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSCellCustomization/)

- If you implement two-way data binding in your template, set [twoWayBindingEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/twoWayBindingEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#twoWayBindingEnabled') to **false** to switch off the built-in implementation of this feature.

- In [fixed columns](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/'), the template is initialized and rendered twice for each cell.

- Template values have no effect on data operations. Implement the column's [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue') or [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateDisplayValue') option to transform the cell's underlying value.

---
##### jQuery

The code snippet below uses the `watch` function. You can test the snippet in the [Real-Time Updates](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RealTimeUpdates/) demo.

Note the following:

- You cannot call `watch` in a cell in which you want to track data.
- The data in the cell where `watch` is called should remain constant.

<!-- ... -->

    <!-- tab: index.js -->
    $("#dataGridContainer").dxDataGrid({
        columns: [{
            dataField: 'ProductName', 
            dataType: 'string',
            cellTemplate(container, info) {
                const getter = (data) => data.Amount;
                const handler = (newValue) => {
                    container.css('background-color', newValue < 100000 ? 'red' : 'green');
                };
                info.watch(getter, handler);
                return $('<div>').text(info.data.ProductName);
            }
        }]
    });

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CellCustomization/"
}

#####See Also#####
- [Customize Cells Appearance](/concepts/05%20UI%20Components/DataGrid/15%20Columns/40%20Customize%20Cells/2%20Customize%20Cell%20Appearance.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Customize_Cells/#Customize_Cell_Appearance')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')
- [onCellPrepared](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onCellPrepared.md '{basewidgetpath}/Configuration/#onCellPrepared')
