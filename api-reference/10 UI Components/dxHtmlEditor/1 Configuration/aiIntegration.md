---
id: dxHtmlEditor.Options.aiIntegration
type: AIIntegration | undefined
default: undefined
---
---
##### shortDescription
Binds the AI service to the HTML Editor.

---
To activate AI functionality in HTML Editor, specify:

- [AIIntegration](/api-reference/40%20Common%20Types/AIIntegration '/Documentation/ApiReference/Common_Types/AIIntegration/') class
- *'ai'* [toolbar](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/toolbar '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/') item

---
##### jQuery

    <!-- tab: index.js -->
    const aiIntegration = new DevExpress.aiIntegration.AIIntegration(provider);

    $("#htmlEditor").dxHtmlEditor({
        // ...
        aiIntegration,
        toolbar: {
            items: [
                {
                    name: 'ai',
                    commands: [
                        'summarize',
                        'translate',
                        'askAI',
                    ],
                },
            ],
        }
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
    import { AIIntegration } from 'devextreme-angular/common/ai-integration';
    import { AICommand } from 'devextreme/ui/html_editor';
    // ...
    export class AppComponent {
        aiIntegration = new AIIntegration(provider);
        const commands: Array<AICommand> = [
            'summarize',
            'translate',
            'askAI',
        ];
    }

    <!-- tab: app.component.html -->
    <dx-html-editor [aiIntegration]="aiIntegration">
        <dxo-html-editor-toolbar>
            <dxi-html-editor-item name="ai" [commands]="commands"></dxi-html-editor-item>
        </dxo-html-editor-toolbar>
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor :ai-integration="aiIntegration">
            <DxToolbar>
                <DxItem
                    name="ai"
                    :commands="commands"
                />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script setup lang="ts">
    import {
        DxHtmlEditor,
        DxToolbar,
        DxItem,
    } from 'devextreme-vue/html-editor';
    import { AIIntegration } from 'devextreme-vue/common/ai-integration';

    const aiIntegration = new AIIntegration(provider);
    const commands = [
        'summarize',
        'translate',
        'askAI',
    ];
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import HtmlEditor, {
        Toolbar,
        Item,
    } from 'devextreme-react/html-editor';
    import { AIIntegration } from 'devextreme-react/common/ai-integration';
    import { AICommand } from 'devextreme/ui/html_editor';

    const aiIntegration = new AIIntegration(provider);
    const commands: Array<AICommand> = [
        'summarize',
        'translate',
        'askAI',
    ];

    const App = () => {
        return (
            <HtmlEditor aiIntegration={aiIntegration}>
                <Toolbar>
                    <Item name="ai" commands={commands} />
                </Toolbar>
            </HtmlEditor>
        );
    }

---