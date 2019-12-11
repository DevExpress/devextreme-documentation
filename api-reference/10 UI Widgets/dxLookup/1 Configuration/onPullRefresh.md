---
EventForAction: ..\4 Events\pullRefresh.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [pullRefresh](/api-reference/10%20UI%20Widgets/dxLookup/4%20Events/pullRefresh.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Events/#pullRefresh') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Assign a function to perform a custom action before the lookup list is refreshed as a result of the "pull down to refresh" gesture.