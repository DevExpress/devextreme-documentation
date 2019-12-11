---
EventForAction: ..\4 Events\markerAdded.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [markerAdded](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/markerAdded.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#markerAdded') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.options): object
Returns the object that defines the currently added marker in the "markers" array

##### field(e.originalMarker): object
Returns an original marker object used by the current map provider (only for 'google' and 'bing' providers).

---
Assign a function to perform a custom action after a marker is added to the map.