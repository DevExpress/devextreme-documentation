---
type: eventType
---
---
##### shortDescription
Raised before a new row is inserted into the data source.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.data): object
The data of the to-be-inserted row.

##### field(e.cancel): boolean|Promise<void>
Allows you to cancel row insertion.

---
Main article: [onRowInserting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowInserting.md '{basewidgetpath}/Configuration/#onRowInserting')

#####See Also#####
#include common-link-handleevents