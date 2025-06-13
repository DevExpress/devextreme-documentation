---
id: AICommandBase.options
type: any
---
---
##### shortDescription
Command options.

---
Only the following commands include predefined options:

- [changeStyle](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Types/AIChangeStyleCommand/):    
    - *"formal"*
    - *"informal"*
    - *"technical"*
    - *"business"*
    - *"creative"*
    - *"journalistic"*
    - *"academic"*
    - *"persuasive"*
    - *"narrative"*
    - *"expository"*
    - *"descriptive"*
    - *"conversational"*

- [changeTone](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Types/AIChangeToneCommand/):
    - *"professional"*
    - *"casual"*
    - *"straightforward"*
    - *"confident"*
    - *"friendly"*

- [translate](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Types/AITranslateCommand/)
    - *"Arabic"*
    - *"Chinese"*
    - *"English"*
    - *"French"*
    - *"German"*
    - *"Japanese"*
    - *"Spanish"*

If you use these commands without declaring the options array, all predefined options are available. You can assign only specific options or add custom options:

---
##### jQuery

    <!-- tab: index.js -->
    $('.html-editor').dxHtmlEditor({
        aiIntegration,
        toolbar: {
            items: [
                {
                    name: 'ai',
                    commands: [
                        {
                            name: 'translate',
                            options: ['English', 'German', 'Chinese', 'Lithuanian'],
                        }
                    ],
                }, 
            ],
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor
        [aiIntegration]="aiIntegration"
    >
        <dxo-html-editor-toolbar>
            <dxi-html-editor-toolbar-item name="ai">
                <dxi-html-editor-command name="translate" [options]="translateOptions"></dxi-html-editor-command>
            </dxi-html-editor-toolbar-item>
        </dxo-html-editor-toolbar>
    </dx-html-editor>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        // ...
        translateOptions = ['English', 'German', 'Chinese', 'Lithuanian'];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor
            :ai-integration="aiIntegration"
        >
            <DxToolbar>
                <DxItem name="ai">
                    <DxCommand name="translate" :options="translateOptions" />
                </DxItem>
            </DxToolbar>
        </DxHtmlEditor>
    </template>
    <script setup lang="ts">
    import { DxHtmlEditor, DxToolbar, DxItem, DxCommand } from 'devextreme-vue/html-editor';
    // ...
    const translateOptions = ['English', 'German', 'Chinese', 'Lithuanian'];
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import HtmlEditor, { Toolbar, Item, Command } from 'devextreme-react/html-editor';

    const translateOptions = ['English', 'German', 'Chinese', 'Lithuanian'];

    export default function App() {
        return (
            <HtmlEditor
                aiIntegration={aiIntegration}
            >
                <Toolbar>
                    <Item name="ai">
                        <Command name="translate" options={translateOptions}/>
                    </Item>
                </Toolbar>
            </HtmlEditor>
        );
    }

---

The ["custom"](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Types/AICustomCommand/) command can also include custom options.