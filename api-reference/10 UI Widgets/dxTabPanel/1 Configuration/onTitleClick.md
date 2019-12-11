---
EventForAction: ..\4 Events\titleClick.md
default: null
type: function() | String
---
---
##### shortDescription
A handler for the [titleClick](/api-reference/10%20UI%20Widgets/dxTabPanel/4%20Events/titleClick.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Events/#titleClick') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the item whose item is clicked.

##### field(e.itemElement): jQuery
An HTML element of the item.

---
Assign a function to perform a custom action when a widget item title is clicked.