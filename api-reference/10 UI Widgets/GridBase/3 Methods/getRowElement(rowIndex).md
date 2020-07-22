---
id: GridBase.getRowElement(rowIndex)
---
---
##### shortDescription
Gets the container of a row with a specific index.

##### return: Array<Element> | jQuery | undefined
The row's container.

##### param(rowIndex): Number
The row's visible index. Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/') for more information.

---
Note that if the widget has [fixed columns](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/'), the method returns an array of two separate elements: with unfixed and with fixed columns.

#####See Also#####
#include common-link-callmethods