---
##### shortDescription
The name of the widget that should represent the toolbar item.

---
[note]Import the specified widget's module when using [DevExtreme modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/'). 

Configure the specified widget in the [options](/api-reference/_hidden/dxHtmlEditorToolbar/items/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object. You can find information on available widget options in the widget's API reference.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/ToolbarCustomization/"
}

In the following example, the [CheckBox](/api-reference/10%20UI%20Widgets/dxCheckBox '/Documentation/ApiReference/UI_Widgets/dxCheckBox/') widget is added as a custom toolbar item. It has a label and a custom **valueChanged** event handler. The toolbar item's [locateInMenu](/api-reference/_hidden/dxToolbarItem/locateInMenu.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#locateInMenu') option is set to *"never"* to specify that the toolbar item should never be hidden in the overflow menu.

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [ // ...
                {
                    widget: "dxCheckBox",
                    options: {
                        text: "My Format",  
                        onValueChanged: function(e) {
                            // Implement your logic here
                        },
                        // ...
                    },
                    locateInMenu: "never"
                }]
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule, DxCheckBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items: any = [ // ...
        {
            widget: "dxCheckBox",
            options: {
                text: "My Format",
                onValueChanged: function(e) {
                    // Implement your logic here
                },
                // ...
            },
            locateInMenu: "never"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule,
            DxCheckBoxModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar [items]="items"></dxo-toolbar>
    </dx-html-editor>

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .Toolbar(t => t 
            .Items(i => {
                i.Add().LocateInMenu(ToolbarItemLocateInMenuMode.Never)
                    .Widget(w => w.CheckBox()
                        .Text("My Format")
                        .OnValueChanged("myFormat_valueChanged")
                    );
            })
        )
    )

    <script>
        function myFormat_valueChanged(e) {
            // Implement your logic here
        }
    </script>

---

#####See Also#####
- [items](/api-reference/_hidden/dxHtmlEditorToolbar/items '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/')
