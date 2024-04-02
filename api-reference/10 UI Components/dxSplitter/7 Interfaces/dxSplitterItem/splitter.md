---
id: dxSplitterItem.splitter
type: dxSplitter_Options
default: undefined
---
---
##### shortDescription
Specifies a [splitter](/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/) inside an item.

---
Use this property to make the item a nested Splitter UI component.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#splitter").dxSplitter({
            items: [{
                    text: "Pane 1"
                },
                {
                    splitter: {
                        orientation: "vertical",
                        items: [{
                                text: "Pane 2"
                            },
                            {
                                splitter: {
                                    orientation: "horizontal",
                                    items: [{
                                            text: "Pane 3"
                                        },
                                        {
                                            text: "Pane 4"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    text: "Pane 5"
                }
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-splitter id="splitter">
        <dxi-item text="Pane 1"></dxi-item>
        <dxi-item>
            <dx-splitter orientation="vertical">
                <dxi-item text="Pane 2"></dxi-item>
                <dxi-item>
                    <dx-splitter>
                        <dxi-item text="Pane 3"></dxi-item>
                        <dxi-item text="Pane 4"></dxi-item>
                    </dx-splitter>
                </dxi-item>
            </dx-splitter>
        </dxi-item>
        <dxi-item text="Pane 5"></dxi-item>
    </dx-splitter>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter class="splitter">
            <DxItem text="Pane 1" />
            <DxItem>
                <DxSplitter orientation="vertical">
                    <DxItem text="Pane 2" />
                    <DxItem>
                        <DxSplitter>
                            <DxItem text="Pane 3" />
                            <DxItem text="Pane 4" />
                        </DxSplitter>
                    </DxItem>
                </DxSplitter>
            </DxItem>
            <DxItem text="Pane 5" />
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
            <Splitter>
                <Item text="Pane 1" />
                <Item>
                    <Splitter orientation="vertical">
                        <Item text="Pane 2" />
                        <Item>
                            <Splitter>
                                <Item text="Pane 3" />
                                <Item text="Pane 4" />
                            </Splitter>
                        </Item>
                    </Splitter>
                </Item>
                <Item text="Pane 5" />
            </Splitter>
        </React.Fragment>
    );

    export default App;

---