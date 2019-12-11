---
EventForAction: ..\4 Events\exported.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [exported](/api-reference/10%20UI%20Widgets/dxPivotGrid/4%20Events/exported.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Events/#exported') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Assign a function to perform a custom action after the exporting of grid data is completed.