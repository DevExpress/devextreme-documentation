---
EventForAction: ..\4 Events\rowExpanding.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed before a row is expanded.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.key): any
The key of the group or master row.

##### field(e.cancel): Boolean
Allows you to cancel row expansion.

---
To cancel row expansion, assign **true** to the **cancel** field of the function parameter.