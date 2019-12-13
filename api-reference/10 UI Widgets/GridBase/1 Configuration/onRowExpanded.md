---
id: GridBase.Options.onRowExpanded
type: function(e)
default: null
EventForAction: GridBase.rowExpanded
---
---
##### shortDescription
A function that is executed after a row is expanded.

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
