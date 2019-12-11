---
EventForAction: ..\4 Events\ready.md
default: null
type: function
---
---
##### shortDescription
A handler for the [ready](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/ready.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#ready') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.originalMap): object
Provides access to the map instance of the current provider.

---
Assign a function to perform a custom action after a map is rendered.