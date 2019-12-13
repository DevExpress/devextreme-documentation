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
#####jQuery

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

#####Angular

    <!--HTML-->
    <dx-html-editor>
        <!-- Adds a toolbar item that allows users to insert variables -->
        <dxo-toolbar [items]="[ 'variable' ]"></dxo-toolbar>
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

---