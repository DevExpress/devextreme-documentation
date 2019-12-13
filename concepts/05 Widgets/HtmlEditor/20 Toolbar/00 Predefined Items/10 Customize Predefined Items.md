To customize a button, assign its [name](/concepts/05%20Widgets/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Predefined_Items/') to the [formatName](/api-reference/_hidden/dxHtmlEditorToolbarItem/formatName.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName') option and specify [button options](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/') in the [options](/api-reference/_hidden/dxToolbarItem/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object: 

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [{
                    formatName: "clear", 
                    options: { icon: "clear", type: "danger" }
                }, // ...
                ]
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items: any = [{
            formatName: "clear", 
            options: { icon: "clear", type: "danger" }
        }, // ...
        ];
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

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .Toolbar(t => t
            .Items(i => { 
                i.Add().FormatName("clear")
                    .Widget(w => w.Button()
                        .Icon("clear")
                        .Type(ButtonType.Danger)
                    );
            })
        )
    )

---

To customize a select box, specify [select box options](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/') in the [options](/api-reference/_hidden/dxToolbarItem/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object in addition to the [formatName](/api-reference/_hidden/dxHtmlEditorToolbarItem/formatName.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName') and [formatValues](/api-reference/_hidden/dxHtmlEditorToolbarItem/formatValues.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatValues') options:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [{
                    formatName: "size",
                    formatValues: ["11px", "14px", "16px"],
                    options: {
                        width: 150
                    }
                }, // ...
                ]
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items: any = [{
            formatName: "size",
            formatValues: ["11px", "14px", "16px"],
            options: {
                width: 150
            }
        }, // ...
        ];
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

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .Toolbar(t => t
            .Items(i => { 
                i.Add().FormatName("size")
                    .FormatValues(new[] { "11px", "14px", "16px" })
                    .Widget(w => w.SelectBox()
                        .Width(150)
                    );
            })
        )
    )

---

#####See Also#####
- [Add a Custom Item](/concepts/05%20Widgets/HtmlEditor/20%20Toolbar/20%20Add%20a%20Custom%20Item.md '/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Add_a_Custom_Item/')