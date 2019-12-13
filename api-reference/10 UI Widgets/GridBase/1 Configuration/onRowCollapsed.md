---
id: GridBase.Options.onRowCollapsed
type: function(e)
default: null
EventForAction: GridBase.rowCollapsed
---
---
##### shortDescription
A function that is executed after a row is collapsed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the row.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
