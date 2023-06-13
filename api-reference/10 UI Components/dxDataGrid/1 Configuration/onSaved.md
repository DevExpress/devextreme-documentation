---
id: dxDataGrid.Options.onSaved
type: function(e)
---
---
##### shortDescription
A function that is executed after row changes are saved.

##### param(e): ui/data_grid:SavedEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.changes): Array<DataChange>
Saved changes.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowEditingAndEditingEvents/"
}