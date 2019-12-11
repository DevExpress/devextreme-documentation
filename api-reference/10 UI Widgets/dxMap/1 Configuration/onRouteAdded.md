---
EventForAction: ..\4 Events\routeAdded.md
default: null
type: function
---
---
##### shortDescription
A handler for the [routeAdded](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/routeAdded.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#routeAdded') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.options): object
Returns the object that defines the currently added route in the "routes" array.

##### field(e.originalRoute): object
Returns an original route object used by the current map provider (only for 'google' and 'bing' providers).

---
Assign a function to perform a custom action after a route is added to the map.