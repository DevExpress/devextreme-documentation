---
id: AICustomCommand
module: ui/html_editor
export: AICustomCommand
inherits: AICommandBase
generateTypeLink: 
---
---
##### shortDescription
Specifies a custom command for the ["ai" toolbar item](/api-reference/10%20UI%20Components/dxHtmlEditor/9%20Types/AIToolbarItem '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Types/AIToolbarItem/').

---
To define a custom command, do the following:

- Set `name` to *"custom"*.
- Define `text` for the title in the command list.
- Create a prompt.

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
                            name: 'custom',
                            text: 'Target Audience',
                            prompt: () => {
                                return 'Based on the text, who is the most likely target audience? Give a short explanation';
                            },
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
                <dxi-html-editor-command 
                    name="custom" 
                    text="Target Audience"
                    [prompt]="targetAudiencePrompt"
                ></dxi-html-editor-command>
            </dxi-html-editor-toolbar-item>
        </dxo-html-editor-toolbar>
    </dx-html-editor>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        // ...
        targetAudiencePrompt() {
            return 'Based on the text, who is the most likely target audience? Give a short explanation';
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor
            :ai-integration="aiIntegration"
        >
            <DxToolbar>
                <DxItem name="ai">
                    <DxCommand 
                        name="custom"
                        text="Target Audience"
                        :prompt="targetAudiencePrompt" 
                    />
                </DxItem>
            </DxToolbar>
        </DxHtmlEditor>
    </template>
    <script setup lang="ts">
    import { DxHtmlEditor, DxToolbar, DxItem, DxCommand } from 'devextreme-vue/html-editor';
    // ...
    const targetAudiencePrompt = () => {
        return 'Based on the text, who is the most likely target audience? Give a short explanation';
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import HtmlEditor, { Toolbar, Item, Command } from 'devextreme-react/html-editor';

    const targetAudiencePrompt = () => {
        return 'Based on the text, who is the most likely target audience? Give a short explanation';
    }

    export default function App() {
        return (
            <HtmlEditor
                aiIntegration={aiIntegration}
            >
                <Toolbar>
                    <Item name="ai">
                        <Command 
                            name="custom" 
                            text="Target Audience"
                            prompt={targetAudiencePrompt}
                        />
                    </Item>
                </Toolbar>
            </HtmlEditor>
        );
    }

---
