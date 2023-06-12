---
id: dxDataGrid.Options.onRowUpdating
type: function(e)
---
---
##### shortDescription
A function that is executed before a row is updated in the data source.

##### param(e): ui/data_grid:RowUpdatingEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row updating.       
**false** or a Promise resolved with **false** or **undefined** continues row updating.

##### field(e.key): any
The row's key.

##### field(e.newData): Object
The row's updated data.

##### field(e.oldData): Object
The row's old data.

---
<!-- Description goes here -->