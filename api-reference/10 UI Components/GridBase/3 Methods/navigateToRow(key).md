---
id: GridBase.navigateToRow(key)
---
---
##### shortDescription
Navigates to a row with the specified key.

##### param(key): any
The row's key.

---
This method performs the following actions:

1. Switches the UI component to the data page that contains the specified row.
1. Expands groups in which the row is nested (if rows are grouped and the groups are collapsed).
1. Scrolls the UI component to display the row (if the row is outside the viewport).

The following requirements apply when you use this method: 

- The UI component's [keyExpr](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/keyExpr.md '{basewidgetpath}/Configuration/#keyExpr') or the [store's](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') **key** option should be specified.

- Rows should be initially sorted by keys. You can sort them on the server or use a column's [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '{basewidgetpath}/Configuration/columns/#sortOrder') or the **DataSource**'s [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') option to sort the rows on the client.

- [Scrolling mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#mode) should not be *"infinite"*.

#####See Also#####
#include common-link-callmethods
- [Focused Row](/concepts/05%20Widgets/DataGrid/73%20Focused%20Row.md '/Documentation/Guide/Widgets/{WidgetName}/Focused_Row/')
