SpeechToText returns [Web Speech API errors](https://webaudio.github.io/web-speech-api/#speechreco-error) in the [onError](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/onError.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/#onError') handler. Error codes are nested within the **onError** parameter (an [ErrorEvent](/api-reference/10%20UI%20Components/dxSpeechToText/9%20Types/ErrorEvent '/Documentation/ApiReference/UI_Components/dxSpeechToText/Types/ErrorEvent/') object). To display these errors to users, you can implement the [notify](/api-reference/50%20Common/utils/ui/notify(message_stack).md '/Documentation/ApiReference/Common/Utils/ui/#notifymessage_stack') utility method:

---

##### jQuery

    onError(e) {
        DevExpress.ui.notify(e.event.error);
    }

##### Angular

    import notify from 'devextreme/ui/notify';

    onError(e) {
        const speechEvent = e.event as SpeechRecognitionErrorEvent;
        notify(speechEvent.error);
    }

##### Vue

    import notify from 'devextreme/ui/notify';

    onError(e) {
        const speechEvent = e.event as SpeechRecognitionErrorEvent;
        notify(speechEvent.error);
    }

##### React

    import notify from 'devextreme/ui/notify';

    onError(e) {
        const speechEvent = e.event as SpeechRecognitionErrorEvent;
        notify(speechEvent.error);
    }

---


This example implements an `if` statement to display a unique message for `not-allowed` errors (thrown when users deny microphone permissions) and a common message for other errors:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...

        $("#speech-to-text").dxSpeechToText({
            onError(e) {
                if (e.event.error === 'not-allowed') {
                    DevExpress.ui.notify('Microphone access denied. Please grant microphone permissions and try again.', 'error', 5000);
                } else {
                    DevExpress.ui.notify(`An error occurred during speech recognition: ${e.event.error}`, 'error', 5000);
                }
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-speech-to-text ...
        (onError)="handleError($event)"
    ></dx-speech-to-text>
    <!-- ... -->

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { type DxSpeechToTextTypes } from 'devextreme-angular/ui/speech-to-text';
    import notify from 'devextreme/ui/notify';

    // ...
    export class AppComponent {
        handleError(e: SpeechToTextTypes.ErrorEvent): void {
            const speechEvent = e.event as SpeechRecognitionErrorEvent;
            if (speechEvent.error === 'not-allowed') {
                notify('Microphone access denied. Please grant microphone permissions and try again.', 'error', 5000);
            } else {
                notify(`An error occurred during speech recognition: ${e.event.error}`, 'error', 5000);
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSpeechToText ...
            @error="handleError"
        />
        <!-- ... -->
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxSpeechToText, type DxSpeechToTextTypes } from 'devextreme-vue/speech-to-text';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import notify from 'devextreme/ui/notify';

    // ...
    function handleError(e: DxSpeechToTextTypes.ErrorEvent): void {
        const speechEvent = e.event as SpeechRecognitionErrorEvent;
        if (speechEvent.error === 'not-allowed') {
            notify('Microphone access denied. Please grant microphone permissions and try again.', 'error', 5000);
        } else {
            notify(`An error occurred during speech recognition: ${e.event.error}`, 'error', 5000);
        }
    }

    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { JSX, useCallback, useState } from 'react';
    import { SpeechToText, type SpeechToTextTypes } from 'devextreme-react/speech-to-text';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import notify from 'devextreme/ui/notify';

    function App(): JSX.Element {
        // ...
        const handleError = useCallback((e: SpeechToTextTypes.ErrorEvent): void => {
            const speechEvent = e.event as SpeechRecognitionErrorEvent;
            if (speechEvent.error === 'not-allowed') {
                notify('Microphone access denied. Please grant microphone permissions and try again.', 'error', 5000);
            } else {
                notify(`An error occurred during speech recognition: ${e.event.error}`, 'error', 5000);
            }
        }, []);

        return (
            <div className="demo-container">
                <SpeechToText ...
                    onError={handleError}
                />
                <!-- ... -->
            </div>
        );
    }

---
