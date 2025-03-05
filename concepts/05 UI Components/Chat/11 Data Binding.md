You can bind data to Chat in two ways: using the [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items) array or the [dataSource](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource) entity.

[note] Do not specify the **items** property if you specified **dataSource**, and vice versa.

### items

The [items](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items) array contains all messages in the Chat. To display an initial message, add it to this array. Add subsequent messages to the array to render them in Chat.

---
##### jQuery

[note] The [renderMessage(message)](/api-reference/10%20UI%20Components/dxChat/3%20Methods/renderMessage(message).md '/Documentation/ApiReference/UI_Components/dxChat/Methods/#renderMessagemessage') method is the primary way to render a new message in jQuery. Use **items** only to specify initial messages.

    <!-- tab: index.js -->
    $(() => {
        $('#chat').dxChat({
            // ...
            items: [
                {
                    timestamp: Date.now(),
                    author: secondUser,
                    text: `Hello! I'm here to help you. How can I assist you today?`,
                }
            ];
            onMessageEntered: (e) => {
                e.component.renderMessage(e.message);
            },
        });
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

### dataSource

For a more flexible solution than an array, specify the [dataSource](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource) property. For instance, with **dataSource**, Chat can handle server-side data processing through [Web API](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/), a [store](/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores), or a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object.

When you pass a store to **dataSource**, the **DataSource** instance is created automatically inside the Chat. 

[note] If you use a separate [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object, disable [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') to ensure Chat functions properly.

When you use **dataSource**, the [reloadOnChange](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#reloadOnChange) property is crucial:

- When you send a message in a Chat (press the "Send" button), the Chat triggers the store's [insert](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/insert.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert') method and adds the message to the store.
- If **reloadOnChange** is enabled (default), the dataSource [reloads](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload'): clears all items and calls the [load](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method to update itself. Chat automatically listens to dataSource [changes](/api-reference/30%20Data%20Layer/DataSource/4%20Events/changed.md '/Documentation/ApiReference/Data_Layer/DataSource/Events/#changed') and updates the message feed with new messages. 
- Disable **reloadOnChange** to manage large numbers of messages, prevent additional load requests, and control message rendering timing.

The following code snippet includes:

- A [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/).
- A [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) (pagination disabled).
- Push API for inserting and updating messages.
- `reloadOnChange: false`.

