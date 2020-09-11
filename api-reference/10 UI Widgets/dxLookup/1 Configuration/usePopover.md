---
id: dxLookup.Options.usePopover
type: Boolean
default: false, true (desktop, iOS), false (Material)
---
---
##### shortDescription
Specifies whether to show lookup contents in the [Popover](/api-reference/10%20UI%20Widgets/dxPopover '/Documentation/ApiReference/UI_Widgets/dxPopover/') widget.

---
Lookup contents can be displayed in a **Popover** only if [dropDownOptions](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/dropDownOptions.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#dropDownOptions').**fullScreen** is disabled. Otherwise, lookup contents are displayed within the [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/') widget.

[Material Design themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') always use the **Popup** widget, ignoring the **usePopover** option.
