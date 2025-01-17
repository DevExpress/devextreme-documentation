---
id: dxHtmlEditor.insertText(index, text, formats)
---
---
##### shortDescription
Inserts formatted text at the specified position. Used with all formats except [embedded](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats/00%20Formats.md '/Documentation/Guide/UI_Components/HtmlEditor/Formats/').

##### param(index): Number
A zero-based index at which to insert text.

##### param(text): String
The text to be inserted.

##### param(formats): Object
The formats to be applied.      
This object should have the following structure:        
`{ "formatName1": "formatValue1", ... }`

---
---
##### jQuery

    <!--JavaScript-->
    // Inserts bold, green text at the beginning of the content
    $("#htmlEditorContainer").dxHtmlEditor("instance").insertText(0, "I will be the first", { 
        bold: true, 
        color: "green" 
    });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent, { static: false }) htmlEditor: DxHtmlEditorComponent;
        // Prior to Angular 8
        // @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        insertTextAtTheBeginning() {
            // Inserts bold, green text at the beginning of the content
            this.htmlEditor.instance.insertText(0, "I will be the first", { 
                bold: true, 
                color: "green" 
            });
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

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor :ref="htmlEditorRefKey">
            <!-- ... -->
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxHtmlEditor from 'devextreme-vue/html-editor';

    const htmlEditorRefKey = "my-html-editor";

    export default {
        components: {
            DxHtmlEditor
        },
        data() {
            return {
                htmlEditorRefKey
            }
        },
        methods: {
            insertTextAtTheBeginning() {
                // Inserts bold, green text at the beginning of the content
                this.htmlEditor.insertText(0, "I will be the first", { 
                    bold: true, 
                    color: "green" 
                });
            }
        },
        computed: {
            htmlEditor: function() {
                return this.$refs[htmlEditorRefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import { useRef } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import HtmlEditor from 'devextreme-react/html-editor';

    export default function App() {
        const htmlEditor = useRef(null);
        
        const insertTextAtTheBeginning = () => {
            // Inserts bold, green text at the beginning of the content
            htmlEditor.current.instance().insertText(0, "I will be the first", { 
                bold: true, 
                color: "green" 
            });
        };

        return (
            <HtmlEditor ref={htmlEditor}>
                {/* */}
            </HtmlEditor>
        );
    }

---