To customize a button, assign its [name](/concepts/05%20Widgets/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Predefined_Items/') to the [formatName](/api-reference/_hidden/dxHtmlEditorToolbarItem/formatName.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName') option and specify [button options](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/') in the [options](/api-reference/_hidden/dxHtmlEditorToolbar/items/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object: 

---
##### jQuery

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

##### Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar>
            <dxi-item
                [options]="clearFormatOptions"
                formatName="clear"
            />
        </dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        clearFormatOptions = { icon: "clear", type: "danger" };
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxHtmlEditor>
            <DxToolbar>
                <DxItem
                    :options="clearFormatOptions"
                    format-name="clear"
                />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxHtmlEditor,
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
                clearFormatOptions: { icon: 'clear', type: 'danger' }
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { HtmlEditor, Toolbar, Item } from 'devextreme-react/html-editor';

    const clearFormatOptions = { icon: 'clear', type: 'danger' };

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor>
                    <Toolbar>
                        <Item
                            options={clearFormatOptions}
                            formatName="clear"
                        />
                    </Toolbar>
                </HtmlEditor>
            );
        }
    }

    export default App;

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

To customize a select box, specify [select box options](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/') in the [options](/api-reference/_hidden/dxHtmlEditorToolbar/items/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object in addition to the [formatName](/api-reference/_hidden/dxHtmlEditorToolbarItem/formatName.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName') and [formatValues](/api-reference/_hidden/dxHtmlEditorToolbarItem/formatValues.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatValues') options:

---
##### jQuery

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

##### Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar>
            <dxi-item
                [options]="sizeFormatOptions"
                [formatValues]="sizeFormatValues"
                formatName="size"
            />
        </dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        sizeFormatValues = ["11px", "14px", "16px"];
        sizeFormatOptions = { width: 150 };
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxHtmlEditor>
            <DxToolbar>
                <DxItem
                    :options="sizeFormatOptions"
                    :format-values="sizeFormatValues"
                    format-name="size"
                />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxHtmlEditor,
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
                sizeFormatOptions: { width: 150 },
                sizeFormatValues: ["11px", "14px", "16px"]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { HtmlEditor, Toolbar, Item } from 'devextreme-react/html-editor';

    const sizeFormatOptions = { width: 150 };
    const sizeFormatValues = ["11px", "14px", "16px"];

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor>
                    <Toolbar>
                        <Item
                            options={sizeFormatOptions}
                            formatValues={sizeFormatValues}
                            formatName="size"
                        />
                    </Toolbar>
                </HtmlEditor>
            );
        }
    }

    export default App;

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