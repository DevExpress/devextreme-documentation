When a user enters a message in the Chat, the [messageEntered](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/onMessageEntered.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onMessageEntered') event is raised. You can use this event handler to render the message you entered.

---
##### jQuery

In jQuery, the primary way to render a message is to call the [renderMessage](/api-reference/10%20UI%20Components/dxChat/3%20Methods/renderMessage(message).md '/Documentation/ApiReference/UI_Components/dxChat/Methods/#renderMessagemessage') method:

    <!-- tab: index.js -->
    $(function() {
        $("#chat").dxChat({ 
            // ...
            onMessageEntered: ({ component, message }) => {
                component.renderMessage(message);
            },
        });
    });

##### Angular

In {Framework}, the primary way to render a new message is updating your [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') array or [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource'). This tutorial uses the **items** array:

    <!-- tab: app.component.html -->
    <dx-chat ...
        [items]="messages"
        (onMessageEntered)="onMessageEntered($event)"
    >
    </dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from "devextreme-angular/ui/chat";
    // ...
    export class AppComponent {
        messages: DxChatTypes.Message[] = [];

        onMessageEntered({ message }) {
            this.messages = [...this.messages, message];
        }
    }

##### Vue

In {Framework}, the primary way to render a new message is updating your [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') array or a [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource'). In this tutorial, the **items** array is used:

    <!-- tab: App.vue -->
    <template>
        <DxChat ...
            :items="messages"
            @message-entered="onMessageEntered"
        />
    </template>

    <script setup>
    import { ref } from "vue";
    // ...

    const messages = ref([]);
    const onMessageEntered = ({ message }) => {
        messages.value = [...messages.value, message];
    };
    </script>

##### React

In {Framework}, the primary way to render a new message is updating your [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') array or a [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource'). In this tutorial, the **items** array is used:

    <!-- tab: App.js -->
    import React, { useCallback, useState } from "react";
    function App() {
        const [messages, setMessages] = useState([]);

        const onMessageEntered = useCallback(({ message }) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        }, []);

        return (
            <Chat ...
                items={messages}
                onMessageEntered={onMessageEntered}
            />
        );
    }

    export default App;

---