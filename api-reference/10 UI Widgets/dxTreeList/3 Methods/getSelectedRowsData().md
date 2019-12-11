---
##### shortDescription
Gets the data objects of the rows selected explicitly [via the API](/concepts/05%20Widgets/TreeList/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/Widgets/TreeList/Selection/#API/Initial_and_Runtime_Selection') or via a click or tap.

##### return: Array<any>
The selected rows' data objects.

---
[note][Calculated values](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateCellValue') cannot be obtained because this method gets data objects from the data source.

#####See Also#####
#include common-link-callmethods
- [getSelectedRowsData(mode)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/getSelectedRowsData(mode).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowsDatamode')
- [cellValue(rowIndex, dataField)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_dataField')
- [cellValue(rowIndex, visibleColumnIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_visibleColumnIndex).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_visibleColumnIndex')