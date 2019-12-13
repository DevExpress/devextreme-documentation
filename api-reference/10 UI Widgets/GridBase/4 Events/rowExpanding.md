---
id: GridBase.rowExpanding
type: eventType
---
---
##### shortDescription
Raised before a row is expanded.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel row expansion.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the group or master row.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onRowExpanding](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowExpanding.md '{basewidgetpath}/Configuration/#onRowExpanding')

#####See Also#####
#include common-link-handleevents