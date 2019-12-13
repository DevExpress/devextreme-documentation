---
id: GridBase.Options.focusedRowEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the focused row feature is enabled.

---
When this option is set to **true**, the following applies:

- Rows are initially sorted by keys if any field of [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '{basewidgetpath}/Configuration/remoteOperations/') is **true**.
- The row with [focusedRowIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowIndex.md '{basewidgetpath}/Configuration/#focusedRowIndex') or [focusedRowKey](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '{basewidgetpath}/Configuration/#focusedRowKey') is highlighted.
- When the data row area is focused, this row is focused and the area is scrolled down to it.
- The [onFocusedRowChanging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedRowChanging.md '{basewidgetpath}/Configuration/#onFocusedRowChanging') and [onFocusedRowChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onFocusedRowChanged.md '{basewidgetpath}/Configuration/#onFocusedRowChanged') functions become active.

[note] Specify the widget's [keyExpr](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/keyExpr.md '{basewidgetpath}/Configuration/#keyExpr') or the [Store's](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') **key** option to ensure that the focused row feature works properly.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FocusedRow/"
}

#####See Also#####
- [navigateToRow(key)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/navigateToRow(key).md '{basewidgetpath}/Methods/#navigateToRowkey')
- [focusedColumnIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedColumnIndex.md '{basewidgetpath}/Configuration/#focusedColumnIndex')
- **key** in [ArrayStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') | [CustomStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') | [LocalStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') | [ODataStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key')