---
id: dxChat.Options.inputFieldText
type: String | undefined
default: ''
---
---
##### shortDescription
Specifies the Chat input field value.

---
Use this option to get the text that users type or [dictate](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/speechToTextEnabled.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#speechToTextEnabled') in the Chat input field. 

You can also set this option to change the input field's value programmatically.

---
##### jQuery

    <!-- tab: index.js -->
    // Get the input field value
    const text = chatInstance.option('inputFieldText');

    // Set the input field value
    chatInstance.option('inputFieldText', 'Hello, Assistant!');

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat ...
        [(inputFieldText)]="inputText"
    ></dx-chat>
    <dx-button 
        text="Set Input"
        (onClick)="setInput()"
    ></dx-button>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        inputText = '';
        setInput() {
            this.inputText = 'Hello, Assistant!';
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxChat ...
        v-model:input-field-text="inputText"
    />
    <DxButton
        text="Set Input"
        @click="setInput"
    />
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import DxChat from 'devextreme-vue/chat';
    import DxButton from 'devextreme-vue/button';

    const inputText = ref('');
    const setInput = () => {
        inputText.value = 'Hello, Assistant!';
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useState } from 'react';
    import Chat from 'devextreme-react/chat';
    import Button from 'devextreme-react/button';

    function App() {
        const [inputText, setInputText] = useState('');
        const handleSetInput = () => {
            setInputText('Hello, Assistant!');
        };
        const handleInputChange = (e) => {
            setInputText(e.value);
        };

        return (
            <>
            <Chat 
                inputFieldText={inputText}
                onInputFieldTextChange={handleInputChange}
            />
            <Button 
                onClick={handleSetInput} 
                text="Set Input" 
            />
            </>
        );
    }

    export default App;
---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/PromptSuggestions/"
}
