---
EventForAction: ..\4 Events\initialized.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed only once, after the widget is initialized.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

---
You cannot access widget elements in this function because it is executed before they are ready.