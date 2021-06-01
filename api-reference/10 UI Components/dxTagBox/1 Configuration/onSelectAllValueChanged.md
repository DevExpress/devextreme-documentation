---
id: dxTagBox.Options.onSelectAllValueChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the "Select All" check box value is changed. Applies only if [showSelectionControls](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/showSelectionControls.md '/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showSelectionControls') is **true**.

##### param(e): Object
Information about the event.

##### field(e.component): dxTagBox
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.value): Boolean
The "Select All" check box's state.

---
