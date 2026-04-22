To configure suggestion items for the Chat's input field, update the [inputFieldText](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#inputFieldText) property in the **suggestions**.[onItemClick](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#onItemClick) handler:

---

##### jQuery

    <!-- tab: index.js -->
    $('#chat').dxChat({
        suggestions: {
            items: [
                { text: 'Summarize text' },
                { text: 'Write an email' },
                { text: 'Fix my writing' },
            ],
            onItemClick(e) {
                $('#chat').dxChat('instance').option('inputFieldText', e.itemData.text);
            },
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat ...
        [inputFieldText]="inputFieldText"
        [suggestions]="chatSuggestions"
    >
    </dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatModule, type DxChatTypes } from "devextreme-angular/ui/chat";

    // ...
    export class AppComponent {
        inputFieldText: string = '';
        chatSuggestions: DxChatTypes.Properties['suggestions'] = {
            items: [
                { text: 'Summarize text' },
                { text: 'Write an email' },
                { text: 'Fix my writing' },
            ],
            onItemClick: (e) => {
                this.inputFieldText = e.itemData.text;
            },
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat
            :input-field-text="inputFieldText"
            :suggestions="chatSuggestions"
        />
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxChat, type DxChatTypes } from 'devextreme-vue/chat';

    const inputFieldText = ref<string>('');
    const chatSuggestions: DxChatTypes.Properties['suggestions'] = {
        items: [
            { text: 'Summarize text' },
            { text: 'Write an email' },
            { text: 'Fix my writing' },
        ],
        onItemClick(e) {
            inputFieldText.value = e.itemData.text;
        },
    };
    </script>


##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useState } from 'react';
    import { Chat, type ChatTypes } from 'devextreme-react/chat';
    import { type ButtonGroupTypes } from 'devextreme-react/button-group';

    function App(): JSX.Element {
        const [inputFieldText, setInputFieldText] = useState<string>('');

        const handleSuggestionClick = useCallback((e: ButtonGroupTypes.ItemClickEvent) => {
            setInputFieldText(e.itemData.text);
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
                inputFieldText={inputFieldText}
                suggestions={chatSuggestions}
            />
        );
    }

---