Our new DevExtreme Chat Component (v24.2) allows you to address a variety of usage scenarios and introduce real-time communication support in your next DevExpress-powered web app.

With DevExtreme Chat, you can:

- Host intra/interpersonal Interactions (one-on-one or group chats). Ideal for social networking and/or internal collaboration.
- Integrate AI services and/or Chatbots: Connect DevExtreme Chat to AI services or chatbots for around-the-clock support services. Deliver immediate answers and extend engagement with intelligent interactions.
- Introduce instant communication options between support specialists and clients.

![DevExtreme Chat component, P2P communication](/images/whats-new/24-2-js-chat-p2p.png)

The DevExtreme Chat component supports the following options/capabilities:

- AI (artificial intelligence) Extensions
- DataSource support
- Typing status
- Popup integration
- Empty state text customization
- UI Customization
- Message templates
- Error support
- Accessibility compliance
- Keyboard Navigation
- Internationalization (Right-to-Left)

[note] DevExtreme Chat is a client-side component. An independent backend solution is necessary to leverage its potential.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/Overview/"
}

### Set Initial Messages and Render New Messages

To set initial messages, assign the [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items) array with your messages or use [dataSource](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource) to bind the Chat component to data.

To render a new message, you must:

---
##### jQuery

- If you use [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items), call the [renderMessage](/Documentation/ApiReference/UI_Components/dxChat/Methods/#renderMessagemessage) function.
- If using [dataSource](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource), implement load and insert CRUD operations.

##### Angular

- If you use [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items), update the items array.
- If using [dataSource](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource), implement load and insert CRUD operations.

##### Vue

- If you use [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items), update the items array.
- If using [dataSource](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource), implement load and insert CRUD operations.

##### React

- If you use [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items), update the items array.
- If using [dataSource](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource), implement load and insert CRUD operations.

---

Regardless of the method used, you must send the new message to a backend.

### AI and Chatbot Integration

With the DevExtreme Chat UI component, you can incorporate AI-powered app assistants, implement Copilot-inspired user interfaces, and much more. To introduce these capabilities to your next DevExtreme-powered web app, simply set up appropriate AI services on the backend (Microsoft/OpenAI - GPT, Google - Gemini, self-hosted models via Ollama, or other AI services).

<img src="/images/whats-new/24-2-js-chat-ai.png" alt="DevExtreme Chat implementing a virtual AI assistant" style="display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background-color: #f1f1f1;
    border-radius: 6px;" />

![DevExtreme Chat implementing a virtual AI assistant](/images/whats-new/24-2-js-chat-ai.png)

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/AIAndChatbotIntegration/"
}

We leveraged the AI-integration potential of DevExtreme Chat in two DevExpress products: [Web Report Viewer](https://www.devexpress.com/subscriptions/reporting/web/) and [Web End-User Report Designer](https://www.devexpress.com/subscriptions/reporting/web/). We also incorporated [DevExpress AI-powered APIs](https://docs.devexpress.com/CoreLibraries/405204/ai-powered-extensions?v=24.2) in our implementation.

First, we embedded a Copilot-inspired chat window within the DevExpress Web Report Viewer (users can ask natural language questions to analyze report data and obtain AI-powered insights).

![DevExpress Web Report Viewer with AI Chat](/images/whats-new/24-2-js-reports-web-report-ai.png)

Second, we embedded a virtual assistant in the DevExpress End-User Report Designer (users can submit natural language queries to facilitate the custom report design process).

![DevExpress End-User Report Designer with AI Chat](/images/whats-new/24-2-js-reports-ai-assistant.png)

You can download these examples from the following GitHub repository:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/web-reporting-integrate-ai-assistant"
}

[note] DevExpress Reports, DevExpress Web Report Viewer, and the DevExpress End-User Report Designer are included in the following DevExpress Subscriptions: **ASP.NET & Blazor, DXperience, Universal**, or a standalone **DevExpress Reports** subscription.

### Manage Users

A DevExtreme Chat instance contains information about its owner in the [user](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#user) property. Owner messages align to the right (or left in RTL mode), without displaying the owner's username and avatar.

Each message includes information about the sender ([item.author](/Documentation/ApiReference/UI_Components/dxChat/Types/Message/#author)), and includes name, avatar, and alt avatar text. If no avatar is set, the user's initials are displayed instead. Users without a name are marked as "Unknown User".

![DevExtreme Chat messages: custom avatar and no avatar](/images/whats-new/24-2-js-chat-avatar.png)

### Handle Events 

Entering a message triggers the [messageEntered](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onMessageEntered) event. Use the event handler to perform message post processing (like deleting obscene words, displaying the message in a message feed, and sending the message to the server for storage).

Start typing to raise [typingStart](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onTypingStart), and stop typing for [typingEnd](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onTypingEnd). By using these event handlers, you can manage the typingUsers array (it shows which users are typing in the chat UI).

![DevExtreme Chat: one and multiple users typing](/images/whats-new/24-2-js-chat-typing.png)

### Customize UI Elements

Control date and time visibility with [showDayHeaders](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#showDayHeaders) and [showMessageTimestamp](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#showMessageTimestamp). Modify associated formats with [dayHeaderFormat](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dayHeaderFormat) and [messageTimestampFormat](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTimestampFormat).

To customize DevExtreme Chat messages, use [messageTemplate](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTemplate):

- Display images, charts, tables, links, or any visual element.
- Implement custom buttons, such as "Copy text" or "Regenerate chatbot response".
- Support Markdown.
- Insert custom markup.

![DevExtreme Chat: custom message with Chart component](/images/whats-new/24-2-js-chat-customization.png)

Use the [alerts](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#alerts) array to display runtime errors (such as "You have been disconnected", "The message was not sent", etc).

![DevExtreme Chat with a "You have been disconnected" alert displayed](/images/whats-new/24-2-js-chat-alert.png)

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/Customization/"
}

If you've used DevExtreme Chat or are considering its use in an upcoming DevExpress-powered web project, please share your experiences/requirements with us. We'd love to know about your specific use case and how we can enhance our Chat component in 2025.