Toolbar items are aligned to the left (right if [rtlEnabled](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/rtlEnabled.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/#rtlEnabled') is **true**) and preserve the order they have in the **items** array.  Use the [location](/api-reference/_hidden/dxHtmlEditorToolbarItem/location.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#location') property to override the order.

This property accepts the *"before"*, *"center"*, and *"after"* values that specify a toolbar item's location relative to that of other items. In the code below, it is used to order items as follows: `alignLeft`, `alignRight`, `color`, `background`, `undo`, and `redo`. Note that `alignLeft` and `alignRight` assume the default value, *"before"*.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [
                    { name: "undo", location: "after" }, 
                    { name: "redo", location: "after" },
                    "alignLeft", "alignRight",
                    { name: "color", location: "center" }, 
                    { name: "background", location: "center" }
                ]
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-html-editor-toolbar>
            <dxi-html-editor-item name="undo" location="after"></dxi-html-editor-item>
            <dxi-html-editor-item name="redo" location="after"></dxi-html-editor-item>
            <dxi-html-editor-item name="alignLeft"></dxi-html-editor-item>
            <dxi-html-editor-item name="alignRight"></dxi-html-editor-item>
            <dxi-html-editor-item name="color" location="center"></dxi-html-editor-item>
            <dxi-html-editor-item name="background" location="center"></dxi-html-editor-item>
        </dxo-html-editor-toolbar>
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

    <template>
        <DxHtmlEditor>
            <DxToolbar>
                <DxItem
                    name="undo"
                    location="after"
                />
                <DxItem
                    name="redo"
                    location="after"
                />
                <DxItem name="alignLeft"/>
                <DxItem name="alignRight"/>
                <DxItem
                    name="color"
                    location="center"
                />
                <DxItem
                    name="background"
                    location="center"
                />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

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
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { HtmlEditor, Toolbar, Item } from 'devextreme-react/html-editor';

    export default function App() {
        return (
            <HtmlEditor>
                <Toolbar>
                    <Item
                        name="undo"
                        location="after"
                    />
                    <Item
                        name="redo"
                        location="after"
                    />
                    <Item name="alignLeft"/>
                    <Item name="alignRight"/>
                    <Item
                        name="color"
                        location="center"
                    />
                    <Item
                        name="background"
                        location="center"
                    />
                </Toolbar>
            </HtmlEditor>
        );
    }

---

If the toolbar cannot fit all the items, some of them are collected in the overflow menu. Use the [locateInMenu](/api-reference/_hidden/dxToolbarItem/locateInMenu.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#locateInMenu') property to change this behavior:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [
                    // ...
                    { name: "undo", locateInMenu: "always" }, 
                    { name: "color", locateInMenu: "never" }
                ]
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-html-editor-toolbar>
            <!-- ... -->
            <dxi-html-editor-item name="undo" locateInMenu="always"></dxi-html-editor-item>
            <dxi-html-editor-item name="color" locateInMenu="never"></dxi-html-editor-item>
        </dxo-html-editor-toolbar>
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

    <template>
        <DxHtmlEditor>
            <DxToolbar>
                <DxItem
                    name="undo"
                    locate-in-menu="always"
                />
                <DxItem
                    name="color"
                    locate-in-menu="never"
                />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

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
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { HtmlEditor, Toolbar, Item } from 'devextreme-react/html-editor';

    export default function App() {
        return (
            <HtmlEditor>
                <Toolbar>
                    <Item
                        name="undo"
                        locateInMenu="always"
                    />
                    <Item
                        name="color"
                        locateInMenu="never"
                    />
                </Toolbar>
            </HtmlEditor>
        );
    }

---