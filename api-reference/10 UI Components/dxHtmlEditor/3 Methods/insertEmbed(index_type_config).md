---
id: dxHtmlEditor.insertEmbed(index, type, config)
---
---
##### shortDescription
Inserts an embedded content at the specified position.

##### param(index): Number
A zero-based index at which to insert an embedded content.

##### param(type): String
An embedded format's [name](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats/00%20Formats.md '/Documentation/Guide/UI_Components/HtmlEditor/Formats/').

##### param(config): any
An embedded format's [value](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats/00%20Formats.md '/Documentation/Guide/UI_Components/HtmlEditor/Formats/').

---
---
##### jQuery

    <!--JavaScript-->
    // Adds an image at the beginning of the content
    $("#htmlEditorContainer").dxHtmlEditor("instance").insertEmbed(0, "extendedImage", {
        src: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png",
        alt: "Photo",
        width: "100px"
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
        insertImageAtTheBeginning() {
            this.htmlEditor.instance.insertEmbed(0, "extendedImage", {
                src: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png",
                alt: "Photo",
                width: "100px"
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
            insertImageAtTheBeginning() {
                // Makes the first five characters bold and underlined
                this.htmlEditor.insertEmbed(0, "extendedImage", {
                    src: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png",
                    alt: "Photo",
                    width: "100px"
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
        
        const insertImageAtTheBeginning = () => {
            // Makes the first five characters bold and underlined
            htmlEditor.current.instance().insertEmbed(0, "extendedImage", {
                src: "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png",
                alt: "Photo",
                width: "100px"
            });
        };

        return (
            <HtmlEditor ref={htmlEditor}>
                {/* */}
            </HtmlEditor>
        );
    }

---
