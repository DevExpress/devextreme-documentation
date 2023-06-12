---
id: dxTreeList.Options.onRowExpanding
type: function(e)
---
---
##### shortDescription
A function that is executed before a row is expanded.

##### param(e): ui/tree_list:RowExpandingEvent
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel row expansion.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.key): any
The key of the group or master row.

---
<!-- Description goes here -->