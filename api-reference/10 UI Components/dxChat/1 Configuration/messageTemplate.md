---
id: dxChat.Options.messageTemplate
type: template | null
default: null
---
---
##### shortDescription
Specifies a custom template for a chat message.

##### param(data): Object
The current data object.

##### field(data.component): dxChat
The Chat instance.

##### field(data.message): Message
The message text.

##### param(messageBubbleElement): DxElement
#include common-ref-elementparam with { element: "message" }

##### return: String | Element | jQuery
A template name or container.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const chat = $("#chat").dxChat({
            messageTemplate: (data, $container) => {
                return data.message.id + " " + data.message.text;
            },
        }).dxChat('instance');
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat 
        messageTemplate="message"
    >
        <div *dxTemplate="let data of 'message'">
            {{data.message.id + " " + data.message.text}}
        </div>
    </dx-chat>

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxChat message-template="message">
        <template #message="{ data }">
            {{ data.message.id + " " + data.message.text }}
        </template>
    </DxChat>
    </template>

##### React

    <!-- tab: App.js -->
    import React from "react";
    import Chat from "devextreme-react/chat";

    const messageRender = (data) => {
        return (<div>{data.message.id + " " + data.message.text}</div>);
    }

    const App = () => {
        return (
            <Chat
                messageRender={messageRender}
            />
        );
    };

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/AIAndChatbotIntegration/"
}