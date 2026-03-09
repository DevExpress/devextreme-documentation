---
id: AIIntegration.Options.lang
type: String
---
---
##### shortDescription
Specifies the AI response language.

---
Configure this property to pass language information to the AI service in a system prompt. You can use language codes such as [ISO 639](https://en.wikipedia.org/wiki/ISO_639) or [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) or plain language names (for instance, "English").

---
##### jQuery

    <!-- tab: index.js -->
    const aiIntegration = new DevExpress.aiIntegration({
        sendRequest({ prompt }) {
            // ...
        },
    }, {
        lang: 'en-EN',
    });

    <!-- tab: index.html -->
    <head>
        <!-- ... -->
        <script type="text/javascript" src="../artifacts/js/dx.ai-integration.js" charset="utf-8"></script>
        <!-- or if using CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/devextreme-dist/cdnjs_version/js/dx.ai-integration.js"></script>
    </head>

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { AIIntegration } from 'devextreme-angular/common/ai-integration';
    // ...
    export class AppComponent {
        aiIntegration = new AIIntegration({
            sendRequest: ({ prompt }) => {
                // ...
            },
        }, {
            lang: 'en-EN',
        });
    }

##### Vue

    <!-- tab: App.vue -->
    <script lang="ts" setup>
    import { AIIntegration } from 'devextreme-vue/common/ai-integration';

    const aiIntegration = new AIIntegration({
        sendRequest: ({ prompt }) => {
            // ...
        },
    }, {
        lang: 'en-EN',
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import { AIIntegration } from 'devextreme-react/common/ai-integration';

    const aiIntegration = new AIIntegration({
        sendRequest: ({ prompt }) => {
            // ...
        },
    }, {
        lang: 'en-EN',
    });

---

[note] To limit the use of AI resources, specify a single language.
