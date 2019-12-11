---
EventForAction: ..\4 Events\selectionChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [selectionChanged](/api-reference/10%20UI%20Widgets/dxTagBox/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Events/#selectionChanged') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.addedItems): array
Provides access to the newly added items.

##### field(e.removedItems): array
Provides access to the newly unselected items.

---
Assign a function to perform a custom action when the selection changes.