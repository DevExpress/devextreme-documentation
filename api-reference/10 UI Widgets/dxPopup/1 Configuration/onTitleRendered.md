---
EventForAction: ..\4 Events\titleRendered.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed when the widget's [title](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/title.md '{basewidgetpath}/Configuration/#title') is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.titleElement): dxElement
The title's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

---
