---
##### shortDescription
The name of the widget that should represent the toolbar control.

---
[note]Import the specified widget's module when using [DevExtreme modules](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/'). 

Configure the specified widget in the [options](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object. You can find information on available widget options in the widget's API reference.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/ToolbarCustomization/"
}

In the following example, the [CheckBox](/api-reference/10%20UI%20Widgets/dxCheckBox '/Documentation/ApiReference/UI_Widgets/dxCheckBox/') widget with a label and a custom **valueChanged** event handler is added as a custom toolbar control. The [locateInMenu](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/locateInMenu.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#locateInMenu') option set to *"never"* ensures that the toolbar control is never hidden to the overflow menu.

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
- [items](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/')