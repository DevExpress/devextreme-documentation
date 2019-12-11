---
type: eventType
---
---
##### shortDescription
Raised before a new row is inserted into the data source.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.data): object
The data of the to-be-inserted row.

##### field(e.cancel): boolean|Promise
Allows you to cancel insertion of the row.

---
Main article: [onRowInserting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowInserting.md '{basewidgetpath}/Configuration/#onRowInserting')

#####See Also#####
#include common-link-handleevents