---
EventForAction: ..\4 Events\selectAllValueChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [selectAllValueChanged](/api-reference/10%20UI%20Widgets/dxList/4%20Events/selectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#selectAllValueChanged') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.value): boolean
Specifies the select all check box state.

---
Assign a function to perform a custom action when the select all check box value is changed.

Note that this event fires only if the [selectionMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode') option is set to *'all'*.

#####See Also#####
- [List - Handle Selection-Related Events](/concepts/05%20Widgets/List/25%20Selection/10%20Events.md '/Documentation/Guide/Widgets/List/Selection/#Events')