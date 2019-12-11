---
type: eventType
---
---
##### shortDescription
Fires each time the widget is resized by one pixel.

##### param(e): object
Provides function parameters.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Instead, you can use the [onResize](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/onResize.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#onResize') option to handle the event.

#####See Also#####
#include common-link-handleevents