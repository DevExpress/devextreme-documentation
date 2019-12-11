---
id: dxPopup.Options.animation
default: { show: { type: 'slide', duration: 400, from: { position: { my: 'top', at: 'bottom', of: window } }, to: { position: { my: 'center', at: 'center', of: window } } }, hide: { type: 'slide', duration: 400, from: { position: { my: 'center', at: 'center', of: window } }, to: { position: { my: 'top', at: 'bottom', of: window } } }} (iOS)
---
Use the [position](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/position.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#position') option to specify the position in which the widget is shown and from which it is hidden.

Set the **animation** object to **null** or **undefined** to disable animation.