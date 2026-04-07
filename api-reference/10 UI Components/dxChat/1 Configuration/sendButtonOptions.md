---
id: dxChat.Options.sendButtonOptions
type: SendButtonProperties
---
---
##### shortDescription
Configures the Send button's appearance and behavior.

---
Use the **sendButtonOptions** object to customize the Send button. The following fields are available:

- [action](/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#action) — specifies the button's behavior. Set this property to `'send'` (default) to send the message and clear the input field when the button is clicked. In this mode, the button is disabled when the input field is empty. Set this property to `'custom'` to keep the button enabled at all times, regardless of the input content. In custom mode, the button neither sends the message nor clears the input field when clicked. Use the [onClick](/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#onClick) handler to implement custom logic.

- [icon](/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#icon) — specifies the button's icon. The default value is `'arrowright'`.

- [onClick](/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#onClick) — a handler function called when the button is clicked.