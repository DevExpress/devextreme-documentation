---
id: dxChat.renderMessage(message)
---
---
##### shortDescription
Renders a new message.

##### param(message): Message
A message to be rendered.

---
---
##### jQuery

This method is the primary way to render a new message in jQuery:

    <!-- tab: index.js -->
    $(() => {
        const chat = $("#chat").dxChat({
            onMessageEntered: (e) => {
                e.component.renderMessage({
                    text: `Hello! I'm here to help you. How can I assist you today?`, 
                    author: secondUser,
                    timestamp: Date.now() 
                });
            },
        }).dxChat('instance');
    });

##### Angular

[note] Calling this method is not native to {Framework}. Use [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items) instead.

##### Vue

[note] Calling this method is not native to {Framework}. Use [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items) instead.

##### React

[note] Calling this method is not native to {Framework}. Use [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items) instead.

---