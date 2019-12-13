You can extend the **HtmlEditor**'s <a href="https://github.com/DevExpress/DevExtreme/tree/19_2/js/ui/html_editor/formats" target="_blank">formats</a> and <a href="https://github.com/DevExpress/DevExtreme/tree/19_2/js/ui/html_editor/modules" target="_blank">modules</a> and also Quill's <a href="https://github.com/quilljs/quill/tree/1.3.6/formats" target="_blank">formats</a> and <a href="https://github.com/quilljs/quill/tree/1.3.6/modules" target="_blank">modules</a>. To get a format or module for further extension, pass *"formats/[formatName]"* or *"modules/[moduleName]"* to the [get(componentPath)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/get(componentPath).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#getcomponentPath') method.

In the following code, the `strike` format is extended so that the stricken out text is non-editable when the format is applied. The extended format is then [registered](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/register(components).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#registercomponents').

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            // ...
            onInitialized: function(e) {
                var htmlEditor = e.component;
                var Strike = htmlEditor.get("formats/strike");
                class NonEditableStrike extends Strike {
                    // Overrides the method that creates a DOM node for the formatted text
                    static create(value) {
                        // Creates a DOM node using the parent's implementation
                        let node = super.create(value);
                        node.setAttribute('contenteditable', false);
                        return node;
                    }
                }
                // Replaces the built-in `strike` format
                htmlEditor.register({ "formats/strike": NonEditableStrike });
            }
        });

    });

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onInitialized (e) {
            let htmlEditor = e.component;
            let Strike = htmlEditor.get("formats/strike");
            class NonEditableStrike extends Strike {
                // Overrides the method that creates a DOM node for the formatted text
                static create(value) {
                    // Creates a DOM node using the parent's implementation
                    let node = super.create(value);
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

    <!--HTML-->
    <dx-html-editor
        (onInitialized)="onInitialized($event)">
    </dx-html-editor>

---
