---
id: dxDataGridColumnButton.onClick
type: function(e)
---
---
##### shortDescription
A function that is executed when the button is clicked or tapped.

##### param(e): ui/data_grid:ColumnButtonClickEvent
Information about the event that caused the function's execution.

##### field(e.column): dxDataGridColumn
The properties of the button's column.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.row): dxDataGridRowObject
The properties of the button's row.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CommandColumnCustomization/"
}