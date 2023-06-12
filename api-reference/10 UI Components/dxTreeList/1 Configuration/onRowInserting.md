---
id: dxTreeList.Options.onRowInserting
type: function(e)
---
---
##### shortDescription
A function that is executed before a new row is inserted into the data source.

##### param(e): ui/tree_list:RowInsertingEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.cancel): Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row insertion.       
**false** or a Promise resolved with **false** or **undefined** continues row insertion.

##### field(e.data): any
The data of the row that should be inserted.

---
<!-- Description goes here -->