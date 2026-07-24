---
id: dxHtmlEditor.Options.customizeModules
type: function(config)
---
---
##### shortDescription
Allows you to customize the DevExtreme Quill and 3rd-party modules.

##### param(config): Object
Module configurations.

---
The DevExtreme Quill modules and the API you can use to customize them are described in the <a href="https://github.com/DevExpress/devextreme-quill/tree/master/docs/modules" target="_blank">Modules</a> documentation section. For example, the <a href="https://github.com/DevExpress/devextreme-quill/blob/master/docs/modules/history.md" target="_blank">History</a> module, which handles the undo and redo operations, can be customized as follows:

---

##### jQuery

    <!-- tab: index.js -->
    $("#html-editor").dxHtmlEditor({
        customizeModules(config) {
            config.history = {
                delay: 0,
                maxStack: 5000
            };
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
            config.history = {
                delay: 0,
                maxStack: 5000,
            }; 
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
        config.history = {
            delay: 0,
            maxStack: 5000,
        }; 
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback } from 'react';
    import { HtmlEditor } from 'devextreme-react/html-editor';

    export default function App() {
        const customizeQuillModules = useCallback((config) => {
            config.history = {
                delay: 0,
                maxStack: 5000,
            };
        }, []);

        return (
            <HtmlEditor
                customizeModules={customizeQuillModules}
            />
        );
    }

---

You can configure **customizeModules** to modify the [keyboard navigation](/Documentation/Guide/UI_Components/HtmlEditor/Accessibility/#Keyboard_Navigation) behavior of HtmlEditor using `keyboard.inlineTabInsertion`:

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

If 3rd-party modules are used in the HTML Editor, refer to their documentation for information on the API.

#####See Also#####
- [get(componentPath)](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/get(componentPath).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#getcomponentPath')
- [register(components)](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/register(components).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#registercomponents')