---
id: GridBase.navigateToRow(key)
---
---
##### shortDescription
Navigates the grid to the data page that contains the row with the specified key and scrolls the grid to display the row if it is not in the viewport.

##### param(key): any
The row's key.

---
The following requirements apply when you use this method: 

- The widget's [keyExpr](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/keyExpr.md '{basewidgetpath}/Configuration/#keyExpr') or the [store's](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') **key** option should be specified.
- If [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '{basewidgetpath}/Configuration/remoteOperations/') are enabled and [focusedRowEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowEnabled.md '{basewidgetpath}/Configuration/#focusedRowEnabled') is **false**, rows should be sorted by keys initially. To sort rows on the client, specify the column's [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '{basewidgetpath}/Configuration/columns/#sortOrder') or the **DataSource**'s [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') option. Rows can also be received sorted from the server

#####See Also#####
- [Focused Row](/concepts/05%20Widgets/DataGrid/73%20Focused%20Row.md '/Documentation/Guide/Widgets/{WidgetName}/Focused_Row/')
