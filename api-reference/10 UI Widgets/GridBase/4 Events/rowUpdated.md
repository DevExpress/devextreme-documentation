---
type: eventType
---
---
##### shortDescription
Raised after a row has been updated in the data source.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.data): object
The updated data of the row; contains only those fields that have been updated.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.error): JavaScript Error object
The standard [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object defining an error that may occur during updating.

---
Main article: [onRowUpdated](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowUpdated.md '{basewidgetpath}/Configuration/#onRowUpdated')

#####See Also#####
#include common-link-handleevents