---
type: eventType
---
---
##### shortDescription
Raised before a row is removed from the data source.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.data): object
The data of the row.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.cancel): boolean|Promise<void>
Allows you to cancel row removal.

---
Main article: [onRowRemoving](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoving.md '{basewidgetpath}/Configuration/#onRowRemoving')

#####See Also#####
#include common-link-handleevents