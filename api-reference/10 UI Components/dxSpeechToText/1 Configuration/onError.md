---
id: dxSpeechToText.Options.onError
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed when the Web Speech API encounters an [error](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/error_event).

##### param(e): ui/speech_to_text:ErrorEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
The following code snippet demonstrates how to implement the [notify()](/api-reference/50%20Common/utils/ui/notify(message_stack).md '/Documentation/ApiReference/Common/Utils/ui/#notifymessage_stack') utility method to display a Web Speech API error in the **onError** handler:

---

##### jQuery

    <!-- tab: index.js -->
    $('#speech-to-text').dxSpeechToText({
        onError(e) {
            DevExpress.ui.notify(`Web Speech API encountered an error: ${e.event.error}`);
        }
    })

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-speech-to-text
        (onError)="handleError($event)"
    ></dx-speech-to-text>

    <!-- tab: app.component.ts -->
    import { DxSpeechToTextComponent, type DxSpeechToTextTypes } from 'devextreme-angular/ui/speech-to-text';
    import notify from 'devextreme/ui/notify';

    // ...
    export class AppComponent {
        handleError(e: DxSpeechToTextTypes.ErrorEvent) {
            const speechEvent = e.event as SpeechRecognitionErrorEvent;
            notify(`Web Speech API encountered an error: ${speechEvent.error}`);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSpeechToText
            @error="handleError"
        />
    </template>

    <script setup lang="ts">
    import { DxSpeechToText, type DxSpeechToTextTypes } from 'devextreme-vue/speech-to-text';
    import notify from 'devextreme/ui/notify';

    function handleError(e: DxSpeechToTextTypes.ErrorEvent) {
        const speechEvent = e.event as SpeechRecognitionErrorEvent;
        notify(`Web Speech API encountered an error: ${speechEvent.error}`);
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import { SpeechToText, type SpeechToTextTypes } from 'devextreme-react/speech-to-text';
    import notify from 'devextreme/ui/notify';

    function handleError(e: DxSpeechToTextTypes.ErrorEvent): void {
        const speechEvent = e.event as SpeechRecognitionErrorEvent;
        notify(`Web Speech API encountered an error: ${speechEvent.error}`);
    }

    function App(): JSX.Element {
        return (
            <SpeechToText
                onError={handleError}
            />
        );
    }

---

[note]

- The component does not call this handler if you implement a [custom speech recognition engine](/api-reference/10%20UI%20Components/dxSpeechToText/1%20Configuration/customSpeechRecognizer.md '/Documentation/ApiReference/UI_Components/dxSpeechToText/Configuration/customSpeechRecognizer/').

- To add all **SpeechRecognition** types (including `SpeechRecognitionErrorEvent`) to your project:

1. Install the `@types/dom-speech-recognition` package:

            npm i -D @types/dom-speech-recognition

2. Add `"dom-speech-recognition"` to the **types** array in your TypeScript configuration:

            <!-- tab: tsconfig.app.json -->
            {
                "compilerOptions": {
                    "types": ["dom-speech-recognition"],
                }
            }

[/note]
