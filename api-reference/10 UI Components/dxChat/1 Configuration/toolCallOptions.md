---
id: dxChat.Options.toolCallOptions
type: ToolCall_Options
---
---
##### shortDescription
Configures how Chat displays [tool calls](/api-reference/10%20UI%20Components/dxChat/9%20Types/TextMessage/toolCalls.md '/Documentation/ApiReference/UI_Components/dxChat/Types/TextMessage/#toolCalls').

---
The settings in this object apply to tool calls in all chat messages. The following fields are available:

- [expandAll](/api-reference/10%20UI%20Components/dxChat/9%20Types/ToolCallOptions/expandAll.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/toolCallOptions/#expandAll') — specifies whether tool calls are initially expanded.

- [showInMessageTemplate](/api-reference/10%20UI%20Components/dxChat/9%20Types/ToolCallOptions/showInMessageTemplate.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/toolCallOptions/#showInMessageTemplate') — specifies whether to display the built-in tool call block when you use a [messageTemplate](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/messageTemplate.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#messageTemplate').

Specify one or both fields. You can also change them at runtime. The following code expands all tool calls when users click a button:

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const chat = $('#chat').dxChat({
            toolCallOptions: { expandAll: false },
        }).dxChat('instance');

        $('#expandButton').dxButton({
            text: 'Expand All Tool Calls',
            onClick: () => {
                chat.option('toolCallOptions.expandAll', true);
            },
        });
    });

    <!-- tab: index.html -->
    <div id="expandButton"></div>
    <div id="chat"></div>

##### Angular

    <!-- tab: app.component.html -->
    <dx-button
        text="Expand All Tool Calls"
        (onClick)="expandAll()"
    ></dx-button>
    <dx-chat
        [toolCallOptions]="toolCallOptions"
    ></dx-chat>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        toolCallOptions = { expandAll: false };

        expandAll() {
            this.toolCallOptions = { ...this.toolCallOptions, expandAll: true };
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButton
            text="Expand All Tool Calls"
            @click="expandAll"
        />
        <DxChat
            :tool-call-options="toolCallOptions"
        />
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import DxButton from 'devextreme-vue/button';
    import DxChat from 'devextreme-vue/chat';

    const toolCallOptions = ref({ expandAll: false });

    const expandAll = () => {
        toolCallOptions.value = { ...toolCallOptions.value, expandAll: true };
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useCallback, useState } from 'react';
    import Button from 'devextreme-react/button';
    import Chat from 'devextreme-react/chat';

    export default function App() {
        const [toolCallOptions, setToolCallOptions] = useState({ expandAll: false });

        const expandAll = useCallback(() => {
            setToolCallOptions((prevOptions) => ({ ...prevOptions, expandAll: true }));
        }, []);

        return (
            <>
                <Button
                    text="Expand All Tool Calls"
                    onClick={expandAll}
                />
                <Chat
                    toolCallOptions={toolCallOptions}
                />
            </>
        );
    }

---
