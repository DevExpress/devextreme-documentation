---
id: dxHtmlEditor.getModule(moduleName)
---
---
##### shortDescription
Gets instance of a [module](https://github.com/DevExpress/devextreme-quill/tree/master/modules). 

##### return: Object
A module instance. 

##### param(moduleName): String
The name of a [registered](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#registercomponents) module. 

---
You can use DevExtreme Quill modules, DevExtreme UI [modules](https://github.com/DevExpress/DevExtreme/tree/20_2/js/ui/html_editor/modules) or use your own custom modules.

Make sure that modules you want to get through this method are enabled (see customizeModules).

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

