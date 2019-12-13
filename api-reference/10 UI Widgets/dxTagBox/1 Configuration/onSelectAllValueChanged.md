---
id: dxTagBox.Options.onSelectAllValueChanged
type: function(e)
default: null
EventForAction: dxTagBox.selectAllValueChanged
---
---
##### shortDescription
A function that is executed when the "Select All" check box value is changed. Applies only if [showSelectionControls](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/showSelectionControls.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showSelectionControls') is **true**.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.value): Boolean
The "Select All" check box's state.

---
