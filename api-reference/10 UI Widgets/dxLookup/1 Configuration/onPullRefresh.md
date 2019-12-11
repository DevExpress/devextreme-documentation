---
EventForAction: ..\4 Events\pullRefresh.md
default: null
type: function
---
---
##### shortDescription
A handler for the [pullRefresh](/api-reference/10%20UI%20Widgets/dxLookup/4%20Events/pullRefresh.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Events/#pullRefresh') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Assign a function to perform a custom action before the lookup list is refreshed as a result of the "pull down to refresh" gesture.