SpeechToText returns [Web Speech API errors](https://webaudio.github.io/web-speech-api/#speechreco-error) in the [onError]() handler. Error codes are nested within the **onError** parameter (an [ErrorEvent]() object). To display these errors to users, you can implement the [notify]() utility method:

---

##### jQuery

    onError(e) {
        DevExpress.ui.notify(e.event.error);
    }

##### Angular

    import notify from 'devextreme/ui/notify';

    onError(e) {
        notify(e.event.error);
    }

##### Vue

    import notify from 'devextreme/ui/notify';

    onError(e) {
        notify(e.event.error);
    }

##### React

    import notify from 'devextreme/ui/notify';

    onError(e) {
        notify(e.event.error);
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
            if (e.event.error === 'not-allowed') {
                notify('Microphone access denied. Please grant microphone permissions and try again.', 'error', 5000);
            } else {
                notify(`An error occurred during speech recognition: ${e.event.error}`, 'error', 5000);
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxSpeechToText, type DxSpeechToTextTypes } from 'devextreme-vue/speech-to-text';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import notify from 'devextreme/ui/notify';

    // ...
    function handleError(e: DxSpeechToTextTypes.ErrorEvent): void {
        if (e.event.error === 'not-allowed') {
            notify('Microphone access denied. Please grant microphone permissions and try again.', 'error', 5000);
        } else {
            notify(`An error occurred during speech recognition: ${e.event.error}`, 'error', 5000);
        }
    }

    </script>
    <template>
        <DxSpeechToText ...
            @error="handleError"
        />
        <!-- ... -->
    </template>

##### React

    <!-- tab: App.tsx -->
    import React, { JSX, useCallback, useState } from 'react';
    import { SpeechToText, type SpeechToTextTypes } from 'devextreme-react/speech-to-text';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import notify from 'devextreme/ui/notify';

    // ...
    const handleError = useCallback((e: SpeechToTextTypes.ErrorEvent): void => {
        if (e.event.error === 'not-allowed') {
            notify('Microphone access denied. Please grant microphone permissions and try again.', 'error', 5000);
        } else {
            notify(`An error occurred during speech recognition: ${e.event.error}`, 'error', 5000);
        }
    }, []);

    function App(): JSX.Element {
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
