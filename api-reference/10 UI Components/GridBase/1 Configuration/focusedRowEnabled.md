---
id: GridBase.Options.focusedRowEnabled
type: Boolean
default: false
firedEvents: focusedRowChanging, focusedRowChanged
---
---
##### shortDescription
Specifies whether the focused row feature is enabled.

---
The component relies on either the key ([focusedRowKey](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowKey.md '{basewidgetpath}/Configuration/#focusedRowKey')) or index ([focusedRowIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowIndex.md '{basewidgetpath}/Configuration/#focusedRowIndex')) of the focused row to maintain focus. Specify a key to ensure the focused row feature works reliably, as row indexes can change due to filtering or sorting operations. Utilize [keyExpr]({basewidgetpath}/Configuration/#keyExpr) or the **key** property of the component's [store](/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores).

[note] The focused row can change if it is hidden by filtering or searching operations. To maintain focus on the same row through filtering and searching operations, set [selection]({basewidgetpath}/Configuration/selection/).[mode]({basewidgetpath}/Configuration/selection/#mode) to "single" instead of enabling **focusedRowEnabled**.

The component navigates to the page of the focused row and scrolls to it automatically when you modify **focusedRowKey** or **focusedRowIndex**. Assign `false` to [autoNavigateToFocusedRow]({basewidgetpath}/Configuration/#autoNavigateToFocusedRow) to disable this behavior.

{WidgetName} generates requests with comparison operators (such as `<` and `>`) to calculate the page number of the focused row. This logic does not work for certain key types (such as GUID) and data providers (such as ODataStore). Disable [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/') to ensure the component navigates to the focused row correctly.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/FocusedRow/"
}

#####See Also#####
- [navigateToRow(key)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/navigateToRow(key).md '{basewidgetpath}/Methods/#navigateToRowkey')
- [focusedColumnIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedColumnIndex.md '{basewidgetpath}/Configuration/#focusedColumnIndex')
- **key** in [ArrayStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') | [CustomStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') | [LocalStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') | [ODataStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key')
- [onFocusedRowChanging]({basewidgetpath}/Configuration/#onFocusedRowChanging) | [onFocusedRowChanged]({basewidgetpath}/Configuration/#onFocusedRowChanged)