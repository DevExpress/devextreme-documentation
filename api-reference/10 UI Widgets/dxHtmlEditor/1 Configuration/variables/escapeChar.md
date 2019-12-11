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

---