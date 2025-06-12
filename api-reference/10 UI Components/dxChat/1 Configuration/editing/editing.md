---
id: dxChat.Options.editing
type: Object
---
---
##### shortDescription
Configures editing.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/MessageEditing"
}

[note]

- Before allowing a user to update and delete messages, make sure that your [data source](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource') supports these actions.
- Set the [Store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores')'s **key** property to `"id"` to ensure editing functions correctly.

[/note]

---
##### jQuery

    <!-- tab: index.js -->
    $('#chat').dxChat({
        dataSource: initialMessages,
        editing: {
            allowUpdating: true,
            allowDeleting: true
        },
        onMessageEntered({ message }) {
            e.component.renderMessage(message);
        },
        onMessageUpdated(e) {
            const message = e.message;
            message.text = e.text;
            message.isEdited = true;
            initialMessages[e.message.id] = message;
            e.component.repaint();
        },
        onMessageDeleted(e) {
            const message = e.message;
            message.isDeleted = true;
            initialMessages[e.message.id] = message;
            e.component.repaint();
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat 
        [dataSource]="messages"
        (onMessageEntered)="onMessageEntered($event)"
        (onMessageUpdated)="onMessageUpdated($event)"
        (onMessageDeleted)="onMessageDeleted($event)"
    >
        <dxo-chat-editing 
            [allowUpdating]="true" 
            [allowDeleting]="true"
        ></dxo-chat-editing>
    </dx-chat>

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
        onMessageUpdated(e: DxChatTypes.MessageUpdatedEvent) {
            const message = e.message;
            message.text = e.text;
            message.isEdited = true;
            initialMessages[e.message.id] = message;
            e.component.repaint();
        }
        onMessageDeleted(e: DxChatTypes.MessageDeletedEvent) {
            const message = e.message;
            message.isDeleted = true;
            initialMessages[e.message.id] = message;
            e.component.repaint();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxChat
        :data-source="messages"
        @message-entered="onMessageEntered"
        @message-updated="onMessageUpdated"
        @message-deleted="onMessageDeleted"
    >
        <DxEditing :allow-updating="true" :allow-deleting="true" />
    </DxChat>
    </template>

    <script setup lang="ts">
    import DxChat, { DxChatTypes } from "devextreme-vue/chat";
    const onMessageEntered = ({ message }) => {
        messages.value = [...messages.value, message];
        sendToBackend(message);
    };
    const sendToBackend = (message) => {
        console.log(`Message sent to backend: '${message.text}'`);
        // Backend logic goes here
    };
    const onMessageUpdated = (e: DxChatTypes.MessageUpdatedEvent) => {
        const message = e.message;
        message.text = e.text;
        message.isEdited = true;
        initialMessages[e.message.id] = message;
        e.component.repaint();
    };
    const onMessageDeleted = (e: DxChatTypes.MessageDeletedEvent) => {
        const message = e.message;
        message.isDeleted = true;
        initialMessages[e.message.id] = message;
        e.component.repaint();
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback, useState } from "react";
    import Chat, { ChatTypes } from "devextreme-react/chat";

    const onMessageUpdated = (e: ChatTypes.MessageUpdatedEvent) => {
        const message = e.message;
        message.text = e.text;
        message.isEdited = true;
        initialMessages[e.message.id] = message;
        e.component.repaint();
    };
    const onMessageDeleted = (e: ChatTypes.MessageDeletedEvent) => {
        const message = e.message;
        message.isDeleted = true;
        initialMessages[e.message.id] = message;
        e.component.repaint();
    };

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
                onMessageUpdated={onMessageUpdated}
                onMessageDeleted={onMessageDeleted}
                dataSource={messages}
            >
                <Editing allowUpdating={true} allowDeleting={true} />
            </Chat>
        );
    };

---