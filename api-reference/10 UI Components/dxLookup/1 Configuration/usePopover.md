---
id: dxLookup.Options.usePopover
type: Boolean
default: false, false (Material), true (desktop, iOS)
---
---
##### shortDescription
Specifies whether to show lookup contents in the [Popover](/api-reference/10%20UI%20Components/dxPopover '/Documentation/ApiReference/UI_Components/dxPopover/') UI component.

---
Lookup contents can be displayed in a Popover only if [dropDownOptions](/api-reference/10%20UI%20Components/dxLookup/1%20Configuration/dropDownOptions.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#dropDownOptions').**fullScreen** is disabled. Otherwise, lookup contents are displayed within the [Popup](/api-reference/10%20UI%20Components/dxPopup '/Documentation/ApiReference/UI_Components/dxPopup/') UI component.

[Material Design themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') always use the Popup UI component, ignoring the **usePopover** property.
