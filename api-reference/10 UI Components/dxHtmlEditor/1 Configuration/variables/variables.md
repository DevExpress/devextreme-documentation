---
id: dxHtmlEditor.Options.variables
type: dxHtmlEditorVariables
default: null
inheritsType: dxHtmlEditorVariables
---
---
##### shortDescription
Configures variables that are placeholders for values created once text is processed.

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
        <dxo-html-editor-toolbar>
            <dxi-html-editor-item name="variable"></dxi-html-editor-item>
        </dxo-html-editor-toolbar>
        <dxo-html-editor-variables
            [dataSource]="[ 'FirstName', 'LastName', 'Company' ]"
            [escapeChar]="[ '{', '}' ]">
        </dxo-html-editor-variables>
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
                <DxItem name="variable" />
            </DxToolbar>
            <DxVariables
                :data-source="variables"
                :escape-char="escapeCharacters"
            />
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

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
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

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
                    <Item name="variable" />
                </Toolbar>
                <Variables
                    dataSource={variables}
                    escapeChar={escapeCharacters}
                />
            </HtmlEditor>
        );
    }

---
To learn how to implement mail merge with variables, refer to this example:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-htmleditor-mail-merge-with-variables"
}