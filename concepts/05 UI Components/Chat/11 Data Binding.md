You can bind data to Chat in two ways: with the [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') array or the [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource') entity.

[note] Do not specify the **items** property if you specified **dataSource**, and vice versa.

### items

The [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') array contains all messages in the Chat. To display an initial message, add it to this array. Add subsequent messages to the array to render them in Chat.

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
                    text: "Hello! I'm here to help you. How can I assist you today?",
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
                text: "Hello! I'm here to help you. How can I assist you today?",
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
            text: "Hello! I'm here to help you. How can I assist you today?",
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
        text: "Hello! I'm here to help you. How can I assist you today?",
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

For a more flexible solution than one achieved with the use of an array, specify the [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource') property. For instance, with **dataSource**, Chat can handle server-side data processing through [Web API](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/'), a [store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores'), or a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object.

When you pass a store to **dataSource**, the **DataSource** instance is created automatically inside the Chat. 

[note] If you use a separate [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object, disable [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') to ensure Chat functions properly.

When you use **dataSource**, the [reloadOnChange](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/reloadOnChange.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#reloadOnChange') property is crucial:

- When you send a message in a Chat (press the "Send" button), the Chat triggers the store's [insert](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/insert.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert') method and adds the message to the store.
- If **reloadOnChange** is enabled (default), the dataSource [reloads](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/reload().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload'): clears all items and calls the [load](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method to update itself. Chat automatically listens to dataSource [changes](/api-reference/30%20Data%20Layer/DataSource/4%20Events/changed.md '/Documentation/ApiReference/Data_Layer/DataSource/Events/#changed'), and updates the message feed with new messages. 
- Disable **reloadOnChange** to manage large numbers of messages, prevent additional load requests, and control message rendering timing.

The following code snippet includes:

- A [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/').
- A [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') (pagination disabled).
- Push API for inserting and updating messages.
- `reloadOnChange: false`.

[note] This code snippet illustrates basic principles and does not implement custom editing. For a complete application example, refer to the following demo: [AI and Chatbot Integration](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/AIAndChatbotIntegration/).

---
##### jQuery

    <!-- tab: index.js -->
    const messages = [
        {
            timestamp: new Date(),
            text: "Hello! I'm here to help you. How can I assist you today?"
        }
    ];

    let uniqueIndex = messages.length + 1;
    let editing = null;

    $(() => {
        const customStore = new DevExpress.data.CustomStore({
            key: "id",
            load: () => {
                const d = $.Deferred();

                setTimeout(() => {
                    d.resolve([...messages]);
                });

                return d.promise();
            },
            insert: (message) => {
                const d = $.Deferred();

                setTimeout(() => {
                    messages.push(message);
                    d.resolve();
                });

                return d.promise();
            },
        });

        const dataSource = new DevExpress.data.DataSource({
            store: customStore,
            paginate: false
        });

        $("#chat").dxChat({
            dataSource,
            reloadOnChange: false,
            onMessageEntered: (e) => {
                if (editing) {
                    dataSource.store().push([{ type: "update", key: editing, data: { text: e.message.text } }]);
                    editing = null;
                }
                else {
                    dataSource.store().push([
                        { type: "insert", data: { id: uniqueIndex++, ...e.message } }
                    ]);
                }
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat
        [dataSource]="dataSource"
        [reloadOnChange]="false"
        (onMessageEntered)="onMessageEntered($event)">
    </dx-chat>

    <!-- tab: app.component.ts -->
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import { DxChatTypes } from "devextreme-angular/ui/chat"; 
    // ...

    export class AppComponent {
        messages: DxChatTypes.Message[] = [{
            timestamp: new Date(),
            text: "Hello! I'm here to help you. How can I assist you today?"
        }];

        customStore: CustomStore = new CustomStore({
            key: "id",
            load: () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve([...this.messages]);
                    }, 0);
                });
            },
            insert: (message) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        this.messages.push(message);
                        resolve(message);
                    });
                });
            },
        });

        dataSource: DataSource = new DataSource({
            store: this.customStore,
            paginate: false,
        });

        editing = null;

        uniqueIndex = this.messages.length + 1;

        onMessageEntered(e: DxChatTypes.MessageEnteredEvent) {
            if (this.editing) {
                this.dataSource.store().push([{ type: "update", key: this.editing, data: { text: e.message.text } }]);
                this.editing = null;
            }
            else {
                this.dataSource.store().push([
                    { type: "insert", data: { id: this.uniqueIndex++, ...e.message } }
                ]);
            }
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxChat 
        :data-source="dataSource"
        :reload-on-change="false"
        @message-entered="onMessageEntered"
    />
    </template>

    <script setup lang="ts">
    import { DxChat } from 'devextreme-vue';
    import type { DxChatTypes } from 'devextreme-vue/chat';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';

    const messages: DxChatTypes.Message[] = [{
        timestamp: new Date(),
        text: "Hello! I'm here to help you. How can I assist you today?"
    }];
    const customStore = new CustomStore({
        key: "id",
        load: () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([...messages]);
                }, 0);
            });
        },
        insert: (message) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    messages.push(message);
                    resolve(message);
                });
            });
        },
    });

    const dataSource = new DataSource({
        store: customStore,
        paginate: false,
    });

    let editing = null;

    let uniqueIndex = messages.length + 1;

    const onMessageEntered = (e: DxChatTypes.MessageEnteredEvent) => {
        if (editing) {
            dataSource.store().push([{ type: "update", key: editing, data: { text: e.message.text } }]);
            editing = null;
        }
        else {
            dataSource.store().push([
                { type: "insert", data: { id: uniqueIndex++, ...e.message } }
            ]);
        }
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Chat } from "devextreme-react";
    import { ChatTypes } from "devextreme-react/chat";
    import "devextreme/dist/css/dx.light.css";
    import { useCallback } from "react";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";

    export default function App() {
        const messages: ChatTypes.Message[] = [
            {
                timestamp: new Date(),
                text: "Hello! I'm here to help you. How can I assist you today?",
            },
        ];
        const customStore = new CustomStore({
            key: "id",
            load: (): Promise<ChatTypes.Message[]> =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve([...messages]);
                }, 0);
            }),
            insert: (message: ChatTypes.Message): Promise<ChatTypes.Message> =>
            new Promise((resolve) => {
                setTimeout(() => {
                    messages.push(message);
                    resolve(message);
                });
            }),
        });

        const dataSource = new DataSource({
            store: customStore,
            paginate: false,
        });

        let editing = null;

        let uniqueIndex = messages.length + 1;

        const onMessageEntered = useCallback((e: ChatTypes.MessageEnteredEvent) => {
            if (editing) {
                dataSource.store().push([
                    { type: "update", key: editing, data: { text: e.message!.text } },
                ]);
                editing = null;
            } else {
            dataSource.store().push([{ type: "insert", data: { id: uniqueIndex++, ...e.message } }]);
            }
        }, []);
        return (
            <Chat
                dataSource={dataSource}
                reloadOnChange={false}
                onMessageEntered={onMessageEntered}
            />
        );
    }

---