---
id: dxHtmlEditor.Options.variables
type: dxHtmlEditorVariables
default: null
inheritsType: dxHtmlEditorVariables
---
---
##### shortDescription
Configures variables, which are placeholders to be replaced with actual values when processing text.

---
A user can insert variables in the text and remove them, but never modify them.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                // Adds a toolbar item that allows users to insert variables
                items: [ "variable" ]
            },
            variables: {
                dataSource: [ "FirstName", "LastName", "Company" ],
                escapeChar: [ "{", "}" ]
            }
        })
    })

##### Angular

    <!--HTML-->
    <dx-html-editor>
        <!-- Adds a toolbar item that allows users to insert variables -->
        <dxo-toolbar>
            <dxi-item formatName="variable"></dxi-item>
        </dxo-toolbar>
        <dxo-variables
            [dataSource]="[ 'FirstName', 'LastName', 'Company' ]"
            [escapeChar]="[ '{', '}' ]">
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
            <!-- Adds a toolbar item that allows users to insert variables -->
            <DxToolbar>
                <DxItem format-name="variable" />
            </DxToolbar>
            <DxVariables
                :data-source="variables"
                :escape-char="escapeCharacters"
            />
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxHtmlEditor, {
        DxToolbar,
        DxItem,
        DxVariables
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor,
            DxVariables
        },
        data() {
            return {
                variables: ['FirstName', 'LastName', 'Company'],
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

    const variables = ['FirstName', 'LastName', 'Company'];
    const escapeCharacters = ['{', '}'];

    export default function App() {
        return (
            <HtmlEditor>
                {/* Adds a toolbar item that allows users to insert variables */}
                <Toolbar>
                    <Item formatName="variable" />
                </Toolbar>
                <Variables
                    dataSource={variables}
                    escapeChar={escapeCharacters}
                />
            </HtmlEditor>
        );
    }

---