---
##### shortDescription
Gets a cell with a specific row index and a data field, column caption or name.

##### param(rowIndex): Number
The index of the row to which the cell belongs. Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/') for more information.

##### param(dataField): String
The [data field](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataField.md '{basewidgetpath}/Configuration/columns/#dataField'), [caption](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/caption.md '{basewidgetpath}/Configuration/columns/#caption'), or [unique name](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/name.md '{basewidgetpath}/Configuration/columns/#name') of the column to which the cell belongs.

##### return: dxElement|undefined
The cell's container. An [HTML element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery element](https://api.jquery.com/Types/#jQuery) when you use jQuery. If the specified row or data field does not exist, the method returns **undefined**.

---
#####See Also#####
#include common-link-callmethods