---
EventForAction: ..\4 Events\pullRefresh.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [pullRefresh](/api-reference/10%20UI%20Widgets/dxList/4%20Events/pullRefresh.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#pullRefresh') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Assign a function to perform a custom action before the list is refreshed as a result of the "pull down to refresh" gesture.

#####See Also#####
- [List - Touch-Screen Gestures](/concepts/05%20Widgets/List/45%20End-User%20Interaction/01%20Touch-Screen%20Gestures.md '/Documentation/Guide/Widgets/List/End-User_Interaction/Touch-Screen_Gestures/')