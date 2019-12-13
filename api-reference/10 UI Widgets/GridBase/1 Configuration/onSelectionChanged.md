---
id: GridBase.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: GridBase.selectionChanged
---
---
##### shortDescription
A function that is executed after selecting a row or clearing its selection.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.currentDeselectedRowKeys): Array<any>
The keys of the rows whose selection has been cleared.

##### field(e.currentSelectedRowKeys): Array<any>
The keys of the rows that have been selected.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.selectedRowKeys): Array<any>
The keys of all selected rows.

##### field(e.selectedRowsData): Array<Object>
The data of all selected rows.     
Does not include [calculated values](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue').

---
This function has the following specifics:

- If a field providing key values is not specified in the data source, the whole data object is considered the key. In this case, all arrays passed to the function contain data objects instead of keys.
- When selection is [deferred](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '{basewidgetpath}/Configuration/selection/#deferred'), this function does not provide access to keys and data. Use the [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '{basewidgetpath}/Methods/#getSelectedRowsData') or [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '{basewidgetpath}/Methods/#getSelectedRowKeys') method instead.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/RowSelection/"
}