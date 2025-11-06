SpeechToText returns transcription results in the [onResult](/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onResult) handler. Final transcriptions are nested within the **onResult** parameter (a [ResultEvent](/Documentation/ApiReference/UI_Components/dxSpeechToText/Types/ResultEvent/) object). To access final transcriptions, implement the following code:

    onResult(e) {
        const resultText = Object.values(e.event.results)
            .map((resultItem) => resultItem[0].transcript)
            .join(' ');
    },

To integrate the component with a text input (for instance, DevExtreme [TextArea](/Documentation/Guide/UI_Components/TextArea/Getting_Started_with_TextArea/)), update the input's value in **onResult**:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const textArea = $('#textarea-container').dxTextArea({
            placeholder: 'Transcribed text will appear here...',
        }).dxTextArea('instance');

        $("#speech-to-text").dxSpeechToText({
            onResult(e) {
                const resultText = Object.values(e.event.results)
                    .map((resultItem) => resultItem[0].transcript)
                    .join(' ');

                textArea.option('value', resultText);
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-speech-to-text
        (onResult)="handleResult($event)"
    ></dx-speech-to-text>
    <dx-text-area
        placeholder="Transcribed text will appear here..."
        [(value)]="textAreaValue"
    ></dx-text-area>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { type DxSpeechToTextTypes } from 'devextreme-angular/ui/speech-to-text';

    // ...
    export class AppComponent {
        textAreaValue = '';

        handleResult(e: SpeechToTextTypes.ResultEvent): void {
            const resultText = Object.values(e.event.results)
                .map((resultItem: unknown) => (resultItem as SpeechRecognitionResult)[0].transcript)
                .join(' ');

            this.textAreaValue = resultText;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxSpeechToText, type DxSpeechToTextTypes } from 'devextreme-vue/speech-to-text';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    const textAreaValue = ref<string>('');

    function handleResult(e: DxSpeechToTextTypes.ResultEvent): void {
        const resultText = Object.values(e.event.results)
            .map((resultItem: unknown) => (resultItem as SpeechRecognitionResult)[0].transcript)
            .join(' ');

        textAreaValue.value = resultText;
    }

    </script>
    <template>
        <DxSpeechToText
            @result="handleResult"
        />
        <DxTextArea
            placeholder="Transcribed text will appear here..."
            v-model:value="textAreaValue"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    import React, { JSX, useCallback, useState } from 'react';
    import { SpeechToText, type SpeechToTextTypes } from 'devextreme-react/speech-to-text';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    const [textAreaValue, setTextAreaValue] = useState<string>('');

    const handleResult = useCallback((e: SpeechToTextTypes.ResultEvent): void => {
        const resultText = Object.values(e.event.results)
            .map((result: unknown) => (result as SpeechRecognitionResult)[0].transcript)
            .join('');

        setTextAreaValue(resultText);
    }, []);

    function App(): JSX.Element {
        return (
            <div className="demo-container">
                <SpeechToText
                    onResult={handleResult}
                />
                <TextArea
                    placeholder="Transcribed text will appear here..."
                    value={textAreaValue}
                />
            </div>
        );
    }

---
