---
id: CustomSpeechRecognizer.isListening
type: Boolean
default: false
---
---
##### shortDescription
Indicates whether the custom speech recognition engine is listening.

---
Modify **isListening** to update the component state:

---

##### jQuery

    <!-- tab: index.js -->
    $('#speech-to-text').dxSpeechToText({
        customSpeechRecognizer: {
            enabled: true,
        },
        onStartClick(e) {
            e.component.option('customSpeechRecognizer.isListening', true);
        },
        onStopClick(e) {
            e.component.option('customSpeechRecognizer.isListening', false);
        },
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-speech-to-text
        (onStartClick)="handleStartClick($event)"
        (onStopClick)="handleStopClick($event)"
    >
        <dxo-speech-to-text-custom-speech-recognizer
            [enabled]="true"
        ></dxo-speech-to-text-custom-speech-recognizer>
    </dx-speech-to-text>

    <!-- tab: app.component.ts -->
    import { DxSpeechToTextComponent, type DxSpeechToTextTypes } from 'devextreme-angular/ui/speech-to-text';

    // ...
    export class AppComponent {
        handleStartClick(e: DxSpeechToTextTypes.StartClickEvent) {
            e.component.option('customSpeechRecognizer.isListening', true);
        }

        handleStopClick(e: DxSpeechToTextTypes.StopClickEvent) {
            e.component.option('customSpeechRecognizer.isListening', false);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSpeechToText
            @start-click="handleStartClick"
            @stop-click="handleStopClick"
        >
            <DxCustomSpeechRecognizer
                :enabled="true"
            />
        </DxSpeechToText>
    </template>

    <script setup lang="ts">
    import { DxSpeechToText, DxCustomSpeechRecognizer, type DxSpeechToTextTypes } from 'devextreme-vue/speech-to-text';

    function handleStartClick(e: DxSpeechToTextTypes.StartClickEvent) {
        e.component.option('customSpeechRecognizer.isListening', true);
    }

    function handleStopClick(e: DxSpeechToTextTypes.StopClickEvent) {
        e.component.option('customSpeechRecognizer.isListening', false);
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import { SpeechToText, CustomSpeechRecognizer, type SpeechToTextTypes } from 'devextreme-react/speech-to-text';

    function handleStartClick(e: SpeechToTextTypes.StartClickEvent): void {
        e.component.option('customSpeechRecognizer.isListening', true);
    }

    function handleStopClick(e: SpeechToTextTypes.StopClickEvent): void {
        e.component.option('customSpeechRecognizer.isListening', false);
    }

    function App(): JSX.Element {
        return (
            <SpeechToText
                onStartClick={handleStartClick}
                onStopClick={handleStopClick}
            >
                <CustomSpeechRecognizer
                    enabled={true}
                />
            </SpeechToText>
        );
    }

---

This property affects the SpeechToText icon ([startIcon](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/startIcon.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#startIcon')/[stopIcon](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/stopIcon.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#stopIcon')), text ([startText](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/startText.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#startText')/[stopText](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/stopText.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#stopText')), and click handler ([onStartClick](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/onStartClick.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onStartClick')/[onStopClick](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/onStopClick.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onStopClick')).