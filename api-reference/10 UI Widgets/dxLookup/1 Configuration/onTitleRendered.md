---
EventForAction: ..\4 Events\titleRendered.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [titleRendered](/api-reference/10%20UI%20Widgets/dxLookup/4%20Events/titleRendered.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Events/#titleRendered') event.

##### param(e): Object
Provides function parameters.

##### field(e.titleElement): jQuery
The HTML element of the item title.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Assign a function to perform a custom action after a collection item title is rendered.