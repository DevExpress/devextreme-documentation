---
id: dxChat.Options.sendButtonOptions
type: SendButtonProperties
---
---
##### shortDescription
Configures the send button's appearance and behavior.

---
Use the **sendButtonOptions** object to customize the Chat send button. The following fields are available:

- [action](/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#action) — specifies the button's behavior. Set to `'send'` (default) to send the message and clear the input field when the button is clicked. The button is disabled when the input field is empty. Set to `'custom'` to keep the button always enabled regardless of input content. In custom mode, the button does not send the message or clear the input field when clicked. Use the [onClick](/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#onClick) handler to implement custom logic.

- [icon](/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#icon) — specifies the button's icon. The default value is `'arrowright'`.

- [onClick](/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#onClick) — a handler function called when the button is clicked.