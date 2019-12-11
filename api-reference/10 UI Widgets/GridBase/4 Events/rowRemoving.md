---
type: eventType
---
---
##### shortDescription
Raised before a row is removed from the data source.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.data): Object
The data of the row that should be removed.

##### field(e.key): any
The row's key.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row removal.       
**false** or a Promise resolved with **false** or **undefined** continues row removal.

---
Main article: [onRowRemoving](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoving.md '{basewidgetpath}/Configuration/#onRowRemoving')

#####See Also#####
#include common-link-handleevents