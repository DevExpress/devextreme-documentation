---
id: dxHtmlEditorToolbarItem.formatName
acceptValues: 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'image' | 'size' | 'strike' | 'subscript' | 'superscript' | 'underline' | 'blockquote' | 'header' | 'increaseIndent' | 'decreaseIndent' | 'orderedList' | 'bulletList' | 'alignLeft' | 'alignCenter' | 'alignRight' | 'alignJustify' | 'codeBlock' | 'variable' | 'separator' | 'undo' | 'redo' | 'clear' | 'insertTable' | 'insertRowAbove' | 'insertRowBelow' | 'insertColumnLeft' | 'insertColumnRight' | 'deleteColumn' | 'deleteRow' | 'deleteTable'
type: String
---
---
##### shortDescription
Specifies the predefined item that this object customizes or a format with multiple choices.

---
To customize a [predefined item](/concepts/05%20Widgets/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Predefined_Items/'), assign its name to this option and specify the other item options.

This option also accepts names of formats with multiple choices. In addition to the format name, specify [formatValues](/api-reference/_hidden/dxHtmlEditorToolbarItem/formatValues.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatValues'). On the toolbar, such formats are represented by [SelectBox](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/') widgets whose [options](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/') you can specify in the [options](/api-reference/_hidden/dxHtmlEditorToolbar/items/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/"
}

In the following code, the `header` and `size` formats are configured as described in the previous paragraph:


---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [ // ...
                {
                    formatName: "header",
                    formatValues: [1, 2, 3, false],
                    options: {
                        width: 150
                    }
                }, {
                    formatName: "size",
                    formatValues: ["11px", "14px", "16px"]
                }]
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items: any = [ // ...
        {
            formatName: "header",
            formatValues: [1, 2, 3, false],
            options: {
                width: 150
            }
        }, {
            formatName: "size",
            formatValues: ["11px", "14px", "16px"]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar [items]="items"></dxo-toolbar>
    </dx-html-editor>   

---

Refer to the [Formats](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/Widgets/HtmlEditor/Formats/') article for a full list of available formats.

#####See Also#####
- [widget](/api-reference/_hidden/dxHtmlEditorToolbarItem/widget.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#widget')