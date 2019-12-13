---
id: GridBase.initNewRow
type: eventType
---
---
##### shortDescription
Raised before a new row is added to the widget.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the inserted row; initially empty.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---
Main article: [onInitNewRow](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onInitNewRow.md '{basewidgetpath}/Configuration/#onInitNewRow')

#####See Also#####
#include common-link-handleevents
