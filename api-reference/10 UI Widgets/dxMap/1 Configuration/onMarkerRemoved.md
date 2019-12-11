---
EventForAction: ..\4 Events\markerRemoved.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [markerRemoved](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/markerRemoved.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#markerRemoved') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.options): Object
The removed marker's data.

---
Assign a function to perform a custom action after a marker is removed from the map.