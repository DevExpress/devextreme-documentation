---
EventForAction: ..\4 Events\selectionChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [selectionChanged](/api-reference/10%20UI%20Widgets/dxDropDownList/4%20Events/selectionChanged.md '{basewidgetpath}/Events/#selectionChanged') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.selectedItem): object
Provides access to the currently selected item.

---
Assign a function to perform a custom action when the selection changes.