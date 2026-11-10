---
id: ToolCall.Options.showInMessageTemplate
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether to display built-in tool call blocks in messages that use a [messageTemplate](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/messageTemplate.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTemplate').

---
When you specify a **messageTemplate**, the template renders the entire content of the message bubble, and the Chat component does not display tool call blocks. To display your own tool call markup, use `data.message.toolCalls` in the template.

Set **showInMessageTemplate** to `true` to display built-in tool call blocks above the template content. In this instance, the template should only render message text (not tool calls). The following code converts message text from [Markdown](/concepts/05%20UI%20Components/Chat/13%20Markdown%20Support.md '/Documentation/Guide/UI_Components/Chat/Markdown_Support/') to HTML and displays built-in tool call blocks:

---
##### jQuery

    <!-- tab: index.html -->
    <script type="module">
        import {
            micromark
        } from 'https://esm.sh/micromark@3?bundle';
        window.micromark = micromark;
    </script>

    <div id="chat"></div>

    <!-- tab: index.js -->
    $(() => {
        $('#chat').dxChat({
            toolCallOptions: { showInMessageTemplate: true },
            messageTemplate: (data, element) => {
                const htmlText = micromark(data.message.text);
                $('<div>').html(htmlText).appendTo(element);
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat
        [items]="messages"
        [toolCallOptions]="{ showInMessageTemplate: true }"
        messageTemplate="messageTemplate"
    >
        <div *dxTemplate="let data of 'messageTemplate'">
            <div [innerHTML]="convertToHtml(data.message.text)"></div>
        </div>
    </dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatTypes } from 'devextreme-angular/ui/chat';
    import { micromark } from 'micromark';
    // ...
    export class AppComponent {
        messages: DxChatTypes.Message[] = [];

        convertToHtml(text: string) {
            return micromark(text);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat
            :items="messages"
            :tool-call-options="{ showInMessageTemplate: true }"
            message-template="message"
        >
            <template #message="{ data }">
                <div v-html="convertToHtml(data.message.text)"></div>
            </template>
        </DxChat>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import DxChat from 'devextreme-vue/chat';
    import type { DxChatTypes } from 'devextreme-vue/chat';
    import { micromark } from 'micromark';

    const messages = ref<DxChatTypes.Message[]>([]);

    const convertToHtml = (text: string) => micromark(text);
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useState } from 'react';
    import Chat from 'devextreme-react/chat';
    import type { ChatTypes } from 'devextreme-react/chat';
    import HTMLReactParser from 'html-react-parser';
    import { micromark } from 'micromark';

    const toolCallOptions = { showInMessageTemplate: true };

    const messageRender = (data: ChatTypes.MessageTemplateData) => {
        return <div>{HTMLReactParser(micromark(data.message!.text!))}</div>;
    };

    export default function App() {
        const [messages] = useState<ChatTypes.Message[]>([]);

        return (
            <Chat
                items={messages}
                toolCallOptions={toolCallOptions}
                messageRender={messageRender}
            />
        );
    }

---

This setting is useful if you stream responses. The Chat component renders the template again for each text chunk. The component also re-creates tool call markup rendered in the template, so expanded elements collapse. The component does not re-create built-in tool call blocks when text changes, so expanded blocks stay expanded.

If you do not specify a **messageTemplate**, this setting has no effect. The Chat component always displays built-in tool call blocks.
