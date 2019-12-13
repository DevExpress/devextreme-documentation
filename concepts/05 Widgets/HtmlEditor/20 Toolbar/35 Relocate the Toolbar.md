The toolbar occupies the top part of the **HtmlEditor** and is rendered inside the widget's container. To relocate the toolbar, specify a different [container](/api-reference/_hidden/dxHtmlEditorToolbar/container.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/#container') for the toolbar.

In the following code, the toolbar is placed in a separate `<div>` under the **HtmlEditor**:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                // ...
                container: "#htmlEditorFooter"
            }
        })
    })

    <!--HTML-->
    <div id="htmlEditorContainer"></div>
    <div id="htmlEditorFooter"></div>

#####Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar container="#htmlEditorFooter"></dxo-toolbar>
    </dx-html-editor>
    <div id="htmlEditorFooter"></div>

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
