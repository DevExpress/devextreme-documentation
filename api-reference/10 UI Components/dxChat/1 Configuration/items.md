---
id: dxChat.Options.items
firedEvents: optionChanged
type: Array<Message>
---
---
##### shortDescription
Specifies an array of chat messages.

---
---
##### jQuery

[note] The [renderMessage(message)](/Documentation/ApiReference/UI_Components/dxChat/Methods/#renderMessagemessage) method is the primary way to render a new message in jQuery. Use **items** only to specify initial messages.

##### Angular

Use this property to render a new message and specify initial messages in {Framework}.

    <!-- tab: app.component.html -->
    <dx-chat 
        [items]="messages"
        (onMessageEntered)="onMessageEntered($event)"
    ></dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from "devextreme-angular/ui/chat";
    // ...
    export class AppComponent {
        messages: DxChatTypes.Message[] = [
            {
                timestamp: Date.now(),
                author: secondUser,
                text: `Hello! I'm here to help you. How can I assist you today?`,
            }
        ];
        onMessageEntered({ message }) {
            this.messages = [...this.messages, message];
        }
    }

##### Vue

Use this property to render a new message and specify initial messages in {Framework}.

    <!-- tab: App.vue -->
    <template>
    <DxChat
        :items="messages"
        @message-entered="onMessageEntered"
    />
    </template>

    <script setup>
    import DxChat from "devextreme-vue/chat";
    const messages = [
        {
            timestamp: Date.now(),
            author: secondUser,
            text: `Hello! I'm here to help you. How can I assist you today?`,
        }
    ];
    const onMessageEntered = ({ message }) => {
        messages.value = [...messages.value, message];
    };
    </script>

##### React

Use this property to render a new message and specify initial messages in {Framework}.

    <!-- tab: App.js -->
    import React, { useCallback, useState } from "react";
    import Chat from "devextreme-react/chat";

    const initialMessage = {
        timestamp: Date.now(),
        author: secondUser,
        text: `Hello! I'm here to help you. How can I assist you today?`,
    };

    const App = () => {
        const [messages, setMessages] = useState(initialMessage);
        const onMessageEntered = useCallback(({ message }) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        }, []);

        return (
            <Chat
                onMessageEntered={onMessageEntered}
                items={messages}
            />
        );
    };

---