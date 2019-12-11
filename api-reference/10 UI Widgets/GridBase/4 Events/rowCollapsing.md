---
type: eventType
---
---
##### shortDescription
Raised before a row is collapsed.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.key): any
The key of the row.

##### field(e.cancel): boolean
Allows you to cancel row collapsing.

---
Main article: [onRowCollapsing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowCollapsing.md '{basewidgetpath}/Configuration/#onRowCollapsing')

#####See Also#####
#include common-link-handleevents