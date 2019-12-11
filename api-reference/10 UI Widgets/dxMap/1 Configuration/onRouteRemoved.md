---
EventForAction: ..\4 Events\routeRemoved.md
default: null
type: function
---
---
##### shortDescription
A handler for the [routeRemoved](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/routeRemoved.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#routeRemoved') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.options): object
Returns the object that defines the currently removed route in the "markers" array.

---
Assign a function to perform a custom action after a route is removed from the map.