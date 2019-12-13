---
id: dxHtmlEditor.register(components)
---
---
##### shortDescription
Registers custom formats and modules.

##### param(modules): Object
Formats and modules to be registered.        
This object should have the following structure:            
`{ "path1": "object1", ... }`           
where `path1` is *formats/[formatName]* for formats or *modules/[moduleName]* for modules.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...
        var htmlEditor = $("#htmlEditorContainer").dxHtmlEditor("instance");
        htmlEditor.register({ "modules/myModule": moduleObject });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild, AfterViewInit } from '@angular/core';
    import { DxHtmlEditorComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent, { static: false }) htmlEditor: DxHtmlEditorComponent;
        // Prior to Angular 8
        // @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;

        ngAfterViewInit() {
            let htmlEditor = this.htmlEditor.instance;
            htmlEditor.register({ "modules/myModule": moduleObject });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-html-editor ...
            :ref="htmlEditorRefName">
        </dx-html-editor>
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
                this.htmlEditor.registerModules({ "modules/myModule": moduleObject });
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
            this.htmlEditor.register({ "modules/myModule": moduleObject });
        }
    }
    export default App;

---

#####See Also#####
- [get(componentPath)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/get(componentPath).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#getcomponentPath')
- [customizeModules](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/customizeModules.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/#customizeModules')