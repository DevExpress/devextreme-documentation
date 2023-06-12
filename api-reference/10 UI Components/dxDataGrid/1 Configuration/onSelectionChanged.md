---
id: dxDataGrid.Options.onSelectionChanged
type: function(e)
---
---
##### shortDescription
A function that is executed after selecting a row or clearing its selection.

##### param(e): ui/data_grid:SelectionChangedEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.currentDeselectedRowKeys): Array<any>
The keys of the rows whose selection has been cleared.

##### field(e.currentSelectedRowKeys): Array<any>
The keys of the rows that have been selected.

##### field(e.selectedRowKeys): Array<any>
The keys of all selected rows.

##### field(e.selectedRowsData): Array<Object>
The data of all selected rows.     
Does not include [calculated values](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue').

---
<!-- Description goes here -->