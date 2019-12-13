---
id: GridBase.rowInserting
type: eventType
---
---
##### shortDescription
Raised before a new row is inserted into the data source.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row insertion.      
**false** or a Promise resolved with **false** or **undefined** continues row insertion.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row that should be inserted.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onRowInserting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowInserting.md '{basewidgetpath}/Configuration/#onRowInserting')

#####See Also#####
#include common-link-handleevents