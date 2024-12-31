---
id: dxHtmlEditor.formatLine(index, length, formats)
---
---
##### shortDescription
Applies several [block formats](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats/00%20Formats.md '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') to all lines in the given range.

##### param(index): Number
<!-- %param(index)% -->

##### param(length): Number
<!-- %param(length)% -->

##### param(formats): Object
Formats to be applied.      
This object should have the following structure: `{ "formatName1": "formatValue1", ... }`           
Pass **null** to remove all formats.

---
[note] The entire line will be formatted even if only a single character from it falls within the given range.


---
##### jQuery

    <!--JavaScript-->
    // Aligns the first line to the right and turns it into an ordered list's item.
    $("#htmlEditorContainer").dxHtmlEditor("instance").formatLine(0, 1, { "align": "right", "list": "ordered" });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent, { static: false }) htmlEditor: DxHtmlEditorComponent;
        // Prior to Angular 8
        // @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        applyLineFormats() {
            // Aligns the first line to the right and turns it into an ordered list's item.
            this.htmlEditor.instance.formatLine(0, 1, { "align": "right", "list": "ordered" });
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
            applyLineFormats() {
                this.htmlEditor.formatLine(0, 1, { "align": "right", "list": "ordered" });
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
        
        const applyLineFormats = () => {
            htmlEditor.current.instance().formatLine(0, 1, { "align": "right", "list": "ordered" });
        };

        return (
            <HtmlEditor ref={htmlEditor}>
                {/* */}
            </HtmlEditor>
        );
    }

---

#####See Also#####
- [formatLine(index, length, formatName, formatValue)](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/formatLine(index_length_formatName_formatValue).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatLineindex_length_formatName_formatValue')
- [formatText(index, length, formatName, formatValue)](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/formatText(index_length_formatName_formatValue).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatTextindex_length_formatName_formatValue') | [formatText(index, length, formats)](/api-reference/10%20UI%20Components/dxHtmlEditor/3%20Methods/formatText(index_length_formats).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatTextindex_length_formats')

<!-- import * from 'api-reference\10 UI Components\dxHtmlEditor\3 Methods\formatLine(index_length_formatName_formatValue).md' -->