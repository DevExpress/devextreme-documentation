---
EventForAction: ..\4 Events\resize.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [resize](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/onResize.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#onResize') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Assign a function to perform a custom action each time the widget is resized by one pixel.