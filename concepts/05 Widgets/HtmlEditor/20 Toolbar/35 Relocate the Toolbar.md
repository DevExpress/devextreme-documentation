The toolbar occupies the top part of the **HtmlEditor** and is rendered inside the widget's container. To relocate the toolbar, specify a different [container](/api-reference/_hidden/dxHtmlEditorToolbar/container.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/#container') for the toolbar.

In the following code, the toolbar is placed in a separate `<div>` under the **HtmlEditor**:

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                // ...
                container: "#htmlEditorFooter"
            }
        })
    })

    <!--HTML-->
    <div id="htmlEditorContainer"></div>
    <div id="htmlEditorFooter"></div>

##### Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar ...
            container="#htmlEditorFooter">
        </dxo-toolbar>
    </dx-html-editor>
    <div id="htmlEditorFooter"></div>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

##### Vue

    <template>
        <div>
            <DxHtmlEditor>
                <DxToolbar ...
                    container="#htmlEditorFooter"/>
            </DxHtmlEditor>
            <div id="htmlEditorFooter"></div>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxHtmlEditor,
        DxToolbar
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor,
            DxToolbar
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { HtmlEditor, Toolbar } from 'devextreme-react/html-editor';

    class App extends React.Component {
        render() {
            return (
                <div>
                    <HtmlEditor>
                        <Toolbar ...
                            container="#htmlEditorFooter"/>
                    </HtmlEditor>
                    <div id="htmlEditorFooter"></div>
                </div>
            );
        }
    }

    export default App;

---
