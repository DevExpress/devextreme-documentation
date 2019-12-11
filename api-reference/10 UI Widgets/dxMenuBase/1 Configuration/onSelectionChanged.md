---
EventForAction: ..\4 Events\selectionChanged.md
default: null
type: function
---
---
##### shortDescription
A handler for the [selectionChanged](/api-reference/10%20UI%20Widgets/dxMenuBase/4%20Events/selectionChanged.md '{basewidgetpath}/Events/#selectionChanged') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.addedItems): array
An array of items added to selection.

##### field(e.removedItems): array
An array of items removed from selection.

---
This option makes sense only if the [selectionMode](/api-reference/10%20UI%20Widgets/dxMenuBase/1%20Configuration/selectionMode.md '{basewidgetpath}/Configuration/#selectionMode') option is set to *'single'* and the [selectByClick](/api-reference/10%20UI%20Widgets/dxMenuBase/1%20Configuration/selectByClick.md '{basewidgetpath}/Configuration/#selectByClick') option is set to *true*.

Assign a function to perform a custom action after a collection item is selected or unselected.