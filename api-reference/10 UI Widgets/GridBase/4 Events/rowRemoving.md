---
type: eventType
---
---
##### shortDescription
Raised before a row is removed from the data source.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.data): object
The data of the row.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.cancel): boolean|Promise
Allows you to cancel removal of the row.

---
Main article: [onRowRemoving](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoving.md '{basewidgetpath}/Configuration/#onRowRemoving')

#####See Also#####
#include common-link-handleevents