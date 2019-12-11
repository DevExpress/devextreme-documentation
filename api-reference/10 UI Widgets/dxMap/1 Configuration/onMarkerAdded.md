---
EventForAction: ..\4 Events\markerAdded.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [markerAdded](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/markerAdded.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#markerAdded') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.options): Object
The added marker's data.

##### field(e.originalMarker): Object
The original marker that the current map provider uses (only for 'google' and 'bing' providers).

---
Assign a function to perform a custom action after a marker is added to the map.