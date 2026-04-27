---
id: dxChat.Options.suggestions
type: dxButtonGroup_Options
---
---
##### shortDescription
Configures suggestion buttons (DevExtreme [ButtonGroup](/Documentation/Guide/UI_Components/ButtonGroup/Getting_Started_with_ButtonGroup/)) displayed above the Chat input field.

---
Use this object to specify predefined messages or execute actions outside the Chat. Configure the following [ButtonGroup properties](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/) to implement suggestions:

- The [items[]](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/items/) array
- An [onItemClick](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#onItemClick) handler

The [text](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/items/#text) field in an array item specifies the corresponding button caption. In the **onItemClick** event handler, you can use the same text as a chat message. In many cases, however, it is better to use two strings: a shorter button caption and a longer message. To specify a separate message text, assign it to a custom field:

    const suggestions = {
        items: [{
            text: 'Weather Report',
            message: 'Give me a weather report for the upcoming week, focus on changes in precipitation',
        }],
    }

The Chat component ignores the following ButtonGroup options in the **suggestions** object:

- [selectionMode](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#selectionMode)
- [selectedItemKeys](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#selectedItemKeys)
- [selectedItems](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#selectedItems)
- [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#onSelectionChanged)

The Chat component overrides the default values of the following ButtonGroup properties:

- **items[]**.[type](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/items/#type): *"default"*
- [stylingMode](/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/#stylingMode): *"outlined"*

The following code snippet configures **suggestions** that fill the Chat input field ([inputFieldText](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#inputFieldText)) with predefined messages:

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

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/PromptSuggestions/"
}

#####See Also#####
- [Configure Suggestions](/Documentation/Guide/UI_Components/Chat/Configure_Suggestions/)