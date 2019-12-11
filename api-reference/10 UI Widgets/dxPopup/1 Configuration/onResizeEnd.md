---
EventForAction: ..\4 Events\resizeEnd.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [resizeEnd](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/onResizeEnd.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#onResizeEnd') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to data that is available for binding against the element. Available only in the Knockout approach.

---
Assign a function to perform a custom action after resizing has been completed.