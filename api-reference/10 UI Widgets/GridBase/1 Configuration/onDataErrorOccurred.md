---
id: GridBase.Options.onDataErrorOccurred
type: function(e)
default: null
EventForAction: GridBase.dataErrorOccurred
---
---
##### shortDescription
A function that is executed when an error occurs in the data source.

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
Handles errors that might occur in the data source. To obtain a human-readable description of the error in the function, use the **error.message** field.