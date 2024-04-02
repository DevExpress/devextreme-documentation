---
id: dxSplitterItem.collapsedSize
type: Number | String
default: undefined
---
---
##### shortDescription
Specifies the size of a collapsible item (pane) when collapsed in pixels or as a percentage.  

---
---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#splitter").dxSplitter({
            items: [
                {
                    // ...
                    collapsedSize: "20",
                }
            ],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-splitter>
        <dxi-item ...
            collapsedSize="20"
        >
        </dxi-item>
    </dx-splitter>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter item-template="item">
            <DxItem ... 
                collapsedSize="20"
            />
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
            <Splitter itemRender={itemRender}>
                <Item ... 
                    collapsedSize="20"
                />
            </Splitter>
        </React.Fragment>
    );

    export default App;

---

[note] The **collapsedSize** value must not exceed [maxSize](/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#maxSize) or be less then [minSize](/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#minSize).