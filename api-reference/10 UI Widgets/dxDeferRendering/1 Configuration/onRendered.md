---
EventForAction: ..\4 Events\rendered.md
default: null
type: function(e)
---
---
##### shortDescription
Specifies a callback function that is called when the widget's content has finished rendering but is not yet shown.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
