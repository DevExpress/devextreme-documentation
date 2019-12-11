---
EventForAction: ..\4 Events\dataErrorOccurred.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed when an error occurs in the data source.

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
Handles errors that might occur in the data source. To obtain a human-readable description of the error in the function, use the **error.message** field.