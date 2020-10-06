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
The DevExtreme Quill modules and the API you can use to customize them are described in the <a href="https://github.com/DevExpress/devextreme-quill/tree/master/docs/docs/modules" target="_blank">Modules</a> documentation section. For example, the <a href="https://github.com/DevExpress/devextreme-quill/blob/master/docs/docs/modules/history.md" target="_blank">History</a> module, which handles the undo and redo operations, can be customized as follows:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            // ...
            customizeModules: function(config) {
                config.history = {
                    delay: 0,
                    maxStack: 5000
                }; 
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor ...
        [customizeModules]="customizeQuillModules">
    </dx-html-editor>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        customizeQuillModules(config) {
            config.history = {
                delay: 0,
                maxStack: 5000
            }; 
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxHtmlEditorModule } from 'devextreme-angular';
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxHtmlEditorModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor ...
            :customize-modules="customizeQuillModules"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxHtmlEditor from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor
        },
        methods: {
            customizeQuillModules(config) {
                config.history = {
                    delay: 0,
                    maxStack: 5000
                }; 
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import HtmlEditor from 'devextreme-react/html-editor';

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor ...
                    customizeModules={this.customizeQuillModules}
                />
            );
        }
        customizeQuillModules(config) {
            config.history = {
                delay: 0,
                maxStack: 5000
            }; 
        }
    }
    export default App;

---

If 3rd-party modules are used in the **HtmlEditor**, refer to their documentation for information on the API.

#####See Also#####
- [get(componentPath)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/get(componentPath).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#getcomponentPath')
- [register(components)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/register(components).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#registercomponents')