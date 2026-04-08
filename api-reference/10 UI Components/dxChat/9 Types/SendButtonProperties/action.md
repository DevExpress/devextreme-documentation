---
id: SendButtonProperties.action
type: Enums.SendButtonAction
default: 'send'
---
---
##### shortDescription
Specifies the Send button's behavior.

---
The `'send'` value (default) enables the standard send behavior: the button is disabled when the input field is empty, and a button click sends the message and clears the input field.

The `'custom'` value disables the standard send behavior: the button is always enabled regardless of input content, and a button click does not send the message or clear the input field. Use the [onClick](/api-reference/10%20UI%20Components/dxChat/9%20Types/SendButtonProperties/onClick.md '/Documentation/ApiReference/UI_Components/dxChat/Types/SendButtonProperties/#onClick') handler to implement custom logic.