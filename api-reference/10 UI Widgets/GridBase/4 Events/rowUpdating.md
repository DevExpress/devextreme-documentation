---
type: eventType
---
---
##### shortDescription
Raised before a row is updated in the data source.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.oldData): object
The old data of the row.

##### field(e.newData): object
The updated data of the row.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.cancel): boolean|Promise
Allows you to cancel row updating.

---
Main article: [onRowUpdating](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowUpdated.md '{basewidgetpath}/Configuration/#onRowUpdated')

#####See Also#####
#include common-link-handleevents