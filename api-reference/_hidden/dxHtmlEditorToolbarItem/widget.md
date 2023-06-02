---
##### shortDescription
The name of the UI component that should represent the toolbar item.

---
[note]Import the specified UI component's module when using [DevExtreme modules](/concepts/Common/Modularity '/Documentation/Guide/Common/Modularity/'). 

Configure the specified UI component in the [options](/api-reference/_hidden/dxHtmlEditorToolbar/items/options.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#options') object. You can find information on available UI component properties in the UI component's API reference.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/ToolbarCustomization/"
}

In the following example, the [CheckBox](/api-reference/10%20UI%20Widgets/dxCheckBox '/Documentation/ApiReference/UI_Components/dxCheckBox/') UI component is added as a custom toolbar item. It has a label and a custom **valueChanged** event handler. The toolbar item's [locateInMenu](/api-reference/_hidden/dxToolbarItem/locateInMenu.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#locateInMenu') property is set to *"never"* to specify that the toolbar item should never be hidden in the overflow menu.

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

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar>
            <dxi-item
                widget="dxCheckBox"
                [options]="checkboxOptions"
                locateInMenu="never">
            </dxi-item>
        </dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule, DxCheckBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        checkboxOptions = {
            text: "My Format",
            onValueChanged: function(e) {
                // Implement your logic here
            },
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule,
            DxCheckBoxModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor ... >
            <DxToolbar>
                <DxItem
                    widget="dxCheckBox"
                    :options="checkboxOptions"
                    locate-in-menu="never"
                />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxHtmlEditor, {
        DxToolbar,
        DxItem
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor,
            DxToolbar,
            DxItem
        },
        data() {
            return {
                checkboxOptions: {
                    text: "My Format",
                    onValueChanged: function(e) {
                        // Implement your logic here
                    },
                    // ...
                }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import { useMemo } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import HtmlEditor, {
        Toolbar,
        Item
    } from 'devextreme-react/html-editor';

    export default function App() {
        const checkboxOptions = useMemo(() => {
            return {
                text: "My Format",
                onValueChanged: function(e) {
                    // Implement your logic here
                },
                // ...
            }
        }, []);

        return (
            <HtmlEditor>
                <Toolbar>
                    <Item
                        widget="dxCheckBox"
                        options={checkboxOptions}
                        locateInMenu="never"
                    />
                </Toolbar>
            </HtmlEditor>
        );
    }

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
- [items](/api-reference/_hidden/dxHtmlEditorToolbar/items '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/')
