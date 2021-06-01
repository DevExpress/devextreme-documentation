---
id: dxDropDownButton.Options.onButtonClick
type: function(e) | String
default: null
---
---
##### shortDescription
A function that is executed when the button is clicked or tapped. If [splitButton](/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/splitButton.md '/Documentation/ApiReference/UI_Components/dxDropDownButton/Configuration/#splitButton') is **true**, this function is executed for the action button only.

##### param(e): Object
Information about the event that caused the function execution.

##### field(e.component): dxDropDownButton
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.selectedItem): Object
The selected item's data. Available when [useSelectMode](/api-reference/10%20UI%20Components/dxDropDownButton/1%20Configuration/useSelectMode.md '/Documentation/ApiReference/UI_Components/dxDropDownButton/Configuration/#useSelectMode') is **true**.

---
