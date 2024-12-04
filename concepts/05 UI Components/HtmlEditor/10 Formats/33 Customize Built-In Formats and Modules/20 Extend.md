You can extend the HTML Editor's <a href="https://github.com/DevExpress/DevExtreme/tree/24_1/packages/devextreme/js/__internal/ui/html_editor/formats" target="_blank">formats</a> and <a href="https://github.com/DevExpress/DevExtreme/tree/24_1/packages/devextreme/js/__internal/ui/html_editor/modules" target="_blank">modules</a>, and also the DevExtreme Quill's <a href="https://github.com/DevExpress/devextreme-quill/tree/master/formats" target="_blank">formats</a> and <a href="https://github.com/DevExpress/devextreme-quill/tree/master/modules" target="_blank">modules</a>. To get a format or module for further extension, pass *"formats/[formatName]"* or *"modules/[moduleName]"* to the [get(componentPath)](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/get(componentPath).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#getcomponentPath') method.

In the following code, the `strike` format is extended so that the strikethrough text is non-editable when the format is applied. The extended format is then [registered](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/register(components).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#registercomponents').

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            // ...
            onInitialized: function(e) {
                const htmlEditor = e.component;
                const Strike = htmlEditor.get("formats/strike");
                class NonEditableStrike extends Strike {
                    // Overrides the method that creates a DOM node for the formatted text
                    static create(value) {
                        // Creates a DOM node using the parent's implementation
                        const node = super.create(value);
                        node.setAttribute('contenteditable', false);
                        return node;
                    }
                }
                // Replaces the built-in `strike` format
                htmlEditor.register({ "formats/strike": NonEditableStrike });
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-html-editor
        (onInitialized)="onInitialized($event)">
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onInitialized (e) {
            const htmlEditor = e.component;
            const Strike = htmlEditor.get("formats/strike");
            class NonEditableStrike extends Strike {
                // Overrides the method that creates a DOM node for the formatted text
                static create(value) {
                    // Creates a DOM node using the parent's implementation
                    const node = super.create(value);
                    node.setAttribute('contenteditable', false);
                    return node;
                }
            }
            // Replaces the built-in `strike` format
            htmlEditor.register({ "formats/strike": NonEditableStrike });
        }
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
        <DxHtmlEditor @initialized="onInitialized"/>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxHtmlEditor } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor
        },
        methods: {
            onInitialized(e) {
                const htmlEditor = e.component;
                const Strike = htmlEditor.get('formats/strike');
                class NonEditableStrike extends Strike {
                    // Overrides the method that creates a DOM node for the formatted text
                    static create(value) {
                        // Creates a DOM node using the parent's implementation
                        const node = super.create(value);
                        node.setAttribute('contenteditable', false);
                        return node;
                    }
                }
                // Replaces the built-in `strike` format
                htmlEditor.register({
                    'formats/strike': NonEditableStrike
                });
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { HtmlEditor } from 'devextreme-react/html-editor';

    class App extends React.Component {
        onInitialized(e) {
            const htmlEditor = e.component;
            const Strike = htmlEditor.get('formats/strike');
            class NonEditableStrike extends Strike {
                // Overrides the method that creates a DOM node for the formatted text
                static create(value) {
                    // Creates a DOM node using the parent's implementation
                    const node = super.create(value);
                    node.setAttribute('contenteditable', false);
                    return node;
                }
            }
            // Replaces the built-in `strike` format
            htmlEditor.register({
                'formats/strike': NonEditableStrike
            });
        }

        render() {
            return (
                <HtmlEditor onInitialized={this.onInitialized}/>
            );
        }

    }

    export default App;

---

[note] Quill registers modules globally in a static function. You cannot register different modules for different HTML Editor instances. If you register a module for one HTML Editor, this module will be registered for all other HTML Editors on the page/application.
