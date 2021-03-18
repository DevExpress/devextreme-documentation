---
id: dxHtmlEditor.formatText(index, length, formatName, formatValue)
---
---
##### shortDescription
Applies a single [text format](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') to all characters in the given range.

##### param(index): Number
A zero-based index at which to begin formatting.

##### param(length): Number
The length of the content to be formatted.      
[Embedded items](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') have a length of 1.

##### param(formatName): String | 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'size' | 'strike' | 'script' | 'underline' | 'blockquote' | 'header' | 'indent' | 'list' | 'align' | 'code-block'
A format name.

##### param(formatValue): any
A format value.

---
---
##### jQuery

    <!--JavaScript-->
    // Makes the first five characters bold
    $("#htmlEditorContainer").dxHtmlEditor("instance").formatText(0, 5, "bold", true);

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
            // Makes the first five characters bold
            this.htmlEditor.instance.formatText(0, 5, "bold", true);
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
                // Makes the first five characters bold
                this.htmlEditor.formatText(0, 5, "bold", true);
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
            // Makes the first five characters bold
            htmlEditor.current.instance.formatText(0, 5, "bold", true);
        };

        return (
            <HtmlEditor ref={htmlEditor}>
                {/* */}
            </HtmlEditor>
        );
    }

---

#####See Also#####
- [formatText(index, length, formats)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatText(index_length_formats).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatTextindex_length_formats')
- [formatLine(index, length, formatName, formatValue)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatLine(index_length_formatName_formatValue).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatLineindex_length_formatName_formatValue') | [formatLine(index, length, formats)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatLine(index_length_formats).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatLineindex_length_formats')