---
EventForAction: ..\4 Events\hiding.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **hiding** event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.cancel): Boolean
Allows you to cancel overlay hiding.

---
Assign a function to perform a custom action before hiding the widget.