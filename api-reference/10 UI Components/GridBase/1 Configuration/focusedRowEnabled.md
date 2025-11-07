---
id: GridBase.Options.focusedRowEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the focused row feature is enabled.

---
The component relies on the key ([focusedRowKey](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowKey.md '{basewidgetpath}/Configuration/#focusedRowKey')) or index ([focusedRowIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowIndex.md '{basewidgetpath}/Configuration/#focusedRowIndex')) of the focused row to maintain focus. Specify the key to ensure the focused row feature works correctly, as row indexes can change due to filtering or sorting operations. Utilize [keyExpr](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/keyExpr.md '{basewidgetpath}/Configuration/#keyExpr') or the **key** property of the component's [store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores').

[note] The focused row can change if it is hidden by filtering or searching operations. To maintain focus on the same row through those operations, set [selection](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection '{basewidgetpath}/Configuration/selection/').[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/mode.md '{basewidgetpath}/Configuration/selection/#mode') to "single" instead of enabling **focusedRowEnabled**.

If **focusedRowEnabled** is `true`, the component navigates to the page of the focused row and scrolls to it automatically when you modify **focusedRowKey** or **focusedRowIndex**. {WidgetName} also sorts records by key on data load when remote [filtering](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations/filtering.md '{basewidgetpath}/Configuration/remoteOperations/#filtering'), [sorting](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations/sorting.md '{basewidgetpath}/Configuration/remoteOperations/#sorting'), and [paging](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations/paging.md '{basewidgetpath}/Configuration/remoteOperations/#paging') are enabled. Assign `false` to [autoNavigateToFocusedRow](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/autoNavigateToFocusedRow.md '{basewidgetpath}/Configuration/#autoNavigateToFocusedRow') to disable these behaviors.

{WidgetName} generates requests with comparison operators (such as `<` and `>`) to calculate the page number of the focused row. This logic does not work for certain key types (such as GUID) and data providers (such as ODataStore). Disable [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/') to ensure the component navigates to the focused row correctly.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/FocusedRow/"
}

#####See Also#####
- [navigateToRow(key)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/navigateToRow(key).md '{basewidgetpath}/Methods/#navigateToRowkey')
- [focusedColumnIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedColumnIndex.md '{basewidgetpath}/Configuration/#focusedColumnIndex')
- **key** in [ArrayStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') | [CustomStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') | [LocalStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') | [ODataStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key')
- [onFocusedRowChanging](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onFocusedRowChanging.md '{basewidgetpath}/Configuration/#onFocusedRowChanging') | [onFocusedRowChanged](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onFocusedRowChanged.md '{basewidgetpath}/Configuration/#onFocusedRowChanged')