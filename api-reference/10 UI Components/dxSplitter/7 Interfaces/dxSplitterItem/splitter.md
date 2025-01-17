---
id: dxSplitterItem.splitter
type: dxSplitter_Options | undefined
default: undefined
---
---
##### shortDescription
Specifies a [splitter](/api-reference/10%20UI%20Components/dxSplitter/1%20Configuration '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/') inside an item (pane).

---
Use this property to make the item a nested Splitter UI component.

![Splitter with a nested splitter](/images/Splitter/splitter.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#splitter").dxSplitter({
            orientation: "vertical",
            items: [{
                    text: "Top Panel"
                },
                {
                    splitter: {
                        items: [{
                                text: "Nested Left Panel"
                            },{
                                text: "Nested Central Panel"
                            },{
                                text: "Nested Right Panel"
                            }
                        ]
                    }
                }
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-splitter id="splitter" orientation="vertical">
        <dxi-item text="Top Panel"></dxi-item>
        <dxi-item>
            <dx-splitter>
                <dxi-item text="Nested Left Panel"></dxi-item>
                <dxi-item text="Nested Central Panel"></dxi-item>
                <dxi-item text="Nested Right Panel"></dxi-item>
            </dx-splitter>
        </dxi-item>
    </dx-splitter>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter class="splitter" orientation="vertical">
            <DxItem text="Top Panel" />
            <DxItem>
                <DxSplitter>
                    <DxItem text="Nested Left Panel" />
                    <DxItem text="Nested Central Panel" />
                    <DxItem text="Nested Right Panel" />
                </DxSplitter>
            </DxItem>
        </DxSplitter>
    </template>

    <script setup>
    import { DxSplitter, DxItem } from "devextreme-vue/splitter";
    </script>

##### React

    <!-- tab: App.js -->
    import React from "react";
    import Splitter, { Item } from "devextreme-react/splitter";

    const App = () => (
        <React.Fragment>
            <Splitter orientation="vertical">
                <Item text="Top Panel" />
                <Item>
                    <Splitter>
                        <Item text="Nested Left Panel" />
                        <Item text="Nested Central Panel" />
                        <Item text="Nested Right Panel" />
                    </Splitter>
                </Item>
            </Splitter>
        </React.Fragment>
    );

    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Splitter/Overview/"
}