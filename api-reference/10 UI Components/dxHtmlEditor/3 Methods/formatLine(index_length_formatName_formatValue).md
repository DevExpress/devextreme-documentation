---
id: dxHtmlEditor.formatLine(index, length, formatName, formatValue)
---
---
##### shortDescription
Applies a single [block format](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats/00%20Formats.md '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') to all lines in the given range.

##### param(index): Number
A zero-based index at which to begin formatting.

##### param(length): Number
The length of the content to be formatted.      
[Embedded items](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats/00%20Formats.md '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') have a length of 1.

##### param(formatName): Enums.HtmlEditorFormat | String
A [format name](/api-reference/_hidden/dxHtmlEditorToolbarItem/name.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#name').

##### param(formatValue): any
A format value.         
Pass **null** to remove a format.

---
[note] The entire line will be formatted even if only a single character from it falls within the given range.

---
##### jQuery

    <!--JavaScript-->
    // Aligns the first line to the right
    $("#htmlEditorContainer").dxHtmlEditor("instance").formatLine(0, 1, "align", "right");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent, { static: false }) htmlEditor: DxHtmlEditorComponent;
        // Prior to Angular 8
        // @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        alignFirstLineToRight() {
            this.htmlEditor.instance.formatLine(0, 1, "align", "right");
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
            alignFirstLineToRight() {
                this.htmlEditor.formatLine(0, 1, "align", "right");
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
        
        const alignFirstLineToRight = () => {
            htmlEditor.current.instance().formatLine(0, 1, "align", "right");
        };

        return (
            <HtmlEditor ref={htmlEditor}>
                {/* */}
            </HtmlEditor>
        );
    }

---

#####See Also#####
- [formatLine(index, length, formats)](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/formatLine(index_length_formats).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatLineindex_length_formats')
- [formatText(index, length, formatName, formatValue)](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/formatText(index_length_formatName_formatValue).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatTextindex_length_formatName_formatValue') | [formatText(index, length, formats)](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/formatText(index_length_formats).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatTextindex_length_formats')