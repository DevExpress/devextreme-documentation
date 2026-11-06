---
id: TextMessage.toolCalls
type: Array<ToolCall>
---
---
##### shortDescription
An array of [tool calls](/api-reference/10%20UI%20Components/dxChat/9%20Types/ToolCall '/Documentation/ApiReference/UI_Components/dxChat/Types/ToolCall/') to display in the message.

---
Use this field to display which tools (functions) an AI assistant called to generate a response. The Chat component displays each tool call as a block at the top of the message bubble, above the message text and attachments. The component initially collapses tool call blocks. Users can click a block to expand it and view the tool arguments and result.

If a message contains multiple tool calls, the component groups their blocks under a "*N* tools" header.

The Chat component does not execute tools and does not interact with AI services. Your application must run the tool loop, then pass the executed calls to the message in the **toolCalls** array:

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const assistant = { id: 'assistant', name: 'Virtual Assistant' };

        const chat = $('#chat').dxChat({
            // ...
        }).dxChat('instance');

        chat.renderMessage({
            author: assistant,
            timestamp: Date.now(),
            text: 'It is 15°C (59°F) in London.',
            toolCalls: [{
                name: 'getWeather',
                arguments: { country: 'UK', city: 'London' },
                result: '15°C (59°F)',
                status: 'success',
            }],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat
        [items]="messages"
    ></dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from 'devextreme-angular/ui/chat';
    // ...
    export class AppComponent {
        assistant: DxChatTypes.User = { id: 'assistant', name: 'Virtual Assistant' };

        messages: DxChatTypes.Message[] = [{
            author: this.assistant,
            timestamp: Date.now(),
            text: 'It is 15°C (59°F) in London.',
            toolCalls: [{
                name: 'getWeather',
                arguments: { country: 'UK', city: 'London' },
                result: '15°C (59°F)',
                status: 'success',
            }],
        }];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat
            :items="messages"
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
        text: 'It is 15°C (59°F) in London.',
        toolCalls: [{
            name: 'getWeather',
            arguments: { country: 'UK', city: 'London' },
            result: '15°C (59°F)',
            status: 'success',
        }],
    }]);
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useState } from 'react';
    import Chat from 'devextreme-react/chat';
    import type { ChatTypes } from 'devextreme-react/chat';

    const assistant: ChatTypes.User = { id: 'assistant', name: 'Virtual Assistant' };

    const initialMessages: ChatTypes.Message[] = [{
        author: assistant,
        timestamp: Date.now(),
        text: 'It is 15°C (59°F) in London.',
        toolCalls: [{
            name: 'getWeather',
            arguments: { country: 'UK', city: 'London' },
            result: '15°C (59°F)',
            status: 'success',
        }],
    }];

    export default function App() {
        const [messages] = useState(initialMessages);

        return (
            <Chat
                items={messages}
            />
        );
    }

---

You can add or replace tool calls in an existing message. To do this, update the message in the data source store. The component renders tool call blocks again, and all blocks revert to their initial expanded state:

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const dataSource = new DevExpress.data.DataSource({
            store: new DevExpress.data.ArrayStore({ key: 'id', data: [] }),
            paginate: false,
        });

        $('#chat').dxChat({
            dataSource,
            reloadOnChange: false,
        });

        function updateToolCalls(messageId, toolCalls) {
            dataSource.store().push([{
                type: 'update',
                key: messageId,
                data: { toolCalls },
            }]);
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat
        [dataSource]="dataSource"
        [reloadOnChange]="false"
    ></dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from 'devextreme-angular/ui/chat';
    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        dataSource = new DataSource({
            store: new ArrayStore({ key: 'id', data: [] }),
            paginate: false,
        });

        updateToolCalls(messageId: number, toolCalls: DxChatTypes.ToolCall[]) {
            this.dataSource.store().push([{
                type: 'update',
                key: messageId,
                data: { toolCalls },
            }]);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat
            :data-source="dataSource"
            :reload-on-change="false"
        />
    </template>

    <script setup lang="ts">
    import DxChat from 'devextreme-vue/chat';
    import type { DxChatTypes } from 'devextreme-vue/chat';
    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        store: new ArrayStore({ key: 'id', data: [] }),
        paginate: false,
    });

    const updateToolCalls = (messageId: number, toolCalls: DxChatTypes.ToolCall[]) => {
        dataSource.store().push([{
            type: 'update',
            key: messageId,
            data: { toolCalls },
        }]);
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useCallback } from 'react';
    import Chat from 'devextreme-react/chat';
    import type { ChatTypes } from 'devextreme-react/chat';
    import ArrayStore from 'devextreme/data/array_store';
    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        store: new ArrayStore({ key: 'id', data: [] }),
        paginate: false,
    });

    export default function App() {
        const updateToolCalls = useCallback((messageId: number, toolCalls: ChatTypes.ToolCall[]) => {
            dataSource.store().push([{
                type: 'update',
                key: messageId,
                data: { toolCalls },
            }]);
        }, []);

        return (
            <Chat
                dataSource={dataSource}
                reloadOnChange={false}
            />
        );
    }

---

The Chat component does not display tool call blocks in the following instances:

- The **toolCalls** array is empty or not specified.
- The message is [deleted](/api-reference/10%20UI%20Components/dxChat/9%20Types/MessageBase/isDeleted.md '/Documentation/ApiReference/UI_Components/dxChat/Types/Message/#isDeleted').
- You specify a [messageTemplate](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/messageTemplate.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTemplate') and [toolCallOptions](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/toolCallOptions.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#toolCallOptions').[showInMessageTemplate](/api-reference/10%20UI%20Components/dxChat/9%20Types/ToolCallOptions/showInMessageTemplate.md '/Documentation/ApiReference/UI_Components/dxChat/Types/ToolCallOptions/#showInMessageTemplate') is `false`. In this instance, the template can render tool calls from `data.message.toolCalls`.
