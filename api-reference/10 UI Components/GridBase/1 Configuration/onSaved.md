---
id: GridBase.Options.onSaved
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after row changes are saved.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.changes): Array<DataChange>
Saved changes.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): TElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

---
<!-- Description goes here -->