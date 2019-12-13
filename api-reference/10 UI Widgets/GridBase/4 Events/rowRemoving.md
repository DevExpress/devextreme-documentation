---
id: GridBase.rowRemoving
type: eventType
---
---
##### shortDescription
Raised before a row is removed from the data source.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row removal.       
**false** or a Promise resolved with **false** or **undefined** continues row removal.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row that should be removed.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The row's key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onRowRemoving](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoving.md '{basewidgetpath}/Configuration/#onRowRemoving')

#####See Also#####
#include common-link-handleevents