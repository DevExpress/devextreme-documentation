---
id: dxDataGrid.Options.onFocusedRowChanging
type: function(e)
default: null
EventForAction: dxDataGrid.focusedRowChanging
---
---
##### shortDescription
A function that is executed before the focused row changes. Applies only when [focusedRowEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#focusedRowEnabled') is **true**.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel focusing a new row.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.newRowIndex): Number
The index of the row to be focused.

##### field(e.prevRowIndex): Number
The index of the previously focused row.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "to-be-focused row" }

##### field(e.rows): Array<dxDataGridRowObject>
The visible rows' properties.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FocusedRow/"
}

#####See Also#####
- [focusedRowIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#focusedRowIndex') | [focusedRowKey](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowKey.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#focusedRowKey')
- [focusedColumnIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedColumnIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#focusedColumnIndex')