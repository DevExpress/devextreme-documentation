---
id: dxHtmlEditor.format(formatName, formatValue)
---
---
##### shortDescription
Applies a format to the selected content. Cannot be used with [embedded formats](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats/00%20Formats.md '/Documentation/Guide/UI_Components/HtmlEditor/Formats/').

##### param(formatName): Enums.HtmlEditorFormat | String
<!-- %param(formatName)% -->

##### param(formatValue): any
<!-- %param(formatValue)% -->

---
If no content is selected, the format applies to the character typed next.

---
##### jQuery

    <!--JavaScript-->
    const htmlEditorInstance = $("#htmlEditorContainer").dxHtmlEditor("instance");
    // Makes text bold
    htmlEditorInstance.format("bold", true); 
    // Inserts a link
    htmlEditorInstance.format("link", { 
        href: "https://www.google.com/", 
        text: "Google", 
        title: "Go to Google" 
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
        makeTextBold() {
            this.htmlEditor.instance.format("bold", true);
        }
        insertGoogleLink(){
            this.htmlEditor.instance.format("link", { 
                href: "https://www.google.com/", 
                text: "Google", 
                title: "Go to Google" 
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
            makeTextBold() {
                this.htmlEditor.format("bold", true);
            },
            insertGoogleLink() {
                this.htmlEditor.format("link", { 
                    href: "https://www.google.com/", 
                    text: "Google", 
                    title: "Go to Google" 
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
        
        const makeTextBold = () => {
            htmlEditor.current.instance().format("bold", true);
        };
        const insertGoogleLink = () => {
            htmlEditor.current.instance().format("link", { 
                href: "https://www.google.com/", 
                text: "Google", 
                title: "Go to Google" 
            });
        };

        return (
            <HtmlEditor ref={htmlEditor}>
                {/* */}
            </HtmlEditor>
        );
    }

---

#####See Also#####
- [insertEmbed()](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/insertEmbed(index_type_config).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#insertEmbedindex_type_config')

<!-- import * from 'api-reference\10 UI Components\dxHtmlEditor\3 Methods\formatLine(index_length_formatName_formatValue).md' -->