---
id: GridBase.dataErrorOccurred
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
#include common-ref-elementparam with { element: "widget" }

##### field(e.error): Error
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object that defines the error.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onDataErrorOccurred](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onDataErrorOccurred.md '{basewidgetpath}/Configuration/#onDataErrorOccurred')

#####See Also#####
#include common-link-handleevents