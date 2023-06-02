---
id: GridBase.Options.focusedRowEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the focused row feature is enabled.

---
When this property is set to **true**, the following applies:

- Rows are initially sorted by keys if any field of [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '{basewidgetpath}/Configuration/remoteOperations/') is **true**.
- The row with [focusedRowIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowIndex.md '{basewidgetpath}/Configuration/#focusedRowIndex') or [focusedRowKey](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowKey.md '{basewidgetpath}/Configuration/#focusedRowKey') is highlighted.
- When the data row area is focused, this row is focused and the area is scrolled down to it.
- The [onFocusedRowChanging](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onFocusedRowChanging.md '{basewidgetpath}/Configuration/#onFocusedRowChanging') and [onFocusedRowChanged](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onFocusedRowChanged.md '{basewidgetpath}/Configuration/#onFocusedRowChanged') functions become active.

[note] Specify the UI component's [keyExpr](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/keyExpr.md '{basewidgetpath}/Configuration/#keyExpr') or the [Store's](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') **key** property to ensure that the focused row feature works properly.

DataGrid generates additional requests with comparison operators (for example, `<` and `>`) to calculate the page number where a row with a focused key is located. This logic does not work for certain key types (for example, GUID) and data providers (for example, ODataStore). You need to disable the [autoNavigateToFocusedRow](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/autoNavigateToFocusedRow.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#autoNavigateToFocusedRow') property or set [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/') to **false** to ensure it operates correctly.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/FocusedRow/"
}

#####See Also#####
- [navigateToRow(key)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/navigateToRow(key).md '{basewidgetpath}/Methods/#navigateToRowkey')
- [focusedColumnIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedColumnIndex.md '{basewidgetpath}/Configuration/#focusedColumnIndex')
- **key** in [ArrayStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') | [CustomStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') | [LocalStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') | [ODataStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key')