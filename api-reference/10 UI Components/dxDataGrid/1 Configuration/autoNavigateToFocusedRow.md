---
##### shortDescription
Automatically scrolls the component to the focused row when the [focusedRowKey](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#focusedRowKey') is changed. Incompatible with infinite [scrolling mode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/scrolling/#mode).

---

[note] You must specify the component's [height](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#height) to ensure that the **autoNavigateToFocusedRow** property works properly.

If you set the [remoteOperations](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/) property to **true**, the DataGrid generates additional requests with comparison operators (for example, `<and>`). This logic does not work if ODataStore is bound to a table with GUID keys. You need to disable the **autoNavigateToFocusedRow** or **remoteOperations** properties for proper operation.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FocusedRow/"
}