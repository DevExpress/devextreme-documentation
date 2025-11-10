To configure **SpeechRecognition** options, define the [speechRecognitionConfig](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/speechRecognitionConfig.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/speechRecognitionConfig/') object. This example enables continuous recognition (transcription continues after speech ends):

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...

        $("#speech-to-text").dxSpeechToText({
            speechRecognitionConfig: {
                continuous: true,
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-speech-to-text ...
        [speechRecognitionConfig]="speechRecognitionConfig"
    ></dx-speech-to-text>
    <!-- ... -->

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { type DxSpeechToTextTypes } from 'devextreme-angular/ui/speech-to-text';
    import notify from 'devextreme/ui/notify';

    // ...
    export class AppComponent {
        speechRecognitionConfig = { continuous: true };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSpeechToText ...
            :speech-recognition-config="speechRecognitionConfig"
        />
        <!-- ... -->
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxSpeechToText, type DxSpeechToTextTypes } from 'devextreme-vue/speech-to-text';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import notify from 'devextreme/ui/notify';

    // ...
    const speechRecognitionConfig = { continuous: true };

    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { JSX, useCallback, useState } from 'react';
    import { SpeechToText, type SpeechToTextTypes } from 'devextreme-react/speech-to-text';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import notify from 'devextreme/ui/notify';

    // ...
    const speechRecognitionConfig = { continuous: true };

    function App(): JSX.Element {
        return (
            <div className="demo-container">
                <SpeechToText ...
                    speechRecognitionConfig={speechRecognitionConfig}
                />
                <!-- ... -->
            </div>
        );
    }

---