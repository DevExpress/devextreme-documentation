---
EventForAction: ..\4 Events\markerRemoved.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [markerRemoved](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/markerRemoved.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#markerRemoved') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.options): object
Returns the object that defines the currently removed marker in the "markers" array.

---
Assign a function to perform a custom action after a marker is removed from the map.