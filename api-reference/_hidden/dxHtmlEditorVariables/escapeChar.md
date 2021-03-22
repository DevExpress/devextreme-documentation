---
id: dxHtmlEditorVariables.escapeChar
type: String | Array<String>
default: ''
---
---
##### shortDescription
Specifies the special character(s) that should surround the variables.

---
---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            // ...
            variables: {
                dataSource: [ "FirstName" ],
                escapeChar: [ "{", "}" ] // {FirstName}
                // or
                // escapeChar: "##" // ##FirstName##
            }
        })
    })

#####Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-variables
            [dataSource]="[ 'FirstName' ]"
            [escapeChar]="[ '{', '}' ]"> <!-- {FirstName} -->
            <!-- or -->
            <!-- escapeChar="##"> --> <!-- ##FirstName## -->
        </dxo-variables>
    </dx-html-editor>

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

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor ... >
            <DxVariables
                :data-source="variables"
                :escape-char="escapeCharacters" /> <!-- {FirstName} -->
                <!-- or -->
                <!-- escape-char="##" /> --> <!-- ##FirstName## -->
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxHtmlEditor, {
        DxVariables
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor,
            DxVariables
        },
        data() {
            return {
                variables: ['FirstName'],
                escapeCharacters: ['{', '}']
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import HtmlEditor, {
        Variables
    } from 'devextreme-react/html-editor';

    const variables = ['FirstName'];
    const escapeCharacters = ['{', '}'];

    export default function App() {
        return (
            <HtmlEditor>
                <Variables
                    dataSource={variables}
                    escapeChar={escapeCharacters} /> {/* {FirstName} */}
                    {/* or */}
                    {/* escapeChar="##" /> */} {/* ##FirstName## */}
            </HtmlEditor>
        );
    }

---