To customize a button, assign its [name](/concepts/05%20UI%20Components/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Predefined_Items/') to the [name](/api-reference/_hidden/dxHtmlEditorToolbarItem/name.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#name') property and specify [button properties](/api-reference/10%20UI%20Components/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Components/dxButton/Configuration/') in the [options](/api-reference/_hidden/dxHtmlEditorToolbar/items/options.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#options') object: 

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [{
                    name: "clear", 
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
                name="clear"
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
                    name="clear"
                />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
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
                            name="clear"
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
                i.Add().Name("clear")
                    .Widget(w => w.Button()
                        .Icon("clear")
                        .Type(ButtonType.Danger)
                    );
            })
        )
    )

---

To customize a select box, specify [select box properties](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/') in the [options](/api-reference/_hidden/dxHtmlEditorToolbar/items/options.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#options') object in addition to the [name](/api-reference/_hidden/dxHtmlEditorToolbarItem/name.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#name') and [acceptedValues](/api-reference/_hidden/dxHtmlEditorToolbarItemacceptedtValues.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#acceptedValues') properties:

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [{
                    name: "size",
                    acceptedValues: ["11px", "14px", "16px"],
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
                [acceptedValues]="sizeAcceptedValues"
                name="size"
            />
        </dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        sizeAcceptedValues = ["11px", "14px", "16px"];
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
                    :accepted-values="sizeAcceptedValues"
                    name="size"
                />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
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
                sizeAcceptedValues: ["11px", "14px", "16px"]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { HtmlEditor, Toolbar, Item } from 'devextreme-react/html-editor';

    const sizeFormatOptions = { width: 150 };
    const sizeAcceptedValues = ["11px", "14px", "16px"];

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor>
                    <Toolbar>
                        <Item
                            options={sizeFormatOptions}
                            acceptedValues={sizeAcceptedValues}
                            name="size"
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
                i.Add().Name("size")
                    .AcceptedValues(new[] { "11px", "14px", "16px" })
                    .Widget(w => w.SelectBox()
                        .Width(150)
                    );
            })
        )
    )

---

#####See Also#####
- [Add a Custom Item](/concepts/05%20UI%20Components/HtmlEditor/20%20Toolbar/20%20Add%20a%20Custom%20Item.md '/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Add_a_Custom_Item/')
