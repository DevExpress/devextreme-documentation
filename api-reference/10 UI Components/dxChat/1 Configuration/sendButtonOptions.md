---
id: dxChat.Options.sendButtonOptions
type: SendButtonProperties
---
---
##### shortDescription
Configures the Send button's appearance and behavior.

---
Use the **sendButtonOptions** object to customize the Send button. The following fields are available:

- [action](/api-reference/10%20UI%20Components/dxChat/9%20Types/SendButtonProperties/action.md '/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#action') — specifies the button's behavior. Set this property to `'send'` (default) to send the message and clear the input field when the button is clicked. In this mode, the button is disabled when the input field is empty. Set this property to `'custom'` to keep the button enabled at all times, regardless of the input content. In custom mode, the button neither sends the message nor clears the input field when clicked. Use the [onClick](/api-reference/10%20UI%20Components/dxChat/9%20Types/SendButtonProperties/onClick.md '/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#onClick') handler to implement custom logic.

- [icon](/api-reference/10%20UI%20Components/dxChat/9%20Types/SendButtonProperties/icon.md '/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#icon') — specifies the button's icon. The default value is `'arrowright'`.

- [onClick](/api-reference/10%20UI%20Components/dxChat/9%20Types/SendButtonProperties/onClick.md '/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#onClick') — a handler function called when the button is clicked.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/MessageStreaming/"
}
