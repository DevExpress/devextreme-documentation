---
type: eventType
---
---
##### shortDescription
Raised when an error occurs in the data source.

##### param(e): object
Information on the occurred error.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.error): JavaScript Error object
The standard [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object that defines the error.

---
Main article: [onDataErrorOccurred](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onDataErrorOccurred.md '{basewidgetpath}/Configuration/#onDataErrorOccurred')

#####See Also#####
#include common-link-handleevents