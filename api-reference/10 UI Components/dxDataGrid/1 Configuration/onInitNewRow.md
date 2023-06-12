---
id: dxDataGrid.Options.onInitNewRow
type: function(e)
---
---
##### shortDescription
A function that is executed before a new row is added to the UI component.

##### param(e): ui/data_grid:InitNewRowEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.data): any
The data of the inserted row; initially empty.

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---
<!-- Description goes here -->