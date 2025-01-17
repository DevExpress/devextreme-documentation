- **Control Message Feed**    
Set initial Chat messages and display new ones with the [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') array, [renderMessage](/api-reference/10%20UI%20Components/dxChat/3%20Methods/renderMessage(message).md '/Documentation/ApiReference/UI_Components/dxChat/Methods/#renderMessagemessage') method, or [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource') CRUD operations. Use [onMessageEntered](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/onMessageEntered.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onMessageEntered') to define actions after a message is entered.

- **Integrate AI and Chatbots**    
The DevExtreme Chat component allows you to add AI assistants by configuring AI services in the backend.

    #include btn-open-demo with {
        href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/AIAndChatbotIntegration/"
    }

- **Typing Status**    
Typing triggers [typingStart](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/onTypingStart.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onTypingStart'), while stopping or sending a message raises [typingEnd](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/onTypingEnd.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onTypingEnd'). Use these events to manage the [typingUsers](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/typingUsers.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#typingUsers') array, indicating who is typing in the Chat.

- **UI Customization**    
Customize Chat messages with [messageTemplate](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/messageTemplate.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTemplate'). Display runtime issues with the [alerts](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/alerts.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#alerts') array. Control UI elements with properties like [showAvatar](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/showAvatar.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#showAvatar'), and adjust date/time formats with options like [messageTimestampFormat](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/messageTimestampFormat.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTimestampFormat').

    #include btn-open-demo with {
        href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/Customization/"
    }