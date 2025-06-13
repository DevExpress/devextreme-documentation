---
id: AITranslateCommand
module: ui/html_editor
export: AITranslateCommand
acceptValues: 'translate'
type: AICommandBase
inherits: AICommandBase
generateTypeLink: 
---
---
##### shortDescription
Specifies a "translate" command for the ["ai" toolbar item](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Types/AIToolbarItem/).

---
To allow users to use this command, add its name to the [commands](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/commands/) array:

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
                        'translate',
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
                <dxi-html-editor-command name="translate"></dxi-html-editor-command>
            </dxi-html-editor-toolbar-item>
        </dxo-html-editor-toolbar>
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor
            :ai-integration="aiIntegration"
        >
            <DxToolbar>
                <DxItem name="ai">
                    <DxCommand name="translate" />
                </DxItem>
            </DxToolbar>
        </DxHtmlEditor>
    </template>
    <script setup lang="ts">
    import { DxHtmlEditor, DxToolbar, DxItem, DxCommand } from 'devextreme-vue/html-editor';
    // ...
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import HtmlEditor, { Toolbar, Item, Command } from 'devextreme-react/html-editor';

    export default function App() {
        return (
            <HtmlEditor
                aiIntegration={aiIntegration}
            >
                <Toolbar>
                    <Item name="ai">
                        <Command name="translate" />
                    </Item>
                </Toolbar>
            </HtmlEditor>
        );
    }

---
