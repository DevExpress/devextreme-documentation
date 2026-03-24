---
id: dxPopup.Options.tabFocusLoopEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether focus loops within the popup content when the Tab key is pressed.

---
When this option is `true`, pressing the Tab key when focus is within the popup cycles through the focusable elements in the popup. When focus reaches the last focusable element, pressing Tab again moves focus to the first focusable element. Pressing Shift + Tab reverses the focus order.

When this option is `false` (default), pressing the Tab key on the last focusable element moves focus outside the popup.