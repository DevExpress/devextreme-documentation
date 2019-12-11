---
type: eventType
---
---
##### shortDescription
Raised before a row is expanded.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.key): any
The key of the group or master row.

##### field(e.cancel): boolean
Allows you to cancel row expansion.

---
Main article: [onRowExpanding](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowExpanding.md '{basewidgetpath}/Configuration/#onRowExpanding')

#####See Also#####
#include common-link-handleevents