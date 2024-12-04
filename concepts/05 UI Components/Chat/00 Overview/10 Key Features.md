- **Control Message Feed**    
Set initial Chat messages and display new ones with the [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items) array, [renderMessage](/Documentation/ApiReference/UI_Components/dxChat/Methods/#renderMessagemessage) method, or [dataSource](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource) CRUD operations. Use [onMessageEntered](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onMessageEntered) to define actions after a message is entered.

- **Integrate AI and Chatbots**    
The DevExtreme Chat component allows you to add AI assistants by configuring AI services in the backend.

    #include btn-open-demo with {
        href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/AIAndChatbotIntegration/"
    }

- **Typing Status**    
Typing triggers [typingStart](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onTypingStart), while stopping or sending a message raises [typingEnd](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onTypingEnd). Use these events to manage the [typingUsers](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#typingUsers) array, indicating who is typing in the Chat.

- **UI Customization**    
Customize Chat messages with [messageTemplate](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTemplate). Display runtime issues with the [alerts](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#alerts) array. Control UI elements with properties like [showAvatar](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#showAvatar), and adjust date/time formats with options like [messageTimestampFormat](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTimestampFormat).

    #include btn-open-demo with {
        href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/Customization/"
    }