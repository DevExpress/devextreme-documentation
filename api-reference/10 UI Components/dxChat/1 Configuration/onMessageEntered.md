---
id: dxChat.Options.onMessageEntered
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed after a message is entered into the chat.

##### param(e): ui/chat:MessageEnteredEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.message): Message
The entered message.

---
Use this function to transfer messages to the backend:

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        function sendToBackend(message, chat) {
            console.log(`Message sent to backend: ${message.text}`);
            // Backend logic goes here
        }
        const chat = $("#chat").dxChat({
            onMessageEntered: (e) => {
                sendToBackend(e.message, chat);
            },
        }).dxChat('instance');
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat 
        [items]="messages"
        (onMessageEntered)="onMessageEntered($event)"
    ></dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from "devextreme-angular/ui/chat";
    // ...
    export class AppComponent {
        messages: DxChatTypes.Message[] = [];
        onMessageEntered({ message }) {
            this.messages = [...this.messages, message];
            this.sendToBackend(message);
        }
        sendToBackend(message: DxChatTypes.Message) {
            console.log(`Message sent to backend: '${message.text}'`);
            // Backend logic goes here
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxChat
        :items="messages"
        @message-entered="onMessageEntered"
    />
    </template>

    <script setup>
    import DxChat from "devextreme-vue/chat";
    const onMessageEntered = ({ message }) => {
        messages.value = [...messages.value, message];
        sendToBackend(message);
    };
    const sendToBackend = (message) => {
        console.log(`Message sent to backend: '${message.text}'`);
        // Backend logic goes here
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useState } from "react";
    import Chat from "devextreme-react/chat";

    const App = () => {
        const [messages, setMessages] = useState();
        const onMessageEntered = useCallback(({ message }) => {
            setMessages((prevMessages) => [...prevMessages, message]);
            sendToBackend(message);
        }, []);
        const sendToBackend = (message) => {
            console.log(`Message sent to backend: '${message.text}'`);
            // Backend logic goes here
        }

        return (
            <Chat
                onMessageEntered={onMessageEntered}
                items={messages}
            />
        );
    };

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/Overview/"
}