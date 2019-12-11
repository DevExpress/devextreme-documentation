---
type: eventType
---
---
##### shortDescription
Fires when the select all check box value changes.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.value): boolean
Specifies the select all check box state.

---
Instead, you can use the [onSelectAllValueChanged](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/onSelectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onSelectAllValueChanged') option to handle the event.

[note]This event fires only if the [showSelectionControls](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/showSelectionControls.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showSelectionControls') option is set to **true**.

#####See Also#####
#include common-link-handleevents