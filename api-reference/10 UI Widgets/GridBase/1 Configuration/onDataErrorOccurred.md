---
EventForAction: ..\4 Events\dataErrorOccurred.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **dataErrorOccurred** event. Executed when an error occurs in the data source.

##### param(e): Object
Information on the occurred error.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.error): JavaScript Error object
The standard [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object that defines the error.

---
Handles errors that might occur in the data source. To obtain a human-readable description of the error in the handler, use the **error.message** field.