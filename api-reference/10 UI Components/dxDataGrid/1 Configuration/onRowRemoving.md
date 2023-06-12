---
id: dxDataGrid.Options.onRowRemoving
type: function(e)
---
---
##### shortDescription
A function that is executed before a row is removed from the data source.

##### param(e): ui/data_grid:RowRemovingEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row removal.       
**false** or a Promise resolved with **false** or **undefined** continues row removal.

##### field(e.data): any
The data of the row that should be removed.

##### field(e.key): any
The row's key.

---
<!-- Description goes here -->