If you want to specify initial messages in the Chat, use the [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items) array.

---
##### jQuery

    <!-- tab: index.js -->
    const initialMessages = [{
        timestamp: Date.now(),
        author: secondUser,
        text: "Hello! We'd love to hear your feedback. Please share your thoughts below!"
    }];

    $(function() {
        $("#chat").dxChat({ 
            // ...
            items: initialMessages,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat ...
        [items]="messages"
    >
    </dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from "devextreme-angular/ui/chat";
    // ...
    export class AppComponent {
        messages: DxChatTypes.Message[] = [{
            timestamp: Date.now(),
            author: secondUser,
            text: "Hello! We'd love to hear your feedback. Please share your thoughts below!"
        }];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat ...
            :items="messages"
        />
    </template>

    <script setup>
    import { ref } from "vue";
    // ...
    const initialMessages = [{
        timestamp: Date.now(),
        author: secondUser,
        text: "Hello! We'd love to hear your feedback. Please share your thoughts below!"
    }];

    const messages = ref(initialMessages);

##### React

    <!-- tab: App.js -->
    import React, { useState } from "react";

    const initialMessages = [{
        timestamp: Date.now(),
        author: secondUser,
        text: "Hello! We'd love to hear your feedback. Please share your thoughts below!"
    }];

    function App() {
        const [messages, setMessages] = useState(initialMessages);

        return (
            <Chat ...
                items={messages}
            />
        );
    }

    export default App;

---