---

##### jQuery

To send predefined messages when a **suggestions** button is clicked, call [renderMessage()](/api-reference/10%20UI%20Components/dxChat/3%20Methods/renderMessage(message).md '/Documentation/ApiReference/UI_Components/dxChat/Methods/#renderMessagemessage') in **suggestions**.**onItemClick**:

    <!-- tab: index.js -->
    $('#chat').dxChat({
        suggestions: {
            items: [
                { text: 'Summarize text' },
                { text: 'Write an email' },
                { text: 'Fix my writing' },
            ],
            onItemClick(e) {
                const newMessage = {
                    id: Date.now(),
                    timestamp: new Date(),
                    text: e.itemData.text,
                };

                $('#chat').dxChat('instance').renderMessage(newMessage);
            }
        }
    });

##### Angular

To send predefined messages when a **suggestions** button is clicked, update the Chat's [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') array or [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource') in **suggestions**.**onItemClick**. The following code snippet uses the **items** array:

    <!-- tab: app.component.html -->
    <dx-chat ...
        [items]="messages"
        [suggestions]="chatSuggestions"
    >
    </dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatModule, type DxChatTypes } from "devextreme-angular/ui/chat";
    // ...
    export class AppComponent {
        messages: DxChatTypes.Message[] = [];
        suggestions: DxChatTypes.Properties['suggestions'] = {
            items: [
                { text: 'Summarize text' },
                { text: 'Write an email' },
                { text: 'Fix my writing' },
            ],
            onItemClick(e) {
                const newMessage: DxChatTypes.Message = {
                    id: Date.now(),
                    timestamp: new Date(),
                    text: e.itemData.text,
                };

                this.messages = [...messages, newMessage]
            }
        };
    }

##### Vue

To send predefined messages when a **suggestions** button is clicked, update the Chat's [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') array or [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource') in **suggestions**.**onItemClick**. The following code snippet uses the **items** array:

    <!-- tab: App.vue -->
    <template>
        <DxChat
            :items="messages"
            :suggestions="chatSuggestions"
        />
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxChat, type DxChatTypes } from 'devextreme-vue/chat';

    const messages = ref<DxChatTypes.Message[]>([]);
    const chatSuggestions: DxChatTypes.Properties['suggestions'] = {
        items: [
            { text: 'Summarize text' },
            { text: 'Write an email' },
            { text: 'Fix my writing' },
        ],
        onItemClick(e) {
            const newMessage: DxChatTypes.Message = {
                id: Date.now(),
                timestamp: new Date(),
                text: e.itemData.text,
            };

            messages.value = [...messages.value, newMessage]
        },
    };
    </script>

##### React

To send predefined messages when a **suggestions** button is clicked, update the Chat's [items](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#items') array or [dataSource](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#dataSource') in **suggestions**.**onItemClick**. The following code snippet uses the **items** array:

    <!-- tab: App.tsx -->
    import React, { useCallback, useState } from 'react';
    import { Chat, type ChatTypes } from 'devextreme-react/chat';
    import { type ButtonGroupTypes } from 'devextreme-react/button-group';

    function App(): JSX.Element {
        const [messages, setMessages] = useState<ChatTypes.Message[]>([]);

        const handleSuggestionClick = useCallback((e: ButtonGroupTypes.ItemClickEvent) => {
            const newMessage: ChatTypes.Message = {
                id: Date.now(),
                timestamp: new Date(),
                text: e.itemData.text,
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]);
        }, []);

        const chatSuggestions: ChatTypes.Properties['suggestions'] = {
            items: [
                { text: 'Summarize text' },
                { text: 'Write an email' },
                { text: 'Fix my writing' },
            ],
            onItemClick: handleSuggestionClick,
        }

        return (
            <Chat
                items={messages}
                suggestions={chatSuggestions}
            />
        );
    }

---