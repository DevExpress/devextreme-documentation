---
id: ToolCall.expanded
type: Boolean
---
---
##### shortDescription
Specifies whether the tool call block is initially expanded.

---
This field takes precedence over [toolCallOptions](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/toolCallOptions.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#toolCallOptions').[expandAll](/api-reference/10%20UI%20Components/dxChat/9%20Types/ToolCallOptions/expandAll.md '/Documentation/ApiReference/UI_Components/dxChat/Types/ToolCallOptions/#expandAll'). If you do not specify **expanded**, the **expandAll** value applies. For example, you can expand all tool call blocks in the chat and leave one block collapsed:

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const assistant = { id: 'assistant', name: 'Virtual Assistant' };

        const chat = $('#chat').dxChat({
            toolCallOptions: { expandAll: true },
        }).dxChat('instance');

        chat.renderMessage({
            author: assistant,
            timestamp: Date.now(),
            text: 'It is 15°C (59°F) in London. 1 USD = 0.92 EUR.',
            toolCalls: [
                // Expanded: uses expandAll
                { name: 'getWeather', arguments: { city: 'London' }, result: '15°C (59°F)' },
                // Collapsed: overrides expandAll
                { name: 'getExchangeRate', arguments: { fromCurrency: 'USD', toCurrency: 'EUR' }, result: '1 USD = 0.92 EUR', expanded: false },
            ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat
        [items]="messages"
        [toolCallOptions]="{ expandAll: true }"
    ></dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from 'devextreme-angular/ui/chat';
    // ...
    export class AppComponent {
        assistant: DxChatTypes.User = { id: 'assistant', name: 'Virtual Assistant' };

        messages: DxChatTypes.Message[] = [{
            author: this.assistant,
            timestamp: Date.now(),
            text: 'It is 15°C (59°F) in London. 1 USD = 0.92 EUR.',
            toolCalls: [
                // Expanded: uses expandAll
                { name: 'getWeather', arguments: { city: 'London' }, result: '15°C (59°F)' },
                // Collapsed: overrides expandAll
                { name: 'getExchangeRate', arguments: { fromCurrency: 'USD', toCurrency: 'EUR' }, result: '1 USD = 0.92 EUR', expanded: false },
            ],
        }];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat
            :items="messages"
            :tool-call-options="{ expandAll: true }"
        />
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import DxChat from 'devextreme-vue/chat';
    import type { DxChatTypes } from 'devextreme-vue/chat';

    const assistant: DxChatTypes.User = { id: 'assistant', name: 'Virtual Assistant' };

    const messages = ref<DxChatTypes.Message[]>([{
        author: assistant,
        timestamp: Date.now(),
        text: 'It is 15°C (59°F) in London. 1 USD = 0.92 EUR.',
        toolCalls: [
            // Expanded: uses expandAll
            { name: 'getWeather', arguments: { city: 'London' }, result: '15°C (59°F)' },
            // Collapsed: overrides expandAll
            { name: 'getExchangeRate', arguments: { fromCurrency: 'USD', toCurrency: 'EUR' }, result: '1 USD = 0.92 EUR', expanded: false },
        ],
    }]);
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useState } from 'react';
    import Chat from 'devextreme-react/chat';
    import type { ChatTypes } from 'devextreme-react/chat';

    const assistant: ChatTypes.User = { id: 'assistant', name: 'Virtual Assistant' };

    const toolCallOptions = { expandAll: true };

    const initialMessages: ChatTypes.Message[] = [{
        author: assistant,
        timestamp: Date.now(),
        text: 'It is 15°C (59°F) in London. 1 USD = 0.92 EUR.',
        toolCalls: [
            // Expanded: uses expandAll
            { name: 'getWeather', arguments: { city: 'London' }, result: '15°C (59°F)' },
            // Collapsed: overrides expandAll
            { name: 'getExchangeRate', arguments: { fromCurrency: 'USD', toCurrency: 'EUR' }, result: '1 USD = 0.92 EUR', expanded: false },
        ],
    }];

    export default function App() {
        const [messages] = useState(initialMessages);

        return (
            <Chat
                items={messages}
                toolCallOptions={toolCallOptions}
            />
        );
    }

---

When users expand or collapse a tool call block, the Chat component does not update this field and does not raise an event. If you update the message's [toolCalls](/api-reference/10%20UI%20Components/dxChat/9%20Types/TextMessage/toolCalls.md '/Documentation/ApiReference/UI_Components/dxChat/Types/TextMessage/#toolCalls') array, the component resets all tool call blocks in the message to their initial state.
