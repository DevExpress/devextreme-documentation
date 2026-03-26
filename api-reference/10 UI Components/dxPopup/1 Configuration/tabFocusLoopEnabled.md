---
id: dxPopup.Options.tabFocusLoopEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether focus loops within the popup content when the Tab key is pressed.

---
When this option is `true` and the popup has input focus, the Tab key cycles through focusable elements in that popup. When focus reaches the last focusable element, the Tab key moves focus to the first focusable element. Shift+Tab combination reverses the focus order.

When this option is `false` (default) and input focus is on the last focusable element, the Tab key moves focus outside the popup.

This option has no effect when [shading](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#shading) is enabled. In this case, focus always loops within the popup content regardless of the `tabFocusLoopEnabled` option value.