---
EventForAction: ..\4 Events\selectionChanged.md
default: null
type: function
---
---
##### shortDescription
A handler for the [selectionChanged](/api-reference/10%20UI%20Widgets/dxTagBox/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Events/#selectionChanged') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.addedItems): array
Provides access to the newly added items.

##### field(e.removedItems): array
Provides access to the newly unselected items.

---
Assign a function to perform a custom action when the selection changes.