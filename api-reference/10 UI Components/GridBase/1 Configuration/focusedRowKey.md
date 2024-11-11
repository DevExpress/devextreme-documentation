---
id: GridBase.Options.focusedRowKey
type: any | undefined
default: undefined
firedEvents: focusedRowChanged
---
---
##### shortDescription
Specifies initially or currently focused grid row's key.

---
Ensure that [focusedRowEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowEnabled.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#focusedRowEnabled') is `true` for **focusedRowKey** to work.

The focused row has a key and [index](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowIndex.md '{basewidgetpath}/Configuration/#focusedRowIndex') on a page. When the [pager](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/pager '{basewidgetpath}/Configuration/pager/') is used for navigation, the focused row's index persists from page to page but corresponds to a different row with a different key on each page.

In the DataGrid, group rows can also be focused. See the [Group Index and Key](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/20%20API/05%20Group%20Index%20and%20Key.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#API/Group_Index_and_Key') topic for more information on how group keys are formed.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/FocusedRow/"
}

#####See Also#####
- [focusedRowIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedRowIndex.md '{basewidgetpath}/Configuration/#focusedRowIndex')
- [onFocusedRowChanging](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onFocusedRowChanging.md '{basewidgetpath}/Configuration/#onFocusedRowChanging') | [onFocusedRowChanged](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onFocusedRowChanged.md '{basewidgetpath}/Configuration/#onFocusedRowChanged')
- [focusedColumnIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/focusedColumnIndex.md '{basewidgetpath}/Configuration/#focusedColumnIndex')