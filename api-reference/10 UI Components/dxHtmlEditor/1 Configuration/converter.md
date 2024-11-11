---
id: dxHtmlEditor.Options.converter
type: Converter | undefined
default: undefined
inheritsType: Converter
---
---
##### shortDescription
Allows you to convert an HtmlEditor value between different markups.

---
---
##### jQuery

    <!-- tab: index.js -->
    const converter = {
        toHtml: (value) => {
            const result = */ Convert the value and return a string */
            return result;
        },

        fromHtml: (value) => {
            const result = /* Convert the value and return a string */
            return result;
        }
        }

    $('#editor').dxHtmlEditor({
        converter,
    });

##### Angular

    <!-- tab: app.component.ts -->
    export class AppComponent {
        toHtml(value) {
            const result = */ Convert the value and return a string */
            return result;
        }

        fromHtml(value) {
            const result = /* Convert the value and return a string */
            return result;
        }
    }

    <!-- tab: app.component.html -->
    <dx-html-editor>
        <dxo-converter
            (toHtml)="toHtml"
            (fromHtml)="fromHtml"
        >
        </dxo-converter>
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor ...>
            <DxConverter
                @to-html="toHtml"
                @from-html="fromHtml"
            />
        </DxHtmlEditor>
    </template>

    <script setup>
    import DxHtmlEditor, { DxConverter } from 'devextreme-vue/html-editor';

    const toHtml: (value) => {
        const result = */ Convert the value and return a string */
        return result;
    }

    const fromHtml: (value) => {
        const result = /* Convert the value and return a string */
        return result;
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import HtmlEditor, { Converter } from 'devextreme-react/html-editor';

    const toHtml: (value) => {
        const result = */ Convert the value and return a string */
        return result;
    }

    const fromHtml: (value) => {
        const result = /* Convert the value and return a string */
        return result;
    }
    
    function App() {
        return (
            <HtmlEditor ...>
                <Converter
                    fromHtml={fromHtml}
                    toHtml={toHtml}
                />
            </HtmlEditor>
        );
    }

    export default App;

---