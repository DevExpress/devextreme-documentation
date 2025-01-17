---
id: dxHtmlEditorToolbarItem.name
type: Enums.HtmlEditorPredefinedToolbarItem | String
---
---
##### shortDescription
Specifies the predefined item that this object customizes or a format with multiple choices.

---
To customize a [predefined item](/concepts/05%20UI%20Components/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Predefined_Items/'), assign its name to this property and specify the other item properties.

This property also accepts names of formats with multiple choices. In addition to the format name, specify [acceptedValues](/api-reference/_hidden/dxHtmlEditorToolbarItem/acceptedValues.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#acceptedValues'). On the toolbar, such formats are represented by [SelectBox](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/') UI components whose [properties](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/') you can specify in the [options](/api-reference/_hidden/dxHtmlEditorToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#options') object.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/"
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
                    name: "header",
                    acceptedValues: [1, 2, 3, false],
                    options: {
                        width: 150
                    }
                }, {
                    name: "size",
                    acceptedValues: ["11px", "14px", "16px"]
                }]
            }
        })
    })

#####Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar>
            <dxi-item
                name="header"
                [acceptedValues]="[1, 2, 3, false]"
                [options]="{ width: 150 }">
            </dxi-item>
            <dxi-item
                name="size"
                [acceptedValues]="['11px', '14px', '16px']">
            </dxi-item>
        </dxo-toolbar>
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
            <DxToolbar>
                <DxItem
                    name="header"
                    :accepted-values="headerFormatValues" 
                    :options="headerFormatOptions"
                />
                <DxItem
                    name="size"
                    :accepted-values="sizeFormatValues"
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
                headerFormatValues: [1, 2, 3, false],
                headerFormatOptions: { width: 150 },
                sizeFormatValues: ["11px", "14px", "16px"]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import HtmlEditor, {
        Toolbar,
        Item
    } from 'devextreme-react/html-editor';

    const headerFormatValues = [1, 2, 3, false];
    const headerFormatOptions = { width: 150 };
    const sizeFormatValues = ["11px", "14px", "16px"];

    export default function App() {
        return (
            <HtmlEditor>
                <Toolbar>
                    <Item
                        name="header"
                        acceptedValues={headerFormatValues} 
                        options={headerFormatOptions}
                    />
                    <Item
                        name="size"
                        acceptedValues={sizeFormatValues}
                    />
                </Toolbar>
            </HtmlEditor>
        );
    }

---

Refer to the [Formats](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats/00%20Formats.md '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') article for a full list of available formats.

#####See Also#####
- [widget](/api-reference/_hidden/dxHtmlEditorToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#widget')