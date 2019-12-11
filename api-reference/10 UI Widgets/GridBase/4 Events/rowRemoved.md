---
type: eventType
---
---
##### shortDescription
Raised after a row has been removed from the data source.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.data): Object
The data of the row.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.error): Error
The standard [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object defining an error that may occur during removal.

---
Main article: [onRowRemoved](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoved.md '{basewidgetpath}/Configuration/#onRowRemoved')

#####See Also#####
#include common-link-handleevents