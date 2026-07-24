A user can use the following keys to interact with the HTML Editor component: 

<table class="dx-table">
    <tr>
        <th style="min-width: 64px;">PC</th>
        <th style="min-width: 64px;">Mac</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Ctrl + C</td>
        <td>&#8984; + C</td>
        <td>Copy</td>
    </tr>
    <tr>
        <td>Ctrl + V</td>
        <td>&#8984; + V</td>
        <td>Paste</td>
    </tr>
    <tr>
        <td>Ctrl + Z</td>
        <td>&#8984; + Z</td>
        <td>Undo</td>
    </tr>
    <tr>
        <td>Ctrl + Y</td>
        <td>&#8984; + Y</td>
        <td>Redo</td>
    </tr>
    <tr>
        <td>Ctrl + A</td>
        <td>&#8984; + A</td>
        <td>Select All</td>
    </tr>
    <tr>
        <td>Ctrl + B</td>
        <td>&#8984; + B</td>
        <td>Bold</td>
    </tr>
    <tr>
        <td>Ctrl + I</td>
        <td>&#8984; + I</td>
        <td>Italic</td>
    </tr>
    <tr>
        <td colspan="2">Enter</td>
        <td>Insert a line break (a new paragraph)</td>
    </tr>
    <tr>
        <td colspan="2">Shift + Enter</td>
        <td>Insert a line break (in the same paragraph)</td>
    </tr>
    <tr>
        <td colspan="2">Tab</td>
        <td>
            <ol>
                <li>Indent list items</li>
                <li>Focus the next cell in tables</li>
                <li>Insert a tab character (<code>\t</code>) in text. If <code>keyboard.inlineTabInsertion</code> is disabled, focuses the next focusable element on the page.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <td colspan="2">Shift + Tab</td>
        <td>
            <ol>
                <li>Dedent list items</li>
                <li>Focus the previous cell in tables</li>
                <li>Remove a tab character (<code>\t</code>) from text. If <code>keyboard.inlineTabInsertion</code> is disabled or text contains no tab characters, focuses the previous focusable element in the component.</li>
            </ol>
        </td>    
    </tr>
    <tr>
        <td colspan="2">Arrow Keys</td>
        <td>Navigate through the table</td>
    </tr>
    <tr>
        <td>Ctrl + Shift + Up&nbsp;Arrow</td>
        <td>&#8984; + Shift + Up&nbsp;Arrow</td>
        <td>Focus the previous focusable element in the component.</td>
    </tr>
    <tr>
        <td>Ctrl + Shift + Down&nbsp;Arrow</td>
        <td>&#8984; + Shift + Down&nbsp;Arrow</td>
        <td>Focus the next focusable element on the page.</td>
    </tr>
    <tr>
        <td colspan="2">Enter</td>
        <td>Move the cursor outside the table (when in the last row)</td>
    </tr>
    <tr>
        <td colspan="2">Esc</td>
        <td>Close active dialog</td>
    </tr>
    <tr>
        <td colspan="2">Enter</td>
        <td>Apply active dialog data</td>
    </tr>
</table>

Configure [customizeModules](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#customizeModules) to toggle `keyboard.inlineTabInsertion`:

---

##### jQuery

    <!-- tab: index.js -->
    $("#html-editor").dxHtmlEditor({
        customizeModules(config) {
            config.keyboard.inlineTabInsertion = false;
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor
        [customizeModules]="customizeQuillModules">
    </dx-html-editor>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxHtmlEditorModule } from 'devextreme-angular/ui/html-editor';

    // ...
    export class AppComponent {
        customizeQuillModules(config) {
            config.keyboard.inlineTabInsertion = false;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor
            :customize-modules="customizeQuillModules"
        />
    </template>

    <script setup lang="ts">
    import { DxHtmlEditor } from 'devextreme-vue/html-editor';

    function customizeQuillModules(config) {
        config.keyboard.inlineTabInsertion = false;
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback } from 'react';
    import { HtmlEditor } from 'devextreme-react/html-editor';

    export default function App() {
        const customizeQuillModules = useCallback((config) => {
            config.keyboard.inlineTabInsertion = false;
        }, []);

        return (
            <HtmlEditor
                customizeModules={customizeQuillModules}
            />
        );
    }

---

#include common-code-register-key-handler