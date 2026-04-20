To hide a suggestion item after a user clicks the button, update the suggestions.items[] array:

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
                const chatInstance = $('#chat').dxChat('instance');
                
                const currentSuggestions = chatInstance.option('suggestions');
                chatInstance.option('suggestions', {
                    items: currentSuggestions.items.filter((item) => item.text !== e.itemData.text),
                });

                // ...
                chatInstance.renderMessage(newMessage);
            },
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat ...
        [suggestions]="chatSuggestions"
    >
    </dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatModule, type DxChatTypes } from "devextreme-angular/ui/chat";
    import { type DxButtonGroupTypes } from "devextreme-angular/ui/button-group";

    // ...
    export class AppComponent {
        suggestionItems = [
            { text: 'Summarize text' },
            { text: 'Write an email' },
            { text: 'Fix my writing' },
        ];
        chatSuggestions: DxChatTypes.Properties['suggestions'] = {
            items: this.suggestionItems,
            onItemClick: this.handleSuggestionClick.bind(this),
        };
        handleSuggestionClick(e: DxButtonGroupTypes.ItemClickEvent): void {
            this.chatSuggestions = {
                items: this.chatSuggestions.items.filter((item) => item.text !== e.itemData.text),
                onItemClick: this.handleSuggestionClick.bind(this),
            };

            // ...
            this.messages = [...messages, newMessage];
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
    import { type DxButtonGroupTypes } from 'devextreme-vue/button-group';

    const suggestionItems = [
        { text: 'Summarize text' },
        { text: 'Write an email' },
        { text: 'Fix my writing' },
    ];

    const chatSuggestions = ref<DxChatTypes.Properties['suggestions']>({
        items: suggestionItems,
        onItemClick: handleSuggestionClick,
    });

    function handleSuggestionClick(e: DxButtonGroupTypes.ItemClickEvent): void {
        chatSuggestions.value = {
            items: chatSuggestions.value.items.filter((item) => item.text !== e.itemData.text),
            onItemClick: handleSuggestionClick,
        };

        // ...
        messages.value = [...messages.value, newMessage];
    };
    </script>


##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useState } from 'react';
    import { Chat, type ChatTypes } from 'devextreme-react/chat';
    import { type ButtonGroupTypes } from 'devextreme-react/button-group';

    function App(): JSX.Element {
        const [suggestionItems, setSuggestionItems] = useState([
            { text: 'Summarize text' },
            { text: 'Write an email' },
            { text: 'Fix my writing' },
        ]);

        const handleSuggestionClick = useCallback((e: ButtonGroupTypes.ItemClickEvent) => {
            setSuggestionItems((items) => items.filter((item) => item.text !== e.itemData.text));

            // ...
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        }, []);

        const chatSuggestions: ChatTypes.Properties['suggestions'] = {
            items: suggestionItems,
            onItemClick: handleSuggestionClick,
        };

        return (
            <Chat
                suggestions={chatSuggestions}
            />
        );
    }

---

Alternatively, you can disable clicked items:

---

##### jQuery

    <!-- tab: index.js -->
    $('#chat').dxChat({
        suggestions: {
            // ...
            onItemClick(e) {
                const chatInstance = $('#chat').dxChat('instance');
                
                const currentSuggestions = chatInstance.option('suggestions');
                currentSuggestions.find((item) => item.text === e.itemData.text).disabled = true;

                chatInstance.option('suggestions', { items: currentSuggestions });

                // ...
                chatInstance.renderMessage(newMessage);
            },
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat ...
        [suggestions]="chatSuggestions"
    >
    </dx-chat>

    <!-- tab: app.component.ts -->
    import { DxChatModule, type DxChatTypes } from "devextreme-angular/ui/chat";
    import { type DxButtonGroupTypes } from "devextreme-angular/ui/button-group";

    // ...
    export class AppComponent {
        // ...

        handleSuggestionClick(e: DxButtonGroupTypes.ItemClickEvent): void {
            this.chatSuggestions = {
                items: this.chatSuggestions.items.map((item) => (
                    item.text === e.itemData.text
                        ? { ...item, disabled: true }
                        : item
                )),
                onItemClick: this.handleSuggestionClick.bind(this),
            };

            // ...
            this.messages = [...messages, newMessage];
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
    import { type DxButtonGroupTypes } from 'devextreme-vue/button-group';

    // ...

    function handleSuggestionClick(e: DxButtonGroupTypes.ItemClickEvent): void {
        chatSuggestions.value = {
            items: chatSuggestions.value.items.map((item) => (
                item.text === e.itemData.text
                    ? { ...item, disabled: true }
                    : item
            )),
            onItemClick: handleSuggestionClick,
        };

        // ...
        messages.value = [...messages.value, newMessage];
    };
    </script>


##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useState } from 'react';
    import { Chat, type ChatTypes } from 'devextreme-react/chat';
    import { type ButtonGroupTypes } from 'devextreme-react/button-group';

    function App(): JSX.Element {
        // ...

        const handleSuggestionClick = useCallback((e: ButtonGroupTypes.ItemClickEvent) => {
            setSuggestionItems((items) => {
                return items.map((item) => (
                    item.text === e.itemData.text
                        ? { ...item, disabled: true }
                        : item
                ));
            });

            // ...
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        }, []);

        return (
            <Chat
                suggestions={chatSuggestions}
            />
        );
    }

---