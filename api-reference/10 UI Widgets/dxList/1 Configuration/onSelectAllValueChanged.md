---
EventForAction: ..\4 Events\selectAllValueChanged.md
default: null
type: function
---
---
##### shortDescription
A handler for the [selectAllValueChanged](/api-reference/10%20UI%20Widgets/dxList/4%20Events/selectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#selectAllValueChanged') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.value): boolean
Specifies the select all check box state.

---
Assign a function to perform a custom action when the select all check box value is changed.

Note that this event fires only if the [selectionMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode') option is set to *'all'*.