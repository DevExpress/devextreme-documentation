---
type: eventType
---
---
##### shortDescription
Raised when an error occurs in the data source.

##### param(e): Object
Information on the occurred error.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.error): Error
The standard [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object that defines the error.

---
Main article: [onDataErrorOccurred](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onDataErrorOccurred.md '{basewidgetpath}/Configuration/#onDataErrorOccurred')

#####See Also#####
#include common-link-handleevents