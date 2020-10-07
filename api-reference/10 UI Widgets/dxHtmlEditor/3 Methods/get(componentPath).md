---
id: dxHtmlEditor.get(componentPath)
---
---
##### shortDescription
Gets a format, module, or <a href="https://github.com/quilljs/parchment/" target="_blank">Parchment</a>.

##### return: Object
A format, module, or Parchment content.

##### param(componentPath): String
A path to a format (*"formats/[formatName]"*), module (*"modules/[moduleName]"*), or Parchment (*"parchment"*).

---
You can perform the following tasks after getting a format, module, or Parchment:

- **Modify the format**      
You can change the markup tag associated with the format and allowed format values, as shown in the code example after this list.

- **<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends" target="_blank">Extend</a> the format or module**     
You can extend **HtmlEditor**'s <a href="https://github.com/DevExpress/DevExtreme/tree/20_2/js/ui/html_editor/formats" target="_blank">formats</a> and <a href="https://github.com/DevExpress/DevExtreme/tree/20_2/js/ui/html_editor/modules" target="_blank">modules</a>, and also the DevExtreme Quill's <a href="https://github.com/DevExpress/devextreme-quill/tree/master/formats" target="_blank">formats</a> and <a href="https://github.com/DevExpress/devextreme-quill/tree/master/modules" target="_blank">modules</a>. See the [Extend Built-In Formats and Modules](/concepts/05%20Widgets/HtmlEditor/10%20Formats/33%20Customize%20Built-In%20Formats%20and%20Modules/20%20Extend.md '/Documentation/Guide/Widgets/HtmlEditor/Formats/#Customize_Built-In_Formats_and_Modules/Extend') topic for the code example.

- **Create a custom format based on the Parchment**     
Refer to the <a href="https://github.com/quilljs/parchment/blob/master/README.md" target="_blank">Parchment documentation</a> for more information.

In the following code, the `bold` format is associated with the `<b>` tag instead of the default `<strong>` tag. After the modification, the format is [registered](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/register(components).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#registercomponents').

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...
        var htmlEditor = $("#htmlEditorContainer").dxHtmlEditor("instance");

        var Bold = htmlEditor.get("formats/bold");
        Bold.tagName = "b";

        htmlEditor.register({ "formats/bold": Bold });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor ... >
    </dx-html-editor>

<!---->

    <!-- tab: app.component.ts -->
    import { Component, ViewChild, AfterViewInit } from '@angular/core';
    import { DxHtmlEditorComponent } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent, { static: false }) htmlEditor: DxHtmlEditorComponent;
        // Prior to Angular 8
        // @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;

        ngAfterViewInit() {
            let htmlEditor = this.htmlEditor.instance;

            let Bold = htmlEditor.get("formats/bold");
            Bold.tagName = "b";

            htmlEditor.register({ "formats/bold": Bold });
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
            :ref="htmlEditorRefName">
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxHtmlEditor from 'devextreme-vue/html-editor';

    const htmlEditorRefName = "myHtmlEditor";

    export default {
        components: {
            DxHtmlEditor
        },
        data() {
            return {
                htmlEditorRefName
            }
        },
        computed: {
            htmlEditor: function() {
                return this.$refs[htmlEditorRefName].instance;
            }
        },
        mounted: function() {
            this.$nextTick(function() {
                let Bold = this.htmlEditor.get("formats/bold");
                Bold.tagName = "b";

                this.htmlEditor.register({ "formats/bold": Bold });
            })
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
        constructor(props) {
            super(props);
            this.htmlEditorRef = React.createRef();
        }

        get htmlEditor() {
            return this.htmlEditorRef.current.instance;
        }

        render() {
            return (
                <HtmlEditor ...
                    ref={this.htmlEditorRef}>
                </HtmlEditor>
            );
        }

        componentDidMount() {
            let Bold = this.htmlEditor.get("formats/bold");
            Bold.tagName = "b";

            this.htmlEditor.register({ "formats/bold": Bold });
        }
    }
    export default App;

---

#####See Also#####
- [register(components)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/register(components).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#registercomponents')
- [customizeModules](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/customizeModules.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/#customizeModules')
