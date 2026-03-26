---
id: dxPopup.Options.tabFocusLoopEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether focus stays within the popup content when the Tab key is pressed.

---
When this option is `true` and the popup has focus, the Tab key cycles through focusable elements in the popup. After the last focusable element, focus returns to the first element. Press Shift+Tab to move focus in reverse order.

When this option is `false` (default) and focus is on the last focusable element, the Tab key moves focus outside the popup.

This option has no effect when [shading](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#shading) is enabled. In this case, focus always stays within the pop-up content, regardless of the `tabFocusLoopEnabled` value.