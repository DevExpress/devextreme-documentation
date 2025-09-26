---
id: dxSpeechToText.Options.onResult
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed when the Web Speech API returns a [result](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/result_event).

##### param(e): ui/speech_to_text:ResultEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
The following code snippet demonstrates how to extract transcribed text in the **onResult** handler:

---

##### jQuery

    <!-- tab: index.js -->
    $('#speech-to-text').dxSpeechToText({
        onResult(e) {
            const resultText = Object.values(e.event.results)
                .map((resultItem) => resultItem[0].transcript)
                .join(" ");
        }
    })

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-speech-to-text
        (onResult)="handleResult($event)"
    ></dx-speech-to-text>

    <!-- tab: app.component.ts -->
    import { DxSpeechToTextComponent, type DxSpeechToTextTypes } from 'devextreme-angular/ui/speech-to-text';

    // ...
    export class AppComponent {
        handleResult(e: DxSpeechToTextTypes.ResultEvent) {
            const resultText = Object.values(e.event.results)
                .map((resultItem) => resultItem[0].transcript)
                .join(" ");
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSpeechToText
            @result="handleResult"
        />
    </template>

    <script setup lang="ts">
    import { DxSpeechToText, DxCustomSpeechRecognizer, type DxSpeechToTextTypes } from 'devextreme-vue/speech-to-text';

    function handleResult(e: DxSpeechToTextTypes.ResultEvent) {
        const resultText = Object.values(e.event.results)
            .map((resultItem) => resultItem[0].transcript)
            .join(" ");
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import { SpeechToText, CustomSpeechRecognizer, type SpeechToTextTypes } from 'devextreme-react/speech-to-text';

    function handleResult(e: DxSpeechToTextTypes.ResultEvent): void {
        const resultText = Object.values(e.event.results)
            .map((resultItem) => resultItem[0].transcript)
            .join(" ");
    }

    function App(): JSX.Element {
        return (
            <SpeechToText
                onResult={handleResult}
            />
        );
    }

---

[note] The component does not call this handler if you implement a [custom speech recognition engine](/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/customSpeechRecognizer/)