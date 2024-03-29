This method performs the following actions:

1. Switches the UI component to the data page that contains the specified row.
2. Expands groups in which the row is nested.
3. Scrolls the UI component to display the row (if the row is outside the viewport).

The following requirements apply when you use this method: 

- The UI component's [keyExpr](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/keyExpr.md '{basewidgetpath}/Configuration/#keyExpr') or the [store's](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') **key** property should be specified.

- Rows should be initially sorted by keys. You can sort them on the server or use a column's [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '{basewidgetpath}/Configuration/columns/#sortOrder') or the **DataSource**'s [sort](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/sort.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort') property to sort the rows on the client.

If you enable the [remoteOperations](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/) property, the TreeList generates additional requests with comparison operators (for example, `<` and `>`) to calculate the page number where a row with a focused key is located. This logic does not work if ODataStore is bound to a table with GUID keys. You need to set the [autoNavigateToFocusedRow](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#autoNavigateToFocusedRow) property to **false** or disable the **remoteOperations** property to ensure it operates correctly.

#####See Also#####
#include common-link-callmethods
- [Focused Row](/concepts/05%20Widgets/DataGrid/73%20Focused%20Row.md '/Documentation/Guide/UI_Components/TreeList/Focused_Row/')
