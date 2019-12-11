---
EventForAction: ..\4 Events\exporting.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed before data is exported.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.fileName): String
The name of the file to which data is about to be exported.

##### field(e.cancel): Boolean
Allows you to cancel exporting.

---
